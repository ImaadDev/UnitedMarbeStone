"use client";

import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { usePathname } from "next/navigation";

export default function Services() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  // CONTENT DATA
  const content = {
    sectionTitle: isArabic ? "المجموعة الحجرية" : "Stone Collection",
    sectionSubtitle: isArabic ? "مجموعة مختارة بعناية" : "Curated Selection",
    serviceTitle: isArabic ? "التركيب والتصميم" : "Installation & Design",
    serviceSubtitle: isArabic ? "الخبرة التقنية" : "Technical Expertise",
    stones: isArabic 
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
        ],
    services: isArabic
      ? [
          "توريـد وتركيب حجر نساك",
          "تركيب نخب أول (درجة ممتازة)",
          "نظام التثبيت الميكانيكي (الجاف)",
          "تصميم واجهات حجرية مخصصة",
          "استشارات هندسيـة وتفصيلية"
        ]
      : [
          "Supply & Installation of Nasaq",
          "Premium Grade Installation",
          "Mechanical Fixing (Dry-Fix)",
          "Custom Façade Design",
          "Architectural Consultation"
        ]
  };

  // Images (Shared)
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
                {/* SIMPLE CREATIVE CARD:
                   - Borders on Right/Bottom create the grid.
                   - Image is Grayscale by default.
                   - Hover: Color + Scale. Simple.
                */}
                <div className="group relative w-full aspect-square border-r border-b border-gray-100 bg-gray-50 overflow-hidden cursor-default">
                  
                  {/* Image Layer */}
                  <img 
                    src={images[i]} 
                    alt={item.name} 
                    className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  
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
                    <p className="text-sm text-gray-300 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-light">
                      {item.desc}
                    </p>
                  </div>

                </div>
              </ScrollBasedAnimation>
            ))}
          </div>


        {/* ==========================
            3. SERVICES SPLIT SCREEN
           ========================== */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mt-32">
          
          {/* LIST */}
          <div>
            <ScrollBasedAnimation direction="up" duration={0.6}>
              <div className="mb-10">
                 <span className="text-[#f7951e] font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
                   {content.serviceSubtitle}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-none tracking-tight">
                  {content.serviceTitle}
                </h2>
              </div>
            </ScrollBasedAnimation>

            <div className="flex flex-col">
              {content.services.map((service, i) => (
                <ScrollBasedAnimation
                  key={i}
                  direction="up"
                  delay={0.1 * i}
                  duration={0.5}
                >
                  <div className="group py-5 border-b border-gray-100 hover:border-[#f7951e] transition-colors duration-300 flex items-center justify-between cursor-default">
                    <h3 className="text-lg text-gray-600 group-hover:text-black transition-colors duration-300">
                      {service}
                    </h3>
                    <span className={`text-[#f7951e] opacity-0 transition-all duration-300 ${isArabic ? 'group-hover:opacity-100 group-hover:-translate-x-2' : 'group-hover:opacity-100 group-hover:translate-x-2'}`}>
                      {isArabic ? "←" : "→"}
                    </span>
                  </div>
                </ScrollBasedAnimation>
              ))}
            </div>
          </div>

          {/* IMAGE */}
          <ScrollBasedAnimation direction={isArabic ? "right" : "left"} duration={0.8} className="h-full hidden lg:block">
            <div className="relative h-full min-h-[500px] w-full bg-gray-100 overflow-hidden">
                <img 
                    src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                    alt="Facade Installation" 
                    className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s] ease-out"
                    loading="lazy"
                />
            </div>
          </ScrollBasedAnimation>

        </div>

      </div>
    </section>
  );
}