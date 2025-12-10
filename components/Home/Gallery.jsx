"use client";

import { useState, useEffect, useCallback } from "react";
import ScrollBasedAnimation from "@/components/ui/ScrollBasedAnimation";
import { usePathname } from "next/navigation";
import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

export default function Projects() {
  const pathname = usePathname();
  const isArabic = pathname?.startsWith("/ar");

  // --- STATE ---
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null); // Stores the full project object
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Fetch projects from Sanity
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const query = `*[_type == "work"] | order(_createdAt desc) {
          _id,
          category,
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

  // --- DERIVED DATA ---
  const text = {
    sub: isArabic ? "معرض أعمالنا" : "Selected Works",
    title: isArabic ? "تميز في كل مشروع" : "Excellence in Execution",
    all: isArabic ? "الكل" : "All",
    residential: isArabic ? "سكني" : "Residential",
    commercial: isArabic ? "تجارـي" : "Commercial",
    viewCase: isArabic ? "عرض جميع المعرض" : "View All Gallery",
    close: isArabic ? "إغلاق" : "Close",
  };

  const filteredProjects = filter === "all"
    ? projects
    : projects.filter(p => p.category === filter);

  // --- MODAL LOGIC ---
  
  const openModal = (project) => {
    setSelectedProject(project);
    setCurrentSlideIndex(0);
    // Prevent background scrolling
    document.body.style.overflow = "hidden";
  };

  const closeModal = useCallback(() => {
    setSelectedProject(null);
    setCurrentSlideIndex(0);
    document.body.style.overflow = "auto";
  }, []);

  const nextSlide = useCallback((e) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setCurrentSlideIndex((prev) => 
      prev === selectedProject.gallery.length - 1 ? 0 : prev + 1
    );
  }, [selectedProject]);

  const prevSlide = useCallback((e) => {
    e?.stopPropagation();
    if (!selectedProject) return;
    setCurrentSlideIndex((prev) => 
      prev === 0 ? selectedProject.gallery.length - 1 : prev - 1
    );
  }, [selectedProject]);

  // Keyboard Navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return;
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") isArabic ? prevSlide() : nextSlide();
      if (e.key === "ArrowLeft") isArabic ? nextSlide() : prevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, closeModal, nextSlide, prevSlide, isArabic]);

  return (
    <section 
      id="projects" 
      className="w-full py-32 bg-[#212930] text-white overflow-hidden"
      dir={isArabic ? "rtl" : "ltr"}
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER & FILTER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-10">
          <ScrollBasedAnimation direction="up" duration={0.8}>
            <div>
               <span className="text-[#f7951e] font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                 {text.sub}
               </span>
               <h2 className="text-4xl md:text-6xl font-bold leading-none tracking-tight">
                 {text.title}
               </h2>
            </div>
          </ScrollBasedAnimation>

          <ScrollBasedAnimation direction="up" duration={0.8} delay={0.1}>
            <div className="flex items-center gap-8 text-sm font-medium border-b border-white/10 pb-4">
               {[
                 { key: "all", label: text.all },
                 { key: "residential", label: text.residential },
                 { key: "commercial", label: text.commercial }
               ].map((tab) => (
                 <button
                   key={tab.key}
                   onClick={() => setFilter(tab.key)}
                   className={`uppercase tracking-widest transition-colors duration-300 ${
                     filter === tab.key ? "text-[#f7951e]" : "text-gray-500 hover:text-white"
                   }`}
                 >
                   {tab.label}
                 </button>
               ))}
            </div>
          </ScrollBasedAnimation>
        </div>

        {/* PROJECTS GRID */}
        {loading ? (
          <div className="text-center py-20">
            <div className="text-white/50">{isArabic ? "جاري التحميل..." : "Loading..."}</div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-white/50 text-xl">{isArabic ? "لا توجد أعمال متاحة" : "No work available"}</div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24">
            {filteredProjects.map((project, i) => (
            <div
              key={project._id}
              className={i % 2 !== 0 ? "md:mt-32" : ""}
            >
              <ScrollBasedAnimation 
                direction="up" 
                duration={0.8} 
                delay={i * 0.1}
                className="w-full"
              >
                <div 
                  className="group cursor-pointer"
                  onClick={() => openModal(project)}
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-900 mb-8">
                    <img
                      src={urlFor(project.thumbnail).width(800).height(600).url()}
                      alt={isArabic ? project.title_ar : project.title_en}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[2000ms] ease-[cubic-bezier(0.25,1,0.5,1)] will-change-transform"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* View Gallery Icon Overlay */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                    </div>
                  </div>

                  <div className="flex items-start justify-between border-t border-white/10 pt-6 transition-colors duration-500 group-hover:border-[#f7951e]">
                    <div>
                      <span className="block text-xs font-mono text-gray-500 uppercase tracking-widest mb-2 group-hover:text-gray-300 transition-colors">
                        {isArabic ? project.location_ar : project.location_en}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold leading-tight group-hover:text-[#f7951e] transition-colors duration-300">
                        {isArabic ? project.title_ar : project.title_en}
                      </h3>
                    </div>
                    <span className="text-4xl font-light text-white/10 group-hover:text-white/30 transition-colors duration-500">
                      0{i + 1}
                    </span>
                  </div>
                </div>
              </ScrollBasedAnimation>
            </div>
          ))}
        </div>
      )}

      {/* FOOTER CTA */}
        <div className="mt-32 text-center">
             <ScrollBasedAnimation direction="up" duration={0.6}>
                <a href={isArabic ? '/ar/gallery' : '/en/gallery'} className="inline-block py-4 px-12 border border-white/20 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                    {text.viewCase}
                </a>
             </ScrollBasedAnimation>
        </div>
      </div>

      {/* =======================
          FULLSCREEN LIGHTBOX MODAL
         ======================= */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl animate-in fade-in duration-300"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button 
            onClick={closeModal} 
            className="absolute top-6 right-6 z-50 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-all"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Controls */}
          <button 
            onClick={isArabic ? nextSlide : prevSlide}
            className="absolute left-4 z-50 p-4 text-white/50 hover:text-white hover:scale-110 transition-all hidden md:block"
          >
             <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
             </svg>
          </button>
          
          <button 
            onClick={isArabic ? prevSlide : nextSlide}
            className="absolute right-4 z-50 p-4 text-white/50 hover:text-white hover:scale-110 transition-all hidden md:block"
          >
             <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
             </svg>
          </button>

          {/* Main Image Container */}
          <div 
            className="relative w-full h-full max-w-6xl max-h-[85vh] p-4 flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          >
            <div className="relative w-full h-full">
                <img
                  src={urlFor(selectedProject.gallery[currentSlideIndex]).width(1600).url()}
                  alt="Gallery"
                  className="w-full h-full object-contain select-none"
                />
            </div>
            
            {/* Project Details in Modal */}
            <div className="absolute bottom-4 left-0 w-full text-center pointer-events-none">
                <h3 className="text-xl font-bold text-white drop-shadow-md">
                   {isArabic ? selectedProject.title_ar : selectedProject.title_en}
                </h3>
                <p className="text-white/70 text-sm font-mono mt-1">
                  {currentSlideIndex + 1} / {selectedProject.gallery.length}
                </p>
            </div>
          </div>

          {/* Thumbnails Strip */}
          <div className="absolute bottom-6 flex gap-2 overflow-x-auto max-w-[90vw] z-40 p-2" onClick={(e) => e.stopPropagation()}>
             {selectedProject.gallery.map((img, idx) => (
               <button
                 key={idx}
                 onClick={() => setCurrentSlideIndex(idx)}
                 className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 border-2 transition-all duration-300 ${
                    currentSlideIndex === idx ? "border-[#f7951e] scale-110 opacity-100" : "border-transparent opacity-50 hover:opacity-100"
                 }`}
               >
                 <img src={urlFor(img).width(200).height(200).url()} className="w-full h-full object-cover" alt="thumb" />
               </button>
             ))}
          </div>

        </div>
      )}

    </section>
  );
}