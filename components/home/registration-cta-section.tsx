"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const packages = [
  {
    id: "package-i-early-bird",
    title: "SILVER",
    title2: "TIER",
    subtitle: "Stem Cell Scholar (Early Bird)",
    price: "$2,500",
    priceNote: "per person",
    standardPrice: "Early Bird by 28 February 2026",
    borderColor: "border-[#8F959C]",
    accentGradient: "from-[#C5CBD3] to-[#8E969D]",
    textColor: "text-[#8F959C]",
    buttonClass: "bg-[#8F959C] hover:bg-[#7A8088] border-[#8F959C]",
    circleBorder: "border-[#8F959C]",
    features: [
      "4 nights hotel stay (single occupancy, breakfast included)",
      "Full access to all 3-day symposium sessions",
      "All official meals and Gala Dinner",
      "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
    ],
    registerType: "package-i-early-bird",
    cta: "Discover Silver",
  },
  {
    id: "package-i-standard",
    title: "SILVER",
    title2: "TIER",
    subtitle: "Stem Cell Scholar (Standard)",
    price: "$3,000",
    priceNote: "per person",
    standardPrice: "After 28 February 2026",
    borderColor: "border-[#8F959C]",
    accentGradient: "from-[#C5CBD3] to-[#8E969D]",
    textColor: "text-[#8F959C]",
    buttonClass: "bg-[#8F959C] hover:bg-[#7A8088] border-[#8F959C]",
    circleBorder: "border-[#8F959C]",
    features: [
      "4 nights hotel stay (single occupancy, breakfast included)",
      "Full access to all 3-day symposium sessions",
      "All official meals and Gala Dinner",
      "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
    ],
    registerType: "package-i-standard",
    cta: "Discover Silver",
  },
];

export function RegistrationCTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B3B2E] via-[#0F4B3A] to-[#0A2F24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6 text-balance">
            Secure Your Place for OXYZ International Stem Cell Training 2026
          </h2>
          <p className="text-lg text-gold leading-relaxed">
            This is a professionally curated training, not open to mass
            registration. All registrations are subject to review and
            confirmation. Seats are allocated to ensure medical relevance and
            alignment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-16 sm:gap-10 md:gap-8 md:grid-cols-2 mb-12 pt-16 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative mt-20 sm:mt-0 overflow-visible rounded-3xl border-4 ${pkg.borderColor} bg-gradient-to-b from-[#1c1c1c] via-[#1a1a1a] to-[#0f0f0f] shadow-2xl transition-transform hover:scale-105 ${pkg.popular ? "md:scale-105" : ""}`}
            >
              {/* Price Circle - Border matches package color */}
              <div className="absolute -top-20 right-6 z-10">
                <div className={`h-40 w-40 rounded-full bg-gradient-to-br ${pkg.accentGradient} shadow-[0_12px_32px_rgba(0,0,0,0.4)] flex items-center justify-center border-[8px] ${pkg.circleBorder}`}>
                  <div className="text-center leading-tight">
                    <div className="text-3xl font-black text-[#1a1a1a]">{pkg.price}</div>
                    <div className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/80 mt-1">
                      {pkg.priceNote}
                    </div>
                  </div>
                </div>
              </div>

              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-1.5 text-xs font-bold text-slate-900 shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="relative flex flex-col gap-6 p-8 pt-10 min-h-[640px]">
                {/* Package Title - Larger and positioned at top */}
                <div>
                  <div className={`${pkg.textColor} border-b-2 ${pkg.borderColor} pb-4 mb-5 inline-block`}>
                    <p className="text-3xl font-black uppercase tracking-[0.15em] leading-tight">
                      {pkg.title}
                    </p>
                    <p className="text-3xl font-black uppercase tracking-[0.15em] leading-tight">
                      {pkg.title2}
                    </p>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {pkg.subtitle}
                  </h3>
                  <div className="text-xs text-white/60">
                    {pkg.standardPrice}
                  </div>
                </div>

                {/* Highlights */}
                <ul className="space-y-3 flex-grow min-h-[320px]">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-white/90"
                    >
                      <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Link
                  href="/symposium"
                  className="block mt-4"
                >
                  <Button
                    className={`w-full rounded-full ${pkg.buttonClass} text-white font-bold py-6 shadow-lg hover:shadow-xl transition-all border-2 uppercase tracking-wide`}
                  >
                    {pkg.cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gold text-sm">
          Early Bird rates apply to Silver Tier only and must be completed by 28 February 2026.
        </p>
      </div>
    </section>
  );
}
