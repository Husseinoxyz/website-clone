import React from "react"
import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { FloatingActions } from "@/components/ui/floating-actions";
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: 'OXYZ International Training 2026 | Regenerative Medicine',
  description: 'OXYZ International Regenerative Medicine & Strategic Collaboration Training 2026. Advancing Regenerative Medicine. Structuring the Future of Medical Practice.',
  keywords: ['regenerative medicine', 'training', 'medical conference', 'OXYZ Health', 'integrative medicine'],
  icons: {
    icon: '/Logo1.png',
    apple: '/Logo1.png',
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: '#007A59',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  )
}
