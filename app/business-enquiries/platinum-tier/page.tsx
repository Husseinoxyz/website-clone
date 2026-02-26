import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle2, Crown, Package, ShieldCheck, X } from "lucide-react"
import { TierEnquiryForm } from "@/components/business/tier-enquiry-form"

const cumulativeInclusions = [
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
  {
    title: "The Personal Stem Cell Suite",
    description: "Professional-grade inventory to jumpstart your practice.",
  },
  {
    title: "VIP On-Site Diagnostics",
    description: "Priority access to our cell screening tools testings.",
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

const strategicSuite = [
  {
    title: "Proprietary Hardware",
    description:
      "Full ownership of the Root Cause BR Scan Machine, a high-converting diagnostic cornerstone for your facility.",
  },
  {
    title: "Master Inventory Suite",
    description: "A massive launch stock to ensure immediate patient intake.",
  },
  {
    title: "Executive Strategy Session",
    description:
      "A dedicated 1-day private consultation focused on licensing, regional expansion, and high-level market positioning.",
  },
  {
    title: "Post-Event Staff Integration",
    description:
      "Dedicated training sessions for your lead staff and nurses post-event to ensure OXYZ protocols are executed with elite precision in your clinic.",
  },
  {
    title: "Elite Business Associate Status",
    description:
      "Formalized business associate agreement granting you the highest tier of support and pricing within the OXYZ global network.",
  },
]

const comparisonRows = [
  {
    feature: "Hospitality & 3-Day Symposium",
    silver: "✔",
    gold: "✔",
    platinum: "✔",
  },
  {
    feature: "Joint Certificate (Germany)",
    silver: "✔",
    gold: "✔",
    platinum: "✔",
  },
  {
    feature: "VIP On-site Diagnostics (Personal)",
    silver: "-",
    gold: "✔",
    platinum: "✔",
  },
  {
    feature: "Personal Stem Cell Suite (Inventory)",
    silver: "-",
    gold: "15+ Items",
    platinum: "40+ Items",
  },
  {
    feature: "1-on-1 Scientist Consultation",
    silver: "-",
    gold: "✔",
    platinum: "✔",
  },
  {
    feature: "Root Cause BR Scan Machine (Hardware)",
    silver: "-",
    gold: "-",
    platinum: "✔ OWNERSHIP",
  },
  {
    feature: "Staff Training",
    silver: "-",
    gold: "-",
    platinum: "✔ INCLUDED",
  },
  {
    feature: "Regional Expansion Consultation",
    silver: "-",
    gold: "-",
    platinum: "✔ INCLUDED",
  },
]

function comparisonTextClass(value: string, tier: "silver" | "gold" | "platinum") {
  if (value === "-") {
    return "text-[#93a0ad] font-medium"
  }

  if (value === "✔") {
    return tier === "gold"
      ? "text-[#3c4f61] font-semibold"
      : tier === "platinum"
        ? "text-[#233748] font-semibold"
        : "text-[#3c4f61] font-semibold"
  }

  if (value.includes("OWNERSHIP") || value.includes("INCLUDED")) {
    return "text-[#1f2d3a] font-bold"
  }

  if (value.includes("Items")) {
    return "text-[#2f4458] font-semibold"
  }

  return "text-[#2f4356] font-medium"
}

function renderComparisonValue(value: string, tier: "silver" | "gold" | "platinum") {
  const toneClass = comparisonTextClass(value, tier)
  const cleanValue = value.replace("✔", "").trim()

  if (value === "✔") {
    return (
      <span className={`inline-flex items-center justify-center ${toneClass}`} aria-label="Included">
        <CheckCircle2 className="h-5 w-5" />
      </span>
    )
  }

  if (value === "-") {
    return (
      <span className={`inline-flex items-center justify-center ${toneClass}`} aria-label="Not included">
        <X className="h-5 w-5" />
      </span>
    )
  }

  if (value.includes("OWNERSHIP")) {
    return (
      <span className={`inline-flex items-center justify-center gap-1.5 ${toneClass}`}>
        <Crown className="h-5 w-5" />
        <span>{cleanValue}</span>
      </span>
    )
  }

  if (value.includes("INCLUDED")) {
    return (
      <span className={`inline-flex items-center justify-center gap-1.5 ${toneClass}`}>
        <ShieldCheck className="h-5 w-5" />
        <span>{cleanValue}</span>
      </span>
    )
  }

  if (value.includes("Items")) {
    return (
      <span className={`inline-flex items-center justify-center gap-1.5 ${toneClass}`}>
        <Package className="h-5 w-5" />
        <span>{value}</span>
      </span>
    )
  }

  return <span className={toneClass}>{value}</span>
}

export default function PlatinumTierPage() {
  return (
    <main className="min-h-screen bg-[#f5f7fa]">
      <Header />

      <section className="relative w-full min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/platinum/hero.jpg"
            alt="Platinum Tier global elite partner"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/10" />
        </div>

        <div className="relative z-10 flex items-end min-h-screen px-4 pb-12 pt-20 sm:px-6 sm:pb-16 md:px-8 md:pb-20 lg:px-16 lg:pb-24 xl:px-24">
          <div className="max-w-4xl w-full">
            <h1 className="text-[#CDB06A] text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15]">
              Platinum Global Elite: Secure Your Regional Dominance.
            </h1>
            <p className="mt-6 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl">
              This is more than a symposium. It is a turn-key expansion strategy. The Platinum Tier is designed for the visionary clinic owner who is ready to lead the regional market with proprietary diagnostic hardware, massive inventory, and a certified clinical team.
            </p>
            <div className="mt-8">
              <Button asChild className="bg-[#6a7986] px-8 py-6 text-sm font-semibold text-white hover:bg-[#5c6974]">
                <a href="#platinum-register">Apply for Elite Partnership</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#d0d9e2]">
        <div className="grid w-full items-stretch gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="px-4 py-12 text-left sm:px-6 sm:py-16 lg:order-2 lg:px-12 xl:px-16">
            <h2 className="mt-2 text-3xl font-bold text-[#1f2d3a] sm:text-5xl">From Clinic Owner to Regional Authority.</h2>
            <p className="mt-6 text-lg leading-relaxed text-[#334b5e] sm:text-xl">
              The Platinum Tier is a Clinic-in-a-Box solution for the world&apos;s leading healthcare entrepreneurs. We provide the infrastructure you need to move beyond single-patient care and into institutional scaling. As a Global Elite Partner, you don&apos;t just attend the event; you acquire the technology and licensing to become the primary OXYZ hub in your territory.
            </p>
          </div>
          <div className="relative min-h-[380px] sm:min-h-[520px] lg:order-1 lg:min-h-[680px]">
            <Image
              src="/platinum/2.png"
              alt="Platinum tier institutional strategy"
              fill
              sizes="(max-width: 1024px) 100vw, 35vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="mt-2 text-3xl font-bold text-[#1f2d3a] sm:text-5xl">
            The Data-First Strategy: Closing the Gap Between Science and Trust.
          </h2>
          <p className="mt-5 max-w-5xl text-lg leading-relaxed text-[#3a4c5e] sm:text-xl">
            In high-ticket regenerative medicine, trust is built through objective data. Platinum partners receive an exclusive gift of the Root Cause BR Scan Machine to allow for you to move away from subjective improvements and into verifiable results.
          </p>
          <div className="mt-8 grid gap-5 text-lg leading-relaxed text-[#3a4c5e] sm:text-xl lg:grid-cols-3">
            <p>
              <span className="font-bold text-[#263847]">Diagnostic Authority:</span> Show your patients their biological age and cellular resonance in real-time.
            </p>
            <p>
              <span className="font-bold text-[#263847]">Verification of Efficacy:</span> Use the BR Scan to prove the results of the Mega+ Cell series, creating an unbreakable loop of patient trust and treatment adherence.
            </p>
            <p>
              <span className="font-bold text-[#263847]">Institutional SOPs:</span> We provide the exact Standard Operating Procedures used by OXYZ globally to ensure your clinic operates with the same precision as our headquarters.
            </p>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#e7edf3]">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="mt-2 text-3xl font-bold text-[#1f2d3a] sm:text-5xl">Strategic and Clinical Package Stack</h2>

          <div className="mt-8 grid gap-12 lg:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-[#1f2d3a]">Includes everything in the SILVER & GOLD Tiers</h3>
              <Accordion type="multiple" className="mt-4 w-full">
                {cumulativeInclusions.map((item, index) => (
                  <AccordionItem key={item.title} value={`platinum-cumulative-${index}`} className="border-[#b7c5d2]">
                    <AccordionTrigger className="text-left text-lg font-semibold text-[#263847] hover:no-underline sm:text-xl">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-[#3a4c5e] sm:text-lg">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#1f2d3a]">PLUS the Strategic Business Suite</h3>
              <Accordion type="multiple" className="mt-4 w-full">
                {strategicSuite.map((item, index) => (
                  <AccordionItem key={item.title} value={`platinum-strategy-${index}`} className="border-[#b7c5d2]">
                    <AccordionTrigger className="text-left text-lg font-semibold text-[#263847] hover:no-underline sm:text-xl">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-base leading-relaxed text-[#3a4c5e] sm:text-lg">
                      {item.description}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          <div className="mt-10 border border-[#bcc8d4] bg-white shadow-[0_16px_34px_rgba(31,45,58,0.08)]">
            <div className="border-b border-[#d2dae3] px-4 py-4 sm:px-6">
              <h3 className="text-xl font-bold text-[#1f2d3a] sm:text-2xl">The Full Cumulative Comparison</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-[860px] w-full border-collapse text-left">
                <thead>
                  <tr className="text-[#243746]">
                    <th className="bg-[#edf2f7] px-5 py-4 text-sm font-bold uppercase tracking-[0.08em]">Feature</th>
                    <th className="bg-[#f2f5f9] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#3d4e60]">Silver</th>
                    <th className="bg-gold px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#1f2d3a]">Gold</th>
                    <th className="bg-[#e1e8f1] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.08em] text-[#22384a]">Platinum</th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row, index) => (
                    <tr key={row.feature} className={`border-t border-[#e2e7ed] ${index % 2 === 0 ? "bg-white" : "bg-[#fafcfe]"}`}>
                      <td className="px-5 py-4 text-sm font-semibold text-[#2b3f52] sm:text-base">{row.feature}</td>
                      <td className="bg-[#f8fafd] px-5 py-4 text-center text-sm sm:text-base">
                        {renderComparisonValue(row.silver, "silver")}
                      </td>
                      <td className="bg-white px-5 py-4 text-center text-sm sm:text-base">
                        {renderComparisonValue(row.gold, "gold")}
                      </td>
                      <td className="bg-[#f1f5fa] px-5 py-4 text-center text-sm sm:text-base">
                        {renderComparisonValue(row.platinum, "platinum")}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-[#f8fafc]">
        <div className="grid w-full items-stretch gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative min-h-[320px] sm:min-h-[430px] lg:min-h-full">
            <video
              title="Platinum clinical data case studies"
              className="h-full w-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/images/PLATINUM-test.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="px-4 py-12 sm:px-6 sm:py-16 lg:px-12 xl:px-16">
            <h2 className="mt-2 text-3xl font-bold text-[#1f2d3a] sm:text-5xl">Data-Backed Results: A Practitioner&apos;s Perspective</h2>
            <p className="mt-3 text-lg font-semibold text-[#5f7285] sm:text-xl">Tremendous Results from Scan to Clinical Tests</p>
            <p className="mt-6 text-lg leading-relaxed text-[#3a4c5e] sm:text-xl">
              "As a business associate in Lebanon, I have integrated the OXYZ Mega+ Cell vials into my practice with exceptional success. What makes this system unique is the ability to verify results through two lenses: our own clinical lab tests and the OXYZ Bio-Resonance scans. The data is consistent, and the patient outcomes are undeniable. I will be presenting my specific case studies at the 2026 Symposium to show how these protocols bridge the gap between diagnostic technology and clinical reality."
            </p>
            <p className="mt-4 text-base font-semibold text-[#263847] sm:text-lg">Global Elite Partner, Lebanon</p>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <h2 className="mt-2 text-3xl font-bold text-[#1f2d3a] sm:text-5xl">Protecting Your Territory.</h2>
          <p className="mt-5 max-w-5xl text-lg leading-relaxed text-[#3a4c5e] sm:text-xl">
            To ensure our Global Elite Partners have the necessary market space to scale, Platinum status is strictly limited. We provide the hardware and the training; we also protect your regional influence. Selection is based on clinical alignment and the capacity for institutional growth.
          </p>
        </div>
      </section>

      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/platinum/cta.jpg"
            alt="Platinum tier strategic legacy background"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#1c2c3a]/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
          <h2 className="text-3xl font-bold text-white sm:text-5xl">Architect Your Legacy.</h2>
          <p className="mx-auto mt-4 max-w-5xl text-lg leading-relaxed text-[#dbe5ee] sm:text-xl">
            Secure the hardware, the inventory, and the training to lead your region in the new era of regenerative medicine.
          </p>
          <div className="mt-6 flex flex-col items-stretch justify-center gap-4 sm:flex-row">
            <Button asChild className="bg-[#6a7986] px-8 py-6 text-sm font-semibold text-white hover:bg-[#5c6974]">
              <a href="#platinum-register">APPLY FOR PLATINUM ELITE PARTNERSHIP</a>
            </Button>
            <Button asChild variant="outline" className="border-[#9eb0c2] bg-transparent px-8 py-6 text-sm font-semibold text-white hover:bg-white/10">
              <a href="#platinum-register">REQUEST A PRIVATE STRATEGIC BRIEFING</a>
            </Button>
          </div>
        </div>
      </section>

      <TierEnquiryForm
        tierName="Platinum Tier"
        defaultSubject="Platinum Tier Enquiry"
        defaultMessage="I want to apply for Platinum Elite Partnership. Please share strategic suite details, pricing, and onboarding timeline."
        sectionId="platinum-register"
        tone="platinum"
      />

      <Footer />
    </main>
  )
}
