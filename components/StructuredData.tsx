import { EMAIL, INSTAGRAM_URL, SITE_URL } from '@/lib/site'

export default function StructuredData() {
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': SITE_URL,
    name: 'Starke Media',
    url: SITE_URL,
    email: EMAIL,
    description:
      'Video production and content agency creating short-form video, brand films, and ad creative for automotive, service, and product businesses in Michigan.',
    founder: {
      '@type': 'Person',
      name: 'Austin Starke',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'MI',
      addressCountry: 'US',
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Metro Detroit' },
      { '@type': 'State', name: 'Michigan' },
    ],
    sameAs: [INSTAGRAM_URL],
    knowsAbout: [
      'Video production',
      'Short-form video',
      'Automotive content',
      'Brand films',
      'Ad creative',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  )
}
