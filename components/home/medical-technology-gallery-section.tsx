"use client";

import { useState } from "react";
import { X, ArrowRight } from "lucide-react";

export function MedicalTechnologyGallerySection() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-xs p-1 rounded-3xl" style={{background: 'linear-gradient(135deg, #CDB06A, #007A59)'}}>
            <div className="relative bg-black rounded-3xl overflow-hidden aspect-[9/16] shadow-2xl">
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 bg-white/20 hover:bg-white/40 text-white p-2 rounded-full transition backdrop-blur"
              >
                <X className="w-6 h-6" />
              </button>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&controls=1&modestbranding=1&loop=1&playlist=${selectedVideo}&fs=1`}
                title="Video Player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0"
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-24">
        <div className="bg-gradient-to-br from-[#E6F3EF] via-[#F0F9F7] to-[#E6F3EF] rounded-3xl py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-4">
                OXYZ Medical Technology Gallery
              </h3>
              <p className="text-lg text-[#007A59]/80 max-w-2xl mx-auto">
                Explore cutting-edge medical technology and innovations from OXYZ International
              </p>
            </div>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12">
              <div
                onClick={() => setSelectedVideo("wuY7Hok3OSo")}
                className="group relative w-full sm:w-80 p-1 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{background: 'linear-gradient(135deg, #CDB06A, #007A59)'}}
              >
                <div className="relative w-full h-full aspect-[9/16] rounded-2xl overflow-hidden bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/wuY7Hok3OSo?autoplay=1&mute=1&controls=0&modestbranding=1&fs=1&loop=1&playlist=wuY7Hok3OSo"
                  title="Medical Technology Video 1"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 pointer-events-none"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              </div>
              <div
                onClick={() => setSelectedVideo("LduCUPy3C8M")}
                className="group relative w-full sm:w-80 p-1 rounded-2xl shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer"
                style={{background: 'linear-gradient(135deg, #CDB06A, #007A59)'}}
              >
                <div className="relative w-full h-full aspect-[9/16] rounded-2xl overflow-hidden bg-black">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/LduCUPy3C8M?autoplay=1&mute=1&controls=0&modestbranding=1&fs=1&loop=1&playlist=LduCUPy3C8M"
                  title="Medical Technology Video 2"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 pointer-events-none"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center backdrop-blur">
                    <ArrowRight className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
