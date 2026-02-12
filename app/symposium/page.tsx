"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InstagramReelsSection } from "@/components/home/instagram-reels-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CountdownSection } from "@/components/symposium/countdown-section";
import { GalleryGrid } from "@/components/symposium/gallery-grid";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  Check,
  X,
  Stethoscope,
  GraduationCap,
  Building2,
  Network,
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

const whoIsFor = [
  { icon: Stethoscope, text: "Medical doctors & specialists" },
  {
    icon: GraduationCap,
    text: "Regenerative, integrative & anti-aging practitioners",
  },
  { icon: Building2, text: "Clinic owners & healthcare investors" },
  { icon: Network, text: "Medical distributors & ecosystem builders" },
];

const scientificFocus = [
  "Cellular health and biological aging concepts",
  "Regenerative and cell-based therapy principles",
  "Preventive and longevity-focused medical frameworks",
  "Integration of regenerative medicine into real clinical practice",
  "Patient selection, safety, and long-term outcome thinking",
  "Medical responsibility in emerging regenerative fields",
];

const pathways = [
  {
    title: "Clients Collaboration",
    description:
      "For professionals with direct access to clients requiring regenerative or holistic medical care, seeking structured, ethical referral into advanced clinical environments.",
  },
  {
    title: "Clinical Product Integration",
    description:
      "For clinics and practitioners with active client bases, looking to integrate science-backed regenerative and wellness products as part of ongoing clinical care.",
  },
  {
    title: "Territory-Based Distribution",
    description:
      "For organizations with proven regulatory, importation, and regional marketing capabilities, capable of developing medical brands responsibly within defined territories.",
  },
  {
    title: "Licensed OXYZ Regenerative Centers",
    description:
      "For doctors and clinic groups seeking to expand or transform their practice by adopting the OXYZ 5D Biological Regenerative Medical Model.",
  },
];

const packageFeatures = [
  {
    name: "4 nights hotel stay (single occupancy, breakfast included)",
    packageI: true,
    packageII: true,
    packageIII: true,
  },
  {
    name: "Full access to all 3-day symposium sessions",
    packageI: true,
    packageII: true,
    packageIII: true,
  },
  {
    name: "All official meals and Gala Dinner",
    packageI: true,
    packageII: true,
    packageIII: true,
  },
  {
    name: "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
    packageI: true,
    packageII: true,
    packageIII: true,
  },
  {
    name: "Advanced OXYZ product suite",
    packageI: false,
    packageII: true,
    packageIII: true,
  },
  {
    name: "VIP on-site diagnostics",
    packageI: false,
    packageII: true,
    packageIII: true,
  },
  {
    name: "1-on-1 clinical protocol consultation",
    packageI: false,
    packageII: true,
    packageIII: true,
  },
  {
    name: "Referral partnership",
    packageI: false,
    packageII: true,
    packageIII: true,
  },
  {
    name: "Root Cause BR Scan Machine with SOPs",
    packageI: false,
    packageII: false,
    packageIII: true,
  },
  {
    name: "Executive strategy and regional expansion planning",
    packageI: false,
    packageII: false,
    packageIII: true,
  },
  {
    name: "Security deposit waived",
    packageI: false,
    packageII: false,
    packageIII: true,
  },
  {
    name: "Post-event clinical and staff training",
    packageI: false,
    packageII: false,
    packageIII: true,
  },
  {
    name: "Elite business associate status",
    packageI: false,
    packageII: false,
    packageIII: true,
  },
];

const packages = [
  {
    id: "package-i",
    title: "SILVER",
    title2: "PACKAGE",
    subtitle: "Stem Cell Scholar",
    price: "$2,500",
    priceNote: "per person",
    standardPrice: "",
    borderColor: "border-[#8F959C]",
    accentGradient: "from-[#C5CBD3] to-[#8E969D]",
    textColor: "text-[#8F959C]",
    buttonClass: "bg-[#8F959C] hover:bg-[#7A8088] border-[#8F959C]",
    circleBorder: "border-[#8F959C]",
    features: packageFeatures.map((f) => ({
      name: f.name,
      included: f.packageI,
    })),
    registerType: "silver-tier-early-bird",
  },
  {
    id: "package-ii",
    title: "GOLD",
    title2: "PACKAGE",
    subtitle: "Immersive Experience",
    price: "$10,000",
    priceNote: "per person",
    standardPrice: "",
    borderColor: "border-[#D3A400]",
    accentGradient: "from-[#F5D866] to-[#D4A928]",
    textColor: "text-[#E5B511]",
    buttonClass: "bg-[#E5B511] hover:bg-[#D3A400] border-[#E5B511]",
    circleBorder: "border-[#E5B511]",
    features: packageFeatures.map((f) => ({
      name: f.name,
      included: f.packageII,
    })),
    registerType: "gold-tier",
    popular: true,
  },
  {
    id: "package-iii",
    title: "PLATINUM",
    title2: "PACKAGE",
    subtitle: "Global Elite Partner",
    price: "$25,000",
    priceNote: "per person",
    standardPrice: "",
    borderColor: "border-[#A8B5C0]",
    accentGradient: "from-[#E5E8EB] to-[#B8C5D0]",
    textColor: "text-[#A8B5C0]",
    buttonClass: "bg-[#A8B5C0] hover:bg-[#98A5B0] border-[#A8B5C0]",
    circleBorder: "border-[#A8B5C0]",
    features: packageFeatures.map((f) => ({
      name: f.name,
      included: f.packageIII,
    })),
    registerType: "platinum-tier",
  },
];

export default function SymposiumPage() {
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
        {/* Hero Section - Matching Home Style */}
        <section className="relative w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/symposium_hero.jpg"
              alt="OXYZ International Stem Cell Training 2026"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />
          </div>

          {/* Content Container - Positioned at bottom */}
          <div className="relative z-10 flex items-end min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-20">
            <div className="max-w-4xl w-full">
              
              {/* Main Title */}
              <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
                <h1 className="font-bold leading-[1.15] text-[#CDB06A]">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    OXYZ International Stem Cell Training 2026
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide">
                    Regenerative Medicine & Strategic Collaboration
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-6 sm:mb-8 max-w-2xl animate-fade-in-up opacity-0 animation-delay-400 font-light">
                A medically driven, invitation-based platform created for doctors, clinic owners, and healthcare leaders who seek to apply regenerative medicine responsibly and explore structured, ethical growth pathways.
              </p>

              <p className="text-white/80 italic text-sm sm:text-base md:text-lg mb-10 sm:mb-12 animate-fade-in-up opacity-0 animation-delay-500">
                This is not a mass conference. It is a medical alignment platform.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up opacity-0 animation-delay-600">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-2xl shadow-[#CDB06A]/40 transition-all hover:shadow-[#CDB06A]/60 hover:scale-105"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
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

        <CountdownSection />

        {/* Medical Imperative */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                  The Medical Imperative
                </h2>
                <p className="text-gold text-xl sm:text-2xl mb-6 leading-relaxed">
                  Regenerative medicine is redefining modern healthcare —
                  shifting the focus from symptom management to cellular repair,
                  biological optimization, and long-term patient outcomes.
                </p>
                <p className="text-gold text-xl sm:text-2xl mb-8 leading-relaxed">
                  However, true regenerative medicine requires medical
                  discipline, ethical application, structured clinical systems,
                  and responsible scaling.
                </p>
                <div className="bg-white rounded-lg p-6 border-l-4 border-gold shadow-sm">
                  <p className="text-[#007A59] text-lg sm:text-xl font-medium italic">
                    This symposium exists to address how regenerative medicine
                    should be practiced, integrated, and expanded — not as a
                    trend, but as a sustainable medical framework.
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/register">
                    <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold"
                    >
                      Request More Details
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square animate-on-scroll slide-in-right scale-in">
                <Image
                  src="/images/about/Our_Philosophy.jpg"
                  alt="Medical imperative"
                  width={600}
                  height={520}
                  className="rounded-2xl shadow-2xl h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Who Is This For */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/about/Global_Presence.jpg"
              alt="Ideal Participants background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
                Who This Symposium Is For
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                This symposium is curated for professionals who meet both
                medical and strategic readiness.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {whoIsFor.map((item, idx) => (
                <div
                  key={item.text}
                  className={`animate-on-scroll stagger-${idx + 1} scale-in bg-white rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-gold" />
                  </div>
                  <p className="font-medium text-teal">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 animate-on-scroll">
              <Link href="/register">
                <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold bg-transparent"
                >
                  Request More Details
                </Button>
              </Link>
            </div>
          </div>
        </section>


        {/* Scientific Focus */}
        <section className="py-24 bg-gradient-to-br from-teal-dark to-teal text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
                  Scientific & Medical Focus
                </h2>
                <p className="text-gold text-xl sm:text-2xl mb-8 leading-relaxed">
                  The emphasis is on medical depth, clarity, and governance —
                  not promotional medicine.
                </p>
                <ul className="space-y-4">
                  {scientificFocus.map((item, idx) => (
                    <li key={item} className={`animate-on-scroll stagger-${(idx % 4) + 1} flex items-start gap-3`}>
                      <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-gold text-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll slide-in-right">
                <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6">
                  Symposium Format
                </h2>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-gold mb-2">
                      Physical Symposium
                    </h3>
                    <ul className="space-y-2 text-gold text-lg">
                      <li>Medical & Scientific Sessions</li>
                      <li>Clinical Case Discussions</li>
                      <li>Live Treatment Observation*</li>
                      <li>Strategic Networking</li>
                    </ul>
                    <p className="text-xs text-gold/80 mt-3">
                      *Subject to ethical standards and regulatory compliance
                    </p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                    <h3 className="text-xl font-semibold text-gold mb-2">
                      Participants Will Gain
                    </h3>
                    <ul className="space-y-2 text-gold text-lg">
                      <li>Direct engagement with OXYZ leadership</li>
                      <li>Interaction with international professionals</li>
                      <li>Exposure to structured frameworks</li>
                      <li>Priority for alignment discussions</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/register">
                    <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                      Register Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-foreground font-semibold bg-transparent"
                    >
                      Request More Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Strategic Pathways */}
        <section className="py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                Strategic Pathways Exploration
              </h2>
              <p className="text-gold text-xl sm:text-2xl leading-relaxed">
                When regenerative medicine is practiced with integrity, natural
                ecosystems emerge. This symposium introduces how medical
                expertise can evolve into structured collaboration pathways.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pathways.map((pathway, idx) => (
                <div
                  key={pathway.title}
                  className={`animate-on-scroll stagger-${(idx % 4) + 1} scale-in bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border-2 border-slate-100 hover:border-gold/50 transition-all duration-300 hover:shadow-lg`}
                >
                  <h3 className="text-xl font-bold text-teal mb-3">
                    {pathway.title}
                  </h3>
                  <p className="text-gold text-lg">{pathway.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3 animate-on-scroll">
              <Link href="/register">
                <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold"
                >
                  Request More Details
                </Button>
              </Link>
            </div>
          </div>
        </section>


        {/* Package Comparison */}
        <section className="py-24 bg-gradient-to-b from-[#0B3B2E] via-[#0F4B3A] to-[#0A2F24]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gold mb-6 text-balance">
                Choose Your Tier
              </h2>
              <p className="text-gold text-xl sm:text-2xl leading-relaxed">
                Compare features across all tiers to find the best fit for your professional goals.
              </p>
            </div>

            <div className="grid gap-16 sm:gap-10 md:gap-8 md:grid-cols-3 mb-12 pt-16">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative mt-20 sm:mt-0 overflow-visible rounded-3xl border-4 ${pkg.borderColor} bg-gradient-to-b from-[#1c1c1c] via-[#1a1a1a] to-[#0f0f0f] shadow-2xl transition-transform hover:scale-105 ${pkg.popular ? "md:scale-105" : ""}`}
                >
                  <div className="absolute -top-20 right-6 z-10">
                    <div className={`h-40 w-40 rounded-full bg-gradient-to-br ${pkg.accentGradient} shadow-[0_12px_32px_rgba(0,0,0,0.4)] flex items-center justify-center border-[8px] ${pkg.circleBorder}`}>
                      <div className="text-center leading-tight">
                        <div className="text-3xl font-black text-[#1a1a1a]">{pkg.price}</div>
                        <div className="text-xs font-bold uppercase tracking-wider text-[#1a1a1a]/80 mt-1">
                          {pkg.priceNote}
                        </div>
                      </div>
                    </div>
                  </div>

                  {pkg.popular ? (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-1.5 text-xs font-bold text-slate-900 shadow-lg">
                        MOST POPULAR
                      </span>
                    </div>
                  ) : null}

                  <div className="relative flex flex-col gap-6 p-8 pt-10">
                    <div>
                      <div className={`${pkg.textColor} border-b-2 ${pkg.borderColor} pb-4 mb-5 inline-block`}>
                        <p className="text-3xl font-black uppercase tracking-[0.15em] leading-tight">
                          {pkg.title}
                        </p>
                        <p className="text-3xl font-black uppercase tracking-[0.15em] leading-tight">
                          {pkg.title2}
                        </p>
                      </div>
                      <h3 className="text-lg font-bold text-white mb-2">
                        {pkg.subtitle}
                      </h3>
                      <div className="text-xs text-white/60">
                        {pkg.standardPrice}
                      </div>
                    </div>

                    <ul className="grid gap-3">
                      {pkg.features.map((feature) => (
                        <li key={feature.name} className="flex items-start gap-3">
                          {feature.included ? (
                            <Check className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                          ) : (
                            <X className="h-5 w-5 text-rose-400 flex-shrink-0 mt-0.5" />
                          )}
                          <span className={`text-sm ${feature.included ? "text-white/85" : "text-white/40 line-through"}`}>
                            {feature.name}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <Link href={`/register?type=${pkg.registerType}`} className="block">
                      <Button
                        className={`w-full rounded-full ${pkg.buttonClass} text-white font-bold py-6 shadow-lg hover:shadow-xl transition-all border-2 uppercase tracking-wide`}
                      >
                        REGISTER NOW
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-gold text-sm">
              Early Bird rates apply to Package I only and must be completed by 28 February 2026.
            </p>
          </div>
        </section>

        {/* Symposium 2025 Overview */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 animate-on-scroll">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-3">
                    2025 Symposium Overview
                  </h2>
                  <p className="text-gold text-xl sm:text-2xl max-w-2xl">
                    A look back at our 2025 medical alignment forum, featuring
                    focused clinical sessions, international collaboration, and
                    practical regenerative discussions.
                  </p>
                </div>
                <Link href="/past-symposiums">
                  <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
                    View Full Gallery
                  </Button>
                </Link>
              </div>
            </div>

            <div className="animate-on-scroll">
              <GalleryGrid
                alt="Symposium 2025 gallery"
                images={[
                  "/images/sym/home_g_1.jpg",
                  "/images/sym/home_g_2.jpg",
                  "/images/sym/home_g_3.jpg",
                  "/images/sym/home_g_4.jpg",
                  "/images/sym/home_g_5.jpg",
                  "/images/sym/home_g_6.jpg",
                  "/images/sym/home_g_7.jpg",
                  "/images/sym/home_g_8.jpg",
                  "/images/sym/home_g_9.jpg",
                ]}
              />
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-3 animate-on-scroll">
              <Link href="/register">
                <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold"
                >
                  Request More Details
                </Button>
              </Link>
            </div>
          </div>
        </section>


        {/* Symposium 2023 Overview */}
        <section className="py-24 bg-white">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 animate-on-scroll">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-3">
                    2023 Symposium Overview
                  </h2>
                  <p className="text-gold text-xl sm:text-2xl max-w-2xl">
                    Highlights from the 2023 symposium focused on medical
                    governance, structured clinical frameworks, and ecosystem
                    building.
                  </p>
                </div>
                <Link href="/past-symposiums">
                  <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
                    View Full Gallery
                  </Button>
                </Link>
              </div>
            </div>

            <div className="animate-on-scroll">
              <GalleryGrid
                alt="Symposium 2023 gallery"
                images={[
                  "/images/sym/012.png",
                  "/images/sym/02.jpg",
                  "/images/sym/03.jpg",
                  "/images/sym/04.jpg",
                  "/images/sym/05.jpg",
                  "/images/sym/06.jpg",
                ]}
              />
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-3 animate-on-scroll">
              <Link href="/register">
                <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold"
                >
                  Request More Details
                </Button>
              </Link>
            </div>
          </div>
        </section>


        {/* CTA */}
        <section className="py-24 text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Symposium CTA background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-12 text-center animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
                Ready to Join Symposium 2026?
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
                This symposium is intended for professionals seeking depth,
                alignment, and long-term impact. Apply now to secure your place.
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
                <Link
                  href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-semibold px-8 bg-transparent"
                  >
                    Request More Details
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <InstagramReelsSection />
      </main>
      <Footer />
    </>
  );
}
