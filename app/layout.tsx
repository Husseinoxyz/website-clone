import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins, Readex_Pro } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingActions } from "@/components/ui/floating-actions";
import { LanguageProvider } from "@/lib/i18n";
import { getRequestLang, siteMetadata, SiteJsonLd } from "@/lib/seo";
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
  return siteMetadata(await getRequestLang());
}

export const viewport: Viewport = {
  themeColor: '#007A59',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const lang = await getRequestLang();

  return (
    <html lang={lang} dir={lang === "ar" ? "rtl" : "ltr"} translate="no">
      <head>
        <script src="https://dashboard.montis-clinic.com/t.js" data-site="oxyzinternational" defer></script>
      </head>
      <body className={`${poppins.variable} ${readexPro.variable} font-sans antialiased`}>
        <SiteJsonLd />
        <LanguageProvider initialLang={lang}>
          {children}
          <FloatingActions />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
