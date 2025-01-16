import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['firebasestorage.googleapis.com'], // Add the domain of your external image source
  }
  /* config options here */
};

export default nextConfig;
