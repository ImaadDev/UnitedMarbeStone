// app/ar/contact/page.js
import React from "react";
import Contact from "@/components/Contact/Contact";
import MapSection from "@/components/Contact/MapSection";

export const metadata = {
  title: "اتصل بنا | شركة المتحدة للرخام والحجر | خدمات الرخام في الرياض",
  description:
    "تواصل مع شركة المتحدة للرخام والحجر للحصول على خدمات التوريد والتركيب للرخام والجرانيت في السعودية. اتصل بنا أو تواصل عبر الواتساب لطلب الأسعار والاستشارات.",
  keywords: [
    "اتصال شركة رخام الرياض",
    "شركة تركيب رخام السعودية",
    "رقم شركة رخام الرياض",
    "شركات الرخام في السعودية",
    "التواصل مع شركة المتحدة للرخام والحجر",
    "أفضل شركة رخام في الرياض",
    "واتساب رخام الرياض",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/ar/contact",
    languages: {
      "ar-SA": "https://www.unitedmarblestones.com/ar/contact",
      "en-US": "https://www.unitedmarblestones.com/en/contact",
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.unitedmarblestones.com/ar/contact",
    siteName: "United Marble Stones",
    title: "اتصل بنا | شركة المتحدة للرخام والحجر",
    description:
      "تواصل مع خبراء الرخام والحجر الطبيعي في السعودية — اتصالات وخدمات سريعة عبر الواتساب.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "شركة المتحدة للرخام والحجر - صفحة التواصل",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "اتصل بنا | شركة المتحدة للرخام والحجر",
    description:
      "تواصل معنا عبر الهاتف أو الواتساب — خدمات رخام احترافية في المملكة.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "theme-color": "#000000",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* JSON-LD Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "شركة المتحدة للرخام والحجر",
            url: "https://www.unitedmarblestones.com/ar/contact",
            logo: "https://www.unitedmarblestones.com/logo.png",
            image: "https://www.unitedmarblestones.com/og-image.png",
            telephone: "+966510783050",
            address: {
              "@type": "PostalAddress",
              streetAddress: "الرياض",
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
              contactType: "خدمة العملاء",
              availableLanguage: ["Arabic", "English"],
            },
          }),
        }}
      />

      <Contact />
      <MapSection />
    </>
  );
}
