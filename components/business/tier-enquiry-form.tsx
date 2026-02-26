"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle, Send } from "lucide-react"

type TierEnquiryFormProps = {
  tierName: string
  defaultSubject: string
  defaultMessage: string
  sectionId?: string
  tone?: "gold" | "platinum"
}

const countryCodes = [
  { code: "+1", label: "USA" },
  { code: "+44", label: "United Kingdom" },
  { code: "+49", label: "Germany" },
  { code: "+60", label: "Malaysia" },
  { code: "+65", label: "Singapore" },
  { code: "+91", label: "India" },
  { code: "+971", label: "UAE" },
]

export function TierEnquiryForm({
  tierName,
  defaultSubject,
  defaultMessage,
  sectionId,
  tone = "gold",
}: TierEnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    countryCode: "+1",
    phone: "",
    subject: defaultSubject,
  })

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("submitting")

    const payload = [
      `OXYZ ${tierName} Enquiry`,
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.countryCode} ${formData.phone}`,
      `Subject: ${formData.subject}`,
      `Message: ${defaultMessage}`,
    ].join("\n")

    const encodedPayload = encodeURIComponent(payload)
    window.open(`https://wa.me/6586163762?text=${encodedPayload}`, "_blank", "noopener,noreferrer")
    setStatus("success")
  }

  const theme =
    tone === "platinum"
      ? {
          section: "bg-[#f2f6fb] border-[#c8d3de]",
          heading: "text-[#1f2d3a]",
          body: "text-[#3a4c5e]",
          label: "text-[#314556]",
          button: "bg-[#5f7182] hover:bg-[#536373]",
          success: "border-[#9fb0c2] bg-[#e9eff6] text-[#2b3f52]",
        }
      : {
          section: "bg-[#fffaf0] border-[#e2cf9f]",
          heading: "text-[#0f2f2a]",
          body: "text-[#315951]",
          label: "text-[#20453e]",
          button: "bg-[#b3903f] hover:bg-[#9d7f35]",
          success: "border-[#ceb06a] bg-[#f8f0db] text-[#4d3c14]",
        }

  return (
    <section id={sectionId} className={`relative left-1/2 right-1/2 -mx-[50vw] w-screen border-y ${theme.section}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      {status === "success" ? (
        <div className={`border-l-4 p-8 ${theme.success}`}>
          <CheckCircle className="mb-3 h-10 w-10" />
          <h3 className="text-2xl font-bold">Enquiry Sent</h3>
          <p className="mt-2">Your {tierName} enquiry has been sent to WhatsApp.</p>
        </div>
      ) : (
        <>
          <h3 className={`text-2xl font-bold sm:text-3xl ${theme.heading}`}>Send Us a Message</h3>
          <p className={`mt-2 text-base ${theme.body}`}>Fill out the form below and we&apos;ll respond as soon as possible.</p>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor={`${tierName}-name`} className={`text-sm font-semibold ${theme.label}`}>
                  Full Name
                </Label>
                <Input
                  id={`${tierName}-name`}
                  value={formData.name}
                  onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))}
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor={`${tierName}-email`} className={`text-sm font-semibold ${theme.label}`}>
                  Email Address
                </Label>
                <Input
                  id={`${tierName}-email`}
                  type="email"
                  value={formData.email}
                  onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${tierName}-phone`} className={`text-sm font-semibold ${theme.label}`}>
                Phone Number
              </Label>
              <div className="grid gap-3 sm:grid-cols-[190px_minmax(0,1fr)]">
                <Select
                  value={formData.countryCode}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, countryCode: value }))}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue>
                      {formData.countryCode} {countryCodes.find((item) => item.code === formData.countryCode)?.label || "USA"}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {countryCodes.map((item) => (
                      <SelectItem key={`${item.code}-${item.label}`} value={item.code}>
                        {item.code} {item.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Input
                  id={`${tierName}-phone`}
                  value={formData.phone}
                  onChange={(event) => setFormData((prev) => ({ ...prev, phone: event.target.value }))}
                  placeholder="Enter phone number"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor={`${tierName}-subject`} className={`text-sm font-semibold ${theme.label}`}>
                Subject
              </Label>
              <Input
                id={`${tierName}-subject`}
                value={formData.subject}
                onChange={(event) => setFormData((prev) => ({ ...prev, subject: event.target.value }))}
                required
              />
            </div>

            <Button type="submit" className={`w-full text-white ${theme.button}`} disabled={status === "submitting"}>
              {status === "submitting" ? "Sending..." : "Send Message"}
              <Send className="ml-2 h-4 w-4" />
            </Button>
          </form>
        </>
      )}
      </div>
    </section>
  )
}
