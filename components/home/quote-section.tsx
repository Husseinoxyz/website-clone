"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const doctors = [
  {
    image: "/images/Doctors/doc 1.png",
    name: "OXYZ Medical Professional",
  },
  {
    image: "/images/Doctors/Doc 2.png",
    name: "OXYZ Medical Professional",
  },
  {
    image: "/images/Doctors/Doc 3.png",
    name: "OXYZ Medical Professional",
  },
  {
    image: "/images/Doctors/doc 4.png",
    name: "OXYZ Medical Professional",
  },
  {
    image: "/images/Doctors/doc 5.png",
    name: "OXYZ Medical Professional",
  },
];

export function QuoteSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState("opacity-100 translate-x-0");

  useEffect(() => {
    const timer = setInterval(() => {
      // Trigger smooth slide out
      setFadeState("opacity-0 translate-x-4 scale-95 blur-sm");

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % doctors.length);
        // Slide in from opposite side
        setFadeState("opacity-0 -translate-x-4 scale-95 blur-sm");

        setTimeout(() => {
          setFadeState("opacity-100 translate-x-0 scale-100 blur-none");
        }, 50);
      }, 500);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const currentDoctor = doctors[currentIndex];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF6ED] via-[#FFF9EA] to-[#F2E5C9] py-8 sm:py-12 lg:py-16 text-slate-900 border-y border-[#CDB06A]/20">
      {/* World Map Texture covering the entire background uniformly with a linear mask to smooth top edges */}
      <div className="absolute inset-0 opacity-[0.035] select-none pointer-events-none mix-blend-multiply">
        <Image
          src="/images/world-map.jpg"
          alt=""
          fill
          className="object-cover scale-[1.7] sm:scale-100 origin-center"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 25%, black 100%)',
          }}
          priority
        />
      </div>

      {/* Repeating clinical dot grid pattern (subtle details) */}
      <div
        className="absolute inset-0 opacity-[0.04] select-none pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#CDB06A 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
        }}
      />

      {/* Decorative ambient gold/white glows for premium depth */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-60">
        <div className="absolute top-0 right-10 w-[400px] h-[400px] rounded-full bg-[#CDB06A]/15 blur-[120px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] rounded-full bg-white/80 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center min-h-0 lg:min-h-[360px]">

          {/* Left Column: Image with premium transition */}
          <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center lg:justify-end items-end h-full relative min-h-[280px] sm:min-h-[340px] lg:min-h-0">
            <div className={`absolute -bottom-8 sm:-bottom-12 lg:-bottom-16 left-0 right-0 mx-auto lg:left-auto lg:right-0 lg:mx-0 w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[460px] h-[288px] sm:h-[340px] lg:h-[500px] transition-all duration-500 ease-in-out ${fadeState}`}>
              <Image
                src={currentDoctor.image}
                alt={currentDoctor.name}
                fill
                className="object-contain object-bottom scale-[1.15] sm:scale-[1.25] lg:scale-[1.45] origin-bottom"
                sizes="(max-w-768px) 100vw, 460px"
                priority
              />
            </div>
          </div>

          {/* Right Column: Quote and Author Info */}
          <div className="order-1 lg:order-2 lg:col-span-7 flex flex-col justify-center h-full pb-4 lg:pb-0">
            <div className="flex gap-4 lg:gap-6 items-start">
              {/* Gold Quote Bar */}
              <div className="w-[5px] h-28 bg-gradient-to-b from-[#CDB06A] to-[#007A59] rounded-full shrink-0" />

              <div className="flex flex-col gap-5">
                <blockquote className="text-lg sm:text-xl lg:text-2xl font-serif italic font-light leading-relaxed text-slate-800 tracking-wide text-balance">
                  &ldquo;Our mission is to enable physicians worldwide to provide safe regenerative medicine at the point of care, bringing tomorrow's medical innovations to patients today.&rdquo;
                </blockquote>

                {/* Author Info */}
                <div className="block mt-1">
                  <cite className="not-italic">
                    <span className="block font-bold text-lg text-[#007A59] tracking-wider mb-0.5">
                      OXYZ INTERNATIONAL
                    </span>
                  </cite>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
