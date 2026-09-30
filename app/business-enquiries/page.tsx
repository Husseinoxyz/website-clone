"use client"

import React, { useEffect } from "react"
import Image from "next/image"
import { Poppins } from "next/font/google"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, CheckCircle, ArrowRight, ArrowUpRight } from "lucide-react"

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
  useScrollAnimation()

  const handleActionClick = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/6586163762?text=${encodedMessage}`, "_blank", "noopener,noreferrer")
  }

  return (
    <div className={`min-h-screen flex flex-col ${poppins.className}`}>
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
              alt="OXYZ Global Regenerative Medicine Summit 2026"
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
                Business & Partnership
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-5 sm:mb-6 text-white max-w-5xl">
                Build More Than Knowledge. <br className="hidden md:block" />
                <span className="text-[#D4AF37]">Build the Future of Your Practice.</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-200 mb-8 sm:mb-10 font-light leading-relaxed max-w-2xl mx-auto">
                Your gateway into an international ecosystem where healthcare professionals learn, collaborate and grow.
              </p>
              
              <div className="flex justify-center w-full">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#007A59] hover:bg-[#005c43] text-white font-semibold px-8 py-6 sm:px-10 sm:py-7 text-base sm:text-lg rounded-full transition-all shadow-xl shadow-[#007A59]/20 hover:scale-105"
                  onClick={() => {
                    document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Explore Pathways
                  <ArrowRight className="ml-3 h-5 w-5" />
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
              alt="Why Build With OXYZ Background"
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
                <div className="lg:pl-10 xl:pl-16">
                  <div className="mb-6">
                    <h3 className="inline-block bg-[#D4AF37] text-white px-6 py-2.5 rounded-full font-bold uppercase tracking-[0.15em] text-sm md:text-base shadow-sm">
                      Why Build With OXYZ?
                    </h3>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#007A59] leading-tight">
                    Education Alone Doesn't Transform Healthcare. <br />
                    <span className="text-[#D4AF37]">Implementation Does.</span>
                  </h2>
                </div>
                
                <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-10 rounded-3xl shadow-2xl ring-1 ring-slate-900/5">
                  <div className="text-slate-900 leading-relaxed text-base sm:text-lg space-y-4 sm:space-y-6">
                    <p>
                      <strong className="text-[#007A59] font-medium">Scientific knowledge is only the first step.</strong> OXYZ International connects education with real-world implementation: evidence-informed protocols, advanced regenerative technologies and long-term business support.
                    </p>
                    <div className="h-px w-16 bg-[#D4AF37]/30" />
                    <p>
                      We stay with our partners beyond the symposium, helping them build successful regenerative medicine practices.
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
                { title: "International Medical Education", desc: "Learn from recognised experts in regenerative, biological and precision medicine." },
                { title: "Clinical Implementation", desc: "Protocols and resources to bring regenerative medicine into daily practice." },
                { title: "Business Development", desc: "Strategic business support and partnership opportunities." },
                { title: "International Ecosystem", desc: "A growing international community of doctors, clinics and partners." }
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
                    Vision & Strategy
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 sm:mb-6 leading-tight">
                    Redefining The Future Of Healthcare.
                  </h3>
                  <p className="text-slate-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                    Our leadership on regenerative medicine and the global OXYZ network.
                  </p>
                  <Button 
                    className="bg-[#007A59] hover:bg-[#005c43] text-white rounded-full px-8 py-6 w-fit font-semibold"
                    onClick={() => document.getElementById('pathways')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Explore Pathways
                    <ArrowRight className="ml-2 h-5 w-5" />
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
                Partnership Pathways
              </h3>
              <h2 className="text-3xl md:text-5xl font-bold text-[#007A59] mb-4 sm:mb-6">
                Choose the Pathway That Matches Your Vision.
              </h2>
              <p className="text-base sm:text-lg text-slate-900">
                Every partnership starts as an Executive Delegate. From there you can
                become a Strategic Partner or a Centre of Excellence.
              </p>
            </div>

            <div className="space-y-6 sm:space-y-12">
              
              {/* EXECUTIVE DELEGATE */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden animate-on-scroll flex flex-col">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[200px] sm:min-h-[300px] lg:h-auto w-full overflow-hidden">
                    <Image src="/images/sym/slide_1.jpg" alt="Executive Delegate" fill className="object-cover animate-image" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 lg:py-16 flex flex-col justify-center">
                    <div className="self-start px-4 py-1.5 bg-[#007A59] text-white font-semibold rounded-full text-xs mb-4 uppercase tracking-widest shadow-sm">
                      Learn
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-2">EXECUTIVE DELEGATE</h3>
                    <h4 className="text-lg sm:text-xl font-medium text-[#007A59] mb-4 sm:mb-6">Attend the Summit. Build Your Foundation.</h4>
                    <p className="text-slate-900 text-[15px] leading-relaxed">
                      Designed for healthcare professionals seeking world-class education, international networking and practical clinical knowledge.
                    </p>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 sm:p-8 lg:p-12 border-t border-slate-100 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-4">
                    <h5 className="font-semibold text-[#007A59] mb-4">Perfect For:</h5>
                    <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-slate-900 text-[15px]">
                      <li>• Medical Doctors</li>
                      <li>• Specialists</li>
                      <li>• Dentists</li>
                      <li>• Pharmacists</li>
                      <li>• Allied Healthcare Professionals</li>
                      <li>• Healthcare Entrepreneurs</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-8">
                    <h5 className="font-semibold text-[#007A59] mb-4">Includes:</h5>
                    <ul className="grid sm:grid-cols-2 gap-3 text-slate-900 text-[15px] mb-8">
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> Five-day symposium</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> Certification</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> Clinic immersion</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> Hands-on workshops</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> Clinical demos</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> Int. networking</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> Faculty discussions</li>
                      <li className="flex items-start gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37] shrink-0 mt-1" /> Business networking</li>
                    </ul>
                    <Button
                      className="bg-[#007A59] hover:bg-[#005c43] text-white rounded-full px-6 py-5 w-full sm:w-auto"
                      onClick={() => handleActionClick("Hello, I would like to become an Executive Delegate for the OXYZ Global Regenerative Medicine Summit.")}
                    >
                      Become an Executive Delegate
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* STRATEGIC PARTNER */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden animate-on-scroll flex flex-col">
                <div className="grid lg:grid-cols-2">
                  <div className="p-6 sm:p-8 lg:p-12 lg:py-16 flex flex-col justify-center order-2 lg:order-1">
                    <div className="self-start px-4 py-1.5 bg-gradient-to-r from-[#D4AF37] to-[#B5952F] text-white font-semibold rounded-full text-xs mb-4 uppercase tracking-widest shadow-md">
                      Collaborate
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-2">STRATEGIC PARTNER</h3>
                    <h4 className="text-lg sm:text-xl font-medium text-[#007A59] mb-4 sm:mb-6">Transform Knowledge Into Clinical Growth.</h4>
                    <div className="space-y-4 text-slate-900 text-[15px] leading-relaxed">
                      <p>For professionals ready to implement regenerative medicine in their own practice, with personalised guidance, clinical support and ongoing collaboration.</p>
                    </div>
                  </div>
                  <div className="relative min-h-[200px] sm:min-h-[300px] lg:h-auto w-full order-1 lg:order-2 overflow-hidden">
                    <Image src="/images/Collobration.jpg" alt="Strategic Partner" fill className="object-cover animate-image" />
                  </div>
                </div>
                
                <div className="bg-[#FAFAFA] p-6 sm:p-8 lg:p-12 border-t border-slate-100 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-4">
                    <h5 className="font-semibold text-[#007A59] mb-4">Best For:</h5>
                    <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-slate-900 text-[15px]">
                      <li>• Medical Doctors</li>
                      <li>• Specialists</li>
                      <li>• Clinic Owners</li>
                      <li>• Integrative Medicine Physicians</li>
                      <li>• Anti-Ageing Physicians</li>
                      <li>• Medical Entrepreneurs</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="font-semibold text-[#007A59] mb-6">What&apos;s Included:<br /><span className="text-[#D4AF37] font-medium text-sm">Everything Included in Executive Delegate, Plus...</span></p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> Clinical Starter Suite</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">A curated starter inventory for regenerative solutions.</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> Personal Assessment</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">1-to-1 consultation to evaluate your current practice.</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> Protocol Integration</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">Guidance on successfully integrating regenerative protocols.</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> Official Recognition</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">Become part of the Strategic Partner Network.</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> Business Support</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">Marketing guidance and strategic growth support.</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#D4AF37]" /> Professional Dev</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">Priority invitations to advanced training programmes.</p>
                      </div>
                    </div>
                    <Button
                      className="bg-[#007A59] hover:bg-[#005c43] text-white rounded-full px-6 py-5 w-full sm:w-auto"
                      onClick={() => handleActionClick("Hello, I would like to speak with an advisor about becoming a Strategic Partner.")}
                    >
                      Speak With A Strategic Advisor
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* CENTRE OF EXCELLENCE */}
              <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden animate-on-scroll flex flex-col">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[200px] sm:min-h-[300px] lg:h-auto w-full overflow-hidden">
                    <Image src="/images/sym/home_g_1.jpg" alt="Centre of Excellence" fill className="object-cover animate-image" />
                  </div>
                  <div className="p-6 sm:p-8 lg:p-12 lg:py-16 flex flex-col justify-center">
                    <div className="self-start px-4 py-1.5 bg-slate-800 text-white font-semibold rounded-full text-xs mb-4 uppercase tracking-widest">
                      Lead
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#D4AF37] mb-2">CENTRE OF EXCELLENCE</h3>
                    <h4 className="text-lg sm:text-xl font-medium text-[#007A59] mb-4 sm:mb-6">Build A Regional Leader In Regenerative Medicine.</h4>
                    <div className="space-y-4 text-slate-900 text-[15px] leading-relaxed">
                      <p>Our highest level of partnership. For established clinics, hospitals and healthcare organisations building a recognised regenerative medicine centre.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-slate-50 p-6 sm:p-8 lg:p-12 border-t border-slate-100 grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12">
                  <div className="lg:col-span-4">
                    <h5 className="font-semibold text-[#007A59] mb-4">Best For:</h5>
                    <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-2 text-slate-900 text-[15px]">
                      <li>• Medical Centres</li>
                      <li>• Specialist Clinics</li>
                      <li>• Hospital Groups</li>
                      <li>• Healthcare Investors</li>
                      <li>• Wellness Hospitals</li>
                      <li>• Academic Institutions</li>
                    </ul>
                  </div>
                  <div className="lg:col-span-8">
                    <p className="font-semibold text-[#007A59] mb-6">What&apos;s Included:<br /><span className="text-slate-800 font-medium text-sm">Everything Included in Strategic Partner, Plus...</span></p>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> Advanced Technology</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">Implementation support for advanced diagnostic systems.</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> Clinical Inventory</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">Expanded regenerative medicine solutions.</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> Leadership Strategy</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">Private executive consultation for regional expansion.</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> Staff Training</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">Structured training programmes for your clinical team.</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> Official Recognition</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">Establish as a recognised regional reference centre.</p>
                      </div>
                      <div>
                        <strong className="text-slate-800 flex items-center gap-2"><CheckCircle className="h-4 w-4 text-slate-800" /> Future Innovation</strong>
                        <p className="pl-6 text-sm text-slate-900 mt-1">Priority access to new technologies.</p>
                      </div>
                    </div>
                    <Button
                      className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-6 py-5 w-full sm:w-auto"
                      onClick={() => handleActionClick("Hello, I would like to request a private consultation to establish a Centre of Excellence.")}
                    >
                      Request A Private Consultation
                      <ArrowRight className="ml-2 h-4 w-4" />
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
                Compare the Pathways
              </h2>
            </div>
            
            <div className="overflow-x-auto rounded-2xl border border-slate-200 animate-on-scroll">
              <table className="w-full text-left border-collapse text-xs md:text-sm">
                <thead>
                  <tr className="bg-[#FAFAFA]">
                    <th className="p-2 py-4 md:p-5 font-semibold text-[#007A59] border-b border-slate-200 md:min-w-[200px]">Feature</th>
                    <th className="p-2 py-4 md:p-5 font-semibold text-[#007A59] border-b border-slate-200 text-center">Delegate</th>
                    <th className="p-2 py-4 md:p-5 font-semibold text-[#D4AF37] border-b border-slate-200 text-center">Partner</th>
                    <th className="p-2 py-4 md:p-5 font-semibold text-slate-800 border-b border-slate-200 text-center">Excellence</th>
                  </tr>
                </thead>
                <tbody className="text-slate-900">
                  {[
                    { label: "Full Summit Experience", ed: "✓", sp: "✓", coe: "✓" },
                    { label: "International Certification", ed: "✓", sp: "✓", coe: "✓" },
                    { label: "Medical Centre Immersion", ed: "✓", sp: "✓", coe: "✓" },
                    { label: "Clinical Starter Suite", ed: "✕", sp: "✓", coe: "✓" },
                    { label: "Private Clinical Consultation", ed: "✕", sp: "✓", coe: "✓" },
                    { label: "Business Development Support", ed: "✕", sp: "✓", coe: "✓" },
                    { label: "Advanced Clinical Technology", ed: "✕", "sp": "✕", coe: "✓" },
                    { label: "Staff Training & Integration", ed: "✕", "sp": "✕", coe: "✓" },
                    { label: "Executive Growth Strategy", ed: "✕", "sp": "✕", coe: "✓" },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="p-2 py-3 md:p-4 pr-1">{row.label}</td>
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
              alt="Global Partnership"
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
                  Ready to Take the Next Step?
                </h2>
                <div className="text-slate-600 text-base sm:text-lg font-light mb-8 sm:mb-10 leading-relaxed space-y-4">
                  <p className="font-medium text-[#007A59]">Every successful partnership begins with a conversation.</p>
                  <p>Our International Advisory Team will learn about your goals and recommend the right pathway for you.</p>
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
                    <span className="text-lg font-medium">WhatsApp: +65 8616 3762</span>
                  </a>
                  <div className="flex items-center gap-4 text-slate-600">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm border border-slate-100">
                      <MapPin className="w-5 h-5 text-[#D4AF37]" />
                    </div>
                    <div className="flex items-center flex-wrap gap-2 text-lg font-medium">
                      <span className="flex items-center gap-2">
                        <img src="https://flagcdn.com/w40/us.png" alt="USA Flag" className="w-5 h-auto rounded-[2px] shadow-sm" />
                        USA
                      </span>
                      <span className="text-slate-300 text-sm mx-1">•</span>
                      <span className="flex items-center gap-2">
                        <img src="https://flagcdn.com/w40/sg.png" alt="Singapore Flag" className="w-5 h-auto rounded-[2px] shadow-sm" />
                        Singapore
                      </span>
                      <span className="text-slate-300 text-sm mx-1">•</span>
                      <span className="flex items-center gap-2">
                        <img src="https://flagcdn.com/w40/my.png" alt="Malaysia Flag" className="w-5 h-auto rounded-[2px] shadow-sm" />
                        Malaysia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="animate-on-scroll bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
                <h3 className="text-2xl font-semibold text-slate-900 mb-6 sm:mb-8">Select Your Pathway</h3>
                <div className="space-y-4">
                  <Button
                    className="w-full bg-white hover:bg-slate-50 text-slate-900 font-semibold px-6 py-7 border border-slate-300 justify-between group"
                    onClick={() => handleActionClick("Hello, I would like to become an Executive Delegate for the OXYZ Global Regenerative Medicine Summit.")}
                  >
                    Become an Executive Delegate
                    <ArrowRight className="h-5 w-5 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    className="w-full bg-[#D4AF37] hover:bg-[#B8964A] text-white font-semibold px-6 py-7 border-none justify-between group"
                    onClick={() => handleActionClick("Hello, I would like to speak with an advisor about becoming a Strategic Partner.")}
                  >
                    Become a Strategic Partner
                    <ArrowRight className="h-5 w-5 text-white/80 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button
                    className="w-full bg-[#007A59] hover:bg-[#005c43] text-white font-semibold px-6 py-7 border-none justify-between group"
                    onClick={() => handleActionClick("Hello, I would like to request a private consultation to establish a Centre of Excellence.")}
                  >
                    Establish a Centre of Excellence
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
