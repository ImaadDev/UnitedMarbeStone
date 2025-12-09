// app/en/page.js
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
import Gallery from "@/components/Home/Gallery";
import Blogs from "@/components/Home/Blogs";
import Contact from "@/components/Home/Contact";
import CTASection from "@/components/Home/CTA";

export const metadata = {
  title:
    "United Marble & Stone Co | Marble & Granite Supply & Installation in Saudi Arabia",
  description:
    "Premium marble & granite supply and installation in Saudi Arabia. Expert stone cladding, CNC cutting, polishing & luxury villa finishing in Riyadh, Jeddah, Dammam & across KSA.",
  keywords: [
    "marble supplier saudi arabia",
    "marble supplier riyadh",
    "granite installation saudi arabia",
    "stone company riyadh",
    "natural stone supply ksa",
    "cnc marble cutting riyadh",
    "luxury marble finishing",
    "stone cladding saudi arabia",
    "granite supplier dammam",
    "marble company riyadh",
    "united marble stones",
  ],
  robots: "index, follow",

  alternates: {
    canonical: "https://www.unitedmarblestones.com/en",
    languages: {
      "en-US": "https://www.unitedmarblestones.com/en",
      "ar-SA": "https://www.unitedmarblestones.com/ar",
    },
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.unitedmarblestones.com/en",
    siteName: "United Marble Stones",
    title:
      "United Marble & Stone Co | Marble & Granite Supply & Installation in KSA",
    description:
      "High-quality marble & granite installation, cladding, polishing & CNC fabrication — serving Riyadh & Saudi Arabia.",
    images: [
      {
        url: "https://www.unitedmarblestones.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "United Marble & Stone Co - Marble & Granite Experts in Saudi Arabia",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "United Marble & Stone Co | Marble & Granite Supply & Installation in KSA",
    description:
      "Top-tier natural stone supply and installation company in Saudi Arabia.",
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
      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "United Marble & Stone Co",
            url: "https://www.unitedmarblestones.com/en",
            image: "https://www.unitedmarblestones.com/og-image.png",
            logo: "https://www.unitedmarblestones.com/logo.png",
            priceRange: "$$",
            telephone: "+966510783050",
            address: {
              "@type": "PostalAddress",
              addressCountry: "SA",
              addressRegion: "Riyadh",
            },
            areaServed: [
              "Riyadh",
              "Jeddah",
              "Dammam",
              "Mecca",
              "Medina",
              "Saudi Arabia",
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
      <Services />
      <Gallery />
      <Blogs />
      <Contact />
      <CTASection />
    </>
  );
}
