"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import CTASection from "../Home/CTA";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function ProjectsPage() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  // State for data
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // State for Modal
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Fetch projects from Sanity
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "work"] | order(_createdAt desc) {
          _id,
          title_en,
          title_ar,
          location_en,
          location_ar,
          thumbnail,
          gallery
        }`;
        const data = await client.fetch(query);
        setProjects(data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const pageText = {
    label: isArabic ? "معرض الأعمال" : "Our Portfolio",
    title: isArabic ? "مشاريع مختارة" : "Selected Projects",
    intro: isArabic
      ? "جولة في بعض أرقى مشاريعنا التي تدمج بين الفخامة والدقة الهندسية."
      : "A tour through some of our finest projects merging luxury with engineering precision.",
    view: isArabic ? "عرض الصور" : "View Gallery"
  };

  // --- MODAL LOGIC ---

  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = "hidden"; // Lock body scroll
  };

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    document.body.style.overflow = "auto"; // Unlock body scroll
  }, []);

  const nextSlide = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject]);

  const prevSlide = useCallback(() => {
    if (!selectedProject) return;
    setCurrentImageIndex((prev) => 
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  }, [selectedProject]);

  // Keyboard Navigation
  useEffect(() => {
    if (!selectedProject) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModal();
      // In RTL, Right Arrow means "Previous" logically
      if (e.key === "ArrowRight") isArabic ? prevSlide() : nextSlide();
      // In RTL, Left Arrow means "Next" logically
      if (e.key === "ArrowLeft") isArabic ? nextSlide() : prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, closeModal, nextSlide, prevSlide, isArabic]);

  return (
    <section 
      className="min-h-screen mt-20 w-full bg-white text-black py-32 relative" 
      dir={isArabic ? "rtl" : "ltr"}
    >
      
      <div className="w-full mx-auto px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 border-b border-gray-100 pb-10">
          <div className="max-w-2xl">
            <ScrollBasedAnimation direction="up" duration={0.8}>
              <div className="flex items-center gap-4 mb-6">
                 <span className="h-[2px] w-12 bg-[#f7951e]"></span>
                 <span className="text-xs font-bold text-[#f7951e] tracking-[0.25em] uppercase">
                   {pageText.label}
                 </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight leading-none text-black">
                {pageText.title}
              </h1>
            </ScrollBasedAnimation>

            <ScrollBasedAnimation direction="up" duration={0.8} delay={0.1}>
              <p className="text-xl text-gray-500 font-light mt-8 leading-relaxed">
                {pageText.intro}
              </p>
            </ScrollBasedAnimation>
          </div>
        </div>

        {/* PROJECTS GRID */}
        {loading ? (
          <div className="text-center py-20">
            <div className="text-gray-500">{isArabic ? "جاري التحميل..." : "Loading..."}</div>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-500 text-xl">{isArabic ? "لا توجد أعمال متاحة" : "No work available"}</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-gray-100 border border-gray-100">
            {projects.map((project, i) => (
            <ScrollBasedAnimation key={i} direction="up" duration={0.8} delay={i * 0.05} className="w-full h-full">
              
              {/* Project Card Trigger */}
              <div 
                onClick={() => openModal(project)}
                className="group relative w-full aspect-[4/3] bg-gray-50 overflow-hidden cursor-pointer"
              >
                {/* Image Layer (Hardware Accelerated Scale) */}
                <div className="absolute inset-0 w-full h-full will-change-transform transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105">
                   <Image
                    src={urlFor(project.thumbnail).width(800).height(600).url()}
                    alt={isArabic ? project.title_ar : project.title_en}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-all duration-700 filter grayscale group-hover:grayscale-0"
                  />
                </div>

                 {/* Overlay & Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                <div className="absolute inset-0 p-8 flex flex-col justify-end items-start text-white">
                    <span className="font-mono text-xs text-[#f7951e] uppercase tracking-widest mb-2">
                        {isArabic ? project.location_ar : project.location_en}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight transform transition-transform duration-500 group-hover:-translate-y-2">
                        {isArabic ? project.title_ar : project.title_en}
                    </h3>
                    
                    {/* View Button */}
                    <div className={`mt-4 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider opacity-0 transform transition-all duration-500 group-hover:opacity-100 delay-100 ${isArabic ? 'translate-x-4 group-hover:translate-x-0' : '-translate-x-4 group-hover:translate-x-0'}`}>
                        <span>{pageText.view}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-4 h-4 ${isArabic ? 'rotate-180' : ''}`}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </div>
                </div>
              </div>
            </ScrollBasedAnimation>
          ))}
        </div>
      )}

    </div>

    {/* =========================================
        CUSTOM LIGHTBOX MODAL (High Performance)
    ========================================= */}
      {selectedProject && (
        // 1. Backdrop - Solid opacity instead of blur for performance
        <div 
          className="fixed inset-0 z-[100] bg-[#050505] bg-opacity-95 flex flex-col items-center justify-center transition-opacity duration-300 ease-out"
          onClick={closeModal} // Close on background click
          dir={isArabic ? "rtl" : "ltr"}
        >
          
          {/* 2. Close Button */}
          <button 
            onClick={closeModal} 
            className="absolute top-6 right-6 z-[110] p-2 text-white/50 hover:text-white transition-colors duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* 3. Navigation Arrows (Hidden on small mobile) */}
          {/* Prev Button (Left Side) */}
          <button 
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[110] p-4 text-white/30 hover:text-white hover:scale-110 transition-all duration-300 hidden md:block"
          >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-10 h-10 ${isArabic ? 'rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
          </button>
          {/* Next Button (Right Side) */}
          <button 
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[110] p-4 text-white/30 hover:text-white hover:scale-110 transition-all duration-300 hidden md:block"
          >
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-10 h-10 ${isArabic ? 'rotate-180' : ''}`}>
               <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
             </svg>
          </button>


          {/* 4. Main Image Container */}
          <div 
            className="relative w-full h-full max-w-6xl max-h-[80vh] p-4 flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          >
            {/* Using a key here forces React to remount the image component when index changes, ensuring smooth fade transition */}
            <div key={currentImageIndex} className="relative w-full h-full animate-in fade-in duration-500">
                 <Image
                  src={urlFor(selectedProject.gallery[currentImageIndex]).width(1600).url()}
                  alt="Gallery Image"
                  fill
                  className="object-contain select-none pointer-events-none"
                  priority // Load gallery images fast
                />
            </div>
          </div>

          {/* 5. Modal Footer Info */}
          <div className="absolute bottom-0 left-0 w-full p-6 text-center text-white pointer-events-none">
             <h3 className="text-xl font-bold mb-2">
                {isArabic ? selectedProject.title_ar : selectedProject.title_en}
             </h3>
             {/* Counter */}
             <p className="font-mono text-xs text-[#f7951e] tracking-widest">
                {currentImageIndex + 1} / {selectedProject.gallery.length}
             </p>
          </div>

          {/* 6. Thumbnails Strip (Optional - Clickable) */}
          <div 
            className="absolute bottom-20 flex gap-2 p-2 z-[110] overflow-x-auto max-w-full no-scrollbar" 
            onClick={(e) => e.stopPropagation()}
          >
            {selectedProject.gallery.map((img, idx) => (
                <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative w-16 h-12 md:w-20 md:h-16 flex-shrink-0 border-2 transition-all duration-300 overflow-hidden ${
                    currentImageIndex === idx ? "border-[#f7951e] opacity-100" : "border-transparent opacity-40 hover:opacity-80"
                }`}
                >
                <Image src={urlFor(img).width(200).height(200).url()} alt="thumb" fill className="object-cover" />
                </button>
            ))}
          </div>

        </div>
      )}

      <CTASection/>

    </section>
  );
}