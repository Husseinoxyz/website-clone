import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Mail, Calendar, ArrowRight } from "lucide-react";

export default function RegistrationSuccessPage() {
  return (
    <>
      <Header />
      <main>
        <section className="pt-32 pb-24 bg-background min-h-screen">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
            <div className="w-20 h-20 bg-teal/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="h-10 w-10 text-teal" />
            </div>

            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              Registration Successful
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Thank you for registering for the OXYZ International Symposium
              2026. Your payment has been received and your registration is now
              being processed.
            </p>

            <div className="bg-muted rounded-lg p-8 mb-8 text-left">
              <h2 className="text-xl font-bold text-foreground mb-4">
                What Happens Next?
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Confirmation Email
                    </p>
                    <p className="text-muted-foreground text-sm">
                      You will receive a confirmation email with your
                      registration details within the next few minutes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Application Review
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Our team will review your application within 48 hours to
                      confirm your registration.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Calendar className="h-4 w-4 text-gold" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      Event Details
                    </p>
                    <p className="text-muted-foreground text-sm">
                      Closer to the event, you will receive detailed information
                      about the venue, schedule, and accommodation.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-teal-dark text-secondary-foreground rounded-lg p-6 mb-8">
              <p className="font-medium">
                Remember to save the date:{" "}
                <span className="text-gold font-bold">18-20 April 2026</span>
              </p>
              <p className="text-sm text-secondary-foreground/80 mt-2">
                OXYZ International Symposium 2026, Malaysia
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/">
                <Button className="bg-gold hover:bg-gold-dark text-foreground font-semibold px-8">
                  Return to Home
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/symposium">
                <Button
                  variant="outline"
                  className="border-teal text-teal hover:bg-teal hover:text-secondary-foreground font-semibold px-8 bg-transparent"
                >
                  View Symposium Details
                </Button>
              </Link>
            </div>

            <p className="text-sm text-muted-foreground mt-12">
              Questions? Contact us at{" "}
              <a
                href="mailto:global@oxyzhealth.com"
                className="text-gold hover:underline"
              >
                global@oxyzhealth.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
