"use client";

import { useEffect, useState } from "react";

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

const reels = [
  {
    id: "DQGs41-k3OG",
  },
  {
    id: "DPYPsWqEykT",
  },
  {
    id: "DOs1omqjUD3",
  },
  {
    id: "DO5t4oNiTsE",
  },
];

export function InstagramReelsSection() {
  useScrollAnimation();
  
  const [loadedReels, setLoadedReels] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadedReels((prev) => {
        const next = { ...prev };
        reels.forEach((reel) => {
          if (!next[reel.id]) next[reel.id] = true;
        });
        return next;
      });
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

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

        .stagger-4 {
          transition-delay: 0.4s;
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

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {reels.map((reel, index) => {
              const isLoaded = loadedReels[reel.id];
              return (
                <div
                  key={reel.id}
                  className={`animate-on-scroll stagger-${index + 1} scale-in rounded-2xl border-2 border-slate-200 bg-white shadow-lg hover:shadow-xl overflow-hidden transition-all duration-300`}
                >
                  <div className="relative aspect-[9/16] w-full bg-slate-50">
                    {!isLoaded ? (
                      <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-500">
                        <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-300 border-t-gold" />
                        <p className="text-sm font-semibold tracking-wide uppercase">
                          Loading Reel
                        </p>
                      </div>
                    ) : null}
                    <iframe
                      title={`OXYZ Training Reel ${index + 1}`}
                      src={`https://www.instagram.com/reel/${reel.id}/embed`}
                      className="h-full w-full"
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                      onLoad={() =>
                        setLoadedReels((prev) => ({ ...prev, [reel.id]: true }))
                      }
                    />
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
