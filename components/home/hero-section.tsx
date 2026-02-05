"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const heroImages = [
  "/images/hero-bg-1.jpg",
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg",
  "/images/hero-bg-4.jpg",
  "/images/hero-bg-5.jpg",
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen">
      {/* Background Images with Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt="OXYZ regenerative medicine collaboration"
            fill
            priority={index === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />
      </div>

      {/* Content Container - Positioned at bottom */}
      <div className="relative z-10 flex items-end min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-20">
        <div className="max-w-4xl w-full">
          
          {/* Main Title */}
          <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
            <h1 className="font-bold leading-[1.15] text-[#CDB06A]">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                OXYZ Advanced Regenerative Medicine
              </span>
              <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide">
                Clinical & Strategic Collaboration 2.0 Program
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-2xl animate-fade-in-up opacity-0 animation-delay-400 font-light">
            Global clinical systems for regenerative medicine, built to deliver
            consistent outcomes across centers and partners.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up opacity-0 animation-delay-600">
            <Link href="/symposium" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-[#007A59] font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-2xl shadow-[#CDB06A]/40 transition-all hover:shadow-[#CDB06A]/60 hover:scale-105"
              >
                Explore Symposium 2026
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg bg-transparent transition-all hover:scale-105"
              >
                Apply for Partnership
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}