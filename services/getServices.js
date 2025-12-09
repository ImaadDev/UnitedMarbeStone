import { client } from "@/sanity/lib/client";

export async function getServices() {
  const query = `
    *[_type == "service"] | order(_createdAt desc) {
      _id,
      title_en,
      title_ar,
      subtitle_en,
      subtitle_ar,
      description_en,
      description_ar,
      "slug": slug.current,
      featuredImage{
        asset->{url}
      }
    }
  `;

  return await client.fetch(query);
}


export async function getServiceBySlug(slug) {
  if (!slug) return null;

  const query = `
    *[_type == "service" && slug.current == $slug][0]{
      _id,
      title_en,
      title_ar,
      subtitle_en,
      subtitle_ar,
      description_en,
      description_ar,
      seo_keywords_en,
      seo_keywords_ar,
      features_en,
      features_ar,
      stats_en,
      stats_ar,
      applications_en,
      applications_ar,
      process_en,
      process_ar,
      faq_en,
      faq_ar,
      "slug": slug.current,
      featuredImage{
        asset->{ url }
      },
      gallery[] {
        asset->{ url }
      }
    }
  `;

  return await client.fetch(query, { slug });
}

