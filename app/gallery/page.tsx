"use client";

import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { GalleryGrid } from "@/components/training/gallery-grid";
import { GalleryLoadMore } from "@/components/training/gallery-load-more";
import { ArrowRight, Sparkles, Camera, Globe, Users } from "lucide-react";
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

const gallery2025 = [
  "/images/sym/slide_1.jpg",
  "/images/sym/slide_2.jpg",
  "/images/sym/slide_3.jpg",
  "/images/sym/slide_4.jpg",
  "/images/sym/slide_5.jpg",
  "/images/sym/slide_6.jpg",
  "/images/sym/slide_7.jpg",
  "/images/sym/home_g_1.jpg",
  "/images/sym/home_g_2.jpg",
  "/images/sym/home_g_3.jpg",
  "/images/sym/home_g_4.jpg",
  "/images/sym/home_g_5.jpg",
  "/images/sym/home_g_6.jpg",
  "/images/sym/home_g_7.jpg",
  "/images/sym/home_g_8.jpg",
  "/images/sym/home_g_9.jpg",
].map((src) => ({
  src,
  alt: "2025 training highlight",
}));

const gallery2023 = Array.from({ length: 12 }, (_, index) => {
  const value = index + 1;
  const number = String(value).padStart(2, "0");
  const padded =
    value >= 10 && value <= 12 ? `0${value}` : number;
  const src =
    value === 11
      ? "/images/sym/011.png"
      : value === 12
        ? "/images/sym/012.png"
        : `/images/sym/${padded}.jpg`;

  return {
    src,
    alt: "2023 training highlight",
  };
});

const stats = [
  { icon: Globe, value: "6", label: "Continents" },
  { icon: Users, value: "100+", label: "Professionals" },
  { icon: Camera, value: "20+", label: "Countries" },
];

export default function GalleryPage() {
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
      <Header />
      <main>
        {/* Hero - Enhanced */}
        <section className="relative w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/gallery_hero.jpg"
              alt="OXYZ training gathering"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/15" />
          </div>

          {/* Content Container - Positioned at bottom */}
          <div className="relative z-10 flex items-end min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-20">
            <div className="max-w-4xl w-full">
              
              {/* Badge */}
              <div className="mb-6 animate-fade-in-up opacity-0 animation-delay-100">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                  <Sparkles className="h-4 w-4" />
                  Gallery
                </div>
              </div>

              {/* Main Title */}
              <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
                <h1 className="font-bold leading-[1.15] text-[#CDB06A]">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Moments from the
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                    OXYZ Trainings
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide">
                    A Visual Archive of Clinical Excellence
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl animate-fade-in-up opacity-0 animation-delay-400 font-light">
                A curated visual archive of clinical exchange, strategic alignment, and the global community shaping regenerative medicine.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap gap-6 mb-10 sm:mb-12 animate-fade-in-up opacity-0 animation-delay-500">
                {stats.map((stat, idx) => (
                  <div key={stat.label} className="flex items-center gap-3 text-white/90">
                    <stat.icon className="h-5 w-5 text-gold" />
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-white">{stat.value}</span>
                      <span className="text-sm">{stat.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up opacity-0 animation-delay-600">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-2xl shadow-[#CDB06A]/40 transition-all hover:shadow-[#CDB06A]/60 hover:scale-105"
                  >
                    Register for 2026
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://wa.me/6586163762?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Training%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg bg-transparent transition-all hover:scale-105"
                  >
                    Request Scientific Program
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between animate-on-scroll">
                <div className="max-w-2xl">
                  <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-4">
                    Clinical depth meets strategic connection
                  </h2>
                  <p className="text-xl sm:text-2xl text-gold leading-relaxed">
                    Each frame captures collaboration, discussion, and the
                    standards that define the OXYZ ecosystem.
                  </p>
                </div>
                <div className="flex items-center gap-4 text-sm text-[#007A59]">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  Updated with the latest international training highlights.
                </div>
              </div>
            </div>

            <div className="mt-16 animate-on-scroll">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-semibold text-[#007A59] mb-6">
                  2025 International Training
                </h3>
              </div>
              <GalleryLoadMore
                alt="2025 training highlight"
                images={gallery2025.map((image) => image.src)}
                initialCount={12}
              />
            </div>

            <div className="mt-16 animate-on-scroll">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-semibold text-[#007A59] mb-6">
                  2023 International Training
                </h3>
              </div>
              <GalleryGrid
                alt="2023 training highlight"
                images={gallery2023.map((image) => image.src)}
              />
            </div>
          </div>
        </section>

        {/* Strategy Section - Enhanced */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6 animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59]">
                  Where strategy, science, and trust converge
                </h2>
                <p className="text-xl sm:text-2xl text-gold leading-relaxed">
                  OXYZ international trainings are designed for meaningful exchange and
                  clinical alignment, not mass attendance. The result is a
                  focused environment where relationships are built with depth.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  {[
                    "Clinical Standards",
                    "Partner Alignment",
                    "Executive Forums",
                    "Medical Workshops",
                  ].map((tag, idx) => (
                    <span
                      key={tag}
                      className={`animate-on-scroll stagger-${idx + 1} rounded-full border border-teal/30 bg-gradient-to-r from-teal/5 to-teal/10 px-4 py-2 text-teal-dark font-medium hover:border-teal/50 transition-colors`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative animate-on-scroll slide-in-right scale-in">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-gold/30 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <Image
                    src="/images/sym/home_g_4.jpg"
                    alt="Strategic collaboration meeting"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {["/images/sym/03.jpg", "/images/sym/04.jpg"].map(
                    (src, idx) => (
                      <div
                        key={src}
                        className={`animate-on-scroll stagger-${idx + 3} relative aspect-[4/3] overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow`}
                      >
                        <Image
                          src={src}
                          alt="OXYZ training highlight"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Enhanced */}
        <section className="py-24 text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Next chapter background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Be Part of Training 2026
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8">
                Register your interest and join the next cohort of leaders shaping the future of regenerative medicine.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register">
                  <Button 
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-white font-semibold px-8"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/past-trainings">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-semibold px-8 bg-transparent"
                  >
                    View Past Trainings
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
