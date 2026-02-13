"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About OXYZ", href: "/about" },
  { name: "2026 Training", href: "/training" },
  { name: "Program", href: "/program" },
  { name: "Past Trainings", href: "/past-trainings" },
  { name: "Business Enquiries", href: "/business-enquiries" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-b border-border shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="OXYZ Health International"
              width={160}
              height={40}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative px-3 py-2 text-sm font-semibold text-[#007A59] transition-colors duration-200 hover:text-gold"
              >
                <span className="relative z-10">{item.name}</span>
                <span className="pointer-events-none absolute left-1/2 -bottom-1 h-[2px] w-0 -translate-x-1/2 bg-gold transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <Link href="/register">
              <Button className="bg-gold hover:bg-gold-dark text-white font-semibold px-6 shadow-md shadow-gold/20 hover:shadow-lg hover:shadow-gold/30 transition-shadow">
                Register Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-full px-4 py-2 text-base font-medium text-[#007A59] hover:text-gold transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gold hover:bg-gold-dark text-white font-semibold shadow-md shadow-gold/20">
                  Register Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
