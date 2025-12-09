"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import CTASection from "@/components/Home/CTA";

// --- ANIMATION HELPERS ---

// 1. Reveal Text (Slides up from a mask)
const RevealText = ({ children, delay = 0, className = "" }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

// 2. Smooth Accordion
const FAQItem = ({ q, a, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-200/60">
      <button onClick={onClick} className="w-full flex justify-between items-center py-6 text-left group">
        <span className={`text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-[#f7951e]' : 'text-black group-hover:text-gray-500'}`}>{q}</span>
        <motion.span 
          animate={{ rotate: isOpen ? 45 : 0 }}
          className="text-2xl font-light text-gray-400"
        >+</motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-gray-500 font-light leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function CreativeServicePage({ service }) {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");
  const [openFaq, setOpenFaq] = useState(0);



  if (!service) {
    return <div>Service not found</div>;
  }

  const content = isArabic ? {
    title: service.title_ar,
    subtitle: service.subtitle_ar,
    description: service.description_ar,
    features: service.features_ar,
    stats: service.stats_ar,
    applications: service.applications_ar,
    process: service.process_ar,
    faq: service.faq_ar
  } : {
    title: service.title_en,
    subtitle: service.subtitle_en,
    description: service.description_en,
    features: service.features_en,
    stats: service.stats_en,
    applications: service.applications_en,
    process: service.process_en,
    faq: service.faq_en
  };

  // Parallax Scroll Hook
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]); // Image moves slower than text
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // Image fades out

  return (
    <main ref={containerRef} className="w-full mt-25 md:mt-30 bg-white text-black min-h-screen" dir={isArabic ? "rtl" : "ltr"}>
      
      {/* =======================
          1. IMMERSIVE HERO
         ======================= */}
      <section className="relative h-screen w-full overflow-hidden flex items-end pb-20 md:pb-32 px-6 md:px-12">
        {/* Parallax Background */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src={service.featuredImage?.asset?.url || service.featuredImage}
            alt={content.title}
            fill
            priority
            className="object-cover scale-105" // Slight scale for drama
          />
          <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
           <RevealText delay={0.1}>
             <span className="text-[#f7951e] tracking-[0.2em] text-sm font-bold uppercase mb-4 block">
                {isArabic ? "خدماتنا" : "Our Services"}
             </span>
           </RevealText>
           
           <RevealText delay={0.2} className="mb-6">
             <h1 className="text-6xl md:text-9xl font-bold text-white uppercase tracking-tight leading-[0.9]">
               {content.title}
             </h1>
           </RevealText>

           <RevealText delay={0.3}>
             <p className="text-xl md:text-2xl text-gray-200 font-light max-w-xl leading-relaxed">
               {content.subtitle}
             </p>
           </RevealText>
        </div>
      </section>


      {/* =======================
          2. FLOATING LAYOUT
         ======================= */}
      <section className="relative max-w-8xl mx-auto px-6 md:px-12 py-32">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* --- LEFT: STICKY INFO CARD --- */}
          {/* We use 'self-start' and 'sticky top-10' to make it float */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 self-start z-20">
             <motion.div 
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="bg-white/80 backdrop-blur-md border border-gray-100 p-8 md:p-10 shadow-2xl shadow-black/5 rounded-sm"
             >
                <div className="space-y-8">
                  {Object.entries(content.stats || {}).map(([key, value], i) => (
                    <div key={i} className="flex justify-between items-end border-b border-gray-100 pb-3">
                      <span className="text-xs md:text-base uppercase text-gray-400 tracking-widest">{key}</span>
                      <span className="text-xs font-serif text-black">{value}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                    {isArabic ? "الاستخدامات" : "Applications"}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {content.applications.map((app, i) => (
                      <span key={i} className="bg-gray-100 text-gray-600 px-3 py-1 text-xs rounded-full">
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

              <a
  href="https://wa.me/966510783050?text=Hello%20United%20Marble%20Stones,%20I%20would%20like%20to%20inquire%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="block w-full mt-12 bg-black text-white py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#f7951e] transition-colors duration-500 text-center"
>
  {isArabic ? "تواصل عبر واتساب" : "Get Consultation"}
</a>

             </motion.div>
          </div>


          {/* --- RIGHT: SCROLLABLE CONTENT --- */}
          <div className="lg:w-2/3">
            
            {/* Description (Big Editorial Text) */}
            <div className="mb-24">
              <RevealText>
                 <p className="text-2xl md:text-4xl leading-tight font-light text-gray-800">
                   {/* Split description for effect */}
                   {content.description.split('.')[0]}.
                   <span className="text-gray-400"> {content.description.split('.').slice(1).join('.')}</span>
                 </p>
              </RevealText>
            </div>

            {/* Visual Process List (Interactive Hover) */}
            <div className="mb-24 space-y-12">
               <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
                 {isArabic ? "العملية" : "The Process"}
               </h3>
               {content.process.map((step, i) => (
                 <motion.div 
                   key={i} 
                   initial={{ opacity: 0, x: -20 }}
                   whileInView={{ opacity: 1, x: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="group flex gap-6 md:gap-10 items-start cursor-default"
                 >
                    <span className="text-5xl font-serif text-gray-200 group-hover:text-[#f7951e] transition-colors duration-500">
                      0{i + 1}
                    </span>
                    <div className="pt-3">
                      <h4 className="text-xl font-bold mb-2">{step.title}</h4>
                      <p className="text-gray-500 leading-relaxed font-light">{step.desc}</p>
                    </div>
                 </motion.div>
               ))}
            </div>

            {/* Overlapping Image Gallery */}
            <div className="relative mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
               {service.gallery?.map((img, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 50 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true, margin: "-100px" }}
                   transition={{ duration: 0.8, delay: i * 0.2 }}
                   className={`relative aspect-[3/4] overflow-hidden ${i === 1 ? "md:translate-y-20" : ""}`} // Offset second image
                 >
                   <Image src={img.asset?.url|| img} alt="Detail" fill className="object-cover hover:scale-110 transition-transform duration-1000" />
                 </motion.div>
               ))}
            </div>

            {/* FAQ */}
            <div className="mt-32">
              <h3 className="text-3xl font-serif mb-10">FAQ</h3>
              {content.faq.map((item, i) => (
                <FAQItem 
                  key={i} 
                  q={item.q} 
                  a={item.a} 
                  isOpen={openFaq === i} 
                  onClick={() => setOpenFaq(openFaq === i ? -1 : i)} 
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =======================
          3. LARGE NEXT LINK
         ======================= */}
      <section className="bg-[#212930] text-white py-32 overflow-hidden relative group cursor-pointer">
         <Link href="/services" className="absolute inset-0 z-20" /> {/* Full click area */}
         
         <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row justify-between items-center">
            <div>
              <span className="block text-gray-500 text-xs font-bold uppercase tracking-widest mb-4">
                {isArabic ? "الخدمة التالية" : "Next Service"}
              </span>
              <h2 className="text-4xl md:text-7xl font-bold uppercase tracking-tighter group-hover:text-[#f7951e] transition-colors duration-500">
                {isArabic ? "الواجهات الخارجية" : "Exterior Cladding"}
              </h2>
            </div>
            
            <div className="mt-8 md:mt-0 w-24 h-24 rounded-full border border-gray-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
               <span className={`text-3xl ${isArabic ? "rotate-180" : ""}`}>→</span>
            </div>
         </div>

         {/* Background Decoration */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
      </section>
      
      <CTASection />
    </main>
  );
}