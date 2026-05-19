import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.10.104'],
  images: {
    domains: ['images.unsplash.com']
  }
};

export default nextConfig;
