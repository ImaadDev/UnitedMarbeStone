"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";

const SERVICE_DATA = [
  {
    img: "https://images.pexels.com/photos/3626575/pexels-photo-3626575.jpeg?auto=compress&cs=tinysrgb&w=800",
    en: { title: "Marble Supply", desc: "Premium imported natural stones for timeless projects." },
    ar: { title: "توريد الرخام", desc: "أحجار طبيعية فاخرة مستوردة لأعلى جودة." }
  },
  {
    img: "https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=800",
    en: { title: "Granite Works", desc: "Durable and beautiful granite cutting and finishing." },
    ar: { title: "أعمال الجرانيت", desc: "قص وتشطيب الجرانيت بأعلى دقة وجودة." }
  },
  {
    img: "https://images.pexels.com/photos/31190452/pexels-photo-31190452.jpeg?auto=compress&cs=tinysrgb&w=800",
    en: { title: "Exterior Cladding", desc: "Modern facade solutions built to withstand extreme climates." },
    ar: { title: "واجهات خارجية", desc: "حلول واجهات عصرية تتحمل جميع الظروف المناخية." }
  },
  {
    img: "https://images.pexels.com/photos/4249940/pexels-photo-4249940.jpeg?auto=compress&cs=tinysrgb&w=800",
    en: { title: "Interior Stone Design", desc: "Refined luxury wall & floor finishes for interiors." },
    ar: { title: "تصاميم حجر داخلية", desc: "تشطيبات فاخرة للجدران والأرضيات." }
  },
  {
    img: "https://images.pexels.com/photos/7828184/pexels-photo-7828184.jpeg?auto=compress&cs=tinysrgb&w=800",
    en: { title: "Cutting & Polishing", desc: "CNC precision cutting and mirror-gloss polishing." },
    ar: { title: "القص والتلميع", desc: "قص CNC عالي الدقة وتلميع لامع كالمرآة." }
  },
  {
    img: "https://images.pexels.com/photos/4249583/pexels-photo-4249583.jpeg?auto=compress&cs=tinysrgb&w=800",
    en: { title: "Custom Architecture", desc: "Bespoke stone elements tailored to design requirements." },
    ar: { title: "تصاميم معمارية خاصة", desc: "عناصر حجرية مخصصة حسب متطلبات التصميم." }
  }
];

export default function ServicesPage() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  const pageText = {
    label: isArabic ? "ماذا نقدم" : "What We Do",
    title: isArabic ? "خدماتنا" : "Our Services",
    intro: isArabic
      ? "نقدم خدمات متكاملة من التوريد إلى التركيب بمعايير عالمية وجودة تستمر مدى الحياة."
      : "We provide complete stone solutions from supply to installation with luxury standards that last a lifetime.",
    cta: isArabic ? "اطلب عرض سعر" : "Get a Quote"
  };

  return (
    <section 
      className="min-h-screen mt-20 w-full bg-white text-gray-500 py-32 relative overflow-hidden" 
      dir={isArabic ? "rtl" : "ltr"}
    >
      
      {/* Background Texture (Subtle Noise) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* =======================
            HEADER
           ======================= */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 border-b border-white/10 pb-10">
          <div className="max-w-2xl">
            <ScrollBasedAnimation direction="up" duration={0.8}>
              <div className="flex items-center gap-4 mb-6">
                 <span className="h-[2px] w-12 bg-[#f7951e]"></span>
                 <span className="text-xs font-bold text-[#f7951e] tracking-[0.25em] uppercase">
                   {pageText.label}
                 </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none">
                {pageText.title}
              </h1>
            </ScrollBasedAnimation>

            <ScrollBasedAnimation direction="up" duration={0.8} delay={0.1}>
              <p className="text-xl text-gray-400 font-light mt-8 leading-relaxed">
                {pageText.intro}
              </p>
            </ScrollBasedAnimation>
          </div>
        </div>

        {/* =======================
            SERVICES GRID (Architectural Slabs)
           ======================= */}
        {/* Using a grid with 1px gaps for borders creates a clean "Masonry" look */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-white/10 border border-white/10">
          
          {SERVICE_DATA.map((srv, i) => (
            <ScrollBasedAnimation key={i} direction="up" duration={0.8} delay={i * 0.05} className="w-full h-full">
              <div className="group relative w-full aspect-[4/5] bg-[#0a0a0a] overflow-hidden cursor-pointer">
                
                {/* 1. IMAGE LAYER */}
                {/* Scales slowly on hover */}
                <div className="absolute inset-0 w-full h-full transition-transform duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110 will-change-transform">
                   <Image
                    src={srv.img}
                    alt={srv.en.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-700"
                  />
                </div>

                {/* 2. GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />

                {/* 3. CONTENT LAYER */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  
                  {/* Numbering */}
                  <span className="text-6xl font-bold text-white/5 absolute top-4 right-4 group-hover:text-white/10 transition-colors duration-500">
                    0{i + 1}
                  </span>

                  {/* Title */}
                  <div className="overflow-hidden">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                      {isArabic ? srv.ar.title : srv.en.title}
                    </h3>
                  </div>

                  {/* Divider Line (Expands on hover) */}
                  <div className="w-12 h-[2px] bg-[#f7951e] mb-4 transition-all duration-500 group-hover:w-full" />

                  {/* Description (Fades in & Slides up) */}
                  <p className="text-gray-300 text-sm leading-relaxed opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 delay-100">
                    {isArabic ? srv.ar.desc : srv.en.desc}
                  </p>

                  {/* CTA Link */}
                  <div className={`mt-6 flex items-center gap-2 text-[#f7951e] text-xs font-bold uppercase tracking-widest opacity-0 transform transition-all duration-500 group-hover:opacity-100 delay-200 ${isArabic ? 'group-hover:translate-x-0 translate-x-4' : 'group-hover:translate-x-0 -translate-x-4'}`}>
                     <span>{pageText.cta}</span>
                     <span className={`text-lg ${isArabic ? "rotate-180" : ""}`}>→</span>
                  </div>

                </div>

                {/* 4. HOVER BORDER EFFECT */}
                <div className="absolute inset-0 border border-white/0 transition-all duration-500 group-hover:border-white/10 pointer-events-none" />
                
              </div>
            </ScrollBasedAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}