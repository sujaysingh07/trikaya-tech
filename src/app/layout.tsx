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
      { url: "/favicons/favicon-dark.svg", sizes: "any", media: "(prefers-color-scheme: light)" },
      { url: "/favicons/favicon-light.svg", sizes: "any", media: "(prefers-color-scheme: dark)" },
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
      <body
        className={` ${inter.variable} antialiased`}
      >
        <Navbar/>
        <SmoothScroll>
        {children}
        </SmoothScroll>
        <Footer/>
      </body>
    </html>
  );
}
