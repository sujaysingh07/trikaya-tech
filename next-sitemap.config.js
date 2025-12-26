/** @type {import('next-sitemap').IConfig} */

const isProduction = process.env.TRIKAYA_NODE_ENV === "production";

module.exports = {
  siteUrl: "https://www.trikaya.io",

  generateRobotsTxt: true,

  // ✅ Generate sitemap ONLY in prod
  generateIndexSitemap: isProduction,
  sitemapSize: 5000, // ❗ never 0

  robotsTxtOptions: {
    policies: isProduction
      ? [
        {
          userAgent: "*",
          allow: "/",
        },
      ]
      : [
        {
          userAgent: "*",
          disallow: "/",
        },
      ],
  },

  // ❌ Skip sitemap URLs in non-prod
  transform: async (_, path) => {
    if (!isProduction) return null;

    return {
      loc: path,
      changefreq: "daily",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
