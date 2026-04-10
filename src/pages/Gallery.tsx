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
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const { toast } = useToast();

  useEffect(() => {
    // Fetch Media on mount
    fetchMedia();
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
        


        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">Our Gallery</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Explore moments from our programs, events, and the incredible impact we're making together
            </p>
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
                <div key={item.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-square sm:aspect-video md:aspect-square overflow-hidden">
                    {item.file_type === 'image' ? (
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="cursor-pointer h-full w-full">
                            <img
                              src={item.file_url}
                              alt={item.file_name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                              <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm">View Image</Button>
                              </div>
                            </div>
                          </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                          <img
                            src={item.file_url}
                            alt={item.file_name}
                            className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                          />
                        </DialogContent>
                      </Dialog>
                    ) : (
                      <div className="relative h-full w-full">
                        <video
                          src={item.file_url}
                          className="w-full h-full object-cover"
                          controls
                          preload="metadata"
                        />
                        <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-md text-white px-2 py-1 rounded-md flex items-center text-xs font-medium">
                          <Video className="h-3 w-3 mr-1" />
                          Video
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>


    </div>
  );
};

export default Gallery;
