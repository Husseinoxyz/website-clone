"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const benefits = [
  "Medical-first governance",
  "Proven regenerative framework",
  "Multiple revenue layers, one ecosystem",
  "Strong branding & marketing systems",
  "Long-term partner support",
];

export function WhyOXYZSection() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6 text-balance">
              Why Professionals Choose OXYZ
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              We scale by alignment and capability, not volume. OXYZ integrates
              regenerative medicine, preventive health, aesthetics, products,
              and structured business models under one governance framework.
            </p>

            <ul className="space-y-4 mb-8">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0" />
                  <span className="text-[#007A59] font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <Link href="/gallery">
              <Button className="bg-teal hover:bg-teal-dark text-secondary-foreground font-semibold">
                View Gallery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Quote Card */}
          <div className="bg-teal-dark rounded-lg p-10 relative">
            <div className="absolute top-6 left-6 text-8xl text-gold/20 font-serif">
              &ldquo;
            </div>
            <div className="relative">
              <p className="text-xl text-secondary-foreground leading-relaxed mb-6">
                Regenerative medicine demands responsibility. Business
                opportunities should emerge from medical mastery — not replace
                it. OXYZ is not designed for rapid commercialization. It is
                designed for sustainable medical excellence.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center">
                  <span className="text-foreground font-bold text-lg">O</span>
                </div>
                <div>
                  <p className="font-semibold text-gold">OXYZ Philosophy</p>
                  <p className="text-sm text-secondary-foreground/70">
                    Medical Integrity First
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
