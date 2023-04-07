/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["tailwindui.com"],
  },
};

module.exports = nextConfig;
