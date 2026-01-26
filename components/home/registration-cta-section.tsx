"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const registrationOptions = [
  {
    title: "Package I: Stem Cell Scholar",
    price: "USD 2,500 / 3,000",
    deadline: "Early Bird by 28 Feb 2026",
    features: [
      "4 nights hotel accommodation with daily breakfast",
      "Full access to 3-day scientific sessions",
      "All meals, refreshments, and Gala Dinner",
      "Joint Certificate from OXYZ Academy & DFGTT",
      "Exclusive hamper with full trial series",
    ],
    highlight: true,
  },
  {
    title: "Package II: Immersive Experience",
    price: "USD 10,000",
    deadline: "Total Value: USD 15,500",
    features: [
      "All Package I benefits included",
      "Personal Stem Cell Suite and BioSeries",
      "VIP clinical screening and HRV",
      "1-on-1 Cellular Reset protocol design",
      "Referral agreement (15-20% commission)",
    ],
    highlight: false,
  },
  {
    title: "Package III: Global Elite Partner",
    price: "USD 25,000",
    deadline: "Total Value: USD 51,400",
    features: [
      "All Package I & II benefits included",
      "Root Cause BR Scan Machine + SOPs",
      "Inventory suite and Mega+ Cell set",
      "Licensing & regional expansion consult",
      "Dealership status (30-35% margin)",
    ],
    highlight: false,
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
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 mb-12">
          {registrationOptions.map((option) => (
            <div
              key={option.title}
              className={`rounded-lg p-8 ${
                option.highlight
                  ? "bg-gold text-foreground ring-4 ring-gold-light md:col-span-2 xl:col-span-1"
                  : "bg-secondary-foreground/10 text-secondary-foreground"
              } group transition-transform duration-300 hover:-translate-y-1 transition-colors ${
                option.highlight ? "hover:bg-gold/90" : "hover:bg-secondary-foreground/20"
              }`}
            >
              {option.highlight && (
                <span className="inline-block bg-teal text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Recommended
                </span>
              )}
              <h3
                className={`text-xl font-bold mb-2 ${
                  option.highlight ? "text-[#007A59]" : "text-gold"
                }`}
              >
                {option.title}
              </h3>
              <p
                className={`text-3xl font-bold mb-1 transition-transform duration-300 group-hover:scale-[1.03] ${
                  option.highlight ? "text-[#007A59]" : "text-secondary-foreground"
                }`}
              >
                {option.price}
              </p>
              <p
                className={`text-sm mb-6 ${
                  option.highlight
                    ? "text-foreground/70"
                    : "text-secondary-foreground/70"
                }`}
              >
                {option.deadline}
              </p>
              <ul className="space-y-3 mb-8">
                {option.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`h-5 w-5 flex-shrink-0 ${
                        option.highlight ? "text-teal" : "text-gold"
                      }`}
                    />
                    <span
                      className={`text-base ${
                        option.highlight
                          ? "text-foreground/80"
                          : "text-secondary-foreground/80"
                      }`}
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link href="/register" className="block">
                <Button
                  className={`w-full font-semibold ${
                    option.highlight
                      ? "bg-teal hover:bg-teal-dark text-white"
                      : "bg-gold hover:bg-gold-dark text-white"
                  } transition-transform duration-300 hover:-translate-y-0.5`}
                >
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
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
