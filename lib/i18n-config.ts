// Shared by server (layout) and client (LanguageProvider) code.
export type Lang = "en" | "ar";

export const LANG_COOKIE = "lang";

/** Set by proxy.ts on /ar URLs so server code can render them in Arabic without a cookie. */
export const LANG_HEADER = "x-lang";

// Pages shared by both languages: /ar/about serves app/about in Arabic (see proxy.ts).
export const AR_ROUTED_PAGES = [
  "/about",
  "/training",
  "/program",
  "/5d-model",
  "/past-trainings",
  "/business-enquiries",
  "/gallery",
  "/contact",
];

/** The URL of a page in the given language. The home page keeps "/" because /ar is its own landing page. */
export function localizedHref(href: string, lang: Lang) {
  if (lang === "ar" && (href === "/register" || AR_ROUTED_PAGES.includes(href))) return `/ar${href}`;
  return href;
}
