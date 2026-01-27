"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-2.jpg"
          alt="Get started background"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/55" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
            Get Started
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            Begin the Conversation
          </h2>
          <p className="text-lg text-secondary-foreground/85 mb-8 leading-relaxed">
            OXYZ engages selectively with professionals who value medical
            integrity, structured systems, and long-term impact. If this
            reflects your intent, we welcome your application.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8"
              >
                Apply to Engage With OXYZ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold px-8 bg-transparent"
              >
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
