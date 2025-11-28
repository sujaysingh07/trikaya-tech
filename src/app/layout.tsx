import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import SmoothScroll from "../components/SmoothScroll";
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
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MV6QFRCK');`,
          }}
        />
      </head>
      <body className={` ${inter.variable} antialiased`}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
