import type { Metadata } from 'next'
import { Playfair_Display, Montserrat, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Automotive Content Marketing & Video Editing | Starke Media Michigan',
  description: 'Professional automotive content creation and social media management for Michigan dealerships, detail shops, and custom builders. Scalable monthly packages starting at $900.',
  keywords: ['automotive content marketing michigan', 'car dealership video production', 'automotive social media management', 'detail shop marketing', 'auto shop video content'],
  openGraph: {
    title: 'Automotive Content Marketing & Video Editing | Starke Media Michigan',
    description: 'Professional automotive content creation and social media management for Michigan dealerships, detail shops, and custom builders. Scalable monthly packages starting at $900.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Automotive Content Marketing & Video Editing | Starke Media Michigan',
    description: 'Professional automotive content creation and social media management for Michigan dealerships, detail shops, and custom builders.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable} ${jetbrains.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  )
}


