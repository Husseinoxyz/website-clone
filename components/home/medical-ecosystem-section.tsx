"use client";

import Link from "next/link";
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
      
      <section className="bg-[#CDB06A] overflow-hidden py-8 lg:py-16">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-6 sm:px-8 lg:px-12">
          {/* Video */}
          <div className="w-full max-w-sm lg:w-5/12 animate-on-scroll slide-in-left scale-in shrink-0">
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
              <video
                src="/images/Dr%20Gisele%20explaining%20about%20symposium.mp4"
                autoPlay
                muted
                loop
                playsInline
                controls
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full lg:w-7/12 animate-on-scroll slide-in-right flex flex-col justify-center py-4 lg:py-0">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#005744] mb-4 leading-tight">
              A Medical-First Ecosystem
            </h2>
            <p className="text-base sm:text-lg text-[#005744]/90 mb-6 leading-relaxed">
              Regenerative medicine demands discipline, ethics, and structure.
              OXYZ integrates multiple medical disciplines through structured
              clinical and operational systems.
            </p>
            
            <div className="space-y-3 mb-6">
              {features.map((feature, idx) => (
                <div 
                  key={feature.title} 
                  className={`animate-on-scroll stagger-${idx + 1} flex items-start gap-3`}
                >
                  <feature.icon className="h-5 w-5 text-[#007A59] flex-shrink-0 mt-0.5" />
                  <div className="text-sm sm:text-base">
                    <span className="font-semibold text-[#005744]">{feature.title}</span>
                    <span className="text-[#005744]/80"> — {feature.description}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="animate-on-scroll">
              <Link href="/about">
                <Button 
                  className="bg-[#007A59] hover:bg-[#006048] text-white font-semibold text-sm sm:text-base px-6 py-2.5 h-auto shadow-md hover:shadow-lg transition-all hover:scale-105"
                >
                  About OXYZ
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
