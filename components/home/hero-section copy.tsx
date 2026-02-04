"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const rotatingTitles = [
  "Structuring the Future",
  "Scaling Clinical Systems",
  "Global Regenerative Leadership",
];
const heroImages = [
  "/images/hero-bg-1.jpg",
  "/images/hero-bg-2.jpg",
  "/images/hero-bg-3.jpg",
  "/images/hero-bg-4.jpg",
  "/images/hero-bg-5.jpg",

];

export function HeroSection() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % rotatingTitles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full">
      {/* Split Layout Container */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[120vh] lg:min-h-[90vh]">
        
        {/* LEFT SIDE - Content Section */}
        <div className="relative flex items-center justify-center bg-gradient-to-br from-[#CDB06A] via-[#D4B976] to-[#CDB06A] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-0 order-2 lg:order-1">
          {/* Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-[#B8964A]/20 rounded-full blur-3xl" />
          </div>

          {/* Content */}
          <div className="relative z-10 max-w-2xl w-full mx-auto pt-6 sm:pt-8 lg:pt-10">
            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 sm:mb-6">
              <span className="block overflow-hidden">
                <span className="block animate-title-reveal opacity-0 motion-reduce:animate-none motion-reduce:opacity-100">
                  Advancing Regenerative
                </span>
              </span>
              <span className="block overflow-hidden mt-1 sm:mt-2">
                <span className="block animate-title-reveal opacity-0 animation-delay-200 motion-reduce:animate-none motion-reduce:opacity-100">
                  Medicine.
                </span>
              </span>
            </h1>

            {/* Rotating Subtitle - Fixed height container */}
            <div className="relative w-full mb-6 sm:mb-8" style={{ height: "4.5rem" }}>
              <span className="sr-only">{rotatingTitles[currentTitleIndex]}</span>
              {rotatingTitles.map((title, index) => (
                <span
                  key={title}
                  className={`absolute top-0 left-0 text-[#007A59] font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl transition-all duration-700 ${
                    index === currentTitleIndex
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
                >
                  {title}
                </span>
              ))}
            </div>

            <p className="text-white/90 text-base sm:text-lg max-w-xl mb-8 leading-relaxed">
              Global clinical systems for regenerative medicine, built to deliver
              consistent outcomes across centers and partners.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 animate-fade-in-up opacity-0 animation-delay-600">
              <Link href="/symposium" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#007A59] hover:bg-[#006048] text-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base shadow-lg shadow-[#007A59]/30 transition-all hover:shadow-xl hover:shadow-[#007A59]/40 hover:scale-105"
                >
                  Explore Symposium 2026
                </Button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white/70 text-white/90 hover:bg-white/10 hover:border-white font-semibold px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base bg-transparent transition-all"
                >
                  Apply to Partnership With OXYZ
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Image Section */}
        <div className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[80vh] order-1 lg:order-2">
          {heroImages.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt="Medical symposium - professionals collaborating in regenerative medicine"
              fill
              priority={index === 0}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className={`object-cover transition-opacity duration-1000 ${
                index === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          
          {/* Subtle gradient for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/5" />
          
          {/* Accent corner elements - responsive sizing */}
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 md:top-8 md:right-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-t-2 border-r-2 sm:border-t-3 sm:border-r-3 md:border-t-4 md:border-r-4 border-[#CDB06A]/30 rounded-tr-2xl sm:rounded-tr-3xl" />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 border-b-2 border-l-2 sm:border-b-3 sm:border-l-3 md:border-b-4 md:border-l-4 border-[#CDB06A]/30 rounded-bl-2xl sm:rounded-bl-3xl" />

        </div>

      </div>
    </section>
  );
}
