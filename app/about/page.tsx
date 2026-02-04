"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Shield,
  Heart,
  Users,
  Building2,
} from "lucide-react";
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

const philosophy = [
  "Root-cause diagnostics",
  "Cellular repair and regeneration",
  "Long-term functional outcomes",
  "Ethical, standardized delivery",
];

const medicalFoundation = [
  "Preventive and longevity medicine",
  "Regenerative and cell-based therapeutic concepts",
  "Chronic and degenerative condition support",
  "Medical aesthetics integrated within regenerative frameworks",
];

const clinicalPrinciples = [
  { icon: Shield, text: "Patient safety" },
  { icon: Heart, text: "Ethical application" },
  { icon: Users, text: "Long-term outcome responsibility" },
];

const locations = [
  {
    country: "United States",
    description: "Medical IP, formulation science, and innovation origin",
  },
  {
    country: "Singapore",
    description: "International trade, B2B operations, and regional coordination",
  },
  {
    country: "Malaysia",
    description:
      "Fully operating regenerative, wellness, and aesthetic flagship centers",
  },
];

const differences = [
  "Medical-first philosophy",
  "Structured regenerative frameworks",
  "Standardized clinical and operational systems",
  "International scalability with governance",
  "Leadership-level involvement and accountability",
];

export default function AboutPage() {
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
        {/* Hero - Matching Home Style */}
        <section className="relative w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/about_hero.jpg"
              alt="About OXYZ Health International"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />
          </div>

          {/* Content Container - Positioned at bottom */}
          <div className="relative z-10 flex items-end min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-20">
            <div className="max-w-4xl w-full">
              
              {/* Main Title */}
              <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
                <h1 className="font-bold leading-[1.15] text-[#CDB06A]">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    About OXYZ Health International
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide">
                    Building Global Medical Ecosystems
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-2xl animate-fade-in-up opacity-0 animation-delay-400 font-light">
                A globally positioned regenerative and medical wellness ecosystem built on scientific integrity, structured systems, and long-term partnership.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up opacity-0 animation-delay-600">
                <Link href="/5d-model" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-[#007A59] font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-2xl shadow-[#CDB06A]/40 transition-all hover:shadow-[#CDB06A]/60 hover:scale-105"
                  >
                    Explore the OXYZ 5D Model
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/gallery" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg bg-transparent transition-all hover:scale-105"
                  >
                    View Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-gold">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center animate-on-scroll">
            <p className="text-2xl font-semibold text-white leading-relaxed">
              We do not operate as a single clinic or product brand.
              <span className="block mt-2 text-teal-dark">
                We build medical ecosystems.
              </span>
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                  The Future of Medicine
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  At OXYZ, we believe the future of medicine lies in
                  regeneration, prevention, and biological optimization —
                  delivered through disciplined medical practice and structured
                  clinical systems.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Modern healthcare must move beyond symptom control toward:
                </p>
                <ul className="space-y-4 mb-8">
                  {philosophy.map((item, idx) => (
                    <li key={item} className={`animate-on-scroll stagger-${idx + 1} flex items-center gap-3`}>
                      <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0" />
                      <span className="text-teal font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground leading-relaxed">
                  OXYZ was established to ensure regenerative medicine is
                  practiced responsibly, consistently, and sustainably across
                  all environments in which it is delivered.
                </p>
              </div>
              <div className="relative animate-on-scroll slide-in-right scale-in">
                <Image
                  src="/images/about/Our_Philosophy.jpg"
                  alt="OXYZ Philosophy"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Structure */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                A Globally Structured Organization
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                OXYZ operates through a deliberately structured international
                footprint, ensuring scientific governance, operational
                integrity, and scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {locations.map((location, idx) => (
                <div
                  key={location.country}
                  className={`animate-on-scroll stagger-${idx + 1} scale-in bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border-2 border-slate-100 shadow-lg hover:shadow-xl hover:border-gold/30 transition-all duration-300`}
                >
                  <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mb-6">
                    <MapPin className="h-7 w-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-bold text-teal mb-3">
                    {location.country}
                  </h3>
                  <p className="text-muted-foreground">{location.description}</p>
                </div>
              ))}
            </div>

            <p className="text-center text-muted-foreground animate-on-scroll">
              This structure enables OXYZ to maintain medical consistency while
              supporting international expansion.
            </p>
          </div>
        </section>

        {/* Medical Foundation */}
        <section className="py-24 bg-gradient-to-br from-teal-dark to-teal text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  Our Medical Foundation
                </h2>
                <p className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed">
                  OXYZ&apos;s clinical philosophy is grounded in integrative and
                  regenerative medicine, combining conventional medical science
                  with evidence-based complementary approaches.
                </p>
                <p className="text-secondary-foreground/90 mb-4">
                  Our work spans:
                </p>
                <ul className="space-y-3 mb-8">
                  {medicalFoundation.map((item, idx) => (
                    <li key={item} className={`animate-on-scroll stagger-${idx + 1} flex items-start gap-3`}>
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-secondary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll slide-in-right">
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  Clinical Pathways
                </h2>
                <p className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed">
                  All OXYZ clinical pathways are designed with foundational
                  principles that ensure the highest standards of care.
                </p>
                <div className="space-y-4">
                  {clinicalPrinciples.map((principle, idx) => (
                    <div
                      key={principle.text}
                      className={`animate-on-scroll stagger-${idx + 1} flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 hover:bg-white/15 transition-all`}
                    >
                      <principle.icon className="h-8 w-8 text-gold" />
                      <span className="text-xl font-medium text-secondary-foreground">
                        {principle.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Clinics */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1 animate-on-scroll slide-in-left scale-in">
                <Image
                  src="/images/about/Our_Ecosystem.jpg"
                  alt="OXYZ Ecosystem"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
              <div className="order-1 lg:order-2 animate-on-scroll slide-in-right">
                <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                  Beyond Clinics: A Medical Ecosystem
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  OXYZ extends beyond clinical care into a complete medical
                  ecosystem, supporting structured collaboration with medical
                  professionals, scientifically grounded product platforms,
                  international education, and scalable medical business models.
                </p>
                <div className="bg-white rounded-xl p-6 border-l-4 border-gold shadow-sm">
                  <p className="text-foreground font-medium italic">
                    Our ecosystem approach allows medical professionals to grow
                    responsibly, without compromising standards or outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Commitment */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll scale-in">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6">
                Our Commitment
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                OXYZ collaborates selectively. We work only with professionals
                and organizations who share our commitment to medical integrity,
                patient-centered outcomes, structured systems and governance,
                and long-term impact over short-term gain.
              </p>
            </div>
          </div>
        </section>

        {/* The OXYZ Difference */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6">
                  The OXYZ Difference
                </h2>
                <ul className="space-y-4 mb-8">
                  {differences.map((diff, idx) => (
                    <li key={diff} className={`animate-on-scroll stagger-${(idx % 4) + 1} flex items-center gap-3`}>
                      <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0" />
                      <span className="text-teal font-medium">{diff}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-r from-teal-dark to-teal text-secondary-foreground rounded-xl p-6 shadow-lg">
                  <p className="font-medium">
                    OXYZ is not designed for rapid commercialization.
                    <span className="block mt-2 text-gold">
                      It is designed for sustainable medical excellence.
                    </span>
                  </p>
                </div>
              </div>
              <div className="relative animate-on-scroll slide-in-right scale-in">
                <Image
                  src="/images/about/What_Sets.jpg"
                  alt="OXYZ Difference"
                  width={600}
                  height={450}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Direction */}
        <section className="py-24 text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Future direction background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                Our Direction
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed">
                As regenerative medicine continues to redefine global
                healthcare, OXYZ remains committed to shaping its future through
                responsible clinical application, knowledge transfer and
                education, and ethical expansion and collaboration.
              </p>
              <p className="text-xl text-gold font-medium mb-12">
                We invite like-minded medical professionals to explore this
                journey with us.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/5d-model">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-teal font-semibold px-8"
                  >
                    Explore the OXYZ 5D Model
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-semibold px-8 bg-transparent"
                  >
                    View Gallery
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
