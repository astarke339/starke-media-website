export default function StructuredData() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Starke Media',
    url: 'https://starkemedia.com',
    logo: 'https://starkemedia.com/logo.png',
    description: 'Professional automotive content creation and social media management for Michigan dealerships, detail shops, and custom builders.',
    founder: {
      '@type': 'Person',
      name: 'Austin Starke',
    },
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Michigan',
      addressCountry: 'US',
    },
    sameAs: [
      'https://instagram.com/austin.starke',
    ],
  }

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Starke Media',
    image: 'https://starkemedia.com/logo.png',
    '@id': 'https://starkemedia.com',
    url: 'https://starkemedia.com',
    telephone: '',
    email: 'a.starkemedia@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Michigan',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 42.7325,
      longitude: -84.5555,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      ],
      opens: '09:00',
      closes: '17:00',
    },
    priceRange: '$900-$5000',
  }

  const servicesSchema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Remote Content Editing',
      provider: {
        '@type': 'Organization',
        name: 'Starke Media',
      },
      areaServed: {
        '@type': 'State',
        name: 'Michigan',
      },
      description: 'Professional video editing and post-production for automotive businesses.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Social Media Management',
      provider: {
        '@type': 'Organization',
        name: 'Starke Media',
      },
      areaServed: {
        '@type': 'State',
        name: 'Michigan',
      },
      description: 'Complete social media management for automotive dealerships and shops.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'Marketing Strategy & Consulting',
      provider: {
        '@type': 'Organization',
        name: 'Starke Media',
      },
      areaServed: {
        '@type': 'State',
        name: 'Michigan',
      },
      description: 'Content strategy and marketing consulting for automotive businesses.',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      serviceType: 'On-Site Video Production',
      provider: {
        '@type': 'Organization',
        name: 'Starke Media',
      },
      areaServed: {
        '@type': 'State',
        name: 'Michigan',
      },
      description: 'Professional on-site video production for automotive businesses.',
    },
  ]

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {servicesSchema.map((service, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
        />
      ))}
    </>
  )
}

