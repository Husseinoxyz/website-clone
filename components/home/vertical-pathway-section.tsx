"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Play, X } from "lucide-react";

const pathways = [
  {
    id: "diploma",
    type: "diploma",
    category: "Wellness",
    image: "/images/sym/04.jpg",
    video: "/images/tesimonials/Doctors%20talk_1%20music.mp4",
    link: "/5d-model",
  },
  {
    id: "onsite",
    type: "onsite",
    category: "Aesthetic",
    image: "/images/sym/02.jpg",
    video: "/images/tesimonials/Aesthetic.mp4",
    link: "/program",
  },
  {
    id: "handson",
    type: "handson",
    category: "Certificates",
    image: "/images/sym/03.jpg",
    video: "/images/tesimonials/Doctors%20certficate.mp4",
    link: "/register",
  },
  {
    id: "conferences",
    type: "conferences",
    category: "Business talk",
    image: "/images/sym/01.jpg",
    video: "/images/tesimonials/Business%20talk-music.mp4",
    link: "/training",
  },
];

function PathwayCard({ item, onPlayClick }: { item: (typeof pathways)[0]; onPlayClick: (url: string) => void }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handlePlayClick = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onPlayClick(item.video);
  };

  return (
    <div
      onClick={handlePlayClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative h-[380px] xs:h-[420px] sm:h-[480px] lg:h-[540px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 bg-black border border-slate-200/80 cursor-pointer"
    >

      {/* Background Poster Image */}
      <Image
        src={item.image}
        alt={item.id}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
        className={`object-cover transition-all duration-700 ease-out ${
          isPlaying ? "opacity-0 scale-105" : "opacity-100 scale-100 filter brightness-[0.8]"
        }`}
      />

      {/* Video Element */}
      <video
        ref={videoRef}
        src={item.video}
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className={`absolute inset-0 h-full w-full object-cover min-w-full min-h-full transition-opacity duration-700 pointer-events-none ${
          isPlaying ? "opacity-100 scale-105" : "opacity-0 scale-100"
        }`}
      />

      {/* Bottom-to-Top Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/45 to-transparent pointer-events-none group-hover:from-black/98 transition-colors duration-500" />

      {/* Play Button Overlay (Top-Left Upper Edge on Mobile screens) */}
      <div className="absolute top-3.5 left-3.5 z-30">
        <button
          onClick={handlePlayClick}
          aria-label="Play video"
          className="w-9 h-9 rounded-full bg-black/60 backdrop-blur-md border border-[#CDB06A] text-white flex items-center justify-center shadow-lg transition-all duration-300 transform scale-100 active:scale-95 group-hover:bg-[#007A59]/90 group-hover:border-white"
        >
          <Play className="h-4 w-4 fill-white text-white ml-0.5" />
        </button>
      </div>

      {/* Bottom Typography - Positioned at bottom matching exact font styles */}
      <Link
        href={item.link}
        onClick={(e) => e.stopPropagation()}
        className="absolute bottom-0 left-0 right-0 z-20 p-4 sm:p-5 pb-6 sm:pb-8 flex flex-col items-center justify-end text-center w-full transition-transform duration-300 group-hover:-translate-y-1"
      >
        {item.type === "conferences" && (
          <>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.4em] text-[#CDB06A] uppercase mb-2 drop-shadow-md">
              OXYZ
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black uppercase tracking-tight text-white font-sans drop-shadow-2xl group-hover:text-[#CDB06A] transition-colors duration-300">
              BUSINESS TALK
            </h3>
          </>
        )}

        {item.type === "onsite" && (
          <>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.4em] text-[#CDB06A] uppercase mb-2 drop-shadow-md">
              OXYZ
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black uppercase tracking-wider text-white font-sans mb-1 drop-shadow-2xl group-hover:text-[#CDB06A] transition-colors duration-300">
              AESTHETIC
            </h3>
            <span className="text-xs sm:text-sm font-bold tracking-[0.3em] text-white/90 uppercase drop-shadow-md">
              MEDICINE
            </span>
          </>
        )}

        {item.type === "handson" && (
          <>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.4em] text-[#CDB06A] uppercase mb-2 drop-shadow-md">
              OXYZ
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black uppercase tracking-tight text-white font-sans drop-shadow-2xl group-hover:text-[#CDB06A] transition-colors duration-300">
              CLINICAL
            </h3>
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.3em] text-[#CDB06A] uppercase drop-shadow-md mt-1">
              CERTIFICATIONS
            </span>
          </>
        )}

        {item.type === "diploma" && (
          <>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.25em] text-[#CDB06A] uppercase mb-0.5 drop-shadow-md">
              REGENERATIVE
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black uppercase tracking-tight text-white font-sans drop-shadow-2xl group-hover:text-[#CDB06A] transition-colors duration-300">
              MEDICINE
            </h3>
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.35em] text-[#CDB06A] uppercase drop-shadow-md mt-1">
              TRAINING
            </span>
          </>
        )}

        {item.type === "online" && (
          <>
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.4em] text-[#CDB06A] uppercase mb-2 drop-shadow-md">
              OXYZ
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-2xl xl:text-3xl font-black uppercase tracking-[0.15em] text-white font-sans mb-1 drop-shadow-2xl group-hover:text-[#CDB06A] transition-colors duration-300">
              ONLINE
            </h3>
            <span className="text-xs sm:text-sm font-semibold tracking-[0.3em] text-white/90 uppercase drop-shadow-md">
              LEARNING
            </span>
          </>
        )}
      </Link>
    </div>
  );
}

export function VerticalPathwaySection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  return (
    <section className="bg-white pt-4 sm:pt-6 pb-16 sm:pb-24 border-b border-slate-100 overflow-hidden w-full">
      <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-[#007A59] text-white font-bold px-4 py-1.5 rounded-full text-xs sm:text-sm uppercase tracking-wider mb-4 shadow-sm">
            OXYZ ACADEMY
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#CDB06A] tracking-tight mb-4">
            Advancing Regenerative Medicine Through Education & Innovation
          </h2>
          <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
            A complete physician development platform combining international certification, hands-on clinical training, modern biological medicine protocols, and clinic implementation strategies.
          </p>
        </div>

        {/* 4 ISSCA-Style Vertical Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {pathways.map((item) => (
            <PathwayCard key={item.id} item={item} onPlayClick={setActiveVideo} />
          ))}
        </div>
      </div>

      {/* Video Popup Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative w-auto max-w-full rounded-2xl overflow-hidden shadow-2xl bg-transparent" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/65 text-white hover:text-white/80 flex items-center justify-center transition-colors"
              aria-label="Close video player"
            >
              <X className="h-5 w-5" />
            </button>
            <video
              src={activeVideo}
              className="w-auto h-auto max-w-full max-h-[90vh] rounded-2xl bg-black"
              autoPlay
              controls
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}
