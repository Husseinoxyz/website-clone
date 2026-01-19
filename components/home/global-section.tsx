"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";

const locations = [
  {
    country: "USA",
    description: "Medical IP & formulation science",
    flag: "US",
  },
  {
    country: "Singapore",
    description: "International B2B, trade & compliance",
    flag: "SG",
  },
  {
    country: "Malaysia",
    description: "Fully operating flagship centers",
    flag: "MY",
  },
];

export function GlobalSection() {
  return (
    <section className="py-24 bg-teal-dark text-secondary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/world-map.jpg"
          alt="World map"
          fill
          className="object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
              International Presence
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6 text-balance">
              Global by Design
            </h2>
            <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed max-w-2xl">
              A deliberately structured international footprint ensures
              scientific governance, operational integrity, and scalable
              expansion within a shared global framework.
            </p>

            <div className="space-y-6">
              {locations.map((location) => (
                <div
                  key={location.country}
                  className="flex items-start gap-4 bg-secondary-foreground/10 rounded-lg p-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gold text-lg">
                      {location.country}
                    </h3>
                    <p className="text-secondary-foreground/80">
                      {location.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-secondary-foreground/10 rounded-lg p-8 text-center">
              <span className="text-5xl font-bold text-gold">3</span>
              <p className="text-secondary-foreground/80 mt-2">Global Regions</p>
            </div>
            <div className="bg-secondary-foreground/10 rounded-lg p-8 text-center">
              <span className="text-5xl font-bold text-gold">5D</span>
              <p className="text-secondary-foreground/80 mt-2">Medical Model</p>
            </div>
            <div className="bg-secondary-foreground/10 rounded-lg p-8 text-center">
              <span className="text-5xl font-bold text-gold">100+</span>
              <p className="text-secondary-foreground/80 mt-2">Professionals</p>
            </div>
            <div className="bg-secondary-foreground/10 rounded-lg p-8 text-center">
              <span className="text-5xl font-bold text-gold">6+</span>
              <p className="text-secondary-foreground/80 mt-2">Continents Served</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
