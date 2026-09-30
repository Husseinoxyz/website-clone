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

  // The dedicated /ar pages are always Arabic. This is derived from the path
  // rather than saved, so leaving an /ar page restores the visitor's choice.
  const pathname = usePathname();
  const onArPath = pathname === "/ar" || pathname?.startsWith("/ar/");
  const lang: Lang = onArPath ? "ar" : savedLang;

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
