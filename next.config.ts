import type { NextConfig } from "next";
import path from "path";

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
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname),
    };
    config.resolve.extensions = [
      ...(config.resolve.extensions || []),
      ".ts",
      ".tsx",
      ".js",
      ".jsx",
    ];
    return config;
  },
};

export default nextConfig;
