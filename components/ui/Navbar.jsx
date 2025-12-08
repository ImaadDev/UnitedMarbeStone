"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();

  if(pathname.startsWith("/dashboard")) {
    return null;
  }
  
  // Check if current path starts with /ar
  const isArabic = pathname?.startsWith("/ar");

const isHomePage =
  pathname === "/en" ||
  pathname === "/ar" ||
  pathname === "/" ||
  pathname === "" ||
  pathname === undefined;

  console.log("Navbar Rendered - Pathname:", pathname);

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // --- 1. SMOOTH SCROLL DETECTION ---
  useEffect(() => {
    const handleScroll = () => {
      // Threshold 50px to trigger the glass effect
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- 2. SMART LANGUAGE SWITCHER LOGIC ---
  const handleLanguageSwitch = () => {
    let newPath;

    if (isArabic) {
      // Switch to English: Replace '/ar' with '/en'
      newPath = pathname.replace(/^\/ar/, "/en");
    } else {
      // Switch to Arabic: Replace '/en' with '/ar'
      newPath = pathname.replace(/^\/en/, "/ar");
    }

    // Smooth transition
    router.push(newPath);
  };

  // --- DATA ---
  const navLinks = [
    { nameEn: "Home", nameAr: "الرئيسية", href: isArabic ? "/ar" : "/en" },
    { nameEn: "About", nameAr: "من نحن", href: isArabic ? "/ar/about" : "/en/about" },
    { nameEn: "Services", nameAr: "خدماتنا", href: isArabic ? "/ar/services" : "/en/services" },
    { nameEn: "Our Work", nameAr: "المشاريع", href: isArabic ? "/ar/work" : "/en/work" },
    { nameEn: "Blogs", nameAr: "المدونات", href: isArabic ? "/ar/blogs" : "/en/blogs" },
    { nameEn: "Contact", nameAr: "تواصل معنا", href: isArabic ? "/ar/contact" : "/en/contact" },
    // { nameEn: "Journal", nameAr: "المقالات", href: "#blog" },
  ];

  return (
    <>
      {/* NAVBAR CONTAINER 
        - Fixed to top
        - Transition duration-700 for super smooth background fill
      */}
      <nav
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] ${
    isHomePage
      ? isScrolled
        ? "py-5 bg-[#212930]"
        : "py-5 bg-transparent border-transparent"
      : "py-5 bg-[#212930] "
  }`}
  dir={isArabic ? "rtl" : "ltr"}
>

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          
          {/* =======================
         {/* =======================
   {/* =======================
    LOGO AREA
   ======================= */}
<Link
  href={isArabic ? "/ar" : "/en"}
  className="relative z-50 group cursor-pointer"
>
  {/* Logo Icon */}
  <div className="relative w-16 h-16 md:w-20 md:h-20">
    <Image
      src="/logo.png"
      alt="United Stone Logo"
      fill
      className="object-contain transition-transform duration-300 group-hover:scale-105"
      priority
    />
  </div>
</Link>



          {/* =======================
              DESKTOP NAVIGATION
             ======================= */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link 
                key={link.nameEn} 
                href={link.href}
                className="relative group py-2"
              >
                <span className="relative z-10 text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-300 uppercase tracking-widest">
                  {isArabic ? link.nameAr : link.nameEn}
                </span>
                {/* Creative Hover: Expanding orange line */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#f7951e] transition-all duration-300 group-hover:w-full" />
                {/* Subtle Glow behind text */}
                <span className="absolute inset-0 bg-[#f7951e] blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full scale-0 group-hover:scale-150" />
              </Link>
            ))}
          </div>

          {/* =======================
              ACTIONS (Lang + CTA)
             ======================= */}
          <div className="hidden md:flex items-center gap-6">
            
            {/* CREATIVE LANGUAGE SWITCHER */}
            <button 
              onClick={handleLanguageSwitch}
              className="relative group overflow-hidden px-5 py-2 rounded-full border border-white/20 transition-all duration-300 hover:border-[#f7951e]"
            >
              <div className="relative z-10 flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider">
                 {/* Icon */}
                 <span className="text-[#f7951e]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S12 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S12 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m-11.5 4.5L12 21l2.286-6.747m0 0l-1.025-.558" />
                    </svg>
                 </span>
                 {/* Text */}
                 <span>{isArabic ? "English" : "عربي"}</span>
              </div>

              {/* Liquid Hover Fill */}
              <div className="absolute inset-0 bg-[#f7951e] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </button>

            {/* CTA Button */}
            <Link 
              href="#contact"
              className="bg-white text-black hover:bg-[#f7951e] hover:text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(247,149,30,0.4)]"
            >
              {isArabic ? "تواصل معنا" : "Contact Us"}
            </Link>
          </div>

          {/* =======================
              MOBILE HAMBURGER
             ======================= */}
          <button 
            className="md:hidden relative z-50 w-10 h-10 flex flex-col justify-center items-center gap-1.5 group"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {/* Hamburger Lines with animation */}
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-2 bg-[#f7951e]" : ""}`} />
            <span className={`w-4 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "group-hover:w-6"}`} />
            <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-2 bg-[#f7951e]" : ""}`} />
          </button>

        </div>
      </nav>

      {/* =======================
          MOBILE MENU OVERLAY
         ======================= */}
      <div 
        className={`fixed inset-0 bg-[#212930] z-40 flex flex-col justify-center items-center transition-transform duration-[800ms] ease-[cubic-bezier(0.77,0,0.175,1)] ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Background Noise Texture */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

        {/* Links Container */}
        <div className="flex flex-col items-center gap-8 relative z-10" dir={isArabic ? "rtl" : "ltr"}>
          {navLinks.map((link, i) => (
            <Link 
              key={link.nameEn}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              // STAGGERED ANIMATION:
              className={`text-3xl md:text-5xl font-bold text-white hover:text-[#f7951e] transition-all duration-500 transform ${
                mobileMenuOpen 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${100 + (i * 100)}ms` }}
            >
              {isArabic ? link.nameAr : link.nameEn}
            </Link>
          ))}
        </div>
        
        {/* Mobile Actions (Lang + CTA) */}
        <div 
          className={`mt-16 flex flex-col items-center gap-6 transition-all duration-700 delay-500 ${
            mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
           {/* Mobile Language Switcher */}
           <button 
             onClick={() => { handleLanguageSwitch(); setMobileMenuOpen(false); }}
             className="text-sm font-mono text-gray-400 uppercase tracking-widest border border-gray-700 px-8 py-3 rounded-full hover:border-[#f7951e] hover:text-white transition-colors flex items-center gap-2"
           >
             <span className="text-[#f7951e]">🌐</span>
             {isArabic ? "Switch to English" : "تغيير للغة العربية"}
           </button>
        </div>

      </div>
    </>
  );
}