import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle2, BookOpen, Clock, Award, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PosterSliderSection } from "@/components/home/poster-slider-section";
import { FiveDModelSection } from "@/components/home/five-d-model-section";
import { Readex_Pro } from "next/font/google";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

import type { Metadata } from "next";

const readexPro = Readex_Pro({ subsets: ["arabic"], display: 'swap' });

export const metadata: Metadata = {
  title: 'القمة العالمية للطب التجديدي 2026',
  other: {
    google: 'notranslate'
  }
};

export default function ArabicPage() {
  return (
    <>
      <Header />
      <main dir="rtl" className={`min-h-screen bg-slate-50 ${readexPro.className}`}>

        {/* Poster Slider (PC and Mobile) */}
        <PosterSliderSection isArabic={true} />

        {/* Hero Text Content (Arabic) */}
        <section className="py-24 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/symposium-hero.jpg')] bg-cover bg-center bg-no-repeat opacity-40"></div>
          <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
          <FadeIn delay={0.2} direction="up" className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-[#CDB06A] drop-shadow-sm">
              انطلق بمستقبلك <br className="hidden md:block" /> بطب الخلايا الجذعية والببتيدات
            </h1>
            <p className="text-lg md:text-xl text-teal-800 max-w-3xl mx-auto mb-6 leading-relaxed font-semibold">
              ادخل عالم الخلايا الجذعية والطب البيولوجي وعلاجات الببتيدات. وانقلها إلى عيادتك.
            </p>
            <div className="flex items-center justify-center gap-3 text-[#007A59] mb-10 text-lg md:text-xl font-bold tracking-wide">
              <span><span dir="ltr">20 - 24</span> نوفمبر 2026</span>
              <span className="text-[#CDB06A]">•</span>
              <span>كوالالمبور، ماليزيا</span>
            </div>
            <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-bold text-lg px-12 py-6 rounded-full shadow-lg shadow-gold/20" asChild>
              <Link href="/ar/register">
                سجل الآن
              </Link>
            </Button>
          </FadeIn>
        </section>

        {/* Why Join Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">

              {/* Text Side (Right in RTL) */}
              <FadeIn delay={0.2} direction="right" className="lg:w-1/2">
                <div className="mb-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-[#CDB06A] drop-shadow-sm mb-6">لماذا تنضم إلى الدورة</h2>
                  <div className="h-1 w-20 bg-[#CDB06A] rounded-full"></div>
                </div>

                <StaggerContainer className="flex flex-col gap-4">
                  {[
                    "تعلم من خبراء متخصصين في الطب التجديدي.",
                    "بروتوكولات علاجية حديثة قابلة للتطبيق السريري.",
                    "تدريب عملي على الحالات المرضية.",
                    "شهادة احترافية بعد اجتياز البرنامج.",
                    "دعم علمي واستشارات بعد انتهاء التدريب.",
                    "الانضمام إلى شبكة من الأطباء المتخصصين في الطب التجديدي."
                  ].map((item, i) => (
                    <StaggerItem key={i} direction="right" className="flex items-center p-5 bg-slate-50 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                      <CheckCircle2 className="w-6 h-6 text-[#007A59] shrink-0 ml-4" />
                      <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </FadeIn>

              {/* Video Side (Left in RTL) */}
              <FadeIn delay={0.4} direction="left" className="lg:w-1/2 w-full">
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl relative border-[8px] border-slate-50">
                  <video
                    src="/images/tesimonials/Doctors certficate.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 rounded-[1.25rem] ring-1 ring-inset ring-black/10 pointer-events-none"></div>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>

        {/* What You Will Learn Section */}
        <section className="py-20 text-teal-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Stem Cells Background"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-white/85 backdrop-blur-sm" />
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <FadeIn delay={0.2} direction="right" className="lg:w-1/3">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#CDB06A] drop-shadow-sm">ماذا ستتعلم؟</h2>
                <p className="text-teal-800 mb-8 text-lg font-medium">بعد انتهاء البرنامج ستكون قادراً على:</p>
                <div className="w-full rounded-2xl overflow-hidden shadow-lg border-[4px] border-white mt-8 ring-1 ring-black/5 bg-black">
                  <video
                    src="/images/tesimonials/Doctors talk_1 music.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto"
                  />
                </div>
              </FadeIn>

              <StaggerContainer className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "فهم أساسيات الطب التجديدي والعلاجات الخلوية.",
                  "اختيار المرضى المناسبين لكل بروتوكول علاجي.",
                  "تصميم الخطط العلاجية وفق أحدث المراجع العلمية.",
                  "استخدام الببتيدات العلاجية بطريقة صحيحة.",
                  "دمج البروتوكولات العلاجية المختلفة لتحقيق أفضل النتائج.",
                  "التعامل مع الحالات السريرية المعقدة.",
                  "تجنب الأخطاء الشائعة والمضاعفات.",
                  "إدخال خدمات الطب التجديدي إلى عيادتك بطريقة احترافية."
                ].map((item, i) => (
                  <StaggerItem key={i} direction="up" className="flex items-center gap-4 bg-white/70 p-4 rounded-xl border border-teal-900/10 backdrop-blur-sm hover:bg-white transition-colors shadow-sm">
                    <div className="w-2 h-2 bg-[#CDB06A] rounded-full shrink-0 shadow-[0_0_8px_rgba(205,176,106,0.4)]"></div>
                    <p className="text-teal-950 font-medium">{item}</p>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Training Program Section */}
        <section className="pt-20 pb-8 relative overflow-hidden">
          {/* Warm beige/cream gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5EFE0] via-[#FAF6ED] to-[#EDE4D0]" />
          {/* Background image overlay */}
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt=""
              fill
              className="object-cover opacity-[0.06] mix-blend-multiply"
              sizes="100vw"
            />
          </div>
          {/* Warm gradient accents */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_top_right,_rgba(205,176,106,0.25),_transparent_60%)]" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(205,176,106,0.18),_transparent_55%)]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(205,176,106,0.08),_transparent_60%)]" />
            <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(135deg,rgba(180,160,100,1)_0%,rgba(180,160,100,1)_25%,transparent_25%,transparent_50%,rgba(180,160,100,1)_50%,rgba(180,160,100,1)_75%,transparent_75%,transparent_100%)] bg-[length:24px_24px]" />
          </div>
          {/* Decorative floating orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#CDB06A]/12 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-40 right-20 w-[500px] h-[500px] bg-[#CDB06A]/8 rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.1} direction="up" className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#8B7332] drop-shadow-sm mb-4">الدورة التدريبية</h2>
              <div className="h-1 w-20 bg-[#CDB06A] mx-auto rounded-full shadow-[0_0_12px_rgba(205,176,106,0.4)]"></div>
              <p className="text-[#6B5D3E]/70 mt-4 text-lg">خمسة أيام من التعليم المكثف والتدريب العملي</p>
            </FadeIn>

            <div className="max-w-5xl mx-auto space-y-10">
              {[
                {
                  day: "اليوم الأول",
                  title: "أساسيات الطب التجديدي",
                  topics: ["مقدمة في الطب التجديدي.", "الخلايا الجذعية.", "الببتيدات العلاجية.", "تقييم المريض."],
                  image: "/images/sym/past_symposium.jpg"
                },
                {
                  day: "اليوم الثاني",
                  title: "البروتوكولات العلاجية",
                  topics: ["أمراض المفاصل.", "السكري ومضاعفاته.", "الأمراض العصبية.", "مكافحة الشيخوخة.", "التجميل اللاجراحي.", "طب الأسنان."],
                  image: "https://www.youtube.com/embed/MroTfwoPq2M"
                },
                {
                  day: "اليوم الثالث",
                  title: "التدريب العملي",
                  topics: ["دراسة حالات سريرية.", "تصميم بروتوكولات علاجية.", "اختيار الخطة المناسبة لكل مريض."],
                  image: "/images/hero-bg-3.jpg"
                },
                {
                  day: "اليوم الرابع",
                  title: "التطبيقات المتقدمة",
                  topics: ["دمج البروتوكولات العلاجية.", "المتابعة السريرية.", "السلامة الطبية.", "التعامل مع المضاعفات."],
                  image: "/images/sym/07.jpg"
                },
                {
                  day: "اليوم الخامس (اختياري)",
                  title: "جولة سياحية واستكشاف ماليزيا",
                  topics: ["زيارة أبرز المعالم السياحية في كوالالمبور.", "التعرف على الثقافة الماليزية المتنوعة.", "جولات تسوق وترفيه ممتعة.", "قضاء وقت ممتع مع الزملاء والأطباء."],
                  image: "/images/Tourist/Top-10-Things-to-Do-Around-KL-City-Centre-Featured.jpg",
                  secondaryImage: "/images/Tourist/genting-highland-batu-cave-tour-sic-join-in-tour_wC5lJ.jpeg"
                }
              ].map((dayInfo, index) => {
                const isEven = index % 2 === 0;
                const isVideo = dayInfo.image.endsWith('.mp4');
                const isYoutube = dayInfo.image.includes('youtube.com/embed/');

                return (
                  <div key={index} className="relative group">
                    {/* Warm elegant card */}
                    <div className="bg-white/60 backdrop-blur-sm border border-[#CDB06A]/20 rounded-3xl p-6 md:p-10 shadow-[0_4px_24px_rgba(180,160,100,0.12)] hover:shadow-[0_8px_40px_rgba(180,160,100,0.2)] hover:border-[#CDB06A]/35 transition-all duration-500">
                      <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-12`}>
                        {/* Image side */}
                        <div className="w-full md:w-1/2 relative">
                          {dayInfo.secondaryImage ? (
                            <div className="relative h-[300px] sm:h-[380px] w-full">
                              <div className="absolute top-0 right-0 w-3/4 aspect-[4/3] rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 z-10 hover:z-30 ring-1 ring-[#CDB06A]/20">
                                <Image src={dayInfo.image} alt={dayInfo.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                              </div>
                              <div className="absolute bottom-0 left-0 w-3/4 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-[0_20px_60px_rgba(0,0,0,0.2)] transition-all duration-500 z-20 hover:z-30 border-4 border-white ring-1 ring-[#CDB06A]/20">
                                <Image src={dayInfo.secondaryImage} alt="Genting Highlands" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                              </div>
                            </div>
                          ) : (
                            <div className={`${isVideo || isYoutube ? 'w-full aspect-[16/9]' : 'aspect-[4/3]'} rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 relative bg-black ring-1 ring-[#CDB06A]/20`}>
                              {isVideo ? (
                                <video
                                  src={dayInfo.image}
                                  autoPlay
                                  loop
                                  muted
                                  playsInline
                                  className="w-full h-auto"
                                />
                              ) : isYoutube ? (
                                <div className="w-full h-full absolute inset-0 pointer-events-none overflow-hidden">
                                  <iframe
                                    src={`${dayInfo.image}?controls=0&mute=1&autoplay=1&loop=1&modestbranding=1&rel=0&showinfo=0&iv_load_policy=3&playlist=${dayInfo.image.split('/').pop()}`}
                                    className="w-full h-full absolute inset-0 border-0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                  />
                                </div>
                              ) : (
                                <Image src={dayInfo.image} alt={dayInfo.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                              )}
                            </div>
                          )}
                        </div>
                        {/* Text side */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center">
                          {/* Day badge */}
                          <div className="inline-flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#CDB06A] to-[#A8913E] flex items-center justify-center text-white font-bold text-lg shadow-[0_2px_12px_rgba(205,176,106,0.4)]">
                              {index + 1}
                            </div>
                            <span className="text-[#8B7332] text-lg font-bold tracking-wide">{dayInfo.day}</span>
                          </div>
                          <h4 className="text-3xl md:text-4xl font-extrabold text-[#3D3520] mb-4 leading-tight">{dayInfo.title}</h4>
                          <div className="w-16 h-1 bg-gradient-to-l from-[#CDB06A] to-[#CDB06A]/30 mb-6 rounded-full"></div>
                          <ul className="space-y-3">
                            {dayInfo.topics.map((topic, i) => (
                              <li key={i} className="flex items-start text-[#4A4030] text-lg font-medium">
                                <span className="w-2 h-2 bg-[#CDB06A] rounded-full ml-4 mt-2.5 shrink-0 shadow-[0_0_6px_rgba(205,176,106,0.4)]"></span>
                                <span className="leading-relaxed">{topic}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5D Model Section */}
        <div dir="ltr" className="-mt-8 sm:-mt-16 relative z-10">
          <FiveDModelSection isArabic={true} />
        </div>

        {/* What you get Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center bg-teal-50 rounded-3xl p-8 md:p-12 overflow-hidden relative">
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

              <div className="md:w-1/3 mb-10 md:mb-0 relative z-10 text-center md:text-right">
                <Award className="w-16 h-16 text-teal-600 mb-6 mx-auto md:mx-0" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">ماذا ستحصل بعد انتهاء الدورة؟</h2>
              </div>

              <div className="md:w-2/3 md:pr-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {[
                    "شهادة معتمدة",
                    "تصبح أخصائياً",
                    "التطبيق السريري",
                    "تنمية عيادتك",
                    "بناء علامتك التجارية",
                    "دعم مستمر",
                    "دمج الذكاء الاصطناعي في الطب التجديدي",
                    "مستقبل الطب التكاملي",
                    "الوصول إلى شبكة مهنية عالمية",
                    "فرص تعاون طويلة الأمد"
                  ].map((item, i) => (
                    <div key={i} className="flex items-center">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0 ml-3" />
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Registration Steps Section */}
        <section className="py-20 text-teal-900 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Stem Cells Background"
              fill
              className="object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-white/90 backdrop-blur-sm" />
          </div>
          <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-teal-950">خطوات التسجيل</h2>
              <div className="h-1 w-20 bg-[#CDB06A] mx-auto rounded-full"></div>
            </div>

            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
                {/* Connection line for desktop */}
                <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-teal-200 z-0"></div>

                {[
                  {
                    step: "الخطوة الأولى",
                    title: "سجل الآن",
                    desc: "انقر على زر سجل الآن"
                  },
                  {
                    step: "الخطوة الثانية",
                    title: "تعبئة البيانات",
                    desc: "قم بتعبئة بياناتك في صفحة التسجيل"
                  },
                  {
                    step: "الخطوة الثالثة",
                    title: "إتمام الدفع",
                    desc: "انقر على زر إتمام الدفع"
                  },
                  {
                    step: "الخطوة الرابعة",
                    title: "تأكيد التسجيل",
                    desc: "اختر طريقة الدفع وقم بالدفع وبذلك تكون قد أتممت التسجيل"
                  }
                ].map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[#007A59] border-4 border-white flex items-center justify-center text-xl font-bold mb-6 text-white shadow-lg shadow-[#007A59]/30">
                      {i + 1}
                    </div>
                    <div className="text-[#CDB06A] font-medium mb-2 text-sm">{step.step}</div>
                    <h3 className="text-lg font-bold mb-3 text-teal-950">{step.title}</h3>
                    <p className="text-teal-800 font-medium text-sm leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-20 text-center">
              <Button size="lg" className="bg-gold hover:bg-gold/90 text-black font-semibold text-lg px-12 py-6 rounded-full shadow-lg shadow-gold/20" asChild>
                <Link href="/ar/register">
                  ابدأ التسجيل الآن
                  <ChevronLeft className="w-5 h-5 mr-2" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
