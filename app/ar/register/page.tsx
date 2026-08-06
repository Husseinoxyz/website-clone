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
import { Check, Shield, CreditCard, ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Readex_Pro } from "next/font/google";

const readexPro = Readex_Pro({ subsets: ["arabic"] });

const countries = [
  "أفغانستان", "ألبانيا", "الجزائر", "أندورا", "أنغولا", "أنتيغوا وبربودا", "الأرجنتين", "أرمينيا", "أستراليا", "النمسا", "أذربيجان", "جزر البهاما", "البحرين", "بنغلاديش", "باربادوس", "بيلاروسيا", "بلجيكا", "بليز", "بنين", "بوتان", "بوليفيا", "البوسنة والهرسك", "بوتسوانا", "البرازيل", "بروناي", "بلغاريا", "بوركينا فاسو", "بوروندي", "كابو فيردي", "كمبوديا", "الكاميرون", "كندا", "جمهورية أفريقيا الوسطى", "تشاد", "تشيلي", "الصين", "كولومبيا", "جزر القمر", "الكونغو", "كوستاريكا", "كرواتيا", "كوبا", "قبرص", "التشيك", "الدنمارك", "جيبوتي", "دومينيكا", "جمهورية الدومينيكان", "تيمور الشرقية", "الإكوادور", "مصر", "السلفادور", "غينيا الاستوائية", "إريتريا", "إستونيا", "إسواتيني", "إثيوبيا", "فيجي", "فنلندا", "فرنسا", "الغابون", "غامبيا", "جورجيا", "ألمانيا", "غانا", "اليونان", "غرينادا", "غواتيمالا", "غينيا", "غينيا بيساو", "غويانا", "هايتي", "هندوراس", "المجر", "آيسلندا", "الهند", "إندونيسيا", "إيران", "العراق", "أيرلندا", "إيطاليا", "جامايكا", "اليابان", "الأردن", "كازاخستان", "كينيا", "كيريباتي", "الكويت", "قيرغيزستان", "لاوس", "لاتفيا", "لبنان", "ليسوتو", "ليبيريا", "ليبيا", "ليختنشتاين", "ليتوانيا", "لوكسمبورغ", "مدغشقر", "مالاوي", "ماليزيا", "المالديف", "مالي", "مالطا", "جزر مارشال", "موريتانيا", "موريشيوس", "المكسيك", "ميكرونيزيا", "مولدوفا", "موناكو", "منغوليا", "الجبل الأسود", "المغرب", "موزمبيق", "ميانمار", "ناميبيا", "ناورو", "نيبال", "هولندا", "نيوزيلندا", "نيكاراغوا", "النيجر", "نيجيريا", "كوريا الشمالية", "مقدونيا الشمالية", "النرويج", "عمان", "باكستان", "بالاو", "فلسطين", "بنما", "بابوا غينيا الجديدة", "باراغواي", "بيرو", "الفلبين", "بولندا", "البرتغال", "قطر", "رومانيا", "روسيا", "رواندا", "سانت كيتس ونيفيس", "سانت لوسيا", "سانت فينسنت والغرينادين", "ساموا", "سان مارينو", "ساو تومي وبرينسيب", "السعودية", "السنغال", "صربيا", "سيشل", "سيراليون", "سنغافورة", "سلوفاكيا", "سلوفينيا", "جزر سليمان", "الصومال", "جنوب أفريقيا", "كوريا الجنوبية", "جنوب السودان", "إسبانيا", "سريلانكا", "السودان", "سورينام", "السويد", "سويسرا", "سوريا", "تايوان", "طاجيكستان", "تنزانيا", "تايلاند", "توغو", "تونغا", "ترينيداد وتوباغو", "تونس", "تركيا", "تركمانستان", "توفالو", "أوغندا", "أوكرانيا", "الإمارات العربية المتحدة", "المملكة المتحدة", "الولايات المتحدة", "أوروغواي", "أوزبكستان", "فانواتو", "الفاتيكان", "فنزويلا", "فيتنام", "اليمن", "زامبيا", "زيمبابوي", "أخرى"
];

const countryCodes = [
  { code: "+966", country: "السعودية" },
  { code: "+971", country: "الإمارات" },
  { code: "+965", country: "الكويت" },
  { code: "+974", country: "قطر" },
  { code: "+973", country: "البحرين" },
  { code: "+968", country: "عمان" },
  { code: "+20", country: "مصر" },
  { code: "+962", country: "الأردن" },
  { code: "+964", country: "العراق" },
  { code: "+212", country: "المغرب" },
  { code: "+213", country: "الجزائر" },
  { code: "+216", country: "تونس" },
  { code: "+961", country: "لبنان" },
  { code: "+60", country: "ماليزيا" },
  { code: "+1", country: "أخرى" },
];

const registrationTypes = [
  {
    id: "silver-tier-standard",
    name: "الباقة الشاملة: قمة الطب التجديدي 2026",
    price: 3000,
    priceId: "price_package_i_standard",
  },
];

function ArabicRegistrationContent() {
  const searchParams = useSearchParams();
  const requestedType = searchParams.get("type");
  const initialType =
    registrationTypes.some((type) => type.id === requestedType) && requestedType
      ? requestedType
      : "silver-tier-standard";

  const [selectedType, setSelectedType] = useState(initialType);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+966",
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
    e: React.ChangeEvent<HTMLInputElement>
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
            انضم إلينا في كوالالمبور (<span dir="ltr">20 - 24</span> نوفمبر 2026) وانقل أحدث التقنيات إلى عيادتك.
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
              {/* Personal Details */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-base text-gray-700">الاسم الأول *</Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="bg-gray-50/50 border-gray-200 text-right h-12"
                      placeholder="أدخل الاسم الأول"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-base text-gray-700">اسم العائلة *</Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="bg-gray-50/50 border-gray-200 text-right h-12"
                      placeholder="أدخل اسم العائلة"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base text-gray-700">البريد الإلكتروني *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-gray-50/50 border-gray-200 h-12 text-left"
                      dir="ltr"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base text-gray-700">رقم الهاتف (واتساب) *</Label>
                    <div className="flex gap-2" dir="ltr">
                      <Select
                        value={formData.countryCode}
                        onValueChange={(val) => handleSelectChange("countryCode", val)}
                      >
                        <SelectTrigger className="w-[110px] bg-gray-50/50 border-gray-200 h-12">
                          <SelectValue placeholder="Code" />
                        </SelectTrigger>
                        <SelectContent>
                          {countryCodes.map((c) => (
                            <SelectItem key={c.country} value={c.code}>
                              {c.code} ({c.country})
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
                        className="flex-1 bg-gray-50/50 border-gray-200 h-12 text-left"
                        placeholder="رقم الجوال"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="country" className="text-base text-gray-700">الدولة *</Label>
                    <Select
                      value={formData.country}
                      onValueChange={(val) => handleSelectChange("country", val)}
                      required
                    >
                      <SelectTrigger className="bg-gray-50/50 border-gray-200 text-right h-12" dir="rtl">
                        <SelectValue placeholder="اختر الدولة" />
                      </SelectTrigger>
                      <SelectContent dir="rtl">
                        {countries.map((c) => (
                          <SelectItem key={c} value={c}>
                            {c}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="organization" className="text-base text-gray-700">العيادة / جهة العمل *</Label>
                    <Input
                      id="organization"
                      name="organization"
                      required
                      value={formData.organization}
                      onChange={handleInputChange}
                      className="bg-gray-50/50 border-gray-200 text-right h-12"
                      placeholder="اسم العيادة أو المستشفى"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="role" className="text-base text-gray-700">المسمى الوظيفي / المهنة *</Label>
                    <Select
                      value={formData.role}
                      onValueChange={(val) => handleSelectChange("role", val)}
                      required
                    >
                      <SelectTrigger className="bg-gray-50/50 border-gray-200 text-right h-12" dir="rtl">
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
                  <div className="space-y-2">
                    <Label htmlFor="specialization" className="text-base text-gray-700">التخصص / مجال العمل *</Label>
                    <Input
                      id="specialization"
                      name="specialization"
                      required
                      value={formData.specialization}
                      onChange={handleInputChange}
                      className="bg-gray-50/50 border-gray-200 text-right h-12"
                      placeholder="مثال: الطب التجديدي، مكافحة الشيخوخة، التجميل"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest" className="text-base text-gray-700">مجالات الاهتمام في التدريب</Label>
                  <Textarea
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="bg-gray-50/50 border-gray-200 text-right min-h-[100px] resize-none"
                    placeholder="ما الذي تأمل تعلمه أو تحقيقه في هذا التدريب؟"
                  />
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
