"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";

export default function CTASection() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  const content = {
    title: isArabic ? "جاهز لبدء مشروعك؟" : "Ready to Start?",
    desc: isArabic
      ? "نحن هنا لتحويل فكرتك إلى واقع — تواصل معنا اليوم واحصل على استشارة مجانية."
      : "We’re here to bring your vision to life. Contact us today for a free consultation and let's build something timeless.",
    btn: isArabic ? "تواصل معنا" : "Get in Touch",
  };

  return (
    <section className="relative w-full py-32 overflow-hidden flex justify-center items-center bg-white">
      
      {/* =======================
          BACKGROUND LAYER (Full Width & Lightweight)
         ======================= */}
      <div className="absolute inset-0 z-0">
       
        {/* 2. Architectural Grid (Pure CSS, Zero Lag) */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', 
            backgroundSize: '80px 80px' 
          }} 
        />
        
        {/* 3. Simple Geometric Accents (No Blurs) */}
        <div className="absolute -top-20 -left-20 w-96 h-96 border border-white/10 rounded-full opacity-50" />
        <div className="absolute -bottom-20 -right-20 w-[500px] h-[500px] border border-white/10 rounded-full opacity-50" />
      </div>

      {/* =======================
          CONTENT LAYER
         ======================= */}
      <div className="relative z-10 w-full max-w-4xl px-6 text-center">
        
        <ScrollBasedAnimation direction="up" duration={0.6}>
          {/* Title: High Contrast White */}
          <h2 className="text-4xl uppercase md:text-5xl lg:text-8xl font-bold text-[#212930] tracking-tighter leading-[0.9] mb-8 drop-shadow-lg">
            {content.title}
          </h2>

          {/* Subtitle: Dark Black for readability on Orange */}
          <p className="text-lg md:text-2xl text-[#050505] font-medium max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
            {content.desc}
          </p>

          {/* Button: Performance Optimized */}
          <Link
            href='https://wa.me/966510783050'
            className="group relative inline-flex items-center justify-center gap-4 px-12 py-5 bg-[#050505] text-white font-bold text-sm uppercase tracking-[0.2em] rounded-full transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            {/* Button Text */}
            <span className="relative z-10 group-hover:text-[#f7951e] transition-colors duration-300">
              {content.btn}
            </span>
            
            {/* Arrow Icon */}
            <span className={`relative z-10 transform transition-transform duration-300 group-hover:text-[#f7951e] ${isArabic ? "rotate-180 group-hover:-translate-x-1" : "group-hover:translate-x-1"}`}>
              →
            </span>
          </Link>
        </ScrollBasedAnimation>

      </div>
    </section>
  );
}