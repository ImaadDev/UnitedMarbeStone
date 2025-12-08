"use client";

import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Blog() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch blogs from Sanity
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const query = `*[_type == "blog"] | order(publishedAt desc)[0...3] {
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

  // STATIC TEXT
  const text = {
    sub: isArabic ? "أحدث المقالات" : "Journal & News",
    title: isArabic ? "رؤى في عالم الحجر" : "Insights & Trends",
    read: isArabic ? "اقرأ المقال" : "Read Article",
    loading: isArabic ? "جاري التحميل..." : "Loading...",
    noBlogs: isArabic ? "لا توجد مقالات متاحة" : "No blogs available",
  };

  return (
    <section 
      id="blog" 
      className="w-full py-24 md:py-32 bg-white text-black overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* =======================
            HEADER
           ======================= */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 border-b border-gray-100 pb-8">
          <ScrollBasedAnimation direction="up" duration={0.8}>
            <div>
              <span className="text-[#f7951e] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                {text.sub}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-none tracking-tight text-gray-900">
                {text.title}
              </h2>
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* =======================
            BLOG GRID
           ======================= */}
        {loading ? (
          <div className="text-center py-20">
            <div className="text-gray-500">{text.loading}</div>
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 text-xl">{text.noBlogs}</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
            {posts.map((post, i) => (
              <ScrollBasedAnimation
                key={post._id}
                direction="up"
                delay={i * 0.1}
                duration={0.8}
              >
                <Link href={isArabic ? `/ar/blogs/${post.slug.current}` : `/en/blogs/${post.slug.current}`}>
                  <article className="group cursor-pointer flex flex-col h-full">

                    {/* IMAGE (Cinematic Reveal) */}
                    <div className="relative overflow-hidden aspect-[16/10] bg-gray-100 mb-8">
                      <img
                        src={urlFor(post.featuredImage).width(800).height(500).url()}
                        alt={isArabic ? post.title_ar : post.title_en}
                        // Slow zoom for premium feel
                        className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Subtle orange flash on hover */}
                      <div className="absolute inset-0 bg-[#f7951e] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                    </div>

                    {/* META INFO (Clean Line) */}
                    <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
                      <span>{post.author}</span>
                      <span className="w-1 h-1 rounded-full bg-[#f7951e]" />
                      <span>{new Date(post.publishedAt).toLocaleDateString(isArabic ? 'ar-SA' : 'en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}</span>
                    </div>

                    {/* TITLE */}
                    <h3 className="text-2xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-[#f7951e] mb-6">
                      {isArabic ? post.title_ar : post.title_en}
                    </h3>

                    {/* EXCERPT */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">
                      {isArabic ? post.excerpt_ar : post.excerpt_en}
                    </p>

                    {/* READ LINK (Slide In) */}
                    <div className="mt-auto pt-6 border-t border-gray-100 group-hover:border-[#f7951e]/30 transition-colors duration-500">
                       <div className="flex items-center gap-2 text-sm font-bold text-black uppercase tracking-wide group-hover:text-[#f7951e] transition-colors duration-300">
                          <span>{text.read}</span>
                          {/* Arrow slides depending on language direction */}
                          <span className={`transform transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-2 rotate-180' : 'group-hover:translate-x-2'}`}>
                            →
                          </span>
                       </div>
                    </div>

                  </article>
                </Link>
              </ScrollBasedAnimation>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}