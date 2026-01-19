import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
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

const galleryImages = [
  {
    src: "/images/gallery/symposium-1.jpg",
    alt: "International doctors networking",
  },
  {
    src: "/images/gallery/symposium-2.jpg",
    alt: "Clinical discussion session",
  },
  { src: "/images/gallery/symposium-3.jpg", alt: "Professional networking" },
  { src: "/images/gallery/symposium-4.jpg", alt: "Medical presentation" },
  {
    src: "/images/gallery/symposium-5.jpg",
    alt: "Strategic collaboration meeting",
  },
  { src: "/images/gallery/symposium-6.jpg", alt: "Symposium attendees" },
];

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
              </div>
            </div>

            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[70vh] order-1 lg:order-2">
              <Image
                src="/images/past-symposium-featured.jpg"
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
                  src="/images/past-symposium-featured.jpg"
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
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                Gallery
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Previous Symposium Highlights
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-lg group aspect-[4/3]"
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-teal-dark/0 group-hover:bg-teal-dark/60 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-secondary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                      {image.alt}
                    </span>
                  </div>
                </div>
              ))}
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
        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="bg-background rounded-2xl p-12 text-center">
              <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-3">
                The Future
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                Looking Ahead
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
                Building on previous editions, the OXYZ International Symposium
                2026 will continue to strengthen medical credibility,
                professional networks, and structured collaboration pathways.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/symposium">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8"
                  >
                    Explore Symposium 2026
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/register">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold px-8 bg-transparent"
                  >
                    Apply to Attend
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
