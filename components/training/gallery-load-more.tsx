"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { GalleryGrid } from "@/components/training/gallery-grid";
import { useLang } from "@/lib/i18n";

type GalleryLoadMoreProps = {
  images: string[];
  alt: string;
  initialCount?: number;
};

export function GalleryLoadMore({
  images,
  alt,
  initialCount = 15,
}: GalleryLoadMoreProps) {
  const { t } = useLang();
  const [showAll, setShowAll] = useState(false);
  const visibleImages = showAll ? images : images.slice(0, initialCount);

  return (
    <div className="space-y-10">
      <GalleryGrid alt={alt} images={visibleImages} />
      {!showAll && images.length > initialCount ? (
        <div className="flex justify-center">
          <Button
            variant="outline"
            className="border-gold text-foreground hover:bg-gold hover:text-foreground font-semibold"
            onClick={() => setShowAll(true)}
          >
            {t("Load More", "عرض المزيد")}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
