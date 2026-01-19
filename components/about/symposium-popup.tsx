"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TARGET_DATE = "2026-04-18T00:00:00";
const POPUP_DELAY_MS = 2 * 60 * 1000;

export function SymposiumPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, POPUP_DELAY_MS);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const targetTime = new Date(TARGET_DATE).getTime();

    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

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

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Symposium 2026 registration"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 py-8"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-background shadow-2xl">
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-sm font-semibold text-muted-foreground hover:text-foreground"
          aria-label="Close symposium popup"
        >
          Close
        </button>

        <div className="grid gap-6 p-6 md:grid-cols-[1.1fr_0.9fr] md:gap-8 md:p-10">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-gold">
              Symposium 2026
            </p>
            <h2 className="mt-3 text-3xl font-bold text-teal md:text-4xl">
              Regenerative Medicine Summit
            </h2>
            <p className="mt-4 text-base text-muted-foreground md:text-lg">
              Join leading clinicians and innovators for three days of clinical
              strategy, hands-on education, and future-forward collaboration.
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hrs" },
                { value: timeLeft.minutes, label: "Min" },
                { value: timeLeft.seconds, label: "Sec" },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="flex min-w-[4.5rem] flex-col items-center rounded-lg bg-muted px-3 py-2"
                >
                  <div className="text-2xl font-bold tabular-nums text-teal">
                    {String(unit.value).padStart(2, "0")}
                  </div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link href="/symposium#registration">
                <Button className="w-full bg-gold text-teal hover:bg-gold-dark sm:w-auto">
                  Register
                </Button>
              </Link>
              <Link
                href="https://wa.me/16466478616"
                target="_blank"
                rel="noreferrer"
              >
                <Button
                  variant="outline"
                  className="w-full border-teal text-teal hover:bg-teal hover:text-white sm:w-auto"
                >
                  WhatsApp +1 646 647 8616
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative min-h-[220px] overflow-hidden rounded-xl">
            <Image
              src="/images/symposium-popup.jpg"
              alt="Symposium 2026 preview"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
