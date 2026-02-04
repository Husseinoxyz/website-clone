"use client";

import Image from "next/image";

const slides = [
  {
    src: "/images/sym/slide_1.jpg",
    alt: "Specialists collaborating during a symposium session",
    title: "Collaborative Sessions",
  },
  {
    src: "/images/sym/slide_2.jpg",
    alt: "Clinicians discussing regenerative workflows",
    title: "Clinical Focus",
  },
  {
    src: "/images/sym/slide_3.jpg",
    alt: "Audience viewing a keynote presentation",
    title: "Keynote Insights",
  },
  {
    src: "/images/sym/slide_4.jpg",
    alt: "Medical professionals networking",
    title: "Global Network",
  },
  {
    src: "/images/sym/slide_5.jpg",
    alt: "Laboratory demonstration at the symposium",
    title: "Hands-On Demos",
  },
  {
    src: "/images/sym/slide_6.jpg",
    alt: "Panel discussion with experts",
    title: "Expert Panels",
  },
  {
    src: "/images/sym/slide_7.jpg",
    alt: "Symposium breakout discussion",
    title: "Breakout Sessions",
  },
];

export function ImageCardSliderSection() {
  const doubledSlides = [...slides, ...slides];

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative">
        <div className="flex w-max gap-0 px-0 animate-marquee motion-reduce:animate-none">
          {doubledSlides.map((slide, index) => (
            <article
              key={`${slide.src}-${index}`}
              aria-hidden={index >= slides.length}
              className="group relative h-[260px] w-[340px] sm:h-[280px] sm:w-[380px] lg:h-[320px] lg:w-[440px] overflow-hidden rounded-3xl border border-[#0B2B22]/10 bg-white shadow-xl shadow-[#0B2B22]/10 shrink-0"
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 440px"
                quality={100}
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B22]/70 via-[#0B2B22]/10 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
                  {slide.title}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
