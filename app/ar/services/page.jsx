// app/ar/services/page.js
import React from "react";
import Services from "@/components/Services/Services";
import { getServices } from "@/services/getServices";

export const metadata = {
  title: "توريد وتركيب الرخام والجرانيت في السعودية | المتحدة للرخام والحجر",
  description:
    "شركة المتحدة للرخام والحجر تقدم خدمات توريد وتركيب الرخام والجرانيت في الرياض وجدة والدمام وكامل مناطق المملكة مع قص وتشكيل وتلميع احترافي للفلل الفاخرة والمشاريع التجارية.",
  keywords: [
    "توريد رخام الرياض",
    "شركة رخام السعودية",
    "تركيب جرانيت الرياض",
    "واجهات حجر الرياض",
    "تصميم رخام داخلي السعودية",
    "أفضل شركة رخام في الرياض",
    "رخام للفلل الفاخرة",
    "قص الرخام CNC الرياض",
    "تلميع الرخام السعودية",
    "توريد رخام وجيرانيت",
    "المتحدة للرخام والحجر",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/ar/services",
    languages: {
      "ar-SA": "https://www.unitedmarblestones.com/ar/services",
      "en-US": "https://www.unitedmarblestones.com/en/services",
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    title: "خدمات توريد وتركيب الرخام والجرانيت في السعودية",
    description:
      "حلول متكاملة للرخام والجرانيت — توريد، قص، تركيب وتشطيب بمستوى فاخر في جميع أنحاء المملكة.",
    url: "https://www.unitedmarblestones.com/ar/services",
    siteName: "المتحدة للرخام والحجر",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "المتحدة للرخام والحجر في السعودية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "خدمات الرخام والجرانيت في السعودية",
    description:
      "تواصل معنا لتوريد وتركيب الرخام والجرانيت للفلل والمشاريع التجارية.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "theme-color": "#000000",
  },
};

export default async function ServicesPage() {
  const services = await getServices(); // SSR fetch

  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "المتحدة للرخام والحجر",
            url: "https://www.unitedmarblestones.com/ar/services",
            image: "https://www.unitedmarblestones.com/og-image.png",
            address: {
              "@type": "PostalAddress",
              addressCountry: "SA",
              addressRegion: "Riyadh",
            },
            areaServed: ["Saudi Arabia"],
            serviceType: [
              "توريد الرخام",
              "توريد الجرانيت",
              "قص الرخام CNC",
              "تركيب الرخام",
              "تلميع الرخام",
            ],
            telephone: "+966510783050",
          }),
        }}
      />

      <Services services={services} />
    </>
  );
}
