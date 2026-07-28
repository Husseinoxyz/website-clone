"use client";

import React from "react";
import Link from "next/link";

export function FeaturedCertificationSection() {
  return (
    <section className="relative w-full bg-slate-950 overflow-hidden border-b border-slate-800">
      {/* Background Video */}
      <div className="absolute inset-0 h-full w-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/images/slides poster/Post 2.png"
          className="h-full w-full object-cover filter brightness-[0.85]"
        >
          <source src="/new/DR%20GRACE%20CAPITAL.mp4" type="video/mp4" />
        </video>
        {/* Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/25 to-black/50" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto max-w-3xl min-h-[420px] sm:min-h-[480px] md:min-h-[520px] flex flex-col justify-center items-center text-center p-6 sm:p-10 md:p-12">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#CDB06A] tracking-tight leading-tight mb-2 font-sans drop-shadow-lg">
          Stem Cell & Biological Medicine Certification
        </h2>

        {/* Subtitle */}
        <p className="text-[#00A67D] text-sm sm:text-base md:text-lg font-semibold tracking-wide mb-4 drop-shadow-md">
          A Complete Clinical Transformation
        </p>

        {/* Description */}
        <p className="text-white text-xs sm:text-sm md:text-base leading-relaxed mb-6 max-w-xl font-light drop-shadow-md">
          Equip your clinic with the practical skills and protocols to confidently deliver advanced regenerative medicine services.
        </p>

        {/* Gold Background with White Text Button */}
        <Link href="/register">
          <button
            type="button"
            className="rounded-full bg-[#CDB06A] hover:bg-[#007A59] text-white border-2 border-white/80 font-bold px-8 py-3.5 text-xs sm:text-sm shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Join the Certification Program
          </button>
        </Link>

        {/* Footer Subtitle */}
        <p className="text-[#CDB06A]/90 text-[10px] sm:text-xs tracking-wider uppercase font-semibold mt-6 drop-shadow-sm">
          Become Certified in Stem Cell, Biological Medicine & Peptide Therapy
        </p>
      </div>
    </section>
  );
}
