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

export default function ContactPage() {
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
        <section className="relative w-full min-h-screen">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/images/sym/about_hero.jpg"
              alt="OXYZ Health International contact"
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
              
              {/* Badge */}
              <div className="mb-6 animate-fade-in-up opacity-0 animation-delay-100">
                <div className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                  <MessageCircle className="h-4 w-4" />
                  Contact Us
                </div>
              </div>

              {/* Main Title */}
              <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
                <h1 className="font-bold leading-[1.15] text-[#CDB06A]">
                  <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                    Let's Connect
                  </span>
                  <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide">
                    Get in Touch with OXYZ Health International
                  </span>
                </h1>
              </div>

              {/* Description */}
              <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-2xl animate-fade-in-up opacity-0 animation-delay-400 font-light">
                Whether you have questions about the training, partnership opportunities, or want to learn more about our regenerative medicine ecosystem, we're here to help.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 animate-fade-in-up opacity-0 animation-delay-600">
                <Link href="/register" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-[#CDB06A] hover:bg-[#B8964A] text-white font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg shadow-2xl shadow-[#CDB06A]/40 transition-all hover:shadow-[#CDB06A]/60 hover:scale-105"
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link
                  href="https://wa.me/6586163762?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Training%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-[#007A59] font-bold px-8 sm:px-10 py-6 sm:py-7 text-base sm:text-lg bg-transparent transition-all hover:scale-105"
                  >
                    Request Scientific Program
                  </Button>
                </Link>
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
                  Get In Touch
                </h2>
                <p className="text-lg text-gold mb-10 leading-relaxed">
                  Whether you have questions about the training, partnership
                  opportunities, or want to learn more about our regenerative
                  medicine ecosystem, we&apos;re here to help.
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
                    <a
                      href="https://wa.me/6586163762?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Training%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
                      className="text-gold hover:text-gold/80 transition-colors flex items-center gap-1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ArrowRight className="h-3 w-3" />
                      View Program
                    </a>
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
                                <span className="truncate">{formData.countryCode || "+1"}</span>
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
                              <SelectItem value="training">Training Enquiry</SelectItem>
                              <SelectItem value="program">Program Request</SelectItem>
                              <SelectItem value="partnership">Partnership Enquiry</SelectItem>
                              <SelectItem value="general">General Enquiry</SelectItem>
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
      </main>

      <Footer />
    </div>
  )
}
