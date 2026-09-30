"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, ArrowUpRight } from "lucide-react"
import { useLang } from "@/lib/i18n"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

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

export default function BusinessEnquiriesPage() {
  const { t, isAr } = useLang()
  useScrollAnimation()

  const handleActionClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/6586163762?text=${encodedMessage}`, "_blank", "noopener,noreferrer")
  }

  return (
    <div className={`min-h-screen flex flex-col ${isAr ? "" : poppins.className}`}>
      <style jsx global>{`
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(40px) scale(0.97);
          transition: opacity 1.2s cubic-bezier(0.16, 1, 0.3, 1), transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: opacity, transform;
        }

        .animate-on-scroll.animated {
          opacity: 1;
          transform: translateY(0) scale(1);
        }

        .animate-image {
          transform: scale(1.15);
          transition: transform 2s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform;
        }
        
        .animate-on-scroll.animated .animate-image,
        .animate-on-scroll.animated.animate-image,
        .animated.animate-image {
          transform: scale(1);
        }
      `}</style>

      <Header />

      <main className="flex-1 bg-[#FAFAFA] text-slate-800">
        
        {/* HERO SECTION */}
        <section className="relative w-full min-h-[60vh] sm:min-h-[65vh] flex items-center pt-28 pb-12 sm:pt-32 sm:pb-16">
          <div className="absolute inset-0 animate-on-scroll overflow-hidden">
            <Image
              src="/images/Collobration.jpg"
              alt={t("OXYZ Global Regenerative Medicine Summit 2026", "القمة العالمية للطب التجديدي 2026 من OXYZ")}
              fill
              priority
              sizes="100vw"
              className="object-cover animate-image"
            />
            {/* Elegant dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
          </div>

          <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white flex flex-col items-center text-center">
            <div className="max-w-5xl animate-on-scroll flex flex-col items-center">
              <h2 className="text-sm md:text-base font-semibold tracking-[0.2em] text-[#D4AF37] mb-4 uppercase">
                {t("Business & Partnership", "الأعمال والشراكات")}
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 sm:mb-6 text-white max-w-5xl">
                {t("Build More Than Knowledge.", "لا تكتفِ بالمعرفة.")} <br className="hidden md:block" />
                <span className="text-[#D4AF37]">{t("Build the Future of Your Practice.", "ابنِ مستقبل ممارستك.")}</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                {t(
                  "Your gateway into an international ecosystem where healthcare professionals learn, collaborate and grow.",
                  "بوابتك إلى منظومة دولية يتعلّم فيها المهنيون الصحيون ويتعاونون وينمون."
                )}
              </p>
              
              <div className="flex justify-center w-full">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#007A59] hover:bg-[#005c43] text-white font-semibold px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg rounded-full transition-all shadow-xl shadow-[#007A59]/20 hover:scale-105"
                  onClick={() => {
                    document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  {t("Explore Pathways", "استكشف المسارات")}
                  <ArrowRight className="ms-3 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* WHY BUILD WITH OXYZ */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 animate-on-scroll overflow-hidden">
            <Image
              src="/images/sym/07.jpg"
              alt=""
              fill
              className="object-cover animate-image"
            />
            {/* Light overlays for readability */}
            <div className="absolute inset-0 bg-white/10" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent" />
          </div>

          <div className="pt-14 sm:pt-24 pb-14 sm:pb-24 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center animate-on-scroll">
                <div className="lg:ps-10 xl:ps-16">
                  <div className="mb-6">
                    <h3 className="inline-block bg-[#D4AF37] text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-[0.15em] text-sm md:text-base shadow-sm">
                      {t("Why Build With OXYZ?", "لماذا تبني مع OXYZ؟")}
                    </h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#007A59] leading-tight">
                    {t("Education Alone Doesn’t Transform Healthcare.", "التعليم وحده لا يغيّر الرعاية الصحية.")} <br />
                    <span className="text-[#D4AF37]">{t("Implementation Does.", "التطبيق هو ما يغيّرها.")}</span>
                  </h2>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-10 rounded-3xl shadow-2xl ring-1 ring-slate-900/5">
                  <div className="text-slate-900 leading-relaxed text-base sm:text-lg space-y-4 sm:space-y-6">
                    <p>
                      <strong className="text-[#007A59] font-medium">{t("Scientific knowledge is only the first step.", "المعرفة العلمية ليست سوى الخطوة الأولى.")}</strong>{" "}
                      {t(
                        "OXYZ International connects education with real-world implementation: evidence-informed protocols, advanced regenerative technologies and long-term business support.",
                        "تربط OXYZ الدولية التعليم بالتطبيق الفعلي: بروتوكولات قائمة على الأدلة، وتقنيات تجديدية متقدّمة، ودعم طويل الأمد للأعمال."
                      )}
                    </p>
                    <div className="h-px w-16 bg-[#D4AF37]/30" />
                    <p>
                      {t(
                        "We stay with our partners beyond the symposium, helping them build successful regenerative medicine practices.",
                        "نبقى إلى جانب شركائنا بعد انتهاء الملتقى، ونساعدهم على بناء ممارسات ناجحة في الطب التجديدي."
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[#FAFAFA] pb-8 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 animate-on-scroll -mt-8 sm:-mt-12">
              {[
                { title: t("International Medical Education", "تعليم طبي دولي"), desc: t("Learn from recognised experts in regenerative, biological and precision medicine.", "تعلّم على يد خبراء معترف بهم في الطب التجديدي والبيولوجي والطب الدقيق.") },
                { title: t("Clinical Implementation", "التطبيق السريري"), desc: t("Protocols and resources to bring regenerative medicine into daily practice.", "بروتوكولات وموارد لإدخال الطب التجديدي إلى ممارستك اليومية.") },
                { title: t("Business Development", "تطوير الأعمال"), desc: t("Strategic business support and partnership opportunities.", "دعم استراتيجي للأعمال وفرص للشراكة.") },
                { title: t("International Ecosystem", "منظومة دولية"), desc: t("A growing international community of doctors, clinics and partners.", "مجتمع دولي متنامٍ من الأطباء والعيادات والشركاء.") }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#FAFAFA] border border-slate-100 p-6 sm:p-8 rounded-2xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#007A59]/10 rounded-full flex items-center justify-center mb-4 sm:mb-6">
                    <CheckCircle className="text-[#007A59] w-7 h-7" />
                  </div>
                  <h4 className="font-semibold text-slate-900 text-lg mb-2 sm:mb-4">{item.title}</h4>
                  <p className="text-slate-900 text-[15px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          </div>
          {/* BUSINESS TALK VIDEO */}
          <div className="bg-[#FAFAFA] pb-10 sm:pb-16 pt-6 sm:pt-8 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 animate-on-scroll">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-white flex flex-col lg:flex-row">
                <div className="p-6 sm:p-10 lg:p-16 flex flex-col justify-center lg:w-1/2 order-2 lg:order-1">
                  <div className="self-start px-4 py-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B5952F] text-white font-semibold rounded-full text-xs mb-6 uppercase tracking-widest shadow-md">
                    {t("Vision & Strategy", "الرؤية والاستراتيجية")}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                    {t("Redefining The Future Of Healthcare.", "نُعيد تعريف مستقبل الرعاية الصحية.")}
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    {t("Our leadership on regenerative medicine and the global OXYZ network.", "قيادتنا تتحدث عن الطب التجديدي وشبكة OXYZ العالمية.")}
                  </p>
                  <Button 
                    className="bg-[#007A59] hover:bg-[#005c43] text-white rounded-full px-8 py-6 w-fit font-semibold"
                    onClick={() => document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    {t("Explore Pathways", "استكشف المسارات")}
                    <ArrowRight className="ms-2 h-5 w-5" />
                  </Button>
                </div>
                <div className="lg:w-1/2 order-1 lg:order-2 flex items-center justify-center p-4 sm:p-8 lg:p-12 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#007A59]/5 to-transparent"></div>
                  <div className="relative w-full max-w-[460px] aspect-square rounded-[2rem] overflow-hidden shadow-2xl shadow-[#007A59]/20 border-[6px] border-white z-10 bg-slate-100">
                    <video
                      src="/images/tesimonials/Business talk-music.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      controls
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* PARTNERSHIP PATHWAYS */}
        <section id="pathways" className="pt-8 pb-12 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20 animate-on-scroll">
              <h3 className="text-[#D4AF37] font-semibold uppercase tracking-wider mb-3 text-sm">
                {t("Partnership Pathways", "مسارات الشراكة")}
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold text-[#007A59] mb-4 sm:mb-6">
                {t("Choose the Pathway That Matches Your Vision.", "اختر المسار الذي يناسب رؤيتك.")}
              </h2>
              <p className="text-base sm:text-lg text-slate-900">
                {t(
                  "Every partnership starts as an Executive Delegate. From there you can become a Strategic Partner or a Centre of Excellence.",
                  "تبدأ كل شراكة بالانضمام كمندوب تنفيذي، ومن هناك يمكنك أن تصبح شريكاً استراتيجياً أو مركز تميّز."
                )}
              </p>
            </div>

            <div className="space-y-6 sm:space-y-12">
              
              {/* EXECUTIVE DELEGATE */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden animate-on-scroll flex flex-col">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[200px] sm:min-h-[300px] lg:h-auto w-full overflow-hidden">
                    <Image src="/images/sym/slide_1.jpg" alt={t("Executive Delegate", "المندوب التنفيذي")} fill className="object-cover animate-image" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 lg:py-16 flex flex-col justify-center">
                    <div className="self-start px-4 py-1.5 bg-[#007A59] text-white font-semibold rounded-full text-xs mb-4 uppercase tracking-widest shadow-sm">
                      {t("Learn", "تعلّم")}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-2">{t("EXECUTIVE DELEGATE", "المندوب التنفيذي")}</h3>
                    <h4 className="text-lg sm:text-xl font-medium text-[#007A59] mb-4 sm:mb-6">{t("Attend the Summit. Build Your Foundation.", "احضر القمة. وابنِ أساسك.")}</h4>
                    <p className="text-slate-900 text-[15px] leading-relaxed">
                      {t(
                        "Designed for healthcare professionals seeking world-class education, international networking and practical clinical knowledge.",
                        "مصمَّم للمهنيين الصحيين الباحثين عن تعليم بمستوى عالمي وتواصل دولي ومعرفة سريرية عملية."
                      )}
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 sm:p-8 lg:p-12 border-t border-slate-100 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-4">
                    <h5 className="font-semibold text-[#007A59] mb-4">{t("Perfect For:", "مثالي لـ:")}</h5>
                    <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-slate-900 text-[15px]">
                      <li>• {t("Medical Doctors", "الأطباء")}</li>
                      <li>• {t("Specialists", "الأخصائيون")}</li>
                      <li>• {t("Dentists", "أطباء الأسنان")}</li>
                      <li>• {t("Pharmacists", "الصيادلة")}</li>
                      <li>• {t("Allied Healthcare Professionals", "المهن الصحية المساندة")}</li>
                      <li>• {t("Healthcare Entrepreneurs", "روّاد الأعمال في القطاع الصحي")}</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-8">
                    <h5 className="font-semibold text-[#007A59] mb-4">{t("Includes:", "تشمل:")}</h5>
                    <ul className="grid sm:grid-cols-2 gap-3 text-slate-900 text-[15px] mb-8">
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> {t("Five-day symposium", "ملتقى لمدة خمسة أيام")}</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> {t("Certification", "شهادة")}</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> {t("Clinic immersion", "تجربة ميدانية داخل العيادة")}</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> {t("Hands-on workshops", "ورش عمل تطبيقية")}</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> {t("Clinical demos", "عروض سريرية")}</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> {t("Int. networking", "تواصل دولي")}</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> {t("Faculty discussions", "نقاشات مع المحاضرين")}</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> {t("Business networking", "تواصل في مجال الأعمال")}</li>
                    </ul>
                    <Button
                      className="bg-[#007A59] hover:bg-[#005c43] text-white rounded-full px-6 py-5 w-full sm:w-auto"
                      onClick={() => handleActionClick(t("Hello, I would like to become an Executive Delegate for the OXYZ Global Regenerative Medicine Summit.", "مرحباً، أرغب في الانضمام كمندوب تنفيذي في القمة العالمية للطب التجديدي من OXYZ."))}
                    >
                      {t("Become an Executive Delegate", "انضم كمندوب تنفيذي")}
                      <ArrowUpRight className="ms-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* STRATEGIC PARTNER */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden animate-on-scroll flex flex-col">
                <div className="grid lg:grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-12 lg:py-16 flex flex-col justify-center order-2 lg:order-1">
                    <div className="self-start px-4 py-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B5952F] text-white font-semibold rounded-full text-xs mb-4 uppercase tracking-widest shadow-md">
                      {t("Collaborate", "تعاوَن")}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-2">{t("STRATEGIC PARTNER", "الشريك الاستراتيجي")}</h3>
                    <h4 className="text-lg sm:text-xl font-medium text-[#007A59] mb-4 sm:mb-6">{t("Transform Knowledge Into Clinical Growth.", "حوّل المعرفة إلى نمو سريري.")}</h4>
                    <div className="space-y-4 text-slate-900 text-[15px] leading-relaxed">
                      <p>{t("For professionals ready to implement regenerative medicine in their own practice, with personalised guidance, clinical support and ongoing collaboration.", "للمهنيين المستعدين لتطبيق الطب التجديدي في ممارستهم، مع إرشاد شخصي ودعم سريري وتعاون مستمر.")}</p>
                    </div>
                  </div>
                  <div className="relative min-h-[200px] sm:min-h-[300px] lg:h-auto w-full order-1 lg:order-2 overflow-hidden">
                    <Image src="/images/Collobration.jpg" alt={t("Strategic Partner", "الشريك الاستراتيجي")} fill className="object-cover animate-image" />
                  </div>
                </div>
                
                <div className="bg-[#FAFAFA] p-6 sm:p-8 lg:p-12 border-t border-slate-100 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-4">
                    <h5 className="font-semibold text-[#007A59] mb-4">{t("Best For:", "الأنسب لـ:")}</h5>
                    <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-slate-900 text-[15px]">
                      <li>• {t("Medical Doctors", "الأطباء")}</li>
                      <li>• {t("Specialists", "الأخصائيون")}</li>
                      <li>• {t("Clinic Owners", "أصحاب العيادات")}</li>
                      <li>• {t("Integrative Medicine Physicians", "أطباء الطب التكاملي")}</li>
                      <li>• {t("Anti-Ageing Physicians", "أطباء مكافحة الشيخوخة")}</li>
                      <li>• {t("Medical Entrepreneurs", "روّاد الأعمال الطبية")}</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="font-semibold text-[#007A59] mb-6">{t("What’s Included:", "ما يشمله المسار:")}<br /><span className="text-[#D4AF37] font-medium text-sm">{t("Everything Included in Executive Delegate, Plus...", "كل ما يشمله مسار المندوب التنفيذي، بالإضافة إلى...")}</span></p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> {t("Clinical Starter Suite", "حزمة البداية السريرية")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("A curated starter inventory for regenerative solutions.", "مخزون أوّلي منتقى من الحلول التجديدية.")}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> {t("Personal Assessment", "تقييم شخصي")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("1-to-1 consultation to evaluate your current practice.", "استشارة فردية لتقييم ممارستك الحالية.")}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> {t("Protocol Integration", "دمج البروتوكولات")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("Guidance on successfully integrating regenerative protocols.", "إرشاد لدمج البروتوكولات التجديدية بنجاح.")}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> {t("Official Recognition", "اعتراف رسمي")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("Become part of the Strategic Partner Network.", "انضم إلى شبكة الشركاء الاستراتيجيين.")}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> {t("Business Support", "دعم الأعمال")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("Marketing guidance and strategic growth support.", "إرشاد تسويقي ودعم استراتيجي للنمو.")}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> {t("Professional Dev", "التطوير المهني")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("Priority invitations to advanced training programmes.", "دعوات بأولوية لبرامج التدريب المتقدّمة.")}</p>
                      </div>
                    </div>
                    <Button
                      className="bg-[#007A59] hover:bg-[#005c43] text-white rounded-full px-6 py-5 w-full sm:w-auto"
                      onClick={() => handleActionClick(t("Hello, I would like to speak with an advisor about becoming a Strategic Partner.", "مرحباً، أرغب في التحدث مع أحد المستشارين حول الانضمام كشريك استراتيجي."))}
                    >
                      {t("Speak With A Strategic Advisor", "تحدّث مع مستشار استراتيجي")}
                      <ArrowRight className="ms-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* CENTRE OF EXCELLENCE */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden animate-on-scroll flex flex-col">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[200px] sm:min-h-[300px] lg:h-auto w-full overflow-hidden">
                    <Image src="/images/sym/home_g_1.jpg" alt={t("Centre of Excellence", "مركز التميّز")} fill className="object-cover animate-image" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 lg:py-16 flex flex-col justify-center">
                    <div className="self-start px-4 py-1.5 bg-slate-800 text-white font-semibold rounded-full text-xs mb-4 uppercase tracking-widest">
                      {t("Lead", "قُد")}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-2">{t("CENTRE OF EXCELLENCE", "مركز التميّز")}</h3>
                    <h4 className="text-lg sm:text-xl font-medium text-[#007A59] mb-4 sm:mb-6">{t("Build A Regional Leader In Regenerative Medicine.", "ابنِ مركزاً إقليمياً رائداً في الطب التجديدي.")}</h4>
                    <div className="space-y-4 text-slate-900 text-[15px] leading-relaxed">
                      <p>{t("Our highest level of partnership. For established clinics, hospitals and healthcare organisations building a recognised regenerative medicine centre.", "أعلى مستويات الشراكة لدينا، للعيادات والمستشفيات والمؤسسات الصحية الراسخة التي تبني مركزاً معترفاً به في الطب التجديدي.")}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 sm:p-8 lg:p-12 border-t border-slate-100 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-4">
                    <h5 className="font-semibold text-[#007A59] mb-4">{t("Best For:", "الأنسب لـ:")}</h5>
                    <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-slate-900 text-[15px]">
                      <li>• {t("Medical Centres", "المراكز الطبية")}</li>
                      <li>• {t("Specialist Clinics", "العيادات التخصصية")}</li>
                      <li>• {t("Hospital Groups", "مجموعات المستشفيات")}</li>
                      <li>• {t("Healthcare Investors", "المستثمرون في الرعاية الصحية")}</li>
                      <li>• {t("Wellness Hospitals", "مستشفيات العافية")}</li>
                      <li>• {t("Academic Institutions", "المؤسسات الأكاديمية")}</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="font-semibold text-[#007A59] mb-6">{t("What’s Included:", "ما يشمله المسار:")}<br /><span className="text-slate-800 font-medium text-sm">{t("Everything Included in Strategic Partner, Plus...", "كل ما يشمله مسار الشريك الاستراتيجي، بالإضافة إلى...")}</span></p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> {t("Advanced Technology", "تقنيات متقدّمة")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("Implementation support for advanced diagnostic systems.", "دعم لتطبيق أنظمة التشخيص المتقدّمة.")}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> {t("Clinical Inventory", "مخزون سريري")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("Expanded regenerative medicine solutions.", "مجموعة موسّعة من حلول الطب التجديدي.")}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> {t("Leadership Strategy", "استراتيجية القيادة")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("Private executive consultation for regional expansion.", "استشارة تنفيذية خاصة للتوسّع الإقليمي.")}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> {t("Staff Training", "تدريب الفريق")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("Structured training programmes for your clinical team.", "برامج تدريب منظّمة لفريقك السريري.")}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> {t("Official Recognition", "اعتراف رسمي")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("Establish as a recognised regional reference centre.", "رسّخ مكانتك كمركز مرجعي إقليمي معترف به.")}</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> {t("Future Innovation", "ابتكارات المستقبل")}</strong>
                        <p className="ps-6 text-sm text-slate-900 mt-1">{t("Priority access to new technologies.", "وصول بأولوية إلى التقنيات الجديدة.")}</p>
                      </div>
                    </div>
                    <Button
                      className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-5 w-full sm:w-auto"
                      onClick={() => handleActionClick(t("Hello, I would like to request a private consultation to establish a Centre of Excellence.", "مرحباً، أرغب في طلب استشارة خاصة لتأسيس مركز تميّز."))}
                    >
                      {t("Request A Private Consultation", "اطلب استشارة خاصة")}
                      <ArrowRight className="ms-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* COMPARE PATHWAYS */}
        <section className="py-10 sm:py-12 bg-white border-t border-slate-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 animate-on-scroll">
              <h2 className="text-3xl font-bold text-[#007A59] mb-4">
                {t("Compare the Pathways", "قارن بين المسارات")}
              </h2>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-slate-200 animate-on-scroll">
              <table className="w-full text-start border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#FAFAFA]">
                    <th className="p-2 py-4 md:p-5 font-semibold text-[#007A59] border-b border-slate-200 md:min-w-[200px]">{t("Feature", "الميزة")}</th>
                    <th className="p-2 py-4 md:p-5 font-semibold text-[#007A59] border-b border-slate-200 text-center">{t("Delegate", "المندوب")}</th>
                    <th className="p-2 py-4 md:p-5 font-semibold text-[#D4AF37] border-b border-slate-200 text-center">{t("Partner", "الشريك")}</th>
                    <th className="p-2 py-4 md:p-5 font-semibold text-slate-800 border-b border-slate-200 text-center">{t("Excellence", "التميّز")}</th>
                  </tr>
                </thead>
                <tbody className="text-slate-900">
                  {[
                    { label: t("Full Summit Experience", "تجربة القمة كاملة"), ed: "✓", sp: "✓", coe: "✓" },
                    { label: t("International Certification", "شهادة دولية"), ed: "✓", sp: "✓", coe: "✓" },
                    { label: t("Medical Centre Immersion", "تجربة ميدانية في مركز طبي"), ed: "✓", sp: "✓", coe: "✓" },
                    { label: t("Clinical Starter Suite", "حزمة البداية السريرية"), ed: "✕", sp: "✓", coe: "✓" },
                    { label: t("Private Clinical Consultation", "استشارة سريرية خاصة"), ed: "✕", sp: "✓", coe: "✓" },
                    { label: t("Business Development Support", "دعم تطوير الأعمال"), ed: "✕", sp: "✓", coe: "✓" },
                    { label: t("Advanced Clinical Technology", "تقنيات سريرية متقدّمة"), ed: "✕", "sp": "✕", coe: "✓" },
                    { label: t("Staff Training & Integration", "تدريب الفريق ودمجه"), ed: "✕", "sp": "✕", coe: "✓" },
                    { label: t("Executive Growth Strategy", "استراتيجية النمو التنفيذية"), ed: "✕", "sp": "✕", coe: "✓" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-2 py-3 md:p-4 pe-1">{row.label}</td>
                      <td className="p-2 py-3 md:p-4 text-center">{row.ed}</td>
                      <td className="p-2 py-3 md:p-4 text-center text-[#D4AF37]">{row.sp}</td>
                      <td className="p-2 py-3 md:p-4 text-center font-medium">{row.coe}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>


        {/* READY TO TAKE THE NEXT STEP? */}
        <section className="py-14 sm:py-24 relative overflow-hidden bg-white">
          <div className="absolute inset-0 animate-on-scroll overflow-hidden">
            <Image
              src="/images/world-map.jpg"
              alt=""
              fill
              className="object-cover opacity-10 animate-image"
              sizes="100vw"
            />
            {/* Very light gradient over the map to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/90" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              <div className="animate-on-scroll">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6">
                  {t("Ready to Take the Next Step?", "هل أنت مستعد للخطوة التالية؟")}
                </h2>
                <div className="text-slate-600 text-base sm:text-lg font-light mb-8 sm:mb-10 leading-relaxed space-y-4">
                  <p className="font-medium text-[#007A59]">{t("Every successful partnership begins with a conversation.", "كل شراكة ناجحة تبدأ بحوار.")}</p>
                  <p>{t("Our International Advisory Team will learn about your goals and recommend the right pathway for you.", "سيتعرّف فريقنا الاستشاري الدولي على أهدافك ويرشّح لك المسار الأنسب.")}</p>
                </div>
                
                <div className="space-y-6">
                  <a href="mailto:global@oxyzhealth.com" className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                      <Mail className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="text-lg font-medium">global@oxyzhealth.com</span>
                  </a>
                  <a href="https://wa.me/6586163762" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-600 hover:text-slate-900 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                      <Phone className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <span className="text-lg font-medium">{t("WhatsApp:", "واتساب:")} <span dir="ltr">+65 8616 3762</span></span>
                  </a>
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                      <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="flex items-center flex-wrap gap-2 text-lg font-medium">
                      <span className="flex items-center gap-2">
                        <img src="https://flagcdn.com/w40/us.png" alt="" className="w-5 h-auto rounded-[2px] shadow-sm" />
                        {t("USA", "الولايات المتحدة")}
                      </span>
                      <span className="text-slate-300 text-sm mx-1">•</span>
                      <span className="flex items-center gap-2">
                        <img src="https://flagcdn.com/w40/sg.png" alt="" className="w-5 h-auto rounded-[2px] shadow-sm" />
                        {t("Singapore", "سنغافورة")}
                      </span>
                      <span className="text-slate-300 text-sm mx-1">•</span>
                      <span className="flex items-center gap-2">
                        <img src="https://flagcdn.com/w40/my.png" alt="" className="w-5 h-auto rounded-[2px] shadow-sm" />
                        {t("Malaysia", "ماليزيا")}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 sm:mb-8">{t("Select Your Pathway", "اختر مسارك")}</h3>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-white hover:bg-slate-50 text-slate-900 font-semibold px-6 py-7 border border-slate-300 justify-between group"
                    onClick={() => handleActionClick(t("Hello, I would like to become an Executive Delegate for the OXYZ Global Regenerative Medicine Summit.", "مرحباً، أرغب في الانضمام كمندوب تنفيذي في القمة العالمية للطب التجديدي من OXYZ."))}
                  >
                    {t("Become an Executive Delegate", "انضم كمندوب تنفيذي")}
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    className="w-full bg-[#D4AF37] hover:bg-[#B8964A] text-white font-semibold px-6 py-7 border-none justify-between group"
                    onClick={() => handleActionClick(t("Hello, I would like to speak with an advisor about becoming a Strategic Partner.", "مرحباً، أرغب في التحدث مع أحد المستشارين حول الانضمام كشريك استراتيجي."))}
                  >
                    {t("Become a Strategic Partner", "انضم كشريك استراتيجي")}
                    <ArrowRight className="h-5 w-5 text-white/80 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    className="w-full bg-[#007A59] hover:bg-[#005c43] text-white font-semibold px-6 py-7 border-none justify-between group"
                    onClick={() => handleActionClick(t("Hello, I would like to request a private consultation to establish a Centre of Excellence.", "مرحباً، أرغب في طلب استشارة خاصة لتأسيس مركز تميّز."))}
                  >
                    {t("Establish a Centre of Excellence", "أسّس مركز تميّز")}
                    <ArrowRight className="h-5 w-5 text-white/80 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}
