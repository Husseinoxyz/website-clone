"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

export function TrainingCtaStrip() {
  return (
    <section className="py-8 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-border bg-muted px-6 py-6">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground">
              Ready to join?
            </p>
            <p className="text-lg font-semibold text-foreground">
              Secure your place or speak with our team on WhatsApp.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/register">
              <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                Register Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link href="https://wa.me/6586163762?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Training%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you." target="_blank" rel="noreferrer">
              <Button variant="outline" className="border-gold text-gold hover:bg-gold hover:text-foreground font-semibold">
                Request More Details
                <MessageCircle className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
