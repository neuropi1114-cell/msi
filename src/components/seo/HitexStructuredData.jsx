import React from 'react';

const preschoolSchema = {
  '@context': 'https://schema.org',
  '@type': ['Preschool', 'LocalBusiness'],
  '@id': 'https://www.myschoolitaly.com/hitex/#preschool',
  name: 'My School ITALY | Hitex',
  url: 'https://www.myschoolitaly.com/hitex/',
  description:
    'My School ITALY Hitex offers preschool, nursery, kindergarten and daycare near HITEX Exhibition Centre, Hyderabad. Explore our programs and book a school tour.',
  telephone: '+917093904680',
  image: 'https://www.myschoolitaly.com/images/hitex/HITEX_1.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'HITEX Road, next to HITEX Exhibition Centre Gate, Shilpa Layout, Izzathnagar',
    addressLocality: 'Hyderabad',
    addressRegion: 'Telangana',
    postalCode: '500084',
    addressCountry: 'IN',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '17.4767',
    longitude: '78.3705',
  },
  hasMap: 'https://www.google.com/maps/search/?api=1&query=My+School+ITALY+Hitex',
  areaServed: [
    'HITEX',
    'Izzathnagar',
    'Shilpa Layout',
    'Kothaguda',
    'Kondapur',
    'Madhapur',
    'Hitech City',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '08:00',
      closes: '19:30',
    },
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.myschoolitaly.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'My School ITALY Hitex',
      item: 'https://www.myschoolitaly.com/hitex',
    },
  ],
};

export default function HitexStructuredData() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(preschoolSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(/</g, '\\u003c'),
        }}
      />
    </>
  );
}
