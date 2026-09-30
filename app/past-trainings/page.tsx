"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InstagramReelsSection } from "@/components/home/instagram-reels-section";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { WA_SUMMIT_AR, WA_SUMMIT_EN } from "@/lib/whatsapp";
import Image from "next/image";
import { GalleryGrid } from "@/components/training/gallery-grid";
import { GalleryLoadMore } from "@/components/training/gallery-load-more";
import { ArrowRight, Globe, Users, BookOpen, Handshake, Play, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/lib/i18n";

const isYouTubeUrl = (url: string) => {
  return url.includes("youtube.com") || url.includes("youtu.be");
};

const getYouTubeEmbedUrl = (url: string) => {
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    videoId = urlParams.get("v") || "";
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1].split("?")[0];
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&vq=hd1080`;
};

const getYouTubePreviewUrl = (url: string) => {
  let videoId = "";
  if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("youtube.com/watch")) {
    const urlParams = new URLSearchParams(url.split("?")[1]);
    videoId = urlParams.get("v") || "";
  } else if (url.includes("youtube.com/embed/")) {
    videoId = url.split("youtube.com/embed/")[1].split("?")[0];
  }
  return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&playsinline=1&modestbranding=1&enablejsapi=1&vq=hd1080`;
};

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

const highlights = [
  { icon: Users, text: "International doctors and healthcare professionals", textAr: "أطباء ومهنيون صحيون من مختلف الدول" },
  { icon: BookOpen, text: "Regenerative & integrative medicine topics", textAr: "موضوعات في الطب التجديدي والتكاملي" },
  { icon: Handshake, text: "Clinical discussions and protocol sharing", textAr: "نقاشات سريرية وتبادل للبروتوكولات" },
  { icon: Globe, text: "Strategic networking and professional exchange", textAr: "تواصل استراتيجي وتبادل مهني" },
];

const regions = [
  "Asia Pacific",
  "Middle East",
  "North America",
  "Europe",
  "Africa",
  "International medical tourism and wellness markets",
];

const regionsAr = [
  "آسيا والمحيط الهادئ",
  "الشرق الأوسط",
  "أمريكا الشمالية",
  "أوروبا",
  "أفريقيا",
  "أسواق السياحة العلاجية والعافية الدولية",
];

const emphases = [
  "Responsible regenerative medicine",
  "Structured clinical thinking",
  "Ethical medical application",
  "Long-term professional collaboration",
];

const emphasesAr = [
  "طب تجديدي مسؤول",
  "تفكير سريري منظّم",
  "تطبيق طبي أخلاقي",
  "تعاون مهني طويل الأمد",
];

const gallery2025 = [
  "/images/sym/slide_1.jpg",
  "/images/sym/slide_2.jpg",
  "/images/sym/slide_3.jpg",
  "/images/sym/slide_4.jpg",
  "/images/sym/slide_5.jpg",
  "/images/sym/slide_6.jpg",
  "/images/sym/slide_7.jpg",
  "/images/sym/home_g_1.jpg",
  "/images/sym/home_g_2.jpg",
  "/images/sym/home_g_3.jpg",
  "/images/sym/home_g_4.jpg",
  "/images/sym/home_g_5.jpg",
  "/images/sym/home_g_6.jpg",
  "/images/sym/home_g_7.jpg",
  "/images/sym/home_g_8.jpg",
  "/images/sym/home_g_9.jpg",
].map((src) => ({
  src,
  alt: "2025 training highlight",
}));

const gallery2023 = Array.from({ length: 12 }, (_, index) => {
  const value = index + 1;
  const number = String(value).padStart(2, "0");
  const padded =
    value >= 10 && value <= 12 ? `0${value}` : number;
  const src =
    value === 11
      ? "/images/sym/011.png"
      : value === 12
        ? "/images/sym/012.png"
        : `/images/sym/${padded}.jpg`;

  return {
    src,
    alt: "2023 training highlight",
  };
});

const stats = [
  { value: 6, suffix: "+", label: "Continents Represented", labelAr: "قارات مُمثَّلة" },
  { value: 100, suffix: "+", label: "Medical Professionals", labelAr: "من الكوادر الطبية" },
  { value: 50, suffix: "+", label: "Clinical Topics", labelAr: "موضوعاً سريرياً" },
  { value: 20, suffix: "+", label: "Countries", labelAr: "دولة" },
];

const pastTrainingTestimonials = [
  {
    id: "past-training-ali-hossain",
    src: "/new/DR%20ALI%20HOSSAIN.mp4",
    platform: "mp4" as const,
    aspect: "landscape" as const,
    autoplay: true,
    title: "Past Symposium 2025",
    titleAr: "ملتقى 2025",
    subtitle: "",
    doctor: "Past Training",
    doctorAr: "تدريب سابق",
  },
  {
    id: "past-training-grace-capital",
    src: "https://www.youtube.com/embed/WkFN4mP5-JQ",
    platform: "youtube" as const,
    aspect: "portrait" as const,
    autoplay: true,
    title: "Interview with Dr. Hongo",
    titleAr: "مقابلة مع د. هونغو",
    subtitle: "",
    doctor: "Past Training",
    doctorAr: "تدريب سابق",
  },
  {
    id: "past-training-youtube-1",
    src: "https://www.youtube.com/embed/MroTfwoPq2M",
    platform: "youtube" as const,
    aspect: "landscape" as const,
    autoplay: true,
    title: "OXYZ Doctors",
    titleAr: "أطباء OXYZ",
    subtitle: "",
    doctor: "Guest Speakers",
    doctorAr: "متحدثون ضيوف",
  },
];

function AnimatedCounter({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, value, duration]);

  return (
    <div ref={counterRef} className="text-6xl font-bold text-[#007A59] mb-2">
      {count}{suffix}
    </div>
  );
}

export default function PastTrainingsPage() {
  const { t, isAr } = useLang();
  useScrollAnimation();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handlePlayVideo = (url: string) => {
    setActiveVideo(url);
  };

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
      <main>
        {/* Hero - Enhanced */}
        <section className="relative w-full min-h-[90vh] sm:min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/past_symposium.jpg"
              alt={t("Past OXYZ training highlights", "أبرز تدريبات OXYZ السابقة")}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/15" />
          </div>

          {/* Content Container - Positioned at bottom */}
          <div className="relative z-10 flex items-end min-h-[90vh] sm:min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-20">
            <div className="max-w-4xl w-full">
              
              {/* Main Title */}
              <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
                <h1 className="font-bold leading-[1.15] text-[#CDB06A]">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    {t("Past OXYZ International", "قمم OXYZ الدولية")}
                  </span>
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                    {t("Regenerative Medicine Summits", "السابقة للطب التجديدي")}
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide">
                    {t("Building Professional Excellence Since 2023", "نبني التميّز المهني منذ 2023")}
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 max-w-2xl animate-fade-in-up opacity-0 animation-delay-400 font-light">
                {t(
                  "Doctors, clinic owners and healthcare leaders from around the world, brought together by the Global Regenerative Medicine Summit Series.",
                  "أطباء وأصحاب عيادات وقادة في الرعاية الصحية من مختلف أنحاء العالم، تجمعهم سلسلة القمم العالمية للطب التجديدي."
                )}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up opacity-0 animation-delay-600">
                <Link href={isAr ? "/ar/register" : "/register"} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-2xl shadow-[#CDB06A]/40 transition-all hover:shadow-[#CDB06A]/60 hover:scale-105"
                  >
                    {t("Register for 2026", "سجّل في قمة 2026")}
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

        {/* Introduction */}
        <section className="py-14 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-5xl font-bold text-[#007A59] mb-6 text-balance">
                  {t("Building Professional Excellence", "نبني التميّز المهني")}
                </h2>
                <p className="text-lg sm:text-2xl text-gold mb-6 sm:mb-8 leading-relaxed">
                  {t(
                    "Each OXYZ training is curated for medical depth and professional exchange, not mass attendance.",
                    "كل تدريب من تدريبات OXYZ منتقى بعناية ليقدّم عمقاً طبياً وتبادلاً مهنياً، لا حضوراً جماهيرياً."
                  )}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  {highlights.map((item, idx) => (
                    <div
                      key={item.text}
                      className={`animate-on-scroll stagger-${idx + 1} flex items-start gap-3 bg-white border border-slate-200 rounded-lg p-4 hover:border-gold/30 transition-colors`}
                    >
                      <item.icon className="h-6 w-6 text-gold flex-shrink-0" />
                      <span className="text-base sm:text-lg text-[#007A59]">
                        {isAr ? item.textAr : item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative animate-on-scroll slide-in-right scale-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/sym/about_hero.jpg"
                    alt={t("Past training", "تدريب سابق")}
                    width={600}
                    height={450}
                    className="rounded-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-14 sm:py-24 bg-white">
          <div className="w-full">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 animate-on-scroll">
                <h2 className="text-3xl sm:text-5xl font-bold text-[#007A59] mb-6">
                  {t("Training Highlights", "أبرز محطات التدريب")}
                </h2>
                <p className="text-lg sm:text-2xl text-gold">
                  {t("Moments from our past international trainings", "لحظات من تدريباتنا الدولية السابقة")}
                </p>
              </div>
            </div>

            <div className="mb-8 sm:mb-12 animate-on-scroll">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#007A59] mb-4 sm:mb-6">
                  {t("2025 International Training", "التدريب الدولي 2025")}
                </h3>
              </div>
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-10">
                <div 
                  className="group relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-neutral-950 cursor-pointer hover:border-slate-300 transition-all duration-300"
                  onClick={() => handlePlayVideo("https://www.youtube.com/embed/dkppIjFsWxM")}
                >
                  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
                    <iframe
                      src={getYouTubePreviewUrl("https://www.youtube.com/embed/dkppIjFsWxM")}
                      className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[0.68] opacity-75 group-hover:opacity-85 transition-all duration-700"
                      allow="autoplay; encrypted-media"
                      style={{ border: 0 }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#007A59]/90 text-white flex items-center justify-center shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                      <Play className="h-8 w-8 fill-white text-white ms-1" />
                    </div>
                  </div>
                </div>
              </div>
              <GalleryLoadMore
                alt={t("2025 training highlight", "من تدريب 2025")}
                images={gallery2025.map((image) => image.src)}
                initialCount={12}
              />
            </div>

            <div className="animate-on-scroll">
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[#007A59] mb-4 sm:mb-6">
                  {t("2023 International Training", "التدريب الدولي 2023")}
                </h3>
              </div>
              <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 mb-10">
                <div 
                  className="group relative aspect-video w-full rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-neutral-950 cursor-pointer hover:border-slate-300 transition-all duration-300"
                  onClick={() => handlePlayVideo("https://www.youtube.com/embed/MroTfwoPq2M")}
                >
                  <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none">
                    <iframe
                      src={getYouTubePreviewUrl("https://www.youtube.com/embed/MroTfwoPq2M")}
                      className="absolute top-1/2 left-1/2 w-[200%] h-[200%] -translate-x-1/2 -translate-y-1/2 pointer-events-none scale-[0.68] opacity-75 group-hover:opacity-85 transition-all duration-700"
                      allow="autoplay; encrypted-media"
                      style={{ border: 0 }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-[#007A59]/90 text-white flex items-center justify-center shadow-2xl scale-95 group-hover:scale-100 transition-transform duration-300">
                      <Play className="h-8 w-8 fill-white text-white ms-1" />
                    </div>
                  </div>
                </div>
              </div>
              <GalleryGrid
                alt={t("2023 training highlight", "من تدريب 2023")}
                images={gallery2023.map((image) => image.src)}
              />
            </div>
          </div>
        </section>

        {/* Global Participation */}
        <section className="py-14 sm:py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl sm:text-5xl font-bold text-[#007A59] mb-6">
                  {t("Global Participation", "مشاركة عالمية")}
                </h2>
                <p className="text-lg sm:text-2xl text-gold mb-8 leading-relaxed">
                  {t("Professionals from diverse healthcare systems and specialties.", "مهنيون من أنظمة صحية وتخصصات متنوّعة.")}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {(isAr ? regionsAr : regions).map((region, idx) => (
                    <div
                      key={region}
                      className={`animate-on-scroll stagger-${(idx % 4) + 1} flex items-center gap-3 bg-white border border-slate-200 hover:border-gold/30 transition-colors rounded-lg p-4`}
                    >
                      <Globe className="h-5 w-5 text-gold flex-shrink-0" />
                      <span className="text-base sm:text-lg text-gold">{region}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="animate-on-scroll slide-in-right">
                <h2 className="text-3xl sm:text-5xl font-bold text-[#007A59] mb-6">
                  {t("Scientific Exchange & Collaboration", "التبادل العلمي والتعاون")}
                </h2>
                <p className="text-lg sm:text-2xl text-gold mb-8 leading-relaxed">
                  {t("Responsible regenerative medicine and structured clinical practice.", "طب تجديدي مسؤول وممارسة سريرية منظّمة.")}
                </p>
                <ul className="space-y-4">
                  {(isAr ? emphasesAr : emphases).map((item, idx) => (
                    <li
                      key={item}
                      className={`animate-on-scroll stagger-${idx + 1} flex items-center gap-3 bg-gradient-to-r from-teal-dark to-teal text-white rounded-lg p-4 shadow-md`}
                    >
                      <div className="w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <span className="text-gold text-base sm:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* More Than an Event */}
        <section className="py-14 sm:py-24 bg-gradient-to-br from-teal-dark to-teal text-secondary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl sm:text-5xl font-bold text-gold mb-6 animate-on-scroll">
                {t("More Than an Event", "أكثر من مجرد فعالية")}
              </h2>
              <p className="text-lg sm:text-2xl text-gold leading-relaxed animate-on-scroll">
                {t(
                  "For many participants, the training serves as a starting point for collaboration, a platform for continued medical exchange, and a gateway into the OXYZ ecosystem.",
                  "بالنسبة لكثير من المشاركين، يشكّل التدريب نقطة انطلاق للتعاون، ومنصة لتبادل طبي مستمر، وبوابة إلى منظومة OXYZ."
                )}
              </p>
            </div>
          </div>
        </section>

        {/* Stats - With Animated Counters */}
        <section className="py-14 sm:py-24 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12 animate-on-scroll">
              <h2 className="text-3xl sm:text-5xl font-bold text-[#007A59] mb-4">
                {t("Our Impact", "أثرنا")}
              </h2>
              <p className="text-lg sm:text-2xl text-gold">
                {t("Numbers that reflect our global reach and influence", "أرقام تعكس امتدادنا وتأثيرنا العالمي")}
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className={`animate-on-scroll stagger-${index + 1} scale-in group text-center p-5 sm:p-8 bg-gradient-to-br from-slate-50 to-white rounded-2xl border-2 border-slate-100 hover:border-gold/30 transition-all hover:shadow-lg`}
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} duration={2000} />
                  <p className="text-[#007A59] text-sm sm:text-lg font-medium">{isAr ? stat.labelAr : stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InstagramReelsSection reels={pastTrainingTestimonials} />

        {/* Looking Ahead */}
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
            <div className="rounded-2xl p-6 sm:p-12 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-on-scroll">
                {t("Looking Ahead", "نظرة إلى المستقبل")}
              </h2>
              <p className="text-lg text-secondary-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed animate-on-scroll">
                {t(
                  "The 2026 Summit builds on every previous edition. Join us in Kuala Lumpur.",
                  "تبني قمة 2026 على نجاح كل النسخ السابقة. انضم إلينا في كوالالمبور."
                )}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-on-scroll scale-in">
                <Link href="/training">
                  <Button
                    size="lg"
                    className="bg-gold hover:bg-gold-dark text-white font-semibold px-8"
                  >
                    {t("Explore Summit 2026", "اكتشف قمة 2026")}
                    <ArrowRight className="ms-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href={isAr ? "/ar/register" : "/register"}>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-semibold px-8 bg-transparent"
                  >
                    {t("Register Now", "سجّل الآن")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Quote */}
        <section className="py-8 sm:py-12 bg-gradient-to-b from-slate-50 to-white border-t border-border">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-muted-foreground italic text-base sm:text-lg animate-on-scroll">
              {t(
                "“OXYZ trainings are built on alignment, professionalism, and long-term impact.”",
                "«تقوم تدريبات OXYZ على التوافق والاحترافية والأثر طويل الأمد.»"
              )}
            </p>
          </div>
        </section>
      </main>

      {/* Premium Video Popup Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setActiveVideo(null)}
        >
          <div className="relative max-w-4xl w-full bg-black rounded-2xl overflow-hidden shadow-2xl border border-neutral-800" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/65 text-white hover:text-white/80 flex items-center justify-center transition-colors"
              aria-label={t("Close video player", "إغلاق مشغّل الفيديو")}
            >
              <X className="h-5 w-5" />
            </button>
            <div className="aspect-video w-full bg-black">
              <iframe
                src={getYouTubeEmbedUrl(activeVideo)}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
