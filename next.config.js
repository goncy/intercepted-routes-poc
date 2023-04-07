/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["tailwindui.com"],
  },
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/products",
      },
    ];
  },
};

module.exports = nextConfig;
