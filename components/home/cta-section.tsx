"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/i18n";

export function CTASection() {
  const { t, isAr } = useLang();
  return (
    <section className="relative py-16 sm:py-24 text-secondary-foreground overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg-2.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/35" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
            {t("Begin the Conversation", "لنبدأ الحوار")}
          </h2>
          <p className="text-lg text-secondary-foreground/85 mb-8 leading-relaxed">
            {t(
              "OXYZ engages selectively with professionals who value medical integrity, structured systems, and long-term impact. If this reflects your intent, we welcome your application.",
              "تتعاون OXYZ بانتقائية مع المهنيين الذين يقدّرون النزاهة الطبية والأنظمة المنظّمة والأثر طويل الأمد. إن كان هذا يعكس تطلّعاتك، فنحن نرحّب بطلبك."
            )}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8"
              >
                {t("Apply to Engage With OXYZ", "قدّم طلب التعاون مع OXYZ")}
                <ArrowRight className="ms-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href={isAr ? "/ar/register" : "/register"}>
              <Button
                size="lg"
                variant="outline"
                className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold px-8 bg-transparent"
              >
                {t("Register Now", "سجّل الآن")}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
