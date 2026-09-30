"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InstagramReelsSection } from "@/components/home/instagram-reels-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { WA_SUMMIT_AR, WA_SUMMIT_EN } from "@/lib/whatsapp";
import {
  ArrowRight,
  Calendar,
  Clock,
  Info,
  Check,
  X,
} from "lucide-react";
import { useLang } from "@/lib/i18n";

const packageFeatures = [
  "4 nights hotel stay (single occupancy, breakfast included)",
  "Full access to all 3-day training sessions",
  "All official meals and Gala Dinner",
  "Joint Certificate: OXYZ Academy & DFGTT (Germany)",

  "Internationally Accredited Certification (Stem Cell, Biological Medicine & Peptide)",
  "6 Months of Business Development & Clinic Growth Support",
  "6 Months of Post-Event Clinical Mentoring & Case Support",
  "AI in Regenerative Medicine integration training",
  "and more...",
];

const packageFeaturesAr = [
  "إقامة 4 ليالٍ في الفندق (غرفة فردية مع الإفطار)",
  "دخول كامل إلى جميع جلسات التدريب على مدى 3 أيام",
  "جميع الوجبات الرسمية وحفل العشاء الختامي",
  "شهادة مشتركة: أكاديمية OXYZ وDFGTT (ألمانيا)",
  "شهادة معتمدة دولياً (الخلايا الجذعية والطب البيولوجي والببتيدات)",
  "6 أشهر من دعم تطوير الأعمال ونمو العيادة",
  "6 أشهر من الإرشاد السريري ومتابعة الحالات بعد الفعالية",
  "تدريب على دمج الذكاء الاصطناعي في الطب التجديدي",
  "والمزيد...",
];

const singlePackage = {
  id: "silver-tier-standard",
  badge: "Executive Delegate",
  title: "Executive Delegate Package: Global Regenerative Medicine Summit",
  price: "$3,000",
  priceNote: "per person",
  deadline: null,
  features: packageFeatures,
  registerType: "silver-tier-standard",
};

const importantInfo = [
  "Curated attendance: all registrations are subject to review and confirmation",
  "Selection criteria prioritize medical relevance and clinical alignment",
  "Registration deadline is strictly enforced based on seating and hotel availability",
];

const importantInfoAr = [
  "حضور منتقى: تخضع جميع طلبات التسجيل للمراجعة والتأكيد",
  "تُعطى الأولوية للملاءمة الطبية والتوافق السريري",
  "يُطبَّق الموعد النهائي للتسجيل بصرامة وفقاً لتوفّر المقاعد والغرف الفندقية",
];

export default function ProgramPage() {
  const { t, isAr } = useLang();
  return (
    <>
      <Header />
      <main className="bg-slate-50/50">
        
        {/* Hero - Matching Premium Website Aesthetics */}
        <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/program_hero.jpg"
              alt={t("Training program overview", "نظرة عامة على البرنامج التدريبي")}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Overlay for premium contrast and depth */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/65 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-32 sm:pb-24">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#007A59] text-white font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 shadow-md border border-[#007A59]/30">
                {t("EXECUTIVE DELEGATE PACKAGE", "باقة المندوب التنفيذي")}
              </div>
              
              {/* Main Title */}
              <h1 className="font-extrabold leading-[1.1] text-[#CDB06A] text-4xl sm:text-5xl md:text-6xl tracking-tight">
                {t("Program Overview", "نظرة عامة على البرنامج")}
                <span className="block text-lg sm:text-2xl md:text-3xl font-light mt-4 text-white/95 tracking-wide">
                  {t("Executive Delegate Registration Package", "باقة تسجيل المندوب التنفيذي")}
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mt-5 mb-8 sm:mt-6 sm:mb-10 font-light max-w-xl">
                {t(
                  "Comprehensive details for the Global Regenerative Medicine Summit 2026 Executive Delegate Tier.",
                  "كل تفاصيل باقة المندوب التنفيذي في القمة العالمية للطب التجديدي 2026."
                )}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href={isAr ? "/ar/register" : "/register"} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 py-6 rounded-xl shadow-lg transition-all hover:scale-105"
                  >
                    {t("Register Now", "سجّل الآن")}
                    <ArrowRight className="ms-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold px-8 py-6 rounded-xl bg-transparent transition-all hover:scale-105"
                  >
                    {t("Request Scientific Program", "اطلب البرنامج العلمي")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Event Details */}
        <section className="py-10 sm:py-16 bg-white border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
              {/* Card 1 */}
              <div className="bg-slate-50/60 border border-slate-100 rounded-3xl p-6 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#007A59]/10 rounded-2xl">
                    <Calendar className="h-6 w-6 text-[#007A59]" />
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-800">
                    {t("Training Dates", "مواعيد التدريب")}
                  </h2>
                </div>
                <p className="text-2xl font-extrabold text-[#007A59] mb-3">
                  {t("20-24 November 2026", "20-24 نوفمبر 2026")}
                </p>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {t(
                    "4 nights premium accommodation included for Executive Delegate Package participants.",
                    "تشمل باقة المندوب التنفيذي إقامة فاخرة لمدة 4 ليالٍ."
                  )}
                </p>
              </div>

              {/* Card 2 */}
              <div className="bg-slate-50/60 border border-slate-100 rounded-3xl p-6 sm:p-8 relative overflow-hidden group shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-[#CDB06A]/10 rounded-2xl">
                    <Clock className="h-6 w-6 text-[#CDB06A]" />
                  </div>
                  <h2 className="text-lg sm:text-2xl font-bold text-slate-800">
                    {t("Participant Capacity", "عدد المشاركين")}
                  </h2>
                </div>
                <p className="text-2xl font-extrabold text-[#CDB06A] mb-3">
                  {t("80 to 100 Selected Professionals", "من 80 إلى 100 مهني مختار")}
                </p>
                <ul className="space-y-2 text-slate-600 text-sm sm:text-base leading-relaxed">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CDB06A] rounded-full" />
                    {t("High-quality scientific exchange", "تبادل علمي عالي الجودة")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CDB06A] rounded-full" />
                    {t("Meaningful professional networking", "تواصل مهني هادف")}
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#CDB06A] rounded-full" />
                    {t("Direct engagement with faculty and OXYZ leadership", "تواصل مباشر مع المحاضرين وقيادة OXYZ")}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Package Section */}
        <section className="py-14 sm:py-24 bg-slate-50 border-b border-slate-100 text-slate-800 relative overflow-hidden">
          {/* Subtle background glow effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#007A59]/5 blur-[130px] rounded-full pointer-events-none" />

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-4 tracking-tight">
                {t("Registration Package", "باقة التسجيل")}
              </h2>
              <p className="text-slate-500 text-base sm:text-lg leading-relaxed">
                {t("Review inclusions and secure your place at the upcoming training program.", "اطّلع على محتويات الباقة واحجز مكانك في البرنامج التدريبي القادم.")}
              </p>
            </div>

            {/* Single Centered Executive Delegate Package Card */}
            <div className="max-w-2xl mx-auto">
              <div className="relative flex flex-col rounded-[24px] border-2 border-[#007A59] bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-300/40">
                
                {/* Floating Price Badge */}
                <div className="absolute -top-10 right-6 sm:right-10 z-20">
                  <div className="h-24 w-28 rounded-2xl bg-gradient-to-br from-[#007A59] to-[#006046] shadow-lg flex items-center justify-center border-2 border-[#007A59]">
                    <div className="text-center leading-tight">
                      <div className="text-2xl font-black text-white">{t(singlePackage.price, "3,000 $")}</div>
                      <div className="text-[9px] font-bold uppercase tracking-widest text-[#CDB06A] mt-0.5">
                        {t(singlePackage.priceNote, "للشخص")}
                      </div>
                    </div>
                  </div>
                </div>

                {/* VIP Badge */}
                <div className="absolute -top-4 left-6 sm:left-10 z-10">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#007A59] px-5 py-1.5 text-xs font-black tracking-widest text-white shadow-md border border-[#007A59]/30">
                    {t(singlePackage.badge, "المندوب التنفيذي")}
                  </span>
                </div>

                {/* Card Content */}
                <div className="flex-1 flex flex-col pt-6">
                  <div className="border-b border-slate-100 pb-5 mb-6">
                    <h3 className="text-lg sm:text-2xl font-extrabold text-[#007A59]">
                      {t(singlePackage.title, "باقة المندوب التنفيذي: القمة العالمية للطب التجديدي")}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1.5">
                      {singlePackage.deadline}
                    </p>
                  </div>

                  <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">{t("What’s Included:", "ما تشمله الباقة:")}</h4>
                  <ul className="space-y-4 mb-8 flex-1">
                    {(isAr ? packageFeaturesAr : singlePackage.features).map((feature, i, list) => {
                      const isLast = i === list.length - 1;
                      return (
                        <li key={i} className="flex items-start gap-3">
                          {!isLast ? (
                            <Check className="h-5 w-5 text-[#CDB06A] flex-shrink-0 mt-0.5" />
                          ) : (
                            <span className="text-gold font-bold text-lg leading-none select-none flex-shrink-0 mt-0.5 me-1">+</span>
                          )}
                          <span className={`text-sm sm:text-base leading-relaxed ${isLast ? "text-[#007A59] font-bold italic" : "text-slate-600"}`}>
                            {feature}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <Link href={isAr ? "/ar/register" : `/register?type=${singlePackage.registerType}`} className="block">
                    <Button
                      className="w-full rounded-xl bg-[#007A59] hover:bg-[#006046] border border-[#007A59] text-white font-extrabold py-6 shadow-md hover:shadow-lg transition-all uppercase tracking-wider text-xs sm:text-sm"
                    >
                      {t("REGISTER NOW", "سجّل الآن")}
                      <ArrowRight className="ms-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Included details */}
        <section className="py-14 sm:py-24 bg-white border-b border-slate-100">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-800 mb-6">
              {t("Program Inclusions", "محتوى البرنامج")}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-8">
              {t(
                "The full curriculum is available on request. Our team will share program details and eligibility guidance for your profile.",
                "المنهج الكامل متاح عند الطلب. سيزوّدك فريقنا بتفاصيل البرنامج ومعايير الأهلية المناسبة لملفك المهني."
              )}
            </p>
            <div className="flex justify-center">
              <Link
                href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="bg-[#007A59] hover:bg-[#006046] text-white text-base font-semibold px-8 py-5 rounded-xl shadow-md transition-all hover:scale-105">
                  {t("Request More Details", "اطلب مزيداً من التفاصيل")}
                  <ArrowRight className="ms-2 h-4.5 w-4.5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Important Information */}
        <section className="py-12 sm:py-20 bg-slate-50/50">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3.5 mb-8">
              <div className="p-2.5 bg-[#007A59]/10 rounded-xl">
                <Info className="h-6 w-6 text-[#007A59]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-800">
                {t("Important Information", "معلومات مهمة")}
              </h2>
            </div>
            
            <ul className="space-y-4">
              {(isAr ? importantInfoAr : importantInfo).map((info, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-4 bg-white border border-slate-100 rounded-2xl p-5 shadow-sm"
                >
                  <div className="w-2.5 h-2.5 rounded-full bg-[#CDB06A] mt-2 flex-shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    {info}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <InstagramReelsSection />

        {/* CTA */}
        <section className="py-16 sm:py-28 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-slate-950/45" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-white z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6">
              {t("Next Steps", "الخطوات التالية")}
            </h2>
            <p className="text-slate-200 text-base sm:text-lg mb-8 max-w-xl mx-auto font-light leading-relaxed">
              {t("Ready to secure your place? Choose your tier and begin your application.", "هل أنت مستعد لحجز مكانك؟ اختر باقتك وابدأ طلبك.")}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href={isAr ? "/ar/register" : "/register?type=silver-tier-standard"} className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 py-5 rounded-xl shadow-lg transition-all hover:scale-105"
                >
                  {t("Register Now", "سجّل الآن")}
                  <ArrowRight className="ms-2 h-5 w-5" />
                </Button>
              </Link>
              <Link
                href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <Button size="lg" variant="ghost" className="w-full px-8 text-white hover:text-[#CDB06A] font-semibold text-base hover:bg-transparent">
                  {t("Request More Details", "اطلب مزيداً من التفاصيل")}
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
