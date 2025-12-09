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
  title: 'Starke Media | Video Production & Social Media for Michigan Businesses',
  description: 'Cinematic video production and social media management for businesses in Michigan. Monthly packages from $900.',
  keywords: ['video production michigan', 'social media management', 'content marketing michigan', 'business video content', 'michigan video agency'],
  openGraph: {
    title: 'Starke Media | Video Production & Social Media for Michigan Businesses',
    description: 'Cinematic video production and social media management for businesses in Michigan. Monthly packages from $900.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Starke Media | Video Production & Social Media for Michigan Businesses',
    description: 'Cinematic video production and social media management for businesses in Michigan.',
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


