import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import StructuredData from '@/components/StructuredData'
import { SITE_URL } from '@/lib/site'

const archivo = localFont({
  src: './fonts/archivo-latin-wdth-normal.woff2',
  variable: '--font-archivo',
  weight: '100 900',
  display: 'swap',
  declarations: [{ prop: 'font-stretch', value: '62% 125%' }],
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
    images: [{ url: '/images/reel-poster.jpg', width: 1920, height: 1080, alt: 'Starke Media client work' }],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/images/reel-poster.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={archivo.variable}>
      <head>
        <StructuredData />
      </head>
      <body>{children}</body>
    </html>
  )
}


