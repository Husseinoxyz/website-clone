"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLang } from "@/lib/i18n";

const footerLinks = {
  training: [
    { name: "Overview", nameAr: "نظرة عامة", href: "/training" },
    { name: "Program Details", nameAr: "تفاصيل البرنامج", href: "/program" },
    { name: "Registration", nameAr: "التسجيل", href: "/register", hrefAr: "/ar/register" },
    { name: "Past Trainings", nameAr: "الدورات السابقة", href: "/past-trainings" },
  ],
  company: [
    { name: "About OXYZ", nameAr: "عن OXYZ", href: "/about" },
    { name: "The 5D Model", nameAr: "نموذج 5D", href: "/5d-model" },
    { name: "Business Enquiries", nameAr: "الشراكات والأعمال", href: "/business-enquiries" },
    { name: "Gallery", nameAr: "معرض الصور", href: "/gallery" },
    { name: "Contact", nameAr: "تواصل معنا", href: "/contact" },
  ],
};

type FooterLink = { name: string; nameAr: string; href: string; hrefAr?: string };

export function Footer() {
  const { isAr, t } = useLang();
  const linkHref = (link: FooterLink) => (isAr && link.hrefAr ? link.hrefAr : link.href);

  return (
    <footer className="bg-teal-dark text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt={t("OXYZ Health International", "OXYZ للصحة الدولية")}
                width={180}
                height={45}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
              {t(
                "OXYZ Health International is a globally positioned regenerative medical ecosystem, integrating medical science, structured clinical systems, and scalable business models.",
                "OXYZ للصحة الدولية منظومة طبية تجديدية ذات حضور عالمي، تجمع بين العلوم الطبية والأنظمة السريرية المنظّمة ونماذج الأعمال القابلة للتوسّع."
              )}
            </p>
          </div>

          {/* Training Links */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              {t("Global Regenerative Medicine Summit 2026", "القمة العالمية للطب التجديدي 2026")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.training.map((link: FooterLink) => (
                <li key={link.name}>
                  <Link
                    href={linkHref(link)}
                    className="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"
                  >
                    {isAr ? link.nameAr : link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              {t("Company", "الشركة")}
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link: FooterLink) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"
                  >
                    {isAr ? link.nameAr : link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              {t("Contact", "تواصل معنا")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:global@oxyzhealth.com"
                  className="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"
                >
                  global@oxyzhealth.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+6586163762"
                  className="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"
                  dir="ltr"
                >
                  +65 8616 3762
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground/80">
                  {t("USA | Singapore | Malaysia", "الولايات المتحدة | سنغافورة | ماليزيا")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <p className="text-center text-sm text-secondary-foreground/70 leading-relaxed">
            {t(
              "Regenerative medicine carries responsibility. OXYZ collaborates with those who respect its science, structure, and impact.",
              "الطب التجديدي مسؤولية. تتعاون OXYZ مع من يحترمون علمه وأسسه وأثره."
            )}
          </p>
          <p className="text-center text-xs text-secondary-foreground/50 mt-4">
            &copy; {new Date().getFullYear()}{" "}
            {t("OXYZ Health International. All rights reserved.", "OXYZ للصحة الدولية. جميع الحقوق محفوظة.")}
          </p>
        </div>
      </div>
    </footer>
  );
}
