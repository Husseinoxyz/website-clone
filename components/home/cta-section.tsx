"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-24 bg-muted">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="bg-background rounded-2xl p-12 shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Get Started
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6 text-balance">
              Begin the Conversation
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              OXYZ engages selectively with professionals who value medical
              integrity, structured systems, and long-term impact. If this
              reflects your intent, we welcome your application.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-gold hover:bg-gold-dark text-[#007A59] font-semibold px-8"
                >
                  Apply to Engage With OXYZ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold px-8 bg-transparent"
                >
                  Apply to Attend Symposium 2026
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
