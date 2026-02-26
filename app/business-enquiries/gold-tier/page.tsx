import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { TierEnquiryForm } from "@/components/business/tier-enquiry-form"

const silverInclusions = [
  {
    title: "4 Nights Premium Stay",
    description: "Single occupancy hotel accommodation with daily breakfast.",
  },
  {
    title: "Full Access",
    description: "Entry to all 3 days of scientific sessions and strategic presentations.",
  },
  {
    title: "Elite Hospitality",
    description: "All official symposium meals and the prestigious Gala Dinner.",
  },
  {
    title: "Accreditation",
    description: "Joint Certificate from OXYZ Academy & DFGTT (Germany).",
  },
]

const goldInclusions = [
  {
    title: "The Personal Stem Cell Suite",
    description: "Depart with a professional-grade inventory to jumpstart your practice.",
  },
  {
    title: "VIP On-Site Diagnostics",
    description:
      "Priority access to our cell screening tools testing to establish your own biological baseline and observe the protocol's efficacy.",
  },
  {
    title: '1-on-1 "Cellular Reset" Consultation',
    description:
      "A private, deep-dive session with an OXYZ Specialist Consultant to interpret your results and design a custom protocol for your personal and clinical use.",
  },
  {
    title: "Referral Partnership",
    description:
      "Immediate entry into our direct referral agreement, allowing you to monetize OXYZ solutions within your own patient network immediately.",
  },
]

export default function GoldTierPage() {
  return (
    <main className="min-h-screen bg-[#f7f5f0]">
      <Header />

      <section className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/gold/gold-hero.jpg"
            alt="Gold Tier immersive experience"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />
        </div>

        <div className="relative z-10 flex items-end min-h-screen px-4 pb-12 pt-20 sm:px-6 sm:pb-16 md:px-8 md:pb-20 lg:px-16 lg:pb-24 xl:px-24">
          <div className="max-w-4xl w-full">
            <h1 className="text-[#CDB06A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15]">
              The Gold Immersive Experience: Become the Proof.
            </h1>
            <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
              Move beyond the lecture hall. Transform your clinical authority by experiencing the OXYZ "Cellular Reset" firsthand. This track is designed for the practitioner who leads through experience and demands a high-yield integration of science and practice.
            </p>
            <div className="mt-8">
              <Button asChild className="bg-[#b3903f] px-8 py-6 text-sm font-semibold text-white hover:bg-[#9d7f35]">
                <a href="#gold-register">Apply for Gold Tier Access</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#e4c56d]">
        <div className="grid w-full items-stretch gap-0 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12 xl:px-16">
            <h2 className="mt-2 text-3xl font-bold text-[#0f312b] sm:text-5xl">From Practitioner to Pioneer.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#1f453f] sm:text-xl">
              The Gold Tier isn&apos;t just an educational seminar. It is a clinical metamorphosis. We move you from the role of a spectator to the center of the diagnostic suite. Here, you will receive a personalized protocol designed by our lead scientists, utilizing the same technology you will provide to your patients. You don&apos;t just learn the science; you embody it.
            </p>
          </div>
          <div className="relative min-h-[300px] sm:min-h-[420px] lg:min-h-full">
            <Image
              src="/gold/Gold-2.jpg"
              alt="Gold tier clinical implementation"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white">
        <div className="grid w-full items-stretch gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12 xl:px-16">
            <h2 className="mt-2 text-3xl font-bold text-[#10332d] sm:text-5xl">
              The "Doctor-as-Patient" Advantage: Why Personal Experience Matters.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[#2e5a51] sm:text-xl">
              In the field of longevity and regenerative medicine, your greatest clinical tool is your own conviction.
            </p>
            <ul className="mt-7 space-y-5 text-lg leading-relaxed text-[#2e5a51] sm:text-xl">
              <li>
                <span className="font-bold text-[#173f37]">Authentic Authority:</span> When you describe the "Cellular Reset" to a patient, you are speaking from personal biological data, not just a brochure.
              </li>
              <li>
                <span className="font-bold text-[#173f37]">Observe the Shift:</span> By undergoing Live Blood Analysis and Bio-Resonance yourself, you see the real-time cellular shifts that OXYZ protocols facilitate.
              </li>
              <li>
                <span className="font-bold text-[#173f37]">Unshakable Confidence:</span> Trying the product yourself eliminates the clinical gap. You return to your practice with the absolute certainty that comes from seeing your own markers move.
              </li>
            </ul> 
          </div>
          <div className="flex flex-col justify-center border-l-4 border-[#b3903f] px-4 py-12 sm:px-6 sm:py-16 lg:px-12 xl:px-16">
            <p className="text-2xl font-semibold italic leading-relaxed text-[#2a3c38] sm:text-3xl">
              "A doctor who has experienced the reset is a doctor who can sell the result."
            </p>
            <div className="relative mt-8 min-h-[280px] bg-[#f6f1e2] sm:min-h-[360px] lg:min-h-[420px] -mx-4 sm:-mx-6 lg:-mx-12 xl:-mx-16">
              <Image
                src="/gold/Speaker.png"
                alt="Clinical success collaboration"
                fill
                sizes="(max-width: 1024px) 100vw, 32vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden bg-[#dbc17f]">
        <img
          src="/images/faq.gif?v=20260220"
          alt=""
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-25 faq-overlay-motion"
        />
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="mt-2 text-3xl font-bold text-[#0f312b] sm:text-5xl">What You Receive in Gold Tier</h2>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-[#0f312b]">Everything in the Stem Cell Scholar Package (Silver Tier)</h3>
              <Accordion type="multiple" className="mt-4 w-full">
                {silverInclusions.map((item, index) => (
                  <AccordionItem key={item.title} value={`silver-${index}`} className="border-[#c9ab5a]">
                    <AccordionTrigger className="text-left text-lg font-semibold text-[#173f37] hover:no-underline sm:text-xl">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-[#213c37] sm:text-lg">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0f312b]">PLUS - The Clinical Integration Suite (Gold Tier)</h3>
              <Accordion type="multiple" className="mt-4 w-full">
                {goldInclusions.map((item, index) => (
                  <AccordionItem key={item.title} value={`gold-${index}`} className="border-[#c9ab5a]">
                    <AccordionTrigger className="text-left text-lg font-semibold text-[#173f37] hover:no-underline sm:text-xl">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-[#213c37] sm:text-lg">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#f5f2e9]">
        <div className="grid w-full items-start gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative h-[380px] sm:h-[500px] lg:h-[620px]">
            <video
              title="Gold tier clinical success stories"
              className="h-full w-full object-cover"
              poster="/images/tesimonials/test-1.mp4.png"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/images/tesimonials/test-1.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12 xl:px-16">
            <h2 className="mt-2 text-3xl font-bold text-[#10332d] sm:text-5xl">Proven Pathways: Clinical Success Stories</h2>
            <p className="mt-3 text-lg font-semibold text-[#936f27] sm:text-xl">From Attendees to Global Distributors</p>
            <p className="mt-6 text-lg leading-relaxed text-[#2e5a51] sm:text-xl">
              "The results we&apos;ve seen are nothing short of transformative. After attending the OXYZ training in 2025, we didn&apos;t just teach the protocols, we lived them. The clinical outcomes for our patients in South Africa were so significant that we transitioned from attendees to official distributors. We regularly refer complex cases to the Malaysia center, and the Cellular Reset feedback has been tremendous. This is the start of a global clinical network."
            </p>
            <p className="mt-4 text-base font-semibold text-[#173f37] sm:text-lg">Business Associates, South Africa</p>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/platinum/cta.jpg"
            alt="Lead your practice with confidence"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0f312b]/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">Lead Your Practice with Confidence.</h2>
          <div className="mt-6">
            <Button asChild className="bg-[#b3903f] px-8 py-6 text-sm font-semibold text-white hover:bg-[#9d7f35]">
              <a href="#gold-register">APPLY FOR THE GOLD IMMERSIVE EXPERIENCE</a>
            </Button>
          </div>
        </div>
      </section>

      <TierEnquiryForm
        tierName="Gold Tier"
        defaultSubject="Gold Tier Enquiry"
        defaultMessage="I want to apply for Gold Tier access. Please share full inclusions, pricing, and next steps."
        sectionId="gold-register"
        tone="gold"
      />

      <Footer />
    </main>
  )
}
