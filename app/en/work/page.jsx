// app/en/work/page.js
import React from "react";
import Work from "@/components/Work/Work";

export const metadata = {
  title: "Our Work | Marble & Granite Projects in Saudi Arabia | United Marble Stones",
  description:
    "Explore our premium marble and granite projects in Riyadh and across Saudi Arabia. Expert stone installation, cladding, CNC cutting, and luxury villa finishes by United Marble Stones.",
  keywords: [
    "marble projects Saudi Arabia",
    "stone works Riyadh",
    "luxury villa marble projects",
    "granite installation projects",
    "marble cladding work saudi",
    "united marble stones work",
    "best marble installations ksa",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/en/work",
    languages: {
      "en-US": "https://www.unitedmarblestones.com/en/work",
      "ar-SA": "https://www.unitedmarblestones.com/ar/work",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.unitedmarblestones.com/en/work",
    siteName: "United Marble Stones",
    title: "Our Work | Marble & Granite Projects in KSA",
    description:
      "Discover our finest marble & granite installations for villas and commercial spaces in Saudi Arabia.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "United Marble Stones Project Showcase",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Our Marble & Granite Projects in Saudi Arabia",
    description:
      "High-quality stone installation and cladding works done by United Marble Stones.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "theme-color": "#000000",
  },
};

export default function WorkPage() {
  return (
    <>
      {/* JSON-LD Project Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Our Work - Marble & Granite Projects",
            url: "https://www.unitedmarblestones.com/en/work",
            inLanguage: "en-US",
            publisher: {
              "@type": "Organization",
              name: "United Marble & Stone Co",
              logo: "https://www.unitedmarblestones.com/logo.png",
            },
          }),
        }}
      />

      <Work />
    </>
  );
}
