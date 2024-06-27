/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["joinjoy-api.rocket-coding.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "https://joinjoy-api.rocket-coding.com/",
      },
    ],
  },
};

module.exports = nextConfig;
