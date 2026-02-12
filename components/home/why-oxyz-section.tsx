"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
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

const benefits = [
  "Medical-first governance",
  "Proven regenerative framework",
  "Multiple revenue layers, one ecosystem",
  "Strong branding & marketing systems",
  "Long-term partner support",
];

export function WhyOXYZSection() {
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
          transform: scale(0.95);
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

        .stagger-5 {
          transition-delay: 0.5s;
        }
      `}</style>
      
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="animate-on-scroll slide-in-left">
              <div className="mb-6" />
              
              <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6 text-balance">
                Why Professionals Choose OXYZ
              </h2>
              
              <p className="text-gold text-xl sm:text-2xl mb-8 leading-relaxed max-w-2xl">
                We scale by alignment and capability, not volume. OXYZ integrates
                regenerative medicine, preventive health, aesthetics, products,
                and structured business models under one governance framework.
              </p>
              
              <ul className="space-y-3 mb-8">
                {benefits.map((benefit, idx) => (
                  <li key={benefit} className={`animate-on-scroll stagger-${idx + 1} flex items-center gap-3`}>
                    <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0" />
                    <span className="text-[#007A59] font-medium">{benefit}</span>
                  </li>
                ))}
              </ul>
              
              <div className="animate-on-scroll">
                <Link href="/gallery">
                  <Button 
                    size="lg"
                    className="bg-teal hover:bg-teal-dark text-secondary-foreground font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
                  >
                    View Gallery
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Quote Card */}
            <div className="animate-on-scroll slide-in-right scale-in bg-gradient-to-br from-teal-dark to-teal rounded-2xl p-10 relative shadow-2xl border border-white/10">
              <div className="absolute top-6 left-6 text-8xl text-gold/30 font-serif leading-none">
                &ldquo;
              </div>
              <div className="relative">
                <p className="text-gold text-2xl leading-relaxed mb-8">
                  Regenerative medicine demands responsibility. Business
                  opportunities should emerge from medical mastery — not replace
                  it. OXYZ is not designed for rapid commercialization. It is
                  designed for sustainable medical excellence.
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gold rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-foreground font-bold text-xl">O</span>
                  </div>
                  <div>
                    <p className="font-bold text-gold text-lg">OXYZ Philosophy</p>
                    <p className="text-sm text-secondary-foreground/80">
                      Medical Integrity First
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
