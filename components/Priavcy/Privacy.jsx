"use client";

import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";

export default function PrivacyPage() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  const content = {
    updated: isArabic ? "تاريخ التحديث: ١٥ أكتوبر ٢٠٢٤" : "Effective: Dec 6, 2025",
    title: isArabic ? "سياسة الخصوصية" : "Privacy Policy",
    sections: [
      {
        id: "01",
        title: isArabic ? "المقدمة" : "Introduction",
        text: isArabic
          ? "في يونايتد ستون، نعتبر الخصوصية جزءاً لا يتجزأ من جودتنا. توضح هذه الوثيقة التزامنا بحماية بياناتك الشخصية بشفافية مطلقة، تماماً كما نلتزم بالشفافية في تعاملاتنا التجارية."
          : "At United Stone, we view privacy as an integral part of our quality assurance. This document outlines our commitment to protecting your personal data with absolute transparency, just as we conduct our business dealings.",
      },
      {
        id: "02",
        title: isArabic ? "جمع البيانات" : "Data Collection",
        text: isArabic
          ? "نقوم بجمع الحد الأدنى اللازم من البيانات لخدمتك: الاسم، ومعلومات الاتصال (الهاتف/البريد)، والتفاصيل الفنية للمشروع. نحن لا نجمع بيانات لا تخدم الغرض الهندسي أو التجاري المباشر."
          : "We collect only the minimum data necessary to serve you: Name, Contact Info (Phone/Email), and Technical Project Details. We do not collect data that does not serve a direct engineering or commercial purpose.",
      },
      {
        id: "03",
        title: isArabic ? "الاستخدام" : "Usage Protocol",
        text: isArabic
          ? "تستخدم بياناتك لغرضين فقط: التواصل معك بخصوص مشاريعك الحالية أو المستقبلية، وتحسين تجربتك الرقمية على موقعنا. لن يتم بيع بياناتك لأي طرف ثالث تحت أي ظرف."
          : "Your data is utilized for two purposes only: Communication regarding your current or future projects, and optimizing your digital experience on our site. Your data is never sold to third parties under any circumstances.",
      },
      {
        id: "04",
        title: isArabic ? "الأمان" : "Security Measures",
        text: isArabic
          ? "نستخدم بروتوكولات تشفير متقدمة وتدابير أمنية صارمة لمنع الوصول غير المصرح به. يتم تخزين البيانات على خوادم آمنة، والوصول إليها مقصور على فريق العمل المعني فقط."
          : "We employ advanced encryption protocols and strict security measures to prevent unauthorized access. Data is stored on secure servers, with access restricted strictly to relevant personnel.",
      },
      {
        id: "05",
        title: isArabic ? "ملفات الارتباط" : "Cookies",
        text: isArabic
          ? "نستخدم ملفات تعريف الارتباط لتحسين أداء الموقع وتحليل حركة المرور. يمكنك تعديل إعدادات المتصفح لرفضها، لكن ذلك قد يؤثر على بعض وظائف الموقع."
          : "We use cookies to enhance site performance and analyze traffic. You may adjust your browser settings to refuse them, though this may affect some site functionalities.",
      },
    ],
  };

  return (
    <section 
      className="min-h-screen w-full bg-white text-black pt-40 pb-32" 
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* =======================
            MINIMAL HEADER
           ======================= */}
        <div className="mb-32 border-b border-black pb-8">
          <ScrollBasedAnimation direction="up" duration={0.8}>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.8]">
                {content.title}
              </h1>
              <span className="font-mono text-xs text-gray-400 uppercase tracking-widest mb-2">
                {content.updated}
              </span>
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* =======================
            CONTENT STREAM
           ======================= */}
        <div className="flex flex-col gap-24">
          {content.sections.map((section, i) => (
            <ScrollBasedAnimation 
              key={section.id} 
              direction="up" 
              duration={0.6} 
              delay={i * 0.05}
              className="group"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start">
                
                {/* 1. STICKY NUMBER (The Creative Hook) */}
                <div className="md:col-span-3 md:sticky md:top-32 self-start">
                   <span className="block text-6xl md:text-8xl font-bold text-gray-100 transition-colors duration-500 group-hover:text-[#f7951e]">
                     {section.id}
                   </span>
                </div>

                {/* 2. TEXT CONTENT */}
                <div className="md:col-span-9 pt-4 border-t border-gray-100 md:border-none">
                   <h2 className="text-2xl md:text-3xl font-bold mb-6 text-black group-hover:translate-x-2 transition-transform duration-500 ease-out">
                     {section.title}
                   </h2>
                   <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed max-w-2xl transition-colors duration-500 group-hover:text-black">
                     {section.text}
                   </p>
                </div>

              </div>
            </ScrollBasedAnimation>
          ))}
        </div>

        {/* =======================
            BOTTOM ANCHOR
           ======================= */}
        <div className="mt-32 pt-12 border-t border-black">
           <ScrollBasedAnimation direction="up" delay={0.2}>
              <div className="flex justify-between items-center">
                 <span className="font-bold text-lg">UNITED<span className="text-[#f7951e]">STONE</span></span>
                 <a href={isArabic ? '/ar/contact' : '/en/contact'} className="text-xs font-bold uppercase tracking-widest hover:text-[#f7951e] transition-colors">
                    {isArabic ? "تواصل معنا" : "Contact Us"} →
                 </a>
              </div>
           </ScrollBasedAnimation>
        </div>

      </div>
    </section>
  );
}