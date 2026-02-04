"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";

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

// Animated Counter Component
function AnimatedCounter({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            
            const startTime = Date.now();
            const endTime = startTime + duration;

            const updateCounter = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / duration, 1);
              
              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(easeOutQuart * value);
              
              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                setCount(value);
              }
            };

            requestAnimationFrame(updateCounter);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={counterRef}>
      <p className="text-3xl font-bold text-[#007A59]">
        {count}{suffix}
      </p>
    </div>
  );
}

const galleryImages = [
  {
    src: "/images/sym/home_g_1.jpg",
    alt: "International doctors at symposium",
  },
  {
    src: "/images/sym/home_g_2.jpg",
    alt: "Clinical discussion session",
  },
  {
    src: "/images/sym/home_g_3.jpg",
    alt: "Professional networking event",
  },
  {
    src: "/images/sym/home_g_4.jpg",
    alt: "Medical presentation",
  },
  {
    src: "/images/sym/home_g_5.jpg",
    alt: "Strategic collaboration meeting",
  },
  {
    src: "/images/sym/home_g_6.jpg",
    alt: "Symposium attendees",
  },
  {
    src: "/images/sym/home_g_7.jpg",
    alt: "Conference networking moment",
  },
  {
    src: "/images/sym/home_g_8.jpg",
    alt: "Clinical workshop session",
  },
  {
    src: "/images/sym/home_g_9.jpg",
    alt: "Panel discussion",
  },
];

export function GallerySection() {
  useScrollAnimation();
  
  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

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
      `}</style>
      
      <section className="py-24 bg-[#CDB06A]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#005744] mb-6 text-balance">
              Past OXYZ International Symposiums
            </h2>
            <p className="text-lg text-[#005744]/80 leading-relaxed">
              A glimpse into our medical and professional community. The OXYZ
              International Symposium series brings together medical professionals,
              clinic owners, and healthcare leaders from different regions.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 mb-12 w-screen mx-[calc(50%-50vw)] animate-on-scroll">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold ${
                  index === 0 || index === 5 ? "md:col-span-1 md:row-span-1" : ""
                }`}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    quality={100}
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300" />
                </div>
              </button>
            ))}
          </div>

          {/* Participants Info */}
          <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl p-8 mb-12 shadow-xl animate-on-scroll">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="animate-on-scroll stagger-1 scale-in">
                <AnimatedCounter value={6} suffix="+" duration={2000} />
                <p className="text-[#005744] mt-2 font-medium">Continents Represented</p>
              </div>
              <div className="animate-on-scroll stagger-2 scale-in">
                <AnimatedCounter value={100} suffix="+" duration={2000} />
                <p className="text-[#005744] mt-2 font-medium">Medical Professionals</p>
              </div>
              <div className="animate-on-scroll stagger-3 scale-in">
                <AnimatedCounter value={50} suffix="+" duration={2000} />
                <p className="text-[#005744] mt-2 font-medium">Clinical Topics Covered</p>
              </div>
              <div className="animate-on-scroll stagger-4 scale-in">
                <AnimatedCounter value={20} suffix="+" duration={2000} />
                <p className="text-[#005744] mt-2 font-medium">Countries Attended</p>
              </div>
            </div>
          </div>

          <div className="text-center animate-on-scroll">
            <Link href="/past-symposiums">
              <Button 
                size="lg"
                className="bg-[#007A59] hover:bg-[#006048] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                View All Past Symposiums
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {selectedImage ? (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={selectedImage.alt}
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                type="button"
                className="absolute -top-12 right-0 text-white hover:text-gold"
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative w-full aspect-[4/3] bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  quality={100}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}