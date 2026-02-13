import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { 
  Users, 
  Globe, 
  TrendingUp, 
  Award, 
  Handshake, 
  Building2,
  CheckCircle,
  ArrowRight,
  Star,
  Target,
  Lightbulb,
  Shield
} from "lucide-react"

const benefits = [
  {
    icon: Globe,
    title: "Global Network Access",
    description: "Connect with over 500 medical practices and specialists across 30+ countries through our established international network.",
  },
  {
    icon: TrendingUp,
    title: "Revenue Growth",
    description: "Partners experience an average 40% increase in regenerative medicine revenue within the first year of collaboration.",
  },
  {
    icon: Award,
    title: "Clinical Excellence",
    description: "Access to evidence-based protocols, continuous education, and peer-reviewed treatment methodologies.",
  },
  {
    icon: Shield,
    title: "Compliance Support",
    description: "Navigate regulatory requirements with confidence through our comprehensive compliance and quality assurance programs.",
  },
  {
    icon: Lightbulb,
    title: "Innovation Pipeline",
    description: "Early access to emerging therapies, cutting-edge research, and breakthrough treatment technologies.",
  },
  {
    icon: Users,
    title: "Community Support",
    description: "Join a collaborative community of like-minded practitioners dedicated to advancing regenerative medicine.",
  },
]

const partnershipTiers = [
  {
    tier: "Associate Partner",
    description: "Ideal for practices new to regenerative medicine",
    features: [
      "Network directory listing",
      "Educational resources access",
      "Quarterly newsletters",
      "Community forum access",
      "Annual training discount",
    ],
    highlight: false,
  },
  {
    tier: "Clinical Partner",
    description: "For established regenerative medicine practices",
    features: [
      "Everything in Associate tier",
      "Patient referral network",
      "Protocol development support",
      "Marketing materials & support",
      "Priority training registration",
      "Quarterly webinars & training",
    ],
    highlight: true,
  },
  {
    tier: "Strategic Partner",
    description: "For leading institutions and multi-location practices",
    features: [
      "Everything in Clinical tier",
      "Joint research opportunities",
      "Speaking opportunities at events",
      "Custom training programs",
      "Dedicated account manager",
      "Co-marketing initiatives",
      "Board advisory participation",
    ],
    highlight: false,
  },
]

const testimonials = [
  {
    quote: "Joining the OXYZ network transformed our practice. The protocols, training, and referral network have been invaluable for our growth in regenerative medicine.",
    author: "Dr. Sarah Chen",
    role: "Medical Director, Advanced Regenerative Clinic",
    location: "Los Angeles, CA",
  },
  {
    quote: "The strategic partnership has opened doors we never thought possible. From research collaborations to international referrals, OXYZ delivers exceptional value.",
    author: "Dr. Michael Torres",
    role: "Founder, Integrative Medicine Institute",
    location: "Miami, FL",
  },
  {
    quote: "What sets OXYZ apart is their commitment to clinical excellence. The evidence-based approach and continuous education have elevated our entire practice.",
    author: "Dr. Emily Watson",
    role: "Chief Medical Officer, Wellness Medical Group",
    location: "New York, NY",
  },
]

const stats = [
  { value: "500+", label: "Partner Practices" },
  { value: "30+", label: "Countries" },
  { value: "40%", label: "Avg. Revenue Growth" },
  { value: "98%", label: "Partner Retention" },
]

export default function WhyWorkWithUsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
            <div className="relative flex items-center bg-teal px-4 sm:px-6 lg:px-8 py-16 lg:py-0 order-2 lg:order-1 text-white">
              <div className="mx-auto max-w-2xl">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-sm mb-6">
                  <Handshake className="w-4 h-4" />
                  <span>Partnership Opportunities</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  Why Work With Us
                </h1>
                <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8">
                  Join the premier global network dedicated to advancing regenerative medicine
                  and transforming patient outcomes worldwide.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground font-semibold">
                    <Link href="/contact">
                      Become a Partner
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                    <Link href="/about">Learn About OXYZ</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[70vh] order-1 lg:order-2">
              <Image
                src="/images/partnership-hero.jpg"
                alt="Partnership"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/5" />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partnership Benefits
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover how joining the OXYZ network can accelerate your practice&apos;s 
                growth and impact in regenerative medicine.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="p-8 bg-white rounded-2xl shadow-sm border border-border hover:shadow-lg transition-shadow"
                >
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6">
                    <benefit.icon className="w-7 h-7 text-gold" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Partnership Works
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A simple, structured approach to joining our global network
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Initial Consultation",
                  description: "Connect with our partnership team to discuss your practice goals and needs.",
                },
                {
                  step: "02",
                  title: "Assessment",
                  description: "We evaluate alignment with our network values and identify collaboration opportunities.",
                },
                {
                  step: "03",
                  title: "Onboarding",
                  description: "Complete our comprehensive onboarding program and gain access to resources.",
                },
                {
                  step: "04",
                  title: "Active Partnership",
                  description: "Begin leveraging the full benefits of the OXYZ global network.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-bold text-gold/20 mb-4">{item.step}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-8 right-0 w-1/2 h-px bg-gold/30" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partnership Tiers */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partnership Tiers
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Choose the partnership level that best fits your practice&apos;s stage and goals
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTiers.map((tier, index) => (
                <div 
                  key={index}
                  className={`relative p-8 rounded-2xl ${
                    tier.highlight 
                      ? "bg-teal text-white shadow-xl scale-105" 
                      : "bg-white border border-border shadow-sm"
                  }`}
                >
                  {tier.highlight && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-foreground text-sm font-semibold rounded-full">
                      Most Popular
                    </div>
                  )}
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className={`w-6 h-6 ${tier.highlight ? "text-gold" : "text-gold"}`} />
                    <h3 className="text-xl font-bold">{tier.tier}</h3>
                  </div>
                  <p className={`mb-6 ${tier.highlight ? "text-white/80" : "text-muted-foreground"}`}>
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                          tier.highlight ? "text-gold" : "text-teal"
                        }`} />
                        <span className={tier.highlight ? "text-white/90" : "text-foreground"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className={`w-full ${
                      tier.highlight 
                        ? "bg-gold hover:bg-gold-dark text-foreground" 
                        : "bg-teal hover:bg-teal-dark text-white"
                    }`}
                  >
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Partner Success Stories
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Hear from practices that have transformed their regenerative medicine offerings 
                through OXYZ partnership
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-border">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-6 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-teal text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Target className="w-16 h-16 mx-auto mb-6 text-gold" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Practice?
            </h2>
            <p className="text-xl text-white/90 mb-10 leading-relaxed">
              Join the growing network of forward-thinking medical professionals 
              who are shaping the future of regenerative medicine. Let&apos;s explore 
              how we can grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold-dark text-foreground font-semibold">
                <Link href="/contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                <Link href="/register">Attend the Training</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
