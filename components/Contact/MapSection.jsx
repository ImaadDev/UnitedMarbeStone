"use client";

import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";

export default function MapSection() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  // CONFIGURATION
  const location = {
    label: isArabic ? "موقعنا" : "Our Location",
    address: isArabic ? "طريق رفاع بن رافع، حي العليا، الرياض" : "Rifah Ibn rafi Street Al Olaya, Riyadh",
    subAddress: isArabic ? "المملكة العربية السعودية" : "Saudi Arabia",
    googleMapsLink: "https://maps.app.goo.gl/TscnDuyfjTDbWwGy8", // Replace with your actual pin link
    // Embed Link: Centered on Takhassusi St, Riyadh
    embedSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7250.691018982202!2d46.697953381048585!3d24.680646839192534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f036364148491%3A0x4a9c54fa5f0a8fb6!2zUkhPQTI5MTgsIDI5MTggUmlmYWFoIElibiBSYWZpLCA5MzYx2Iwg2K3ZiiDYp9mE2LnZhNmK2KfYjCBSaXlhZGggMTI2MTE!5e0!3m2!1sen!2ssa!4v1765289418198!5m2!1sen!2ssa"
  };


  return (
    <section 
      className="w-full h-[600px] md:h-[700px] relative bg-[#212930] overflow-hidden" 
      dir={isArabic ? "rtl" : "ltr"}
    >
      
      {/* =======================
          1. THE MAP (Dark Filtered)
         ======================= */}
      <div className="absolute inset-0 w-full h-full z-0">
         <iframe
           src={location.embedSrc}
           width="100%"
           height="100%"
           style={{ 
             border: 0, 
             // THE MAGIC FILTER: Inverts colors to make it dark, then lowers contrast
             filter: "grayscale(100%) invert(90%) brightness(80%) contrast(120%)" 
           }}
           allowFullScreen=""
           loading="lazy"
           referrerPolicy="no-referrer-when-downgrade"
           className="w-full h-full opacity-60 hover:opacity-100 transition-opacity duration-1000 ease-out"
         />
         
         {/* Vignette Overlay (Fades map edges into the black background) */}
         <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)]" />
      </div>

      {/* =======================
          2. FLOATING INFO CARD
         ======================= */}
      <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none">
         <div className="max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
            
            <ScrollBasedAnimation direction={isArabic ? "left" : "right"} duration={0.8}>
               <div className="pointer-events-auto bg-[#212930]/60 backdrop-blur-md border border-white/10 p-10 md:p-12 max-w-md relative group">
                  
                  {/* Decorative Corner */}
                  <div className={`absolute top-0 w-20 h-20 border-t-2 border-[#f7951e] ${isArabic ? 'right-0 border-r-2' : 'left-0 border-l-2'}`} />

                  <span className="text-xs font-mono text-[#f7951e] uppercase tracking-widest mb-4 block">
                    {location.label}
                  </span>
                  
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                    {location.address}
                  </h3>
                  <p className="text-xl text-gray-400 font-light mb-8">
                    {location.subAddress}
                  </p>

                  {/* CTA Button */}
                  <a 
                    href={location.googleMapsLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-white hover:text-[#f7951e] transition-colors duration-300"
                  >
                    <span>{isArabic ? "احصل على الاتجاهات" : "Get Directions"}</span>
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#f7951e] transition-all duration-300`}>
                       <svg 
                         className={`w-3 h-3 transform transition-transform duration-300 ${isArabic ? 'rotate-[225deg] group-hover:translate-x-[-2px] group-hover:translate-y-[2px]' : 'rotate-45 group-hover:translate-x-[2px] group-hover:translate-y-[-2px]'}`} 
                         fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                       </svg>
                    </div>
                  </a>

               </div>
            </ScrollBasedAnimation>

         </div>
      </div>

    </section>
  );
}