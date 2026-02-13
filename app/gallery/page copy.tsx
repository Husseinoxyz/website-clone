import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { GalleryGrid } from "@/components/training/gallery-grid";
import { GalleryLoadMore } from "@/components/training/gallery-load-more";
import { ArrowRight, Sparkles } from "lucide-react";

const gallery2025 = [
  "/images/sym/slide_1.jpg",
  "/images/sym/slide_2.jpg",
  "/images/sym/slide_3.jpg",
  "/images/sym/slide_4.jpg",
  "/images/sym/slide_5.jpg",
  "/images/sym/slide_6.jpg",
  "/images/sym/slide_7.jpg",
  "/images/sym/home_g_1.jpg",
  "/images/sym/home_g_2.jpg",
  "/images/sym/home_g_3.jpg",
  "/images/sym/home_g_4.jpg",
  "/images/sym/home_g_5.jpg",
  "/images/sym/home_g_6.jpg",
  "/images/sym/home_g_7.jpg",
  "/images/sym/home_g_8.jpg",
  "/images/sym/home_g_9.jpg",
].map((src) => ({
  src,
  alt: "2025 training highlight",
}));

const gallery2023 = Array.from({ length: 12 }, (_, index) => {
  const value = index + 1;
  const number = String(value).padStart(2, "0");
  const padded =
    value >= 10 && value <= 12 ? `0${value}` : number;
  const src =
    value === 11
      ? "/images/gallery-1/011.png"
      : value === 12
        ? "/images/gallery-1/012.png"
        : `/images/gallery-1/${padded}.jpg`;

  return {
    src,
    alt: "2023 training highlight",
  };
});

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="relative w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            <div className="relative flex items-center bg-teal-dark px-4 sm:px-6 lg:px-8 py-16 lg:py-0 order-2 lg:order-1 text-secondary-foreground">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
                <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-teal-light/20 blur-3xl" />
              </div>
              <div className="relative mx-auto max-w-3xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  <Sparkles className="h-4 w-4" />
                  Gallery
                </div>
                <h1 className="mt-6 text-4xl font-bold sm:text-5xl">
                  Moments from the OXYZ Trainings
                </h1>
                <p className="mt-6 text-lg text-secondary-foreground/80 leading-relaxed">
                  A curated visual archive of clinical exchange, strategic
                  alignment, and the global community shaping regenerative
                  medicine.
                </p>
                <div className="mt-10 flex flex-col gap-4">
                  <div className="flex flex-wrap gap-3">
                    <Link href="/register">
                      <Button className="bg-gold text-white hover:bg-gold-dark font-semibold">
                        Register Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link
                      href="https://wa.me/6586163762?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Training%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
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
                    <Link href="/past-trainings">
                      <Button
                        variant="outline"
                        className="border-gold text-gold hover:bg-gold hover:text-foreground font-semibold bg-transparent"
                      >
                        View Past Trainings
                      </Button>
                    </Link>
                  </div>
                  <div className="text-sm text-secondary-foreground/70">
                    6 continents • 100+ professionals • 20+ countries
                  </div>
                </div>
              </div>
            </div>

            <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-[70vh] order-1 lg:order-2">
              <Image
                src="/images/sym/gallery_hero.jpg"
                alt="OXYZ training gathering"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/5" />
            </div>
          </div>
        </section>

        <section className="py-24 bg-background">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Clinical depth meets strategic connection
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Each frame captures collaboration, discussion, and the
                  standards that define the OXYZ ecosystem.
                </p>
              </div>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-gold" />
                Updated with the latest training highlights.
              </div>
            </div>
            </div>

            <div className="mt-16">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  2025 Training
                </h3>
              </div>
              <GalleryLoadMore
                alt="2025 training highlight"
                images={gallery2025.map((image) => image.src)}
                initialCount={12}
              />
            </div>

            <div className="mt-16">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  2023 Training
                </h3>
              </div>
              <GalleryGrid
                alt="2023 training highlight"
                images={gallery2023.map((image) => image.src)}
              />
            </div>
          </div>
        </section>

        <section className="py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                  Where strategy, science, and trust converge
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  OXYZ trainings are designed for meaningful exchange and
                  clinical alignment, not mass attendance. The result is a
                  focused environment where relationships are built with depth.
                </p>
                <div className="flex flex-wrap gap-3 text-sm">
                  {[
                    "Clinical Standards",
                    "Partner Alignment",
                    "Executive Forums",
                    "Medical Workshops",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-teal/30 bg-white px-4 py-2 text-teal-dark"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-2xl bg-gold/30 blur-2xl" />
                <div className="relative overflow-hidden rounded-2xl shadow-xl">
                  <Image
                    src="/images/sym/home_g_4.jpg"
                    alt="Strategic collaboration meeting"
                    width={640}
                    height={480}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {["/images/gallery-1/03.jpg", "/images/gallery-1/04.jpg"].map(
                    (src) => (
                      <div
                        key={src}
                        className="relative aspect-[4/3] overflow-hidden rounded-xl"
                      >
                        <Image
                          src={src}
                          alt="OXYZ training highlight"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Next chapter background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold">
                  Be part of Training 2026
                </h2>
                <p className="text-secondary-foreground/80 mt-2">
                  Register your interest and join the next cohort of leaders.
                </p>
              </div>
              <Link href="/register">
                <Button className="bg-gold text-white hover:bg-gold-dark font-semibold px-8">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
