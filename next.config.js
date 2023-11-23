/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "2be5-4-224-16-99.ngrok-free.app",
      },
    ],
  },
};

module.exports = nextConfig;
