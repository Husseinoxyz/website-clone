"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin, Clock } from "lucide-react";

export function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const targetDate = new Date("2026-11-20T09:00:00").getTime();

    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isExpired: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#FAF6ED] via-[#FAF6ED] to-[#F5EEDC] py-20 lg:py-24 text-slate-900 border-y border-slate-100">
      {/* Background World Map Image */}
      <div className="absolute inset-0 opacity-[0.05] select-none pointer-events-none mix-blend-multiply">
        <Image
          src="/images/world-map.jpg"
          alt="World Map Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Decorative ambient glows */}
      <div className="absolute inset-0 select-none pointer-events-none opacity-35">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white blur-[130px]" />
        <div className="absolute -top-20 left-10 w-[350px] h-[350px] rounded-full bg-[#CDB06A]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 sm:px-8 z-10 text-center">
        
        {/* Section Header */}
        <div className="mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif italic font-light tracking-wide text-slate-800 uppercase">
            UPCOMING EVENTS
            <span className="block mt-1.5 text-xl sm:text-2xl md:text-3xl font-sans font-semibold text-[#007A59] tracking-[0.2em] not-italic">2026</span>
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-[#CDB06A] to-[#007A59] mx-auto mt-4 rounded-full" />
        </div>

        {/* Event Details Card */}
        <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md border border-[#CDB06A]/20 rounded-[24px] p-6 sm:p-8 shadow-xl mb-10">
          <h3 className="text-lg sm:text-xl font-bold text-[#007A59] mb-3">
            Global Regenerative Medicine Summit 2026
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-xl mx-auto leading-relaxed">
            3-Day Intensive Hands-on Training in Stem Cell & Biological Medicine. Secure your presence among global medical experts.
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-slate-600 text-xs border-t border-b border-slate-200/60 py-4 mb-6 max-w-xl mx-auto">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-4.5 w-4.5 text-[#CDB06A] shrink-0" />
              <span>November 20 - 24, 2026</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-4.5 w-4.5 text-[#CDB06A] shrink-0" />
              <span>09:00 AM - 05:00 PM</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin className="h-4.5 w-4.5 text-[#CDB06A] shrink-0" />
              <span>Kuala Lumpur, Malaysia</span>
            </div>
          </div>

          {/* Countdown Clock Grid */}
          {mounted && !timeLeft.isExpired ? (
            <div className="grid grid-cols-4 gap-2.5 sm:gap-4 max-w-md mx-auto">
              
              {/* Days Box */}
              <div className="flex flex-col items-center p-2.5 sm:p-4 bg-white/80 rounded-xl border border-slate-200/80 shadow-sm">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-0.5">
                  {timeLeft.days.toString().padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Days</span>
              </div>

              {/* Hours Box */}
              <div className="flex flex-col items-center p-2.5 sm:p-4 bg-white/80 rounded-xl border border-slate-200/80 shadow-sm">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-0.5">
                  {timeLeft.hours.toString().padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Hours</span>
              </div>

              {/* Minutes Box */}
              <div className="flex flex-col items-center p-2.5 sm:p-4 bg-white/80 rounded-xl border border-slate-200/80 shadow-sm">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 mb-0.5">
                  {timeLeft.minutes.toString().padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-wider">Mins</span>
              </div>

              {/* Seconds Box */}
              <div className="flex flex-col items-center p-2.5 sm:p-4 bg-white/80 rounded-xl border border-[#007A59]/20 shadow-sm">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[#007A59] mb-0.5 animate-pulse">
                  {timeLeft.seconds.toString().padStart(2, "0")}
                </span>
                <span className="text-[9px] sm:text-[10px] text-[#007A59]/80 font-bold uppercase tracking-wider">Secs</span>
              </div>

            </div>
          ) : (
            <div className="text-base font-bold text-[#007A59]">
              {mounted && timeLeft.isExpired ? "Registration Closed" : "Loading Countdown..."}
            </div>
          )}
        </div>

        {/* Call to action */}
        <div>
          <Link href="/register">
            <button className="bg-[#007A59] hover:bg-[#006046] text-white font-bold px-8 py-3 text-sm sm:text-base rounded-full shadow-lg hover:shadow-[#007A59]/20 hover:scale-105 transition-all duration-300 tracking-wide">
              Register For Event
            </button>
          </Link>
        </div>

      </div>
    </section>
  );
}
