import type { MetadataRoute } from "next";

import { pageUrls, SEO_PAGES } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(SEO_PAGES).flatMap((path) => {
    const urls = pageUrls(path);
    const alternates = { languages: { en: urls.en, ar: urls.ar, "x-default": urls.en } };
    return [
      { url: urls.en, alternates },
      { url: urls.ar, alternates },
    ];
  });
}
