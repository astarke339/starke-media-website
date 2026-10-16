import type { Metadata } from 'next'
import { Playfair_Display, Montserrat, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

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

const title = 'Starke Media | Video Production & Content for Michigan Businesses'
const description =
  'Short-form video, brand films, and content for businesses that need to be seen. Backed by a decade in the automotive industry and 6M+ organic views generated for clients.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  keywords: ['video production michigan', 'automotive video production', 'content marketing michigan', 'business video content', 'michigan video agency', 'macomb county videographer'],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: 'Starke Media',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
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


