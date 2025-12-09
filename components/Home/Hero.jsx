"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const HERO_IMAGES = [
  "/hero1.png",
  "/hero2.png",
  "/hero3.png",
];

export default function Hero() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  // Mount Animation
  useEffect(() => setIsLoaded(true), []);

  // Slider Timer (Slower: 7s for relaxation)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full h-screen min-h-[600px] flex flex-col justify-center items-center text-center text-white overflow-hidden bg-[#050505]">
      
      {/* =======================
          BACKGROUND LAYERS
          ======================= */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {HERO_IMAGES.map((img, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={img}
              // SMOOTHNESS TWEAK: 
              // 1. Duration increased to 3000ms (3s) for a liquid blend.
              // 2. Scale reduced to 1.05 (Subtle breathing, not zooming).
              className={`absolute inset-0 transition-all duration-[3000ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                isActive ? "opacity-100 scale-105 z-10" : "opacity-0 scale-100 z-0"
              }`}
            >
              <img 
                src={img} 
                className="w-full h-full object-cover" 
                alt="Hero bg" 
                loading={index === 0 ? "eager" : "lazy"}
              />
              {/* Single blended overlay for performance */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          );
        })}
      </div>

      {/* GRADIENT (Simple Bottom Fade) */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

      {/* =======================
          CONTENT LAYER
          ======================= */}
      <div
        className="relative z-20 px-4 max-w-5xl mx-auto flex flex-col items-center"
        dir={isArabic ? "rtl" : "ltr"}
      >
        
        {/* Headline */}
        <h1
          className={`text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-[#ffd700] via-[#f7951e] to-[#ffd700] bg-clip-text text-transparent drop-shadow-sm tracking-tight leading-tight transition-all duration-[1500ms] ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {isArabic ? "أحجار طبيعية فاخرة" : "Premium Natural Stones"}
        </h1>

        {/* Subheading */}
        <p
          className={`text-xl md:text-2xl mb-12 max-w-3xl text-gray-200 font-light transition-all duration-[1500ms] delay-200 ease-out transform ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {isArabic ? (
            <>
              حوّل رؤيتك إلى واقع باستخدام حلول أحجار عالية الجودة
              <br className="hidden md:block" />
              <span className="text-[#f7951e] font-semibold mx-2">منذ 1996</span>
              <span className="text-gray-400">•</span>
              شريكك الموثوق في الرياض
            </>
          ) : (
            <>
              Transform your vision into reality with premium stone solutions
              <br className="hidden md:block" />
              <span className="text-[#f7951e] font-semibold mx-2">Since 1996</span>
              <span className="text-gray-400">•</span>
              Your trusted partner in Riyadh
            </>
          )}
        </p>

       
      </div>

      {/* =======================
          INDICATORS
          ======================= */}
      
    

      {/* Slider Dots */}
      <div className="absolute bottom-10 right-10 z-20 hidden md:flex flex-col gap-3">
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-1.5 rounded-full transition-all duration-[1000ms] ease-out ${
              idx === currentIndex ? "h-12 bg-[#f7951e]" : "h-2 bg-white/20 hover:bg-white/50"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}