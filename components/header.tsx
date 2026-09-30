"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

type NavigationItem = {
  name: string;
  nameAr: string;
  href: string;
};

const navigation: NavigationItem[] = [
  { name: "Home", nameAr: "الرئيسية", href: "/" },
  { name: "About OXYZ", nameAr: "عن OXYZ", href: "/about" },
  { name: "2026 Summit", nameAr: "قمة 2026", href: "/training" },
  { name: "Program", nameAr: "البرنامج", href: "/program" },
  { name: "Past Trainings", nameAr: "الدورات السابقة", href: "/past-trainings" },
  { name: "Business Enquiries", nameAr: "الشراكات والأعمال", href: "/business-enquiries" },
  { name: "Gallery", nameAr: "معرض الصور", href: "/gallery" },
  { name: "Contact", nameAr: "تواصل معنا", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const pathname = usePathname();
  const { isAr: isArabic, t } = useLang();
  const registerHref = isArabic ? "/ar/register" : "/register";
  const onRegisterPage = pathname === "/register" || pathname === "/ar/register";

  // Scroll detection: Only show header at the very top (hero part)
  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) return; // Keep visible if mobile nav is open

      const currentScrollY = window.scrollY;

      // Show header only if scrolled to the top/hero section (scrollY < 80px)
      if (currentScrollY < 80) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    };

    // Run once on mount to set initial state correctly
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-border shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"
      }`}>
      <nav className="mx-auto max-w-[90rem] px-4 sm:px-6 xl:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/logo.png"
              alt={t("OXYZ Health International", "OXYZ للصحة الدولية")}
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex xl:items-center">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative whitespace-nowrap px-2.5 py-2 text-[13px] 2xl:px-3.5 2xl:text-sm font-semibold text-[#007A59] transition-colors duration-200 hover:text-gold"
              >
                <span className="relative z-10">{isArabic ? item.nameAr : item.name}</span>
                <span className="pointer-events-none absolute left-1/2 -bottom-1 h-[2px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden xl:flex xl:shrink-0 xl:items-center xl:gap-3">
            <LanguageToggle />
            {!onRegisterPage && (
              <Link href={registerHref}>
                <Button className="whitespace-nowrap bg-gold hover:bg-gold-dark text-white font-semibold px-5 2xl:px-6 shadow-md shadow-gold/20 hover:shadow-lg hover:shadow-gold/30 transition-shadow">
                  {t("Register Now", "سجّل الآن")}
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile: language toggle + menu button */}
          <div className="flex items-center gap-2 xl:hidden">
            <LanguageToggle />
            <button
              type="button"
              className="p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">{t("Open menu", "فتح القائمة")}</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-base font-medium text-[#007A59] hover:text-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isArabic ? item.nameAr : item.name}
                </Link>
              ))}
              {!onRegisterPage && (
                <Link href={registerHref} onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full bg-gold hover:bg-gold-dark text-white font-semibold shadow-md shadow-gold/20">
                    {t("Register Now", "سجّل الآن")}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
