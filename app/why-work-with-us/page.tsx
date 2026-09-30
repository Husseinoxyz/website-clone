"use client";

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useLang } from "@/lib/i18n"
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  Handshake, 
  Building2,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
  Shield
} from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Global Network Access",
    titleAr: "الوصول إلى شبكة عالمية",
    description: "Connect with over 500 medical practices and specialists across 30+ countries through our established international network.",
    descriptionAr: "تواصل مع أكثر من 500 ممارسة طبية وأخصائي في أكثر من 30 دولة عبر شبكتنا الدولية الراسخة.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    titleAr: "نمو الإيرادات",
    description: "Partners experience an average 40% increase in regenerative medicine revenue within the first year of collaboration.",
    descriptionAr: "يحقّق شركاؤنا زيادة بمتوسط 40% في إيرادات الطب التجديدي خلال السنة الأولى من التعاون.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    titleAr: "التميّز السريري",
    description: "Access to evidence-based protocols, continuous education, and peer-reviewed treatment methodologies.",
    descriptionAr: "وصول إلى بروتوكولات قائمة على الأدلة وتعليم مستمر ومنهجيات علاجية محكّمة علمياً.",
  },
  {
    icon: Shield,
    title: "Compliance Support",
    titleAr: "دعم الامتثال",
    description: "Navigate regulatory requirements with confidence through our comprehensive compliance and quality assurance programs.",
    descriptionAr: "تعامل مع المتطلبات التنظيمية بثقة عبر برامجنا الشاملة للامتثال وضمان الجودة.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Pipeline",
    titleAr: "مسار الابتكار",
    description: "Early access to emerging therapies, cutting-edge research, and breakthrough treatment technologies.",
    descriptionAr: "وصول مبكر إلى العلاجات الناشئة والأبحاث المتقدّمة وتقنيات العلاج الرائدة.",
  },
  {
    icon: Users,
    title: "Community Support",
    titleAr: "دعم المجتمع المهني",
    description: "Join a collaborative community of like-minded practitioners dedicated to advancing regenerative medicine.",
    descriptionAr: "انضم إلى مجتمع تعاوني من الممارسين الذين يشاركونك الرؤية ويعملون على تطوير الطب التجديدي.",
  },
]

const partnershipTiers = [
  {
    tier: "Associate Partner",
    tierAr: "شريك منتسب",
    description: "Ideal for practices new to regenerative medicine",
    descriptionAr: "مثالي للممارسات الجديدة في الطب التجديدي",
    features: [
      "Network directory listing",
      "Educational resources access",
      "Quarterly newsletters",
      "Community forum access",
      "Annual training discount",
    ],
    featuresAr: [
      "إدراج في دليل الشبكة",
      "الوصول إلى الموارد التعليمية",
      "نشرات إخبارية فصلية",
      "الوصول إلى منتدى المجتمع",
      "خصم سنوي على التدريب",
    ],
    highlight: false,
  },
  {
    tier: "Clinical Partner",
    tierAr: "شريك سريري",
    description: "For established regenerative medicine practices",
    descriptionAr: "للممارسات الراسخة في الطب التجديدي",
    features: [
      "Everything in Associate tier",
      "Patient referral network",
      "Protocol development support",
      "Marketing materials & support",
      "Priority training registration",
      "Quarterly webinars & training",
    ],
    featuresAr: [
      "كل مزايا الشريك المنتسب",
      "شبكة إحالة المرضى",
      "دعم تطوير البروتوكولات",
      "مواد تسويقية ودعم تسويقي",
      "أولوية في التسجيل بالتدريبات",
      "ندوات وتدريبات فصلية عبر الإنترنت",
    ],
    highlight: true,
  },
  {
    tier: "Strategic Partner",
    tierAr: "شريك استراتيجي",
    description: "For leading institutions and multi-location practices",
    descriptionAr: "للمؤسسات الرائدة والممارسات متعددة الفروع",
    features: [
      "Everything in Clinical tier",
      "Joint research opportunities",
      "Speaking opportunities at events",
      "Custom training programs",
      "Dedicated account manager",
      "Co-marketing initiatives",
      "Board advisory participation",
    ],
    featuresAr: [
      "كل مزايا الشريك السريري",
      "فرص للبحث المشترك",
      "فرص للتحدث في الفعاليات",
      "برامج تدريب مخصّصة",
      "مدير حساب مخصّص",
      "مبادرات تسويق مشتركة",
      "المشاركة في المجلس الاستشاري",
    ],
    highlight: false,
  },
]

const testimonials = [
  {
    quote: "Joining the OXYZ network transformed our practice. The protocols, training, and referral network have been invaluable for our growth in regenerative medicine.",
    quoteAr: "أحدث انضمامنا إلى شبكة OXYZ تحولاً في ممارستنا؛ فقد كانت البروتوكولات والتدريب وشبكة الإحالة ذات قيمة كبيرة لنمونا في الطب التجديدي.",
    author: "Dr. Sarah Chen",
    authorAr: "د. سارة تشين",
    role: "Medical Director, Advanced Regenerative Clinic",
    roleAr: "المديرة الطبية، عيادة الطب التجديدي المتقدّم",
    location: "Los Angeles, CA",
    locationAr: "لوس أنجلوس، كاليفورنيا",
  },
  {
    quote: "The strategic partnership has opened doors we never thought possible. From research collaborations to international referrals, OXYZ delivers exceptional value.",
    quoteAr: "فتحت لنا الشراكة الاستراتيجية أبواباً لم نتوقعها؛ من التعاون البحثي إلى الإحالات الدولية، تقدّم OXYZ قيمة استثنائية.",
    author: "Dr. Michael Torres",
    authorAr: "د. مايكل توريس",
    role: "Founder, Integrative Medicine Institute",
    roleAr: "المؤسس، معهد الطب التكاملي",
    location: "Miami, FL",
    locationAr: "ميامي، فلوريدا",
  },
  {
    quote: "What sets OXYZ apart is their commitment to clinical excellence. The evidence-based approach and continuous education have elevated our entire practice.",
    quoteAr: "ما يميّز OXYZ هو التزامها بالتميّز السريري؛ فقد ارتقى النهج القائم على الأدلة والتعليم المستمر بممارستنا بالكامل.",
    author: "Dr. Emily Watson",
    authorAr: "د. إميلي واتسون",
    role: "Chief Medical Officer, Wellness Medical Group",
    roleAr: "الرئيسة الطبية التنفيذية، مجموعة العافية الطبية",
    location: "New York, NY",
    locationAr: "نيويورك",
  },
]

const stats = [
  { value: "500+", label: "Partner Practices", labelAr: "ممارسة شريكة" },
  { value: "30+", label: "Countries", labelAr: "دولة" },
  { value: "40%", label: "Avg. Revenue Growth", labelAr: "متوسط نمو الإيرادات" },
  { value: "98%", label: "Partner Retention", labelAr: "نسبة استمرار الشركاء" },
]

export default function WhyWorkWithUsPage() {
  const { t, isAr } = useLang()
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            <div className="relative flex items-center bg-teal px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-0 order-2 lg:order-1 text-white">
              <div className="mx-auto max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
                  <Handshake className="w-4 h-4" />
                  <span>{t("Partnership Opportunities", "فرص الشراكة")}</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
                  {t("Why Work With Us", "لماذا تعمل معنا؟")}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-6 sm:mb-8">
                  {t("Join the premier global network dedicated to advancing regenerative medicine and transforming patient outcomes worldwide.", "انضم إلى الشبكة العالمية الرائدة المكرّسة لتطوير الطب التجديدي وتحسين نتائج المرضى حول العالم.")}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground font-semibold">
                    <Link href="/contact">
                      {t("Become a Partner", "كن شريكاً")}
                      <ArrowRight className="ms-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                    <Link href="/about">{t("Learn About OXYZ", "تعرّف على OXYZ")}</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative min-h-[220px] sm:min-h-[360px] lg:min-h-[70vh] order-1 lg:order-2">
              <Image
                src="/images/partnership-hero.jpg"
                alt={t("Partnership", "الشراكة")}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/5" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-10 sm:py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{isAr ? stat.labelAr : stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("Partnership Benefits", "مزايا الشراكة")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("Discover how joining the OXYZ network can accelerate your practice’s growth and impact in regenerative medicine.", "اكتشف كيف يسرّع انضمامك إلى شبكة OXYZ نمو ممارستك وأثرها في الطب التجديدي.")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-sm border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {isAr ? benefit.titleAr : benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {isAr ? benefit.descriptionAr : benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("How Partnership Works", "كيف تعمل الشراكة؟")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("A simple, structured approach to joining our global network", "نهج بسيط ومنظّم للانضمام إلى شبكتنا العالمية")}
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: t("Initial Consultation", "الاستشارة الأولى"),
                  description: t("Connect with our partnership team to discuss your practice goals and needs.", "تواصل مع فريق الشراكات لمناقشة أهداف ممارستك واحتياجاتها."),
                },
                {
                  step: "02",
                  title: t("Assessment", "التقييم"),
                  description: t("We evaluate alignment with our network values and identify collaboration opportunities.", "نقيّم مدى التوافق مع قيم شبكتنا ونحدّد فرص التعاون."),
                },
                {
                  step: "03",
                  title: t("Onboarding", "الانضمام"),
                  description: t("Complete our comprehensive onboarding program and gain access to resources.", "أكمل برنامج الانضمام الشامل واحصل على إمكانية الوصول إلى الموارد."),
                },
                {
                  step: "04",
                  title: t("Active Partnership", "شراكة فعّالة"),
                  description: t("Begin leveraging the full benefits of the OXYZ global network.", "ابدأ الاستفادة من جميع مزايا شبكة OXYZ العالمية."),
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-gold/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 right-0 w-1/2 h-px bg-gold/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-12 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("Partnership Tiers", "مستويات الشراكة")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("Choose the partnership level that best fits your practice’s stage and goals", "اختر مستوى الشراكة الأنسب لمرحلة ممارستك وأهدافها")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    tier.highlight 
                      ? "bg-teal text-white shadow-xl scale-105" 
                      : "bg-white border border-border shadow-sm"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-foreground text-sm font-semibold rounded-full">
                      {t("Most Popular", "الأكثر اختياراً")}
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className={`w-6 h-6 ${tier.highlight ? "text-gold" : "text-gold"}`} />
                    <h3 className="text-xl font-bold">{isAr ? tier.tierAr : tier.tier}</h3>
                  </div>
                  <p className={`mb-6 ${tier.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                    {isAr ? tier.descriptionAr : tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {(isAr ? tier.featuresAr : tier.features).map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.highlight ? "text-gold" : "text-teal"
                        }`} />
                        <span className={tier.highlight ? "text-white/90" : "text-foreground"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className={`w-full ${
                      tier.highlight 
                        ? "bg-gold hover:bg-gold-dark text-foreground" 
                        : "bg-teal hover:bg-teal-dark text-white"
                    }`}
                  >
                    <Link href="/contact">{t("Learn More", "اعرف المزيد")}</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 sm:py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                {t("Partner Success Stories", "قصص نجاح شركائنا")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("Hear from practices that have transformed their regenerative medicine offerings through OXYZ partnership", "استمع إلى ممارسات طبية طوّرت خدماتها في الطب التجديدي من خلال الشراكة مع OXYZ")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    {isAr ? `«${testimonial.quoteAr}»` : `“${testimonial.quote}”`}
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{isAr ? testimonial.authorAr : testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{isAr ? testimonial.roleAr : testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{isAr ? testimonial.locationAr : testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-20 bg-teal text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Target className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t("Ready to Elevate Your Practice?", "هل أنت مستعد للارتقاء بممارستك؟")}
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              {t("Join the growing network of forward-thinking medical professionals who are shaping the future of regenerative medicine. Let’s explore how we can grow together.", "انضم إلى شبكة متنامية من المهنيين الطبيين أصحاب الرؤية الذين يرسمون مستقبل الطب التجديدي، ولنستكشف معاً كيف ننمو سوياً.")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground font-semibold">
                <Link href="/contact">
                  {t("Schedule a Consultation", "احجز استشارة")}
                  <ArrowRight className="ms-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Link href={isAr ? "/ar/register" : "/register"}>{t("Attend the Training", "احضر التدريب")}</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
