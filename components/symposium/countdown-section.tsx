"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";

const TARGET_DATE = new Date("2026-02-28T00:00:00Z");

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
  const [countdown, setCountdown] = useState<Countdown>(getCountdown());

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown(getCountdown());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
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
          <div className="absolute inset-0 bg-black/45" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="py-14 sm:py-16 text-white">
            <p className="text-sm uppercase tracking-[0.25em] text-white/70">
              Registration Deadline
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              28 February 2026
            </h2>
            <p className="mt-3 text-white/80">
              Symposium date: 18 - 20 April 2026
            </p>
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl">
              {[
                { label: "Days", value: countdown.days },
                { label: "Hours", value: countdown.hours },
                { label: "Minutes", value: countdown.minutes },
                { label: "Seconds", value: countdown.seconds },
              ].map((unit) => (
                <div
                  key={unit.label}
                  className="rounded-xl bg-white/10 px-4 py-5 text-center backdrop-blur"
                >
                  <p className="text-4xl sm:text-5xl font-semibold text-gold">
                    {unit.value}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-white/70">
                    {unit.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3 max-w-4xl">
              <div className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-4 backdrop-blur">
                <Calendar className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="text-sm text-white/70">Dates</p>
                  <p className="font-semibold">18 - 20 April 2026</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-4 backdrop-blur">
                <MapPin className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="text-sm text-white/70">Location</p>
                  <p className="font-semibold">Malaysia</p>
                  <p className="text-sm text-white/70">Kuala Lumpur</p>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-white/10 px-4 py-4 backdrop-blur">
                <Users className="h-5 w-5 text-gold mt-1" />
                <div>
                  <p className="text-sm text-white/70">Capacity</p>
                  <p className="font-semibold">80 - 100 Participants</p>
                  <p className="text-sm text-white/70">
                    Limited to ensure quality
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/register">
                <Button className="bg-gold hover:bg-gold-dark text-foreground font-semibold">
                  Register Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you." target="_blank" rel="noreferrer">
                <Button
                  variant="outline"
                  className="border-gold text-white hover:bg-gold hover:text-foreground font-semibold bg-transparent"
                >
                  Request More Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
