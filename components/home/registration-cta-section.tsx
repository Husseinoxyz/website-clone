"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const silverTierFeatures = [
  "4 nights hotel stay (single occupancy, breakfast included)",
  "Full access to all 3-day training sessions",
  "All official meals and Gala Dinner",
  "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
];

export function RegistrationCTASection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#0B3B2E] via-[#0F4B3A] to-[#0A2F24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6 text-balance">
            Secure Your Place for OXYZ International Stem Cell Training 2026
          </h2>
          <p className="text-base sm:text-lg text-gold leading-relaxed">
            This is a professionally curated training, not open to mass
            registration. All registrations are subject to review and
            confirmation. Seats are allocated to ensure medical relevance and
            alignment.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="mb-12 pt-10 sm:pt-16 max-w-3xl mx-auto">
          <div className="relative mt-14 sm:mt-0 overflow-visible rounded-3xl border-4 border-[#8F959C] bg-gradient-to-b from-[#1c1c1c] via-[#1a1a1a] to-[#0f0f0f] shadow-2xl">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 sm:-top-20 z-10">
              <div className="h-24 w-24 sm:h-40 sm:w-40 rounded-full bg-gradient-to-br from-[#C5CBD3] to-[#8E969D] shadow-[0_12px_32px_rgba(0,0,0,0.4)] flex items-center justify-center border-[6px] sm:border-[8px] border-[#8F959C]">
                <div className="text-center leading-tight">
                  <div className="text-sm sm:text-2xl font-black text-[#1a1a1a]">SILVER</div>
                  <div className="text-sm sm:text-2xl font-black text-[#1a1a1a]">TIER</div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-3 p-5 sm:p-6 pt-14 sm:pt-10">
              <div>
                <div className="text-[#8F959C] border-b-2 border-[#8F959C] pb-3 mb-4 inline-block">
                  <p className="text-2xl sm:text-4xl font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] leading-tight">
                    STEM CELL
                  </p>
                  <p className="text-2xl sm:text-4xl font-black uppercase tracking-[0.08em] sm:tracking-[0.12em] leading-tight">
                    SCHOLAR
                  </p>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gold mb-2">
                  Early Bird rate available until 28 February 2026
                </h3>
              </div>

              <ul className="space-y-2">
                {silverTierFeatures.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-white/90"
                  >
                    <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-1 flex flex-col gap-2.5">
                <div className="rounded-2xl border-2 border-gold/60 bg-gold/10 p-3.5 sm:p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-gold">
                    Early Bird rate
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                    $ 2,500 per person
                  </p>
                  <Link href="/register?type=silver-tier-early-bird" className="block mt-2.5">
                    <Button className="w-full rounded-xl bg-gold hover:bg-gold-dark text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all border-2 border-gold uppercase tracking-wide">
                      Register Now
                    </Button>
                  </Link>
                </div>

                <div className="rounded-2xl border-2 border-[#8F959C] bg-[#8F959C]/15 p-3.5 sm:p-4">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[#C5CBD3]">
                    Standard rate
                  </p>
                  <p className="text-2xl sm:text-3xl font-black text-white mt-0.5">
                    $ 3,000 per person
                  </p>
                  <Link href="/register?type=silver-tier-standard" className="block mt-2.5">
                    <Button className="w-full rounded-xl bg-[#8F959C] hover:bg-[#7A8088] text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all border-2 border-[#8F959C] uppercase tracking-wide">
                      Register Now
                    </Button>
                  </Link>
                </div>

                <Link href="/training" className="block">
                  <Button className="w-full rounded-xl bg-[#8F959C] hover:bg-[#7A8088] text-white font-bold py-3 shadow-lg hover:shadow-xl transition-all border-2 border-[#8F959C] uppercase tracking-wide">
                    Discover more
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <p className="text-center text-gold text-sm">
          Early Bird rates apply to Silver Tier only and must be completed by 28 February 2026.
        </p>
      </div>
    </section>
  );
}
