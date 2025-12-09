// app/en/about/page.js
import About from "@/components/About/About";
import React from "react";

export const metadata = {
  title: "About Us | United Marble & Stone Co | Marble & Granite Experts in Saudi Arabia",
  description:
    "United Marble & Stone Co is a leading marble and granite supplier in Saudi Arabia. With expertise in stone installation, CNC cutting, cladding and luxury finishing for residential and commercial projects across Riyadh and KSA.",
  keywords: [
    "about united marble stones",
    "marble company riyadh",
    "stone installation experts saudi arabia",
    "natural stone solutions ksa",
    "granite supplier riyadh",
    "premium marble finishing",
    "luxury marble works saudi",
    "best marble company in saudi arabia",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/en/about",
    languages: {
      "en-US": "https://www.unitedmarblestones.com/en/about",
      "ar-SA": "https://www.unitedmarblestones.com/ar/about",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.unitedmarblestones.com/en/about",
    siteName: "United Marble Stones",
    title: "About United Marble & Stone Co | Premium Marble & Granite in KSA",
    description:
      "Saudi Arabia's experts in marble & granite supply, installation, cladding, polishing and CNC fabrication with premium craftsmanship.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "United Marble & Stone Co - About Us",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "About United Marble & Stone Co",
    description:
      "Leading marble and granite company in Saudi Arabia with expert installation and stone craftsmanship.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "geo.region": "SA",
    "geo.placename": "Riyadh",
    "geo.position": "24.7136;46.6753",
    "ICBM": "24.7136, 46.6753",
    "theme-color": "#000000",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "United Marble & Stone Co",
            url: "https://www.unitedmarblestones.com/en/about",
            logo: "https://www.unitedmarblestones.com/logo.png",
            image: "https://www.unitedmarblestones.com/og-image.png",
            description:
              "United Marble & Stone Co — Experts in natural stone supply & installation in Saudi Arabia.",
            areaServed: "Saudi Arabia",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966510783050",
              contactType: "customer service",
              areaServed: "SA",
              availableLanguage: ["English", "Arabic"],
            },
          }),
        }}
      />

      <About />
    </>
  );
}
