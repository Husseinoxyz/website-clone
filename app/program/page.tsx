import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  Calendar,
  Clock,
  Info,
} from "lucide-react";

const physicalFeatures = [
  "4 nights hotel accommodation (single occupancy with daily breakfast)",
  "Full access to on-site symposium programs",
  "Scientific sessions, clinical discussions, strategic presentations",
  "All official symposium meals & refreshments",
  "Certificate of Participation",
  "OXYZ Academy Membership",
];

const onlineFeatures = [
  "Access to selected scientific & medical sessions (online)",
  "Live or scheduled on-demand viewing",
  "Digital Certificate of Participation",
  "OXYZ Academy Membership",
];

const importantInfo = [
  "This is a professionally curated symposium, not open to mass registration",
  "All registrations are subject to review and confirmation",
  "Seats are allocated to ensure medical relevance and alignment",
  "Online registration does not include accommodation, meals, or physical access",
];

export default function ProgramPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            <div className="relative flex items-center bg-muted px-4 sm:px-6 lg:px-8 py-16 lg:py-0 order-2 lg:order-1">
              <div className="mx-auto max-w-2xl">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                  Program Details
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                  Program Overview
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Comprehensive details about the OXYZ International Symposium
                  2026, including registration options, fees, and what is
                  included.
                </p>
              </div>
            </div>

            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[70vh] order-1 lg:order-2">
              <Image
                src="/images/symposium-preview.jpg"
                alt="Symposium program overview"
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
                  4 nights accommodation included for physical participants
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
                <p className="text-muted-foreground">
                  Intentionally limited to ensure quality exchange
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Options */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Pricing
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Registration Options & Fees
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Early Bird */}
              <div className="bg-gold rounded-lg p-8 text-foreground ring-4 ring-gold-light relative">
                <span className="absolute -top-3 left-8 inline-block bg-teal text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                  Best Value
                </span>
                <h3 className="text-xl font-bold mb-2">
                  Early Bird - Physical
                </h3>
                <p className="text-4xl font-bold mb-2">USD 2,500</p>
                <p className="text-sm text-foreground/70 mb-6">
                  Deadline: 28 February 2026
                </p>
                <ul className="space-y-3 mb-8">
                  {physicalFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-teal flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground/80">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/register?type=early-bird" className="block">
                  <Button className="w-full bg-teal hover:bg-teal-dark text-secondary-foreground font-semibold">
                    Register Early Bird
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Standard */}
              <div className="bg-muted rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-gold mb-2">
                  Standard - Physical
                </h3>
                <p className="text-4xl font-bold text-foreground mb-2">
                  USD 3,000
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  After 28 February 2026
                </p>
                <ul className="space-y-3 mb-8">
                  {physicalFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/register?type=standard" className="block">
                  <Button className="w-full bg-gold hover:bg-gold-dark text-foreground font-semibold">
                    Register Standard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>

              {/* Online */}
              <div className="bg-muted rounded-lg p-8 border border-border">
                <h3 className="text-xl font-bold text-gold mb-2">
                  Online Scientific Program
                </h3>
                <p className="text-4xl font-bold text-foreground mb-2">
                  USD 1,000
                </p>
                <p className="text-sm text-muted-foreground mb-6">
                  Limited spots available
                </p>
                <ul className="space-y-3 mb-8">
                  {onlineFeatures.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link href="/register?type=online" className="block">
                  <Button className="w-full bg-teal hover:bg-teal-dark text-secondary-foreground font-semibold">
                    Register Online
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Networking and on-site activities exclusive to physical
                  attendees
                </p>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Early Bird rates apply to approved registrations completed by 28
              February 2026.
            </p>
          </div>
        </section>

        {/* What's Included */}
        <section className="py-24 bg-teal-dark text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Physical Attendance
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  What&apos;s Included
                </h2>
                <p className="text-secondary-foreground/80 mb-8">
                  Physical attendance (USD 2,500 / USD 3,000) includes:
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary-foreground/10 rounded-lg p-5">
                    <h3 className="font-semibold text-gold mb-2">
                      Accommodation
                    </h3>
                    <p className="text-secondary-foreground/80 text-sm">
                      4 nights hotel accommodation, single occupancy with daily
                      breakfast
                    </p>
                  </div>
                  <div className="bg-secondary-foreground/10 rounded-lg p-5">
                    <h3 className="font-semibold text-gold mb-2">
                      Full Symposium Access
                    </h3>
                    <p className="text-secondary-foreground/80 text-sm">
                      Scientific sessions, clinical discussions, and strategic
                      presentations
                    </p>
                  </div>
                  <div className="bg-secondary-foreground/10 rounded-lg p-5">
                    <h3 className="font-semibold text-gold mb-2">
                      Meals & Refreshments
                    </h3>
                    <p className="text-secondary-foreground/80 text-sm">
                      All official symposium meals and refreshments included
                    </p>
                  </div>
                  <div className="bg-secondary-foreground/10 rounded-lg p-5">
                    <h3 className="font-semibold text-gold mb-2">
                      Certification & Membership
                    </h3>
                    <p className="text-secondary-foreground/80 text-sm">
                      Certificate of Participation and OXYZ Academy Membership
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Online Participation
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  Online Scientific Program
                </h2>
                <p className="text-secondary-foreground/80 mb-8">
                  Online participation (USD 1,000) includes:
                </p>
                <div className="space-y-4">
                  <div className="bg-secondary-foreground/10 rounded-lg p-5">
                    <h3 className="font-semibold text-gold mb-2">
                      Scientific Sessions
                    </h3>
                    <p className="text-secondary-foreground/80 text-sm">
                      Access to selected scientific and medical sessions online
                    </p>
                  </div>
                  <div className="bg-secondary-foreground/10 rounded-lg p-5">
                    <h3 className="font-semibold text-gold mb-2">
                      Flexible Viewing
                    </h3>
                    <p className="text-secondary-foreground/80 text-sm">
                      Live or scheduled on-demand viewing as applicable
                    </p>
                  </div>
                  <div className="bg-secondary-foreground/10 rounded-lg p-5">
                    <h3 className="font-semibold text-gold mb-2">
                      Digital Certificate
                    </h3>
                    <p className="text-secondary-foreground/80 text-sm">
                      Digital Certificate of Participation included
                    </p>
                  </div>
                  <div className="bg-secondary-foreground/10 rounded-lg p-5">
                    <h3 className="font-semibold text-gold mb-2">
                      Academy Access
                    </h3>
                    <p className="text-secondary-foreground/80 text-sm">
                      OXYZ Academy Membership for continued learning
                    </p>
                  </div>
                </div>
                <p className="text-xs text-secondary-foreground/60 mt-6">
                  Note: Online participation is limited to scientific content
                  only. Networking sessions, private meetings, and on-site
                  activities are exclusive to physical attendees.
                </p>
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
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Next Steps
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ready to secure your place? Choose your registration option and
                begin your application.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register?type=early-bird">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8"
                  >
                    Apply for Early Bird
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/register?type=online">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold px-8 bg-transparent"
                  >
                    Register for Online Program
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
