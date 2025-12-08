"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client"; // Ensure this path is correct in your project
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";

// --- IMAGE BUILDER SETUP ---
const builder = imageUrlBuilder(client);

function urlFor(source) {
  return source ? builder.image(source) : null;
}

// --- SCROLL PROGRESS COMPONENT ---
function ScrollProgress() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = totalScroll / windowHeight;
      setWidth(Number(scroll));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-gray-100">
      <div
        className="h-full bg-[#f7951e] transition-all duration-100 ease-out"
        style={{ width: `${width * 100}%` }}
      />
    </div>
  );
}

// --- MAIN COMPONENT ---
export default function BlogDetails({ post, locale }) {
  const isArabic = locale === "ar";

  // 1. DYNAMIC CONTENT SELECTION
  // Selects the correct language field based on the locale prop
  const title = isArabic ? post.title_ar : post.title_en;
  const excerpt = isArabic ? post.excerpt_ar : post.excerpt_en;
  const content = isArabic ? post.content_ar : post.content_en;
  const dateFormatted = new Date(post.publishedAt).toLocaleDateString(
    isArabic ? "ar-SA" : "en-US",
    { year: "numeric", month: "long", day: "numeric" }
  );

  // 2. CUSTOM PORTABLE TEXT COMPONENTS
  const components = {
    types: {
      image: ({ value }) => {
        const imgUrl = value ? urlFor(value).width(1200).url() : null;
        if (!imgUrl) return null;
        
        return (
          // "Break-out" container: Wider than text column
          <div 
            className={`relative w-[120%] aspect-[16/9] my-16 group overflow-hidden bg-gray-50 rounded-sm shadow-sm
            ${isArabic ? "-mr-[10%]" : "-ml-[10%]"}`}
          >
            <Image
              src={imgUrl}
              alt={value.alt || "Blog visual"}
              fill
              className="object-cover transition-transform duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-105"
            />
            {value.caption && (
              <div className={`absolute bottom-4 bg-white/90 backdrop-blur px-3 py-1 text-xs font-mono text-black ${isArabic ? "left-4" : "right-4"}`}>
                {value.caption}
              </div>
            )}
          </div>
        );
      },
    },
    block: {
      h2: ({ children }) => (
        <h2 className="text-3xl md:text-4xl font-bold mt-16 mb-6 text-black tracking-tight leading-tight relative inline-block group">
          {children}
          <span className={`absolute -bottom-2 w-12 h-1 bg-[#f7951e] ${isArabic ? "right-0" : "left-0"}`} />
        </h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-2xl font-bold mt-10 mb-4 text-gray-900">
          {children}
        </h3>
      ),
      blockquote: ({ children }) => (
        <div className="my-12 relative">
          <span className={`absolute -top-8 text-8xl text-[#f7951e]/20 font-serif leading-none select-none ${isArabic ? "-right-4" : "-left-4"}`}>
            “
          </span>
          <blockquote className={`relative py-2 ${isArabic ? "border-r-4 pr-8 border-[#f7951e]" : "border-l-4 pl-8 border-[#f7951e]"}`}>
            <p className="text-2xl md:text-3xl font-light text-black italic leading-relaxed">
              {children}
            </p>
          </blockquote>
        </div>
      ),
      normal: ({ children }) => (
        <p className="text-lg md:text-xl text-gray-600 font-normal mb-8 leading-relaxed">
          {children}
        </p>
      ),
    },
    marks: {
      link: ({ children, value }) => (
        <a
          href={value.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f7951e] border-b border-[#f7951e]/30 hover:border-[#f7951e] transition-colors"
        >
          {children}
        </a>
      ),
    },
  };

  return (
    <article
      className="min-h-screen w-full bg-white text-black pt-40 pb-32 overflow-hidden selection:bg-[#f7951e] selection:text-white"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* Progress Bar */}
      <ScrollProgress />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* =======================
            1. HEADER
           ======================= */}
        <div className="mb-20 text-center">
          <ScrollBasedAnimation direction="up" duration={0.8}>
            
            {/* Meta Data Pill */}
            <div className="inline-flex items-center justify-center gap-4 text-xs font-mono uppercase tracking-widest text-gray-500 mb-8 border border-gray-200 px-6 py-2 rounded-full">
              <span>{dateFormatted}</span>
              <span className="w-1 h-1 bg-[#f7951e] rounded-full" />
              <span className="text-[#f7951e] font-bold">{post.author}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-black">
              {title}
            </h1>

            {/* Excerpt */}
            {excerpt && (
              <p className="text-xl md:text-2xl text-gray-500 font-light max-w-2xl mx-auto leading-relaxed">
                {excerpt}
              </p>
            )}
          </ScrollBasedAnimation>
        </div>

        {/* =======================
            2. HERO IMAGE
           ======================= */}
        {post.featuredImage && (
          <ScrollBasedAnimation direction="up" duration={1} className="mb-24">
            <div className="relative w-full aspect-video md:aspect-[21/9] bg-gray-100 overflow-hidden rounded-sm shadow-sm group">
              <Image
                src={urlFor(post.featuredImage).width(1600).url()}
                alt={title || "Featured Image"}
                fill
                className="object-cover will-change-transform scale-100 group-hover:scale-105 transition-transform duration-[3000ms] ease-out"
                priority
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-1000" />
            </div>
          </ScrollBasedAnimation>
        )}

        {/* =======================
            3. CONTENT BODY
           ======================= */}
        <div className="max-w-4xl mx-auto">
          <ScrollBasedAnimation direction="up" delay={0.1}>
            <div className="prose prose-lg prose-headings:font-bold prose-p:text-gray-600 max-w-none">
              <PortableText value={content} components={components} />
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* =======================
            4. AUTHOR BIO
           ======================= */}
        <div className="max-w-2xl mx-auto mt-24 border-t border-gray-100 pt-12">
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gray-200 overflow-hidden relative flex-shrink-0">
              <div className="absolute inset-0 flex items-center justify-center bg-[#f7951e] text-white font-bold text-xl">
                {post.author ? post.author.charAt(0) : "U"}
              </div>
            </div>
            <div>
              <p className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-1">
                {isArabic ? "كتب بواسطة" : "Written By"}
              </p>
              <h4 className="text-xl font-bold text-black">{post.author}</h4>
            </div>
          </div>
        </div>

        {/* =======================
            5. FOOTER NAV
           ======================= */}
        <div className="mt-32 pt-20 border-t border-black">
          <ScrollBasedAnimation direction="up" delay={0.2}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 group cursor-pointer">
              
              <div className="text-xs font-bold uppercase tracking-widest text-[#f7951e]">
                {isArabic ? "التالي" : "Up Next"}
              </div>

              <Link 
                href={isArabic ? "/ar/blog" : "/blog"} 
                className={`block w-full md:w-auto ${isArabic ? "text-left" : "text-right"}`}
              >
                <h3 className="text-4xl md:text-6xl font-bold text-black group-hover:text-gray-600 transition-colors duration-500 mb-4 tracking-tighter">
                  {isArabic ? "العودة للمجلة" : "Back to Journal"}
                </h3>
                <div 
                  className={`flex items-center gap-3 text-sm uppercase tracking-wide group-hover:gap-6 transition-all duration-500 ease-out text-[#f7951e]
                  ${isArabic ? "justify-start" : "justify-end"}`}
                >
                  <span>{isArabic ? "عرض الكل" : "View All"}</span>
                  <span className={`text-xl ${isArabic ? "rotate-180" : ""}`}>→</span>
                </div>
              </Link>

            </div>
          </ScrollBasedAnimation>
        </div>

      </div>
    </article>
  );
}