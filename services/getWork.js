import { client } from "@/sanity/lib/client";

// 🔄 Revalidate every 60 seconds
const REVALIDATE_TIME = 60;

export async function getWork() {
  const query = `
    *[_type == "work"] | order(_createdAt desc) {
      _id,
      title_en,
      title_ar,
      location_en,
      location_ar,
      thumbnail,
      gallery
    }
  `;

  return await client.fetch(query, {}, { next: { revalidate: REVALIDATE_TIME } });
}

export async function getWorkById(id) {
  if (!id) return null;

  const query = `
    *[_type == "work" && _id == $id][0]{
      _id,
      title_en,
      title_ar,
      location_en,
      location_ar,
      thumbnail,
      gallery
    }
  `;

  return await client.fetch(
    query,
    { id },
    { next: { revalidate: REVALIDATE_TIME } }
  );
}
