// app/ar/page.js
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
import Gallery from "@/components/Home/Gallery";
import Blogs from "@/components/Home/Blogs";
import Contact from "@/components/Home/Contact";
import CTASection from "@/components/Home/CTA";
import StoneCollection from "@/components/Home/StoneCollection";
import Installation from "@/components/Home/Installation";

export const metadata = {
  title: "شركة المتحدة للرخام والحجر في السعودية | توريد وتركيب الرخام والجرانيت",
  description:
    "شركة المتحدة للرخام والحجر تقدم خدمات توريد وتركيب الرخام والجرانيت بجودة عالية. متخصصون في تكسية واجهات الفلل، قص الرخام CNC، التشطيب الفاخر، والتصميم الرخامي في الرياض وجدة والدمام وجميع مدن المملكة العربية السعودية.",
  keywords: [
    "رخام الرياض",
    "رخام جدة",
    "شركة رخام في السعودية",
    "أفضل شركات الرخام في الرياض",
    "تركيب جرانيت السعودية",
    "واجهات حجر طبيعي",
    "شركة تركيب رخام",
    "قص رخام CNC",
    "تشطيب فلل",
    "رخام فاخر",
    "شركة المتحدة للرخام والحجر",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/ar",
    languages: {
      "ar-SA": "https://www.unitedmarblestones.com/ar",
      "en-US": "https://www.unitedmarblestones.com/en",
    },
  },

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://www.unitedmarblestones.com/ar",
    siteName: "United Marble Stones",
    title: "شركة المتحدة للرخام والحجر | أفضل شركة رخام في السعودية",
    description:
      "خبراء توريد وتركيب الرخام والجرانيت والحجر الطبيعي في المملكة العربية السعودية.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "أفضل شركة رخام وتركيب حجر في السعودية",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "شركة المتحدة للرخام والحجر | توريد وتركيب الرخام والجرانيت",
    description:
      "توريد وتركيب رخام وحجر طبيعي وتشطيب فاخر لواجهات الفلل في السعودية.",
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

export default function Home() {
  return (
    <>
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "شركة المتحدة للرخام والحجر",
            url: "https://www.unitedmarblestones.com/ar",
            image: "https://www.unitedmarblestones.com/og-image.png",
            logo: "https://www.unitedmarblestones.com/logo.png",
            priceRange: "$$",
            telephone: "+966555555555",
            address: {
              "@type": "PostalAddress",
              addressCountry: "SA",
              addressRegion: "الرياض",
            },
            areaServed: [
              "الرياض",
              "جدة",
              "الدمام",
              "مكة",
              "المدينة",
              "الشرقية",
              "السعودية",
            ],
            sameAs: [
              "https://www.instagram.com/unitedmarblestones",
              "https://www.facebook.com/unitedmarblestones",
            ],
          }),
        }}
      />

      <Hero />
      <About />
      <Gallery />
      <Services />
      <StoneCollection />
      <Installation />
      <Blogs />
      <Contact />
      <CTASection />
    </>
  );
}
