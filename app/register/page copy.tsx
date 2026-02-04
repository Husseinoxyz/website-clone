"use client";

import React from "react"

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Check, Shield, CreditCard, ArrowRight } from "lucide-react";
import Loading from "./loading";

const registrationTypes = [
  {
    id: "package-i-early-bird",
    name: "Package 1: Stem Cell Scholar Series (Early Bird)",
    price: 2500,
    priceId: "price_package_i_early_bird",
    deadline: "Early Bird by 28 February 2026",
    features: [
      "4 nights hotel stay (single occupancy, breakfast included)",
      "Full access to all 3-day symposium sessions",
      "All official meals and Gala Dinner",
      "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
    ],
  },
  {
    id: "package-i-standard",
    name: "Package 1: Stem Cell Scholar Series (Standard)",
    price: 3000,
    priceId: "price_package_i_standard",
    deadline: "After 28 February 2026",
    features: [
      "4 nights hotel stay (single occupancy, breakfast included)",
      "Full access to all 3-day symposium sessions",
      "All official meals and Gala Dinner",
      "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
    ],
  },
  {
    id: "package-ii",
    name: "Package 2: OXYZ Immersive Experience",
    price: 10000,
    priceId: "price_package_ii",
    deadline: null,
    features: [
      "Advanced OXYZ product suite",
      "VIP on-site diagnostics",
      "1-on-1 clinical protocol consultation",
      "Referral partnership",
    ],
  },
  {
    id: "package-iii",
    name: "Package 3: OXYZ Global Elite Partner",
    price: 25000,
    priceId: "price_package_iii",
    deadline: null,
    features: [
      "Root Cause BR Scan Machine with SOPs",
      "Executive strategy and regional expansion planning",
      "Security deposit waived",
      "Post-event clinical and staff training",
      "Elite business associate status",
    ],
  },
];

function RegistrationContent() {
  const searchParams = useSearchParams();
  const requestedType = searchParams.get("type");
  const initialType =
    registrationTypes.some((type) => type.id === requestedType) && requestedType
      ? requestedType
      : "package-i-early-bird";
  
  const [selectedType, setSelectedType] = useState(initialType);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    organization: "",
    role: "",
    specialization: "",
    interest: "",
  });

  const selectedRegistration = registrationTypes.find(
    (t) => t.id === selectedType
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          registrationType: selectedType,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Failed to create checkout session");
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
          <div className="relative flex items-center bg-teal-dark px-4 sm:px-6 lg:px-8 py-16 lg:py-0 order-2 lg:order-1 text-secondary-foreground">
            <div className="mx-auto max-w-2xl">
              <h1 className="text-4xl sm:text-5xl font-bold text-secondary-foreground mb-6">
                Register for Symposium 2026
              </h1>
              <p className="text-xl text-secondary-foreground/90 leading-relaxed">
                Complete your registration for the OXYZ International
                Regenerative Medicine & Strategic Collaboration Symposium 2026.
              </p>
            </div>
          </div>

          <div className="relative min-h-[280px] sm:min-h-[360px] lg:min-h-[70vh] order-1 lg:order-2">
            <Image
              src="/images/sym/register_hero.jpg"
              alt="Symposium registration"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-transparent lg:to-black/5" />
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Registration Type */}
                <div className="bg-muted rounded-lg p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Select Registration Type
                  </h2>
                  <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                    {registrationTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setSelectedType(type.id)}
                        className={`text-left p-4 rounded-lg border-2 transition-all ${
                          selectedType === type.id
                            ? "border-gold bg-gold/10"
                            : "border-border hover:border-gold/50"
                        }`}
                      >
                        <p className="font-semibold text-foreground text-sm mb-1">
                          {type.name}
                        </p>
                        <p className="text-2xl font-bold text-gold">
                          ${type.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {type.deadline}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="bg-muted rounded-lg p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Personal Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="bg-muted rounded-lg p-6">
                  <h2 className="text-xl font-bold text-foreground mb-4">
                    Professional Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="organization">Organization/Clinic *</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Role/Position *</Label>
                      <Select
                        value={formData.role}
                        onValueChange={(value) =>
                          handleSelectChange("role", value)
                        }
                      >
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select your role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="medical-doctor">
                            Medical Doctor
                          </SelectItem>
                          <SelectItem value="specialist">
                            Medical Specialist
                          </SelectItem>
                          <SelectItem value="clinic-owner">
                            Clinic Owner
                          </SelectItem>
                          <SelectItem value="healthcare-investor">
                            Healthcare Investor
                          </SelectItem>
                          <SelectItem value="distributor">
                            Medical Distributor
                          </SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="specialization">
                        Specialization/Area of Practice *
                      </Label>
                      <Input
                        id="specialization"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="e.g., Regenerative Medicine, Anti-Aging, Aesthetics"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="interest">
                        Area of Interest at Symposium
                      </Label>
                      <Textarea
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="mt-1"
                        rows={3}
                        placeholder="What are you hoping to learn or achieve at the symposium?"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8 py-6 text-lg"
                  >
                    {isLoading ? (
                      "Processing..."
                    ) : (
                      <>
                        Proceed to Payment
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Shield className="h-4 w-4" />
                    <span>Secure checkout powered by Stripe</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-lg p-6 sticky top-24">
                <h2 className="text-xl font-bold text-foreground mb-4">
                  Order Summary
                </h2>

                {selectedRegistration && (
                  <>
                    <div className="border-b border-border pb-4 mb-4">
                      <p className="font-semibold text-foreground">
                        {selectedRegistration.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {selectedRegistration.deadline}
                      </p>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {selectedRegistration.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="border-t border-border pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">
                          Registration Fee
                        </span>
                        <span className="font-semibold text-foreground">
                          ${selectedRegistration.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-lg font-bold">
                        <span className="text-foreground">Total</span>
                        <span className="text-gold">
                          USD ${selectedRegistration.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-6 p-4 bg-background rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <CreditCard className="h-4 w-4" />
                    <span>Secure Payment</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Your payment is processed securely through Stripe. We never
                    store your card details.
                  </p>
                </div>

                <div className="mt-4 p-4 bg-teal-dark/10 rounded-lg">
                  <p className="text-xs text-muted-foreground">
                    <strong>Note:</strong> All registrations are subject to
                    review and confirmation. You will receive a confirmation
                    email within 48 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loading />}>
        <RegistrationContent />
      </Suspense>
      <Footer />
    </>
  );
}
