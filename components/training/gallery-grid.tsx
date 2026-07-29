"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type GalleryGridProps = {
  images: string[];
  alt: string;
};

export function GalleryGrid({ images, alt }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveIndex(null);
      } else if (event.key === "ArrowRight") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev + 1) % images.length
        );
      } else if (event.key === "ArrowLeft") {
        setActiveIndex((prev) =>
          prev === null ? null : (prev - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeIndex, images.length]);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 group bg-slate-100"
            aria-label={`${alt} ${index + 1}`}
          >
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              quality={100}
            />
            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            {/* Centered "VIEW HIGHLIGHT" pill button */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="bg-[#007A59] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-full tracking-widest uppercase shadow-lg">
                View Highlight
              </span>
            </div>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <button
            type="button"
            onClick={() => setActiveIndex(null)}
            className="absolute top-6 right-6 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Close gallery"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === null ? null : (prev - 1 + images.length) % images.length
              )
            }
            className="absolute left-4 sm:left-8 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="relative h-[70vh] w-full max-w-5xl">
            <Image
              src={images[activeIndex]}
              alt={alt}
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 70vw"
              quality={100}
            />
          </div>
          <button
            type="button"
            onClick={() =>
              setActiveIndex((prev) =>
                prev === null ? null : (prev + 1) % images.length
              )
            }
            className="absolute right-4 sm:right-8 rounded-full bg-white/10 p-2 text-white hover:bg-white/20"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      )}
    </>
  );
}
