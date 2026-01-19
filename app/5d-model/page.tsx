import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const stages = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Assessment & Diagnosis",
    description:
      "The Discovery phase involves comprehensive diagnostics and root-cause assessment. This forms the foundation of every OXYZ patient journey.",
    details: [
      "Comprehensive health profiling",
      "Advanced diagnostic testing",
      "Root-cause identification",
      "Personalized baseline establishment",
    ],
    color: "bg-gold",
    textColor: "text-gold",
  },
  {
    number: "02",
    title: "Detox",
    subtitle: "Cleanse & Optimize",
    description:
      "The Detox phase focuses on systemic burden reduction and internal environment optimization, preparing the body for regenerative interventions.",
    details: [
      "Systemic burden reduction",
      "Internal environment optimization",
      "Cellular cleansing protocols",
      "Preparation for regeneration",
    ],
    color: "bg-gold-light",
    textColor: "text-gold",
  },
  {
    number: "03",
    title: "Defence",
    subtitle: "Support & Strengthen",
    description:
      "Defence focuses on immune support, repair, and resilience. This phase ensures regenerative strategies are supported by a robust internal defence system.",
    details: [
      "Immune system optimization",
      "Cellular repair mechanisms",
      "Building resilience",
      "Physiological stability restoration",
    ],
    color: "bg-teal-light",
    textColor: "text-teal",
  },
  {
    number: "04",
    title: "Dynamic",
    subtitle: "Activation & Regeneration",
    description:
      "Dynamic represents the regenerative activation phase, where targeted interventions support cellular renewal, vitality, and anti-aging outcomes.",
    details: [
      "Cellular renewal and restoration",
      "Energy and vitality enhancement",
      "Anti-aging interventions",
      "Performance optimization",
    ],
    color: "bg-teal",
    textColor: "text-teal",
  },
  {
    number: "05",
    title: "Dietary",
    subtitle: "Maintenance & Longevity",
    description:
      "The Dietary phase ensures regenerative gains are sustained long-term through personalized nutrition, lifestyle optimization, and ongoing support.",
    details: [
      "Personalized nutrition strategies",
      "Lifestyle optimization",
      "Habit formation support",
      "Long-term maintenance planning",
    ],
    color: "bg-teal-dark",
    textColor: "text-teal-dark",
  },
];

const benefits = [
  "Consistent patient journeys",
  "Reproducible clinical logic",
  "Clear progression between treatment phases",
  "Alignment between doctors, clinical teams, and operations",
];

const platforms = [
  "Clinical training and education",
  "SOP development and governance",
  "Multicentre replication and licensing",
  "Ethical integration of regenerative products and services",
];

export default function FiveDModelPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            <div className="relative flex items-center bg-teal-dark px-4 sm:px-6 lg:px-8 py-16 lg:py-0 order-2 lg:order-1">
              <div className="mx-auto max-w-2xl">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                  Our Framework
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
                  The OXYZ 5D Regenerative Medical Model
                </h1>
                <p className="text-xl text-secondary-foreground/90 leading-relaxed mb-6">
                  At the core of OXYZ lies the 5D Regenerative Medical Model — a
                  structured framework guiding patient care, clinical decisions,
                  and operational consistency.
                </p>
                <p className="text-lg text-gold font-semibold">
                  Discovery · Detox · Defence · Dynamic · Dietary
                </p>
              </div>
            </div>

            <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[80vh] order-1 lg:order-2">
              <Image
                src="/images/5d-hero.jpg"
                alt="The OXYZ 5D Regenerative Medical Model"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/5" />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                One Model. Consistent Outcomes.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                This framework ensures every OXYZ-aligned practice delivers
                consistent, reproducible, and scalable medical outcomes. Medical
                clarity before intervention, responsible regenerative
                application, and consistent patient journeys across all centers.
              </p>
            </div>
          </div>
        </section>

        {/* The 5 Stages */}
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                The Framework
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                The Five Dimensions
              </h2>
            </div>

            <div className="space-y-8">
              {stages.map((stage, index) => (
                <div
                  key={stage.title}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`order-2 ${
                      index % 2 === 1 ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div className="bg-background rounded-lg p-8 shadow-lg border-t-4 border-gold">
                      <div className="flex items-center gap-4 mb-4">
                        <span
                          className={`text-6xl font-bold ${stage.textColor}/20`}
                        >
                          {stage.number}
                        </span>
                        <div>
                          <h3 className={`text-2xl font-bold ${stage.textColor}`}>
                            {stage.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {stage.subtitle}
                          </p>
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {stage.description}
                      </p>
                      <ul className="space-y-2">
                        {stage.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-3">
                            <CheckCircle2
                              className={`h-5 w-5 ${stage.textColor} flex-shrink-0`}
                            />
                            <span className="text-foreground text-sm">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div
                    className={`relative order-1 ${
                      index % 2 === 1 ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    <div
                      className={`w-32 h-32 ${stage.color} rounded-full flex items-center justify-center mx-auto`}
                    >
                      <span className="text-4xl font-bold text-foreground">
                        {stage.number}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Consistency */}
        <section className="py-24 bg-teal-dark text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Standardization
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  A Model Built for Medical Consistency
                </h2>
                <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                  The OXYZ 5D Model is not a flexible concept — it is a
                  standardised clinical system. Across all OXYZ-aligned
                  practices, it ensures:
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground/90">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-secondary-foreground/80 mt-8 leading-relaxed">
                  This consistency allows regenerative medicine to be delivered
                  responsibly at scale, without dilution of standards.
                </p>
              </div>
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Beyond Patient Care
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  A Platform for Growth
                </h2>
                <p className="text-lg text-secondary-foreground/80 mb-8 leading-relaxed">
                  The 5D Regenerative Model also functions as the foundation for
                  institutional growth and expansion:
                </p>
                <ul className="space-y-4">
                  {platforms.map((platform) => (
                    <li key={platform} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground/90">
                        {platform}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="text-secondary-foreground/80 mt-8 leading-relaxed">
                  By structuring regenerative medicine correctly, OXYZ enables
                  both clinical excellence and institutional expansion.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Our Promise
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Our Commitment
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Regenerative medicine carries responsibility. Structure ensures
                innovation serves patients — not trends.
              </p>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                The OXYZ 5D Biological Regenerative Medical Model reflects our
                commitment to medical integrity, patient-centred outcomes,
                ethical practice, and sustainable, long-term healthcare
                development.
              </p>

              <div className="bg-muted rounded-lg p-8 mb-12">
                <div className="flex flex-wrap justify-center gap-4">
                  {stages.map((stage) => (
                    <div
                      key={stage.title}
                      className={`${stage.color} text-foreground px-6 py-3 rounded-full font-semibold`}
                    >
                      {stage.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/gallery">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8"
                  >
                    View Gallery
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold px-8 bg-transparent"
                  >
                    Apply to Attend Symposium 2026
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
