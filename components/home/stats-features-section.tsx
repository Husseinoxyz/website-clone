"use client";

import React from "react";
import Image from "next/image";
import { useLang } from "@/lib/i18n";

export function StatsFeaturesSection() {
  const { t, isAr } = useLang();
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24 text-slate-900 border-b border-slate-100">
      <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 z-10">
        
        {/* Main Grid: Images on Left, Stats on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Overlapping Images */}
          <div className="lg:col-span-7 relative flex flex-col justify-between">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-[24px] overflow-hidden shadow-xl border border-slate-100">
              <Image
                src="/images/symposium-preview.jpg"
                alt={t("OXYZ Conference Summit", "مؤتمر قمة OXYZ")}
                fill
                className="object-cover"
                sizes="(max-w-1024px) 100vw, 700px"
              />
            </div>
            
            {/* Smaller Overlapping Image */}
            <div className="absolute -bottom-8 right-6 w-2/5 aspect-[4/3] rounded-[16px] overflow-hidden border-4 border-white shadow-2xl z-20 hidden sm:block">
              <Image
                src="/images/sym/slide_4.jpg"
                alt={t("Clinical Hands-on Training", "تدريب سريري عملي")}
                fill
                className="object-cover"
                sizes="250px"
              />
            </div>
          </div>

          {/* Right Column: Statistics Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-6 justify-center">
            
            {/* Stat Card 1 */}
            <div className="bg-[#FAF6ED] border border-[#CDB06A]/20 p-4 sm:p-10 rounded-2xl sm:rounded-[24px] shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md">
              <span className="text-3xl sm:text-6xl font-extrabold text-[#007A59] tracking-tight mb-3 font-sans">
                +95%
              </span>
              <p className="text-xs sm:text-base text-slate-700 font-medium leading-snug sm:leading-relaxed max-w-xs">
                {t("Of certified doctors report increased patient demand.", "من الأطباء الحاصلين على الشهادة لاحظوا زيادة في إقبال المرضى.")}
              </p>
            </div>

            {/* Stat Card 2 (Styled with a light, low-opacity brand green) */}
            <div className="bg-[#E6F3EF] border border-[#007A59]/20 p-4 sm:p-10 rounded-2xl sm:rounded-[24px] shadow-sm flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-md">
              <span className="text-2xl sm:text-5xl font-extrabold text-[#007A59] tracking-tight mb-3 font-sans">
                {t("15+ Years", "+15 عاماً")}
              </span>
              <p className="text-xs sm:text-base text-slate-700 font-medium leading-snug sm:leading-relaxed max-w-xs">
                {t("of Experience in Regenerative Medicine", "من الخبرة في الطب التجديدي")}
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Section: Three Descriptive Cards (Styled with light, low-opacity brand green) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-8 mt-10 sm:mt-20 lg:mt-24 pt-8 sm:pt-12 border-t border-slate-100">
          
          {/* Card 1 */}
          <div className="bg-[#E6F3EF] p-5 sm:p-8 rounded-2xl sm:rounded-[24px] border border-[#007A59]/20 shadow-sm flex flex-col gap-2 sm:gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <h4 className="text-base sm:text-lg font-bold text-[#007A59] tracking-wider uppercase text-center leading-snug">
              {t(<>ADVANCED CLINICAL<br className="hidden sm:inline" /> EDUCATION</>, "تعليم سريري متقدّم")}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center font-medium">
              {t(
                "Evidence-informed training in Stem Cell, Biological Medicine and Peptide Therapy, with practical workshops and clinical protocols.",
                "تدريب قائم على الأدلة في الخلايا الجذعية والطب البيولوجي والعلاج بالببتيدات، مع ورش عمل تطبيقية وبروتوكولات سريرية."
              )}
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#E6F3EF] p-5 sm:p-8 rounded-2xl sm:rounded-[24px] border border-[#007A59]/20 shadow-sm flex flex-col gap-2 sm:gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <h4 className="text-base sm:text-lg font-bold text-[#007A59] tracking-wider uppercase text-center leading-snug">
              {t(<>INTERNATIONAL<br className="hidden sm:inline" /> COLLABORATION</>, "تعاون دولي")}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center font-medium">
              {t(
                "Build lasting professional relationships with physicians, specialists and researchers from around the world.",
                "ابنِ علاقات مهنية راسخة مع أطباء وأخصائيين وباحثين من مختلف أنحاء العالم."
              )}
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#E6F3EF] p-5 sm:p-8 rounded-2xl sm:rounded-[24px] border border-[#007A59]/20 shadow-sm flex flex-col gap-2 sm:gap-4 transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
            <h4 className="text-base sm:text-lg font-bold text-[#007A59] tracking-wider uppercase text-center leading-snug">
              {t(<>CLINIC GROWTH &<br className="hidden sm:inline" /> IMPLEMENTATION</>, "نمو العيادة والتطبيق")}
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed text-center font-medium">
              {t(
                "Ongoing guidance, staff training and business support to bring regenerative medicine into your clinic.",
                "إرشاد مستمر وتدريب للفريق ودعم في الأعمال لإدخال الطب التجديدي إلى عيادتك."
              )}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
