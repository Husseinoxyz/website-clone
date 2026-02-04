"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  X,
} from "lucide-react";

const packageFeatures = [
  // Package I Features
  {
    name: "4 nights hotel stay (single occupancy, breakfast included)",
    packageI: true,
    packageII: true,
    packageIII: true,
  },
  {
    name: "Full access to all 3-day symposium sessions",
    packageI: true,
    packageII: true,
    packageIII: true,
  },
  {
    name: "All official meals and Gala Dinner",
    packageI: true,
    packageII: true,
    packageIII: true,
  },
  {
    name: "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
    packageI: true,
    packageII: true,
    packageIII: true,
  },
  // Package II Exclusive Features
  {
    name: "Advanced OXYZ product suite",
    packageI: false,
    packageII: true,
    packageIII: true,
  },
  {
    name: "VIP on-site diagnostics",
    packageI: false,
    packageII: true,
    packageIII: true,
  },
  {
    name: "1-on-1 clinical protocol consultation",
    packageI: false,
    packageII: true,
    packageIII: true,
  },
  {
    name: "Referral partnership",
    packageI: false,
    packageII: true,
    packageIII: true,
  },
  // Package III Exclusive Features
  {
    name: "Root Cause BR Scan Machine with SOPs",
    packageI: false,
    packageII: false,
    packageIII: true,
  },
  {
    name: "Executive strategy and regional expansion planning",
    packageI: false,
    packageII: false,
    packageIII: true,
  },
  {
    name: "Security deposit waived",
    packageI: false,
    packageII: false,
    packageIII: true,
  },
  {
    name: "Post-event clinical and staff training",
    packageI: false,
    packageII: false,
    packageIII: true,
  },
  {
    name: "Elite business associate status",
    packageI: false,
    packageII: false,
    packageIII: true,
  },
];

const packageHighlights = [
  "4 nights hotel stay (single occupancy, breakfast included)",
  "Full access to all 3-day symposium sessions",
  "All official meals and Gala Dinner",
  "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
];

const packages = [
  {
    id: "package-i",
    title: "BRONZE",
    title2: "PACKAGE",
    subtitle: "Essential Access · Clinical Introduction",
    price: "$2,500",
    priceNote: "per person",
    standardPrice: "",
    borderColor: "border-[#C9793C]",
    accentGradient: "from-[#D2825A] to-[#B86941]",
    textColor: "text-[#CC7A3B]",
    buttonClass: "bg-[#CC7A3B] hover:bg-[#B86B32] border-[#CC7A3B]",
    circleBorder: "border-[#C9793C]",
    features: [
      "4-Night Hotel Stay (Single, Breakfast Included)",
      "Full 3-Day Symposium Access + Gala Dinner",
      "Joint Certificate (OXYZ Academy × DFGTT – Germany)",
      "Entry-Level OXYZ Product Exposure",
      "Clinical & Business Networking Access",
    ],
    registerType: "package-i-early-bird",
    cta: "View Full Symposium Details",
  },
  {
    id: "package-ii",
    title: "SILVER",
    title2: "PACKAGE",
    subtitle: "Advanced Clinical Access · Growth Ready",
    price: "$10,000",
    priceNote: "per person",
    standardPrice: "",
    borderColor: "border-[#8F959C]",
    accentGradient: "from-[#C5CBD3] to-[#8E969D]",
    textColor: "text-[#8F959C]",
    buttonClass: "bg-[#8F959C] hover:bg-[#7A8088] border-[#8F959C]",
    circleBorder: "border-[#8F959C]",
    features: [
      "4-Night Hotel Stay (Single, Breakfast Included)",
      "Full 3-Day Symposium Access + All Official Meals",
      "Joint Certificate (OXYZ Academy × DFGTT – Germany)",
      "Advanced OXYZ Product Suite + VIP Diagnostics",
      "1-on-1 Clinical Consultation & Referral Partnership",
    ],
    registerType: "package-ii",
    popular: true,
    cta: "Explore Symposium Experience",
  },
  {
    id: "package-iii",
    title: "GOLD",
    title2: "PACKAGE",
    subtitle: "Elite Partnership · Full Business & Clinical Authority",
    price: "$25,000",
    priceNote: "per person",
    standardPrice: "",
    borderColor: "border-[#D3A400]",
    accentGradient: "from-[#F5D866] to-[#D4A928]",
    textColor: "text-[#E5B511]",
    buttonClass: "bg-[#E5B511] hover:bg-[#D3A400] border-[#E5B511]",
    circleBorder: "border-[#E5B511]",
    features: [
      "4-Night Hotel Stay (Single, Breakfast Included)",
      "Full 3-Day Symposium Access + VIP Gala Experience",
      "Joint Certificate (OXYZ Academy × DFGTT – Germany)",
      "Complete OXYZ System + Root Cause BR Scan Machine",
      "Executive Strategy, Training & Elite Associate Status",
    ],
    registerType: "package-iii",
    cta: "Discover the Full Gold Experience",
  },
];

export function RegistrationCTASection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#0B3B2E] via-[#0F4B3A] to-[#0A2F24]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
            Secure Your Place at Symposium 2026
          </h2>
          <p className="text-lg text-slate-200 leading-relaxed">
            This is a professionally curated symposium, not open to mass
            registration. All registrations are subject to review and
            confirmation. Seats are allocated to ensure medical relevance and
            alignment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-12 pt-16">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative overflow-visible rounded-3xl border-4 ${pkg.borderColor} bg-gradient-to-b from-[#1c1c1c] via-[#1a1a1a] to-[#0f0f0f] shadow-2xl transition-transform hover:scale-105 ${pkg.popular ? 'md:scale-105' : ''}`}
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

              <div className="relative flex flex-col gap-6 p-8 pt-10">
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
                <ul className="space-y-3 flex-grow min-h-[220px]">
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

        <p className="text-center text-slate-200 text-sm">
          Early Bird rates apply to Package I only and must be completed by 28 February 2026.
        </p>
      </div>
    </section>
  );
}
