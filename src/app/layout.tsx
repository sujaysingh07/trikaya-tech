import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SmoothScroll from "../components/SmoothScroll";
import Script from "next/script";
import { generatePageMetadata } from "../lib/generatePageMetadata";
import { generateCanonical } from "../lib/utils";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


export const metadata = generatePageMetadata({
  title:
    "Trikaya | Future-Ready AI, Blockchain & Tech Career Platform",
  description:
    "Bridge the gap between verified skills and global hiring. Master AI, Blockchain, and Cybersecurity with expert mentorship and fair hiring at Trikaya.",
  keywords: [
    "Trikaya",
    "Trikaya Platform",
    " Trikaya tech",
    " Trikaya Io",
    "Trikaya AI, AI & Machine Learning",
    "Blockchain Technology",
    "Data Science",
    "Cybersecurity",
    "Tech Hiring Platform",
    "Digital Learning",
    "On - Chain Verification",
    "Web3 Jobs",
    "Emerging Technologies",
  ],
  canonical: generateCanonical("/"),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
              url: "https://trikaya-tech.vercel.app/",
              logo: "https://trikaya-tech.vercel.app/favicons/trikaya-og-logo.png",
              sameAs: [
                "https://www.linkedin.com/company/trikaya-tech",
                "https://www.instagram.com/trikaya_tech",
                "https://x.com/trikaya_tech"
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
              image: "https://trikaya-tech.vercel.app/favicons/trikaya-og-logo.png",
              url: "https://trikaya-tech.vercel.app/",
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
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MV6QFRCK"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
      </head>

      <body className={` ${inter.variable} antialiased`}>
        <Navbar />
        <SmoothScroll>{children}</SmoothScroll>
        <Footer />
      </body>
    </html>
  );
}
