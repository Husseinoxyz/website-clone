"use client";

import React from "react"

import { useState, Suspense, useEffect } from "react";
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
import { Check, Shield, CreditCard, ArrowRight, ClipboardCheck, X } from "lucide-react";
import Loading from "./loading";

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
  { code: "+1", country: "USA/Canada" },
  { code: "+7", country: "Russia" },
  { code: "+20", country: "Egypt" },
  { code: "+27", country: "South Africa" },
  { code: "+30", country: "Greece" },
  { code: "+31", country: "Netherlands" },
  { code: "+32", country: "Belgium" },
  { code: "+33", country: "France" },
  { code: "+34", country: "Spain" },
  { code: "+36", country: "Hungary" },
  { code: "+39", country: "Italy" },
  { code: "+40", country: "Romania" },
  { code: "+41", country: "Switzerland" },
  { code: "+43", country: "Austria" },
  { code: "+44", country: "United Kingdom" },
  { code: "+45", country: "Denmark" },
  { code: "+46", country: "Sweden" },
  { code: "+47", country: "Norway" },
  { code: "+48", country: "Poland" },
  { code: "+49", country: "Germany" },
  { code: "+51", country: "Peru" },
  { code: "+52", country: "Mexico" },
  { code: "+53", country: "Cuba" },
  { code: "+54", country: "Argentina" },
  { code: "+55", country: "Brazil" },
  { code: "+56", country: "Chile" },
  { code: "+57", country: "Colombia" },
  { code: "+58", country: "Venezuela" },
  { code: "+60", country: "Malaysia" },
  { code: "+61", country: "Australia" },
  { code: "+62", country: "Indonesia" },
  { code: "+63", country: "Philippines" },
  { code: "+64", country: "New Zealand" },
  { code: "+65", country: "Singapore" },
  { code: "+66", country: "Thailand" },
  { code: "+81", country: "Japan" },
  { code: "+82", country: "South Korea" },
  { code: "+84", country: "Vietnam" },
  { code: "+86", country: "China" },
  { code: "+90", country: "Turkey" },
  { code: "+91", country: "India" },
  { code: "+92", country: "Pakistan" },
  { code: "+93", country: "Afghanistan" },
  { code: "+94", country: "Sri Lanka" },
  { code: "+95", country: "Myanmar" },
  { code: "+98", country: "Iran" },
  { code: "+212", country: "Morocco" },
  { code: "+213", country: "Algeria" },
  { code: "+216", country: "Tunisia" },
  { code: "+218", country: "Libya" },
  { code: "+220", country: "Gambia" },
  { code: "+221", country: "Senegal" },
  { code: "+233", country: "Ghana" },
  { code: "+234", country: "Nigeria" },
  { code: "+251", country: "Ethiopia" },
  { code: "+254", country: "Kenya" },
  { code: "+256", country: "Uganda" },
  { code: "+260", country: "Zambia" },
  { code: "+263", country: "Zimbabwe" },
  { code: "+971", country: "UAE" },
  { code: "+972", country: "Israel" },
  { code: "+973", country: "Bahrain" },
  { code: "+974", country: "Qatar" },
  { code: "+975", country: "Bhutan" },
  { code: "+976", country: "Mongolia" },
  { code: "+977", country: "Nepal" },
  { code: "+994", country: "Azerbaijan" },
  { code: "+995", country: "Georgia" },
  { code: "+998", country: "Uzbekistan" },
];

const countries = [
  "Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda",
  "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
  "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan",
  "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria",
  "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde",
  "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros",
  "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Denmark",
  "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt",
  "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Fiji",
  "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece",
  "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras",
  "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel",
  "Italy", "Ivory Coast", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya",
  "Kiribati", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho",
  "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macedonia",
  "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands",
  "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia",
  "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal",
  "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
  "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay",
  "Peru", "Philippines", "Poland", "Portugal", "Qatar", "Romania", "Russia", "Rwanda",
  "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa",
  "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia",
  "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands",
  "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka",
  "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan",
  "Tajikistan", "Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago",
  "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates",
  "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City",
  "Venezuela", "Vietnam", "Yemen", "Zambia", "Zimbabwe"
];

const packageFeatures = [
  // Silver Tier Features
  {
    name: "4 nights hotel stay (single occupancy, breakfast included)",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Full access to all 3-day training sessions",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "All official meals and Gala Dinner",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Joint Certificate: OXYZ Academy & DFGTT (Germany)",
    silver: true,
    gold: true,
    platinum: true,
  },
  {
    name: "Exclusive hamper: Full trial series of all OXYZ products",
    silver: true,
    gold: false,
    platinum: false,
  },
  {
    name: "Exclusive hamper: Full trial series of all OXYZ products",
    silver: true,
    gold: true,
    platinum: true,
  },
  // Gold Tier Exclusive Features
  {
    name: "Personal Stem Cell Suite (10 Boxes Oral MSC, BioSeries, Micro Cells)",
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    name: "VIP Clinical Screening: Live Blood Analysis, HRV, Bio-Resonance",
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    name: "1-on-1 'Cellular Reset' protocol design with Lead Scientist",
    silver: false,
    gold: true,
    platinum: true,
  },
  {
    name: "Direct referral agreement (15–20% commission scheme)",
    silver: false,
    gold: true,
    platinum: true,
  },
  // Platinum Tier Exclusive Features
  {
    name: "Root Cause BR Scan Machine with Full Operating SOPs",
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    name: "Inventory Suite: 20 sets Oral MSC, 20 boxes Gut+, Anti-Aging set",
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    name: "1-day dedicated licensing & regional expansion consultation",
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    name: "3–6 post-event training sessions for lead staff/nurses",
    silver: false,
    gold: false,
    platinum: true,
  },
  {
    name: "Elite Dealership status (30–35% margin, security deposit waived)",
    silver: false,
    gold: false,
    platinum: true,
  },
];

const registrationTypes = [
  {
    id: "silver-tier-early-bird",
    name: "Silver Tier: Stem Cell Scholar (Early Bird)",
    shortName: "Silver Tier",
    tierKey: "silver" as const,
    price: 2500,
    priceId: "price_package_i_early_bird",
    deadline: "Early Bird by 28 February 2026",
    standardPrice: "$3,000 Standard",
    badge: "Early Bird",
  },
  {
    id: "silver-tier-standard",
    name: "Silver Tier: Stem Cell Scholar (Standard)",
    shortName: "Silver Tier",
    tierKey: "silver" as const,
    price: 3000,
    priceId: "price_package_i_standard",
    deadline: "After 28 February 2026",
    standardPrice: null,
    badge: "Standard",
  },
];

function RegistrationContent() {
  useScrollAnimation();
  
  const searchParams = useSearchParams();
  const requestedType = searchParams.get("type");
  const initialType =
    registrationTypes.some((type) => type.id === requestedType) && requestedType
      ? requestedType
      : "silver-tier-early-bird";
  
  const [selectedType, setSelectedType] = useState(initialType);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
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
        console.error("Failed to create checkout session", {
          status: response.status,
          data,
        });
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <main>
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

      {/* Hero - Enhanced */}
      <section className="relative w-full min-h-[62vh] md:min-h-[68vh]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/sym/register_hero.jpg"
            alt="Training registration"
            fill
            priority
            sizes="100vw"
            className="object-cover object-top"
          />
          
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/45 to-black/15" />
        </div>

        {/* Content Container - Positioned at bottom */}
        <div className="relative z-10 flex items-end min-h-[62vh] md:min-h-[68vh] px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 pb-6 sm:pb-8 md:pb-10 lg:pb-12 pt-20">
          <div className="max-w-4xl w-full">
            
            {/* Main Title */}
            <div className="mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
              <h1 className="font-bold leading-[1.15] text-[#CDB06A]">
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  Register for
                </span>
                <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-2">
                  Training 2026
                </span>
                <span className="block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light mt-4 sm:mt-5 text-white/90 tracking-wide">
                  Secure Your Place at the Premier Event
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed mb-10 sm:mb-12 max-w-2xl animate-fade-in-up opacity-0 animation-delay-400 font-light">
              Complete your registration for the OXYZ International Regenerative Medicine & Strategic Collaboration Training 2026.
            </p>

            {/* Info Pills */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up opacity-0 animation-delay-600">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
                <Check className="h-4 w-4 text-gold" />
                <span>18-20 April 2026</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm text-white">
                <Check className="h-4 w-4 text-gold" />
                <span>Limited to 80-100 Participants</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2 animate-on-scroll slide-in-left">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Registration Type */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100">
                  <h2 className="text-2xl font-bold text-[#007A59] mb-6 flex items-center gap-2">
                    Select Registration Tier
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {registrationTypes.map((type) => {
                      const isSelected = selectedType === type.id;
                      const isEarlyBird = type.id === "silver-tier-early-bird";

                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`text-left p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
                            isSelected && isEarlyBird
                              ? "border-[#006b4f] bg-[#007A59] shadow-lg ring-2 ring-[#007A59]/35"
                              : isSelected
                              ? "border-gold bg-gold/20 shadow-md"
                              : isEarlyBird
                              ? "border-[#007A59] bg-[#007A59] hover:bg-[#006b4f] hover:border-[#006b4f]"
                              : "border-slate-200 hover:border-gold/50"
                          }`}
                        >
                          {type.badge && (
                            <span
                              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${
                                isEarlyBird
                                  ? "bg-gold text-[#1f2d24]"
                                  : "bg-teal text-white"
                              }`}
                            >
                              {type.badge}
                            </span>
                          )}
                          <p
                            className={`font-semibold text-sm mb-2 ${
                              isEarlyBird ? "text-white" : "text-[#007A59]"
                            }`}
                          >
                            {type.name}
                          </p>
                          <p
                            className={`text-3xl font-bold mb-1 ${
                              isEarlyBird ? "text-white" : "text-gold"
                            }`}
                          >
                            ${type.price.toLocaleString()}
                          </p>
                          <p
                            className={`text-xs ${
                              isEarlyBird ? "text-white/90" : "text-[#007A59]"
                            }`}
                          >
                            {type.deadline}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Personal Information */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100">
                  <h2 className="text-2xl font-bold text-[#007A59] mb-6">
                    Personal Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-[#007A59]">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-slate-200 focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-[#007A59]">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-slate-200 focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-[#007A59]">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-slate-200 focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-[#007A59]">Phone Number *</Label>
                      <div className="flex gap-2 mt-2">
                        <Select
                          value={formData.countryCode}
                          onValueChange={(value) => handleSelectChange("countryCode", value)}
                        >
                          <SelectTrigger className="w-32 border-slate-200 focus:border-gold focus:ring-gold">
                            <span className="truncate">{formData.countryCode || "+1"}</span>
                          </SelectTrigger>
                          <SelectContent className="max-h-60">
                            {countryCodes.map((item) => (
                              <SelectItem key={item.code} value={item.code}>
                                {item.code} {item.country}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="123 456 7890"
                          className="flex-1 border-slate-200 focus:border-gold focus:ring-gold"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="country" className="text-sm font-medium text-[#007A59]">Country *</Label>
                      <Select
                        value={formData.country}
                        onValueChange={(value) => handleSelectChange("country", value)}
                      >
                        <SelectTrigger className="mt-2 border-slate-200 focus:border-gold focus:ring-gold">
                          <SelectValue placeholder="Select your country" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60">
                          {countries.map((country) => (
                            <SelectItem key={country} value={country}>
                              {country}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Professional Information */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100">
                  <h2 className="text-2xl font-bold text-[#007A59] mb-6">
                    Professional Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="organization" className="text-sm font-medium text-[#007A59]">Organization/Clinic *</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-slate-200 focus:border-gold focus:ring-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role" className="text-sm font-medium text-[#007A59]">Role/Position *</Label>
                      <Select
                        value={formData.role}
                        onValueChange={(value) =>
                          handleSelectChange("role", value)
                        }
                      >
                        <SelectTrigger className="mt-2 border-slate-200 focus:border-gold focus:ring-gold">
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
                      <Label htmlFor="specialization" className="text-sm font-medium text-[#007A59]">
                        Specialization/Area of Practice *
                      </Label>
                      <Input
                        id="specialization"
                        name="specialization"
                        value={formData.specialization}
                        onChange={handleInputChange}
                        required
                        className="mt-2 border-slate-200 focus:border-gold focus:ring-gold"
                        placeholder="e.g., Regenerative Medicine, Anti-Aging, Aesthetics"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="interest" className="text-sm font-medium text-[#007A59]">
                        Area of Interest at Training
                      </Label>
                      <Textarea
                        id="interest"
                        name="interest"
                        value={formData.interest}
                        onChange={handleInputChange}
                        className="mt-2 border-slate-200 focus:border-gold focus:ring-gold resize-none"
                        rows={3}
                        placeholder="What are you hoping to learn or achieve at the training?"
                      />
                    </div>
                  </div>
                </div>

                {/* Submit */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin mr-2" />
                        Processing...
                      </>
                    ) : (
                      <>
                        Proceed to Payment
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                  <div className="flex items-center gap-2 text-sm text-[#007A59]">
                    <Shield className="h-4 w-4" />
                    <span className="text-[#007A59]">Secure checkout powered by Stripe</span>
                  </div>
                </div>
              </form>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1 animate-on-scroll slide-in-right scale-in">
              <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-100 sticky top-24">
                <h2 className="text-2xl font-bold text-[#007A59] mb-6">
                  Order Summary
                </h2>

                {selectedRegistration && (
                  <>
                    <div className="border-b border-slate-200 pb-6 mb-6">
                      <p className="font-bold text-gold text-lg mb-1">
                        {selectedRegistration.name}
                      </p>
                      <p className="text-sm text-[#007A59]">
                        {selectedRegistration.deadline}
                      </p>
                      {selectedRegistration.standardPrice && (
                        <p className="text-xs text-[#007A59] mt-1">
                          {selectedRegistration.standardPrice}
                        </p>
                      )}
                    </div>

                    <div className="mb-6">
                      <p className="text-sm font-semibold text-gold mb-4">What's Included:</p>
                      <div className="space-y-2 max-h-96 overflow-y-auto pr-2">
                        {packageFeatures
                          .filter((feature) => feature[selectedRegistration.tierKey])
                          .map((feature) => (
                            <div key={feature.name} className="flex items-start gap-2">
                              <Check className="h-4 w-4 text-gold flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-[#007A59]">
                                {feature.name}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-6 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[#007A59]">
                          Registration Fee
                        </span>
                        <span className="font-semibold text-[#007A59]">
                          ${selectedRegistration.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xl font-bold">
                        <span className="text-[#007A59]">Total</span>
                        <span className="text-gold">
                          USD ${selectedRegistration.price.toLocaleString()}
                        </span>
                      </div>
                    </div>
                  </>
                )}

                <div className="mt-6 p-4 bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#007A59] mb-2">
                    <CreditCard className="h-4 w-4 text-gold" />
                    <span>Secure Payment</span>
                  </div>
                  <p className="text-xs text-[#007A59]">
                    Your payment is processed securely through Stripe. We never
                    store your card details.
                  </p>
                </div>

                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <p className="text-xs text-[#007A59]">
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
