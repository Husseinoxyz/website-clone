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
    title: "BRONZE",
    title2: "PACKAGE",
    subtitle: "Stem Cell Scholar",
    price: "$2,500",
    priceNote: "per person",
    standardPrice: "",
    borderColor: "border-[#C9793C]",
    accentGradient: "from-[#D2825A] to-[#B86941]",
    textColor: "text-[#CC7A3B]",
    buttonClass: "bg-[#CC7A3B] hover:bg-[#B86B32] border-[#CC7A3B]",
    circleBorder: "border-[#C9793C]",
    features: packageFeatures.map((f) => ({
      name: f.name,
      included: f.packageI,
    })),
    registerType: "silver-tier-early-bird",
  },
  {
    id: "package-ii",
    title: "SILVER",
    title2: "PACKAGE",
    subtitle: "Immersive Experience",
    price: "$10,000",
    priceNote: "per person",
    standardPrice: "",
    borderColor: "border-[#8F959C]",
    accentGradient: "from-[#C5CBD3] to-[#8E969D]",
    textColor: "text-[#8F959C]",
    buttonClass: "bg-[#8F959C] hover:bg-[#7A8088] border-[#8F959C]",
    circleBorder: "border-[#8F959C]",
    features: packageFeatures.map((f) => ({
      name: f.name,
      included: f.packageII,
    })),
    registerType: "gold-tier",
    popular: true,
  },
  {
    id: "package-iii",
    title: "GOLD",
    title2: "PACKAGE",
    subtitle: "Global Elite Partner",
    price: "$25,000",
    priceNote: "per person",
    standardPrice: "",
    borderColor: "border-[#D3A400]",
    accentGradient: "from-[#F5D866] to-[#D4A928]",
    textColor: "text-[#E5B511]",
    buttonClass: "bg-[#E5B511] hover:bg-[#D3A400] border-[#E5B511]",
    circleBorder: "border-[#E5B511]",
    features: packageFeatures.map((f) => ({
      name: f.name,
      included: f.packageIII,
    })),
    registerType: "platinum-tier",
  },
];

export default function SymposiumPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            <div className="relative flex items-center bg-teal-dark px-4 sm:px-6 lg:px-8 py-16 lg:py-0 order-2 lg:order-1">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-white/10 rounded-full blur-3xl" />
              </div>

              <div className="relative z-10 mx-auto max-w-2xl">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6">
                  OXYZ International Symposium 2026
                </h1>
                <p className="text-xl text-gold font-semibold mb-4">
                  Regenerative Medicine & Strategic Collaboration
                </p>
                <p className="text-lg text-secondary-foreground/90 mb-8 leading-relaxed">
                  A medically driven, invitation-based platform created for
                  doctors, clinic owners, and healthcare leaders who seek to
                  apply regenerative medicine responsibly and explore
                  structured, ethical growth pathways.
                </p>
                <p className="text-secondary-foreground/80 italic mb-8">
                  This is not a mass conference. It is a medical alignment
                  platform.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Link href="/register">
                    <Button
                      size="lg"
                      className="bg-gold hover:bg-gold-dark text-white font-semibold"
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
                      className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold bg-transparent"
                    >
                      Request Scientific Program
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[80vh] order-1 lg:order-2">
              <Image
                src="/images/sym/symposium_hero.jpg"
                alt="OXYZ Symposium 2026"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/5" />
            </div>
          </div>
        </section>

        <CountdownSection />

        {/* Medical Imperative */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                  The Medical Imperative
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Regenerative medicine is redefining modern healthcare —
                  shifting the focus from symptom management to cellular repair,
                  biological optimization, and long-term patient outcomes.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  However, true regenerative medicine requires medical
                  discipline, ethical application, structured clinical systems,
                  and responsible scaling.
                </p>
                <div className="bg-background rounded-lg p-6 border-l-4 border-gold">
                  <p className="text-teal font-medium italic">
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
              <div className="relative aspect-square">
                <Image
                  src="/images/about/Our_Philosophy.jpg"
                  alt="Medical imperative"
                  width={600}
                  height={520}
                  className="rounded-lg shadow-xl h-full w-full object-cover"
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
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
                Who This Symposium Is For
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                This symposium is curated for professionals who meet both
                medical and strategic readiness.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {whoIsFor.map((item) => (
                <div
                  key={item.text}
                  className="bg-muted rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-8 w-8 text-gold" />
                  </div>
                  <p className="font-medium text-teal">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
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
        <section className="py-24 bg-teal-dark text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  Scientific & Medical Focus
                </h2>
                <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                  The emphasis is on medical depth, clarity, and governance —
                  not promotional medicine.
                </p>
                <ul className="space-y-4">
                  {scientificFocus.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground/90">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  Symposium Format
                </h2>
                <div className="space-y-4">
                  <div className="bg-secondary-foreground/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gold mb-2">
                      Physical Symposium
                    </h3>
                    <ul className="space-y-2 text-secondary-foreground/80">
                      <li>Medical & Scientific Sessions</li>
                      <li>Clinical Case Discussions</li>
                      <li>Live Treatment Observation*</li>
                      <li>Strategic Networking</li>
                    </ul>
                    <p className="text-xs text-secondary-foreground/60 mt-3">
                      *Subject to ethical standards and regulatory compliance
                    </p>
                  </div>
                  <div className="bg-secondary-foreground/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gold mb-2">
                      Participants Will Gain
                    </h3>
                    <ul className="space-y-2 text-secondary-foreground/80">
                      <li>Direct engagement with OXYZ leadership</li>
                      <li>Interaction with international professionals</li>
                      <li>Exposure to structured frameworks</li>
                      <li>Priority for alignment discussions</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/register">
                    <Button className="bg-gold hover:bg-gold-dark text-foreground font-semibold">
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
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                Strategic Pathways Exploration
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                When regenerative medicine is practiced with integrity, natural
                ecosystems emerge. This symposium introduces how medical
                expertise can evolve into structured collaboration pathways.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pathways.map((pathway) => (
                <div
                  key={pathway.title}
                  className="bg-muted rounded-lg p-8 border border-border hover:border-gold transition-colors"
                >
                  <h3 className="text-xl font-bold text-teal mb-3">
                    {pathway.title}
                  </h3>
                  <p className="text-muted-foreground">{pathway.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
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
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
                Choose Your Tier
              </h2>
              <p className="text-lg text-slate-200 leading-relaxed">
                Compare features across all tiers to find the best fit for your professional goals.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12 pt-16">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`relative overflow-visible rounded-3xl border-4 ${pkg.borderColor} bg-gradient-to-b from-[#1c1c1c] via-[#1a1a1a] to-[#0f0f0f] shadow-2xl transition-transform hover:scale-105 ${pkg.popular ? "md:scale-105" : ""}`}
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

        {/* Symposium 2025 Overview */}
        <section className="py-24 bg-muted">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-3">
                  2025 Symposium Overview
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  A look back at our 2025 medical alignment forum, featuring
                  focused clinical sessions, international collaboration, and
                  practical regenerative discussions.
                </p>
              </div>
              <Link href="/past-symposiums">
                <Button variant="outline" className="border-teal text-teal">
                  View Full Gallery
                </Button>
              </Link>
            </div>
            </div>

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
            <div className="mt-10 flex flex-wrap justify-center gap-3">
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
        <section className="py-24 bg-background">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-3">
                  2023 Symposium Overview
                </h2>
                <p className="text-muted-foreground max-w-2xl">
                  Highlights from the 2023 symposium focused on medical
                  governance, structured clinical frameworks, and ecosystem
                  building.
                </p>
              </div>
              <Link href="/past-symposiums">
                <Button variant="outline" className="border-teal text-teal">
                  View Full Gallery
                </Button>
              </Link>
            </div>
            </div>

            <GalleryGrid
              alt="Symposium 2023 gallery"
              images={[
                "/images/gallery-1/012.png",
                "/images/gallery-1/02.jpg",
                "/images/gallery-1/03.jpg",
                "/images/gallery-1/04.jpg",
                "/images/gallery-1/05.jpg",
                "/images/gallery-1/06.jpg",
              ]}
            />
            <div className="mt-10 flex flex-wrap justify-center gap-3">
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
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
                Ready to Join Symposium 2026?
              </h2>
              <p className="text-lg text-secondary-foreground/85 mb-8 max-w-2xl mx-auto">
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
                    className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold px-8 bg-transparent"
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
