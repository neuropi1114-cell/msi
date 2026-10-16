import { seoMetadataMap } from '../data/seo-metadata';

const DEFAULT_SITE_URL = 'https://www.myschoolitaly.com';
const DEFAULT_IMAGE = '/images/hero/hero-slide-1.png';

/**
 * Normalizes a route path into standard format e.g. "/programs/daycare/"
 */
export function normalizePath(path = '/') {
  if (!path) return '/';
  let cleanPath = path.trim();
  if (!cleanPath.startsWith('/')) cleanPath = '/' + cleanPath;
  if (!cleanPath.endsWith('/')) cleanPath = cleanPath + '/';
  return cleanPath;
}

/**
 * Gets the raw SEO details for a specific route from the SEO metadata map.
 */
export function getSeoData(path = '/') {
  const key = normalizePath(path);
  return (
    seoMetadataMap[key] || {
      priority: 'P0',
      pagePurpose: 'My School ITALY',
      recommendedUrl: `${DEFAULT_SITE_URL}${key}`,
      canonical: `${DEFAULT_SITE_URL}${key}`,
      title: 'My School ITALY | Neuroscience-Based Preschool & Daycare',
      description:
        'My School ITALY is a neuroscience-based preschool & daycare for ages 45 days to 7 years in Hyderabad.',
      h1: 'My School ITALY',
      primaryKeyword: 'preschool daycare Hyderabad',
      secondaryKeywords: [],
      keywords: ['preschool', 'daycare', 'Hyderabad', 'My School ITALY'],
      searchIntent: 'Commercial',
      internalLinksTo: '',
      internalLinksFrom: '',
      schema: 'BreadcrumbList',
      cta: 'Book a School Tour',
      notes: '',
    }
  );
}

/**
 * Generates Next.js App Router metadata object based on the route path.
 */
export function buildPageMetadata(path = '/', overrides = {}) {
  const seo = getSeoData(path);
  const rawTitle = overrides.title || seo.title;
  const titleString =
    typeof rawTitle === 'object' && rawTitle !== null
      ? rawTitle.absolute || rawTitle.default || ''
      : rawTitle || '';
  const title =
    typeof rawTitle === 'object' && rawTitle !== null
      ? rawTitle
      : typeof rawTitle === 'string' && rawTitle.includes('| My School ITALY')
      ? { absolute: rawTitle }
      : rawTitle;
  const description = overrides.description || seo.description;
  let canonicalUrl = overrides.canonical || seo.canonical || `${DEFAULT_SITE_URL}${normalizePath(path)}`;
  if (!canonicalUrl.endsWith('/')) {
    canonicalUrl = `${canonicalUrl}/`;
  }
  const keywords = overrides.keywords || seo.keywords || [];
  const ogImage = overrides.image || DEFAULT_IMAGE;
  const absoluteOgImage = ogImage.startsWith('http') ? ogImage : `${DEFAULT_SITE_URL}${ogImage}`;

  return {
    title,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(', ') : keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: titleString,
      description,
      url: canonicalUrl,
      siteName: 'My School ITALY',
      locale: 'en_IN',
      type: overrides.type || 'website',
      images: [
        {
          url: absoluteOgImage,
          width: 1200,
          height: 630,
          alt: titleString,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: titleString,
      description,
      images: [absoluteOgImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default buildPageMetadata;
