"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { isArray } from "sanity";

export default function Footer() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  if(pathname.startsWith("/dashboard")) {
    return null;
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const content = {
    sitemap: isArabic ? "خريطة الموقع" : "Sitemap",
    social: isArabic ? "تواصل اجتماعي" : "Social Network",
    legal: isArabic ? "قانوني" : "Legal",
    desc: isArabic
      ? "نصوغ الحجر بدقة متناهية لإنشاء مساحات تدوم لأجيال."
      : "Crafting stone with absolute precision to create spaces that last for generations.",
    copyright: isArabic
      ? "© ٢٠٢٤ يونايتد ستون. جميع الحقوق محفوظة."
      : "© 2024 United Stone. All Rights Reserved.",
    top: isArabic ? "للأعلى" : "Back to Top",
  };

  const links = [
    { name: isArabic ? "الرئيسية" : "Home", href: isArabic ? "/ar" : "/" },
    { name: isArabic ? "من نحن" : "About Us", href: "#about" },
    { name: isArabic ? "خدماتنا" : "Services", href: "#services" },
    { name: isArabic ? "المشاريع" : "Projects", href: "#projects" },
    { name: isArabic ? "تواصل معنا" : "Contact", href: "#contact" },
  ];

  const socials = [
    { name: "Instagram", href: "#" },
    { name: "LinkedIn", href: "#" },
    { name: "Twitter / X", href: "#" },
    { name: "WhatsApp", href: "https://wa.me/966509502502" },
  ];

  return (
    <footer
      className="w-full bg-[#212930] text-white pt-32 pb-10 overflow-hidden relative"
      dir={isArabic ? "rtl" : "ltr"}
    >
      {/* SEPARATOR LINE (Gradient) */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-32">
          
          {/* COL 1: BRAND (Span 5) */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <ScrollBasedAnimation direction="up" duration={0.8}>
              <Link href={isArabic ? "/ar" : "/"} className="inline-block group mb-8">
                 <div className="flex flex-col leading-none">
                    <span className="text-3xl md:text-4xl font-bold text-white tracking-tighter">
                      UNITED<span className="text-[#f7951e]">STONE</span>
                    </span>
                    <span className="text-[10px] uppercase tracking-[0.4em] text-gray-500 group-hover:text-white transition-colors duration-500 mt-2 block">
                      {isArabic ? "للرخام والحجر" : "Marble & Granite"}
                    </span>
                 </div>
              </Link>
              
              <p className="text-gray-400 font-light text-lg max-w-sm leading-relaxed">
                {content.desc}
              </p>
            </ScrollBasedAnimation>
          </div>

          {/* COL 2: SITEMAP (Span 3) */}
          <div className="md:col-span-3">
             <ScrollBasedAnimation direction="up" delay={0.1} duration={0.8}>
                <span className="text-[#f7951e] font-mono text-xs uppercase tracking-widest mb-8 block">
                  {content.sitemap}
                </span>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href}
                        className="group flex items-center gap-2 text-gray-300 hover:text-white transition-colors duration-300"
                      >
                         <span className={`w-1.5 h-1.5 bg-[#f7951e] scale-0 transition-transform duration-300 ${isArabic ? 'group-hover:scale-100' : 'group-hover:scale-100'}`} />
                         <span className={`transform transition-transform duration-300 ${isArabic ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}>
                           {link.name}
                         </span>
                      </Link>
                    </li>
                  ))}
                </ul>
             </ScrollBasedAnimation>
          </div>

          {/* COL 3: SOCIALS (Span 4) */}
          <div className="md:col-span-4 flex flex-col justify-between">
             <ScrollBasedAnimation direction="up" delay={0.2} duration={0.8}>
                <span className="text-[#f7951e] font-mono text-xs uppercase tracking-widest mb-8 block">
                  {content.social}
                </span>
                <ul className="grid grid-cols-2 gap-4">
                  {socials.map((social) => (
                    <li key={social.name}>
                      <a 
                        href={social.href}
                        className="group flex items-center justify-between border border-white/10 px-4 py-3 rounded-sm hover:border-[#f7951e] hover:bg-[#f7951e]/5 transition-all duration-300"
                      >
                         <span className="text-sm font-medium text-gray-300 group-hover:text-white">{social.name}</span>
                         <span className={`text-[#f7951e] opacity-0 transition-all duration-300 ${isArabic ? 'group-hover:opacity-100 group-hover:-translate-x-1' : 'group-hover:opacity-100 group-hover:translate-x-1'}`}>
                           ↗
                         </span>
                      </a>
                    </li>
                  ))}
                </ul>
             </ScrollBasedAnimation>

             {/* SCROLL TOP BUTTON */}
             <div className="mt-12 md:mt-0 flex justify-end">
                <button 
                  onClick={scrollToTop}
                  className="group flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-white hover:text-[#f7951e] transition-colors"
                >
                   <span>{content.top}</span>
                   <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#f7951e] transition-colors">
                      <svg className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                   </div>
                </button>
             </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-gray-600 font-mono uppercase tracking-wider">
           <p>{content.copyright}</p>
           <div className="flex gap-6 mt-4 md:mt-0">
              <a  href={isArabic ? "/ar/privacy" : "/en/privacy"} className="hover:text-[#f7951e] transition-colors">Privacy Policy</a>
              <a href={isArabic ? "/ar/terms" : "/en/terms"} className="hover:text-[#f7951e] transition-colors">Terms of Use</a>
           </div>
        </div>

      </div>

      {/* GIANT WATERMARK TEXT 
          - Sits behind everything at the very bottom
          - select-none to avoid accidental highlighting
      */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none select-none opacity-[0.03]">
         <h1 className="text-[20vw] font-black text-white leading-[0.75] text-center tracking-tighter whitespace-nowrap translate-y-[20%]">
            UNITED STONE
         </h1>
      </div>

    </footer>
  );
}