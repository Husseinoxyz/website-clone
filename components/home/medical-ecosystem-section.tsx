"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Stethoscope, FlaskConical } from "lucide-react";

const features = [
  {
    icon: Activity,
    title: "Preventive & Medical Wellness",
    description: "Root-cause diagnostics and long-term functional outcomes",
  },
  {
    icon: Shield,
    title: "Regenerative & Cell-Based Medicine",
    description: "Cellular repair and biological optimization",
  },
  {
    icon: Stethoscope,
    title: "Integrated Medical Aesthetics",
    description: "Within integrative and regenerative medical frameworks",
  },
  {
    icon: FlaskConical,
    title: "Science-Backed Product Platforms",
    description: "Developed as clinical support tools",
  },
];

export function MedicalEcosystemSection() {
  return (
    <section className="py-24 bg-[#CDB06A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-stretch">
          {/* Image */}
          <div className="relative h-full min-h-[320px] lg:min-h-0 -mx-4 sm:-mx-6 lg:-mx-8">
            <div className="relative h-full overflow-hidden">
              <Image
                src="/images/medical-ecosystem.jpg"
                alt="Medical ecosystem"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#007A59]/20 rounded-lg -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-white/20 rounded-lg -z-10" />
          </div>
          
          {/* Content */}
          <div>
            <p className="text-[#007A59] font-semibold text-base sm:text-lg uppercase tracking-wider mb-4">
              Our Approach
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#005744] mb-8 text-balance leading-tight">
              A Medical-First Ecosystem
            </h2>
            <p className="text-xl sm:text-2xl text-[#005744]/80 mb-10 leading-relaxed">
              Regenerative medicine demands discipline, ethics, and structure.
              OXYZ integrates multiple medical disciplines through structured
              clinical and operational systems.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {features.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="flex-shrink-0 w-14 h-14 bg-[#007A59]/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-7 w-7 text-[#007A59]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#005744] mb-2 text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-base text-[#005744]/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link href="/about">
              <Button className="bg-[#007A59] hover:bg-[#006048] text-white font-semibold text-base px-8 py-6">
                About OXYZ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}