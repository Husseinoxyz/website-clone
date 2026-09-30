"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InstagramReelsSection } from "@/components/home/instagram-reels-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { CountdownSection } from "@/components/training/countdown-section";
import { GalleryGrid } from "@/components/training/gallery-grid";
import {
  ArrowRight,
  Calendar,
  MapPin,
  Users,
  CheckCircle2,
  Stethoscope,
  GraduationCap,
  Building2,
  Network,
} from "lucide-react";
import { useEffect } from "react";
import { WA_SUMMIT_AR, WA_SUMMIT_EN } from "@/lib/whatsapp";
import { useLang } from "@/lib/i18n";

// Custom hook for scroll animations
function useScrollAnimation() {
  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animated');
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      );

      elements.forEach((el) => observer.observe(el));
      observers.push(observer);
    };

    animateOnScroll();

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);
}

const whoIsFor = [
  { icon: Stethoscope, text: "Medical doctors & specialists", textAr: "الأطباء والأخصائيون" },
  {
    icon: GraduationCap,
    text: "Regenerative, integrative & anti-aging practitioners",
    textAr: "ممارسو الطب التجديدي والتكاملي وطب مكافحة الشيخوخة",
  },
  { icon: Building2, text: "Clinic owners & healthcare investors", textAr: "أصحاب العيادات والمستثمرون في الرعاية الصحية" },
  { icon: Network, text: "Medical distributors & ecosystem builders", textAr: "موزّعو المنتجات الطبية وبُناة المنظومات الصحية" },
];

const scientificFocus = [
  "Cellular health and biological aging concepts",
  "Regenerative and cell-based therapy principles",
  "Preventive and longevity-focused medical frameworks",
  "Integration of regenerative medicine into real clinical practice",
  "Patient selection, safety, and long-term outcome thinking",
  "Medical responsibility in emerging regenerative fields",
];

const scientificFocusAr = [
  "صحة الخلايا ومفاهيم الشيخوخة البيولوجية",
  "مبادئ العلاجات التجديدية والعلاجات القائمة على الخلايا",
  "أطر طبية وقائية تركّز على إطالة العمر الصحي",
  "دمج الطب التجديدي في الممارسة السريرية الفعلية",
  "اختيار المرضى وسلامتهم والتفكير في النتائج طويلة الأمد",
  "المسؤولية الطبية في مجالات الطب التجديدي الناشئة",
];

const pathways = [
  {
    title: "Clients Collaboration",
    titleAr: "التعاون في إحالة المرضى",
    descriptionAr: "إحالة منظّمة وأخلاقية للمرضى إلى بيئات رعاية تجديدية متقدّمة.",
    description:
      "Structured, ethical referral of clients into advanced regenerative care.",
  },
  {
    title: "Clinical Product Integration",
    titleAr: "دمج المنتجات السريرية",
    descriptionAr: "منتجات تجديدية وعلاجية مدعومة علمياً ضمن الرعاية السريرية المستمرة.",
    description:
      "Science-backed regenerative and wellness products for ongoing clinical care.",
  },
  {
    title: "Territory-Based Distribution",
    titleAr: "التوزيع الإقليمي",
    descriptionAr: "تطوير مسؤول للعلامات الطبية على المستوى الإقليمي للموزّعين المؤهَّلين.",
    description:
      "Responsible regional development of medical brands for qualified distributors.",
  },
  {
    title: "Licensed OXYZ Regenerative Centers",
    titleAr: "مراكز OXYZ التجديدية المرخّصة",
    descriptionAr: "طوّر ممارستك باعتماد نموذج OXYZ الطبي البيولوجي التجديدي 5D.",
    description:
      "Transform your practice with the OXYZ 5D Biological Regenerative Medical Model.",
  },
];

export default function TrainingPage() {
  const { t, isAr } = useLang();
  useScrollAnimation();

  return (
    <>
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-left {
          transform: translateX(-50px);
        }

        .slide-in-left.animated {
          transform: translateX(0);
        }

        .slide-in-right {
          transform: translateX(50px);
        }

        .slide-in-right.animated {
          transform: translateX(0);
        }

        .scale-in {
          transform: scale(0.9);
        }

        .scale-in.animated {
          transform: scale(1);
        }

        .stagger-1 {
          transition-delay: 0.1s;
        }

        .stagger-2 {
          transition-delay: 0.2s;
        }

        .stagger-3 {
          transition-delay: 0.3s;
        }

        .stagger-4 {
          transition-delay: 0.4s;
        }

        @keyframes float-up-1 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }

        @keyframes float-up-2 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(-5deg); }
        }

        @keyframes float-up-3 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(3deg); }
        }

        @keyframes float-up-4 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-22px) rotate(-4deg); }
        }

        @keyframes float-up-5 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-18px) rotate(4deg); }
        }

        @keyframes float-up-6 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-24px) rotate(-3deg); }
        }

        @keyframes float-up-7 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-16px) rotate(2deg); }
        }

        @keyframes float-up-8 {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(-2deg); }
        }

        .float-1 { animation: float-up-1 4s ease-in-out infinite; }
        .float-2 { animation: float-up-2 4.5s ease-in-out infinite 0.2s; }
        .float-3 { animation: float-up-3 4s ease-in-out infinite 0.4s; }
        .float-4 { animation: float-up-4 4.5s ease-in-out infinite 0.1s; }
        .float-5 { animation: float-up-5 4s ease-in-out infinite 0.3s; }
        .float-6 { animation: float-up-6 4.5s ease-in-out infinite 0.2s; }
        .float-7 { animation: float-up-7 4s ease-in-out infinite 0.15s; }
        .float-8 { animation: float-up-8 4.5s ease-in-out infinite 0.25s; }
      `}</style>
      <Header />
      <main>
        {/* Hero Section - Matching Home Style */}
        <section className="relative w-full min-h-[90vh] sm:min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/register_hero.jpg"
              alt={t("Global Regenerative Medicine Summit 2026", "القمة العالمية للطب التجديدي 2026")}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-black/70" />
          </div>

          {/* Content Container - Vertically & Horizontally Centered */}
          <div className="relative z-10 flex items-center justify-center text-center min-h-[90vh] sm:min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pt-28 sm:pt-36 pb-14 sm:pb-20">
            <div className="max-w-3xl w-full mx-auto">
              
              {/* Main Title */}
              <div className="mb-6 sm:mb-8 text-center animate-fade-in-up opacity-0 animation-delay-200">
                <h1 className="font-bold leading-[1.15] text-[#CDB06A] text-center">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center">
                    {t("Global Regenerative Medicine Summit 2026", "القمة العالمية للطب التجديدي 2026")}
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide text-center">
                    {t("Regenerative Medicine & Strategic Collaboration", "الطب التجديدي والتعاون الاستراتيجي")}
                  </span>
                </h1>
              </div>

              {/* Description - reduced and clean */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-2xl mx-auto text-center animate-fade-in-up opacity-0 animation-delay-400 font-light">
                {t(
                  "A premier invitation-only medical platform for doctors, clinic owners, and healthcare leaders seeking clinical excellence in regenerative medicine.",
                  "منصة طبية رائدة بدعوة خاصة، للأطباء وأصحاب العيادات وقادة الرعاية الصحية الساعين إلى التميّز السريري في الطب التجديدي."
                )}
              </p>

              {/* CTA Buttons - Centered */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5 animate-fade-in-up opacity-0 animation-delay-600">
                <Link href={isAr ? "/ar/register" : "/register"} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-2xl shadow-[#CDB06A]/40 transition-all hover:shadow-[#CDB06A]/60 hover:scale-105"
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
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg bg-transparent transition-all hover:scale-105"
                  >
                    {t("Request Scientific Program", "اطلب البرنامج العلمي")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <CountdownSection />

        {/* Medical Imperative */}
        <section className="py-14 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                  {t("The Medical Imperative", "الضرورة الطبية")}
                </h2>
                <p className="text-gold text-lg sm:text-2xl mb-6 leading-relaxed">
                  {t(
                    "Regenerative medicine is redefining modern healthcare by moving beyond symptom management and focusing on cellular repair, tissue function, and better long-term patient outcomes.",
                    "يُعيد الطب التجديدي تعريف الرعاية الصحية الحديثة، إذ يتجاوز معالجة الأعراض ليركّز على إصلاح الخلايا ووظائف الأنسجة وتحسين نتائج المرضى على المدى الطويل."
                  )}
                </p>
                <p className="text-gold text-lg sm:text-2xl mb-8 leading-relaxed">
                  {t(
                    "To achieve this responsibly, regenerative medicine requires medical discipline, ethical practice, structured clinical protocols, and careful implementation.",
                    "ولتحقيق ذلك بمسؤولية، يتطلّب الطب التجديدي انضباطاً طبياً وممارسة أخلاقية وبروتوكولات سريرية منظّمة وتطبيقاً مدروساً."
                  )}
                </p>
                <div className="bg-white rounded-lg p-5 sm:p-6 border-s-4 border-gold shadow-sm">
                  <p className="text-[#007A59] text-base sm:text-xl font-medium italic">
                    {t(
                      "This training exists to address how regenerative medicine should be practiced, integrated, and expanded, not as a trend, but as a sustainable medical framework.",
                      "صُمّم هذا التدريب ليوضّح كيف يُمارَس الطب التجديدي ويُدمَج ويُوسَّع، لا بوصفه موضة عابرة، بل إطاراً طبياً مستداماً."
                    )}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={isAr ? "/ar/register" : "/register"}>
                    <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                      {t("Register Now", "سجّل الآن")}
                      <ArrowRight className="ms-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold"
                    >
                      {t("Request More Details", "اطلب مزيداً من التفاصيل")}
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative aspect-square animate-on-scroll slide-in-right scale-in">
                <Image
                  src="/images/about/Our_Philosophy.jpg"
                  alt={t("Medical imperative", "الضرورة الطبية")}
                  width={600}
                  height={520}
                  className="rounded-2xl shadow-2xl h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>


        {/* Who Is This For */}
        <section className="py-14 sm:py-24 bg-background relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/about/Global_Presence.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 text-balance">
                {t("Who This Training Is For", "لمن هذا التدريب؟")}
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                {t(
                  "This training is curated for professionals who meet both medical and strategic readiness.",
                  "صُمّم هذا التدريب للمهنيين المستعدين طبياً واستراتيجياً."
                )}
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 mb-10 sm:mb-16">
              {whoIsFor.map((item, idx) => (
                <div
                  key={item.text}
                  className={`animate-on-scroll stagger-${idx + 1} scale-in bg-white rounded-xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8 text-gold" />
                  </div>
                  <p className="text-sm sm:text-base font-medium text-teal">{isAr ? item.textAr : item.text}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-3 animate-on-scroll">
              <Link href={isAr ? "/ar/register" : "/register"}>
                <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                  {t("Register Now", "سجّل الآن")}
                  <ArrowRight className="ms-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold bg-transparent"
                >
                  {t("Request More Details", "اطلب مزيداً من التفاصيل")}
                </Button>
              </Link>
            </div>
          </div>
        </section>


        {/* Scientific Focus */}
        <section className="py-14 sm:py-24 bg-white text-slate-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6">
                  {t("Scientific & Medical Focus", "المحاور العلمية والطبية")}
                </h2>
                <p className="text-[#B8964A] text-lg sm:text-2xl mb-8 leading-relaxed font-medium">
                  {t(
                    "The emphasis is on medical depth, clarity, and governance, not promotional medicine.",
                    "ينصبّ التركيز على العمق الطبي والوضوح والحوكمة، لا على الطب الترويجي."
                  )}
                </p>
                <ul className="space-y-4">
                  {(isAr ? scientificFocusAr : scientificFocus).map((item, idx) => (
                    <li key={item} className={`animate-on-scroll stagger-${(idx % 4) + 1} flex items-start gap-3`}>
                      <CheckCircle2 className="h-6 w-6 text-[#CDB06A] flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600 text-base sm:text-lg">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll slide-in-right">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6">
                  {t("Training Format", "صيغة التدريب")}
                </h2>
                <div className="space-y-4">
                  <div className="bg-[#007A59]/5 rounded-xl p-6 border border-[#007A59]/15 border-s-4 border-s-[#CDB06A]">
                    <h3 className="text-xl font-semibold text-[#007A59] mb-2">
                      {t("Physical Training", "التدريب الحضوري")}
                    </h3>
                    <ul className="space-y-2 text-slate-600 text-lg">
                      <li>{t("Medical & Scientific Sessions", "جلسات طبية وعلمية")}</li>
                      <li>{t("Clinical Case Discussions", "مناقشة حالات سريرية")}</li>
                      <li>{t("Live Treatment Observation*", "مشاهدة علاجات مباشرة*")}</li>
                      <li>{t("Strategic Networking", "تواصل استراتيجي")}</li>
                    </ul>
                    <p className="text-xs text-slate-500 mt-3">
                      {t("*Subject to ethical standards and regulatory compliance", "*وفقاً للمعايير الأخلاقية والمتطلبات التنظيمية")}
                    </p>
                  </div>
                  <div className="bg-[#007A59]/5 rounded-xl p-6 border border-[#007A59]/15 border-s-4 border-s-[#CDB06A]">
                    <h3 className="text-xl font-semibold text-[#007A59] mb-2">
                      {t("Participants Will Gain", "ما سيحصل عليه المشاركون")}
                    </h3>
                    <ul className="space-y-2 text-slate-600 text-lg">
                      <li>{t("Direct engagement with OXYZ leadership", "تواصل مباشر مع قيادة OXYZ")}</li>
                      <li>{t("Interaction with international professionals", "تفاعل مع مهنيين من مختلف الدول")}</li>
                      <li>{t("Exposure to structured frameworks", "الاطلاع على أطر عمل منظّمة")}</li>
                      <li>{t("Priority for alignment discussions", "أولوية في نقاشات الشراكة")}</li>
                    </ul>
                  </div>
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href={isAr ? "/ar/register" : "/register"}>
                    <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                      {t("Register Now", "سجّل الآن")}
                      <ArrowRight className="ms-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button
                      variant="outline"
                      className="border-[#007A59] text-[#007A59] hover:bg-[#007A59] hover:text-white font-semibold bg-transparent"
                    >
                      {t("Request More Details", "اطلب مزيداً من التفاصيل")}
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Strategic Pathways */}
        <section className="py-14 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-6 text-balance">
                {t("Strategic Pathways Exploration", "استكشاف المسارات الاستراتيجية")}
              </h2>
              <p className="text-gold text-lg sm:text-2xl leading-relaxed">
                {t("How medical expertise can grow into structured collaboration.", "كيف تتحوّل الخبرة الطبية إلى تعاون منظّم.")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {pathways.map((pathway, idx) => (
                <div
                  key={pathway.title}
                  className={`animate-on-scroll stagger-${(idx % 4) + 1} scale-in bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 sm:p-8 border-2 border-slate-100 hover:border-gold/50 transition-all duration-300 hover:shadow-lg`}
                >
                  <h3 className="text-xl font-bold text-teal mb-3">
                    {isAr ? pathway.titleAr : pathway.title}
                  </h3>
                  <p className="text-gold text-base sm:text-lg">{isAr ? pathway.descriptionAr : pathway.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-3 animate-on-scroll">
              <Link href={isAr ? "/ar/register" : "/register"}>
                <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                  {t("Register Now", "سجّل الآن")}
                  <ArrowRight className="ms-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold"
                >
                  {t("Request More Details", "اطلب مزيداً من التفاصيل")}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Training 2025 Overview */}
        <section className="py-14 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 animate-on-scroll">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-3">
                    {t("2025 Training Overview", "نظرة على تدريب 2025")}
                  </h2>
                  <p className="text-gold text-lg sm:text-2xl max-w-2xl">
                    {t("Clinical sessions and international collaboration from our 2025 forum.", "جلسات سريرية وتعاون دولي من ملتقى 2025.")}
                  </p>
                </div>
                <Link href="/past-trainings">
                  <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
                    {t("View Full Gallery", "عرض المعرض كاملاً")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="animate-on-scroll">
              <GalleryGrid
                alt={t("Training 2025 gallery", "صور تدريب 2025")}
                images={[
                  "/images/sym/home_g_1.jpg",
                  "/images/sym/home_g_2.jpg",
                  "/images/sym/home_g_3.jpg",
                  "/images/sym/home_g_4.jpg",
                  "/images/sym/home_g_5.jpg",
                  "/images/sym/home_g_6.jpg",
                  "/images/sym/home_g_7.jpg",
                  "/images/sym/home_g_8.jpg",
                  "/images/sym/home_g_9.jpg",
                ]}
              />
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-3 animate-on-scroll">
              <Link href={isAr ? "/ar/register" : "/register"}>
                <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                  {t("Register Now", "سجّل الآن")}
                  <ArrowRight className="ms-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold"
                >
                  {t("Request More Details", "اطلب مزيداً من التفاصيل")}
                </Button>
              </Link>
            </div>
          </div>
        </section>


        {/* Training 2023 Overview */}
        <section className="py-14 sm:py-24 bg-white">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 animate-on-scroll">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-teal mb-3">
                    {t("2023 Training Overview", "نظرة على تدريب 2023")}
                  </h2>
                  <p className="text-gold text-lg sm:text-2xl max-w-2xl">
                    {t("Highlights from our 2023 training on clinical frameworks.", "أبرز محطات تدريب 2023 حول الأطر السريرية.")}
                  </p>
                </div>
                <Link href="/past-trainings">
                  <Button variant="outline" className="border-teal text-teal hover:bg-teal hover:text-white">
                    {t("View Full Gallery", "عرض المعرض كاملاً")}
                  </Button>
                </Link>
              </div>
            </div>

            <div className="animate-on-scroll">
              <GalleryGrid
                alt={t("Training 2023 gallery", "صور تدريب 2023")}
                images={[
                  "/images/sym/012.png",
                  "/images/sym/02.jpg",
                  "/images/sym/03.jpg",
                  "/images/sym/04.jpg",
                  "/images/sym/05.jpg",
                  "/images/sym/06.jpg",
                ]}
              />
            </div>
            
            <div className="mt-10 flex flex-wrap justify-center gap-3 animate-on-scroll">
              <Link href={isAr ? "/ar/register" : "/register"}>
                <Button className="bg-gold hover:bg-gold-dark text-white font-semibold">
                  {t("Register Now", "سجّل الآن")}
                  <ArrowRight className="ms-2 h-4 w-4" />
                </Button>
              </Link>
              <Link
                href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold"
                >
                  {t("Request More Details", "اطلب مزيداً من التفاصيل")}
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <InstagramReelsSection />


        {/* CTA */}
        <section className="py-14 sm:py-24 text-secondary-foreground relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/50 to-black/40" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl p-2 sm:p-12 text-center animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-balance">
                {t("Ready to Join Summit 2026?", "هل أنت مستعد للانضمام إلى قمة 2026؟")}
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
                {t("Seats are limited. Apply now to secure your place.", "المقاعد محدودة. قدّم طلبك الآن لتضمن مكانك.")}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href={isAr ? "/ar/register" : "/register"}>
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-white font-semibold px-8"
                  >
                    {t("Register Now", "سجّل الآن")}
                    <ArrowRight className="ms-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-semibold px-8 bg-transparent"
                  >
                    {t("Request More Details", "اطلب مزيداً من التفاصيل")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
