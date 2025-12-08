"use client";

import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { usePathname } from "next/navigation";

export default function Blog() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  // STATIC TEXT
  const text = {
    sub: isArabic ? "أحدث المقالات" : "Journal & News",
    title: isArabic ? "رؤى في عالم الحجر" : "Insights & Trends",
    read: isArabic ? "اقرأ المقال" : "Read Article",
  };

  // BLOG DATA
  const posts = [
    {
      id: 1,
      date: isArabic ? "١٢ أكتوبر ٢٠٢٤" : "Oct 12, 2024",
      cat: isArabic ? "تصميم داخلي" : "Interior Design",
      title_en: "The Timeless Appeal of White Marble in Modern Kitchens",
      title_ar: "الجاذبية الخالدة للرخام الأبيض في المطابخ الحديثة",
      img: "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=1260",
    },
    {
      id: 2,
      date: isArabic ? "٢٥ سبتمبر ٢٠٢٤" : "Sep 25, 2024",
      cat: isArabic ? "واجهات خارجية" : "Exterior Cladding",
      title_en: "Why Mechanical Fixing is Essential for Stone Facades",
      title_ar: "لماذا يعتبر التثبيت الميكانيكي ضروريًا للواجهات الحجرية؟",
      img: "https://images.pexels.com/photos/534233/pexels-photo-534233.jpeg?auto=compress&cs=tinysrgb&w=1260",
    },
    {
      id: 3,
      date: isArabic ? "١٠ سبتمبر ٢٠٢٤" : "Sep 10, 2024",
      cat: isArabic ? "الصيانة" : "Maintenance",
      title_en: "How to Maintain the Shine of Natural Granite",
      title_ar: "كيف تحافظ على لمعان الجرانيت الطبيعي لسنوات؟",
      img: "https://images.pexels.com/photos/6636250/pexels-photo-6636250.jpeg?auto=compress&cs=tinysrgb&w=1260",
    },
  ];

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-16">
          {posts.map((post, i) => (
            <ScrollBasedAnimation 
              key={post.id} 
              direction="up" 
              delay={i * 0.1} 
              duration={0.8}
            >
              <article className="group cursor-pointer flex flex-col h-full">
                
                {/* IMAGE (Cinematic Reveal) */}
                <div className="relative overflow-hidden aspect-[16/10] bg-gray-100 mb-8">
                  <img
                    src={post.img}
                    alt="Blog Thumbnail"
                    // Slow zoom for premium feel
                    className="w-full h-full object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Subtle orange flash on hover */}
                  <div className="absolute inset-0 bg-[#f7951e] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
                </div>

                {/* META INFO (Clean Line) */}
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-gray-400 mb-4">
                  <span>{post.cat}</span>
                  <span className="w-1 h-1 rounded-full bg-[#f7951e]" />
                  <span>{post.date}</span>
                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold leading-tight text-gray-900 transition-colors duration-300 group-hover:text-[#f7951e] mb-6">
                  {isArabic ? post.title_ar : post.title_en}
                </h3>

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
            </ScrollBasedAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}