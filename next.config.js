/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://joinjoy-api.rocket-coding.com/",
      },
    ],
  },
};

module.exports = nextConfig;
