import Image from "next/image";
import Link from "next/link";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { CheckCircle2, BookOpen, Clock, Award, ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PosterSliderSection } from "@/components/home/poster-slider-section";
import { Readex_Pro } from "next/font/google";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/fade-in";

const readexPro = Readex_Pro({ subsets: ["arabic"], display: 'swap' });

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
              انطلق بمستقبلك الطبي <br className="hidden md:block" /> مع أكاديمية الطب التجديدي
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
                  <h2 className="text-3xl md:text-4xl font-bold text-[#CDB06A] drop-shadow-sm mb-6">لماذا تنضم إلى البرنامج؟</h2>
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
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FadeIn delay={0.1} direction="up" className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[#CDB06A] drop-shadow-sm mb-6">البرنامج التدريبي</h2>
              <div className="h-1 w-20 bg-gold mx-auto rounded-full"></div>
            </FadeIn>

            <div className="max-w-4xl mx-auto space-y-6">
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
                  topics: ["أمراض المفاصل.", "السكري ومضاعفاته.", "الأمراض العصبية.", "مكافحة الشيخوخة."],
                  image: "https://www.youtube.com/embed/VfkXACyh5Ws"
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
                  <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16 py-12 border-b border-gray-200 last:border-0`}>
                    <div className="w-full md:w-1/2 relative group">
                      {dayInfo.secondaryImage ? (
                        <div className="relative h-[300px] sm:h-[400px] w-full">
                          <div className="absolute top-0 right-0 w-3/4 aspect-[4/3] rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-500 z-10 hover:z-30">
                            <Image src={dayInfo.image} alt={dayInfo.title} fill className="object-cover hover:scale-105 transition-transform duration-700" />
                          </div>
                          <div className="absolute bottom-0 left-0 w-3/4 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 z-20 hover:z-30 border-[6px] border-slate-50">
                            <Image src={dayInfo.secondaryImage} alt="Genting Highlands" fill className="object-cover hover:scale-105 transition-transform duration-700" />
                          </div>
                        </div>
                      ) : (
                        <div className={`${isVideo || isYoutube ? 'w-full aspect-[16/9]' : 'aspect-[4/3]'} rounded-3xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow duration-500 relative bg-black`}>
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
                          {!isVideo && !isYoutube && <div className="absolute inset-0 bg-[#007A59]/10"></div>}
                        </div>
                      )}
                    </div>
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                      <h3 className="text-[#CDB06A] text-xl font-bold mb-1 tracking-wide">{dayInfo.day}</h3>
                      <h4 className="text-3xl md:text-4xl font-extrabold text-[#CDB06A] mb-4 leading-tight">{dayInfo.title}</h4>
                      <div className="w-20 h-1 bg-[#CDB06A] mb-8"></div>
                      <div className="space-y-4">
                        <ul className="space-y-4">
                          {dayInfo.topics.map((topic, i) => (
                            <li key={i} className="flex items-start text-[#007A59] text-lg md:text-xl font-medium">
                              <span className="w-2.5 h-2.5 bg-[#CDB06A] rounded-full ml-4 mt-2.5 shrink-0 shadow-sm"></span>
                              <span className="leading-relaxed">{topic}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

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
                    "شهادة احترافية.",
                    "دليل البروتوكولات العلاجية.",
                    "مكتبة علمية رقمية.",
                    "تسجيلات الدورة كاملة.",
                    "تحديثات علمية مستمرة.",
                    "الانضمام إلى مجتمع الأطباء.",
                    "جلسات مناقشة شهرية للحالات السريرية."
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
