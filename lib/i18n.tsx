"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { LANG_COOKIE, type Lang } from "@/lib/i18n-config";

export { LANG_COOKIE, type Lang };

type LangContextValue = {
  lang: Lang;
  isAr: boolean;
  setLang: (lang: Lang) => void;
  /** Pick the English or Arabic version of a value for the current language. */
  t: <A, B>(en: A, ar: B) => A | B;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({
  initialLang,
  children,
}: {
  initialLang: Lang;
  children: React.ReactNode;
}) {
  const [savedLang, setLangState] = useState<Lang>(initialLang);

  const setLang = useCallback((next: Lang) => {
    document.cookie = `${LANG_COOKIE}=${next}; path=/; max-age=31536000; samesite=lax`;
    setLangState(next);
  }, []);

  // /ar URLs are always Arabic. Arriving on one (e.g. from a search result) also
  // saves Arabic, so the visitor stays in Arabic on the pages they open next.
  const pathname = usePathname();
  const onArPath = pathname === "/ar" || pathname?.startsWith("/ar/");
  const lang: Lang = onArPath ? "ar" : savedLang;
  useEffect(() => {
    if (onArPath) setLang("ar");
  }, [onArPath, setLang]);

  // Keep <html lang/dir> in sync when the language is switched on the client.
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const t = useCallback(<A, B>(en: A, ar: B): A | B => (lang === "ar" ? ar : en), [lang]);

  return (
    <LangContext.Provider value={{ lang, isAr: lang === "ar", setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LanguageProvider>");
  return ctx;
}
