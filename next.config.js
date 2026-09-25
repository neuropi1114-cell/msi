/** @type {import('next').NextConfig} */
const nextConfig = {
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
