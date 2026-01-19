"use client"

import React from "react"

import { useState } from "react"
import Image from "next/image"
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
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
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
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Contact Us
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
                  Get in touch with our team to learn more about OXYZ Health International
                  and our upcoming symposium
                </p>
              </div>
            </div>

            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[70vh] order-1 lg:order-2">
              <Image
                src="/images/contact-hero.jpg"
                alt="Contact OXYZ Health International"
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-8">
                  Get In Touch
                </h2>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  Whether you have questions about the symposium, partnership opportunities, 
                  or want to learn more about our regenerative medicine ecosystem, we&apos;re here to help.
                </p>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Email</h3>
                      <p className="text-muted-foreground">info@oxyzhealth.com</p>
                      <p className="text-muted-foreground">symposium@oxyzhealth.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (555) 123-4567</p>
                      <p className="text-muted-foreground">+1 (555) 987-6543</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Headquarters</h3>
                      <p className="text-muted-foreground">
                        123 Medical Innovation Drive<br />
                        Suite 500<br />
                        Miami, FL 33131
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">Business Hours</h3>
                      <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                      <p className="text-muted-foreground">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </div>

                {/* Quick Links */}
                <div className="mt-12 p-6 bg-muted rounded-xl">
                  <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <a href="/register" className="text-teal hover:text-teal-dark transition-colors">
                      Register for Symposium
                    </a>
                    <a href="/program" className="text-teal hover:text-teal-dark transition-colors">
                      View Program
                    </a>
                    <a href="/about" className="text-teal hover:text-teal-dark transition-colors">
                      About OXYZ
                    </a>
                    <a href="/why-work-with-us" className="text-teal hover:text-teal-dark transition-colors">
                      Partnership Info
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-border">
                {formState === "success" ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-teal/10 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10 text-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-8">
                      Thank you for reaching out. Our team will get back to you within 24-48 hours.
                    </p>
                    <Button
                      onClick={() => {
                        setFormState("idle")
                        setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
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
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="+1 (555) 000-0000"
                            className="border-border focus:border-gold focus:ring-gold"
                          />
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
                              <SelectItem value="symposium">Symposium Inquiry</SelectItem>
                              <SelectItem value="registration">Registration Help</SelectItem>
                              <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                              <SelectItem value="media">Media & Press</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
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

        {/* Map Section */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Location
              </h2>
              <p className="text-lg text-muted-foreground">
                Visit our headquarters in Miami, Florida
              </p>
            </div>
            <div className="aspect-[16/9] md:aspect-[21/9] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.8424813090717!2d-80.19179492392847!3d25.76168767734631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b69c2f4f0001%3A0x5e1d4e9d6d1e5b5a!2sMiami%2C%20FL%2033131!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="OXYZ Health International Location"
              />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Quick answers to common inquiries
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How do I register for the symposium?",
                  answer: "You can register online through our registration page. Select your preferred package (Standard, Premium, or VIP) and complete the secure checkout process.",
                },
                {
                  question: "What is included in the registration fee?",
                  answer: "All registration packages include full symposium access, networking sessions, materials, and refreshments. Premium and VIP packages include additional benefits like exclusive workshops and priority seating.",
                },
                {
                  question: "Can I get a refund if I can't attend?",
                  answer: "Yes, we offer full refunds up to 30 days before the event. Within 30 days, we can transfer your registration to another attendee or provide a credit for future events.",
                },
                {
                  question: "Are there partnership opportunities available?",
                  answer: "Absolutely! We offer various sponsorship and partnership packages. Contact our partnerships team for more information about exhibiting, speaking, or sponsoring the symposium.",
                },
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-border">
                  <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
