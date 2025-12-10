import { client } from "@/sanity/lib/client";

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

  return await client.fetch(query);
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

  return await client.fetch(query, { id });
}