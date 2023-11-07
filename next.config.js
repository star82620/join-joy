/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "4.224.16.99",
      },
    ],
  },
};

module.exports = nextConfig;
