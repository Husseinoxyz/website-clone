"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function SymposiumPopupBanner() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const targetDate = new Date("2026-04-18T00:00:00").getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        };
      }

      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      aria-live="polite"
      className={`fixed bottom-0 left-0 right-0 z-50 border-t border-teal-dark bg-teal transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-4 text-white md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="text-sm font-semibold text-gold md:text-base">
            Symposium 2026 Starts In:
          </div>
          <div className="flex gap-3">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hrs" },
              { value: timeLeft.minutes, label: "Min" },
              { value: timeLeft.seconds, label: "Sec" },
            ].map((unit) => (
              <div
                key={unit.label}
                className="flex min-w-[3rem] flex-col items-center"
              >
                <div className="text-2xl font-bold tabular-nums text-white md:text-3xl">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-xs uppercase tracking-wider text-gold-light">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link href="/symposium#registration">
          <Button className="whitespace-nowrap border-gold bg-gold text-teal hover:bg-gold-dark">
            Register Now
          </Button>
        </Link>
      </div>
    </section>
  );
}
