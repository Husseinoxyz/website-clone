"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useLang } from "@/lib/i18n";

const stages = [
  {
    number: "01",
    title: "Discovery",
    subtitle: "Assessment & Diagnosis",
    subtitleAr: "التقييم والتشخيص",
    descriptionAr:
      "تتضمن مرحلة الاكتشاف تشخيصاً شاملاً وتقييماً للأسباب الجذرية، وهي الأساس لكل رحلة مريض في OXYZ.",
    detailsAr: [
      "ملف صحي شامل",
      "اختبارات تشخيصية متقدّمة",
      "تحديد الأسباب الجذرية",
      "تحديد خط أساس شخصي لكل مريض",
    ],
    description:
      "The Discovery phase involves comprehensive diagnostics and root-cause assessment. This forms the foundation of every OXYZ patient journey.",
    details: [
      "Comprehensive health profiling",
      "Advanced diagnostic testing",
      "Root-cause identification",
      "Personalized baseline establishment",
    ],
    color: "bg-gold",
    textColor: "text-gold",
    image: "/images/5D/1.png",
    imageAlt: "Clinical assessment and diagnostics",
  },
  {
    number: "02",
    title: "Detox",
    subtitle: "Cleanse & Optimize",
    subtitleAr: "التنقية والتحسين",
    descriptionAr:
      "تركّز مرحلة الديتوكس على تخفيف العبء الجهازي وتحسين البيئة الداخلية للجسم، تمهيداً للتدخلات التجديدية.",
    detailsAr: [
      "تخفيف العبء الجهازي",
      "تحسين البيئة الداخلية للجسم",
      "بروتوكولات التنقية الخلوية",
      "التهيئة لمرحلة التجديد",
    ],
    description:
      "The Detox phase focuses on systemic burden reduction and internal environment optimization, preparing the body for regenerative interventions.",
    details: [
      "Systemic burden reduction",
      "Internal environment optimization",
      "Cellular cleansing protocols",
      "Preparation for regeneration",
    ],
    color: "bg-gold-light",
    textColor: "text-gold",
    image: "/images/5D/2.png",
    imageAlt: "Clinical optimization and cleansing",
  },
  {
    number: "03",
    title: "Defence",
    subtitle: "Support & Strengthen",
    subtitleAr: "الدعم والتقوية",
    descriptionAr:
      "تركّز مرحلة الدفاع على دعم المناعة والإصلاح والمرونة، لضمان أن تستند استراتيجيات التجديد إلى جهاز دفاعي داخلي قوي.",
    detailsAr: [
      "تحسين أداء الجهاز المناعي",
      "آليات الإصلاح الخلوي",
      "بناء المرونة",
      "استعادة الاستقرار الفسيولوجي",
    ],
    description:
      "Defence focuses on immune support, repair, and resilience. This phase ensures regenerative strategies are supported by a robust internal defence system.",
    details: [
      "Immune system optimization",
      "Cellular repair mechanisms",
      "Building resilience",
      "Physiological stability restoration",
    ],
    color: "bg-teal-light",
    textColor: "text-teal",
    image: "/images/5D/3.png",
    imageAlt: "Immune support and resilience",
  },
  {
    number: "04",
    title: "Dynamic",
    subtitle: "Activation & Regeneration",
    subtitleAr: "التنشيط والتجديد",
    descriptionAr:
      "تمثّل المرحلة الديناميكية مرحلة التنشيط التجديدي، حيث تدعم التدخلات الموجّهة تجدّد الخلايا والحيوية ونتائج مكافحة الشيخوخة.",
    detailsAr: [
      "تجديد الخلايا واستعادتها",
      "تعزيز الطاقة والحيوية",
      "تدخلات مكافحة الشيخوخة",
      "تحسين الأداء",
    ],
    description:
      "Dynamic represents the regenerative activation phase, where targeted interventions support cellular renewal, vitality, and anti-aging outcomes.",
    details: [
      "Cellular renewal and restoration",
      "Energy and vitality enhancement",
      "Anti-aging interventions",
      "Performance optimization",
    ],
    color: "bg-teal",
    textColor: "text-teal",
    image: "/images/5D/4.png",
    imageAlt: "Cellular regeneration and activation",
  },
  {
    number: "05",
    title: "Dietary",
    subtitle: "Maintenance & Longevity",
    subtitleAr: "المحافظة وإطالة العمر الصحي",
    descriptionAr:
      "تضمن المرحلة الغذائية استدامة المكاسب التجديدية على المدى الطويل من خلال تغذية مخصّصة وتحسين نمط الحياة ودعم مستمر.",
    detailsAr: [
      "استراتيجيات تغذية مخصّصة",
      "تحسين نمط الحياة",
      "دعم بناء العادات الصحية",
      "تخطيط المتابعة طويلة الأمد",
    ],
    description:
      "The Dietary phase ensures regenerative gains are sustained long-term through personalized nutrition, lifestyle optimization, and ongoing support.",
    details: [
      "Personalized nutrition strategies",
      "Lifestyle optimization",
      "Habit formation support",
      "Long-term maintenance planning",
    ],
    color: "bg-teal-dark",
    textColor: "text-teal-dark",
    image: "/images/5D/5.png",
    imageAlt: "Nutrition and longevity planning",
  },
];

const benefits = [
  "Consistent patient journeys",
  "Reproducible clinical logic",
  "Clear progression between treatment phases",
  "Alignment between doctors, clinical teams, and operations",
];

const benefitsAr = [
  "رحلات مرضى متّسقة",
  "منطق سريري قابل للتكرار",
  "تدرّج واضح بين مراحل العلاج",
  "توافق بين الأطباء والفرق السريرية والعمليات",
];

const platforms = [
  "Clinical training and education",
  "SOP development and governance",
  "Multicentre replication and licensing",
  "Ethical integration of regenerative products and services",
];

const platformsAr = [
  "التدريب والتعليم السريري",
  "تطوير إجراءات التشغيل القياسية والحوكمة",
  "تكرار النموذج في مراكز متعددة والترخيص",
  "دمج أخلاقي للمنتجات والخدمات التجديدية",
];

export default function FiveDModelPage() {
  const { t, isAr } = useLang();
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative w-full pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[80vh]">
            <div className="relative flex items-center bg-gold px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-0 order-2 lg:order-1">
              <div className="mx-auto max-w-2xl">
                <h1 className="text-3xl sm:text-5xl font-bold text-teal mb-4 sm:mb-6">
                  {t("The OXYZ 5D Regenerative Medical Model", "نموذج OXYZ الطبي التجديدي 5D")}
                </h1>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-6">
                  {t(
                    "At the core of OXYZ lies the 5D Regenerative Medical Model, a structured framework guiding patient care, clinical decisions, and operational consistency.",
                    "يقع نموذج 5D الطبي التجديدي في صميم عمل OXYZ، وهو إطار منظّم يوجّه رعاية المرضى والقرارات السريرية واتساق العمليات."
                  )}
                </p>
                <p className="text-lg text-teal font-semibold">
                  Discovery · Detox · Defence · Dynamic · Dietary
                </p>
              </div>
            </div>

            <div className="relative min-h-[240px] sm:min-h-[420px] lg:min-h-[80vh] order-1 lg:order-2">
              <Image
                src="/images/5d_hero.png"
                alt={t("The OXYZ 5D Regenerative Medical Model", "نموذج OXYZ الطبي التجديدي 5D")}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/5" />
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-14 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 text-balance">
                {t("One Model. Consistent Outcomes.", "نموذج واحد. نتائج متّسقة.")}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t(
                  "Medical clarity before intervention, responsible regenerative application and consistent patient journeys across every OXYZ-aligned practice.",
                  "وضوح طبي قبل أي تدخل، وتطبيق تجديدي مسؤول، ورحلات مرضى متّسقة في كل ممارسة تعمل وفق نموذج OXYZ."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* The 5 Stages */}
        <section className="py-14 sm:py-24 bg-[#F7F4ED]">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {t("The Five Dimensions", "الأبعاد الخمسة")}
              </h2>
            </div>

          </div>
          <div className="space-y-4 sm:space-y-10">
            {stages.map((stage, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={stage.title}
                  className="grid gap-0 overflow-hidden bg-[#FCFBF8] border-y border-[#E9E1CF] lg:grid-cols-12"
                >
                  <div
                    className={`relative min-h-[160px] sm:min-h-[260px] ${isEven
                        ? "order-2 lg:order-1 lg:col-span-5 lg:col-start-1"
                        : "order-2 lg:order-3 lg:col-span-5 lg:col-start-8"
                      }`}
                  >
                    <Image
                      src={stage.image}
                      alt={isAr ? stage.subtitleAr : stage.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-teal/20 mix-blend-multiply" />
                  </div>
                  <div
                    className={`order-3 lg:order-2 px-5 py-6 sm:px-10 sm:py-10 ${isEven
                        ? "lg:col-span-5 lg:col-start-6"
                        : "lg:col-span-5 lg:col-start-3"
                      }`}
                  >
                    <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
                      <span className="lg:hidden">{stage.number} · </span>
                      {stage.title}
                    </p>
                    <h3 className="mt-2 text-2xl sm:text-3xl font-semibold text-teal">
                      {isAr ? stage.subtitleAr : stage.subtitle}
                    </h3>
                    <p className="mt-4 text-sm sm:text-base text-foreground/80 leading-relaxed">
                      {isAr ? stage.descriptionAr : stage.description}
                    </p>
                    <ul className="mt-4 sm:mt-6 space-y-2 text-sm text-foreground/80">
                      {(isAr ? stage.detailsAr : stage.details).map((detail) => (
                        <li key={detail} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-teal flex-shrink-0" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div
                    className={`hidden lg:flex items-center justify-center min-h-[260px] ${isEven
                        ? "order-1 lg:order-3 lg:col-span-2 lg:col-start-11"
                        : "order-1 lg:order-1 lg:col-span-2 lg:col-start-1"
                      } ${isEven ? "bg-teal" : "bg-gold"}`}
                  >
                    <span className="text-[10rem] font-bold text-white/90 italic">
                      {stage.number}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Medical Consistency */}
        <section className="py-14 sm:py-24 bg-teal-dark text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  {t("A Model Built for Medical Consistency", "نموذج مصمَّم للاتساق الطبي")}
                </h2>
                <p className="text-base sm:text-lg text-secondary-foreground/80 mb-6 sm:mb-8 leading-relaxed">
                  {t(
                    "A standardised clinical system that ensures, across every OXYZ-aligned practice:",
                    "نظام سريري موحّد يضمن في كل ممارسة تعمل وفق نموذج OXYZ:"
                  )}
                </p>
                <ul className="space-y-4">
                  {(isAr ? benefitsAr : benefits).map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground/90">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-secondary-foreground mb-6">
                  {t("A Platform for Growth", "منصة للنمو")}
                </h2>
                <p className="text-base sm:text-lg text-secondary-foreground/80 mb-6 sm:mb-8 leading-relaxed">
                  {t("The same model is the foundation for institutional growth:", "والنموذج ذاته هو أساس النمو المؤسسي:")}
                </p>
                <ul className="space-y-4">
                  {(isAr ? platformsAr : platforms).map((platform) => (
                    <li key={platform} className="flex items-start gap-3">
                      <CheckCircle2 className="h-6 w-6 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-secondary-foreground/90">
                        {platform}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Commitment */}
        <section className="py-14 sm:py-24 bg-background">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
                {t("Our Commitment", "التزامنا")}
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                {t(
                  "Regenerative medicine carries responsibility. Structure ensures innovation serves patients, not trends.",
                  "الطب التجديدي مسؤولية. والتنظيم يضمن أن يخدم الابتكار المرضى، لا الموضات العابرة."
                )}
              </p>

              <div className="bg-muted rounded-lg p-4 sm:p-8 mb-8 sm:mb-12">
                <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
                  {stages.map((stage) => (
                    <div
                      key={stage.title}
                      className={`${stage.color} text-foreground px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base rounded-full font-semibold`}
                    >
                      {stage.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/gallery">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8"
                  >
                    {t("View Gallery", "معرض الصور")}
                    <ArrowRight className="ms-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={isAr ? "/ar/register" : "/register"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold px-8 bg-transparent"
                  >
                    {t("Register Now", "سجّل الآن")}
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
