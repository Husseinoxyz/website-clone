"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
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

// Animated Counter Component
function AnimatedCounter({ value, suffix = "", duration = 2000 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);

            const startTime = Date.now();
            const endTime = startTime + duration;

            const updateCounter = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / duration, 1);

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(easeOutQuart * value);

              setCount(currentCount);

              if (progress < 1) {
                requestAnimationFrame(updateCounter);
              } else {
                setCount(value);
              }
            };

            requestAnimationFrame(updateCounter);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div ref={counterRef}>
      <p className="text-3xl font-bold text-[#007A59]">
        {count}{suffix}
      </p>
    </div>
  );
}

const galleryImages = [
  {
    src: "/images/sym/home_g_1.jpg",
    alt: "International doctors at training",
    altAr: "أطباء من دول مختلفة خلال التدريب",
  },
  {
    src: "/images/sym/home_g_2.jpg",
    alt: "Clinical discussion session",
    altAr: "جلسة نقاش سريري",
  },
  {
    src: "/images/sym/home_g_3.jpg",
    alt: "Professional networking event",
    altAr: "لقاء للتواصل المهني",
  },
  {
    src: "/images/sym/home_g_4.jpg",
    alt: "Medical presentation",
    altAr: "عرض طبي",
  },
  {
    src: "/images/sym/home_g_5.jpg",
    alt: "Strategic collaboration meeting",
    altAr: "اجتماع للتعاون الاستراتيجي",
  },
  {
    src: "/images/sym/home_g_6.jpg",
    alt: "Training attendees",
    altAr: "المشاركون في التدريب",
  },
  {
    src: "/images/sym/home_g_7.jpg",
    alt: "Conference networking moment",
    altAr: "لحظة تواصل خلال المؤتمر",
  },
  {
    src: "/images/sym/home_g_8.jpg",
    alt: "Clinical workshop session",
    altAr: "ورشة عمل سريرية",
  },
  {
    src: "/images/sym/home_g_9.jpg",
    alt: "Panel discussion",
    altAr: "جلسة حوارية",
  },
];

export function GallerySection() {
  const { t, isAr } = useLang();
  useScrollAnimation();

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
    altAr: string;
  } | null>(null);

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

        .scale-in {
          transform: scale(0.95);
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

      <section className="py-14 sm:py-24 bg-gradient-to-b from-[#FAF6ED] via-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 animate-on-scroll">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-6 text-balance">
              {t("Past International Training Highlights", "أبرز محطات التدريبات الدولية السابقة")}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              {t(
                "The OXYZ International Stem Cell Training Series brings together doctors, clinic owners and healthcare leaders from around the world.",
                "تجمع سلسلة تدريبات OXYZ الدولية للخلايا الجذعية أطباء وأصحاب عيادات وقادة في الرعاية الصحية من مختلف أنحاء العالم."
              )}
            </p>
          </div>

          {/* Gallery Grid (Styled as separated rounded banners) */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8 mb-10 sm:mb-16 animate-on-scroll">
            {galleryImages.map((image, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(image)}
                className={`${index === galleryImages.length - 1 && galleryImages.length % 2 === 1 ? "hidden md:block " : ""}relative overflow-hidden group focus:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-xl sm:rounded-[24px] border border-slate-200/80 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={isAr ? image.altAr : image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white bg-[#007A59]/90 text-xs font-bold px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 uppercase tracking-wider">
                      {t("View Highlight", "عرض الصورة")}
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Participants Info */}
          <div className="bg-white border border-[#CDB06A]/30 rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 shadow-xl animate-on-scroll">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="animate-on-scroll stagger-1 scale-in">
                <AnimatedCounter value={6} suffix="+" duration={2000} />
                <p className="text-slate-600 mt-2 font-medium">{t("Continents Represented", "قارات مُمثَّلة")}</p>
              </div>
              <div className="animate-on-scroll stagger-2 scale-in">
                <AnimatedCounter value={100} suffix="+" duration={2000} />
                <p className="text-slate-600 mt-2 font-medium">{t("Medical Professionals", "من الكوادر الطبية")}</p>
              </div>
              <div className="animate-on-scroll stagger-3 scale-in">
                <AnimatedCounter value={50} suffix="+" duration={2000} />
                <p className="text-slate-600 mt-2 font-medium">{t("Clinical Topics Covered", "موضوعاً سريرياً")}</p>
              </div>
              <div className="animate-on-scroll stagger-4 scale-in">
                <AnimatedCounter value={20} suffix="+" duration={2000} />
                <p className="text-slate-600 mt-2 font-medium">{t("Countries Attended", "دولة مشاركة")}</p>
              </div>
            </div>
          </div>

          <div className="text-center animate-on-scroll">
            <Link href="/past-trainings">
              <Button
                size="lg"
                className="bg-[#CDB06A] hover:bg-[#B8964A] text-white font-semibold shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                {t("View More Past Event Highlights", "شاهد المزيد من الفعاليات السابقة")}
                <ArrowRight className="ms-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {selectedImage ? (
          <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-label={isAr ? selectedImage.altAr : selectedImage.alt}
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-5xl w-full">
              <button
                type="button"
                className="absolute -top-12 right-0 text-white hover:text-gold"
                onClick={() => setSelectedImage(null)}
                aria-label={t("Close image", "إغلاق الصورة")}
              >
                <X className="h-6 w-6" />
              </button>
              <div className="relative w-full aspect-[4/3] bg-black">
                <Image
                  src={selectedImage.src}
                  alt={isAr ? selectedImage.altAr : selectedImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </>
  );
}
