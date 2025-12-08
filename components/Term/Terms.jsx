"use client";

import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";

export default function TermsPage() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  const content = {
    updated: isArabic ? "تاريخ التحديث: ١٥ أكتوبر ٢٠٢٤" : "Effective: October 15, 2024",
    title: isArabic ? "شروط الاستخدام" : "Terms of Use",
    intro: isArabic 
      ? "يرجى قراءة هذه الشروط بعناية. باستخدامك لموقعنا، فإنك توافق على الالتزام بهذه البنود."
      : "Please read these terms carefully. By accessing our site, you agree to be bound by these conditions.",
    sections: [
      {
        id: "01",
        label: isArabic ? "الموافقة" : "Acceptance",
        text: isArabic
          ? "يعد استخدامك لموقع يونايتد ستون بمثابة عقد ملزم. إذا كنت لا توافق على أي من هذه الشروط، يرجى التوقف عن استخدام الموقع والخدمات فوراً."
          : "Your use of the United Stone website constitutes a binding contract. If you do not agree to any of these terms, please discontinue use of the site and services immediately.",
      },
      {
        id: "02",
        label: isArabic ? "الملكية الفكرية" : "Intellectual Property",
        text: isArabic
          ? "جميع المحتويات (الصور، التصاميم، النصوص، الشعارات) هي ملكية حصرية لشركة يونايتد ستون ومحمية بموجب قوانين حقوق النشر. يمنع نسخ أو إعادة استخدام أي محتوى دون إذن كتابي."
          : "All content (images, designs, text, logos) is the exclusive property of United Stone and is protected by copyright laws. Reproduction or reuse of any content without written permission is strictly prohibited.",
      },
      {
        id: "03",
        label: isArabic ? "استخدام الموقع" : "Site Usage",
        text: isArabic
          ? "يُحظر استخدام الموقع لأي غرض غير قانوني أو ضار، بما في ذلك محاولات الاختراق، أو جمع البيانات بشكل آلي، أو نشر محتوى مسيء."
          : "Use of the site for any illegal or harmful purpose, including hacking attempts, automated data scraping, or posting offensive content, is strictly prohibited.",
      },
      {
        id: "04",
        label: isArabic ? "حدود المسؤولية" : "Liability Limit",
        text: isArabic
          ? "يتم تقديم المعلومات على هذا الموقع 'كما هي'. لا تتحمل يونايتد ستون مسؤولية أي أخطاء مطبعية أو عدم دقة في صور المنتجات الطبيعية التي قد تختلف قليلاً في الواقع."
          : "Information on this site is provided 'as is'. United Stone is not liable for typographical errors or inaccuracies in images of natural products, which may vary slightly in reality.",
      },
      {
        id: "05",
        label: isArabic ? "القانون الحاكم" : "Governing Law",
        text: isArabic
          ? "تخضع هذه الشروط لقوانين المملكة العربية السعودية. تختص محاكم الرياض بالنظر في أي نزاع ينشأ عن استخدام هذا الموقع."
          : "These terms are governed by the laws of Saudi Arabia. The courts of Riyadh shall have exclusive jurisdiction over any disputes arising from the use of this site.",
      },
    ],
  };

  return (
    <section 
      className="min-h-screen w-full bg-white text-black pt-40 pb-32" 
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        {/* =======================
            HEADER
           ======================= */}
        <div className="mb-24">
          <ScrollBasedAnimation direction="up" duration={0.8}>
            <div className="flex flex-col gap-6">
              <span className="font-mono text-xs text-[#f7951e] uppercase tracking-widest">
                {content.updated}
              </span>
              <h1 className="text-6xl md:text-9xl font-bold tracking-tighter leading-[0.8]">
                {content.title}
              </h1>
              <p className="text-xl text-gray-500 font-light mt-8 max-w-2xl leading-relaxed">
                {content.intro}
              </p>
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* =======================
            CONTENT GRID
           ======================= */}
        <div className="flex flex-col">
          {content.sections.map((section, i) => (
            <ScrollBasedAnimation 
              key={section.id} 
              direction="up" 
              duration={0.6} 
              delay={i * 0.05}
              className="group"
            >
              {/* THE DIVIDER LINE (Interactive) */}
              <div className="w-full h-[1px] bg-gray-200 transition-all duration-700 ease-out group-hover:bg-[#f7951e] origin-left rtl:origin-right" />

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 py-16 items-start">
                
                {/* 1. ID & LABEL */}
                <div className="md:col-span-4 flex flex-col justify-between h-full">
                   <span className="text-5xl font-bold text-gray-100 transition-colors duration-500 group-hover:text-black">
                     {section.id}
                   </span>
                   <h2 className="text-xl font-bold text-black mt-2 uppercase tracking-wide">
                     {section.label}
                   </h2>
                </div>

                {/* 2. TEXT BODY */}
                <div className="md:col-span-8">
                   <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed transition-colors duration-500 group-hover:text-gray-900">
                     {section.text}
                   </p>
                </div>

              </div>
            </ScrollBasedAnimation>
          ))}
          
          {/* Final Line */}
          <div className="w-full h-[1px] bg-black" />
        </div>

        {/* =======================
            FOOTER NOTE
           ======================= */}
        <div className="mt-32">
           <ScrollBasedAnimation direction="up" delay={0.2}>
              <p className="text-sm font-mono text-gray-400 uppercase tracking-widest">
                {isArabic ? "للاستفسارات القانونية:" : "Legal Inquiries:"} <br/>
                <a href="mailto:legal@unitedstone.com" className="text-black hover:text-[#f7951e] transition-colors mt-2 inline-block">
                  legal@unitedstone.com
                </a>
              </p>
           </ScrollBasedAnimation>
        </div>

      </div>
    </section>
  );
}