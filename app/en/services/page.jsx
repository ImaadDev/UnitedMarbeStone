// app/services/page.js
import React from "react";
import Services from "@/components/Services/Services";
import { getServices } from "@/services/getServices";

export const metadata = {
  title:
    "Marble & Granite Supply & Installation in Saudi Arabia | United Marble Stones",
  description:
    "Premium marble & granite supply and installation in Riyadh, Jeddah, Dammam & across Saudi Arabia. CNC stone cutting, cladding, polishing & high-end villa finishing. Contact United Marble Stones for quotations today.",
  keywords: [
    "marble supplier Saudi Arabia",
    "granite installation Saudi Arabia",
    "stone installation company Riyadh",
    "marble supply Riyadh",
    "stone cladding KSA",
    "luxury villa marble Saudi",
    "marble polishing Riyadh",
    "CNC stone cutting Saudi Arabia",
    "granite supplier Dammam",
    "exterior cladding Riyadh",
    "United Marble Stones"
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/services",
    languages: {
      "en-US": "https://www.unitedmarblestones.com/services",
      "ar-SA": "https://www.unitedmarblestones.com/ar/services",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Marble & Granite Supply & Installation in Saudi Arabia | United Marble Stones",
    description:
      "Top-tier natural stone supply and installation — serving all of Saudi Arabia with luxury standards.",
    url: "https://www.unitedmarblestones.com/services",
    siteName: "United Marble Stones",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "United Marble & Stone Co in Saudi Arabia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Marble & Granite Installation in Saudi Arabia | United Marble Stones",
    description:
      "Premium marble, granite, cladding & CNC cutting services in KSA.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "theme-color": "#000000",
  },
};

export default async function ServicesPage() {
  const services = await getServices(); // SSR fetch
  console.log("Fetched Services:", services);

  return (
    <>
      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "United Marble Stones",
            url: "https://www.unitedmarblestones.com/services",
            image: "https://www.unitedmarblestones.com/og-image.png",
            telephone: "+966510783050",
            address: {
              "@type": "PostalAddress",
              addressRegion: "Riyadh",
              addressCountry: "SA",
            },
            serviceType: [
              "Marble Supply",
              "Granite Supply",
              "CNC Stone Cutting",
              "Exterior Cladding",
              "Marble Polishing",
            ],
          }),
        }}
      />

      <Services services={services} />
    </>
  );
}
