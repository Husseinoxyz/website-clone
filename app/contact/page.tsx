"use client"

import React from "react"

import { useState } from "react"
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
import { Clock, Mail, MapPin, Phone, Send, CheckCircle } from "lucide-react"

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
    window.open(`https://wa.me/16466478616?text=${encodedMessage}`, "_blank", "noopener,noreferrer")
    setFormState("success")
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            <div className="relative flex items-center bg-teal px-4 sm:px-6 lg:px-8 py-16 lg:py-0 order-2 lg:order-1 text-white">
              <div className="mx-auto max-w-2xl text-left">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                  Get in touch with our team to learn more about OXYZ Health
                  International and our upcoming symposium
                </h1>
              </div>
            </div>

            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[70vh] order-1 lg:order-2">
              <Image
                src="/images/contact-hero.jpg"
                alt="OXYZ Health International contact"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/5" />
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Whether you have questions about the symposium, partnership
                  opportunities, or want to learn more about our regenerative
                  medicine ecosystem, we&apos;re here to help.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Email
                      </h3>
                      <a
                        href="mailto:global@oxyzhealth.com"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        global@oxyzhealth.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Phone / WhatsApp
                      </h3>
                      <a
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        href="https://wa.me/16466478616"
                        target="_blank"
                        rel="noreferrer"
                      >
                        +1 646 647 8616
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Headquarters
                      </h3>
                      <p className="text-muted-foreground">
                        USA | Singapore | Malaysia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        Business Hours
                      </h3>
                      <p className="text-muted-foreground">
                        Monday - Sunday: 9:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-10 p-6 bg-muted rounded-xl">
                  <h3 className="font-semibold text-foreground mb-4">
                    Quick Links
                  </h3>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <Link
                      href="/register"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      Register for Symposium
                    </Link>
                    <a
                      href="https://wa.me/16466478616"
                      className="text-muted-foreground hover:text-gold transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Program
                    </a>
                    <Link
                      href="/about"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      About OXYZ
                    </Link>
                    <Link
                      href="/why-work-with-us"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      Partnership Info
                    </Link>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div
                id="contact-form"
                className="bg-white p-8 rounded-2xl shadow-lg border border-border"
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
                    <h2 className="text-2xl font-bold text-foreground mb-2">
                      Send Us a Message
                    </h2>
                    <p className="text-muted-foreground mb-8">
                      Fill out the form below and we&apos;ll respond as soon as possible.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="Dr. John Smith"
                            className="border-border focus:border-gold focus:ring-gold"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="border-border focus:border-gold focus:ring-gold"
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <div className="flex gap-3">
                            <Select
                              value={formData.countryCode}
                              onValueChange={(value) =>
                                setFormData({ ...formData, countryCode: value })
                              }
                            >
                              <SelectTrigger className="w-28 border-border focus:border-gold focus:ring-gold">
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
                              className="border-border focus:border-gold focus:ring-gold"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="subject">Subject *</Label>
                          <Select
                            value={formData.subject}
                            onValueChange={(value) => setFormData({ ...formData, subject: value })}
                          >
                            <SelectTrigger className="border-border focus:border-gold focus:ring-gold">
                              <SelectValue placeholder="Select a topic" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="symposium">Symposium Enquiry</SelectItem>
                              <SelectItem value="program">Program Request</SelectItem>
                              <SelectItem value="partnership">Partnership Enquiry</SelectItem>
                              <SelectItem value="general">General Enquiry</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we help you?"
                          rows={5}
                          className="border-border focus:border-gold focus:ring-gold resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={formState === "submitting"}
                        className="w-full bg-gold hover:bg-gold-dark text-foreground font-semibold py-6"
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
