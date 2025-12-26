/** @type {import('next-sitemap').IConfig} */

const isProduction = process.env.TRIKAYA_NODE_ENV === "production";

module.exports = {
  siteUrl: "https://www.trikaya.io",
  generateRobotsTxt: true,

  // 🚫 Disable sitemap generation on dev/preview
  generateIndexSitemap: isProduction,
  sitemapSize: isProduction ? 5000 : 0,

  // ✅ ROBOTS RULES
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

  // ❌ No sitemap reference on non-prod
  transform: async (config, path) => {
    if (!isProduction) return null;
    return {
      loc: path,
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
