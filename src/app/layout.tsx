import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import SmoothScroll from "../components/SmoothScroll";
import Script from "next/script";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Trikaya – AI & Blockchain-Powered Job Platform for Verified Skills and Fair Hiring",
  description:
    "Trikaya – AI & Blockchain-Powered Job Platform for Verified Skills and Fair Hiring",

  icons: {
    icon: [
      // DEFAULT ICON (always loads first)
      {
        url: "/favicons/favicon-dark.svg", // black favicon
        sizes: "any",
      },

      // Light mode → show DARK ICON
      {
        url: "/favicons/favicon-dark.svg",
        sizes: "any",
        media: "(prefers-color-scheme: light)",
      },

      // Dark mode → show LIGHT ICON
      {
        url: "/favicons/favicon-light.svg",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },

      // PNG fallbacks
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],

    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",

  // ✅ OG (Open Graph) Images
  openGraph: {
    title:
      "Trikaya – AI & Blockchain-Powered Job Platform for Verified Skills and Fair Hiring",
    description:
      "Trikaya is an AI & Blockchain-powered job platform ensuring verified skills, transparent hiring, and fair opportunities.",
    type: "website",
    locale: "en_US",
    url: "https://www.trikaya.io/",
    siteName: "Trikaya",
    images: [
      {
        url: "/favicons/og-image.png", // add your OG image here
        width: 1024,
        height: 630,
        alt: "Trikaya – AI & Blockchain-Powered Job Platform",
      },
    ],
  },
  other: {
    "google-site-verification": "KIQ_oo-W-aSNZkH17eUKgVQOYXu0lpzGu5r9gJqFjeA",
  },

  // ✅ Twitter Card
  twitter: {
    card: "summary_large_image",
    title:
      "Trikaya – AI & Blockchain-Powered Job Platform for Verified Skills and Fair Hiring",
    description:
      "Trikaya is an AI & Blockchain-powered platform promoting transparent, skill-verified recruitment.",
    images: ["/favicons/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Google Tag Manager script */}
        <Script
          id="gtm-script"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MV6QFRCK');`,
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Trikaya",
              alternateName: "Trikaya.io",
              url: "https://www.trikaya.io/",
              logo: "https://www.trikaya.io/logo/logo-trikaya-white.svg",
              sameAs: [
                "https://www.linkedin.com/company/trikaya-tech",
                "https://www.instagram.com/trikaya_tech",
              ],
            }),
          }}
        />
        <Script
          id="Local Business Schema : Professional Service"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "Trikaya",
              image: "https://www.trikaya.io/logo/logo-trikaya-white.svg",
              url: "https://www.trikaya.io/",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Jbr Tech Park, Plot No. 77, 6th Rd, EPIP Zone, Whitefield",
                addressLocality: "Bengaluru",
                postalCode: "560066",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 12.9782857,
                longitude: 77.7278491,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                ],
                opens: "10:00",
                closes: "19:00",
              },
            }),
          }}
        />
      </head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MV6QFRCK"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        ></iframe>
      </noscript>

      <body className={` ${inter.variable} antialiased`}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
