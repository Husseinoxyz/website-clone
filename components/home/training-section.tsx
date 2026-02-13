"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
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

export function TrainingSection() {
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
      `}</style>
      
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/sym/symposium_hero.jpg"
            alt="OXYZ Training background"
            fill
            className="object-cover blur-sm"
            sizes="100vw"
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
            <div className="animate-on-scroll slide-in-left">
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-4 text-balance">
                OXYZ International Stem Cell Training 2026
              </h2>
              <p className="text-xl text-[#007A59] font-semibold mb-6">
                A Medical & Strategic Alignment Platform
              </p>
              <p className="text-gold text-xl sm:text-2xl mb-6 leading-relaxed max-w-2xl">
                An invitation-only forum for doctors and healthcare leaders to
                align on clinical standards, systems, and long-term collaboration.
              </p>
              <ul className="grid gap-3 text-sm text-gold mb-8 max-w-xl">
                <li>Clinical protocol alignment and case standards.</li>
                <li>Operational frameworks for multi-center consistency.</li>
                <li>Strategic partner onboarding with clear governance.</li>
              </ul>

              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                <div className="animate-on-scroll stagger-1 scale-in flex items-center gap-3 bg-muted rounded-lg p-4 hover:shadow-md transition-shadow">
                  <Calendar className="h-6 w-6 text-gold" />
                  <div>
                    <p className="text-sm text-[#007A59]">Date</p>
                    <p className="font-semibold text-[#007A59]">April 2026</p>
                  </div>
                </div>
                <div className="animate-on-scroll stagger-2 scale-in flex items-center gap-3 bg-muted rounded-lg p-4 hover:shadow-md transition-shadow">
                  <MapPin className="h-6 w-6 text-gold" />
                  <div>
                    <p className="text-sm text-[#007A59]">Location</p>
                    <p className="font-semibold text-[#007A59]">Malaysia</p>
                  </div>
                </div>
                <div className="animate-on-scroll stagger-3 scale-in flex items-center gap-3 bg-muted rounded-lg p-4 hover:shadow-md transition-shadow">
                  <Users className="h-6 w-6 text-gold" />
                  <div>
                    <p className="text-sm text-[#007A59]">Capacity</p>
                    <p className="font-semibold text-[#007A59]">80-100</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 animate-on-scroll">
                <Link href="/training">
                  <Button className="bg-gold hover:bg-gold-dark text-[#007A59] font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105">
                    Explore More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    variant="outline"
                    className="border-teal text-[#007A59] hover:bg-teal hover:text-secondary-foreground font-semibold bg-transparent"
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>

            {/* Image */}
            <Link
              href="/register?type=silver-tier-early-bird"
              className="relative block animate-on-scroll slide-in-right scale-in"
            >
              <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sym/symposium_hero.jpg"
                  alt="OXYZ Training"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-gold text-[#007A59] rounded-xl p-6 shadow-2xl hover:shadow-3xl transition-shadow">
                <p className="text-sm font-medium">Early Bird</p>
                <p className="text-2xl font-bold">USD 2,500</p>
                <p className="text-xs mt-1">Until 28 Feb 2026</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
