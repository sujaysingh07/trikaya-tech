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
      { url: "/favicons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    //  shortcut: "/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          name="theme-color"
          content="#000000"
          media="(prefers-color-scheme: dark)"
        />
        <meta
          name="theme-color"
          content="#ffffff"
          media="(prefers-color-scheme: light)"
        />

        <Script
          id="script"
          dangerouslySetInnerHTML={{
            __html: `
      function setFavicon() {
        const darkIcon = "/favicons/favicon-light.svg"; // for dark theme
        const lightIcon = "/favicons/favicon-dark.svg"; // for light theme

        const favicon = document.querySelector("link[rel='icon']") || document.createElement("link");
        favicon.rel = "icon";

        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        favicon.href = prefersDark ? darkIcon : lightIcon;

        document.head.appendChild(favicon);
      }

      setFavicon();

      // Listen for theme changes
      window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", setFavicon);
    `,
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
