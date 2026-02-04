"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

export function FiveDModelSection() {
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
      `}</style>
      
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] mb-16">
            {/* Left Content */}
            <div className="max-w-2xl animate-on-scroll slide-in-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#007A59]/30 bg-[#007A59]/10 px-4 py-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#007A59]">
                  Our Framework
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6 text-balance">
                One Model. Consistent Outcomes.
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At the core of OXYZ is the 5D Biological Regenerative Medical Model.
                This framework ensures medical clarity before intervention,
                responsible regenerative application, and consistent patient
                journeys across all centers.
              </p>

              {/* Key Points */}
              <div className="grid gap-4 mb-8">
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-slate-200 hover:border-[#007A59]/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#007A59] mb-1">Medical Clarity</h3>
                    <p className="text-sm text-muted-foreground">Comprehensive diagnostics before any intervention</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-slate-200 hover:border-[#007A59]/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#007A59] mb-1">Responsible Application</h3>
                    <p className="text-sm text-muted-foreground">Evidence-based regenerative protocols</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 bg-white rounded-lg p-4 border border-slate-200 hover:border-[#007A59]/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-[#007A59] mb-1">Consistent Journeys</h3>
                    <p className="text-sm text-muted-foreground">Standardized patient care across all centers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative animate-on-scroll slide-in-right scale-in">
              <div className="relative h-[32rem] sm:h-[36rem] lg:h-[40rem]">
                <Image
                  src="/images/5D.png"
                  alt="5D regenerative medical model visualization"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#007A59]/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
          
          {/* CTA */}
          <div className="text-center animate-on-scroll">
            <Link href="/5d-model">
              <Button 
                size="lg"
                className="bg-gold hover:bg-gold-dark text-[#007A59] font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Explore the 5D Model
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <p className="text-sm text-muted-foreground mt-4">
              Discover how our framework ensures medical excellence
            </p>
          </div>
        </div>
      </section>
    </>
  );
}