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
import { Check, Shield, CreditCard, ArrowRight, ClipboardCheck, X, ChevronsUpDown } from "lucide-react";
import Loading from "./loading";
import { countriesWithCodes } from "@/lib/countries";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";

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
    id: "silver-tier-standard",
    name: "Executive Delegate Package: Global Regenerative Medicine Summit",
    shortName: "Executive Delegate Package",
    tierKey: "silver" as const,
    price: 3000,
    priceId: "price_package_i_standard",
    deadline: null,
    standardPrice: null,
  },
];

const uniqueCountryCodes: typeof countriesWithCodes = [];
const seenCodes = new Set();
const majorIso = ["US", "RU", "GB", "CN", "IN", "MY", "SG", "AU", "DE", "FR", "IT", "JP", "ZA", "EG", "NG", "BR", "MX"];
countriesWithCodes.forEach(c => {
  if (majorIso.includes(c.iso) && !seenCodes.has(c.code)) {
    uniqueCountryCodes.push(c);
    seenCodes.add(c.code);
  }
});
countriesWithCodes.forEach(c => {
  if (!seenCodes.has(c.code)) {
    uniqueCountryCodes.push(c);
    seenCodes.add(c.code);
  }
});

function RegistrationContent() {
  useScrollAnimation();
  
  const searchParams = useSearchParams();
  const requestedType = searchParams.get("type");
  const initialType =
    registrationTypes.some((type) => type.id === requestedType) && requestedType
      ? requestedType
      : "silver-tier-standard";

  const requestedCountry = searchParams.get("country");
  const initialCountry =
    countriesWithCodes.find(
      (c) => c.name.toLowerCase() === requestedCountry?.toLowerCase()
    )?.name || "";

  const [selectedType, setSelectedType] = useState(initialType);
  const [isLoading, setIsLoading] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phone: "",
    country: initialCountry,
    organization: "",
    role: "",
    specialization: "",
    interest: "",
  });

  const selectedRegistration = registrationTypes.find(
    (t) => t.id === selectedType
  );

  useEffect(() => {
    async function fetchLocation() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        
        setFormData((prev) => {
          const updates: Partial<typeof prev> = {};
          
          if (data.country_calling_code) {
            const exists = countriesWithCodes.some((c) => c.code === data.country_calling_code);
            if (exists) updates.countryCode = data.country_calling_code;
          }
          
          if (data.country_name) {
            const countryExists = countriesWithCodes.some((c) => c.name === data.country_name);
            if (countryExists) {
              updates.country = data.country_name;
            }
          }
          
          return { ...prev, ...updates };
        });
      } catch (err) {
        console.error("Failed to fetch location", err);
      }
    }
    
    if (!initialCountry && !formData.country) {
      fetchLocation();
    }
  }, [initialCountry]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => {
      const updates: any = { [name]: value };
      if (name === "country") {
        const selectedCountry = countriesWithCodes.find((c) => c.name === value);
        if (selectedCountry) {
          updates.countryCode = selectedCountry.code;
        }
      }
      return { ...prev, ...updates };
    });
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

      {/* Hero Banner with Elegant Overlay Text - Full Width */}
      <section className="bg-slate-950 pt-20 sm:pt-24 border-b border-slate-900">
        <div className="relative w-full aspect-[16/9] md:aspect-[2.4/1] xl:aspect-[3/1] bg-slate-950">
          <Image
            src="/images/Slider Posts/PC View/Post 1.png"
            alt="OXYZ Registration Event Banner"
            fill
            className="object-cover filter brightness-[0.45] contrast-[1.05]"
            priority
          />
          {/* Overlay Text directly on top of the image */}
          <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/35">
            <div className="max-w-2xl w-full text-center text-white">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-[#CDB06A] uppercase tracking-wide leading-tight mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                Register for Summit 2026
              </h1>
              <p className="text-xs sm:text-sm md:text-base text-emerald-400 font-semibold uppercase tracking-wider mb-3 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
                Secure Your Place at the Premier Event
              </p>
              <p className="text-[11px] sm:text-xs md:text-sm text-slate-100 font-light leading-relaxed max-w-lg mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
                Complete your registration for the OXYZ International Regenerative Medicine & Strategic Collaboration Summit 2026.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-8 sm:py-12 bg-gradient-to-b from-slate-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 w-full flex flex-col items-center overflow-hidden">
            <div className="relative inline-block px-2">
              <h2 
                className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-[#007A59] tracking-tight whitespace-nowrap"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              >
                Welcome to Global <span className="text-[#CDB06A]">Regenerative Medicine</span> Summit 2026
              </h2>
              {/* Creative underline */}
              <div className="mt-4 flex justify-center items-center gap-2 w-full">
                <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-r from-transparent to-[#CDB06A] rounded-full"></div>
                <div className="h-[4px] w-16 sm:w-32 bg-[#007A59] rounded-full relative shadow-[0_0_8px_rgba(0,122,89,0.4)]">
                  <div className="absolute -top-[3px] left-1/2 -translate-x-1/2 w-[10px] h-[10px] rounded-full bg-[#CDB06A] shadow-sm"></div>
                </div>
                <div className="h-[2px] w-12 sm:w-24 bg-gradient-to-l from-transparent to-[#CDB06A] rounded-full"></div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <div className="space-y-8">
                {/* Registration Type */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100">
                  <h2 className="text-2xl font-bold text-[#007A59] mb-6 flex items-center gap-2">
                    Select Registration Tier
                  </h2>
                  <div className="grid grid-cols-1 gap-4">
                    {registrationTypes.map((type) => {
                      const isSelected = selectedType === type.id;

                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setSelectedType(type.id)}
                          className={`text-left p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${
                            isSelected
                              ? "border-[#007A59] bg-[#007A59]/5 shadow-lg ring-2 ring-[#007A59]/20"
                              : "border-slate-200 bg-white hover:border-[#007A59]/50"
                          }`}
                        >
                          {type.badge && (
                            <span
                              className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-2 ${
                                isSelected
                                  ? "bg-[#007A59] text-white"
                                  : "bg-slate-100 text-[#007A59]"
                              }`}
                            >
                              {type.badge}
                            </span>
                          )}
                          <p className="font-semibold text-sm mb-2 text-[#007A59]">
                            {type.name}
                          </p>
                          <p className="text-3xl font-bold mb-1 text-gold">
                            ${type.price.toLocaleString()}
                          </p>
                          <p className="text-xs text-slate-500">
                            {type.deadline}
                          </p>
                        </button>
                      );
                    })}
                  </div>

                  {/* What You'll Gain from the Program */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-[#007A59] mb-4">
                      What You'll Gain from the Global Regenerative Medicine Summit
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {[
                        { title: "Accredited Certification", desc: "Internationally accredited certification recognizing advanced training in Stem Cell, Biological Medicine, and Peptide Therapy." },
                        { title: "Become a Specialist", desc: "Gain knowledge, practical skills, and clinical confidence to introduce regenerative medicine services." },
                        { title: "Clinical Implementation", desc: "Return to your clinic with ready-to-use clinical protocols and immediate implementation strategies." },
                        { title: "Grow Your Clinic", desc: "6 months of business development support, marketing consultation, and patient acquisition strategies." },
                        { title: "Build Your Brand", desc: "Personal branding, social media positioning, and physician profile development by our team." },
                        { title: "Continuous Support", desc: "6 months of ongoing support, clinical guidance, technical assistance, and case discussions." },
                        { title: "AI in Regenerative Medicine", desc: "Discover how AI improves clinical workflows, patient communication, and documentation." },
                        { title: "Future of Integrative Medicine", desc: "Master the latest advancements in Biological Medicine and regenerative healthcare technologies." },
                        { title: "Access to a Global Professional Network", desc: "Connect with physicians, specialists, researchers, healthcare leaders, and innovators worldwide, building meaningful relationships beyond the summit." },
                        { title: "Long-Term Collaboration Opportunities", desc: "Join an international healthcare community that fosters knowledge exchange and professional collaboration beyond the summit." }
                      ].map((item, idx) => (
                        <div key={idx} className="flex gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                          <Check className="h-5 w-5 text-[#007A59] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="font-semibold text-sm text-[#007A59] mb-1">{item.title}</p>
                            <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
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
                      <Label htmlFor="country" className="text-sm font-medium text-[#007A59]">Country *</Label>
                      <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={countryOpen}
                            className="w-full mt-2 justify-between border-slate-200 focus:border-gold focus:ring-gold font-normal"
                          >
                            {formData.country
                              ? formData.country
                              : "Select your country"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] sm:w-[400px] p-0" align="start">
                          <Command>
                            <CommandInput placeholder="Search country..." />
                            <CommandList>
                              <CommandEmpty>No country found.</CommandEmpty>
                              <CommandGroup>
                                {countriesWithCodes.map((country) => (
                                  <CommandItem
                                    key={country.name}
                                    value={country.name}
                                    onSelect={(currentValue) => {
                                      const selectedCountry = countriesWithCodes.find(
                                        (c) => c.name.toLowerCase() === currentValue.toLowerCase()
                                      );
                                      if (selectedCountry) {
                                        handleSelectChange("country", selectedCountry.name);
                                      }
                                      setCountryOpen(false);
                                    }}
                                  >
                                    <Check
                                      className={`mr-2 h-4 w-4 ${
                                        formData.country === country.name
                                          ? "opacity-100"
                                          : "opacity-0"
                                      }`}
                                    />
                                    {country.name}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                    <div className="sm:col-span-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-[#007A59]">Phone Number *</Label>
                      <div className="flex gap-2 mt-2">
                        <Select
                          value={formData.countryCode}
                          onValueChange={(value) => handleSelectChange("countryCode", value)}
                        >
                          <SelectTrigger className="w-32 border-slate-200 focus:border-gold focus:ring-gold">
                            <span className="truncate">
                              {countriesWithCodes.find((c) => c.code === formData.countryCode)?.iso || ""} {formData.countryCode || "+1"}
                            </span>
                          </SelectTrigger>
                          <SelectContent className="max-h-60">
                            {uniqueCountryCodes.map((item) => (
                              <SelectItem key={item.iso + item.code} value={item.code}>
                                {item.iso} {item.code} ({item.name})
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
                  </div>
                </div>

                {/* Professional Information */}
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100">
                  <h2 className="text-2xl font-bold text-[#007A59] mb-6">
                    Professional Information
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="organization" className="text-sm font-medium text-[#007A59]">Organization/Clinic</Label>
                      <Input
                        id="organization"
                        name="organization"
                        value={formData.organization}
                        onChange={handleInputChange}
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

              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
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
                          .map((feature, idx) => (
                            <div key={`${feature.name}-${idx}`} className="flex items-start gap-2">
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
            
            {/* Submit Button Moved to Bottom of Grid */}
            <div className="lg:col-span-3 pt-6 -mt-4 border-t border-slate-200">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 lg:w-2/3 pr-0 lg:pr-12">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="bg-gold hover:bg-gold-dark text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all rounded-xl sm:flex-none"
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
                <div className="flex items-center justify-center sm:justify-start gap-2 text-sm text-[#007A59] bg-emerald-50/50 p-3 px-4 rounded-xl border border-emerald-100 sm:flex-1">
                  <Shield className="h-4 w-4" />
                  <span className="text-[#007A59] font-medium">Secure checkout powered by Stripe</span>
                </div>
              </div>
            </div>
          </form>
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
