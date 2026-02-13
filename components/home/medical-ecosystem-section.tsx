"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Activity, Shield, Stethoscope, FlaskConical } from "lucide-react";
import { useEffect } from "react";

// Custom hook for scroll animations
function useScrollAnimation() {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      elements.forEach((el) => observer.observe(el));
      observers.push(observer);
    };

    animateOnScroll();

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
}

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
  useScrollAnimation();

  return (
    <>
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-left {
          transform: translateX(-50px);
        }

        .slide-in-left.animated {
          transform: translateX(0);
        }

        .slide-in-right {
          transform: translateX(50px);
        }

        .slide-in-right.animated {
          transform: translateX(0);
        }

        .scale-in {
          transform: scale(0.9);
        }

        .scale-in.animated {
          transform: scale(1);
        }

        .stagger-1 {
          transition-delay: 0.1s;
        }

        .stagger-2 {
          transition-delay: 0.2s;
        }

        .stagger-3 {
          transition-delay: 0.3s;
        }

        .stagger-4 {
          transition-delay: 0.4s;
        }
      `}</style>
      
      <section className="bg-[#CDB06A] overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-0 items-stretch">
          {/* Image */}
          <div className="relative min-h-[320px] lg:min-h-[450px] animate-on-scroll slide-in-left scale-in">
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/medical-ecosystem.jpg"
                alt="Medical ecosystem"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="px-4 sm:px-6 lg:px-16 py-12 lg:py-16 animate-on-scroll slide-in-right">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#005744] mb-8 leading-tight sm:whitespace-nowrap">
              A Medical-First Ecosystem
            </h2>
            <p className="text-xl sm:text-2xl text-[#005744]/80 mb-10 leading-relaxed">
              Regenerative medicine demands discipline, ethics, and structure.
              OXYZ integrates multiple medical disciplines through structured
              clinical and operational systems.
            </p>
            
            <div className="space-y-4 mb-10">
              {features.map((feature, idx) => (
                <div 
                  key={feature.title} 
                  className={`animate-on-scroll stagger-${idx + 1} flex items-start gap-3`}
                >
                  <feature.icon className="h-5 w-5 text-[#007A59] flex-shrink-0 mt-1" />
                  <div>
                    <span className="font-semibold text-[#005744]">{feature.title}</span>
                    <span className="text-[#005744]/70"> — {feature.description}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="animate-on-scroll">
              <Link href="/about">
                <Button 
                  size="lg"
                  className="bg-[#007A59] hover:bg-[#006048] text-white font-semibold text-base px-8 py-6 shadow-lg hover:shadow-xl transition-all hover:scale-105"
                >
                  About OXYZ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
