import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Image as ImageIcon, X } from "lucide-react";
import { Link } from "react-router-dom";

// Local images served directly from public/uploads/maps/
// 6th (maps_gallery_1), 16th (maps_gallery_17), and 18th (maps_gallery_18) removed per user request
const LOCAL_GALLERY_IMAGES = [
  { id: "2",  src: "/uploads/maps/maps_gallery_2.jpg",  alt: "WeAreYouth Foundation – Community Activity" },
  { id: "3",  src: "/uploads/maps/maps_gallery_3.jpg",  alt: "WeAreYouth Foundation – Volunteer Work" },
  { id: "7",  src: "/uploads/maps/maps_gallery_7.jpg",  alt: "WeAreYouth Foundation – Youth Program" },
  { id: "4",  src: "/uploads/maps/maps_gallery_4.jpg",  alt: "WeAreYouth Foundation – Education Initiative" },
  { id: "10", src: "/uploads/maps/maps_gallery_10.jpg", alt: "WeAreYouth Foundation – Event" },
  { id: "5",  src: "/uploads/maps/maps_gallery_5.jpg",  alt: "WeAreYouth Foundation – Community Drive" },
  { id: "6",  src: "/uploads/maps/maps_gallery_6.jpg",  alt: "WeAreYouth Foundation – Skills Training" },
  { id: "8",  src: "/uploads/maps/maps_gallery_8.jpg",  alt: "WeAreYouth Foundation – Outreach" },
  { id: "9",  src: "/uploads/maps/maps_gallery_9.jpg",  alt: "WeAreYouth Foundation – Youth Empowerment" },
  { id: "11", src: "/uploads/maps/maps_gallery_11.jpg", alt: "WeAreYouth Foundation – Program" },
  { id: "12", src: "/uploads/maps/maps_gallery_12.jpg", alt: "WeAreYouth Foundation – Activity" },
  { id: "15", src: "/uploads/maps/maps_gallery_15.jpg", alt: "WeAreYouth Foundation – Workshop" },
  { id: "16", src: "/uploads/maps/maps_gallery_16.jpg", alt: "WeAreYouth Foundation – Session" },
  { id: "13", src: "/uploads/maps/maps_gallery_13.jpg", alt: "WeAreYouth Foundation – Event" },
  { id: "14", src: "/uploads/maps/maps_gallery_14.jpg", alt: "WeAreYouth Foundation – Initiative" },
];

const Gallery = () => {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const [lightboxAlt, setLightboxAlt] = useState<string>("");

  const openLightbox = (src: string, alt: string) => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
  };

  const closeLightbox = () => setLightboxSrc(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
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
                <Link to="/gallery" className="text-primary border-b-2 border-primary px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
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
            <div className="mt-6 flex items-center justify-center gap-2 text-white/80 text-sm">
              <ImageIcon className="h-4 w-4" />
              <span>{LOCAL_GALLERY_IMAGES.length} photos</span>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {LOCAL_GALLERY_IMAGES.map((image) => (
              <div
                key={image.id}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer aspect-square bg-gray-200"
                onClick={() => openLightbox(image.src, image.alt)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  onError={(e) => {
                    // Hide broken images gracefully
                    (e.currentTarget.parentElement as HTMLElement).style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm shadow-lg">
                      View Image
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxSrc && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-colors"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={lightboxSrc}
            alt={lightboxAlt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/uploads/432c84aa-78f0-480f-94c9-6cff82cd5eda.png" alt="Logo" className="h-8 w-8 mr-3" />
            <span className="text-xl font-bold">WeAreYouth Foundation</span>
          </div>
          <p className="text-gray-400 text-sm">© 2024 WeAreYouth Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Gallery;
