"use client";

import Image from "next/image";
import { MapPin } from "lucide-react";
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
      
      <section className="py-24 bg-gradient-to-br from-teal-dark to-teal text-secondary-foreground relative overflow-hidden">
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
            <div className="animate-on-scroll slide-in-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 mb-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-gold">
                  Global Presence
                </span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6 text-balance">
                Global by Design
              </h2>
              
              <p className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed max-w-2xl">
                A deliberately structured international footprint ensures
                scientific governance, operational integrity, and scalable
                expansion within a shared global framework.
              </p>
              
              <div className="space-y-4">
                {locations.map((location, idx) => (
                  <div
                    key={location.country}
                    className={`animate-on-scroll stagger-${idx + 1} flex items-start gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300`}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gold rounded-lg flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gold text-lg mb-1">
                        {location.country}
                      </h3>
                      <p className="text-secondary-foreground/90">
                        {location.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Stats */}
            <div className="animate-on-scroll slide-in-right">
              <div className="grid grid-cols-2 gap-6">
                <div className="animate-on-scroll stagger-1 scale-in bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                  <span className="text-5xl font-bold text-gold">3</span>
                  <p className="text-secondary-foreground/90 mt-2 font-medium">Global Regions</p>
                </div>
                <div className="animate-on-scroll stagger-2 scale-in bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                  <span className="text-5xl font-bold text-gold">5D</span>
                  <p className="text-secondary-foreground/90 mt-2 font-medium">Medical Model</p>
                </div>
                <div className="animate-on-scroll stagger-3 scale-in bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                  <span className="text-5xl font-bold text-gold">100+</span>
                  <p className="text-secondary-foreground/90 mt-2 font-medium">Professionals</p>
                </div>
                <div className="animate-on-scroll stagger-4 scale-in bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 text-center hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                  <span className="text-5xl font-bold text-gold">6+</span>
                  <p className="text-secondary-foreground/90 mt-2 font-medium">Continents Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}