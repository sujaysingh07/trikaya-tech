import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SmoothScroll from "../components/SmoothScroll";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Trikaya – AI & Blockchain-Powered Job Platform for Verified Skills and Fair Hiring",
  description: "Trikaya – AI & Blockchain-Powered Job Platform for Verified Skills and Fair Hiring",
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
