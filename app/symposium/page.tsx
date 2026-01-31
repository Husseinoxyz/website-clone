import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
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
                src="/images/symposium-hero.jpg"
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
                "/images/gallery-1/1.jpg",
                "/images/gallery-1/2.jpg",
                "/images/gallery-1/3.jpg",
                "/images/gallery-1/4.jpg",
                "/images/gallery-1/5.jpg",
                "/images/gallery-1/6.jpg",
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
      </main>
      <Footer />
    </>
  );
}
