"use client";

import { useState } from "react";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { usePathname } from "next/navigation";

export default function Contact() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  // TRANSLATIONS
  const text = {
    sub: isArabic ? "ابدأ مشروعك" : "Start Your Project",
    title: isArabic ? "تواصل معنا" : "Get in Touch",
    desc: isArabic 
      ? "هل لديك مشروع في ذهنك؟ نحن هنا لتحويل رؤيتك إلى تحفة حجرية. تفضل بزيارتنا أو راسلنا."
      : "Have a project in mind? We are here to turn your vision into a stone masterpiece. Visit us or drop a line.",
    
    // Form Labels
    name: isArabic ? "الاسم الكامل" : "Full Name",
    email: isArabic ? "البريد الإلكتروني" : "Email Address",
    phone: isArabic ? "رقم الهاتف" : "Phone Number",
    message: isArabic ? "تفاصيل المشروع" : "Project Details",
    submit: isArabic ? "إرسال الطلب" : "Send Inquiry",
    
    // Contact Info
    address_label: isArabic ? "العنوان" : "Location",
    address: isArabic ? "شارع التخصصي، الرياض، المملكة العربية السعودية" : "Takhassusi St, Riyadh, Saudi Arabia",
    phone_label: isArabic ? "الهاتف" : "Phone",
    email_label: isArabic ? "البريد" : "Email",
  };

  // FORM HANDLER (Demo)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form logic here
    alert(isArabic ? "تم الإرسال!" : "Sent!");
  };

  return (
    <section 
      id="contact" 
      className="w-full py-24 md:py-32 bg-[#212930] text-white overflow-hidden relative"
      dir={isArabic ? "rtl" : "ltr"}
    >
      
      {/* Background Texture (Subtle Noise) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} 
      />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">
        
        {/* =======================
            LEFT: INFO & MAP
           ======================= */}
        <div>
          <ScrollBasedAnimation direction="up" duration={0.8}>
            <span className="text-[#f7951e] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
              {text.sub}
            </span>
            <h2 className="text-5xl md:text-6xl font-bold leading-none tracking-tight mb-8">
              {text.title}
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed font-light max-w-md mb-12">
              {text.desc}
            </p>
          </ScrollBasedAnimation>

          {/* Contact Details List */}
          <div className="space-y-8 mb-16">
             {/* Address */}
             <ScrollBasedAnimation direction="up" delay={0.1}>
                <div className="group flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#f7951e] group-hover:bg-[#f7951e] group-hover:text-white transition-all duration-300">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{text.address_label}</span>
                    <p className="text-lg text-white">{text.address}</p>
                  </div>
                </div>
             </ScrollBasedAnimation>

             {/* Phone & Email */}
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <ScrollBasedAnimation direction="up" delay={0.2}>
                  <div className="group flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#f7951e] group-hover:bg-[#f7951e] group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{text.phone_label}</span>
                      <a href="tel:+966509502502" className="text-lg text-white hover:text-[#f7951e] transition-colors">+966 50 950 2502</a>
                    </div>
                  </div>
               </ScrollBasedAnimation>

               <ScrollBasedAnimation direction="up" delay={0.3}>
                  <div className="group flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#f7951e] group-hover:bg-[#f7951e] group-hover:text-white transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-1">{text.email_label}</span>
                      <a href="mailto:info@unitedstone.com" className="text-lg text-white hover:text-[#f7951e] transition-colors">info@unitedstone.com</a>
                    </div>
                  </div>
               </ScrollBasedAnimation>
             </div>
          </div>

          {/* STYLIZED MAP (Grayscale Filter) */}
          <ScrollBasedAnimation direction="up" delay={0.4}>
            <div className="relative w-full h-64 bg-gray-900 rounded-sm overflow-hidden border border-white/10 group">
               {/* Note: Invert + Grayscale makes the map dark and classy */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.697472304987!2d46.6752!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDAnMzAuNyJF!5e0!3m2!1sen!2ssa!4v1620000000000!5m2!1sen!2ssa"
                 width="100%" 
                 height="100%" 
                 style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(85%)" }} 
                 allowFullScreen="" 
                 loading="lazy"
                 className="opacity-60 group-hover:opacity-80 transition-opacity duration-500"
               ></iframe>
               
               {/* Map Overlay Button */}
               <a 
                 href="https://maps.google.com" 
                 target="_blank" 
                 className="absolute bottom-4 left-4 bg-[#f7951e] text-white text-xs font-bold px-4 py-2 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               >
                 Open Map
               </a>
            </div>
          </ScrollBasedAnimation>

        </div>

        {/* =======================
            RIGHT: MINIMALIST FORM
           ======================= */}
        <div className="lg:pl-12">
           <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              
              <ScrollBasedAnimation direction="left" delay={0.2}>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder={text.name}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder:text-gray-600 focus:border-[#f7951e] focus:outline-none transition-colors duration-300"
                  />
                </div>
              </ScrollBasedAnimation>

              <ScrollBasedAnimation direction="left" delay={0.3}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative">
                    <input 
                      type="email" 
                      placeholder={text.email}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder:text-gray-600 focus:border-[#f7951e] focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div className="relative">
                    <input 
                      type="tel" 
                      placeholder={text.phone}
                      className="w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder:text-gray-600 focus:border-[#f7951e] focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>
              </ScrollBasedAnimation>

              <ScrollBasedAnimation direction="left" delay={0.4}>
                <div className="relative">
                  <textarea 
                    rows={4}
                    placeholder={text.message}
                    className="w-full bg-transparent border-b border-white/20 py-4 text-lg text-white placeholder:text-gray-600 focus:border-[#f7951e] focus:outline-none transition-colors duration-300 resize-none"
                  />
                </div>
              </ScrollBasedAnimation>

              <ScrollBasedAnimation direction="up" delay={0.5}>
                <button 
                  type="submit"
                  className="group mt-8 w-full md:w-auto bg-white text-black px-12 py-5 font-bold uppercase tracking-widest hover:bg-[#f7951e] hover:text-white transition-all duration-300 flex items-center justify-center gap-4"
                >
                  <span>{text.submit}</span>
                  <svg className={`w-5 h-5 transform transition-transform duration-300 ${isArabic ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </ScrollBasedAnimation>

           </form>
        </div>

      </div>
    </section>
  );
}