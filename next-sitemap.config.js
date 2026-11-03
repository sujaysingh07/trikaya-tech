/** @type {import('next-sitemap').IConfig} */

// Always allow crawling and always publish the sitemap, whatever the
// environment, so search engines can crawl and rank the site.
module.exports = {
  siteUrl: "https://www.trikaya.io",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 5000,

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },

  transform: async (_, path) => ({
    loc: path,
    changefreq: "daily",
    priority: 0.7,
    lastmod: new Date().toISOString(),
  }),
};
