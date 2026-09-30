"use client";

import { usePathname, useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import { useLang } from "@/lib/i18n";

// Pages that have a dedicated route per language.
const EN_TO_AR: Record<string, string> = { "/register": "/ar/register" };
const AR_TO_EN: Record<string, string> = { "/ar": "/", "/ar/register": "/register" };

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = lang === "ar" ? "en" : "ar";

  const onClick = () => {
    setLang(switchTo);
    const target = switchTo === "ar" ? EN_TO_AR[pathname] : AR_TO_EN[pathname];
    if (target) router.push(target);
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
