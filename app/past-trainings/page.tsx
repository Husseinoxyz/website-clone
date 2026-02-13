"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InstagramReelsSection } from "@/components/home/instagram-reels-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GalleryGrid } from "@/components/training/gallery-grid";
import { GalleryLoadMore } from "@/components/training/gallery-load-more";
import { ArrowRight, Globe, Users, BookOpen, Handshake } from "lucide-react";
import { useEffect, useRef, useState } from "react";

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

const highlights = [
  { icon: Users, text: "International doctors and healthcare professionals" },
  { icon: BookOpen, text: "Regenerative & integrative medicine topics" },
  { icon: Handshake, text: "Clinical discussions and protocol sharing" },
  { icon: Globe, text: "Strategic networking and professional exchange" },
];

const regions = [
  "Asia Pacific",
  "Middle East",
  "North America",
  "Europe",
  "Africa",
  "International medical tourism and wellness markets",
];

const emphases = [
  "Responsible regenerative medicine",
  "Structured clinical thinking",
  "Ethical medical application",
  "Long-term professional collaboration",
];

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
  { value: 6, suffix: "+", label: "Continents Represented" },
  { value: 100, suffix: "+", label: "Medical Professionals" },
  { value: 50, suffix: "+", label: "Clinical Topics" },
  { value: 20, suffix: "+", label: "Countries" },
];

function AnimatedCounter({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <div ref={counterRef} className="text-6xl font-bold text-[#007A59] mb-2">
      {count}{suffix}
    </div>
  );
}

export default function PastTrainingsPage() {
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
              src="/images/sym/past_symposium.jpg"
              alt="Past OXYZ training highlights"
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
              
              {/* Main Title */}
              <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
                <h1 className="font-bold leading-[1.15] text-[#CDB06A]">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Past OXYZ International
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                    Stem Cell Trainings
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide">
                    Building Professional Excellence Since 2023
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-2xl animate-fade-in-up opacity-0 animation-delay-400 font-light">
                A glimpse into our medical and professional community. The OXYZ International Stem Cell Training Series brings together medical professionals, clinic owners, and healthcare leaders from different regions.
              </p>

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

        {/* Introduction */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#007A59] mb-6 text-balance">
                  Building Professional Excellence
                </h2>
                <p className="text-xl sm:text-2xl text-gold mb-6 leading-relaxed">
                  Organized by OXYZ Health International, each training focuses
                  on medical depth, professional exchange, and alignment — not
                  mass attendance.
                </p>
                <p className="text-xl sm:text-2xl text-gold mb-8 leading-relaxed">
                  Each edition is curated to maintain professional quality and
                  meaningful interaction.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {highlights.map((item, idx) => (
                    <div
                      key={item.text}
                      className={`animate-on-scroll stagger-${idx + 1} flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4 hover:border-gold/30 transition-colors`}
                    >
                      <item.icon className="h-6 w-6 text-gold flex-shrink-0" />
                      <span className="text-base sm:text-lg text-[#007A59]">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-on-scroll slide-in-right scale-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/sym/about_hero.jpg"
                    alt="Past training"
                    width={600}
                    height={450}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 bg-white">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#007A59] mb-6">
                  2025 International Training
                </h2>
                <p className="text-xl sm:text-2xl text-gold">
                  Moments from our past events showcasing global participation and professional exchange
                </p>
              </div>
            </div>

            <div className="mb-12 animate-on-scroll">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl font-semibold text-[#007A59] mb-6">
                  2025 International Training
                </h3>
              </div>
              <GalleryLoadMore
                alt="2025 training highlight"
                images={gallery2025.map((image) => image.src)}
                initialCount={12}
              />
            </div>

            <div className="animate-on-scroll">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="text-3xl font-semibold text-[#007A59] mb-6">
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

        {/* Global Participation */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#007A59] mb-6">
                  Global Participation
                </h2>
                <p className="text-xl sm:text-2xl text-gold mb-8 leading-relaxed">
                  Participants have included professionals from across the
                  globe, representing diverse healthcare systems and medical
                  specialties.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {regions.map((region, idx) => (
                    <div
                      key={region}
                      className={`animate-on-scroll stagger-${(idx % 4) + 1} flex items-center gap-3 bg-white border border-slate-200 hover:border-gold/30 transition-colors rounded-lg p-4`}
                    >
                      <Globe className="h-5 w-5 text-gold flex-shrink-0" />
                      <span className="text-base sm:text-lg text-gold">{region}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-on-scroll slide-in-right">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#007A59] mb-6">
                  Scientific Exchange & Collaboration
                </h2>
                <p className="text-xl sm:text-2xl text-gold mb-8 leading-relaxed">
                  Our trainings emphasize the core principles of responsible
                  regenerative medicine and structured clinical practice.
                </p>
                <ul className="space-y-4">
                  {emphases.map((item, idx) => (
                    <li
                      key={item}
                      className={`animate-on-scroll stagger-${idx + 1} flex items-center gap-3 bg-gradient-to-r from-teal-dark to-teal text-white rounded-lg p-4 shadow-md`}
                    >
                      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-gold text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* More Than an Event */}
        <section className="py-24 bg-gradient-to-br from-teal-dark to-teal text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl sm:text-5xl font-bold text-gold mb-6 animate-on-scroll">
                More Than an Event
              </h2>
              <p className="text-xl sm:text-2xl text-gold mb-12 leading-relaxed animate-on-scroll">
                For many participants, the training serves as a starting point
                for collaboration, a platform for continued medical exchange,
                and a gateway into the OXYZ ecosystem.
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                <div className="animate-on-scroll stagger-1 scale-in bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <h3 className="text-xl font-bold text-gold mb-3">
                    Starting Point
                  </h3>
                  <p className="text-gold text-base">
                    A launching pad for meaningful professional collaboration
                  </p>
                </div>
                <div className="animate-on-scroll stagger-2 scale-in bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <h3 className="text-xl font-bold text-gold mb-3">
                    Platform
                  </h3>
                  <p className="text-gold text-base">
                    For continued medical exchange and knowledge sharing
                  </p>
                </div>
                <div className="animate-on-scroll stagger-3 scale-in bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all">
                  <h3 className="text-xl font-bold text-gold mb-3">Gateway</h3>
                  <p className="text-gold text-base">
                    Into the broader OXYZ health ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats - With Animated Counters */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 animate-on-scroll">
              <h2 className="text-4xl sm:text-5xl font-bold text-[#007A59] mb-4">
                Our Impact
              </h2>
              <p className="text-xl sm:text-2xl text-gold">
                Numbers that reflect our global reach and influence
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`animate-on-scroll stagger-${index + 1} scale-in group text-center p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-100 hover:border-gold/30 transition-all hover:shadow-lg`}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
                  <p className="text-[#007A59] text-lg font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Looking Ahead */}
        <section className="py-24 text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Future outlook background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-on-scroll">
                Looking Ahead
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-on-scroll">
                Building on previous editions, the OXYZ International Training
                2026 will continue to strengthen medical credibility,
                professional networks, and structured collaboration pathways.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll scale-in">
                <Link href="/training">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-white font-semibold px-8"
                  >
                    Explore Training 2026
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-semibold px-8 bg-transparent"
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <InstagramReelsSection />

        {/* Footer Quote */}
        <section className="py-12 bg-gradient-to-b from-slate-50 to-white border-t border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground italic text-lg animate-on-scroll">
              "OXYZ trainings are built on alignment, professionalism, and
              long-term impact."
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
