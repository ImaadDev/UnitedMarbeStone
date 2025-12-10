'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const Installation = () => {
    const pathname = usePathname();
    const isArabic = pathname?.startsWith("/ar");
    const [hoveredIndex, setHoveredIndex] = useState(null);
    
    // CONTENT DATA (Unchanged)
    const content = {
      serviceTitle: isArabic ? "التركيب والتصميم" : "Installation & Design",
      serviceSubtitle: isArabic ? "الخبرة التقنية" : "Technical Expertise",
      servicesList: isArabic
        ? [
            "توريـد وتركيب حجر نساك",
            "تركيب نخب أول (درجة ممتازة)",
            "نظام التثبيت الميكانيكي (الجاف)",
            "تصميم واجهات حجرية مخصصة",
            "استشارات هندسيـة وتفصيلية"
          ]
        : [
            "Supply & Installation of Nasaq",
            "Premium Grade Installation",
            "Mechanical Fixing (Dry-Fix)",
            "Custom Façade Design",
            "Architectural Consultation"
          ]
    };

    // ANIMATION VARIANTS (Unchanged for smooth motion)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: isArabic ? 20 : -20 },
        visible: { 
            opacity: 1, 
            x: 0,
            transition: { type: "spring", stiffness: 50, damping: 20 }
        }
    };

  return (
    <section className="relative w-full py-24 overflow-hidden bg-white">
        {/* Removed Decorative Background Blur */}

        <div className="container mx-auto px-6 md:px-12 lg:px-16">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
                {/* ==========================
                    TEXT & LIST SECTION
                ========================== */}
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={containerVariants}
                    className={`order-2 ${isArabic ? 'lg:order-2' : 'lg:order-1'}`}
                >
                    <motion.div variants={itemVariants} className="mb-10">
                        {/* Removed rounded-full */}
                        <span className="inline-block py-1 px-3 bg-orange-50 text-[#f7951e] font-bold uppercase tracking-wider text-[10px] md:text-xs mb-4">
                        {content.serviceSubtitle}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1]">
                        {content.serviceTitle}
                        </h2>
                    </motion.div>

                    <div className="flex flex-col border-t border-gray-100">
                        {content.servicesList.map((service, i) => (
                            <motion.div
                                key={i}
                                variants={itemVariants}
                                onMouseEnter={() => setHoveredIndex(i)}
                                onMouseLeave={() => setHoveredIndex(null)}
                                className="relative group cursor-pointer border-b border-gray-100"
                            >
                                {/* Hover Card Background - Removed rounded-xl */}
                                <motion.div 
                                    className="absolute inset-0 bg-gray-50 -z-10"
                                    initial={{ opacity: 0, scaleY: 0.9 }}
                                    animate={{ 
                                        opacity: hoveredIndex === i ? 1 : 0,
                                        scaleY: hoveredIndex === i ? 1 : 0.9
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                />

                                <div className="p-5 flex items-center justify-between">
                                    <div className="flex items-center gap-5">
                                        {/* Animated Square Point - Changed rounded-full to rounded-none (square) */}
                                        <div className={`w-1.5 h-1.5 rounded-none transition-colors duration-300 ${hoveredIndex === i ? 'bg-[#f7951e]' : 'bg-gray-300'}`} />
                                        
                                        <h3 className={`text-lg md:text-xl font-medium transition-colors duration-300 ${hoveredIndex === i ? 'text-gray-900' : 'text-gray-500'}`}>
                                            {service}
                                        </h3>
                                    </div>

                                    {/* Arrow Icon */}
                                    <motion.span 
                                        animate={{ 
                                            x: hoveredIndex === i ? (isArabic ? -5 : 5) : 0,
                                            opacity: hoveredIndex === i ? 1 : 0 
                                        }}
                                        className="text-[#f7951e] font-bold text-xl"
                                    >
                                        {isArabic ? "←" : "→"}
                                    </motion.span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* ==========================
                    IMAGE SECTION
                ========================== */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`relative h-[500px] lg:h-[600px] w-full order-1 ${isArabic ? 'lg:order-1' : 'lg:order-2'}`}
                >
                    {/* Abstract Decoration Border - Sharpened */}
                    <div className={`absolute top-4 bottom-4 w-full border border-[#f7951e] z-0 ${isArabic ? 'right-4' : 'left-4'}`} />

                    {/* Main Image Container - Removed rounded-2xl and shadow-2xl */}
                    <div className="relative h-full w-full overflow-hidden bg-gray-100 z-10">
                        {/* Removed gradient overlay for a cleaner look */}
                        
                        <Image 
                            src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260" 
                            alt="Facade Installation" 
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-[2s] hover:scale-105"
                            priority={false} 
                        />

                        {/* Floating Badge - Removed blur, shadows, and rounded corners. Added a clean border. */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            className={`absolute bottom-0 z-20 bg-white p-5 border-t border-r border-[#f7951e] max-w-[220px] ${isArabic ? 'left-0 border-l-0' : 'right-0 border-r-0'}`}
                        >
                            <p className="text-sm font-bold uppercase tracking-wider text-gray-900">
                                {isArabic ? "دقة عالية" : "High Precision"}
                            </p>
                            <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                                {isArabic ? "نضمن لك الجودة في أدق التفاصيل" : "Guaranteed quality in every detail."}
                            </p>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
  )
}

export default Installation