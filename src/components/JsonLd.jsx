const siteUrl = 'https://www.myschoolitaly.com';

const globalOrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'My School ITALY',
  description: 'Neuroscience-based preschool & childcare for ages 45 days to 7 years.',
  url: siteUrl,
  telephone: '+91 7093904680',
  email: 'info@myschoolitaly.com',
  logo: `${siteUrl}/favicon.svg`,
  image: `${siteUrl}/images/hero/Slider_1-scaled.jpg.bv.webp`,
  foundingDate: '2017',
  founder: {
    '@type': 'Person',
    name: 'Dr. Jessy Costantino',
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Hitex Road, Madhapur',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500081',
    addressCountry: 'IN',
  },
  areaServed: [
    { '@type': 'Country', name: 'Italy' },
    { '@type': 'Country', name: 'United Arab Emirates' },
    { '@type': 'Country', name: 'India' },
  ],
  sameAs: [
    'https://facebook.com/myschoolitaly',
    'https://instagram.com/myschoolitaly',
    'https://linkedin.com/company/myschoolitaly',
  ],
  knowsAbout: [
    'Neuroscience-based early childhood education',
    'NeuroPi Study Technology',
    'Play-based learning',
    'Emotional intelligence development',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Programs',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Infant Program (45 days - 18 months)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Toddler Program (18 months - 3 years)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Preschool Program (3 - 5 years)' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kindergarten Program (5 - 7 years)' } },
    ],
  },
};

export default function JsonLd({ schema, breadcrumbs }) {
  if (schema || breadcrumbs) {
    return (
      <>
        {schema && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema).replace(/</g, '\\u003c'),
            }}
          />
        )}
        {breadcrumbs && (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbs).replace(/</g, '\\u003c'),
            }}
          />
        )}
      </>
    );
  }

  // Global organization schema rendered once from RootLayout
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(globalOrganizationSchema).replace(/</g, '\\u003c'),
      }}
    />
  );
}
