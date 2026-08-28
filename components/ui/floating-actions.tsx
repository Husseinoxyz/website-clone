"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUp, UserPlus } from "lucide-react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const isArabic = pathname === "/ar";

  useEffect(() => {
    const onScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
      setShowTop(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const circumference = 2 * Math.PI * 18;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <>
      {/* Floating Actions Container */}
      <div className="fixed right-4 sm:right-6 bottom-6 sm:bottom-8 z-50 flex items-center gap-3">
        {pathname !== "/register" && pathname !== "/ar/register" && (
          <Link href={isArabic ? "/ar/register" : "/register"}>
            <button
              type="button"
              className="flex items-center gap-2 bg-[#CDB06A] hover:bg-[#B8964A] text-white border-2 border-white/80 font-bold px-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group text-sm sm:text-base"
              aria-label="Register Now"
            >
              <UserPlus className="h-5 w-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-white drop-shadow-sm">{isArabic ? "سجل الآن" : "Register Now"}</span>
            </button>
          </Link>
        )}

        {/* WhatsApp Ask Us Button - shown on every page */}
        <a
          href="https://wa.me/6586163762"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white border-2 border-white/80 font-bold px-5 py-3 rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95 group text-sm sm:text-base"
          aria-label="Chat on WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg className="w-5 h-5 fill-white group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.454 5.709 1.455h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="text-white drop-shadow-sm">{isArabic ? "تواصل معنا" : "Ask Us"}</span>
        </a>

        {/* Back to top button with circular progress */}
        {showTop && (
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-800 border border-slate-100 shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 group"
            aria-label="Back to top"
          >
            {/* Circular Progress SVG */}
            <svg className="absolute inset-0 -rotate-90 w-full h-full p-0.5">
              {/* Background Track Circle */}
              <circle
                cx="22"
                cy="22"
                r="18"
                className="stroke-slate-100 fill-transparent"
                strokeWidth="2.5"
              />
              {/* Active Progress Circle */}
              <circle
                cx="22"
                cy="22"
                r="18"
                className="stroke-[#007A59] fill-transparent transition-all duration-150 ease-out"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
              />
            </svg>

            {/* Centered Arrow Icon */}
            <ArrowUp className="h-5 w-5 text-[#CDB06A] group-hover:-translate-y-1 transition-transform duration-300 relative z-10" />
          </button>
        )}
      </div>
    </>
  );
}
