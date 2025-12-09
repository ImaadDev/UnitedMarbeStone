// app/ar/privacy/page.js
import React from "react";
import Privacy from "@/components/Priavcy/Privacy";

export const metadata = {
  title: "سياسة الخصوصية | شركة المتحدة للرخام والحجر",
  description:
    "تعرف على سياسة الخصوصية الخاصة بشركة المتحدة للرخام والحجر وكيفية تعاملنا مع بيانات الزوار والعملاء باحترافية وأمان.",
  keywords: [
    "سياسة الخصوصية",
    "خصوصية البيانات",
    "شركة المتحدة للرخام والحجر",
    "سياسة الخصوصية السعودية",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/ar/privacy",
    languages: {
      "ar-SA": "https://www.unitedmarblestones.com/ar/privacy",
      "en-US": "https://www.unitedmarblestones.com/en/privacy",
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.unitedmarblestones.com/ar/privacy",
    siteName: "United Marble Stones",
    title: "سياسة الخصوصية | شركة المتحدة للرخام والحجر",
    description:
      "سياسة الخصوصية لشركة المتحدة للرخام والحجر — حماية بيانات العملاء والزوار.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "سياسة الخصوصية - المتحدة للرخام والحجر",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "سياسة الخصوصية | شركة المتحدة",
    description: "نحترم خصوصيتكم ونسعى لحماية بياناتكم بكفاءة عالية.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "theme-color": "#000000",
  },
};

export default function PrivacyPage() {
  return (
    <>
      {/* JSON-LD Structured Policy Info */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "سياسة الخصوصية",
            url: "https://www.unitedmarblestones.com/ar/privacy",
            inLanguage: "ar-SA",
            publisher: {
              "@type": "Organization",
              name: "شركة المتحدة للرخام والحجر",
              logo: "https://www.unitedmarblestones.com/logo.png",
            },
          }),
        }}
      />

      <Privacy />
    </>
  );
}
