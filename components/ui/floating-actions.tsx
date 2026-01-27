"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, ArrowUp } from "lucide-react";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed right-4 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-3">
        <a
          href="tel:+16466478616"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-teal text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label="Call us"
        >
          <Phone className="h-5 w-5" />
        </a>
        <a
          href="mailto:global@oxyzhealth.com"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-gold text-foreground shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label="Email us"
        >
          <Mail className="h-5 w-5" />
        </a>
        <a
          href="https://wa.me/16466478616?text=Hello%2C%20I%27m%20interested%20in%20the%20OXYZ%20Symposium%202026%20and%20would%20like%20more%20details%20about%20registration%2C%20program%2C%20and%20packages.%20Thank%20you."
          target="_blank"
          rel="noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label="WhatsApp"
        >
          <svg
            aria-hidden="true"
            viewBox="0 0 32 32"
            className="h-5 w-5 fill-current"
          >
            <path d="M19.11 17.43c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.43-1.5-.9-.8-1.51-1.8-1.69-2.1-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.65-.94-2.27-.25-.6-.5-.52-.68-.53h-.58c-.2 0-.53.08-.8.38-.28.3-1.06 1.04-1.06 2.53s1.09 2.94 1.24 3.14c.15.2 2.15 3.28 5.2 4.6.73.32 1.3.51 1.74.65.73.23 1.4.2 1.93.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.08-.13-.28-.2-.58-.35M16 2.9C9.27 2.9 3.8 8.37 3.8 15.1c0 2.38.69 4.61 1.88 6.5L4 29.1l7.72-1.63c1.83 1 3.92 1.57 6.28 1.57 6.73 0 12.2-5.47 12.2-12.2S22.73 2.9 16 2.9m0 22.2c-2.17 0-4.18-.64-5.86-1.74l-.42-.27-4.58.97.97-4.46-.3-.46A9.96 9.96 0 0 1 5.7 15.1c0-5.69 4.62-10.3 10.3-10.3s10.3 4.62 10.3 10.3-4.62 10.3-10.3 10.3" />
          </svg>
        </a>
      </div>

      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-teal-dark text-white shadow-lg transition-transform hover:-translate-y-0.5"
          aria-label="Back to top"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      )}
    </>
  );
}
