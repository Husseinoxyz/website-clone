import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  symposium: [
    { name: "Overview", href: "/symposium" },
    { name: "Program Details", href: "/program" },
    { name: "Registration", href: "/register" },
    { name: "Past Symposiums", href: "/past-symposiums" },
  ],
  company: [
    { name: "About OXYZ", href: "/about" },
    { name: "The 5D Model", href: "/5d-model" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-teal-dark text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/logo.png"
                alt="OXYZ Health International"
                width={180}
                height={45}
                className="h-11 w-auto"
              />
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
              OXYZ Health International is a globally positioned regenerative
              medical ecosystem, integrating medical science, structured clinical
              systems, and scalable business models.
            </p>
          </div>

          {/* Symposium Links */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Symposium 2026
            </h3>
            <ul className="space-y-3">
              {footerLinks.symposium.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:global@oxyzhealth.com"
                  className="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"
                >
                  global@oxyzhealth.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+16466478616"
                  className="text-sm text-secondary-foreground/80 hover:text-gold transition-colors"
                >
                  +1 646 647 8616
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold flex-shrink-0 mt-0.5" />
                <span className="text-sm text-secondary-foreground/80">
                  USA | Singapore | Malaysia
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/20">
          <p className="text-center text-sm text-secondary-foreground/70 leading-relaxed">
            Regenerative medicine carries responsibility. OXYZ collaborates with
            those who respect its science, structure, and impact.
          </p>
          <p className="text-center text-xs text-secondary-foreground/50 mt-4">
            &copy; {new Date().getFullYear()} OXYZ Health International. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
