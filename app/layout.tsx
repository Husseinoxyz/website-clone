import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins, Readex_Pro } from 'next/font/google'
import { cookies } from 'next/headers'
import { Analytics } from '@vercel/analytics/next'
import { FloatingActions } from "@/components/ui/floating-actions";
import { LanguageProvider } from "@/lib/i18n";
import { LANG_COOKIE, type Lang } from "@/lib/i18n-config";
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

const readexPro = Readex_Pro({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-readex",
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const isAr = (await cookies()).get(LANG_COOKIE)?.value === "ar";
  return {
    // The site has its own English/Arabic switch, so stop the browser offering Google Translate.
    other: { google: "notranslate" },
    title: isAr
      ? 'القمة العالمية للطب التجديدي 2026 | الطب التجديدي'
      : 'Global Regenerative Medicine Summit 2026 | Regenerative Medicine',
    description: isAr
      ? 'قمة OXYZ الدولية للطب التجديدي والتعاون الاستراتيجي 2026. نرتقي بالطب التجديدي ونبني مستقبل الممارسة الطبية.'
      : 'OXYZ International Regenerative Medicine & Strategic Collaboration Summit 2026. Advancing Regenerative Medicine. Structuring the Future of Medical Practice.',
    keywords: ['regenerative medicine', 'training', 'medical conference', 'OXYZ Health', 'integrative medicine'],
    icons: {
      icon: '/Logo1.png',
      apple: '/Logo1.png',
    },
    generator: 'v0.app'
  }
}

export const viewport: Viewport = {
  themeColor: '#007A59',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang: Lang = (await cookies()).get(LANG_COOKIE)?.value === "ar" ? "ar" : "en";

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} translate="no">
      <head>
        <script src="https://dashboard.montis-clinic.com/t.js" data-site="oxyzinternational" defer></script>
      </head>
      <body className={`${poppins.variable} ${readexPro.variable} font-sans antialiased`}>
        <LanguageProvider initialLang={lang}>
          {children}
          <FloatingActions />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
