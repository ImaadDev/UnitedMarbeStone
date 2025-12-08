"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";

export default function ContactPage() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          isArabic
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const text = {
    label: isArabic ? "تواصل معنا" : "Get In Touch",
    title: isArabic ? "لنبدأ الحوار" : "Let's Build Together",
    desc: isArabic
      ? "فريقنا الهندسي جاهز لتحويل رؤيتك إلى واقع ملموس. تفضل بزيارتنا أو راسلنا."
      : "Our engineering team is ready to translate your vision into reality. Visit our studio or drop us a line.",
    name: isArabic ? "الاسم" : "Name",
    email: isArabic ? "البريد" : "Email",
    phone: isArabic ? "الهاتف" : "Phone",
    message: isArabic ? "الرسالة" : "Message",
    btn: isArabic ? "إرسال" : "Send",
    sending: isArabic ? "جاري الإرسال..." : "Sending...",
    success: isArabic ? "تم الإرسال بنجاح!" : "Message sent successfully!",
    error: isArabic ? "حدث خطأ، يرجى المحاولة مرة أخرى" : "Error occurred, please try again",
    address: isArabic ? "طريق التخصصي، الرياض" : "Takhassusi Rd, Riyadh",
    contact_email: "info@unitedstone.com",
    contact_phone: "+966 50 950 2502"
  };

  return (
    <section 
      className="min-h-screen w-full bg-white text-black pt-40 pb-32 relative overflow-hidden" 
      dir={isArabic ? "rtl" : "ltr"}
    >
      
      {/* 1. GRID BACKGROUND (Subtle) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* HEADER */}
        <div className="mb-24">
          <ScrollBasedAnimation direction="up" duration={0.8}>
            <div className="flex items-center gap-4 mb-6">
                <span className="h-[2px] w-12 bg-[#f7951e]"></span>
                <span className="text-xs font-bold text-[#f7951e] tracking-[0.25em] uppercase">
                  {text.label}
                </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-none text-black">
              {text.title}
            </h1>
          </ScrollBasedAnimation>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          
          {/* LEFT: INFO */}
          <div className="lg:col-span-4 space-y-12">
            <ScrollBasedAnimation direction="up" delay={0.1}>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                {text.desc}
              </p>
            </ScrollBasedAnimation>

            <div className="space-y-8">
               {[
                 { label: isArabic ? "المكتب" : "Studio", val: text.address },
                 { label: isArabic ? "تواصل" : "Contact", val: text.contact_email },
                 { label: isArabic ? "هاتف" : "Call", val: text.contact_phone },
               ].map((item, i) => (
                 <ScrollBasedAnimation key={i} direction="up" delay={0.2 + (i * 0.1)}>
                    <div className="group border-b border-gray-300 pb-6 hover:border-[#f7951e] transition-colors duration-500">
                       <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 group-hover:text-[#f7951e] transition-colors">
                         {item.label}
                       </span>
                       <p className="text-xl font-medium text-black">
                         {item.val}
                       </p>
                    </div>
                 </ScrollBasedAnimation>
               ))}
            </div>
          </div>

          {/* RIGHT: FORM */}
          <div className="lg:col-span-8 bg-white lg:pl-12">
             <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                
                {/* Input Fields */}
                {[
                  { name: "name", type: "text", placeholder: text.name },
                  { name: "email", type: "email", placeholder: text.email },
                  { name: "phone", type: "tel", placeholder: text.phone },
                ].map((field, i) => (
                  <ScrollBasedAnimation key={field.name} direction="up" delay={0.2 + (i * 0.1)} className="relative group">
                    <label 
                      className={`block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                        focusedField === field.name || formData[field.name] ? "text-[#f7951e]" : "text-gray-400"
                      }`}
                    >
                      {field.placeholder}
                    </label>
                    
                    {/* VISIBILITY FIX: 
                        - text-black: Ensures typed text is dark.
                        - border-gray-300: Makes the default line visible.
                        - focus:border-black: Darkens line on focus (before orange animation).
                    */}
                    <input 
                      type={field.type}
                      name={field.name}
                      onFocus={() => setFocusedField(field.name)}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 py-4 text-2xl text-black placeholder:text-gray-300 focus:outline-none focus:border-black transition-colors duration-300"
                    />
                    
                    {/* Animated Orange Underline */}
                    <div 
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#f7951e] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        focusedField === field.name ? "w-full" : "w-0"
                      }`} 
                    />
                  </ScrollBasedAnimation>
                ))}

                {/* Message Area */}
                <ScrollBasedAnimation direction="up" delay={0.5} className="relative group">
                    <label 
                      className={`block text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                        focusedField === "message" || formData.message ? "text-[#f7951e]" : "text-gray-400"
                      }`}
                    >
                      {text.message}
                    </label>
                    <textarea 
                      name="message"
                      rows={4}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-gray-300 py-4 text-2xl text-black placeholder:text-gray-300 focus:outline-none focus:border-black resize-none transition-colors duration-300"
                    />
                    <div className={`absolute bottom-0 left-0 h-[2px] bg-[#f7951e] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${focusedField === "message" ? "w-full" : "w-0"}`} />
                </ScrollBasedAnimation>

                {/* Status Messages */}
                {submitStatus && (
                  <div className={`text-center py-3 px-6 rounded-lg border ${
                    submitStatus === 'success'
                      ? 'bg-green-50 text-green-800 border-green-200'
                      : 'bg-red-50 text-red-800 border-red-200'
                  }`}>
                    {submitStatus === 'success' ? text.success : text.error}
                  </div>
                )}

                {/* Submit Button */}
                <ScrollBasedAnimation direction="up" delay={0.6}>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group flex items-center gap-6 text-xl font-bold uppercase tracking-widest text-black hover:text-[#f7951e] disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-300 mt-4"
                    >
                        <span>{isSubmitting ? text.sending : text.btn}</span>
                        <span className={`w-16 h-[1px] bg-black group-hover:bg-[#f7951e] disabled:bg-gray-400 transition-all duration-300 group-hover:w-24`} />
                        {!isSubmitting && (
                          <svg
                            className={`w-6 h-6 transform transition-transform duration-500 ${isArabic ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'}`}
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                          >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        )}
                    </button>
                </ScrollBasedAnimation>

             </form>
          </div>

        </div>

      </div>
      
    </section>
  );
}