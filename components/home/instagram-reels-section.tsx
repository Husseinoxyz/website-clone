"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Play, X, ArrowRight } from "lucide-react";

// Custom hook for scroll animations
function useScrollAnimation() {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      elements.forEach((el) => observer.observe(el));
      observers.push(observer);
    };

    animateOnScroll();

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
}

type ReelItem = {
  id: string;
  src: string;
  title: string;
  subtitle: string;
  doctor: string;
  poster?: string;
  platform?: "mp4" | "youtube";
  aspect?: "portrait" | "landscape";
};

const defaultReels: ReelItem[] = [
  {
    id: "clip-1",
    src: "/images/Doctors/B2B Online Training Video Clip 2 (Dr Gisele).mp4",
    doctor: "Dr. Gisela",
    title: "From cells to systeme - The evolution of regenerative medicine",
    subtitle: "Featured Preview Clip 1",
    platform: "mp4",
    aspect: "landscape",
  },
  {
    id: "clip-2",
    src: "/images/Doctors/B2B Online Training Video Clip (Dr Michelle).mp4",
    doctor: "Dr. Michelle",
    title: "Bio resournce scanner BR 3d quantum medicine cellular screening and technology",
    subtitle: "Featured Preview Clip 2",
    platform: "mp4",
    aspect: "landscape",
  },
  {
    id: "clip-3",
    src: "/images/Doctors/B2B Online Training Video Clip 1 (Q&A).mp4",
    doctor: "Dr. Muhammed Abdalqadir",
    title: "Are stem cells safe and don't behave like cancer cells?",
    subtitle: "Featured Preview Clip 3 (Q&A)",
    platform: "mp4",
    aspect: "landscape",
  },
];

export function InstagramReelsSection({ reels = defaultReels }: { reels?: ReelItem[] }) {
  useScrollAnimation();
  const [activeVideo, setActiveVideo] = useState<ReelItem | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // Handle auto-playing video inside modal
  useEffect(() => {
    if (activeVideo && videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Auto-play failed, user interaction is required: ", err);
      });
    }
  }, [activeVideo]);

  // Handle browser back button to close modal and stay on the video preview section
  useEffect(() => {
    if (activeVideo) {
      // Add hash to URL
      window.location.hash = "video-preview";
      
      const handleHashChange = () => {
        if (window.location.hash !== "#video-preview") {
          closeModal();
        }
      };

      window.addEventListener("hashchange", handleHashChange);
      return () => {
        window.removeEventListener("hashchange", handleHashChange);
      };
    }
  }, [activeVideo]);

  const openVideo = (reel: ReelItem) => {
    setActiveVideo(reel);
    if (videoRef.current) {
      videoRef.current.src = reel.src;
      videoRef.current.load();
      videoRef.current.play().catch((err) => {
        console.log("Play failed: ", err);
      });
    }
  };

  const closeModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.src = "";
    }
    setActiveVideo(null);
    if (window.location.hash === "#video-preview") {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    // Smooth scroll back to ensure they stay on the video preview section
    setTimeout(() => {
      const element = document.getElementById("video-preview");
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }, 50);
  };

  const gridColsClass =
    reels.length === 2
      ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
      : "grid gap-8 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .scale-in {
          transform: scale(0.95);
        }

        .scale-in.animated {
          transform: scale(1);
        }

        .stagger-1 {
          transition-delay: 0.1s;
        }

        .stagger-2 {
          transition-delay: 0.2s;
        }

        .stagger-3 {
          transition-delay: 0.3s;
        }
      `}</style>
      
      <section id="video-preview" className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 animate-on-scroll">
            <div className="mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-4 text-balance">
              Experience the Symposium
            </h2>
            <p className="text-gold text-xl leading-relaxed">
              Get a firsthand look at the depth, quality, and practical insights our stem cell training delivers.
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold text-slate-700 mb-6 border-b pb-2">
              Exclusive Preview
            </h3>
          </div>

          <div className={gridColsClass}>
            {reels.map((reel, index) => {
              const isLandscape = reel.aspect === "landscape";
              return (
                <div
                  key={reel.id}
                  className={`animate-on-scroll stagger-${index + 1} scale-in rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl overflow-hidden transition-all duration-300 flex flex-col`}
                >
                  <div className={`relative w-full bg-black group cursor-pointer ${isLandscape ? "aspect-video" : "aspect-[9/16]"}`}
                       onClick={() => openVideo(reel)}>
                    <video
                      className="h-full w-full object-cover bg-slate-900 opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                      preload="metadata"
                      muted
                      playsInline
                    >
                      <source src={reel.src} type="video/mp4" />
                    </video>
                    
                    {/* Dark overlay & Play button */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-colors duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/90 group-hover:bg-gold text-[#007A59] group-hover:text-white flex items-center justify-center shadow-lg transition-all duration-300 transform group-hover:scale-110">
                        <Play className="h-8 w-8 fill-current ml-1" />
                      </div>
                    </div>
                    
                    {/* Duration badge or status */}
                    <div className="absolute bottom-3 right-3 bg-black/60 text-white px-2 py-1 text-xs rounded font-medium">
                      Preview
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                        {reel.doctor}
                      </span>
                      <h4 className="text-lg font-bold text-slate-800 mt-2 line-clamp-3 leading-snug">
                        {reel.title}
                      </h4>
                    </div>
                    <button
                      onClick={() => openVideo(reel)}
                      className="mt-6 inline-flex items-center text-sm font-semibold text-[#007A59] hover:text-gold transition-colors duration-200"
                    >
                      Watch Full Video
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Ready for the Full Experience? */}
          <div className="mt-24 max-w-4xl mx-auto bg-gradient-to-r from-[#005c43] to-[#007A59] text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-center animate-on-scroll">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gold/10 rounded-full blur-2xl" />
            <div className="absolute -left-10 -top-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
            
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Ready for the Full Experience?
            </h3>
            <p className="text-white/90 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Unlock the full training to access every session, in-depth explanations, real-world examples, and the complete learning experience.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/register">
                <button className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Unlock Full Training
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal Popup */}
      <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-sm p-2 sm:p-6 transition-all duration-300 ${
        activeVideo ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="relative w-full max-w-5xl max-h-[95vh] sm:max-h-[90vh] bg-[#090d16] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col">
          {/* Modal Header */}
          <div className="flex items-center justify-between p-4 bg-slate-900/80 border-b border-slate-800 text-white flex-shrink-0">
            <div>
              <span className="text-xs text-gold uppercase tracking-wider font-semibold">
                {activeVideo?.doctor || ""}
              </span>
              <h4 className="text-sm sm:text-base font-bold truncate max-w-xs sm:max-w-xl">
                {activeVideo?.title || ""}
              </h4>
            </div>
            <button
              onClick={closeModal}
              className="p-1 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Video Player */}
          <div className="relative flex-1 min-h-0 bg-black flex items-center justify-center">
            <video
              ref={videoRef}
              className="w-full h-auto max-h-full object-contain"
              controls
              playsInline
              autoPlay
            />
          </div>
        </div>
      </div>
    </>
  );
}
