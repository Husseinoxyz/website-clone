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
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            <div className="relative flex items-center bg-teal-dark px-4 sm:px-6 lg:px-8 py-16 lg:py-0 order-2 lg:order-1">
              <div className="mx-auto max-w-2xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
                  About OXYZ Health International
                </h1>
                <p className="text-xl text-secondary-foreground/90 leading-relaxed mb-6">
                  A globally positioned regenerative and medical wellness
                  ecosystem built on scientific integrity, structured systems,
                  and long-term partnership.
                </p>
                <p className="text-lg text-secondary-foreground/80 leading-relaxed">
                  Founded to address the growing need for responsible,
                  outcome-driven healthcare, OXYZ integrates regenerative
                  medicine, preventive health, medical aesthetics, and clinical
                  wellness into a unified, scalable medical framework.
                </p>
              </div>
            </div>

            <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[80vh] order-1 lg:order-2">
              <Image
                src="/images/about-hero.jpg"
                alt="About OXYZ Health International"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/5" />
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 bg-gold">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-2xl font-semibold text-white leading-relaxed">
              We do not operate as a single clinic or product brand.
              <span className="block mt-2 text-teal-dark">
                We build medical ecosystems.
              </span>
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
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
                <ul className="space-y-4">
                  {philosophy.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0" />
                      <span className="text-teal font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground mt-8 leading-relaxed">
                  OXYZ was established to ensure regenerative medicine is
                  practiced responsibly, consistently, and sustainably across
                  all environments in which it is delivered.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="/images/about/Our_Philosophy.jpg"
                  alt="OXYZ Philosophy"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Structure */}
        <section className="py-24 bg-muted relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/about/Global_Presence.jpg"
              alt="Global Presence background"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                A Globally Structured Organization
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                OXYZ operates through a deliberately structured international
                footprint, ensuring scientific governance, operational
                integrity, and scalability.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {locations.map((location) => (
                <div
                  key={location.country}
                  className="bg-background rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow"
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

            <p className="text-center text-muted-foreground mt-12">
              This structure enables OXYZ to maintain medical consistency while
              supporting international expansion.
            </p>
          </div>
        </section>

        {/* Medical Foundation */}
        <section className="py-24 bg-teal-dark text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  Our Medical Foundation
                </h2>
                <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                  OXYZ&apos;s clinical philosophy is grounded in integrative and
                  regenerative medicine, combining conventional medical science
                  with evidence-based complementary approaches.
                </p>
                <p className="text-secondary-foreground/80 mb-4">
                  Our work spans:
                </p>
                <ul className="space-y-3 mb-8">
                  {medicalFoundation.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-gold mt-2 flex-shrink-0" />
                      <span className="text-secondary-foreground/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  Clinical Pathways
                </h2>
                <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                  All OXYZ clinical pathways are designed with foundational
                  principles that ensure the highest standards of care.
                </p>
                <div className="space-y-4">
                  {clinicalPrinciples.map((principle) => (
                    <div
                      key={principle.text}
                      className="flex items-center gap-4 bg-secondary-foreground/10 rounded-lg p-5"
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
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="relative order-2 lg:order-1">
                <Image
                  src="/images/about/Our_Ecosystem.jpg"
                  alt="OXYZ Ecosystem"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                  Beyond Clinics: A Medical Ecosystem
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  OXYZ extends beyond clinical care into a complete medical
                  ecosystem, supporting structured collaboration with medical
                  professionals, scientifically grounded product platforms,
                  international education, and scalable medical business models.
                </p>
                <div className="bg-muted rounded-lg p-6 border-l-4 border-gold">
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
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
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
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6">
                  The OXYZ Difference
                </h2>
                <ul className="space-y-4 mb-8">
                  {differences.map((diff) => (
                    <li key={diff} className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0" />
                      <span className="text-teal font-medium">{diff}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-teal-dark text-secondary-foreground rounded-lg p-6">
                  <p className="font-medium">
                    OXYZ is not designed for rapid commercialization.
                    <span className="block mt-2 text-gold">
                      It is designed for sustainable medical excellence.
                    </span>
                  </p>
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/about/What_Sets.jpg"
                  alt="OXYZ Difference"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl"
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
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                Our Direction
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
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
                    className="border-gold text-gold hover:bg-gold hover:text-foreground font-semibold px-8 bg-transparent"
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
