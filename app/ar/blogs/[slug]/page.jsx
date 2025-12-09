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
  if (!slug || typeof slug !== 'string') {
    return null;
  }

  const query = `*[_type == "blog" && slug.current == "${slug.replace(/"/g, '\\"')}"]{
    _id,
    title_ar,
    excerpt_ar,
    content_ar,
    featuredImage,
    publishedAt,
    author,
    slug
  }`;

  const posts = await client.fetch(query);

  if (!posts || posts.length === 0) {
    return null;
  }

  return posts[0];
}

// ⭐ DYNAMIC SEO for each blog
export async function generateMetadata(props) {
  const { slug } = await props.params;
  const post = await getBlogPost(slug);

  if (!post) {
    return {
      title: "مقال غير موجود | شركة المتحدة للرخام والحجر",
      description: "هذه الصفحة غير موجودة",
      robots: "noindex",
    };
  }

  const image =
    post.featuredImage?.asset?.url ||
    "https://www.unitedmarblestones.com/og-image.png";

  return {
    title: `${post.title_ar} | شركة المتحدة للرخام والحجر`,
    description: post.excerpt_ar || "مدونة عن الرخام والحجر في السعودية",

    alternates: {
      canonical: `https://www.unitedmarblestones.com/ar/blog/${post.slug.current}`,
      languages: {
        "ar-SA": `https://www.unitedmarblestones.com/ar/blog/${post.slug.current}`,
        "en-US": `https://www.unitedmarblestones.com/en/blog/${post.slug.current}`,
      },
    },

    openGraph: {
      type: "article",
      locale: "ar_SA",
      title: post.title_ar,
      description: post.excerpt_ar,
      url: `https://www.unitedmarblestones.com/ar/blog/${post.slug.current}`,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title_ar,
        },
      ],
      siteName: "United Marble Stones",
    },

    twitter: {
      card: "summary_large_image",
      title: post.title_ar,
      description: post.excerpt_ar,
      images: [image],
    },
  };
}

export default async function Page({ params }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) return notFound();

  return <BlogDetails post={post} locale="ar" />;
}
