"use client";

import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  // --- CONTENT DATA ---
  const content = {
    // SECTION 1: HERO
    hero_label: isArabic ? "عن الشركة" : "About The Company",
    hero_title: isArabic 
      ? "نحن نبني إرثاً من الحجر." 
      : "We are building a legacy in stone.",
    hero_desc: isArabic
      ? "تأسست يونايتد ستون في عام ١٩٩٦، وهي أكثر من مجرد مورد للحجر؛ نحن شريكك في التصميم المعماري. نحن نربط بين جمال الطبيعة الخام ودقة الهندسة الحديثة لإنشاء واجهات ومساحات داخلية خالدة."
      : "Founded in 1996, United Stone is more than a supplier; we are your architectural partner. We bridge the gap between raw nature and modern engineering to create timeless facades and interiors.",

    // SECTION 2: STATS
    stats: isArabic 
      ? [
          { num: "٢٨", label: "سنة خبرة" },
          { num: "٥٠٠+", label: "مشروع منجز" },
          { num: "١٠٠٪", label: "التزام بالجودة" },
          { num: "٥٠", label: "خبير وحرفي" },
        ]
      : [
          { num: "28", label: "Years Experience" },
          { num: "500+", label: "Projects Completed" },
          { num: "100%", label: "Quality Commitment" },
          { num: "50", label: "Expert Craftsmen" },
        ],

    // SECTION 3: VALUES GRID
    values_title: isArabic ? "قيمنا الجوهرية" : "Our Core Values",
    values: isArabic
      ? [
          { title: "الدقة", desc: "نستخدم تقنيات قص ليزر متطورة لضمان تركيب مثالي." },
          { title: "النزاهة", desc: "شفافية كاملة في المصادر والأسعار والجداول الزمنية." },
          { title: "الابتكار", desc: "نتبنى أحدث أنظمة التثبيت الميكانيكي للواجهات." },
          { title: "الاستدامة", desc: "نختار مواد طبيعية تدوم لعقود وتقلل من الهدر." },
          { title: "الفخامة", desc: "نختار فقط أنقى أنواع الرخام والجرانيت عالمياً." },
          { title: "الأمان", desc: "معايير سلامة صارمة في جميع مواقع العمل والتركيب." },
        ]
      : [
          { title: "Precision", desc: "Using advanced laser cutting for perfect alignment." },
          { title: "Integrity", desc: "Full transparency in sourcing, pricing, and timelines." },
          { title: "Innovation", desc: "Adopting the latest mechanical fixing systems." },
          { title: "Sustainability", desc: "Selecting durable materials that minimize waste." },
          { title: "Luxury", desc: "Sourcing only the purest marble and granite grades." },
          { title: "Safety", desc: "Strict safety standards across all installation sites." },
        ],

    // SECTION 4: LEADERSHIP / VISION
    vision_title: isArabic ? "رؤيتنا للمستقبل" : "Vision For The Future",
    vision_text: isArabic 
      ? "أن نكون المعيار الذهبي في صناعة الحجر في المملكة العربية السعودية، من خلال تقديم حلول معمارية مستدامة وفنية ترتقي بالمشهد الحضري للرياض وما حولها."
      : "To be the gold standard in the Saudi stone industry by delivering sustainable, artistic architectural solutions that elevate the urban landscape of Riyadh and beyond.",
    
    cta: isArabic ? "ابدأ مشروعك معنا" : "Start Your Project",
  };

  return (
    <div className="w-full mt-20 bg-white text-black overflow-hidden" dir={isArabic ? "rtl" : "ltr"}>
      
      {/* =========================================
          SECTION 1: HERO & INTRO
      ========================================= */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Text Side */}
          <div className="flex flex-col justify-center h-full">
            <ScrollBasedAnimation direction="up" duration={0.8}>
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[2px] w-12 bg-[#f7951e]"></span>
                <span className="text-xs font-bold text-[#f7951e] tracking-[0.25em] uppercase">
                  {content.hero_label}
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-[0.95] tracking-tight mb-8">
                {content.hero_title}
              </h1>
            </ScrollBasedAnimation>

            <ScrollBasedAnimation direction="up" duration={0.8} delay={0.1}>
              <p className="text-xl text-gray-500 font-light leading-relaxed max-w-lg">
                {content.hero_desc}
              </p>
            </ScrollBasedAnimation>
          </div>

          {/* Image Side - Simple Geometric Crop */}
          <div className="relative">
            <ScrollBasedAnimation direction="up" duration={1} delay={0.2}>
               {/* Gray backdrop for depth without shadow */}
               <div className={`absolute top-0 w-full h-full bg-gray-100 -z-10 ${isArabic ? 'right-8 translate-y-8' : 'left-8 translate-y-8'}`} />
               
               <div className="aspect-[4/5] w-full overflow-hidden bg-gray-200">
                 <img 
                   src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                   alt="Marble Workshop"
                   className="w-full h-full object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out will-change-transform"
                   loading="eager"
                 />
               </div>
            </ScrollBasedAnimation>
          </div>

        </div>
      </section>


      {/* =========================================
          SECTION 2: CLEAN STATS STRIP
      ========================================= */}
      <section className="w-full border-y border-gray-100 bg-[#fbfbfb]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-200" dir="ltr">
             {/* Note: dir="ltr" forces grid order to remain consistent, we handle text align inside */}
            {content.stats.map((stat, i) => (
              <ScrollBasedAnimation 
                key={i} 
                direction="up" 
                delay={i * 0.1}
                className={`py-12 md:py-16 px-4 text-center ${isArabic ? 'order-last' : ''}`}
              >
                <h3 className="text-4xl md:text-6xl font-bold text-black mb-2 tracking-tight">
                  {stat.num}
                </h3>
                <p className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  {stat.label}
                </p>
              </ScrollBasedAnimation>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================
          SECTION 3: VALUES GRID (Architectural)
      ========================================= */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <ScrollBasedAnimation direction="up" duration={0.8} className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">{content.values_title}</h2>
        </ScrollBasedAnimation>

        {/* The Grid: 3 Columns. Borders handled via CSS to avoid double borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
          {content.values.map((val, i) => (
            <ScrollBasedAnimation 
              key={i} 
              direction="up" 
              delay={i * 0.05}
              className="w-full h-full"
            >
              <div className="group w-full h-full p-10 border-r border-b border-gray-200 hover:bg-[#212930] hover:text-white transition-colors duration-500 cursor-default">
                <span className="block font-mono text-xs text-[#f7951e] mb-6">0{i + 1}</span>
                <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-400 font-light leading-relaxed transition-colors duration-500">
                  {val.desc}
                </p>
              </div>
            </ScrollBasedAnimation>
          ))}
        </div>
      </section>


      {/* =========================================
          SECTION 4: VISION / BIG IMAGE
      ========================================= */}
      <section className="w-full relative py-32 bg-[#212930] text-white overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
         />
         
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            {/* Image */}
            <ScrollBasedAnimation direction="up" duration={0.8} className="order-last lg:order-first">
               <div className="relative aspect-video lg:aspect-square overflow-hidden bg-gray-800">
                  <img 
                    src="https://images.pexels.com/photos/3626575/pexels-photo-3626575.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                    alt="United Stone Vision"
                    className="w-full h-full object-cover opacity-80"
                    loading="lazy"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                     <p className="font-mono text-xs text-[#f7951e] uppercase tracking-widest mb-2">Since 1996</p>
                     <p className="text-xl font-medium">Riyadh, Saudi Arabia</p>
                  </div>
               </div>
            </ScrollBasedAnimation>

            {/* Text */}
            <div className="lg:pr-12">
               <ScrollBasedAnimation direction="up" duration={0.8} delay={0.1}>
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-10 text-white">
                    {isArabic ? "المستقبل" : "The Future"} <br />
                    <span className="text-gray-500">{isArabic ? "واضح." : "Is Clear."}</span>
                  </h2>
               </ScrollBasedAnimation>

               <ScrollBasedAnimation direction="up" duration={0.8} delay={0.2}>
                  <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
                    {content.vision_text}
                  </p>
                  
                 
               </ScrollBasedAnimation>
            </div>
         </div>
      </section>

      {/* =========================================
          SECTION 5: LEADERSHIP / CRAFTSMANSHIP (Flipped Layout)
      ========================================= */}
      <section className="w-full relative py-32 bg-white text-gray-500 overflow-hidden">
         {/* Background Texture (Same Noise for consistency) */}
         <div className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
         />
         
         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            
            {/* 1. TEXT CONTENT (Left Side) */}
            <div className="lg:pr-12 order-first">
               <ScrollBasedAnimation direction="up" duration={0.8}>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="h-[2px] w-12 bg-[#f7951e]"></span>
                     <span className="text-xs font-bold text-[#f7951e] tracking-[0.25em] uppercase">
                       {isArabic ? "المعايير" : "Our Standards"}
                     </span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-10 text-gray-500">
                    {isArabic ? "الجودة" : "Quality"} <br />
                    <span className="text-gray-500">{isArabic ? "مضمونة." : "Guaranteed."}</span>
                  </h2>
               </ScrollBasedAnimation>

               <ScrollBasedAnimation direction="up" duration={0.8} delay={0.1}>
                  <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed mb-12">
                    {isArabic 
                      ? "نحن لا نقبل إلا بالأفضل. يتم اختيار كل لوح حجري يدوياً من المحاجر العالمية لضمان النقاء والمتانة التي تتجاوز التوقعات."
                      : "We accept nothing but the best. Every stone slab is hand-selected from global quarries to ensure purity and durability that exceeds expectations."
                    }
                  </p>
               </ScrollBasedAnimation>
            </div>

            {/* 2. IMAGE COMPOSITION (Right Side) */}
            <div className="relative order-last">
                <ScrollBasedAnimation direction="up" duration={0.8} delay={0.2}>
                   {/* Architectural Frame */}
                   <div className="relative aspect-video lg:aspect-square overflow-hidden bg-gray-900 border-l border-white/10">
                      <img 
                        // Using a raw material/quarry image to contrast the finished building above
                        src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                        alt="Stone Quality Control"
                        className="w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-[2000ms] ease-out will-change-transform"
                        loading="lazy"
                      />
                      
                      {/* Dark Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                      
                      {/* Image Label */}
                      <div className="absolute bottom-8 left-8">
                         <p className="font-mono text-xs text-white/50 uppercase tracking-widest mb-1">Source</p>
                         <p className="text-lg font-medium text-white">Carrara, Italy</p>
                      </div>
                   </div>

                   {/* Decorative Element - Floating Line */}
                   <div className="absolute -bottom-10 -right-10 w-40 h-[1px] bg-[#f7951e] hidden lg:block" />
                </ScrollBasedAnimation>
            </div>

         </div>
      </section>

      {/* =========================================
          SECTION 6: INNOVATION / TECHNOLOGY (Image Left)
      ========================================= */}
      <section className="w-full relative py-32 bg-[#212930] text-white overflow-hidden">
         {/* Background Texture */}
         <div className="absolute inset-0 opacity-20 pointer-events-none" 
              style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
         />

         <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
            
            {/* 1. IMAGE COMPOSITION (Left Side) */}
            <div className="relative order-last lg:order-first">
                <ScrollBasedAnimation direction="up" duration={0.8}>
                   {/* Main Image Block */}
                   <div className="relative aspect-[4/5] lg:aspect-square overflow-hidden bg-gray-900">
                      <img 
                        // High-tech/Industrial stone cutting or facade detail
                        src="https://images.pexels.com/photos/129733/pexels-photo-129733.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                        alt="Precision Engineering"
                        className="w-full h-full object-cover opacity-70 hover:scale-105 transition-transform duration-[2000ms] ease-out will-change-transform"
                        loading="lazy"
                      />
                      
                      {/* Technical Overlay Grid - Adds "Engineering" feel */}
                      <div className="absolute inset-0 z-10 opacity-20 pointer-events-none" 
                           style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
                      />

                      {/* Image Label */}
                      <div className="absolute top-8 right-8 text-right z-20">
                         <p className="font-mono text-xs text-[#f7951e] uppercase tracking-widest mb-1">Tech</p>
                         <p className="text-lg font-medium text-white">CNC Precision</p>
                      </div>
                   </div>

                   {/* Creative Accent: "Measurement" Lines */}
                   <div className="absolute -top-4 -left-4 w-8 h-8 border-t border-l border-[#f7951e] hidden lg:block" />
                   <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b border-r border-[#f7951e] hidden lg:block" />
                </ScrollBasedAnimation>
            </div>

            {/* 2. TEXT CONTENT (Right Side) */}
            <div className="lg:pl-12">
               <ScrollBasedAnimation direction="up" duration={0.8} delay={0.1}>
                  <div className="flex items-center gap-4 mb-8">
                     <span className="h-[2px] w-12 bg-[#f7951e]"></span>
                     <span className="text-xs font-bold text-[#f7951e] tracking-[0.25em] uppercase">
                       {isArabic ? "التقنية" : "Technology"}
                     </span>
                  </div>

                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-10 text-white">
                    {isArabic ? "هندسة" : "Engineering"} <br />
                    <span className="text-gray-500">{isArabic ? "الابتكار." : "Innovation."}</span>
                  </h2>
               </ScrollBasedAnimation>

               <ScrollBasedAnimation direction="up" duration={0.8} delay={0.2}>
                  <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed mb-12">
                    {isArabic 
                      ? "نحن ندمج الحرفية التقليدية مع أحدث تقنيات القص بالليزر وأنظمة التثبيت الميكانيكي، لضمان واجهات آمنة، دقيقة، ومذهلة بصرياً."
                      : "We fuse traditional craftsmanship with state-of-the-art laser cutting and mechanical fixing systems, ensuring facades that are safe, precise, and visually stunning."
                    }
                  </p>
                  
              
               </ScrollBasedAnimation>
            </div>

         </div>
      </section>

    </div>
  );
}