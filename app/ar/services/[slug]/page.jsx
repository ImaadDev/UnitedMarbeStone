import React from "react";
import ServiceDetails from "@/components/Services/ServiceDetails";
import { getServiceBySlug } from "@/services/getServices";
import { notFound } from "next/navigation";

export async function generateMetadata(props) {
  const { slug } = await props.params;
  const service = await getServiceBySlug(slug);

  if (!service) {
    return {
      title: "الخدمة غير موجودة | شركة المتحدة للرخام والحجر",
      description: "الصفحة غير موجودة",
      robots: "noindex",
    };
  }

  const image =
    service.featuredImage?.asset?.url ||
    "https://www.unitedmarblestones.com/og-image.png";

  return {
    title: `${service.title_ar} | شركة المتحدة للرخام والحجر`,
    description: service.description_ar,
    keywords: service.seo_keywords_ar || [],
    alternates: {
      canonical: `https://www.unitedmarblestones.com/ar/services/${slug}`,
      languages: {
        "ar-SA": `https://www.unitedmarblestones.com/ar/services/${slug}`,
        "en-US": `https://www.unitedmarblestones.com/en/services/${slug}`,
      },
    },
    openGraph: {
      type: "article",
      locale: "ar_SA",
      url: `https://www.unitedmarblestones.com/ar/services/${slug}`,
      title: service.title_ar,
      description: service.description_ar,
      images: [{ url: image, width: 1200, height: 630 }],
      siteName: "United Marble Stones",
    },
    twitter: {
      card: "summary_large_image",
      title: service.title_ar,
      description: service.description_ar,
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
