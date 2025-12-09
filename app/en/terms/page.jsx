// app/en/terms/page.js
import React from "react";
import Terms from "@/components/Term/Terms";

export const metadata = {
  title: "Terms & Conditions | United Marble & Stone Co",
  description:
    "Read the Terms & Conditions for using United Marble & Stone Co services and website. Learn about usage policies and your rights as a customer in Saudi Arabia.",
  keywords: [
    "terms and conditions",
    "service terms saudi arabia",
    "united marble stones terms",
    "legal policy saudi",
    "website usage terms",
    "stone company policies",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/en/terms",
    languages: {
      "en-US": "https://www.unitedmarblestones.com/en/terms",
      "ar-SA": "https://www.unitedmarblestones.com/ar/terms",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.unitedmarblestones.com/en/terms",
    siteName: "United Marble Stones",
    title: "Terms & Conditions | United Marble & Stone Co",
    description:
      "Terms and usage policies for United Marble & Stone Co services across Saudi Arabia.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions - United Marble Stones",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | United Marble & Stone Co",
    description: "Read our service terms and usage policy.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "theme-color": "#000000",
  },
};

export default function TermsUsePage() {
  return (
    <>
      {/* JSON-LD Schema for Legal Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Terms & Conditions",
            url: "https://www.unitedmarblestones.com/en/terms",
            inLanguage: "en-US",
            publisher: {
              "@type": "Organization",
              name: "United Marble & Stone Co",
              logo: "https://www.unitedmarblestones.com/logo.png",
            },
          }),
        }}
      />

      <Terms />
    </>
  );
}
