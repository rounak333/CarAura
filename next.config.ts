import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "images.pexels.com" },
      { protocol: "https", hostname: "assets.codepen.io" },
      { protocol: "https", hostname: "picsum.photos" },
    ],
  },
};

export default nextConfig;