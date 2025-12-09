// app/en/privacy/page.js
import React from "react";
import Privacy from "@/components/Priavcy/Privacy";

export const metadata = {
  title: "Privacy Policy | United Marble & Stone Co",
  description:
    "Read the Privacy Policy of United Marble & Stone Co. We protect your data and ensure secure communication when working with marble and granite services in Saudi Arabia.",
  keywords: [
    "privacy policy",
    "data protection saudi arabia",
    "united marble stones privacy",
    "website privacy policy",
    "marble company riyadh privacy",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/en/privacy",
    languages: {
      "en-US": "https://www.unitedmarblestones.com/en/privacy",
      "ar-SA": "https://www.unitedmarblestones.com/ar/privacy",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.unitedmarblestones.com/en/privacy",
    siteName: "United Marble Stones",
    title: "Privacy Policy | United Marble & Stone Co",
    description:
      "United Marble & Stone Co respects your privacy and ensures secure handling of personal data.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy - United Marble Stones",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | United Marble Stones",
    description: "Learn how we ensure data protection and privacy for our users.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "theme-color": "#000000",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Privacy Policy",
            url: "https://www.unitedmarblestones.com/en/privacy",
            inLanguage: "en-US",
            publisher: {
              "@type": "Organization",
              name: "United Marble & Stone Co",
              logo: "https://www.unitedmarblestones.com/logo.png",
            },
          }),
        }}
      />

      <Privacy />
    </>
  );
}
