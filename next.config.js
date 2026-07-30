/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/igs-school",
        destination: "/igs-school/index.html",
      },
      {
        source: "/igs-school/",
        destination: "/igs-school/index.html",
      },
    ];
  },
};

export default nextConfig;
