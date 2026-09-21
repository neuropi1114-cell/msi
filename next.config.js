/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/nep',
        destination: '/theneuropiway',
        permanent: true,
      },
      {
        source: '/the-neuropi-way',
        destination: '/theneuropiway',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
