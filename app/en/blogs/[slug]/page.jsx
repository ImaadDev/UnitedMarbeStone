import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import BlogDetails from "@/components/Blogs/BlogDetails";

// Generate static params for all blog posts
export async function generateStaticParams() {
  const query = `*[_type == "blog"] {
    slug
  }`;

  const posts = await client.fetch(query);

  return posts.map((post) => ({
    slug: post.slug.current,
  }));
}

// Fetch blog post data
async function getBlogPost(slug) {
  const query = `*[_type == "blog" && slug.current == "${slug.replace(/"/g, '\\"')}"]{
    _id,
    title_en,
    title_ar,
    excerpt_en,
    excerpt_ar,
    content_en,
    content_ar,
    featuredImage,
    publishedAt,
    author
  }`;

  const posts = await client.fetch(query);

  if (!posts || posts.length === 0) {
    return null;
  }

  return posts[0];
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return notFound();

  return <BlogDetails post={post} locale="en" />;
}