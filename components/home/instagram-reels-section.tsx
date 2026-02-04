"use client";

import { useEffect, useState } from "react";

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
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Real Experiences From Our Community
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Watch firsthand perspectives from doctors, partners, and attendees
            who experienced the OXYZ Symposium.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {reels.map((reel, index) => {
            const isLoaded = loadedReels[reel.id];

            return (
            <div
              key={reel.id}
              className="rounded-2xl border border-slate-200 bg-white shadow-lg overflow-hidden"
            >
              <div className="relative aspect-[9/16] w-full bg-slate-50">
                {!isLoaded ? (
                  <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-slate-50 to-slate-100 text-slate-500">
                    <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-300 border-t-slate-500" />
                    <p className="text-sm font-semibold tracking-wide uppercase">
                      Loading Reel
                    </p>
                  </div>
                ) : null}
                <iframe
                  title={`OXYZ Symposium Reel ${index + 1}`}
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
          )})}
        </div>
      </div>
    </section>
  );
}
