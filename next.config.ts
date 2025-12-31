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
  async redirects() {
    return [
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true, // 308 redirect (SEO friendly)
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true, // 308 redirect (SEO friendly)
      },
    ];
  },
};

export default nextConfig;
