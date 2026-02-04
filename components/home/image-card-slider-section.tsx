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
    <>
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 40s linear infinite;
        }

        .animate-marquee:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-marquee {
            animation: none;
          }
        }
      `}</style>
      
      <section className="relative overflow-hidden bg-white py-8">
        {/* Optional Header */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#007A59] mb-3">
            Symposium Highlights
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the energy and collaboration of our international symposiums
          </p>
        </div>

        <div className="relative">
          <div className="flex w-max gap-6 px-0 animate-marquee motion-reduce:animate-none">
            {doubledSlides.map((slide, index) => (
              <article
                key={`${slide.src}-${index}`}
                aria-hidden={index >= slides.length}
                className="group relative h-[280px] w-[360px] sm:h-[300px] sm:w-[400px] lg:h-[340px] lg:w-[460px] overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-lg hover:shadow-2xl shrink-0 transition-all duration-300"
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  sizes="(max-width: 640px) 360px, (max-width: 1024px) 400px, 460px"
                  quality={100}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-base font-bold uppercase tracking-wider text-white drop-shadow-lg">
                    {slide.title}
                  </p>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#007A59]/90 via-[#007A59]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </article>
            ))}
          </div>
        </div>

        {/* Gradient Overlays for smooth edges - lighter for better visibility */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/60 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/60 to-transparent pointer-events-none z-10" />
      </section>
    </>
  );
}