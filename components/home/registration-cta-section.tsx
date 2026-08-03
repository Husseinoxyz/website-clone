"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const silverTierFeatures = [
  "4 nights hotel stay (single occupancy, breakfast included)",
  "Full access to all 3-day training sessions",
  "All official meals and Gala Dinner",
  "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
  "Internationally Accredited Certification (Stem Cell, Biological Medicine & Peptide)",
  "6 Months of Business Development & Clinic Growth Support",
  "6 Months of Post-Event Clinical Mentoring & Case Support",
  "AI in Regenerative Medicine integration training",
  "and more...",
];

export function RegistrationCTASection() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6 text-balance font-sans">
            Secure Your Place for Global Regenerative Medicine Summit 2026
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl mx-auto">
            This is a professionally curated training, not open to mass
            registration. All registrations are subject to review and
            confirmation. Seats are allocated to ensure medical relevance and
            alignment.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="max-w-2xl mx-auto">
          
          {/* Card Container */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-[#CDB06A]/20 bg-white shadow-2xl p-6 sm:p-10 text-slate-800">
            
            {/* Ambient Background Gold Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#CDB06A]/10 blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-[#007A59]/10 blur-[80px] pointer-events-none" />

            <div className="relative z-10 flex flex-col gap-6">
              
              {/* Card Header */}
              <div className="border-b border-slate-100 pb-6 text-center sm:text-left">
                <div className="inline-block bg-[#CDB06A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm">
                  VIP Package
                </div>
                
                <h3 className="text-3xl font-extrabold text-[#007A59] tracking-wide uppercase font-sans mb-2">
                  GLOBAL REGENERATIVE MEDICINE SUMMIT
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 font-medium">
                  Comprehensive 3-day clinical training & international certification
                </p>
              </div>

              {/* Package Details / Features */}
              <div className="py-2">
                <h4 className="text-xs uppercase font-bold text-[#CDB06A] tracking-wider mb-4">
                  What&apos;s Included:
                </h4>
                <ul className="grid grid-cols-1 gap-3.5">
                  {silverTierFeatures.map((feature, i) => {
                    const isLast = i === silverTierFeatures.length - 1;
                    return (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-slate-600"
                      >
                        {!isLast ? (
                          <Check className="h-5 w-5 text-[#CDB06A] flex-shrink-0 mt-0.5" />
                        ) : (
                          <span className="text-[#CDB06A] font-bold text-lg leading-none select-none flex-shrink-0 mt-0.5 mr-1">+</span>
                        )}
                        <span className={`text-sm sm:text-base ${isLast ? "text-[#007A59] font-bold italic" : "font-light"}`}>{feature}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              {/* Pricing & CTA Block */}
              <div className="border-t border-slate-100 pt-6 mt-2 flex flex-col gap-5">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="text-center sm:text-left">
                    <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                      VIP Registration Rate
                    </p>
                    <p className="text-3xl sm:text-4xl font-black text-[#007A59] mt-1">
                      $ 3,000 <span className="text-sm font-normal text-slate-400">/ per person</span>
                    </p>
                  </div>
                  
                  <Link href="/register?type=silver-tier-standard" className="w-full sm:w-auto">
                    <Button className="w-full sm:w-auto rounded-full bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 py-6 shadow-lg hover:shadow-xl transition-all border border-white/10 uppercase tracking-wide text-sm">
                      Register Now
                    </Button>
                  </Link>
                </div>

                {/* Secondary Discovery Button */}
                <Link href="/training" className="block w-fit mx-auto">
                  <Button className="rounded-full bg-[#007A59] hover:bg-[#006b4f] text-white font-semibold px-8 py-5 transition-all uppercase tracking-wide text-xs shadow-md">
                    Discover More Training Details
                  </Button>
                </Link>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
