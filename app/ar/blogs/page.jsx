// app/ar/blog/page.js
import React from "react";
import Blogs from "@/components/Blogs/Blogs";

export const metadata = {
  title: "مدونة الرخام والجرانيت | شركة المتحدة للرخام والحجر",
  description:
    "مقالات عن الرخام والجرانيت والحجر الطبيعي في السعودية — نصائح وتشطيبات فاخرة وخدمات تركيب وتوريد للفلل والمشاريع التجارية.",
  keywords: [
    "مدونة رخام",
    "مقالات عن الرخام",
    "أفضل شركات الرخام في السعودية",
    "تشطيبات رخام",
    "واجهات حجر طبيعي",
    "رخام الرياض",
    "قص رخام CNC",
    "تصميم رخام للفلل",
    "شركة تركيب رخام السعودية",
    "شركة المتحدة للرخام والحجر",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/ar/blog",
    languages: {
      "ar-SA": "https://www.unitedmarblestones.com/ar/blog",
      "en-US": "https://www.unitedmarblestones.com/en/blog",
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.unitedmarblestones.com/ar/blog",
    siteName: "United Marble Stones",
    title: "مدونة الرخام والجرانيت في السعودية",
    description:
      "كل ما يتعلق بأعمال الرخام والجرانيت والتركيب والحجر الطبيعي في السعودية.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "مدونة عن الرخام والحجر الطبيعي في السعودية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "مدونة الرخام والجرانيت في السعودية",
    description:
      "مقالات احترافية عن الرخام والحجر الطبيعي في المملكة العربية السعودية.",
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

export default function BlogsPage() {
  return (
    <>
      {/* JSON-LD Structured Data for Blog */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "مدونة شركة المتحدة للرخام والحجر",
            description:
              "مدونة عن الرخام والجرانيت وأعمال التركيب والتشطيب في السعودية.",
            url: "https://www.unitedmarblestones.com/ar/blog",
            inLanguage: "ar-SA",
            publisher: {
              "@type": "Organization",
              name: "شركة المتحدة للرخام والحجر",
              logo: "https://www.unitedmarblestones.com/logo.png",
            },
          }),
        }}
      />

      <Blogs />
    </>
  );
}
