"use client"

import React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InstagramReelsSection } from "@/components/home/instagram-reels-section"
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
import { Clock, Mail, MapPin, Phone, Send, CheckCircle, ArrowRight } from "lucide-react"

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
  { code: "+1", label: "USA/Canada" },
  { code: "+7", label: "Russia" },
  { code: "+20", label: "Egypt" },
  { code: "+27", label: "South Africa" },
  { code: "+30", label: "Greece" },
  { code: "+31", label: "Netherlands" },
  { code: "+32", label: "Belgium" },
  { code: "+33", label: "France" },
  { code: "+34", label: "Spain" },
  { code: "+36", label: "Hungary" },
  { code: "+39", label: "Italy" },
  { code: "+40", label: "Romania" },
  { code: "+41", label: "Switzerland" },
  { code: "+43", label: "Austria" },
  { code: "+44", label: "United Kingdom" },
  { code: "+45", label: "Denmark" },
  { code: "+46", label: "Sweden" },
  { code: "+47", label: "Norway" },
  { code: "+48", label: "Poland" },
  { code: "+49", label: "Germany" },
  { code: "+51", label: "Peru" },
  { code: "+52", label: "Mexico" },
  { code: "+53", label: "Cuba" },
  { code: "+54", label: "Argentina" },
  { code: "+55", label: "Brazil" },
  { code: "+56", label: "Chile" },
  { code: "+57", label: "Colombia" },
  { code: "+58", label: "Venezuela" },
  { code: "+60", label: "Malaysia" },
  { code: "+61", label: "Australia" },
  { code: "+62", label: "Indonesia" },
  { code: "+63", label: "Philippines" },
  { code: "+64", label: "New Zealand" },
  { code: "+65", label: "Singapore" },
  { code: "+66", label: "Thailand" },
  { code: "+81", label: "Japan" },
  { code: "+82", label: "South Korea" },
  { code: "+84", label: "Vietnam" },
  { code: "+86", label: "China" },
  { code: "+90", label: "Turkey" },
  { code: "+91", label: "India" },
  { code: "+92", label: "Pakistan" },
  { code: "+93", label: "Afghanistan" },
  { code: "+94", label: "Sri Lanka" },
  { code: "+95", label: "Myanmar" },
  { code: "+98", label: "Iran" },
  { code: "+212", label: "Morocco" },
  { code: "+213", label: "Algeria" },
  { code: "+216", label: "Tunisia" },
  { code: "+218", label: "Libya" },
  { code: "+220", label: "Gambia" },
  { code: "+221", label: "Senegal" },
  { code: "+233", label: "Ghana" },
  { code: "+234", label: "Nigeria" },
  { code: "+251", label: "Ethiopia" },
  { code: "+254", label: "Kenya" },
  { code: "+256", label: "Uganda" },
  { code: "+260", label: "Zambia" },
  { code: "+263", label: "Zimbabwe" },
  { code: "+971", label: "UAE" },
  { code: "+972", label: "Israel" },
  { code: "+973", label: "Bahrain" },
  { code: "+974", label: "Qatar" },
  { code: "+975", label: "Bhutan" },
  { code: "+976", label: "Mongolia" },
  { code: "+977", label: "Nepal" },
  { code: "+994", label: "Azerbaijan" },
  { code: "+995", label: "Georgia" },
  { code: "+998", label: "Uzbekistan" },
];

const subjectOptions = [
  { value: "business", label: "Business Enquiry" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "distribution", label: "Distribution Interest" },
  { value: "gold-tier", label: "Gold Tier Enquiry" },
  { value: "platinum-tier", label: "Platinum Tier Enquiry" },
  { value: "general", label: "General Enquiry" },
];

const tierWhatsappMessages: Record<"gold-tier" | "platinum-tier", string> = {
  "gold-tier":
    "Hello OXYZ team, I want to enquire about the Gold Track (Clinical Authority Accelerator) for the 2026 training. Please share full inclusions, implementation support, pricing details, and next steps.",
  "platinum-tier":
    "Hello OXYZ team, I want to enquire about the Platinum Track (Regional Dominance Blueprint) for the 2026 training. Please share infrastructure details, licensing scope, staff integration support, pricing, and onboarding timeline.",
};

const tierFormPrefillMessages: Record<"gold-tier" | "platinum-tier", string> = {
  "gold-tier":
    "I would like to enquire about the Gold Track (Clinical Authority Accelerator), including inclusions, implementation support, pricing details, and next steps.",
  "platinum-tier":
    "I would like to enquire about the Platinum Track (Regional Dominance Blueprint), including infrastructure, licensing scope, staff integration support, pricing, and onboarding timeline.",
};

export default function BusinessEnquiriesPage() {
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

    const subjectLabel =
      subjectOptions.find((item) => item.value === formData.subject)?.label ||
      formData.subject ||
      "Not specified";

    const whatsappMessage = [
      "OXYZ Business Enquiries Form",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.countryCode} ${formData.phone}`.trim(),
      `Subject: ${subjectLabel}`,
      `Message: ${formData.message}`,
    ].join("\n")

    const encodedMessage = encodeURIComponent(whatsappMessage)
    window.open(`https://wa.me/6586163762?text=${encodedMessage}`, "_blank", "noopener,noreferrer")
    setFormState("success")
  }

  const handleTierEnquiry = (tier: "gold-tier" | "platinum-tier") => {
    const encodedMessage = encodeURIComponent(tierWhatsappMessages[tier])
    window.open(`https://wa.me/6586163762?text=${encodedMessage}`, "_blank", "noopener,noreferrer")
  }

  const handleTierFormSelection = (tier: "gold-tier" | "platinum-tier") => {
    setFormData((prev) => ({
      ...prev,
      subject: tier,
      message: prev.message.trim() ? prev.message : tierFormPrefillMessages[tier],
    }))
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

        @media (max-width: 1023px) {
          .mobile-no-shift.animate-on-scroll,
          .mobile-no-shift.animate-on-scroll.animated {
            transform: none;
          }
        }
      `}</style>
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/home_g_4.jpg"
              alt="OXYZ Health International business enquiries"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/15" />
          </div>

          {/* Content Container - Positioned at bottom */}
          <div className="relative z-10 flex items-end min-h-screen px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-12 sm:pb-16 md:pb-20 lg:pb-24 pt-20">
            <div className="max-w-4xl w-full">
              
              {/* Main Title */}
              <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
                <h1 className="font-bold leading-[1.15] text-[#CDB06A]">
                  <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl uppercase tracking-[0.08em]">
                    Business Enquiries
                  </span>
                </h1>
              </div>

              <div className="space-y-4 max-w-4xl mb-10 sm:mb-12 animate-fade-in-up opacity-0 animation-delay-400">
                <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                  The 2026 OXYZ International Stem Cell Training is an exclusive convergence for the top 1% of regenerative practitioners. We have moved past the &quot;what&quot; of stem cell science and into the &quot;how&quot; of clinical success and institutional growth.
                </p>
                <p className="text-white/85 text-base sm:text-lg md:text-xl leading-relaxed font-light">
                  While the Silver Tier provides the essential academic foundation, our advanced tracks are designed for those ready to move from knowing to implementing.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up opacity-0 animation-delay-600">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-2xl shadow-[#CDB06A]/40 transition-all hover:shadow-[#CDB06A]/60 hover:scale-105"
                  onClick={() => handleTierEnquiry("gold-tier")}
                >
                  Gold Track Enquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg bg-transparent transition-all hover:scale-105"
                  onClick={() => handleTierEnquiry("platinum-tier")}
                >
                  Platinum Track Enquiry
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Tracks */}
        <section className="relative py-28 overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f7f8fa_55%,#f2f4f7_100%)]">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
            <div className="absolute top-20 -right-20 h-80 w-80 rounded-full bg-[#8BA0B4]/20 blur-3xl" />
            <div className="absolute inset-0 opacity-40 bg-[linear-gradient(120deg,rgba(0,0,0,0.025)_0%,rgba(0,0,0,0)_45%,rgba(0,0,0,0.03)_100%)]" />
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl animate-on-scroll mb-16">
              <p className="inline-flex items-center rounded-full border border-[#007A59]/20 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#007A59] mb-5">
                Strategic Pathways
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#007A59] mb-5">
                The Threshold of Innovation
              </h2>
              <p className="text-lg sm:text-xl text-gold leading-relaxed">
                Most medical conferences end with a certificate of attendance. OXYZ partnerships end with a launch. Whether you are looking to master the protocol for your own patients or scale a regional regenerative center, select the pathway that aligns with your professional trajectory.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 mb-24 md:mb-16 max-w-6xl mx-auto">
              <article className="group animate-on-scroll mobile-no-shift stagger-1 min-h-[620px] lg:min-h-[700px] w-full max-w-[520px] mx-auto rounded-3xl border border-[#B8964A] bg-[#D4AF37] p-10 shadow-[0_18px_45px_rgba(166,141,74,0.30)] flex flex-col relative z-10 overflow-visible transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(166,141,74,0.35)]">
                <div className="absolute -top-14 right-6 z-20">
                  <div className="h-28 w-28 rounded-full bg-[#D4AF37] shadow-[0_12px_32px_rgba(0,0,0,0.35)] flex items-center justify-center border-[6px] border-[#B8964A]">
                    <div className="text-center leading-tight">
                      <p className="text-[22px] font-black text-[#2F1E08]">Gold</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#2F1E08]/85">Track</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-4xl font-black text-[#0B3B2E] mb-2 leading-tight">
                    Clinical Authority Accelerator
                  </h3>
                  <p className="text-[#0B3B2E]/90 font-semibold mb-4">
                    &quot;Lead with proof. Convert science into outcomes.&quot;
                  </p>
                  <p className="text-[#1A1A1A]/95 leading-relaxed mb-5 text-[1.03rem]">
                    Built for elite practitioners who move from theory to treatment fast. Gold equips you with a guided personal protocol, OXYZ Cellular Reset implementation, and launch-ready tools so you can return and start delivering measurable patient value immediately.
                  </p>
                  <p className="text-[#0B3B2E] font-bold mb-2">
                    Best for: Progressive clinicians, specialists, and high-performance solo practices.
                  </p>
                  <p className="text-[#0B3B2E] font-bold mb-7">
                    Key Outcome: Signature protocol + immediate inventory + faster patient trust and ROI.
                  </p>
                </div>
                <Button
                  className="mt-auto w-full rounded-full bg-[#0B3B2E] hover:bg-[#0F4B3A] text-white font-semibold py-6 shadow-lg shadow-[#0B3B2E]/35 transition-all duration-300 group-hover:scale-[1.02]"
                  onClick={() => handleTierEnquiry("gold-tier")}
                >
                  Request More Info
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </article>

              <article className="group animate-on-scroll mobile-no-shift stagger-2 min-h-[620px] lg:min-h-[700px] w-full max-w-[520px] mx-auto rounded-3xl border border-[#9AA8B5] bg-[#E5E4E2] p-10 shadow-[0_18px_45px_rgba(75,95,116,0.28)] flex flex-col relative z-10 overflow-visible transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(75,95,116,0.34)]">
                <div className="absolute -top-14 right-6 z-20">
                  <div className="h-28 w-28 rounded-full bg-[#E5E4E2] shadow-[0_12px_32px_rgba(40,49,59,0.35)] flex items-center justify-center border-[6px] border-[#A8B5C0]">
                    <div className="text-center leading-tight">
                      <p className="text-[16px] font-black text-[#1D2733]">Platinum</p>
                      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#1D2733]/85">Track</p>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <h3 className="text-4xl font-black text-[#1A2633] mb-2 leading-tight">
                    Regional Dominance Blueprint
                  </h3>
                  <p className="text-[#2D3A46]/90 font-semibold mb-4">
                    &quot;Build the center others refer to.&quot;
                  </p>
                  <p className="text-[#2D3A46] leading-relaxed mb-5 text-[1.03rem]">
                    Created for founders and healthcare leaders scaling beyond a single clinic. Platinum delivers the Root Cause BR Scan ecosystem, team enablement, and executive expansion strategy to position your institution as the regional authority in regenerative medicine.
                  </p>
                  <p className="text-[#1A2633] font-bold mb-2">
                    Best for: Multi-clinic owners, hospital executives, and healthcare investors.
                  </p>
                  <p className="text-[#1A2633] font-bold mb-7">
                    Key Outcome: Infrastructure acquisition + licensing + full staff integration for scale.
                  </p>
                </div>
                <Button
                  className="mt-auto w-full rounded-full bg-[#1A2633] hover:bg-[#243447] text-white font-semibold py-6 shadow-lg shadow-[#1A2633]/30 transition-all duration-300 group-hover:scale-[1.02]"
                  onClick={() => handleTierEnquiry("platinum-tier")}
                >
                  Request More Info
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </article>
            </div>

            <div className="animate-on-scroll relative z-20 mt-4 md:mt-0 rounded-3xl border border-[#007A59]/15 bg-white/85 backdrop-blur-sm p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,122,89,0.12)] overflow-hidden">
              <div className="absolute -top-10 -right-14 h-44 w-44 rounded-full bg-[#007A59]/10 blur-3xl" />
              <div className="relative">
                <h3 className="text-3xl sm:text-4xl font-bold text-[#007A59] mb-4">
                  Why Choose a Partner Track?
                </h3>
                <p className="text-gold font-semibold text-lg sm:text-xl mb-7">
                  In a field as rapidly advancing as cellular longevity, the difference between a successful practice and a stagnating one is Infrastructure.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="rounded-xl border border-slate-200/80 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 text-[#007A59] flex-shrink-0" />
                      <span className="text-gold/90 text-base leading-relaxed">Eliminate the Implementation Gap: We provide the inventory (Gold) and the hardware (Platinum) so you can begin treating patients the day you return.</span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200/80 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 text-[#007A59] flex-shrink-0" />
                      <span className="text-gold/90 text-base leading-relaxed">Verify the Results: Move away from subjective improvements. Use our diagnostic suite to show your patients real-time biological shifts.</span>
                    </div>
                  </div>
                  <div className="rounded-xl border border-slate-200/80 bg-white p-5">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 mt-0.5 text-[#007A59] flex-shrink-0" />
                      <span className="text-gold/90 text-base leading-relaxed">Join a Global Network: Gain access to the peer-verified success of our fellow business associates from Lebanon and South Africa.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="animate-on-scroll slide-in-left">
                <h2 className="text-3xl font-bold text-[#007A59] mb-4">
                  Let&apos;s Connect
                </h2>
                <p className="text-lg text-gold mb-10 leading-relaxed">
                  Whether you have questions about the training, partnership
                  opportunities, or want to learn more about our regenerative
                  medicine ecosystem, we're here to help.
                </p>

                <div className="space-y-6">
                  <div className="animate-on-scroll stagger-1 group flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#007A59] mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:global@oxyzhealth.com"
                        className="text-gold hover:text-gold/80 transition-colors"
                      >
                        global@oxyzhealth.com
                      </a>
                    </div>
                  </div>

                  <div className="animate-on-scroll stagger-2 group flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#007A59] mb-1">
                        Phone / WhatsApp
                      </h3>
                      <a
                        className="text-gold hover:text-gold/80 transition-colors"
                        href="https://wa.me/6586163762?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Training%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                        target="_blank"
                        rel="noreferrer"
                      >
                        +65 8616 3762
                      </a>
                    </div>
                  </div>

                  <div className="animate-on-scroll stagger-3 group flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#007A59] mb-1">
                        Headquarters
                      </h3>
                      <p className="text-gold">
                        USA | Singapore | Malaysia
                      </p>
                    </div>
                  </div>

                  <div className="animate-on-scroll stagger-4 group flex items-start gap-4 p-4 rounded-xl hover:bg-white transition-colors">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 group-hover:bg-gold/20 flex items-center justify-center flex-shrink-0 transition-colors">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#007A59] mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gold">
                        Monday - Sunday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-10 p-6 bg-white rounded-xl border-2 border-slate-100 shadow-sm animate-on-scroll">
                  <h3 className="font-semibold text-[#007A59] mb-4">
                    Quick Links
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <Link
                      href="/register"
                      className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="h-3 w-3" />
                      Register for Training
                    </Link>
                    <Link
                      href="/program"
                      className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="h-3 w-3" />
                      View Program
                    </Link>
                    <Link
                      href="/about"
                      className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="h-3 w-3" />
                      About OXYZ
                    </Link>
                    <Link
                      href="/why-work-with-us"
                      className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1"
                    >
                      <ArrowRight className="h-3 w-3" />
                      Partnership Info
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
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      We have received your message and will get back to you shortly.
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
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-[#007A59] mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-gold mb-8">
                      Fill out the form below and we&apos;ll respond as soon as possible.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3 mb-8">
                      <Button
                        type="button"
                        variant="outline"
                        className="border-[#B8964A] bg-[#D4AF37] text-white hover:bg-[#B8964A] hover:text-white hover:border-[#B8964A] font-semibold transition-colors"
                        onClick={() => handleTierFormSelection("gold-tier")}
                      >
                        Gold Tier Enquiry
                      </Button>
                      <Button
                        type="button"
                        variant="outline"
                        className="border-[#A8B0B8] bg-[#C7CDD3] text-white hover:bg-[#98A1AA] hover:text-white hover:border-[#98A1AA] font-semibold transition-colors"
                        onClick={() => handleTierFormSelection("platinum-tier")}
                      >
                        Platinum Tier Enquiry
                      </Button>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-[#007A59]">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Dr. John Smith"
                            className="border-border text-gold placeholder:text-gold/60 focus:border-gold focus:ring-gold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-[#007A59]">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="border-border text-gold placeholder:text-gold/60 focus:border-gold focus:ring-gold"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-[#007A59]">Phone Number</Label>
                          <div className="flex gap-3">
                            <Select
                              value={formData.countryCode}
                              onValueChange={(value) =>
                                setFormData({ ...formData, countryCode: value })
                              }
                            >
                              <SelectTrigger className="w-28 border-border text-gold focus:border-gold focus:ring-gold">
                                <SelectValue placeholder="+1" />
                              </SelectTrigger>
                            <SelectContent>
                              {countryCodes.map((item) => (
                                <SelectItem key={item.code} value={item.code}>
                                  {item.code} {item.label}
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
                              className="border-border text-gold placeholder:text-gold/60 focus:border-gold focus:ring-gold"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject" className="text-[#007A59]">Subject *</Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) => setFormData({ ...formData, subject: value })}
                          >
                            <SelectTrigger className="border-border text-gold focus:border-gold focus:ring-gold">
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                              {subjectOptions.map((item) => (
                                <SelectItem key={item.value} value={item.value}>
                                  {item.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-[#007A59]">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we help you?"
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
                            <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin mr-2" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Send Message
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

        <InstagramReelsSection />

        {/* Partnership CTA */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/hero-bg-2.jpg"
              alt="Business partnership call to action background"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#052218]/85 via-[#0A3D2D]/75 to-[#1B5E4A]/70" />
          </div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Ready to Activate Your Track?
            </h2>
            <p className="text-white/85 text-lg sm:text-xl max-w-3xl mx-auto mb-10 leading-relaxed">
              Choose your pathway and our team will prepare the right implementation plan for your clinic, team, and growth goals.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-5">
              <Button
                size="lg"
                className="bg-[#D4A928] hover:bg-[#C4951D] text-white font-semibold px-8 py-6 shadow-lg shadow-[#D4A928]/35"
                onClick={() => handleTierEnquiry("gold-tier")}
              >
                Request Gold Info
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0A3D2D] font-semibold px-8 py-6 bg-transparent"
                onClick={() => handleTierEnquiry("platinum-tier")}
              >
                Request Platinum Info
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
