// app/ar/about/page.js
import About from "@/components/About/About";
import React from "react";

export const metadata = {
  title: "عن الشركة | شركة المتحدة للرخام والحجر | خبراء الرخام في السعودية",
  description:
    "تعرف على شركة المتحدة للرخام والحجر، الشركة الرائدة في توريد وتركيب الرخام والجرانيت والحجر الطبيعي في السعودية. خبرة واسعة في التشطيبات الفاخرة، الواجهات الحجرية، والقص CNC للفلل والمشاريع الراقية في الرياض وجميع مدن المملكة.",
  keywords: [
    "عن شركة المتحدة للرخام والحجر",
    "شركات الرخام في الرياض",
    "شركة تركيب رخام السعودية",
    "رخام طبيعي",
    "جرانيت فاخر",
    "تشطيب واجهات فلل",
    "تصميم واجهات حجر",
    "شركة رخام وحجر طبيعي",
    "أفضل شركة رخام في السعودية",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/ar/about",
    languages: {
      "ar-SA": "https://www.unitedmarblestones.com/ar/about",
      "en-US": "https://www.unitedmarblestones.com/en/about",
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.unitedmarblestones.com/ar/about",
    siteName: "United Marble Stones",
    title:
      "شركة المتحدة للرخام والحجر | من نحن | أفضل شركة رخام في السعودية",
    description:
      "خبرة في تنفيذ مشاريع الرخام والجرانيت والحجر الطبيعي بأعلى جودة للفلل والمشاريع التجارية في الرياض وباقي مدن المملكة.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "شركة المتحدة للرخام والحجر - من نحن",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "من نحن | شركة المتحدة للرخام والحجر",
    description:
      "شركة رائدة في السعودية لتوريد وتركيب الرخام والجرانيت والحجر الطبيعي بخدمات احترافية.",
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

export default function AboutPage() {
  return (
    <>
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "شركة المتحدة للرخام والحجر",
            url: "https://www.unitedmarblestones.com/ar/about",
            logo: "https://www.unitedmarblestones.com/logo.png",
            image: "https://www.unitedmarblestones.com/og-image.png",
            description:
              "شركة المتحدة للرخام والحجر — خبراء الرخام والجرانيت في السعودية.",
            areaServed: "المملكة العربية السعودية",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+966555555555",
              contactType: "خدمة العملاء",
              areaServed: "SA",
              availableLanguage: ["Arabic", "English"],
            },
          }),
        }}
      />

      <About />
    </>
  );
}
