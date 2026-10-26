"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WA_SUMMIT_AR, WA_SUMMIT_EN } from "@/lib/whatsapp";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { useLang } from "@/lib/i18n";

const TARGET_DATE = new Date("2026-11-20T00:00:00Z");

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const getCountdown = (): Countdown => {
  const now = new Date();
  const diff = Math.max(TARGET_DATE.getTime() - now.getTime(), 0);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};

export function CountdownSection() {
  const { t, isAr } = useLang();
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState<Countdown>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  useEffect(() => {
    setMounted(true);
    setCountdown(getCountdown());

    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <section className="pt-0 pb-16 bg-background">
        <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/count_down.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div>
            <div className="py-14 sm:py-16 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                {t("Training Date", "موعد التدريب")}
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                {t("20-24 November 2026", "20-24 نوفمبر 2026")}
              </h2>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              {[
                { label: t("Days", "يوم"), value: countdown.days },
                { label: t("Hours", "ساعة"), value: countdown.hours },
                { label: t("Minutes", "دقيقة"), value: countdown.minutes },
                { label: t("Seconds", "ثانية"), value: countdown.seconds },
              ].map((unit) => (
                <div
                   key={unit.label}
                  className="group rounded-xl bg-black/60 border border-white/10 px-3 py-3.5 text-center shadow-lg hover:border-gold/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-gold tracking-tight">
                    {mounted ? unit.value : "00"}
                  </p>
                  <p className="text-[9px] sm:text-xs uppercase tracking-wider text-white/70 mt-1 font-semibold">
                    {unit.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
              <div className="group flex items-center gap-3 rounded-xl bg-black/60 border border-white/10 px-4 py-3.5 hover:border-gold/20 transition-all duration-300">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <Calendar className="h-4.5 w-4.5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-0.5">{t("Dates", "التاريخ")}</p>
                  <p className="font-bold text-sm sm:text-base text-white">{t("20-24 Nov 2026", "20-24 نوفمبر 2026")}</p>
                </div>
              </div>
              <div className="group flex items-center gap-3 rounded-xl bg-black/60 border border-white/10 px-4 py-3.5 hover:border-gold/20 transition-all duration-300">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <MapPin className="h-4.5 w-4.5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-0.5">{t("Location", "المكان")}</p>
                  <p className="font-bold text-sm sm:text-base text-white">{t("Malaysia", "ماليزيا")}</p>
                  <p className="text-xs text-white/70">{t("Kuala Lumpur", "كوالالمبور")}</p>
                </div>
              </div>
              <div className="group flex items-center gap-3 rounded-xl bg-black/60 border border-white/10 px-4 py-3.5 hover:border-gold/20 transition-all duration-300">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <Users className="h-4.5 w-4.5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-0.5">{t("Capacity", "عدد المقاعد")}</p>
                  <p className="font-bold text-sm sm:text-base text-white">{t("80 to 100 Participants", "من 80 إلى 100 مشارك")}</p>
                  <p className="text-xs text-white/70">{t("Limited to ensure quality", "عدد محدود لضمان الجودة")}</p>
                </div>
              </div>
            </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href={isAr ? "/ar/register" : "/register"}>
                  <Button className="bg-[#007A59] hover:bg-[#006046] text-white font-bold px-8 py-6 rounded-xl shadow-lg transition-all hover:scale-105">
                    {t("Register Now", "سجّل الآن")}
                    <ArrowRight className="ms-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)} target="_blank" rel="noreferrer">
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-white font-bold px-8 py-6 rounded-xl bg-transparent transition-all hover:scale-105"
                  >
                    {t("Request More Details", "اطلب مزيداً من التفاصيل")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
