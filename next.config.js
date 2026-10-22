/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/sitemap_index.xml',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/MediaCoverage',
        destination: '/media-coverage/',
        permanent: true,
      },
      {
        source: '/MediaCoverage/:path*',
        destination: '/media-coverage/',
        permanent: true,
      },
      {
        source: '/mediacoverage',
        destination: '/media-coverage/',
        permanent: true,
      },
      {
        source: '/mediacoverage/:path*',
        destination: '/media-coverage/',
        permanent: true,
      },
      {
        source: '/nep',
        destination: '/neuropi-way/',
        permanent: true,
      },
      {
        source: '/the-neuropi-way',
        destination: '/neuropi-way/',
        permanent: true,
      },
      {
        source: '/theneuropiway',
        destination: '/neuropi-way/',
        permanent: true,
      },
      {
        source: '/neuropiway',
        destination: '/neuropi-way/',
        permanent: true,
      },
      {
        source: '/whyus',
        destination: '/why-msi/',
        permanent: true,
      },
      {
        source: '/day-care',
        destination: '/programs/daycare/',
        permanent: true,
      },
      {
        source: '/ciao-baby',
        destination: '/programs/baby-creche/',
        permanent: true,
      },
      {
        source: '/hitex-msi',
        destination: '/hitex/',
        permanent: true,
      },
      {
        source: '/hitex-msi/:path*',
        destination: '/hitex/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/about-us/:path*',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/mnr',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/mnr/:path*',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/peter-gseller',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/peter-gseller/:path*',
        destination: '/about/',
        permanent: true,
      },
      {
        source: '/balewadi',
        destination: '/purna-nagar/',
        permanent: true,
      },
      {
        source: '/balewadi/:path*',
        destination: '/purna-nagar/',
        permanent: true,
      },
      {
        source: '/kavurihills-msi',
        destination: '/kavuri-hills/',
        permanent: true,
      },
      {
        source: '/kavurihills-msi/:path*',
        destination: '/kavuri-hills/',
        permanent: true,
      },
      {
        source: '/qcity-msi1',
        destination: '/qcity/',
        permanent: true,
      },
      {
        source: '/qcity-msi1/:path*',
        destination: '/qcity/',
        permanent: true,
      },
      {
        source: '/avance2-msi',
        destination: '/avance-2/',
        permanent: true,
      },
      {
        source: '/avance2-msi/:path*',
        destination: '/avance-2/',
        permanent: true,
      },
      {
        source: '/q-city',
        destination: '/qcity/',
        permanent: true,
      },
      {
        source: '/q-city/:path*',
        destination: '/qcity/',
        permanent: true,
      },
      {
        source: '/%f0%9f%8e%83-spooktacular-halloween-celebration-at-myschoolitaly-hitex-%f0%9f%91%bb',
        destination: '/spooktacular-halloween-celebration-at-myschoolitaly-hitex/',
        permanent: true,
      },
      {
        source: '/%F0%9F%8E%83-spooktacular-halloween-celebration-at-myschoolitaly-hitex-%F0%9F%91%BB',
        destination: '/spooktacular-halloween-celebration-at-myschoolitaly-hitex/',
        permanent: true,
      },
      {
        source: '/blog/%f0%9f%8e%83-spooktacular-halloween-celebration-at-myschoolitaly-hitex-%f0%9f%91%bb',
        destination: '/spooktacular-halloween-celebration-at-myschoolitaly-hitex/',
        permanent: true,
      },
      {
        source: '/blog/%F0%9F%8E%83-spooktacular-halloween-celebration-at-myschoolitaly-hitex-%F0%9F%91%BB',
        destination: '/spooktacular-halloween-celebration-at-myschoolitaly-hitex/',
        permanent: true,
      },
      {
        source: '/corporate-childcare',
        destination: '/corporatechildcare/',
        permanent: true,
      },
      {
        source: '/corporate-childcare/:path*',
        destination: '/corporatechildcare/',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/contact-us/:path*',
        destination: '/contact/',
        permanent: true,
      },
      {
        source: '/preschool-daycare-hyderabad',
        destination: '/hyderabad/',
        permanent: true,
      },
      {
        source: '/preschool-daycare-hyderabad/:path*',
        destination: '/hyderabad/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
