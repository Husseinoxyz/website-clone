import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InstagramReelsSection } from "@/components/home/instagram-reels-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  Info,
  Check,
  X,
} from "lucide-react";

const packageFeatures = [
  // Silver Tier Features
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
  // Gold Tier Exclusive Features
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
  // Platinum Tier Exclusive Features
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

const importantInfo = [
  "Curated attendance: all registrations are subject to review and confirmation",
  "Selection criteria prioritize medical relevance and clinical alignment",
  "Early Bird rates apply to Silver Tier only",
  "Gold and Platinum Tiers are priced based on equipment and product value",
];

export default function ProgramPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero - Matching Home Style */}
        <section className="relative w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/program_hero.jpg"
              alt="Symposium program overview"
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
                    Program Overview
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide">
                    Registration Options & Packages
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-2xl animate-fade-in-up opacity-0 animation-delay-400 font-light">
                Comprehensive details about the OXYZ International Symposium 2026, including registration options, fees, and what is included.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up opacity-0 animation-delay-600">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-[#007A59] font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-2xl shadow-[#CDB06A]/40 transition-all hover:shadow-[#CDB06A]/60 hover:scale-105"
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

        {/* Event Details */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-muted rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="h-8 w-8 text-gold" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Symposium Dates
                  </h2>
                </div>
                <p className="text-3xl font-bold text-teal mb-2">
                  18 - 20 April 2026
                </p>
                <p className="text-muted-foreground">
                  4 nights accommodation included for Silver, Gold, and Platinum Tier
                  participants
                </p>
              </div>
              <div className="bg-muted rounded-lg p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="h-8 w-8 text-gold" />
                  <h2 className="text-2xl font-bold text-foreground">
                    Participant Capacity
                  </h2>
                </div>
                <p className="text-3xl font-bold text-teal mb-2">
                  80 - 100 Selected Professionals
                </p>
                <p className="text-muted-foreground mb-4">
                  Intentionally limited to ensure:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>High-quality scientific exchange</li>
                  <li>Meaningful professional networking</li>
                  <li>Direct engagement with faculty and OXYZ leadership</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Package Comparison */}
        <section className="py-24 bg-gradient-to-b from-[#0B3B2E] via-[#0F4B3A] to-[#0A2F24]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
                Choose Your Tier
              </h2>
              <p className="text-lg text-slate-200 leading-relaxed">
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

            <p className="text-center text-slate-200 text-sm">
              Early Bird rates apply to Package I only and must be completed by 28 February 2026.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24 bg-teal-dark text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground">
                Program Overview
              </h2>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-secondary-foreground/80 text-lg leading-relaxed">
                Full package inclusions are available upon request. Our team
                will provide the most current program details, benefits, and
                eligibility guidance based on your profile.
              </p>
              <div className="mt-8 flex justify-center">
                <Link
                  href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button className="bg-gold hover:bg-gold-dark text-foreground font-semibold">
                    Request More Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <Info className="h-8 w-8 text-gold" />
                <h2 className="text-3xl font-bold text-foreground">
                  Important Information
                </h2>
              </div>
              <ul className="space-y-4">
                {importantInfo.map((info) => (
                  <li
                    key={info}
                    className="flex items-start gap-3 bg-background rounded-lg p-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{info}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Program next steps background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/35" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto text-white">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Next Steps
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Ready to secure your place? Choose your tier and begin your
                application.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register?type=silver-tier-early-bird">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-white font-semibold px-8"
                  >
                    Register for Silver Tier
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/register?type=gold-tier">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold px-8 bg-transparent"
                  >
                    Register for Gold Tier
                  </Button>
                </Link>
                <Link
                  href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button size="lg" variant="ghost" className="px-8 text-white">
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
