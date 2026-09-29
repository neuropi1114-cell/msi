/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
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
    ];
  },
};

export default nextConfig;
