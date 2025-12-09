// app/ar/terms/page.js
import React from "react";
import Terms from "@/components/Term/Terms";

export const metadata = {
  title: "الشروط والأحكام | شركة المتحدة للرخام والحجر",
  description:
    "اطلع على الشروط والأحكام الخاصة باستخدام موقع شركة المتحدة للرخام والحجر. نضمن لك تجربة آمنة وموثوقة أثناء تصفحك لخدماتنا.",
  keywords: [
    "الشروط والأحكام",
    "شروط استخدام الموقع",
    "شركة المتحدة للرخام والحجر",
    "سياسة الاستخدام",
    "الشروط القانونية السعودية",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/ar/terms",
    languages: {
      "ar-SA": "https://www.unitedmarblestones.com/ar/terms",
      "en-US": "https://www.unitedmarblestones.com/en/terms",
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.unitedmarblestones.com/ar/terms",
    siteName: "United Marble Stones",
    title: "الشروط والأحكام | شركة المتحدة للرخام والحجر",
    description:
      "تعرف على شروط استخدام موقع شركة المتحدة للرخام والحجر للخدمات التجارية.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "الشروط والأحكام - المتحدة للرخام والحجر",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "الشروط والأحكام | شركة المتحدة",
    description: "يرجى قراءة شروط وأحكام استخدام خدماتنا.",
    images: ["https://www.unitedmarblestones.com/og-image.png"],
  },

  other: {
    "theme-color": "#000000",
  },
};

export default function TermsUsePage() {
  return (
    <>
      {/* JSON-LD Structured Data for Legal Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "الشروط والأحكام",
            url: "https://www.unitedmarblestones.com/ar/terms",
            inLanguage: "ar-SA",
            publisher: {
              "@type": "Organization",
              name: "شركة المتحدة للرخام والحجر",
              logo: "https://www.unitedmarblestones.com/logo.png",
            },
          }),
        }}
      />

      <Terms />
    </>
  );
}
