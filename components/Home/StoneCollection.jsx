"use client";

import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { usePathname } from "next/navigation";
import Image from "next/image"; // IMPORT ADDED

export default function StoneCollection() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  // CONTENT DATA
  const headerData = isArabic
    ? {
        title: "تشكيلة الحجر",
        subtitle: "الجودة والمتانة",
        desc: "استكشف مجموعتنا المتميزة من الحجر الطبيعي، المصممة لرفع مستوى الجمال المعماري لمشروعك.",
      }
    : {
        title: "Stone Collection",
        subtitle: "Quality & Durability",
        desc: "Explore our premium selection of natural stone, curated to elevate the architectural beauty of your project.",
      };

  const stones = isArabic
    ? [
        { name: "حجر أبيض", desc: "أناقة كلاسيكية للواجهات الحديثة" },
        { name: "حجر أصفر", desc: "نغمات دافئة تعكس ضوء الشمس" },
        { name: "حجر خشبي", desc: "أنماط خطية تشبه الأخشاب الطبيعية" },
        { name: "حجر رمادي", desc: "نغمات محايدة للتصاميم العصرية" },
        { name: "حجر جل (واجهة)", desc: "حجر متين للواجهات الرئيسية" },
        { name: "حجر أبيض منحوت", desc: "زخارف دقيقة للتفاصيل الكلاسيكية" },
        { name: "حجر أصفر منحوت", desc: "لمسات دافئة ومزخرفة" },
        { name: "حجر وجه الجبل", desc: "ملمس طبيعي خشن وبارز" },
        { name: "حجر تيبي", desc: "قصات تقليدية للتراث الأصيل" },
      ]
    : [
        { name: "White Stone", desc: "Classic elegance for facades." },
        { name: "Yellow Stone", desc: "Warm tones catching sunlight." },
        { name: "Wood-Style", desc: "Linear patterns like timber." },
        { name: "Grey Stone", desc: "Neutral tones for sleek designs." },
        { name: "Jel Stone", desc: "Durable stone for elevations." },
        { name: "White Carved", desc: "Intricate classical detailing." },
        { name: "Yellow Carved", desc: "Warm decorative accents." },
        { name: "Split-Face", desc: "Rugged natural texture." },
        { name: "Tibi Stone", desc: "Heritage aesthetics." },
      ];

  const images = [
    "/Stones/WhiteStone.png",
    "/Stones/YellowStone.png",
    "/Stones/WoodStyle.png",
    "/Stones/GreyStone.png",
    "/Stones/JelStone.png",
    "/Stones/WhiteCarved.png",
    "/Stones/YellowCarved.png",
    "/Stones/SplitFace.png",
    "/Stones/TibiStone.png",
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      {/* MAX WIDTH CONTAINER */}
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="mb-16 border-b border-neutral-200 pb-8">
          <ScrollBasedAnimation direction="up" duration={0.6}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className="text-[#f7951e] font-mono text-sm tracking-wider uppercase mb-2 block">
                  {headerData.subtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 tracking-tight">
                  {headerData.title}
                </h2>
              </div>
              <p className="text-neutral-500 max-w-md text-sm md:text-base leading-relaxed font-light">
                {headerData.desc}
              </p>
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* GRID CONTAINER */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-neutral-200">
          {stones.map((item, i) => (
            <ScrollBasedAnimation
              key={i}
              direction="up"
              delay={i * 0.05}
              duration={0.6}
              threshold={0.05}
              className="w-full"
            >
              {/* CARD ITEM */}
              <div className="group relative w-full aspect-[4/5] md:aspect-square border-r border-b border-neutral-200 overflow-hidden bg-neutral-100">
                
                {/* IMAGE */}
                <Image
                  src={images[i]}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-1000 ease-[0.25,1,0.5,1] group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-700" />

                {/* TEXT CONTENT */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  {/* Decorative Line */}
                  <div className="w-0 group-hover:w-12 h-[2px] bg-[#f7951e] mb-4 transition-all duration-500 ease-out" />

                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                    <span className="block text-xs font-mono text-white/60 mb-1">
                      {`0${i + 1}`}
                    </span>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {item.name}
                    </h3>
                    <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out text-neutral-300">
                      <p className="overflow-hidden text-sm font-light leading-relaxed pt-0 group-hover:pt-3 transition-all duration-500 opacity-0 group-hover:opacity-100">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollBasedAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}