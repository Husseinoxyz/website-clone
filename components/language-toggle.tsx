"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { localizedHref } from "@/lib/i18n-config";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = lang === "ar" ? "en" : "ar";

  const onClick = () => {
    setLang(switchTo);
    const onArPath = pathname === "/ar" || pathname.startsWith("/ar/");
    const target = switchTo === "ar" ? localizedHref(pathname, "ar") : onArPath ? pathname.slice(3) || "/" : pathname;
    if (target !== pathname) router.push(target, { scroll: false });
    // Reload server-rendered parts such as the tab title in the new language.
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={onClick}
      lang={switchTo}
      aria-label={switchTo === "ar" ? "التبديل إلى العربية" : "Switch to English"}
      className={`inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[#007A59]/25 px-3 py-1.5 text-sm font-semibold text-[#007A59] transition-colors hover:border-gold hover:text-gold ${className}`}
    >
      <Globe className="h-4 w-4" />
      <span style={switchTo === "ar" ? { fontFamily: "var(--font-readex)" } : undefined}>
        {switchTo === "ar" ? "العربية" : "English"}
      </span>
    </button>
  );
}
