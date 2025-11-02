import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // allows images from any HTTPS domain
      },
      {
        protocol: "http",
        hostname: "**", // allows images from any HTTP domain
      },
    ],
  },
};

export default nextConfig;
