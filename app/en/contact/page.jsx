// app/en/contact/page.js
import React from "react";
import Contact from "@/components/Contact/Contact";
import MapSection from "@/components/Contact/MapSection";

export const metadata = {
  title: "Contact Us | United Marble & Stone Co | Riyadh Marble Services",
  description:
    "Contact United Marble & Stone Co for marble & granite supply and installation in Saudi Arabia. Call or WhatsApp us for quotations and project inquiries in Riyadh and across KSA.",
  keywords: [
    "contact marble supplier riyadh",
    "stone installation company riyadh",
    "marble company contact saudi arabia",
    "granite supplier riyadh phone",
    "united marble stones contact",
    "whatsapp marble company riyadh",
    "best marble company in ksa",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/en/contact",
    languages: {
      "en-US": "https://www.unitedmarblestones.com/en/contact",
      "ar-SA": "https://www.unitedmarblestones.com/ar/contact",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.unitedmarblestones.com/en/contact",
    siteName: "United Marble Stones",
    title: "Contact United Marble & Stone Co",
    description:
      "Request a quote for premium marble supply and installation in Saudi Arabia.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "United Marble & Stone - Contact Page",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact United Marble & Stone Co",
    description:
      "Call or WhatsApp our marble and stone specialists in Riyadh.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "theme-color": "#000000",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD for LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "United Marble & Stone Co",
            url: "https://www.unitedmarblestones.com/en/contact",
            logo: "https://www.unitedmarblestones.com/logo.png",
            image: "https://www.unitedmarblestones.com/og-image.png",
            telephone: "+966510783050",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Riyadh",
              addressCountry: "SA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "24.7136",
              longitude: "46.6753",
            },
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966510783050",
              contactType: "customer service",
              availableLanguage: ["English", "Arabic"],
            },
          }),
        }}
      />

      <Contact />
      <MapSection />
    </>
  );
}
