import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { GalleryGrid } from "@/components/symposium/gallery-grid";
import { ArrowRight, Globe, Users, BookOpen, Handshake } from "lucide-react";

const highlights = [
  { icon: Users, text: "International doctors and healthcare professionals" },
  { icon: BookOpen, text: "Regenerative & integrative medicine topics" },
  { icon: Handshake, text: "Clinical discussions and protocol sharing" },
  { icon: Globe, text: "Strategic networking and professional exchange" },
];

const regions = [
  "Asia Pacific",
  "Middle East",
  "North America",
  "Europe",
  "Africa",
  "International medical tourism and wellness markets",
];

const emphases = [
  "Responsible regenerative medicine",
  "Structured clinical thinking",
  "Ethical medical application",
  "Long-term professional collaboration",
];

const gallery2024 = Array.from({ length: 12 }, (_, index) => ({
  src: `/images/gallery-1/${index + 1}.jpg`,
  alt: "2024 symposium highlight",
}));

const gallery2023 = Array.from({ length: 12 }, (_, index) => ({
  src: `/images/gallery-1/${String(index + 1).padStart(2, "0")}.jpg`,
  alt: "2023 symposium highlight",
}));

export default function PastSymposiumsPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            <div className="relative flex items-center bg-teal-dark px-4 sm:px-6 lg:px-8 py-16 lg:py-0 order-2 lg:order-1 text-secondary-foreground">
              <div className="mx-auto max-w-2xl">
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                  Our History
                </p>
                <h1 className="text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
                  Past OXYZ International Symposiums
                </h1>
                <p className="text-xl text-secondary-foreground/90 leading-relaxed">
                  A glimpse into our medical and professional community. The
                  OXYZ International Symposium series brings together medical
                  professionals, clinic owners, and healthcare leaders from
                  different regions.
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
                src="/images/gallery-1/2.jpg"
                alt="Past OXYZ symposium highlights"
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
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  About Our Events
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                  Building Professional Excellence
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Organized by OXYZ Health International, each symposium focuses
                  on medical depth, professional exchange, and alignment — not
                  mass attendance.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Each edition is curated to maintain professional quality and
                  meaningful interaction.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {highlights.map((item) => (
                    <div
                      key={item.text}
                      className="flex items-start gap-3 bg-muted rounded-lg p-4"
                    >
                      <item.icon className="h-6 w-6 text-gold flex-shrink-0" />
                      <span className="text-sm text-foreground">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/images/gallery-1/8.jpg"
                  alt="Past symposium"
                  width={600}
                  height={450}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-24 bg-muted">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Gallery
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Previous Symposium Highlights
              </h2>
            </div>
            </div>

            <div className="mb-12">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  2024 Symposium
                </h3>
              </div>
              <GalleryGrid
                alt="2024 symposium highlight"
                images={gallery2024.map((image) => image.src)}
              />
            </div>

            <div>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  2023 Symposium
                </h3>
              </div>
              <GalleryGrid
                alt="2023 symposium highlight"
                images={gallery2023.map((image) => image.src)}
              />
            </div>
          </div>
        </section>

        {/* Global Participation */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Reach
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Global Participation
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Participants have included professionals from across the
                  globe, representing diverse healthcare systems and medical
                  specialties.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {regions.map((region) => (
                    <div
                      key={region}
                      className="flex items-center gap-3 bg-muted rounded-lg p-4"
                    >
                      <Globe className="h-5 w-5 text-gold flex-shrink-0" />
                      <span className="text-sm text-foreground">{region}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                  Focus
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                  Scientific Exchange & Collaboration
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our symposiums emphasize the core principles of responsible
                  regenerative medicine and structured clinical practice.
                </p>
                <ul className="space-y-4">
                  {emphases.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 bg-teal-dark text-secondary-foreground rounded-lg p-4"
                    >
                      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* More Than an Event */}
        <section className="py-24 bg-teal-dark text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Impact
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                More Than an Event
              </h2>
              <p className="text-lg text-secondary-foreground/80 mb-12 leading-relaxed">
                For many participants, the symposium serves as a starting point
                for collaboration, a platform for continued medical exchange,
                and a gateway into the OXYZ ecosystem.
              </p>

              <div className="grid sm:grid-cols-3 gap-8">
                <div className="bg-secondary-foreground/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gold mb-3">
                    Starting Point
                  </h3>
                  <p className="text-secondary-foreground/80 text-sm">
                    A launching pad for meaningful professional collaboration
                  </p>
                </div>
                <div className="bg-secondary-foreground/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gold mb-3">
                    Platform
                  </h3>
                  <p className="text-secondary-foreground/80 text-sm">
                    For continued medical exchange and knowledge sharing
                  </p>
                </div>
                <div className="bg-secondary-foreground/10 rounded-lg p-6">
                  <h3 className="text-xl font-bold text-gold mb-3">Gateway</h3>
                  <p className="text-secondary-foreground/80 text-sm">
                    Into the broader OXYZ health ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <p className="text-5xl font-bold text-gold mb-2">6+</p>
                <p className="text-muted-foreground">Continents Represented</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-gold mb-2">100+</p>
                <p className="text-muted-foreground">Medical Professionals</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-gold mb-2">50+</p>
                <p className="text-muted-foreground">Clinical Topics</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-bold text-gold mb-2">20+</p>
                <p className="text-muted-foreground">Countries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Looking Ahead */}
        <section className="py-24 text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Future outlook background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-12 text-center">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                The Future
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Looking Ahead
              </h2>
              <p className="text-lg text-secondary-foreground/85 mb-8 max-w-2xl mx-auto leading-relaxed">
                Building on previous editions, the OXYZ International Symposium
                2026 will continue to strengthen medical credibility,
                professional networks, and structured collaboration pathways.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/symposium">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-white font-semibold px-8"
                  >
                    Explore Symposium 2026
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold px-8 bg-transparent"
                  >
                    Register Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Quote */}
        <section className="py-12 bg-background border-t border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground italic">
              OXYZ symposiums are built on alignment, professionalism, and
              long-term impact.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
