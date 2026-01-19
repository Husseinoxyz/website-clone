"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function FiveDModelSection() {
  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] mb-16">
          <div className="max-w-2xl">
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              Our Framework
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6 text-balance">
              One Model. Consistent Outcomes.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At the core of OXYZ is the 5D Biological Regenerative Medical Model.
              This framework ensures medical clarity before intervention,
              responsible regenerative application, and consistent patient
              journeys across all centers.
            </p>
          </div>
          <div className="relative h-80 sm:h-96 lg:h-[26rem] bg-muted/30">
            <Image
              src="/images/5d-hero.png"
              alt="5D regenerative medical model visualization"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain"
            />
          </div>
        </div>

        <div className="text-center">
          <Link href="/5d-model">
            <Button className="bg-gold hover:bg-gold-dark text-[#007A59] font-semibold">
              Explore the 5D Model
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
