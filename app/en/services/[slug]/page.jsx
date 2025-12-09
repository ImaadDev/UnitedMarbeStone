// app/services/[slug]/page.js
import React from "react";
import ServiceDetails from "@/components/Services/ServiceDetails";
import { getServiceBySlug } from "@/services/getServices";
import { notFound } from "next/navigation";
import ServiceDetails from "@/components/Services/ServiceDetails";

// ⭐ Dynamic SEO Metadata
export async function generateMetadata(props) {
  const { slug } = await props.params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found | United Marble Stones",
      description: "This service page does not exist.",
      robots: "noindex",
    };
  }

  const image =
    service.featuredImage?.asset?.url ||
    "https://www.unitedmarblestones.com/og-image.png";

  return {
    title: `${service.title_en} | United Marble Stones`,
    description:
      service.description_en ||
      "Premium marble & granite supply and installation services in Saudi Arabia.",
    keywords: service.seo_keywords_en || [],
    alternates: {
      canonical: `https://www.unitedmarblestones.com/services/${slug}`,
      languages: {
        "en-US": `https://www.unitedmarblestones.com/services/${slug}`,
        "ar-SA": `https://www.unitedmarblestones.com/ar/services/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      title: service.title_en,
      description: service.description_en,
      url: `https://www.unitedmarblestones.com/services/${slug}`,
      images: [
        { url: image, width: 1200, height: 630, alt: service.title_en },
      ],
      siteName: "United Marble Stones",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title_en,
      description: service.description_en,
      images: [image],
    },
  };
}

export default async function ServiceDetailsPage(props) {
  const { slug } = await props.params;
  const service = await getServiceBySlug(slug);
  if (!service) return notFound();

  return <ServiceDetails service={service} />;
}
