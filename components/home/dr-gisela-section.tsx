"use client";

import Image from "next/image";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useLang } from "@/lib/i18n";

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

export function DrGiselaSection() {
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
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
      `}</style>

      <section className="py-14 sm:py-20 lg:py-32 bg-gradient-to-b from-white via-[#FAF6ED]/30 to-white overflow-hidden border-b border-slate-100 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mobile Title (Only visible on sm/md, hidden on lg) */}
          <div className="lg:hidden animate-on-scroll mb-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#CDB06A]/10 text-[#CDB06A] font-bold text-sm tracking-widest uppercase mb-6 border border-[#CDB06A]/20">
              {t("Meet one of our Primary speakers", "تعرّف على إحدى المتحدثات الرئيسيات")}
            </span>
            <div className="flex flex-wrap items-center gap-4 mt-1">
              <h2 className="text-4xl sm:text-5xl font-extrabold text-[#007A59] leading-tight">
                {t("Meet Dr. Gisele", "تعرّف على د. جيزيل")}
              </h2>
              <div className="flex items-center gap-2.5 bg-[#007A59]/10 text-[#007A59] px-4 py-2 rounded-full border border-[#007A59]/20 font-bold shadow-sm">
                <img src="https://flagcdn.com/w40/br.png" alt="" width="28" height="20" className="rounded-[2px] shadow-sm" />
                <span className="text-sm uppercase tracking-widest">{t("Brazil", "البرازيل")}</span>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left Content (Text + Button on Mobile. Title + Text + Button on PC) */}
            <div className="order-2 lg:order-1 animate-on-scroll">
              {/* Desktop Title (Hidden on mobile, visible on lg) */}
              <div className="hidden lg:block">
                <span className="inline-block px-4 py-1.5 rounded-full bg-[#CDB06A]/10 text-[#CDB06A] font-bold text-sm tracking-widest uppercase mb-6 border border-[#CDB06A]/20">
                  {t("Meet one of our Primary speakers", "تعرّف على إحدى المتحدثات الرئيسيات")}
                </span>
                <div className="flex flex-wrap items-center gap-4 mb-6 mt-1">
                  <h2 className="text-4xl sm:text-5xl font-extrabold text-[#007A59] leading-tight">
                    {t("Meet Dr. Gisele", "تعرّف على د. جيزيل")}
                  </h2>
                  <div className="flex items-center gap-2.5 bg-[#007A59]/10 text-[#007A59] px-4 py-2 rounded-full border border-[#007A59]/20 font-bold shadow-sm">
                    <img src="https://flagcdn.com/w40/br.png" alt="" width="28" height="20" className="rounded-[2px] shadow-sm" />
                    <span className="text-sm uppercase tracking-widest">{t("Brazil", "البرازيل")}</span>
                  </div>
                </div>
              </div>

              <p className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed lg:mt-0 mt-4">
                {t(
                  "Pioneering the future of regenerative medicine and aesthetic clinical applications. With international expertise and a commitment to excellence, Dr. Gisele brings advanced biological medicine protocols directly to your practice.",
                  "رائدة في مستقبل الطب التجديدي وتطبيقاته السريرية التجميلية. بخبرتها الدولية والتزامها بالتميّز، تنقل د. جيزيل بروتوكولات الطب البيولوجي المتقدّمة مباشرةً إلى ممارستك."
                )}
              </p>
              
              <Link href={isAr ? "/ar/register" : "/register"}>
                <Button 
                  size="lg"
                  className="bg-[#CDB06A] hover:bg-[#B8964A] text-white font-semibold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 rounded-full px-8 py-6 text-lg"
                >
                  {t("Join the Program", "انضم إلى البرنامج")}
                  <ArrowRight className="ms-2 h-6 w-6" />
                </Button>
              </Link>
            </div>

            {/* Right Images (Creative 3-image layout) */}
            <div className="order-1 lg:order-2 relative h-[360px] sm:h-[600px] w-full animate-on-scroll delay-200 mt-2 lg:mt-0">
              {/* Decorative Background blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#E6F3EF] rounded-full blur-[100px] opacity-60 -z-10" />

              {/* Main large image */}
              <div className="absolute right-0 top-0 w-3/4 h-[75%] rounded-[32px] overflow-hidden shadow-2xl border-4 border-white z-10 transition-transform duration-700 hover:scale-[1.02]">
                <Image
                  src="/images/Dr%20Gisele%20p2.png"
                  alt={t("Dr. Gisele professional profile", "الملف المهني لـ د. جيزيل")}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  unoptimized
                />
              </div>

              {/* Bottom left smaller image */}
              <div className="absolute left-0 bottom-4 w-1/2 h-[45%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white z-30 transition-transform duration-700 hover:scale-105">
                <Image
                  src="/images/Dr%20Gisele%20P1.png"
                  alt={t("Dr. Gisele clinical work", "د. جيزيل خلال عملها السريري")}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
              </div>

              {/* Bottom right smaller image */}
              <div className="absolute right-8 bottom-[-20px] w-[40%] h-[40%] rounded-[24px] overflow-hidden shadow-2xl border-4 border-white z-20 transition-transform duration-700 hover:scale-105">
                <Image
                  src="/images/Dr%20Gisele%20p3.png"
                  alt={t("Dr. Gisele portrait", "صورة د. جيزيل")}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  unoptimized
                />
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}
