"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function BlogPage() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "blog"] | order(publishedAt desc) {
          _id,
          title_en,
          title_ar,
          excerpt_en,
          excerpt_ar,
          slug,
          featuredImage,
          publishedAt,
          author
        }`;
        const data = await client.fetch(query);
        setPosts(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const pageText = {
    label: isArabic ? "المجلة" : "The Journal",
    title: isArabic ? "أخبار ورؤى" : "Insights & News",
    intro: isArabic
      ? "استكشف أحدث الاتجاهات في التصميم المعماري، وتكنولوجيا الحجر، ونصائح الخبراء."
      : "Explore the latest trends in architectural design, stone technology, and expert advice.",
    read: isArabic ? "قراءة المقال" : "Read Article",
    loading: isArabic ? "جاري التحميل..." : "Loading...",
    noBlogs: isArabic ? "لا توجد مقالات متاحة" : "No blogs available",
  };

  return (
    <section 
      className="min-h-screen mt-20 w-full bg-white text-black py-32 relative overflow-hidden" 
      dir={isArabic ? "rtl" : "ltr"}
    >
      
      {/* Background Texture (Very subtle paper feel) */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* =======================
            HEADER
           ======================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-gray-100 pb-10">
          <div className="max-w-2xl">
            <ScrollBasedAnimation direction="up" >
              <div className="flex items-center gap-4 mb-6">
                 <span className="h-[2px] w-12 bg-[#f7951e]"></span>
                 <span className="text-xs font-bold text-[#f7951e] tracking-[0.25em] uppercase">
                   {pageText.label}
                 </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none text-black">
                {pageText.title}
              </h1>
            </ScrollBasedAnimation>

            <ScrollBasedAnimation direction="up"  delay={0.1}>
              <p className="text-xl text-gray-500 font-light mt-8 leading-relaxed">
                {pageText.intro}
              </p>
            </ScrollBasedAnimation>
          </div>
        </div>

        {/* =======================
            BLOG GRID (Clean Editorial)
           ======================= */}
        {loading ? (
          <div className="text-center py-20">
            <div className="text-gray-500">{pageText.loading}</div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 text-xl">{pageText.noBlogs}</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
            {posts.map((post, i) => (
              <ScrollBasedAnimation key={post._id} direction="up"  delay={i * 0.1}>
                <Link href={isArabic ? `/ar/blogs/${post.slug.current}` : `/en/blogs/${post.slug.current}`} className="group block h-full">

                  {/* 1. IMAGE CONTAINER (Cinematic Zoom) */}
                  <div className="relative w-full aspect-[16/10] bg-gray-100 overflow-hidden mb-8">
                    <div className="absolute inset-0 w-full h-full will-change-transform transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105">
                       <Image
                         src={urlFor(post.featuredImage).width(800).height(500).url()}
                         alt={isArabic ? post.title_ar : post.title_en}
                         fill
                         sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                         className="object-cover"
                       />
                    </div>

                    {/* Author Tag (Floating) */}
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                      {post.author}
                    </div>
                  </div>

                  {/* 2. TEXT CONTENT */}
                  <div className="flex flex-col">
                     {/* Date */}
                     <span className="text-xs font-mono text-gray-400 mb-3 block uppercase tracking-wide">
                       {new Date(post.publishedAt).toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', {
                         year: 'numeric',
                         month: 'short',
                         day: 'numeric'
                       })}
                     </span>

                     {/* Title (Animated Underline effect via color) */}
                     <h3 className="text-2xl font-bold leading-tight mb-4 text-black transition-colors duration-300 group-hover:text-[#f7951e]">
                       {isArabic ? post.title_ar : post.title_en}
                     </h3>

                     {/* Excerpt */}
                     <p className="text-gray-500 font-light leading-relaxed mb-6 line-clamp-3">
                       {isArabic ? post.excerpt_ar : post.excerpt_en}
                     </p>

                     {/* Read More Link (Magnetic Reveal) */}
                     <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black group-hover:text-[#f7951e] transition-colors duration-300">
                        <span>{pageText.read}</span>
                        <span className={`transform transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-2 rotate-180' : 'group-hover:translate-x-2'}`}>
                          →
                        </span>
                     </div>
                  </div>

                </Link>
              </ScrollBasedAnimation>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}