import { client } from "@/sanity/lib/client";

export async function getBlogs() {
  const query = `
    *[_type == "blog"] | order(publishedAt desc) {
      _id,
      title_en,
      title_ar,
      excerpt_en,
      excerpt_ar,
      "slug": slug.current,
      featuredImage{
        asset->{url}
      },
      publishedAt,
      author
    }
  `;

  return await client.fetch(query);
}

export async function getBlogBySlug(slug) {
  if (!slug) return null;

  const query = `
    *[_type == "blog" && slug.current == $slug][0]{
      _id,
      title_en,
      title_ar,
      excerpt_en,
      excerpt_ar,
      content_en,
      content_ar,
      seo_keywords_en,
      seo_keywords_ar,
      "slug": slug.current,
      featuredImage{
        asset->{ url }
      },
      publishedAt,
      author
    }
  `;

  return await client.fetch(query, { slug });
}