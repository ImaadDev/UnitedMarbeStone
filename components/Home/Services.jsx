"use client";

import { useState, useEffect } from "react";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { usePathname } from "next/navigation";
import { getServices } from "@/services/getServices";
import Link from "next/link";
import Image from "next/image"; // IMPORT ADDED

export default function Services() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");
  const [services, setServices] = useState([]);

  useEffect(() => {
    async function fetchServices() {
      const data = await getServices();
      setServices(data);
    }
    fetchServices();
  }, []);

  // CONTENT DATA
  const content = {
    sectionTitle: isArabic ? "الخدمات والعروض" : "Services & Offerings",
    sectionSubtitle: isArabic ? "مجموعة مختارة بعناية" : "Curated Selection",
    serviceTitle: isArabic ? "التركيب والتصميم" : "Installation & Design",
    serviceSubtitle: isArabic ? "الخبرة التقنية" : "Technical Expertise",
    stones: services.map((service) => ({
      name: isArabic ? service.title_ar : service.title_en,
      desc: isArabic ? service.description_ar : service.description_en,
      image: service.featuredImage?.asset?.url,
      // Handle slug safely (whether it's an object from Sanity or a string)
      slug: service.slug?.current || service.slug, 
    })),
  };

  return (
    <section 
      id="services" 
      className="w-full py-24 bg-white text-black overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ==========================
            1. HEADER
           ========================== */}
          <ScrollBasedAnimation direction="up" duration={0.8}>
            <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-6">
              <div>
                <span className="text-[#f7951e] font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
                   {content.sectionSubtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-none tracking-tight">
                  {content.sectionTitle}
                </h2>
              </div>
            </div>
          </ScrollBasedAnimation>

        {/* ==========================
            2. THE "GALLERY" GRID
           ========================== */}
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-gray-100">
            {content.stones.map((item, i) => (
              <ScrollBasedAnimation
                key={i}
                direction="up"
                delay={i * 0.05}
                duration={0.6}
                threshold={0.05}
                className="w-full"
              >
                {/* WRAPPER LINK: Makes the entire card clickable */}
                <Link 
                  href={ isArabic ? `/ar/services/${item.slug}` : `/en/services/${item.slug}` }
                  className="block w-full h-full"
                >
                  <div className="group relative w-full aspect-square border-r border-b border-gray-100 bg-gray-50 overflow-hidden cursor-pointer">

                    {/* Image Layer */}
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover transition-all duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    )}

                    {/* Dark Gradient for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 transition-opacity duration-500" />

                    {/* Content Layer */}
                    <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                      <span className="font-mono text-xs text-[#f7951e] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                          {`0${i + 1}`}
                      </span>
                      <h3 className="text-xl font-bold leading-tight transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light line-clamp-2">
                        {item.desc}
                      </p>
                    </div>

                  </div>
                </Link>
              </ScrollBasedAnimation>
            ))}
          </div>
      </div>
    </section>
  );
}