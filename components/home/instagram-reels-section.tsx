"use client";

import { useEffect } from "react";

// Custom hook for scroll animations
function useScrollAnimation() {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      elements.forEach((el) => observer.observe(el));
      observers.push(observer);
    };

    animateOnScroll();

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
}

type ReelItem = {
  id: string;
  src: string;
  poster?: string;
  title?: string;
  platform?: "mp4" | "youtube";
  aspect?: "portrait" | "landscape";
  autoplay?: boolean;
};

const defaultReels: ReelItem[] = [
  {
    id: "test-1",
    src: "/images/tesimonials/test-1.mp4",
    poster: "/images/tesimonials/test-1.mp4.png",
    platform: "mp4",
  },
  {
    id: "test-2",
    src: "/images/tesimonials/test-2.mp4",
    poster: "/images/tesimonials/test-2.mp4.png",
    platform: "mp4",
  },
  {
    id: "test-3",
    src: "/images/tesimonials/test-3.mp4",
    poster: "/images/tesimonials/test-3.mp4.png",
    platform: "mp4",
  },
];

function toYouTubeEmbedUrl(url: string) {
  const buildEmbedUrl = (id: string) =>
    `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${id}&iv_load_policy=3&disablekb=1&fs=0`;

  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    if (host === "youtu.be") {
      const id = parsed.pathname.replace("/", "");
      return buildEmbedUrl(id);
    }
    if (host === "youtube.com" || host === "m.youtube.com") {
      const id = parsed.searchParams.get("v");
      if (id) {
        return buildEmbedUrl(id);
      }
      const parts = parsed.pathname.split("/");
      const embedIndex = parts.findIndex((part) => part === "embed");
      if (embedIndex >= 0 && parts[embedIndex + 1]) {
        return buildEmbedUrl(parts[embedIndex + 1]);
      }
    }
  } catch {
    return url;
  }
  return url;
}

export function InstagramReelsSection({ reels = defaultReels }: { reels?: ReelItem[] }) {
  useScrollAnimation();
  const gridColsClass =
    reels.length === 2
      ? "grid gap-8 sm:grid-cols-2 lg:grid-cols-2"
      : "grid gap-8 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <>
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .scale-in {
          transform: scale(0.95);
        }

        .scale-in.animated {
          transform: scale(1);
        }

        .stagger-1 {
          transition-delay: 0.1s;
        }

        .stagger-2 {
          transition-delay: 0.2s;
        }

        .stagger-3 {
          transition-delay: 0.3s;
        }

      `}</style>
      
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 animate-on-scroll">
            <div className="mb-4" />
            <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-4 text-balance">
              Real Experiences From Our Community
            </h2>
            <p className="text-gold text-xl leading-relaxed">
              Watch firsthand perspectives from doctors, partners, and attendees
              who experienced the OXYZ Training.
            </p>
          </div>

          <div className={gridColsClass}>
            {reels.map((reel, index) => {
              const isLandscape =
                reel.aspect === "landscape" || reel.platform === "youtube";
              return (
                <div
                  key={reel.id}
                  className={`animate-on-scroll stagger-${index + 1} scale-in rounded-2xl border-2 border-slate-200 bg-white shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300`}
                >
                  <div className={`relative w-full bg-slate-50 ${isLandscape ? "aspect-video" : "aspect-[9/16]"}`}>
                    {reel.platform === "youtube" ? (
                      <iframe
                        title={reel.title || `OXYZ Training Testimonial ${index + 1}`}
                        src={toYouTubeEmbedUrl(reel.src)}
                        className="h-full w-full bg-slate-100"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      />
                    ) : (
                      <video
                        title={reel.title || `OXYZ Training Testimonial ${index + 1}`}
                        className="h-full w-full object-cover bg-slate-100"
                        poster={reel.poster}
                        autoPlay={Boolean(reel.autoplay)}
                        muted={Boolean(reel.autoplay)}
                        loop={Boolean(reel.autoplay)}
                        controls
                        playsInline
                        preload="none"
                      >
                        <source src={reel.src} type="video/mp4" />
                      </video>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
