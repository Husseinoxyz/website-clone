import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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
                      className="bg-gold hover:bg-gold-dark text-teal font-semibold"
                    >
                      Apply to Attend
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/program">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-gold text-gold hover:bg-gold hover:text-foreground font-semibold bg-transparent"
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

        {/* Event Details */}
        <section className="py-16 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-4 bg-muted rounded-lg p-6">
                <Calendar className="h-10 w-10 text-gold" />
                <div>
                  <p className="text-sm text-muted-foreground">Dates</p>
                  <p className="text-xl font-bold text-teal">
                    18 - 20 April 2026
                  </p>
                  <p className="text-sm text-muted-foreground">
                    4 nights accommodation included
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-muted rounded-lg p-6">
                <MapPin className="h-10 w-10 text-gold" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="text-xl font-bold text-teal">Malaysia</p>
                  <p className="text-sm text-muted-foreground">
                    Premium venue TBA
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-muted rounded-lg p-6">
                <Users className="h-10 w-10 text-gold" />
                <div>
                  <p className="text-sm text-muted-foreground">Capacity</p>
                  <p className="text-xl font-bold text-teal">
                    80 - 100 Participants
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Limited to ensure quality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Medical Imperative */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  The Purpose
                </p>
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
              </div>
              <div className="relative">
                <Image
                  src="/images/medical-imperative.jpg"
                  alt="Medical imperative"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Who Is This For */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Ideal Participants
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                Who This Symposium Is For
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
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
          </div>
        </section>

        {/* Scientific Focus */}
        <section className="py-24 bg-teal-dark text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Content
                </p>
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
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Format
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  Symposium Format
                </h2>
                <div className="space-y-4">
                  <div className="bg-secondary-foreground/10 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-teal mb-2">
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
                    <h3 className="text-xl font-semibold text-teal mb-2">
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
              </div>
            </div>
          </div>
        </section>

        {/* Strategic Pathways */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Opportunities
              </p>
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
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-teal-dark rounded-2xl p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6 text-balance">
                Ready to Join Symposium 2026?
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
                This symposium is intended for professionals seeking depth,
                alignment, and long-term impact. Apply now to secure your place.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-teal font-semibold px-8"
                  >
                    Apply / Register for Symposium
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/program">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-foreground font-semibold px-8 bg-transparent"
                  >
                    Request Program Information
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
