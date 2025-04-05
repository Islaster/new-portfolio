import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Add debug output during build
  onDemandEntries: {
    // Keep pages in memory longer during development
    maxInactiveAge: 25 * 1000,
    // Number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 4,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

console.log("Next.js config loaded:", nextConfig);

export default nextConfig;