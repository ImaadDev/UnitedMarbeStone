// app/ar/work/page.js
import React from "react";
import Work from "@/components/Work/Work";

export const metadata = {
  title: "أعمالنا | مشاريع الرخام والجرانيت في السعودية | شركة المتحدة للرخام والحجر",
  description:
    "اطلع على أبرز مشاريع الرخام والجرانيت المنفذة في الرياض وجميع مدن السعودية. تنفيذ احترافي لتوريد وتركيب الرخام والحجر الطبيعي للفلل والمشاريع التجارية.",
  keywords: [
    "أعمال رخام السعودية",
    "مشاريع تركيب رخام الرياض",
    "واجهات حجر طبيعي",
    "تركيب رخام فاخر",
    "تشطيب فلل رخام",
    "مشاريع المتحدة للرخام والحجر",
    "أفضل أعمال رخام في السعودية",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/ar/work",
    languages: {
      "ar-SA": "https://www.unitedmarblestones.com/ar/work",
      "en-US": "https://www.unitedmarblestones.com/en/work",
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.unitedmarblestones.com/ar/work",
    siteName: "United Marble Stones",
    title: "أعمالنا | مشاريع الرخام والحجر في السعودية",
    description:
      "أفضل مشاريع تركيب الرخام والجرانيت وتشطيبات الحجر الطبيعي في المملكة العربية السعودية.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "مشاريع شركة المتحدة للرخام والحجر",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "أعمالنا | مشاريع الرخام في الرياض والسعودية",
    description:
      "اطلع على أفضل أعمال تركيب الرخام والجرانيت والحجر الطبيعي لدينا.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "theme-color": "#000000",
  },
};

export default function WorkPage() {
  return (
    <>
      {/* JSON-LD Schema for Project Showcase */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "أعمال الرخام والجرانيت",
            url: "https://www.unitedmarblestones.com/ar/work",
            inLanguage: "ar-SA",
            publisher: {
              "@type": "Organization",
              name: "شركة المتحدة للرخام والحجر",
              logo: "https://www.unitedmarblestones.com/logo.png",
            },
          }),
        }}
      />

      <Work />
    </>
  );
}
