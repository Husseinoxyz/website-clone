"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, X, ChevronLeft, ChevronRight } from "lucide-react";
import { QuoteSection } from "./quote-section";

const isYouTubeUrl = (url: string) => {
  return url.includes("youtube.com") || url.includes("youtu.be");
};

const getYouTubeEmbedUrl = (url: string) => {
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    videoId = urlParams.get("v") || "";
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1].split("?")[0];
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
};

const getYouTubePreviewUrl = (url: string) => {
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    videoId = urlParams.get("v") || "";
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1].split("?")[0];
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&enablejsapi=1`;
};

const featuredVideos = [
  {
    id: "feat-1",
    title: "International Seminar on Root Cause Medicine Dr Thorsten Muthorst Germany",
    videoUrl: "https://youtu.be/u5oTbe1ONhs?si=aQ-pS3BeiPavTCFd",
    poster: "https://img.youtube.com/vi/u5oTbe1ONhs/maxresdefault.jpg",
    badge: "SEMINAR",
  },
  {
    id: "feat-2",
    title: "OXYZ International Symposium 2025",
    videoUrl: "https://youtu.be/dkppIjFsWxM?si=jk21ogMENXK91QYo",
    poster: "https://img.youtube.com/vi/dkppIjFsWxM/maxresdefault.jpg",
    badge: "SYMPOSIUM",
  },
  {
    id: "feat-3",
    title: "Dr Dr Muthorst - Celllar therapy in germany",
    videoUrl: "https://youtu.be/5fPNttdsUo0?si=vh9fujX8XhtX04v7",
    poster: "https://img.youtube.com/vi/5fPNttdsUo0/maxresdefault.jpg",
    badge: "THERAPY",
  },
];

const speakers = [
  {
    id: "sp-1",
    name: "JOHN LAYKE, MD.",
    summit: "Learn clinical stem cell applications",
    image: "/images/sym/slide_1.jpg",
  },
  {
    id: "sp-2",
    name: "DR. GREG JONES",
    summit: "Discover advanced peptide certification",
    image: "/images/sym/slide_2.jpg",
  },
  {
    id: "sp-3",
    name: "DR. JEFF WIEGERS",
    summit: "Explore regenerative training protocols",
    image: "/images/sym/slide_3.jpg",
  },
  {
    id: "sp-4",
    name: "DR. JASON PENCEK",
    summit: "Engage in hands-on clinical practice",
    image: "/images/sym/slide_4.jpg",
  },
  {
    id: "sp-5",
    name: "DR. ALI HOSSAIN",
    summit: "Join global medical collaboration",
    image: "/images/sym/slide_5.jpg",
  },
  {
    id: "sp-6",
    name: "DR. GRACE CAPITAL",
    summit: "Study postgraduate medical sciences",
    image: "/images/sym/slide_6.jpg",
  },
];

export function LibraryHubSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<(() => void) | null>(null);

  const handlePlayVideo = (url: string) => {
    setActiveVideo(url);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % speakers.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + speakers.length) % speakers.length);
  };

  // Keep ref updated to handle closures
  useEffect(() => {
    autoPlayRef.current = nextSlide;
  });

  useEffect(() => {
    const play = () => {
      if (autoPlayRef.current) autoPlayRef.current();
    };
    const interval = setInterval(play, 3500);
    return () => clearInterval(interval);
  }, []);

  // Determine indices of visible cards (4 visible cards on screen)
  const getVisibleSpeakers = () => {
    const visible = [];
    for (let i = 0; i < 4; i++) {
      visible.push(speakers[(currentIndex + i) % speakers.length]);
    }
    return visible;
  };

  return (
    <section className="bg-white text-slate-900 pt-16 sm:pt-24 pb-8 sm:pb-12 border-b border-slate-100 overflow-hidden w-full">
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#CDB06A] tracking-tight mb-6">
            Explore Our Library Hub
          </h2>
          <div className="flex justify-center">
            <button
              onClick={() => handlePlayVideo("/images/tesimonials/test-1.mp4")}
              className="bg-[#007A59] hover:bg-[#006046] text-white font-bold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Visit OXYZ Experience
            </button>
          </div>
        </div>

        {/* Featured Videos Subtitle */}
        <div className="mb-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-wide border-l-4 border-[#CDB06A] pl-3">
            Featured Videos
          </h3>
        </div>

        {/* Featured Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
          {featuredVideos.map((video) => (
            <div key={video.id} className="flex flex-col gap-4">
              <div
                onClick={() => handlePlayVideo(video.videoUrl)}
                className="group relative aspect-video bg-neutral-950 rounded-2xl overflow-hidden border border-slate-200 shadow-xl cursor-pointer hover:border-slate-300 transition-all duration-300"
              >
                {/* Preview Video / Thumbnail */}
                {isYouTubeUrl(video.videoUrl) ? (
                  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
                    <iframe
                      src={getYouTubePreviewUrl(video.videoUrl)}
                      className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[0.68] opacity-75 group-hover:opacity-85 transition-all duration-700"
                      allow="autoplay; encrypted-media"
                      style={{ border: 0 }}
                    />
                  </div>
                ) : (
                  <video
                    src={video.videoUrl}
                    poster={video.poster}
                    className="absolute inset-0 w-full h-full object-cover opacity-75 group-hover:opacity-85 transition-all duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}

                {/* Subtle hover icon overlay indicator */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-[#007A59]/90 text-white flex items-center justify-center shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                    <Play className="h-6 w-6 fill-white text-white ml-0.5" />
                  </div>
                </div>
              </div>
              
              {/* Title & Badge */}
              <div className="flex flex-col items-start px-1">
                <span className="inline-block bg-[#007A59]/10 border border-[#007A59]/20 px-2.5 py-0.5 rounded text-[10px] sm:text-[11px] font-bold tracking-wider uppercase text-[#007A59] mb-2">
                  {video.badge}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  {video.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote Section in between */}
      <QuoteSection />

      {/* Second Half (OXYZ Activities) */}
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-10 pt-16 sm:pt-24">
        {/* Interviews Subtitle */}
        <div className="mb-6 border-b border-slate-100 pb-4">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-wide border-l-4 border-[#CDB06A] pl-3">
            OXYZ Activities
          </h3>
        </div>

        {/* Carousel Slider Row */}
        <div className="relative w-full">
          {/* Navigation buttons shifted down directly above the cards */}
          <div className="flex justify-between items-center w-full mb-6">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-transparent bg-[#007A59] text-white flex items-center justify-center shadow-md hover:bg-[#CDB06A] active:scale-95 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-transparent bg-[#007A59] text-white flex items-center justify-center shadow-md hover:bg-[#CDB06A] active:scale-95 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Card Carousel Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 w-full transition-all duration-500 overflow-hidden">
            {getVisibleSpeakers().map((item, index) => (
              <div
                key={item.id}
                className={`group relative aspect-[16/10] sm:aspect-[1.2] bg-neutral-900 rounded-xl overflow-hidden border border-slate-200 shadow-md transition-all duration-500 ${index === 0
                    ? "block"
                    : index === 1
                      ? "hidden sm:block"
                      : "hidden lg:block"
                  }`}
              >
                {/* Image */}
                <Image
                  src={item.image}
                  alt={item.id}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-95 group-hover:opacity-100"
                />

                {/* Clean Bottom Dark Overlay - doesn't block the picture */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent transition-all duration-300" />

                {/* Simplified Text overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5">
                  <p className="text-sm sm:text-base font-semibold text-white drop-shadow-md group-hover:text-[#CDB06A] transition-colors duration-300">
                    {item.summit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Premium Video Popup Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-neutral-800" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/65 text-white hover:text-white/80 flex items-center justify-center transition-colors"
              aria-label="Close video player"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full bg-black">
              {isYouTubeUrl(activeVideo) ? (
                <iframe
                  src={getYouTubeEmbedUrl(activeVideo)}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  src={activeVideo}
                  className="w-full h-full object-contain"
                  autoPlay
                  controls
                  playsInline
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
