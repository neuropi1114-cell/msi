/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/nep',
        destination: '/neuropiway',
        permanent: true,
      },
      {
        source: '/the-neuropi-way',
        destination: '/neuropiway',
        permanent: true,
      },
      {
        source: '/theneuropiway',
        destination: '/neuropiway',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
