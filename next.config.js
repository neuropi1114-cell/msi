/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/mission2000",
        destination: "/mission2000/index.html",
      },
      {
        source: "/mission2000/",
        destination: "/mission2000/index.html",
      },
      {
        source: "/mission-2000",
        destination: "/mission2000/index.html",
      },
      {
        source: "/mission-2000/",
        destination: "/mission2000/index.html",
      },
    ];
  },
};

export default nextConfig;
