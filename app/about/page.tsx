"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Shield,
  Heart,
  Users,
  Building2,
} from "lucide-react";
import { useEffect } from "react";
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

const philosophy = [
  "Root-cause diagnostics",
  "Cellular repair and regeneration",
  "Long-term functional outcomes",
  "Ethical, standardized delivery",
];

const philosophyAr = [
  "تشخيص الأسباب الجذرية",
  "إصلاح الخلايا وتجديدها",
  "نتائج وظيفية طويلة الأمد",
  "تطبيق أخلاقي وموحّد",
];

const medicalFoundation = [
  "Preventive and longevity medicine",
  "Regenerative and cell-based therapeutic concepts",
  "Chronic and degenerative condition support",
  "Medical aesthetics integrated within regenerative frameworks",
];

const medicalFoundationAr = [
  "الطب الوقائي وطب إطالة العمر الصحي",
  "مفاهيم علاجية تجديدية وقائمة على الخلايا",
  "دعم الحالات المزمنة والتنكّسية",
  "طب تجميلي مدمج ضمن أطر الطب التجديدي",
];

const clinicalPrinciples = [
  { icon: Shield, text: "Patient safety", textAr: "سلامة المريض" },
  { icon: Heart, text: "Ethical application", textAr: "التطبيق الأخلاقي" },
  { icon: Users, text: "Long-term outcome responsibility", textAr: "المسؤولية عن النتائج طويلة الأمد" },
];

const locations = [
  {
    country: "United States",
    countryAr: "الولايات المتحدة",
    description: "Medical IP, formulation science, and innovation origin",
    descriptionAr: "الملكية الفكرية الطبية وعلوم التركيبات ومنشأ الابتكار",
  },
  {
    country: "Singapore",
    countryAr: "سنغافورة",
    description: "International trade, B2B operations, and regional coordination",
    descriptionAr: "التجارة الدولية وعمليات الأعمال بين الشركات والتنسيق الإقليمي",
  },
  {
    country: "Malaysia",
    countryAr: "ماليزيا",
    description:
      "Fully operating regenerative, wellness, and aesthetic flagship centers",
    descriptionAr: "مراكز رئيسية عاملة بالكامل في الطب التجديدي والعافية والتجميل",
  },
];

const differences = [
  "Medical-first philosophy",
  "Structured regenerative frameworks",
  "Standardized clinical and operational systems",
  "International scalability with governance",
  "Leadership-level involvement and accountability",
];

const differencesAr = [
  "فلسفة تضع الطب أولاً",
  "أطر تجديدية منظّمة",
  "أنظمة سريرية وتشغيلية موحّدة",
  "قابلية للتوسّع الدولي ضمن حوكمة واضحة",
  "مشاركة ومساءلة على مستوى القيادة",
];

export default function AboutPage() {
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
      `}</style>
      <Header />
      <main className="bg-white text-slate-800">
        {/* Hero - Matching Home Style */}
        <section className="relative w-full min-h-[75vh] sm:min-h-[85vh] flex items-center justify-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/about-hero.jpg"
              alt={t("About OXYZ Health International", "عن OXYZ للصحة الدولية")}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-900/70 to-transparent" />
          </div>

          {/* Content Container */}
          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-32 sm:pb-24">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#007A59] text-white font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-6 shadow-md border border-[#007A59]/30">
                {t("OXYZ HEALTH INTERNATIONAL", "OXYZ للصحة الدولية")}
              </div>
              
              {/* Main Title */}
              <h1 className="font-extrabold leading-[1.1] text-[#CDB06A] text-4xl sm:text-5xl md:text-6xl tracking-tight">
                {t("About Us", "من نحن")}
                <span className="block text-lg sm:text-2xl md:text-3xl font-light mt-4 text-white/95 tracking-wide">
                  {t("Building Global Medical Ecosystems", "نبني منظومات طبية عالمية")}
                </span>
              </h1>

              {/* Description */}
              <p className="text-slate-300 text-base sm:text-lg md:text-xl leading-relaxed mt-5 mb-8 sm:mt-6 sm:mb-10 font-light max-w-xl">
                {t(
                  "A globally positioned regenerative and medical wellness ecosystem built on scientific integrity, structured systems, and long-term partnership.",
                  "منظومة عالمية للطب التجديدي والعافية الطبية، قائمة على النزاهة العلمية والأنظمة المنظّمة والشراكة طويلة الأمد."
                )}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link href="/5d-model" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 py-6 rounded-xl shadow-lg transition-all hover:scale-105"
                  >
                    {t("Explore 5D Model", "استكشف نموذج 5D")}
                    <ArrowRight className="ms-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/gallery" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold px-8 py-6 rounded-xl bg-transparent transition-all hover:scale-105"
                  >
                    {t("View Gallery", "معرض الصور")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Statement Banner */}
        <section className="py-10 sm:py-16 bg-[#007A59] text-white relative overflow-hidden shadow-inner">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 blur-[120px] rounded-full pointer-events-none" />
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center animate-on-scroll relative z-10">
            <p className="text-lg sm:text-2xl md:text-3xl font-light leading-relaxed">
              {t("We do not operate as a single clinic or product brand.", "لسنا مجرد عيادة أو علامة تجارية لمنتج.")}
              <span className="block mt-2 font-bold text-[#CDB06A]">
                {t("We build medical ecosystems.", "نحن نبني منظومات طبية متكاملة.")}
              </span>
            </p>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-14 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#007A59] mb-6 tracking-tight">
                  {t("The Future of Medicine", "مستقبل الطب")}
                </h2>
                <p className="text-slate-700 text-lg sm:text-xl mb-4 sm:mb-6 leading-relaxed">
                  {t(
                    "At OXYZ, we believe the future of medicine lies in regeneration, prevention, and biological optimization, delivered through disciplined medical practice and structured clinical systems.",
                    "نؤمن في OXYZ بأن مستقبل الطب يكمن في التجديد والوقاية والتحسين البيولوجي، عبر ممارسة طبية منضبطة وأنظمة سريرية منظّمة."
                  )}
                </p>
                <p className="text-slate-600 text-base sm:text-lg mb-5 sm:mb-8 leading-relaxed">
                  {t("Modern healthcare must move beyond symptom control toward:", "على الرعاية الصحية الحديثة أن تتجاوز السيطرة على الأعراض نحو:")}
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {(isAr ? philosophyAr : philosophy).map((item, idx) => (
                    <li key={item} className={`animate-on-scroll stagger-${idx + 1} flex items-center gap-3`}>
                      <CheckCircle2 className="h-5 w-5 text-[#CDB06A] flex-shrink-0" />
                      <span className="text-slate-700 font-medium text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative animate-on-scroll slide-in-right scale-in flex justify-center">
                <div className="relative p-2 bg-white rounded-3xl shadow-2xl border border-slate-100">
                  <Image
                    src="/images/about/Our_Philosophy.jpg"
                    alt={t("OXYZ philosophy", "فلسفة OXYZ")}
                    width={600}
                    height={450}
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Global Structure */}
        <section className="py-14 sm:py-24 bg-white border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#007A59] mb-6 tracking-tight">
                {t("A Globally Structured Organization", "مؤسسة ذات هيكل عالمي")}
              </h2>
              <p className="text-slate-600 text-lg sm:text-xl leading-relaxed">
                {t(
                  "An international footprint built for scientific governance and consistent standards.",
                  "حضور دولي مصمَّم لضمان الحوكمة العلمية واتساق المعايير."
                )}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
              {locations.map((location, idx) => (
                <div
                  key={location.country}
                  className={`animate-on-scroll stagger-${idx + 1} scale-in bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/60 shadow-sm hover:shadow-md hover:border-[#CDB06A]/40 transition-all duration-300`}
                >
                  <div className="w-12 h-12 bg-[#007A59]/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
                    <MapPin className="h-6 w-6 text-[#007A59]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#007A59] mb-3">
                    {isAr ? location.countryAr : location.country}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{isAr ? location.descriptionAr : location.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medical Foundation */}
        <section className="py-14 sm:py-24 bg-slate-50 text-slate-800 border-y border-slate-100">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6">
                  {t("Our Medical Foundation", "أساسنا الطبي")}
                </h2>
                <p className="text-slate-600 text-lg sm:text-xl mb-8 leading-relaxed">
                  {t(
                    "Integrative and regenerative medicine, combining conventional science with evidence-based complementary approaches.",
                    "طب تكاملي وتجديدي يجمع بين العلوم الطبية التقليدية والمناهج التكميلية القائمة على الأدلة."
                  )}
                </p>
                <p className="text-slate-700 font-semibold text-lg mb-4">
                  {t("Our work spans:", "يشمل عملنا:")}
                </p>
                <ul className="space-y-3 mb-8">
                  {(isAr ? medicalFoundationAr : medicalFoundation).map((item, idx) => (
                    <li key={item} className={`animate-on-scroll stagger-${idx + 1} flex items-start gap-3`}>
                      <div className="w-2 h-2 rounded-full bg-[#CDB06A] mt-2 flex-shrink-0" />
                      <span className="text-slate-600 text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="animate-on-scroll slide-in-right">
                <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6">
                  {t("Clinical Pathways", "المسارات السريرية")}
                </h2>
                <p className="text-slate-600 text-lg sm:text-xl mb-8 leading-relaxed">
                  {t("Every OXYZ clinical pathway is built on three principles.", "يقوم كل مسار سريري في OXYZ على ثلاثة مبادئ.")}
                </p>
                <div className="space-y-4">
                  {clinicalPrinciples.map((principle, idx) => (
                    <div
                      key={principle.text}
                      className={`animate-on-scroll stagger-${idx + 1} flex items-center gap-4 bg-white rounded-xl p-5 border border-slate-200/60 shadow-sm hover:shadow-md transition-all`}
                    >
                      <principle.icon className="h-8 w-8 text-[#CDB06A]" />
                      <span className="text-lg font-semibold text-[#007A59]">
                        {isAr ? principle.textAr : principle.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Beyond Clinics */}
        <section className="py-14 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="relative order-2 lg:order-1 animate-on-scroll slide-in-left scale-in flex justify-center">
                <div className="relative p-2 bg-white rounded-3xl shadow-2xl border border-slate-100">
                  <Image
                    src="/images/about/Our_Ecosystem.jpg"
                    alt={t("OXYZ ecosystem", "منظومة OXYZ")}
                    width={600}
                    height={450}
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 animate-on-scroll slide-in-right">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#007A59] mb-6 tracking-tight">
                  {t("Beyond Clinics: A Medical Ecosystem", "ما بعد العيادات: منظومة طبية متكاملة")}
                </h2>
                <p className="text-slate-600 text-lg sm:text-xl mb-6 leading-relaxed">
                  {t(
                    "Beyond clinical care, OXYZ connects professional collaboration, science-based products, international education and scalable medical business models.",
                    "إلى جانب الرعاية السريرية، تربط OXYZ بين التعاون المهني والمنتجات القائمة على العلم والتعليم الدولي ونماذج الأعمال الطبية القابلة للتوسّع."
                  )}
                </p>
                <div className="bg-[#007A59]/5 rounded-2xl p-6 border-s-4 border-[#CDB06A] shadow-sm">
                  <p className="text-slate-700 text-base sm:text-lg font-medium italic font-serif">
                    {t(
                      "“Our ecosystem approach allows medical professionals to grow responsibly, without compromising standards or outcomes.”",
                      "«يتيح نهج المنظومة المتكاملة للمهنيين الطبيين النمو بمسؤولية، دون المساس بالمعايير أو النتائج.»"
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* The OXYZ Difference */}
        <section className="py-14 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#007A59] mb-6 tracking-tight">
                  {t("The OXYZ Difference", "ما يميّز OXYZ")}
                </h2>
                <ul className="space-y-4 mb-8">
                  {(isAr ? differencesAr : differences).map((diff, idx) => (
                    <li key={diff} className={`animate-on-scroll stagger-${(idx % 4) + 1} flex items-center gap-3`}>
                      <CheckCircle2 className="h-5 w-5 text-[#CDB06A] flex-shrink-0" />
                      <span className="text-slate-700 font-medium text-base sm:text-lg">{diff}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-gradient-to-br from-[#007A59] to-[#005e45] text-white rounded-2xl p-6 sm:p-8 shadow-xl">
                  <p className="text-[#CDB06A] text-lg sm:text-xl font-bold uppercase tracking-wider mb-2">
                    {t("Sustainable Excellence", "تميّز مستدام")}
                  </p>
                  <p className="text-slate-100 text-sm sm:text-base leading-relaxed">
                    {t(
                      "OXYZ collaborates selectively, with professionals who share our commitment to medical integrity and long-term impact over short-term gain.",
                      "تتعاون OXYZ بانتقائية مع المهنيين الذين يشاركوننا الالتزام بالنزاهة الطبية وتقديم الأثر طويل الأمد على المكاسب السريعة."
                    )}
                  </p>
                </div>
              </div>
              <div className="relative animate-on-scroll slide-in-right scale-in flex justify-center">
                <div className="relative p-2 bg-white rounded-3xl shadow-2xl border border-slate-100">
                  <Image
                    src="/images/about/What_Sets.jpg"
                    alt={t("The OXYZ difference", "ما يميّز OXYZ")}
                    width={600}
                    height={450}
                    className="rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Direction */}
        <section className="py-16 sm:py-28 text-white relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-900/60" />
          </div>
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
            <div className="max-w-3xl mx-auto text-center animate-on-scroll">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
                {t("Our Direction", "توجّهنا")}
              </h2>
              <p className="text-slate-300 text-base sm:text-lg md:text-xl mb-8 leading-relaxed font-light">
                {t(
                  "OXYZ is shaping the future of regenerative medicine through responsible clinical application, education and ethical collaboration.",
                  "تسهم OXYZ في رسم مستقبل الطب التجديدي عبر التطبيق السريري المسؤول والتعليم والتعاون الأخلاقي."
                )}
              </p>
              <p className="text-lg sm:text-xl text-[#CDB06A] font-semibold mb-8 sm:mb-10 tracking-wide">
                {t(
                  "We invite like-minded medical professionals to explore this journey with us.",
                  "ندعو المهنيين الطبيين الذين يشاركوننا الرؤية إلى خوض هذه الرحلة معنا."
                )}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/5d-model" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 py-6 rounded-xl shadow-lg transition-all hover:scale-105"
                  >
                    {t("Explore the OXYZ 5D Model", "استكشف نموذج OXYZ 5D")}
                    <ArrowRight className="ms-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/gallery" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-slate-900 font-bold px-8 py-6 rounded-xl bg-transparent transition-all hover:scale-105"
                  >
                    {t("View Gallery", "معرض الصور")}
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
