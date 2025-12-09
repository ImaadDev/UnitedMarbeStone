"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import CTASection from "../Home/CTA";

export default function Services({ services }) {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  const pageText = {
    label: isArabic ? "ماذا نقدم" : "What We Do",
    title: isArabic ? "خدماتنا" : "Our Services",
    intro: isArabic
      ? "نقدم خدمات متكاملة من التوريد إلى التركيب بمعايير عالمية."
      : "We provide complete stone solutions from supply to installation with luxury standards.",
    cta: isArabic ? "التفاصيل" : "Details",
  };

  return (
    <section
      className="w-full mt-20 bg-white text-black py-32 relative"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-gray-100 pb-10">
          <div className="max-w-2xl">
            <ScrollBasedAnimation direction="up" duration={0.8}>
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

            <ScrollBasedAnimation direction="up" duration={0.8} delay={0.1}>
              <p className="text-xl text-gray-500 font-light mt-8 leading-relaxed">
                {pageText.intro}
              </p>
            </ScrollBasedAnimation>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-100">
          {services?.map((srv, i) => (
            <ScrollBasedAnimation
              key={srv._id}
              direction="up"
              duration={0.8}
              delay={i * 0.05}
              className="w-full h-full"
            >
              <Link
                href={`/${isArabic ? "ar" : "en"}/services/${srv.slug}`}
                className="block w-full h-full"
              >
                <div className="group relative w-full aspect-[4/5] border-r border-b border-gray-100 bg-gray-50 overflow-hidden cursor-pointer">
                  {/* Image */}
                  {srv.featuredImage?.asset?.url && (
                    <Image
                      src={srv.featuredImage.asset.url}
                      alt={isArabic ? srv.title_ar : srv.title_en}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  )}

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

                  {/* Content */}
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {isArabic ? srv.title_ar : srv.title_en}
                    </h3>

                    <div className="w-8 h-[2px] bg-[#f7951e] mb-3 group-hover:w-16 transition-all"></div>

                    <span className="text-[#f7951e] text-xs font-bold uppercase tracking-[0.15em]">
                      {pageText.cta} →
                    </span>
                  </div>
                </div>
              </Link>
            </ScrollBasedAnimation>
          ))}
        </div>
      </div>

      <CTASection />
    </section>
  );
}
