/**
 * Schema.org JSON-LD generator utilities for My School ITALY.
 * Conforms to Google Search guidelines for ChildCare / Preschool / LocalBusiness rich results.
 */

const DEFAULT_PHONE = '+917093904680';
const DEFAULT_SITE_URL = 'https://www.myschoolitaly.com';

const DEFAULT_OPENING_HOURS = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '19:30',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday'],
    opens: '08:30',
    closes: '14:00',
  },
];

/**
 * Generates Schema.org JSON-LD structured data for an individual MSI Centre.
 *
 * @param {Object} options
 * @param {string} options.name - Campus name (e.g. "My School ITALY | Kondapur")
 * @param {string} [options.alternateName] - Alternate / brand name
 * @param {string} options.description - Detailed campus description
 * @param {string} options.url - Full canonical URL or relative path
 * @param {string} [options.telephone] - International phone number
 * @param {string} [options.image] - Hero / campus photo URL
 * @param {Object} options.address - PostalAddress details
 * @param {string} options.address.streetAddress
 * @param {string} [options.address.addressLocality='Hyderabad']
 * @param {string} [options.address.addressRegion='Telangana']
 * @param {string} options.address.postalCode
 * @param {string} [options.address.addressCountry='IN']
 * @param {Object} options.geo - Geographical coordinates
 * @param {number|string} options.geo.latitude
 * @param {number|string} options.geo.longitude
 * @param {string} [options.hasMap] - Google Maps URL
 * @param {Array} [options.openingHoursSpecification] - Structured opening hours
 * @param {string} [options.priceRange='₹₹']
 * @param {Array<string>} [options.areaServed] - Localities served
 * @returns {Object} Schema.org ChildCare + Preschool object
 */
export function centreSchema({
  name,
  alternateName,
  description,
  url,
  telephone = DEFAULT_PHONE,
  image,
  address = {},
  geo = {},
  hasMap,
  openingHoursSpecification,
  priceRange = '₹₹',
  areaServed,
}) {
  const fullUrl = url.startsWith('http')
    ? url.endsWith('/')
      ? url
      : `${url}/`
    : `${DEFAULT_SITE_URL}${url.startsWith('/') ? url : `/${url}`}${url.endsWith('/') ? '' : '/'}`;

  const imageUrl = image
    ? image.startsWith('http')
      ? image
      : `${DEFAULT_SITE_URL}${image.startsWith('/') ? image : `/${image}`}`
    : undefined;

  return {
    '@context': 'https://schema.org',
    '@type': ['ChildCare', 'Preschool', 'LocalBusiness'],
    '@id': `${fullUrl}#centre`,
    name,
    ...(alternateName && { alternateName }),
    description,
    url: fullUrl,
    telephone,
    ...(imageUrl && { image: imageUrl }),
    priceRange,
    ...(hasMap && { hasMap }),
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality || 'Hyderabad',
      addressRegion: address.addressRegion || 'Telangana',
      postalCode: address.postalCode,
      addressCountry: address.addressCountry || 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: parseFloat(geo.latitude),
      longitude: parseFloat(geo.longitude),
    },
    openingHoursSpecification: openingHoursSpecification || DEFAULT_OPENING_HOURS,
    ...(areaServed && {
      areaServed: Array.isArray(areaServed)
        ? areaServed.map((area) =>
            typeof area === 'string'
              ? { '@type': 'AdministrativeArea', name: area }
              : area
          )
        : areaServed,
    }),
  };
}

export default centreSchema;
