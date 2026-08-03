"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const floatingStyles = `
  @keyframes gentleFloat {
    0%, 100% { opacity: 1; transform: translateY(0px); }
    50% { opacity: 1; transform: translateY(-6px); }
  }

  .flag-float {
    animation: gentleFloat 4s ease-in-out infinite;
    opacity: 1 !important;
    visibility: visible !important;
  }

  .flags-container {
    overflow: visible !important;
    min-height: 400px;
  }
`;

const TARGET_DATE = new Date("2026-10-15T00:00:00Z");

type Countdown = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
};

const getCountdown = (): Countdown => {
  const now = new Date();
  const diff = Math.max(TARGET_DATE.getTime() - now.getTime(), 0);

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / (60 * 60 * 24));
  const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
  const seconds = totalSeconds % 60;

  return {
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
};

export function CountdownSection() {
  const [mounted, setMounted] = useState(false);
  const [countdown, setCountdown] = useState<Countdown>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  useEffect(() => {
    setMounted(true);
    setCountdown(getCountdown());

    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{floatingStyles}</style>
      <section className="pt-0 pb-16 bg-background">
        <div className="relative overflow-hidden w-full">
        <div className="absolute inset-0">
          <Image
            src="/images/count_down.jpg"
            alt="Countdown background"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Countdown Info */}
            <div className="py-14 sm:py-16 text-white">
              <p className="text-sm uppercase tracking-[0.25em] text-white/70">
                Registration Deadline
              </p>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
                15 October 2026
              </h2>
              <p className="mt-3 text-white/80">
                Training date: 20 - 24 November 2026
              </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-xl">
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ].map((unit) => (
                <div
                   key={unit.label}
                  className="group rounded-xl bg-black/60 border border-white/10 px-3 py-3.5 text-center shadow-lg hover:border-gold/30 hover:scale-[1.02] transition-all duration-300"
                >
                  <p className="text-3xl sm:text-4xl font-extrabold text-gold tracking-tight">
                    {mounted ? unit.value : "00"}
                  </p>
                  <p className="text-[9px] sm:text-xs uppercase tracking-wider text-white/70 mt-1 font-semibold">
                    {unit.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3 max-w-3xl">
              <div className="group flex items-center gap-3 rounded-xl bg-black/60 border border-white/10 px-4 py-3.5 hover:border-gold/20 transition-all duration-300">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <Calendar className="h-4.5 w-4.5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-0.5">Dates</p>
                  <p className="font-bold text-sm sm:text-base text-white">20 – 24 Nov 2026</p>
                </div>
              </div>
              <div className="group flex items-center gap-3 rounded-xl bg-black/60 border border-white/10 px-4 py-3.5 hover:border-gold/20 transition-all duration-300">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <MapPin className="h-4.5 w-4.5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-0.5">Location</p>
                  <p className="font-bold text-sm sm:text-base text-white">Malaysia</p>
                  <p className="text-xs text-white/70">Kuala Lumpur</p>
                </div>
              </div>
              <div className="group flex items-center gap-3 rounded-xl bg-black/60 border border-white/10 px-4 py-3.5 hover:border-gold/20 transition-all duration-300">
                <div className="w-9 h-9 rounded-full bg-gold/10 flex items-center justify-center shrink-0 border border-gold/20">
                  <Users className="h-4.5 w-4.5 text-gold" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-white/60 font-semibold mb-0.5">Capacity</p>
                  <p className="font-bold text-sm sm:text-base text-white">80 - 100 Participants</p>
                  <p className="text-xs text-white/70">Limited to ensure quality</p>
                </div>
              </div>
            </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/register">
                  <Button className="bg-[#007A59] hover:bg-[#006046] text-white font-bold px-8 py-6 rounded-xl shadow-lg transition-all hover:scale-105">
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://wa.me/6586163762?text=Hello%2C%20I%27m%20interested%20in%20the%20Global%20Regenerative%20Medicine%20Summit%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you." target="_blank" rel="noreferrer">
                  <Button
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-white font-bold px-8 py-6 rounded-xl bg-transparent transition-all hover:scale-105"
                  >
                    Request More Details
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile - Country Flags Grid */}
            <div className="lg:hidden pb-4">
              <div className="flex flex-col items-center gap-3 mb-6">
                <Link href="/register">
                  <button className="text-center text-sm font-bold text-white uppercase tracking-wide bg-black/40 hover:bg-[#CDB06A] backdrop-blur rounded-full px-5 py-2.5 transition-all duration-300 active:scale-95 cursor-pointer border border-white/10">
                    🌍 Represent Your Country
                  </button>
                </Link>
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur rounded-full px-3.5 py-1.5 border border-[#CDB06A]/40 shadow-lg">
                  <span className="text-sm">🔥</span>
                  <span className="text-xs font-bold text-white whitespace-nowrap">Registering...</span>
                </div>
              </div>

              <div className="bg-black/40 backdrop-blur rounded-2xl px-5 py-4 text-center mb-6">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
                  Raise Your Nation's Flag
                </h3>
                <p className="mt-2 text-sm text-white/90">
                  Represent your country at this event
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-x-5 gap-y-6 mb-8">
                {[
                  { code: "us", name: "United States", count: 8 },
                  { code: "sa", name: "Saudi Arabia", count: 7 },
                  { code: "ae", name: "United Arab Emirates", count: 6 },
                  { code: "br", name: "Brazil", count: 5 },
                  { code: "de", name: "Germany", count: 4 },
                  { code: "gb", name: "United Kingdom", count: 3 },
                  { code: "id", name: "Indonesia", count: 2 },
                  { code: "ke", name: "Kenya", count: 1 },
                  { code: "ca", name: "Canada", count: 4 },
                  { code: "au", name: "Australia", count: 3 },
                  { code: "za", name: "South Africa", count: 3 },
                  { code: "vn", name: "Vietnam", count: 2 },
                  { code: "jo", name: "Jordan", count: 3 },
                  { code: "lb", name: "Lebanon", count: 2 },
                  { code: "ar", name: "Argentina", count: 3 },
                  { code: "ma", name: "Morocco", count: 2 },
                ].map((flag) => (
                  <Link
                    key={flag.code}
                    href={`/register?country=${encodeURIComponent(flag.name)}`}
                    className="group relative flex flex-col items-center"
                  >
                    <div className="absolute -top-2 -right-1 z-10 bg-gradient-to-br from-[#CDB06A] to-[#B8964A] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-[10px] shadow-lg border-2 border-white/80">
                      {flag.count}
                    </div>
                    <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg border-2 border-white/80 active:scale-95 transition-transform duration-200">
                      <img src={`https://flagcdn.com/w320/${flag.code}.jpg`} alt={flag.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </Link>
                ))}
              </div>

              <Link href="/register" className="block">
                <button className="relative group w-full px-8 py-4 rounded-full font-bold text-white text-lg shadow-2xl transition-all duration-300 active:scale-95 bg-gradient-to-r from-[#CDB06A] via-[#C4A458] to-[#B8964A]">
                  <span className="relative flex items-center justify-center gap-2">
                    Join Now
                    <ArrowRight className="h-5 w-5" />
                  </span>
                </button>
              </Link>
            </div>

            {/* Right Column - Orbital Flags */}
            <div className="hidden lg:block relative py-14 sm:py-16">
              <div className="flex flex-col items-center gap-2 mb-4">
                <Link href="/register">
                  <button className="text-center text-sm sm:text-base font-bold text-white uppercase tracking-wide bg-black/40 hover:bg-[#CDB06A] backdrop-blur rounded-full px-5 py-2.5 w-fit transition-all duration-300 hover:scale-105 cursor-pointer border border-white/10 hover:border-[#CDB06A]">
                    🌍 Represent Your Country
                  </button>
                </Link>
                <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur rounded-full px-3.5 py-1.5 border border-[#CDB06A]/40 shadow-lg">
                  <span className="text-sm">🔥</span>
                  <span className="text-xs font-bold text-white whitespace-nowrap">
                    Registering...
                  </span>
                </div>
              </div>
              <div className="relative mx-auto" style={{ width: '440px', height: '440px' }}>
                {/* Center CTA - Organized Layout */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 flex flex-col items-center w-72 gap-3 text-center">
                  {/* Live registering badge */}
                  <div className="flex items-center gap-2 bg-black/50 backdrop-blur rounded-full px-4 py-1.5 border border-white/20">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#CDB06A] opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CDB06A]" />
                    </span>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-white font-semibold">Registering Now</span>
                  </div>

                  {/* Headline */}
                  <div className="bg-black/40 backdrop-blur rounded-2xl px-4 py-3">
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      Raise Your Nation's Flag
                    </h3>
                    <p className="mt-2 text-sm text-white/90">
                      Represent your country at this event
                    </p>
                  </div>

                  {/* Button - Main Focus */}
                  <Link href="/register" className="w-full">
                    <button className="relative group w-full px-8 py-3.5 rounded-full font-bold text-white text-lg shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-3xl bg-gradient-to-r from-[#CDB06A] via-[#C4A458] to-[#B8964A]">
                      {/* Button shine effect */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      <span className="relative flex items-center justify-center gap-2">
                        Join Now
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    </button>
                  </Link>
                </div>

                {/* Orbital circle guide */}
                <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white/10 rounded-full transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

                {/* Fixed positioned flags */}
                {/* USA - Top Right */}
                <Link href="/register?country=United%20States" className="group absolute w-14 h-14 flag-float z-10" style={{ right: '40px', top: '20px', animationDelay: '0ms' }}>
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-gradient-to-br from-[#CDB06A] to-[#B8964A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white/80">8</div>
                  </div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer border-2 border-white/80 group-hover:border-[#CDB06A]">
                    <img src="https://flagcdn.com/w320/us.jpg" alt="USA" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </Link>

                {/* Saudi Arabia - Right */}
                <Link href="/register?country=Saudi%20Arabia" className="group absolute w-14 h-14 flag-float z-10" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)', animationDelay: '150ms' }}>
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-gradient-to-br from-[#CDB06A] to-[#B8964A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white/80">7</div>
                  </div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer border-2 border-white/80 group-hover:border-[#CDB06A]">
                    <img src="https://flagcdn.com/w320/sa.jpg" alt="Saudi" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </Link>

                {/* UAE - Bottom Right */}
                <Link href="/register?country=United%20Arab%20Emirates" className="group absolute w-14 h-14 flag-float z-10" style={{ right: '40px', bottom: '20px', animationDelay: '300ms' }}>
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-gradient-to-br from-[#CDB06A] to-[#B8964A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white/80">6</div>
                  </div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer border-2 border-white/80 group-hover:border-[#CDB06A]">
                    <img src="https://flagcdn.com/w320/ae.jpg" alt="UAE" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </Link>

                {/* Brazil - Bottom */}
                <Link href="/register?country=Brazil" className="group absolute w-14 h-14 flag-float z-10" style={{ left: '50%', bottom: '10px', transform: 'translateX(-50%)', animationDelay: '450ms' }}>
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-gradient-to-br from-[#CDB06A] to-[#B8964A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white/80">5</div>
                  </div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer border-2 border-white/80 group-hover:border-[#CDB06A]">
                    <img src="https://flagcdn.com/w320/br.jpg" alt="Brazil" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </Link>

                {/* Germany - Bottom Left */}
                <Link href="/register?country=Germany" className="group absolute w-14 h-14 flag-float z-10" style={{ left: '40px', bottom: '20px', animationDelay: '600ms' }}>
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-gradient-to-br from-[#CDB06A] to-[#B8964A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white/80">4</div>
                  </div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer border-2 border-white/80 group-hover:border-[#CDB06A]">
                    <img src="https://flagcdn.com/w320/de.jpg" alt="Germany" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </Link>

                {/* UK - Left */}
                <Link href="/register?country=United%20Kingdom" className="group absolute w-14 h-14 flag-float z-10" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', animationDelay: '750ms' }}>
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-gradient-to-br from-[#CDB06A] to-[#B8964A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white/80">3</div>
                  </div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer border-2 border-white/80 group-hover:border-[#CDB06A]">
                    <img src="https://flagcdn.com/w320/gb.jpg" alt="UK" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </Link>

                {/* Indonesia - Top Left */}
                <Link href="/register?country=Indonesia" className="group absolute w-14 h-14 flag-float z-10" style={{ left: '40px', top: '20px', animationDelay: '900ms' }}>
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-gradient-to-br from-[#CDB06A] to-[#B8964A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white/80">2</div>
                  </div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer border-2 border-white/80 group-hover:border-[#CDB06A]">
                    <img src="https://flagcdn.com/w320/id.jpg" alt="Indonesia" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </Link>

                {/* Kenya - Top */}
                <Link href="/register?country=Kenya" className="group absolute w-14 h-14 flag-float z-10" style={{ left: '50%', top: '10px', transform: 'translateX(-50%)', animationDelay: '1050ms' }}>
                  <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-30">
                    <div className="bg-gradient-to-br from-[#CDB06A] to-[#B8964A] text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-xs shadow-lg border-2 border-white/80">1</div>
                  </div>
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105 cursor-pointer border-2 border-white/80 group-hover:border-[#CDB06A]">
                    <img src="https://flagcdn.com/w320/ke.jpg" alt="Kenya" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                </Link>

                {/* Extra smaller flags filling the gaps */}
                {[
                  { code: "ca", name: "Canada", count: 4, x: 291, y: 49, delay: "200ms" },
                  { code: "au", name: "Australia", count: 3, x: 415, y: 138, delay: "500ms" },
                  { code: "za", name: "South Africa", count: 3, x: 25, y: 138, delay: "800ms" },
                  { code: "vn", name: "Vietnam", count: 2, x: 149, y: 49, delay: "1100ms" },
                  { code: "jo", name: "Jordan", count: 3, x: 391, y: 291, delay: "250ms" },
                  { code: "lb", name: "Lebanon", count: 2, x: 291, y: 391, delay: "550ms" },
                  { code: "ar", name: "Argentina", count: 3, x: 149, y: 391, delay: "850ms" },
                  { code: "ma", name: "Morocco", count: 2, x: 49, y: 291, delay: "1150ms" },
                ].map((flag) => (
                  <Link
                    key={flag.code}
                    href={`/register?country=${encodeURIComponent(flag.name)}`}
                    className="group absolute w-10 h-10 flag-float z-10 opacity-90"
                    style={{ left: `${flag.x}px`, top: `${flag.y}px`, transform: "translate(-50%, -50%)", animationDelay: flag.delay }}
                  >
                    <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2 z-30">
                      <div className="bg-gradient-to-br from-[#CDB06A] to-[#B8964A] text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-[10px] shadow-lg border-2 border-white/80">
                        {flag.count}
                      </div>
                    </div>
                    <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-110 cursor-pointer border-2 border-white/80 group-hover:border-[#CDB06A]">
                      <img src={`https://flagcdn.com/w320/${flag.code}.jpg`} alt={flag.name} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
