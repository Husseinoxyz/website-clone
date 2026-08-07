"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Award, Calendar } from "lucide-react";

const posterSlides = [
  {
    id: 1,
    title: "OXYZ Poster 1",
    image: "/images/Slider Posts/PC View/Post 1.png",
    mobileImage: "/images/Slider Posts/Phone View/Post 1.png",
  },
  {
    id: 2,
    title: "OXYZ Poster 2",
    image: "/images/Slider Posts/PC View/Post 2.png",
    mobileImage: "/images/Slider Posts/Phone View/Post 2.png",
  },
  {
    id: 3,
    title: "OXYZ Poster 3",
    image: "/images/Slider Posts/PC View/Post 3.png",
    mobileImage: "/images/Slider Posts/Phone View/Post 3.png",
  },
  {
    id: 4,
    title: "OXYZ Poster 4",
    image: "/images/Slider Posts/PC View/Post 4.png",
    mobileImage: "/images/Slider Posts/Phone View/Post 4.png",
  },
  {
    id: 5,
    title: "OXYZ Poster 5",
    image: "/images/Slider Posts/PC View/Post 5.png",
    mobileImage: "/images/Slider Posts/Phone View/Post 5.png",
  },
];

const arabicPosterSlides = [
  {
    id: 1,
    title: "OXYZ Poster 1",
    image: "/images/Slider Posts/PC View/AR/Post 1.png",
    mobileImage: "/images/Slider Posts/Phone View/AR/Post 1.png",
  },
  {
    id: 2,
    title: "OXYZ Poster 2",
    image: "/images/Slider Posts/PC View/AR/Post 2.png",
    mobileImage: "/images/Slider Posts/Phone View/AR/Post 2.png",
  },
  {
    id: 3,
    title: "OXYZ Poster 3",
    image: "/images/Slider Posts/PC View/AR/Post 3.png",
    mobileImage: "/images/Slider Posts/Phone View/AR/Post 3.png",
  },
  {
    id: 4,
    title: "OXYZ Poster 4",
    image: "/images/Slider Posts/PC View/AR/Post 4.png",
    mobileImage: "/images/Slider Posts/Phone View/AR/Post 4.png",
  },
  {
    id: 5,
    title: "OXYZ Poster 5",
    image: "/images/Slider Posts/PC View/AR/Post 5.png",
    mobileImage: "/images/Slider Posts/Phone View/AR/Post 5.png",
  },
];


export function PosterSliderSection({ isArabic = false }: { isArabic?: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const [daysLeft, setDaysLeft] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2026-11-20T09:00:00").getTime();
    const calculateDays = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference <= 0) {
        setDaysLeft(0);
        return;
      }
      const days = Math.ceil(difference / (1000 * 60 * 60 * 24));
      setDaysLeft(days);
    };
    calculateDays();
  }, []);

  const minSwipeDistance = 50;
  const activeSlides = isArabic ? arabicPosterSlides : posterSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [activeSlides.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + activeSlides.length) % activeSlides.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % activeSlides.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const current = activeSlides[currentIndex] || activeSlides[0];

  return (
    <section className="bg-white w-full relative overflow-hidden border-b border-slate-100 pt-20 pb-0">
      {/* Top Banner Notice */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#005c43] via-[#007A59] to-[#004d37] text-white py-3 px-4 text-center font-bold text-[11px] sm:text-xs md:text-sm tracking-wider flex items-center justify-center gap-2.5 shadow-md w-full border-b border-[#CDB06A]/20">
        <style jsx>{`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
          .shimmer-bg {
            background-image: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.08) 25%, rgba(205, 176, 106, 0.18) 50%, rgba(255, 255, 255, 0.08) 75%, transparent 100%);
            background-size: 200% 100%;
            animation: shimmer 8s infinite linear;
          }
        `}</style>

        {/* Animated ambient light glow behind text */}
        <div className="absolute inset-0 shimmer-bg pointer-events-none" />

        <div className="relative z-10 flex flex-wrap items-center justify-center gap-x-3.5 gap-y-2 leading-relaxed max-w-7xl mx-auto">
          <Calendar className="h-4 w-4 text-[#CDB06A] shrink-0 animate-bounce" />
          <span className="text-white/95 font-bold text-lg">
            {isArabic ? (
              <>
                ادخل عالم الخلايا الجذعية، الطب البيولوجي وعلاجات الببتيدات.{" "}
                <span className="text-[#CDB06A] font-extrabold underline decoration-[#CDB06A]/40 decoration-2 underline-offset-4">
                  وانقلها إلى ممارستك.
                </span>
              </>
            ) : (
              <>
                Enter the World of the Stem Cell, Biological Medicine & Peptide Therapy Industry.{" "}
                <span className="text-[#CDB06A] font-extrabold underline decoration-[#CDB06A]/40 decoration-2 underline-offset-4">
                  Bring it to your practice.
                </span>
              </>
            )}
          </span>
          <span className="hidden md:inline text-white/30 font-light px-1">|</span>
          <span className="inline-flex items-center gap-1.5 bg-black/25 text-[#CDB06A] px-3.5 py-1.5 rounded-full text-[10px] md:text-xs border border-[#CDB06A]/25 font-black shadow-inner tracking-widest uppercase">
            {isArabic ? <><span dir="ltr">20 - 24</span> نوفمبر 2026 • كوالالمبور، ماليزيا</> : "Nov 20 - 24, 2026 • Kuala Lumpur, Malaysia"}
          </span>
        </div>
      </div>

      <div className="relative w-full overflow-hidden group">
        <div className="relative w-full min-h-[500px] md:min-h-[650px] lg:min-h-[720px] bg-[#FAF6ED] flex flex-col items-center justify-start pt-0 pb-10 md:pb-14">
          {/* Blurred Background Layer - Current slide image blurred */}
          <div className="absolute inset-0 overflow-hidden select-none pointer-events-none">
            <Image
              src={isMobile ? current.mobileImage : current.image}
              alt=""
              fill
              className="object-cover blur-2xl scale-110 opacity-70"
              priority
            />
            {/* Warm soft light overlay */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]" />
          </div>

          <div className="relative w-full max-w-[1550px] mx-auto flex flex-col items-center justify-start gap-3 sm:gap-6 px-4 sm:px-6 md:px-8 z-10 pt-2 md:pt-4">
            <div
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="relative w-full md:w-[92%] max-w-[1450px] aspect-[4/5] md:aspect-[15/8] rounded-2xl md:rounded-[30px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] hover:shadow-[0_30px_70px_-10px_rgba(0,0,0,0.35)] transition-all duration-500 flex items-center justify-center bg-transparent mx-auto touch-pan-y select-none cursor-pointer"
            >
              <Image
                src={isMobile ? current.mobileImage : current.image}
                alt={current.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1450px"
                className="object-cover transition-all duration-750 ease-out z-10"
              />
            </div>

            {/* Register & Discover Buttons */}
            <div className="z-20 flex flex-row items-center gap-4 w-max mt-2">
              <Link href="/register">
                <button
                  type="button"
                  className="rounded-full bg-[#007A59] hover:bg-[#006046] text-white font-bold px-6 sm:px-8 py-3 text-sm sm:text-base shadow-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Register Now
                </button>
              </Link>
              <Link href="/training">
                <button
                  type="button"
                  className="rounded-full bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-6 sm:px-8 py-3 text-sm sm:text-base shadow-2xl transition-all duration-300 hover:scale-105 whitespace-nowrap"
                >
                  Discover Now
                </button>
              </Link>
            </div>
          </div>

          {/* Navigation Arrows - Only visible on desktop/larger screens (hidden md:flex) */}
          <button
            onClick={handlePrev}
            aria-label="Previous Slide"
            className="hidden md:flex absolute left-4 lg:left-8 top-[45%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-[#007A59] items-center justify-center shadow-lg transition-all hover:scale-110 focus:outline-none z-20 border border-slate-200"
          >
            <ChevronLeft className="h-7 w-7" />
          </button>
          <button
            onClick={handleNext}
            aria-label="Next Slide"
            className="hidden md:flex absolute right-4 lg:right-8 top-[45%] -translate-y-1/2 w-12 h-12 rounded-full bg-white/80 hover:bg-white text-[#007A59] items-center justify-center shadow-lg transition-all hover:scale-110 focus:outline-none z-20 border border-slate-200"
          >
            <ChevronRight className="h-7 w-7" />
          </button>

          {/* Pagination Indicators - Centered */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 bg-black/45 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            {posterSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-6 bg-[#CDB06A]" : "w-2 bg-white/60"
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
