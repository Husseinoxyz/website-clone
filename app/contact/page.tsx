"use client"

import React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Clock, Mail, MapPin, Phone, Send, CheckCircle, ArrowRight, MessageCircle } from "lucide-react"
import { useLang } from "@/lib/i18n"
import { trackLead } from "@/lib/track"
import { WA_SUMMIT_AR, WA_SUMMIT_EN } from "@/lib/whatsapp"

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

const countryCodes = [
  { code: "+1", label: "USA", labelAr: "الولايات المتحدة" },
  { code: "+7", label: "Russia", labelAr: "روسيا" },
  { code: "+20", label: "Egypt", labelAr: "مصر" },
  { code: "+27", label: "South Africa", labelAr: "جنوب أفريقيا" },
  { code: "+30", label: "Greece", labelAr: "اليونان" },
  { code: "+31", label: "Netherlands", labelAr: "هولندا" },
  { code: "+32", label: "Belgium", labelAr: "بلجيكا" },
  { code: "+33", label: "France", labelAr: "فرنسا" },
  { code: "+34", label: "Spain", labelAr: "إسبانيا" },
  { code: "+36", label: "Hungary", labelAr: "هنغاريا" },
  { code: "+39", label: "Italy", labelAr: "إيطاليا" },
  { code: "+40", label: "Romania", labelAr: "رومانيا" },
  { code: "+41", label: "Switzerland", labelAr: "سويسرا" },
  { code: "+43", label: "Austria", labelAr: "النمسا" },
  { code: "+44", label: "United Kingdom", labelAr: "المملكة المتحدة" },
  { code: "+45", label: "Denmark", labelAr: "الدانمرك" },
  { code: "+46", label: "Sweden", labelAr: "السويد" },
  { code: "+47", label: "Norway", labelAr: "النرويج" },
  { code: "+48", label: "Poland", labelAr: "بولندا" },
  { code: "+49", label: "Germany", labelAr: "ألمانيا" },
  { code: "+51", label: "Peru", labelAr: "بيرو" },
  { code: "+52", label: "Mexico", labelAr: "المكسيك" },
  { code: "+53", label: "Cuba", labelAr: "كوبا" },
  { code: "+54", label: "Argentina", labelAr: "الأرجنتين" },
  { code: "+55", label: "Brazil", labelAr: "البرازيل" },
  { code: "+56", label: "Chile", labelAr: "تشيلي" },
  { code: "+57", label: "Colombia", labelAr: "كولومبيا" },
  { code: "+58", label: "Venezuela", labelAr: "فنزويلا" },
  { code: "+60", label: "Malaysia", labelAr: "ماليزيا" },
  { code: "+61", label: "Australia", labelAr: "أستراليا" },
  { code: "+62", label: "Indonesia", labelAr: "إندونيسيا" },
  { code: "+63", label: "Philippines", labelAr: "الفلبين" },
  { code: "+64", label: "New Zealand", labelAr: "نيوزيلندا" },
  { code: "+65", label: "Singapore", labelAr: "سنغافورة" },
  { code: "+66", label: "Thailand", labelAr: "تايلاند" },
  { code: "+81", label: "Japan", labelAr: "اليابان" },
  { code: "+82", label: "South Korea", labelAr: "كوريا الجنوبية" },
  { code: "+84", label: "Vietnam", labelAr: "فيتنام" },
  { code: "+86", label: "China", labelAr: "الصين" },
  { code: "+90", label: "Turkey", labelAr: "تركيا" },
  { code: "+91", label: "India", labelAr: "الهند" },
  { code: "+92", label: "Pakistan", labelAr: "باكستان" },
  { code: "+93", label: "Afghanistan", labelAr: "أفغانستان" },
  { code: "+94", label: "Sri Lanka", labelAr: "سريلانكا" },
  { code: "+95", label: "Myanmar", labelAr: "ميانمار (بورما)" },
  { code: "+98", label: "Iran", labelAr: "إيران" },
  { code: "+212", label: "Morocco", labelAr: "المغرب" },
  { code: "+213", label: "Algeria", labelAr: "الجزائر" },
  { code: "+216", label: "Tunisia", labelAr: "تونس" },
  { code: "+218", label: "Libya", labelAr: "ليبيا" },
  { code: "+220", label: "Gambia", labelAr: "غامبيا" },
  { code: "+221", label: "Senegal", labelAr: "السنغال" },
  { code: "+233", label: "Ghana", labelAr: "غانا" },
  { code: "+234", label: "Nigeria", labelAr: "نيجيريا" },
  { code: "+251", label: "Ethiopia", labelAr: "إثيوبيا" },
  { code: "+254", label: "Kenya", labelAr: "كينيا" },
  { code: "+256", label: "Uganda", labelAr: "أوغندا" },
  { code: "+260", label: "Zambia", labelAr: "زامبيا" },
  { code: "+263", label: "Zimbabwe", labelAr: "زيمبابوي" },
  { code: "+971", label: "UAE", labelAr: "الإمارات العربية المتحدة" },
  { code: "+972", label: "Israel", labelAr: "إسرائيل" },
  { code: "+973", label: "Bahrain", labelAr: "البحرين" },
  { code: "+974", label: "Qatar", labelAr: "قطر" },
  { code: "+975", label: "Bhutan", labelAr: "بوتان" },
  { code: "+976", label: "Mongolia", labelAr: "منغوليا" },
  { code: "+977", label: "Nepal", labelAr: "نيبال" },
  { code: "+994", label: "Azerbaijan", labelAr: "أذربيجان" },
  { code: "+995", label: "Georgia", labelAr: "جورجيا" },
  { code: "+998", label: "Uzbekistan", labelAr: "أوزبكستان" },
];

export default function ContactPage() {
  const { t, isAr } = useLang()
  useScrollAnimation();

  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    const whatsappMessage = [
      "OXYZ Contact Form",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.countryCode} ${formData.phone}`.trim(),
      `Subject: ${formData.subject}`,
      `Message: ${formData.message}`,
    ].join("\n")

    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/6586163762?text=${encodedMessage}`, "_blank", "noopener,noreferrer")
    trackLead()
    setFormState("success")
  }

  return (
    <div className="min-h-screen flex flex-col">
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

      <main className="flex-1">
        {/* Hero Section - Enhanced */}
        <section className="relative w-full min-h-[65vh] sm:min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/about_hero.jpg"
              alt={t("OXYZ Health International contact", "تواصل مع OXYZ للصحة الدولية")}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/15" />
          </div>

          {/* Content Container - Positioned at bottom */}
          <div className="relative z-10 flex items-end min-h-[65vh] sm:min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-10 sm:pb-16 md:pb-20 lg:pb-24 pt-24 sm:pt-20">
            <div className="max-w-4xl w-full">
              
              {/* Badge */}
              <div className="mb-4 sm:mb-6 animate-fade-in-up opacity-0 animation-delay-100">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                  <MessageCircle className="h-4 w-4" />
                  {t("Contact Us", "اتصل بنا")}
                </div>
              </div>

              {/* Main Title */}
              <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
                <h1 className="font-bold leading-[1.15] text-[#CDB06A]">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    {t("Let’s Connect", "لنتواصل")}
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide">
                    {t("Get in Touch with OXYZ Health International", "تواصل مع OXYZ للصحة الدولية")}
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 max-w-2xl animate-fade-in-up opacity-0 animation-delay-400 font-light">
                {t(
                  "Questions about the training or partnership opportunities? We’re here to help.",
                  "لديك أسئلة حول التدريب أو فرص الشراكة؟ نحن هنا لمساعدتك."
                )}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up opacity-0 animation-delay-600">
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

        {/* Contact Info & Form */}
        <section className="py-14 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Contact Information */}
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl font-bold text-[#007A59] mb-4">
                  {t("Get In Touch", "ابقَ على تواصل")}
                </h2>
                <p className="text-lg text-gold mb-10 leading-relaxed">
                  {t("Reach us by email, WhatsApp or the form below.", "تواصل معنا عبر البريد الإلكتروني أو واتساب أو النموذج أدناه.")}
                </p>

                <div className="space-y-6">
                  <div className="animate-on-scroll stagger-1 group flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#007A59] mb-1">
                        {t("Email", "البريد الإلكتروني")}
                      </h3>
                      <a
                        href="mailto:global@oxyzhealth.com"
                        className="text-gold hover:text-gold/80 transition-colors"
                      >
                        global@oxyzhealth.com
                      </a>
                    </div>
                  </div>



                  <div className="animate-on-scroll stagger-3 group flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#007A59] mb-1">
                        {t("Headquarters", "المقرّات")}
                      </h3>
                      <p className="text-gold">
                        {t("USA | Singapore | Malaysia", "الولايات المتحدة | سنغافورة | ماليزيا")}
                      </p>
                    </div>
                  </div>

                  <div className="animate-on-scroll stagger-4 group flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#007A59] mb-1">
                        {t("Business Hours", "ساعات العمل")}
                      </h3>
                      <p className="text-gold">
                        {t("Monday to Sunday: 9:00 AM to 6:00 PM", "من الاثنين إلى الأحد: 9:00 صباحاً حتى 6:00 مساءً")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-10 p-6 bg-white rounded-xl border-2 border-slate-100 shadow-sm animate-on-scroll">
                  <h3 className="font-semibold text-[#007A59] mb-4">
                    {t("Quick Links", "روابط سريعة")}
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <Link
                      href={isAr ? "/ar/register" : "/register"}
                      className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="h-3 w-3" />
                      {t("Register for Training", "التسجيل في التدريب")}
                    </Link>
                    <a
                      href={t(WA_SUMMIT_EN, WA_SUMMIT_AR)}
                      className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ArrowRight className="h-3 w-3" />
                      {t("View Program", "عرض البرنامج")}
                    </a>
                    <Link
                      href="/about"
                      className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="h-3 w-3" />
                      {t("About OXYZ", "عن OXYZ")}
                    </Link>
                    <Link
                      href="/why-work-with-us"
                      className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="h-3 w-3" />
                      {t("Partnership Info", "معلومات الشراكة")}
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                id="contact-form"
                className="animate-on-scroll slide-in-right scale-in bg-white p-8 rounded-2xl shadow-xl shadow-gold/20 border-2 border-slate-100"
              >
                {formState === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      {t("Message Sent!", "تم إرسال رسالتك!")}
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      {t("We have received your message and will get back to you shortly.", "استلمنا رسالتك وسنعود إليك قريباً.")}
                    </p>
                    <Button
                      onClick={() => {
                        setFormState("idle")
                        setFormData({
                          name: "",
                          email: "",
                          countryCode: "+1",
                          phone: "",
                          subject: "",
                          message: "",
                        })
                      }}
                      className="bg-teal hover:bg-teal-dark text-white"
                    >
                      {t("Send Another Message", "إرسال رسالة أخرى")}
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#007A59] mb-2">
                      {t("Send Us a Message", "أرسل لنا رسالة")}
                    </h2>
                    <p className="text-gold mb-8">
                      {t("Fill out the form below and we’ll respond as soon as possible.", "املأ النموذج أدناه وسنرد عليك في أقرب وقت ممكن.")}
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-[#007A59]">{t("Full Name *", "الاسم الكامل *")}</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder={t("Dr. John Smith", "د. محمد أحمد")}
                            className="border-border text-gold placeholder:text-gold/60 focus:border-gold focus:ring-gold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[#007A59]">{t("Email Address *", "البريد الإلكتروني *")}</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="name@example.com"
                            dir="ltr"
                            className="border-border text-gold placeholder:text-gold/60 focus:border-gold focus:ring-gold"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-[#007A59]">{t("Phone Number", "رقم الهاتف")}</Label>
                          <div className="flex gap-3">
                            <Select
                              value={formData.countryCode}
                              onValueChange={(value) =>
                                setFormData({ ...formData, countryCode: value })
                              }
                            >
                              <SelectTrigger className="w-28 border-border text-gold focus:border-gold focus:ring-gold">
                                <span className="truncate" dir="ltr">{formData.countryCode === "+1" ? t("+1 USA", "+1") : formData.countryCode || "+1"}</span>
                              </SelectTrigger>
                            <SelectContent>
                              {countryCodes.map((item) => (
                                <SelectItem key={item.code} value={item.code}>
                                  <span dir="ltr">{item.code}</span> {isAr ? item.labelAr : item.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                            </Select>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) =>
                                setFormData({ ...formData, phone: e.target.value })
                              }
                              placeholder="(555) 000-0000"
                              dir="ltr"
                              className="border-border text-gold placeholder:text-gold/60 focus:border-gold focus:ring-gold"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-[#007A59]">{t("Subject *", "الموضوع *")}</Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) => setFormData({ ...formData, subject: value })}
                          >
                            <SelectTrigger className="border-border text-gold focus:border-gold focus:ring-gold">
                              <SelectValue placeholder={t("Select a topic", "اختر موضوعاً")} />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="training">{t("Training Enquiry", "استفسار عن التدريب")}</SelectItem>
                              <SelectItem value="program">{t("Program Request", "طلب البرنامج")}</SelectItem>
                              <SelectItem value="partnership">{t("Partnership Enquiry", "استفسار عن الشراكة")}</SelectItem>
                              <SelectItem value="general">{t("General Enquiry", "استفسار عام")}</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-[#007A59]">{t("Message *", "الرسالة *")}</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder={t("How can we help you?", "كيف يمكننا مساعدتك؟")}
                          rows={5}
                          className="border-border text-gold placeholder:text-gold/60 focus:border-gold focus:ring-gold resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full bg-gold hover:bg-gold-dark text-white font-semibold py-6"
                      >
                        {formState === "submitting" ? (
                          <>
                            <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin me-2" />
                            {t("Sending...", "جارٍ الإرسال...")}
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 me-2" />
                            {t("Send Message", "إرسال الرسالة")}
                          </>
                        )}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
