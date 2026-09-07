"use client";

import React, { useState, Suspense, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
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
import { Check, Shield, CreditCard, ArrowLeft, ArrowRight, ChevronsUpDown } from "lucide-react";
import Link from "next/link";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Readex_Pro } from "next/font/google";
import { countriesWithCodes } from "@/lib/countries";

const readexPro = Readex_Pro({ subsets: ["arabic"] });

const countries = [
  "أفغانستان", "ألبانيا", "الجزائر", "أندورا", "أنغولا", "أنتيغوا وبربودا", "الأرجنتين", "أرمينيا", "أستراليا", "النمسا", "أذربيجان", "جزر البهاما", "البحرين", "بنغلاديش", "باربادوس", "بيلاروسيا", "بلجيكا", "بليز", "بنين", "بوتان", "بوليفيا", "البوسنة والهرسك", "بوتسوانا", "البرازيل", "بروناي", "بلغاريا", "بوركينا فاسو", "بوروندي", "كابو فيردي", "كمبوديا", "الكاميرون", "كندا", "جمهورية أفريقيا الوسطى", "تشاد", "تشيلي", "الصين", "كولومبيا", "جزر القمر", "الكونغو", "كوستاريكا", "كرواتيا", "كوبا", "قبرص", "التشيك", "الدنمارك", "جيبوتي", "دومينيكا", "جمهورية الدومينيكان", "تيمور الشرقية", "الإكوادور", "مصر", "السلفادور", "غينيا الاستوائية", "إريتريا", "إستونيا", "إسواتيني", "إثيوبيا", "فيجي", "فنلندا", "فرنسا", "الغابون", "غامبيا", "جورجيا", "ألمانيا", "غانا", "اليونان", "غرينادا", "غواتيمالا", "غينيا", "غينيا بيساو", "غويانا", "هايتي", "هندوراس", "المجر", "آيسلندا", "الهند", "إندونيسيا", "إيران", "العراق", "أيرلندا", "إيطاليا", "ساحل العاج", "جامايكا", "اليابان", "الأردن", "كازاخستان", "كينيا", "كيريباتي", "الكويت", "قيرغيزستان", "لاوس", "لاتفيا", "لبنان", "ليسوتو", "ليبيريا", "ليبيا", "ليختنشتاين", "ليتوانيا", "لوكسمبورغ", "مدغشقر", "مالاوي", "ماليزيا", "المالديف", "مالي", "مالطا", "جزر مارشال", "موريتانيا", "موريشيوس", "المكسيك", "ميكرونيزيا", "مولدوفا", "موناكو", "منغوليا", "الجبل الأسود", "المغرب", "موزمبيق", "ميانمار", "ناميبيا", "ناورو", "نيبال", "هولندا", "نيوزيلندا", "نيكاراغوا", "النيجر", "نيجيريا", "كوريا الشمالية", "مقدونيا الشمالية", "النرويج", "عمان", "باكستان", "بالاو", "فلسطين", "بنما", "بابوا غينيا الجديدة", "باراغواي", "بيرو", "الفلبين", "بولندا", "البرتغال", "قطر", "رومانيا", "روسيا", "رواندا", "سانت كيتس ونيفيس", "سانت لوسيا", "سانت فينسنت والغرينادين", "ساموا", "سان مارينو", "ساو تومي وبرينسيب", "السعودية", "السنغال", "صربيا", "سيشل", "سيراليون", "سنغافورة", "سلوفاكيا", "سلوفينيا", "جزر سليمان", "الصومال", "جنوب أفريقيا", "كوريا الجنوبية", "جنوب السودان", "إسبانيا", "سريلانكا", "السودان", "سورينام", "السويد", "سويسرا", "سوريا", "تايوان", "طاجيكستان", "تنزانيا", "تايلاند", "توغو", "تونغا", "ترينيداد وتوباغو", "تونس", "تركيا", "تركمانستان", "توفالو", "أوغندا", "أوكرانيا", "الإمارات العربية المتحدة", "المملكة المتحدة", "الولايات المتحدة", "أوروغواي", "أوزبكستان", "فانواتو", "الفاتيكان", "فنزويلا", "فيتنام", "اليمن", "زامبيا", "زيمبابوي", "أخرى"
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

const countryCodes = uniqueCountryCodes.map(c => {
  const index = countriesWithCodes.indexOf(c);
  const arabicName = index !== -1 && index < countries.length ? countries[index] : c.name;
  return { code: c.code, country: arabicName };
});

const registrationTypes = [
  {
    id: "silver-tier-standard",
    name: "الباقة الشاملة: قمة الطب التجديدي 2026",
    price: 3000,
    priceId: "price_package_i_standard",
  },
];

const countryNameToArabicMap: Record<string, string> = {
  "Saudi Arabia": "السعودية",
  "United Arab Emirates": "الإمارات العربية المتحدة",
  "Kuwait": "الكويت",
  "Qatar": "قطر",
  "Bahrain": "البحرين",
  "Oman": "عمان",
  "Egypt": "مصر",
  "Jordan": "الأردن",
  "Iraq": "العراق",
  "Morocco": "المغرب",
  "Algeria": "الجزائر",
  "Tunisia": "تونس",
  "Lebanon": "لبنان",
  "Malaysia": "ماليزيا",
};

function ArabicRegistrationContent() {
  const searchParams = useSearchParams();
  const requestedType = searchParams.get("type");
  const initialType =
    registrationTypes.some((type) => type.id === requestedType) && requestedType
      ? requestedType
      : "silver-tier-standard";

  const requestedCountry = searchParams.get("country");
  const initialCountry =
    countries.find(
      (c) => c.toLowerCase() === requestedCountry?.toLowerCase()
    ) || "";

  const [selectedType, setSelectedType] = useState(initialType);
  const [isLoading, setIsLoading] = useState(false);
  const [countryOpen, setCountryOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+966",
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
            const exists = countryCodes.some((c) => c.code === data.country_calling_code);
            if (exists) updates.countryCode = data.country_calling_code;
          }
          
          if (data.country_name) {
            const arabicName = countryNameToArabicMap[data.country_name];
            if (arabicName && countries.includes(arabicName)) {
              updates.country = arabicName;
            } else if (countries.includes(data.country_name)) {
              updates.country = data.country_name;
            }
          }
          
          return { ...prev, ...updates };
        });
      } catch (err) {
        console.error("Failed to fetch location", err);
      }
    }
    
    // Only auto-detect if the country isn't passed via URL
    if (!initialCountry && !formData.country) {
      fetchLocation();
    }
  }, [initialCountry]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => {
      const updates: any = { [name]: value };
      if (name === "country") {
        const selectedCountry = countryCodes.find((c) => c.country === value);
        if (selectedCountry) {
          updates.countryCode = selectedCountry.code;
        } else {
          const countryIndex = countries.indexOf(value);
          if (countryIndex !== -1 && countryIndex < countriesWithCodes.length) {
            updates.countryCode = countriesWithCodes[countryIndex].code;
          }
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
          isArabic: true,
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("Failed to create checkout session", data);
        setIsLoading(false);
      }
    } catch (error) {
      console.error("Error:", error);
      setIsLoading(false);
    }
  };

  return (
    <main dir="rtl" className={`min-h-screen bg-slate-50 ${readexPro.className}`}>
      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/symposium-hero.jpg')] opacity-40 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <Link href="/ar" className="inline-flex items-center text-teal-700 hover:text-teal-950 font-medium transition-colors mb-6">
            <ArrowRight className="ml-2 h-4 w-4" /> العودة للصفحة الرئيسية
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-[#CDB06A] drop-shadow-sm">
            سجل الآن في أكاديمية الطب التجديدي
          </h1>
          <p className="text-lg text-teal-800 font-semibold max-w-2xl mx-auto">
            انضم إلينا في كوالالمبور (24-20 نوفمبر 2026) وانقل أحدث التقنيات إلى عيادتك.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl font-bold text-teal-950 mb-8 pb-4 border-b">
              معلومات التسجيل
            </h2>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100">
                <h2 className="text-2xl font-bold text-[#007A59] mb-6 text-right">
                  المعلومات الشخصية
                </h2>
                <div className="grid sm:grid-cols-2 gap-6" dir="rtl">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-medium text-[#007A59]">الاسم الأول *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="mt-2 border-slate-200 focus:border-gold focus:ring-gold text-right"
                      placeholder="أدخل الاسم الأول"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-medium text-[#007A59]">اسم العائلة *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="mt-2 border-slate-200 focus:border-gold focus:ring-gold text-right"
                      placeholder="أدخل اسم العائلة"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-[#007A59]">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2 border-slate-200 focus:border-gold focus:ring-gold text-left"
                      dir="ltr"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="country" className="text-sm font-medium text-[#007A59]">الدولة *</Label>
                    <div dir="rtl">
                      <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            role="combobox"
                            aria-expanded={countryOpen}
                            className="mt-2 w-full justify-between border-slate-200 focus:border-gold focus:ring-gold font-normal"
                          >
                            {formData.country
                              ? formData.country
                              : "اختر الدولة"}
                            <ChevronsUpDown className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[300px] sm:w-[400px] p-0" align="start">
                          <Command dir="rtl">
                            <CommandInput placeholder="ابحث عن دولة..." />
                            <CommandList>
                              <CommandEmpty>لم يتم العثور على دولة.</CommandEmpty>
                              <CommandGroup>
                                {countries.map((country) => (
                                  <CommandItem
                                    key={country}
                                    value={country}
                                    onSelect={(currentValue) => {
                                      const selectedCountry = countries.find(
                                        (c) => c === currentValue
                                      );
                                      handleSelectChange("country", selectedCountry || currentValue);
                                      setCountryOpen(false);
                                    }}
                                  >
                                    <Check
                                      className={`ml-2 h-4 w-4 ${
                                        formData.country === country
                                          ? "opacity-100"
                                          : "opacity-0"
                                      }`}
                                    />
                                    {country}
                                  </CommandItem>
                                ))}
                              </CommandGroup>
                            </CommandList>
                          </Command>
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="phone" className="text-sm font-medium text-[#007A59]">رقم الهاتف (واتساب) *</Label>
                    <div className="flex flex-col gap-3 mt-2" dir="rtl">
                      <Select
                        value={formData.countryCode}
                        onValueChange={(val) => handleSelectChange("countryCode", val)}
                      >
                        <SelectTrigger className="border-slate-200 focus:border-gold focus:ring-gold flex justify-between items-center w-full" dir="ltr">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent dir="ltr">
                          {countryCodes.map((c) => (
                            <SelectItem key={c.country} value={c.code}>
                              <div className="flex items-center gap-1">
                                <span dir="ltr">{"\u200E"}{c.code}</span>
                                <span dir="rtl">({c.country})</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="flex-1 border-slate-200 focus:border-gold focus:ring-gold text-right"
                        dir="ltr"
                        placeholder="رقم الجوال"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Professional Information */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-slate-100">
                <h2 className="text-2xl font-bold text-[#007A59] mb-6 text-right">
                  المعلومات المهنية
                </h2>
                <div className="grid sm:grid-cols-2 gap-6" dir="rtl">
                  <div>
                    <Label htmlFor="organization" className="text-sm font-medium text-[#007A59]">العيادة / جهة العمل</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="mt-2 border-slate-200 focus:border-gold focus:ring-gold text-right"
                      placeholder="اسم العيادة أو المستشفى"
                    />
                  </div>
                  <div>
                    <Label htmlFor="role" className="text-sm font-medium text-[#007A59]">المسمى الوظيفي / المهنة *</Label>
                    <Select
                      value={formData.role}
                      onValueChange={(val) => handleSelectChange("role", val)}
                      required
                    >
                      <SelectTrigger className="mt-2 border-slate-200 focus:border-gold focus:ring-gold text-right w-full flex justify-between items-center" dir="rtl">
                        <SelectValue placeholder="اختر المسمى الوظيفي" />
                      </SelectTrigger>
                      <SelectContent dir="rtl">
                        <SelectItem value="medical-doctor">طبيب بشري</SelectItem>
                        <SelectItem value="specialist">طبيب أخصائي</SelectItem>
                        <SelectItem value="clinic-owner">مالك عيادة</SelectItem>
                        <SelectItem value="healthcare-investor">مستثمر في الرعاية الصحية</SelectItem>
                        <SelectItem value="distributor">موزع طبي</SelectItem>
                        <SelectItem value="other">أخرى</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="specialization" className="text-sm font-medium text-[#007A59]">التخصص / مجال العمل *</Label>
                    <Input
                      id="specialization"
                      name="specialization"
                      required
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="mt-2 border-slate-200 focus:border-gold focus:ring-gold text-right w-full"
                      placeholder="مثال: الطب التجديدي، مكافحة الشيخوخة، التجميل"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <Label htmlFor="interest" className="text-sm font-medium text-[#007A59]">مجالات الاهتمام في التدريب</Label>
                    <Textarea
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="mt-2 border-slate-200 focus:border-gold focus:ring-gold text-right min-h-[100px] resize-none w-full"
                      placeholder="ما الذي تأمل تعلمه أو تحقيقه في هذا التدريب؟"
                    />
                  </div>
                </div>
              </div>

              {/* Order Summary & Submit */}
              <div className="pt-8 mt-8 border-t">
                <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-bold text-teal-950">تفاصيل الدفع</h3>
                    <div className="flex items-center gap-2 text-teal-700">
                      <Shield className="w-5 h-5" />
                      <span className="text-sm font-medium">دفع آمن</span>
                    </div>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-200">
                    <span className="text-gray-700">{selectedRegistration?.name}</span>
                    <span className="font-bold text-gray-900">${selectedRegistration?.price} USD</span>
                  </div>
                  <div className="flex justify-between items-center py-4 font-bold text-lg">
                    <span className="text-teal-950">الإجمالي الدفع اليوم</span>
                    <span className="text-teal-700">${selectedRegistration?.price} USD</span>
                  </div>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full h-16 text-lg font-bold bg-[#CDB06A] hover:bg-[#B8964A] text-white shadow-xl rounded-xl transition-all hover:scale-[1.02]"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                      جاري المعالجة...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <CreditCard className="w-6 h-6 ml-2" />
                      الدفع وإتمام التسجيل بأمان
                    </span>
                  )}
                </Button>
                <p className="text-center text-sm text-gray-500 mt-4">
                  سيتم توجيهك إلى صفحة الدفع الآمنة (Stripe).
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ArabicRegisterPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <Suspense fallback={<div className="flex-1 flex items-center justify-center pt-32"><div className="w-10 h-10 border-4 border-teal-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <ArabicRegistrationContent />
      </Suspense>
      <Footer />
    </div>
  );
}
