"use client";

import Image from "next/image";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { usePathname } from "next/navigation";

export default function About() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  const content = {
    label: isArabic ? "قصتنا" : "Our Story",
    headline: isArabic
      ? <>التميز في أدق <br /> التفاصيل.</>
      : <>Excellence in <br /> Every Detail.</>,
    description: isArabic
      ? <>تأسست "يونايتد ستون" عام ١٩٩٦ لتكون الخيار الأول في عالم الأحجار الطبيعية. نحن نجمع بين جمال الطبيعة الخام ودقة الهندسة الحديثة لتقديم واجهات وديكورات داخلية تدوم مدى الحياة.</>
      : <>Established in 1996, United Stone Marble bridges the gap between raw nature and refined architecture. We combine the beauty of natural stone with modern engineering precision to create spaces that last a lifetime.</>,
  };

  return (
    <section
      id="about"
      className="w-full py-32 bg-white text-black overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT — Image Block */}
      <ScrollBasedAnimation direction="up" duration={0.6}>
  <div className="relative">
    {/* Background block (static, no transform!) */}
    <div
      className={`absolute inset-0 -z-10 bg-gray-100 
      ${isArabic ? "right-6 top-6" : "left-6 top-6"}`}
    />

    {/* Main Image */}
    <div className="relative aspect-[4/5] overflow-hidden rounded-sm will-change-transform">
      <Image
        src="/About.png"
        alt="Marble Architecture"
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-700 ease-out
        hover:scale-[1.03]"
        priority={false}
      />
    </div>
  </div>
</ScrollBasedAnimation>


        {/* RIGHT — Text Content */}
        <ScrollBasedAnimation direction="left" duration={1} delay={0.3}>
          <div className="flex flex-col justify-center">

            {/* Label Line */}
            <div className="flex items-center gap-4 mb-8">
              <span className="h-[2px] w-12 bg-[#f7951e]"></span>
              <span className="text-xs font-bold text-[#f7951e] tracking-[0.25em] uppercase">
                {content.label}
              </span>
            </div>

            {/* Headline */}
            <h2 className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 text-gray-900
              ${isArabic ? "leading-tight" : "leading-[0.95]"}`}>
              {content.headline}
            </h2>

            {/* Description */}
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light max-w-lg">
              {content.description}
            </p>

          </div>
        </ScrollBasedAnimation>

      </div>
    </section>
  );
}
