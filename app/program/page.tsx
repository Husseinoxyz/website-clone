import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Calendar,
  Clock,
  Info,
  Scan,
  ClipboardCheck,
  Users,
  ShieldCheck,
  BadgeCheck,
  LineChart,
} from "lucide-react";

const packageIFeatures = [
  {
    icon: Calendar,
    text: "4 nights hotel stay (single occupancy, breakfast included)",
  },
  {
    icon: Users,
    text: "Full access to all 3-day symposium sessions",
  },
  {
    icon: ClipboardCheck,
    text: "All official meals and Gala Dinner",
  },
  {
    icon: BadgeCheck,
    text: "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
  },
];

const packageIIFeatures = [
  {
    icon: LineChart,
    text: "Advanced OXYZ product suite",
  },
  {
    icon: Scan,
    text: "VIP on-site diagnostics",
  },
  {
    icon: Users,
    text: "1-on-1 clinical protocol consultation",
  },
  {
    icon: BadgeCheck,
    text: "Referral partnership",
  },
];

const packageIIIFeatures = [
  {
    icon: Scan,
    text: "Root Cause BR Scan Machine with SOPs",
  },
  {
    icon: LineChart,
    text: "Executive strategy and regional expansion planning",
  },
  {
    icon: ShieldCheck,
    text: "Security deposit waived",
  },
  {
    icon: Users,
    text: "Post-event clinical and staff training",
  },
  {
    icon: BadgeCheck,
    text: "Elite business associate status",
  },
];

const importantInfo = [
  "Curated attendance: all registrations are subject to review and confirmation",
  "Selection criteria prioritize medical relevance and clinical alignment",
  "Early Bird rates apply to Package I only",
  "Packages II and III are priced based on equipment and product value",
];

export default function ProgramPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            <div className="relative flex items-center bg-teal-dark px-4 sm:px-6 lg:px-8 py-16 lg:py-0 order-2 lg:order-1 text-secondary-foreground">
              <div className="mx-auto max-w-2xl">
                <h1 className="text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
                  Program Overview
                </h1>
                <p className="text-xl text-secondary-foreground/80 leading-relaxed">
                  Comprehensive details about the OXYZ International Symposium
                  2026, including registration options, fees, and what is
                  included.
                </p>
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
                      className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold bg-transparent"
                    >
                      Request Scientific Program
                    </Button>
                  </Link>
                </div>
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
                  4 nights accommodation included for Package I, II, and III
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

        {/* Registration Options */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                Secure Your Place at Symposium 2026
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                This is a professionally curated symposium, not open to mass
                registration. All registrations are subject to review and
                confirmation. Seats are allocated to ensure medical relevance
                and alignment.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {/* Package I */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 text-foreground">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-slate-200/70 to-slate-300/60" />
                <div className="relative flex flex-col gap-6 p-8">
                  <div className="flex-1">
                    <h3 className="mt-2 text-2xl font-bold text-foreground">
                      Package I: Stem Cell Scholar (The Foundation)
                    </h3>
                    <span className="mt-2 inline-flex items-center gap-2 rounded-full bg-teal px-3 py-1 text-xs font-semibold text-secondary-foreground">
                      Early Bird
                    </span>
                    <p className="mt-2 text-sm font-semibold text-foreground/90">
                      Includes Symposium Access + Hospitality:
                    </p>
                    <ul className="mt-4 grid gap-4">
                      {packageIFeatures.map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3">
                          <feature.icon className="h-5 w-5 text-teal-dark flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-4">
                      <div>
                        <p className="text-3xl font-bold">USD 2,500</p>
                        <p className="text-sm text-foreground/80">
                          Early Bird | USD 3,000 Standard
                        </p>
                        <p className="text-xs text-foreground/70">
                          Early Bird Deadline: 28 February 2026
                        </p>
                      </div>
                      <Link
                        href="/register?type=package-i-early-bird"
                        className="block"
                      >
                        <Button className="w-full bg-teal hover:bg-teal-dark text-secondary-foreground font-semibold">
                          Register for Package I
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package II */}
              <div className="relative overflow-hidden rounded-3xl border border-gold/40 bg-[#d1a654] text-foreground">
                <div className="absolute inset-0 bg-gradient-to-r from-[#d1a654]/80 via-[#d1a654]/70 to-[#d1a654]/55" />
                <div className="relative flex flex-col gap-6 p-8">
                  <div className="flex-1">
                    <h3 className="mt-2 text-2xl font-bold text-foreground">
                      Package II: Immersive Experience (The Clinical Track)
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-foreground/90">
                      Includes Package I, Plus:
                    </p>
                    <ul className="mt-4 grid gap-4">
                      {packageIIFeatures.map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3">
                          <feature.icon className="h-5 w-5 text-white flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-foreground/80">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-4">
                      <div>
                        <p className="text-3xl font-bold">USD 10,000</p>
                        <p className="text-sm text-foreground/80">
                          Total Value: USD 15,500
                        </p>
                      </div>
                      <Link href="/register?type=package-ii" className="block">
                        <Button className="w-full bg-white text-foreground hover:bg-white/90 font-semibold">
                          Register for Package II
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Package III */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 text-white">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800/70 to-slate-700/60" />
                <div className="relative flex flex-col gap-6 p-8">
                  <div className="flex-1">
                    <h3 className="mt-2 text-2xl font-bold text-white">
                      Package III: Global Elite Partner (The Business Track)
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-white/90">
                      Includes Packages I & II, Plus:
                    </p>
                    <ul className="mt-4 grid gap-4">
                      {packageIIIFeatures.map((feature) => (
                        <li key={feature.text} className="flex items-start gap-3">
                          <feature.icon className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-white/85">
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 flex flex-col gap-4">
                      <div>
                        <p className="text-3xl font-bold">USD 25,000</p>
                        <p className="text-sm text-white/80">
                          Total Value: USD 51,400
                        </p>
                      </div>
                      <Link href="/register?type=package-iii" className="block">
                        <Button className="w-full bg-gold hover:bg-gold-dark text-foreground font-semibold">
                          Register for Package III
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              Early Bird rates apply to Package I only and must be completed by
              28 February 2026.
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
            <div className="absolute inset-0 bg-black/55" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto text-white">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Next Steps
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Ready to secure your place? Choose your package and begin your
                application.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/register?type=package-i-early-bird">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-white font-semibold px-8"
                  >
                    Register for Package I
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/register?type=package-ii">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold px-8 bg-transparent"
                  >
                    Register for Package II
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
      </main>
      <Footer />
    </>
  );
}
