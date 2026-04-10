import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Upload, X, Play, Image as ImageIcon, Video, Lock, Settings, UserCheck, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/lib/supabaseClient";

interface MediaItem {
  id: string;
  file_name: string;
  file_url: string;
  file_type: 'image' | 'video';
  uploaded_at: string;
}

const Gallery = () => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isUploading, setIsUploading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    // 1. Fetch Auth State via getSession
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAdmin(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsAdmin(!!session);
    });

    // 2. Fetch Media
    fetchMedia();

    return () => subscription.unsubscribe();
  }, []);

  const fetchMedia = async () => {
    setIsLoading(true);
    const { data, error } = await supabase
      .from('gallery_items')
      .select('*')
      .order('uploaded_at', { ascending: false });

    if (error) {
      toast({
        title: "Error fetching gallery",
        description: error.message,
        variant: "destructive",
      });
    } else if (data) {
      setMediaItems(data as MediaItem[]);
    }
    setIsLoading(false);
  };

  const handleAdminLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: adminEmail,
      password: adminPassword,
    });

    if (error) {
      toast({
        title: "Access Denied",
        description: error.message,
        variant: "destructive",
      });
    } else {
      setShowAdminLogin(false);
      setAdminEmail("");
      setAdminPassword("");
      toast({
        title: "Admin Access Granted",
        description: "You now have access to upload and manage media files.",
      });
    }
  };

  const handleAdminLogout = async () => {
    await supabase.auth.signOut();
    toast({
      title: "Admin Logout",
      description: "You have been logged out of admin mode.",
    });
  };

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileExt = file.name.split('.').pop();
      const fileName = `${Math.random().toString(36).substring(2)}-${Date.now()}.${fileExt}`;
      const filePath = `uploads/${fileName}`;

      // Upload to Storage bucket "gallery"
      const { error: uploadError } = await supabase.storage
        .from('gallery')
        .upload(filePath, file);

      if (uploadError) {
        toast({
          title: "Upload Failed",
          description: uploadError.message,
          variant: "destructive",
        });
        continue;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('gallery')
        .getPublicUrl(filePath);

      // Insert to DB row
      const fileType = file.type.startsWith('video/') ? 'video' : 'image';
      const { error: dbError } = await supabase
        .from('gallery_items')
        .insert([
          {
            file_name: file.name,
            file_url: publicUrl,
            file_type: fileType,
          }
        ]);

      if (dbError) {
        toast({
          title: "Database Error",
          description: dbError.message,
          variant: "destructive",
        });
      }
    }

    setIsUploading(false);
    toast({
      title: "Upload Completed",
      description: "Successfully processed the uploaded files.",
    });

    if (fileInputRef.current) fileInputRef.current.value = '';
    fetchMedia();
  };

  const handleRemoveItem = async (item: MediaItem) => {
    // Parse relative path from publicUrl mapping
    const bucketTag = '/public/gallery/';
    const splitIndex = item.file_url.indexOf(bucketTag);
    
    if (splitIndex !== -1) {
      const bucketAndPathStr = item.file_url.substring(splitIndex + bucketTag.length);
      const { error: storageError } = await supabase.storage
        .from('gallery')
        .remove([bucketAndPathStr]);
      
      if (storageError) {
        toast({
          title: "Failed to delete file",
          description: storageError.message,
          variant: "destructive",
        });
        return;
      }
    }

    const { error: dbError } = await supabase
      .from('gallery_items')
      .delete()
      .eq('id', item.id);

    if (dbError) {
      toast({
        title: "Failed to remove database entry",
        description: dbError.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "File Removed",
        description: "Media file has been permanently removed.",
      });
      fetchMedia();
    }
  };

  const handleUploadClick = () => {
    if (!isAdmin) {
      toast({
        title: "Access Denied",
        description: "Only administrators can upload media files.",
        variant: "destructive",
      });
      return;
    }
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img 
                src="/uploads/432c84aa-78f0-480f-94c9-6cff82cd5eda.png" 
                alt="WeAreYouth Foundation Logo" 
                className="h-10 w-10 mr-3"
              />
              <Link to="/" className="text-2xl font-bold text-primary">WeAreYouth Foundation</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link to="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/journey" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Our Journey</Link>
                <Link to="/education" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium">Education</Link>
                <Link to="/gallery" className="text-primary px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-orange-500 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Admin Controls and Media Stats - Top Right */}
        <div className="absolute top-4 right-4 z-20 space-y-3">
          <div className="flex justify-end">
            {!isAdmin ? (
              <Button
                onClick={() => setShowAdminLogin(true)}
                size="sm"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
              >
                <Lock className="mr-2 h-4 w-4" />
                Admin
              </Button>
            ) : (
              <div className="flex gap-2 items-center">
                <div className="bg-green-500/20 backdrop-blur-sm border border-green-400/30 text-white px-3 py-1 rounded-lg flex items-center text-sm">
                  <UserCheck className="mr-1 h-3 w-3" />
                  Admin
                </div>
                <Button
                  onClick={handleAdminLogout}
                  size="sm"
                  variant="outline"
                  className="bg-transparent border-white/20 text-white hover:bg-white/10"
                >
                  Logout
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Our Gallery</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Explore moments from our programs, events, and the incredible impact we're making together
            </p>
          </div>
        </div>
      </section>

      {/* Admin Login Dialog */}
      {showAdminLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <h3 className="text-xl font-bold mb-4">Admin Login</h3>
            <div className="space-y-4 mb-4">
              <input
                type="email"
                placeholder="Admin email"
                value={adminEmail}
                onChange={(e) => setAdminEmail(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
              <input
                type="password"
                placeholder="Enter admin password"
                value={adminPassword}
                onChange={(e) => setAdminPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
                onKeyPress={(e) => e.key === 'Enter' && handleAdminLogin()}
              />
            </div>
            <div className="flex gap-2">
              <Button onClick={handleAdminLogin} className="flex-1">
                Login
              </Button>
              <Button
                onClick={() => {
                  setShowAdminLogin(false);
                  setAdminPassword("");
                  setAdminEmail("");
                }}
                variant="outline"
                className="flex-1"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Upload Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Media Management</h2>
            <p className="text-gray-600 mb-8 text-lg">
              {isAdmin ? "Upload and manage" : "View our collection of"} images and videos to showcase our work
            </p>
            {isAdmin && (
              <div className="flex justify-center">
                <Button
                  onClick={handleUploadClick}
                  disabled={isUploading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  size="lg"
                >
                  {isUploading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <Upload className="mr-2 h-5 w-5" />
                  )}
                  {isUploading ? "Uploading..." : "Upload Media"}
                </Button>
              </div>
            )}
              
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/*"
              onChange={handleFileUpload}
              className="hidden"
            />
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="h-12 w-12 text-primary animate-spin" />
            </div>
          ) : mediaItems.length === 0 ? (
            <div className="text-center py-20">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No media files yet</h3>
              <p className="text-gray-500">Upload some images or videos to get started</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {mediaItems.map((item) => (
                <Card key={item.id} className="group relative overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    {item.file_type === 'image' ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="cursor-pointer">
                            <img
                              src={item.file_url}
                              alt={item.file_name}
                              className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity" />
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl">
                          <img
                            src={item.file_url}
                            alt={item.file_name}
                            className="w-full h-auto max-h-[80vh] object-contain"
                          />
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <div className="relative">
                        <video
                          src={item.file_url}
                          className="w-full h-48 object-cover"
                          controls
                          preload="metadata"
                        />
                        <div className="absolute top-2 left-2 bg-black bg-opacity-60 text-white px-2 py-1 rounded flex items-center text-sm">
                          <Video className="h-3 w-3 mr-1" />
                          Video
                        </div>
                      </div>
                    )}
                    
                    {/* Remove button - only visible to admin */}
                    {isAdmin && (
                      <Button
                        size="sm"
                        variant="destructive"
                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity h-8 w-8 p-0"
                        onClick={() => handleRemoveItem(item)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-medium text-gray-900 truncate">{item.file_name.replace(/\.[^/.]+$/, "")}</h3>
                    <p className="text-sm text-gray-500 capitalize">{item.file_type}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Statistics - Only visible to admin */}
      {isAdmin && (
        <section className="py-8 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {mediaItems.filter(item => item.file_type === 'image').length}
                </div>
                <div className="text-sm text-gray-600">Images</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {mediaItems.filter(item => item.file_type === 'video').length}
                </div>
                <div className="text-sm text-gray-600">Videos</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-2xl font-bold text-green-600 mb-1">{mediaItems.length}</div>
                <div className="text-sm text-gray-600">Total Media Files</div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Gallery;
