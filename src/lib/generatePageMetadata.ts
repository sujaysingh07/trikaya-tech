import type { Metadata } from "next";

export function generatePageMetadata({
  title,
  description,
  canonical,
  keywords = [],
  robots = {
    index: true,
    follow: true,
  },
  ogImage = "/favicons/trikaya-og-logo.png",
  verification = {
    "google-site-verification": "KIQ_oo-W-aSNZkH17eUKgVQOYXu0lpzGu5r9gJqFjeA",
  },
}: {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string[] | string;
  robots?: Metadata["robots"];
  ogImage?: string;
  verification?: Record<string, string>;
}): Metadata {
  return {
    title,
    description,
    keywords: Array.isArray(keywords) ? keywords.join(", ") : keywords,

    alternates: {
      canonical,
    },

    icons: {
      icon: [
        { url: "/favicons/favicon-dark.svg", sizes: "any" },
        {
          url: "/favicons/favicon-dark.svg",
          sizes: "any",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/favicons/favicon-light.svg",
          sizes: "any",
          media: "(prefers-color-scheme: dark)",
        },
        {
          url: "/favicons/favicon-32x32.png",
          sizes: "32x32",
          type: "image/png",
        },
        {
          url: "/favicons/favicon-16x16.png",
          sizes: "16x16",
          type: "image/png",
        },
      ],
      apple: "/favicons/apple-touch-icon.png",
    },

    manifest: "/favicons/site.webmanifest",

    robots,

    openGraph: {
      title,
      description,
      url: canonical,
      type: "website",
      locale: "en_US",
      siteName: title,
      images: [
        {
          url: ogImage,
          width: 1024,
          height: 630,
          alt: title,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },

    other: verification,
  };
}
