"use client";

import React from "react";
import Image from "next/image";

export function StatsFeaturesSection() {
  return (
    <section className="bg-white py-20 lg:py-24 text-slate-900 border-b border-slate-100">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Main Grid: Images on Left, Stats on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Overlapping Images */}
          <div className="lg:col-span-7 relative flex flex-col justify-between">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[24px] overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/images/symposium-preview.jpg"
                alt="OXYZ Conference Summit"
                fill
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 700px"
              />
            </div>
            
            {/* Smaller Overlapping Image */}
            <div className="absolute -bottom-8 right-6 w-2/5 aspect-[4/3] rounded-[16px] overflow-hidden border-4 border-white shadow-2xl z-20 hidden sm:block">
              <Image
                src="/images/sym/slide_4.jpg"
                alt="Clinical Hands-on Training"
                fill
                className="object-cover"
                sizes="250px"
              />
            </div>
          </div>

          {/* Right Column: Statistics Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-center">
            
            {/* Stat Card 1 */}
            <div className="bg-[#FAF6ED] border border-[#CDB06A]/20 p-8 sm:p-10 rounded-[24px] shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md">
              <span className="text-5xl sm:text-6xl font-extrabold text-[#007A59] tracking-tight mb-3 font-sans">
                +95%
              </span>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-xs">
                Of certified doctors report increased patient demand.
              </p>
            </div>

            {/* Stat Card 2 (Styled with a light, low-opacity brand green) */}
            <div className="bg-[#E6F3EF] border border-[#007A59]/20 p-8 sm:p-10 rounded-[24px] shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md">
              <span className="text-4xl sm:text-5xl font-extrabold text-[#007A59] tracking-tight mb-3 font-sans">
                +15 Years
              </span>
              <p className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed max-w-xs">
                of Experience in Regenerative Medicine
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Section: Three Descriptive Cards (Styled with light, low-opacity brand green) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-16 sm:mt-20 lg:mt-24 pt-12 border-t border-slate-100">
          
          {/* Card 1 */}
          <div className="bg-[#E6F3EF] p-6 sm:p-8 rounded-[24px] border border-[#007A59]/20 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <h4 className="text-base sm:text-lg font-bold text-[#007A59] tracking-wider uppercase text-center leading-snug">
              ADVANCED CLINICAL<br className="hidden sm:inline" /> EDUCATION
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center font-medium">
              Learn the latest developments in Stem Cell, Biological Medicine, and Peptide Therapy through evidence-informed education, practical workshops, and modern clinical protocols.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E6F3EF] p-6 sm:p-8 rounded-[24px] border border-[#007A59]/20 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <h4 className="text-base sm:text-lg font-bold text-[#007A59] tracking-wider uppercase text-center leading-snug">
              INTERNATIONAL<br className="hidden sm:inline" /> COLLABORATION
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center font-medium">
              Connect with physicians, specialists, researchers, and healthcare leaders from around the world to exchange knowledge and establish long-term professional relationships.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#E6F3EF] p-6 sm:p-8 rounded-[24px] border border-[#007A59]/20 shadow-sm flex flex-col gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <h4 className="text-base sm:text-lg font-bold text-[#007A59] tracking-wider uppercase text-center leading-snug">
              CLINIC GROWTH &<br className="hidden sm:inline" /> IMPLEMENTATION
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center font-medium">
              Receive continuous support to successfully integrate regenerative medicine into your clinic through implementation guidance, business development strategies, staff training, and ongoing technical assistance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
