"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  ClipboardCheck,
  LineChart,
  Scan,
  ShieldCheck,
  Users,
} from "lucide-react";

const registrationOptions = [
  {
    key: "package-i",
    registerType: "package-i-early-bird",
    price: "USD 2,500",
    subPrice: "Early Bird | USD 3,000 Standard",
    deadline: "Early Bird Deadline: 28 February 2026",
    intro: "Includes Symposium Access + Hospitality:",
    features: [
      {
        icon: Calendar,
        text: "4 nights hotel stay (single occupancy, breakfast included)",
      },
      {
        icon: Users,
        text: "Full access to all 3-day symposium sessions",
      },
      {
        icon: ClipboardCheck,
        text: "All official meals and Gala Dinner",
      },
      {
        icon: BadgeCheck,
        text: "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
      },
    ],
    backgroundImage: "/images/symposium-hero.jpg",
    gradient: "from-gold/95 via-gold/90 to-gold/70",
    bg: "bg-gold",
    text: "text-foreground",
    button: "bg-teal hover:bg-teal-dark text-secondary-foreground",
    icon: "text-teal",
  },
  {
    key: "package-ii",
    registerType: "package-ii",
    price: "USD 10,000",
    subPrice: "Total Value: USD 15,500",
    deadline: null,
    intro: "Includes Package 1, Plus:",
    features: [
      { icon: LineChart, text: "Advanced OXYZ product suite" },
      { icon: Scan, text: "VIP on-site diagnostics" },
      { icon: Users, text: "1-on-1 clinical protocol consultation" },
      { icon: BadgeCheck, text: "Referral partnership" },
    ],
    backgroundImage: "/images/symposium-preview.jpg",
    gradient: "from-[#d1a654]/95 via-[#d1a654]/90 to-[#d1a654]/70",
    bg: "bg-[#d1a654]",
    text: "text-foreground",
    button: "bg-white text-foreground hover:bg-white/90",
    icon: "text-white",
  },
  {
    key: "package-iii",
    registerType: "package-iii",
    price: "USD 25,000",
    subPrice: "Total Value: USD 51,400",
    deadline: null,
    intro: "Includes Packages I & II, Plus:",
    features: [
      { icon: Scan, text: "Root Cause BR Scan Machine with SOPs" },
      {
        icon: LineChart,
        text: "Executive strategy and regional expansion planning",
      },
      { icon: ShieldCheck, text: "Security deposit waived" },
      { icon: Users, text: "Post-event clinical and staff training" },
      { icon: BadgeCheck, text: "Elite business associate status" },
    ],
    backgroundImage: "/images/world-map.jpg",
    gradient: "from-teal-dark/95 via-teal-dark/90 to-teal-dark/70",
    bg: "bg-teal-dark",
    text: "text-secondary-foreground",
    button: "bg-gold hover:bg-gold-dark text-foreground",
    icon: "text-gold",
  },
];

export function RegistrationCTASection() {
  return (
    <section className="py-24 bg-teal-dark text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6 text-balance">
            Secure Your Place at Symposium 2026
          </h2>
          <p className="text-lg text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto">
            This is a professionally curated symposium, not open to mass
            registration. All registrations are subject to review and
            confirmation. Seats are allocated to ensure medical relevance and
            alignment.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-12">
          {registrationOptions.map((option) => (
            <div
              key={option.key}
              className={`relative overflow-hidden rounded-3xl border ${
                option.key === "package-iii"
                  ? "border-teal/30"
                  : "border-gold/40"
              } ${option.bg} ${option.text}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-20"
                style={{ backgroundImage: `url('${option.backgroundImage}')` }}
              />
              <div
                className={`absolute inset-0 bg-gradient-to-r ${option.gradient}`}
              />
              <div className="relative flex flex-col gap-6 p-8">
                {option.key === "package-i" && (
                  <span className="inline-flex items-center gap-2 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-secondary-foreground">
                    Early Bird
                  </span>
                )}
                <p className="text-sm font-semibold opacity-90">
                  {option.intro}
                </p>
                <ul className="grid gap-4">
                  {option.features.map((feature) => (
                    <li key={feature.text} className="flex items-start gap-3">
                      <feature.icon
                        className={`h-5 w-5 flex-shrink-0 mt-0.5 ${option.icon}`}
                      />
                      <span className="text-sm opacity-85">{feature.text}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col gap-3">
                  <div>
                    <p className="text-3xl font-bold">{option.price}</p>
                    <p className="text-sm opacity-80">{option.subPrice}</p>
                    {option.deadline && (
                      <p className="text-xs opacity-70">{option.deadline}</p>
                    )}
                  </div>
                  <Link
                    href={`/register?type=${option.registerType}`}
                    className="block"
                  >
                    <Button className={`w-full font-semibold ${option.button}`}>
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-secondary-foreground/70 text-sm">
          Early Bird rates apply to Package I only. All registrations are
          subject to approval.
        </p>
      </div>
    </section>
  );
}
