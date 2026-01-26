"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

export function SymposiumSection() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/symposium-preview.jpg"
          alt="OXYZ Symposium background"
          fill
          className="object-cover blur-sm"
          priority
        />
      </div>
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,122,89,0.18),_transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(205,176,106,0.22),_transparent_60%)]" />
        <div className="absolute inset-0 opacity-40 bg-[linear-gradient(135deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.04)_25%,transparent_25%,transparent_50%,rgba(0,0,0,0.04)_50%,rgba(0,0,0,0.04)_75%,transparent_75%,transparent_100%)] bg-[length:24px_24px]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4 text-balance">
              OXYZ International Symposium 2026
            </h2>
            <p className="text-xl text-[#007A59] font-semibold mb-6">
              A Medical & Strategic Alignment Platform
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl">
              An invitation-only forum for doctors and healthcare leaders to
              align on clinical standards, systems, and long-term collaboration.
            </p>
            <ul className="grid gap-3 text-sm text-muted-foreground mb-8 max-w-xl">
              <li>Clinical protocol alignment and case standards.</li>
              <li>Operational frameworks for multi-center consistency.</li>
              <li>Strategic partner onboarding with clear governance.</li>
            </ul>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
                <Calendar className="h-6 w-6 text-gold" />
                <div>
                  <p className="text-sm text-[#007A59]">Date</p>
                  <p className="font-semibold text-[#007A59]">April 2026</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
                <MapPin className="h-6 w-6 text-gold" />
                <div>
                  <p className="text-sm text-[#007A59]">Location</p>
                  <p className="font-semibold text-[#007A59]">Malaysia</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-muted rounded-lg p-4">
                <Users className="h-6 w-6 text-gold" />
                <div>
                  <p className="text-sm text-[#007A59]">Capacity</p>
                  <p className="font-semibold text-[#007A59]">80-100</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/symposium">
                <Button className="bg-gold hover:bg-gold-dark text-[#007A59] font-semibold">
                  Explore Symposium 2026
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/register">
                <Button
                  variant="outline"
                  className="border-teal text-[#007A59] hover:bg-teal hover:text-secondary-foreground font-semibold bg-transparent"
                >
                  Apply to Attend
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/symposium-preview.jpg"
                alt="OXYZ Symposium"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-gold text-[#007A59] rounded-lg p-6 shadow-xl">
              <p className="text-sm font-medium">Early Bird</p>
              <p className="text-2xl font-bold">USD 2,500</p>
              <p className="text-xs mt-1">Until 28 Feb 2026</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
