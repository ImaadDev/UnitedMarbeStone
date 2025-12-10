"use client";

import React, { useState } from "react";

const SOCIAL_LINKS = [
  // 1. THE TRIGGER (The "Connect" Icon) - Stays at the bottom
  {
    name: "Trigger",
    href: null,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
  // 2. SOCIAL LINKS (Reveal upwards)
  // Order: Bottom -> Top
  {
    name: "WhatsApp",
    href: "https://wa.me/966510783050", 
    color: "#25D366", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" /><path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" /></svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "https://twitter.com",
    color: "#1DA1F2", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
    ),
  },
  {
    name: "TikTok",
    href: "https://tiktok.com",
    color: "#fe2c55", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M21 7.917v4.034a9.948 9.948 0 0 1 -5 -1.951v4.5a6.5 6.5 0 1 1 -8 -6.326v4.326a2.5 2.5 0 1 0 4 2v-11.5h4.083a6.005 6.005 0 0 0 4.917 4.917z" /></svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://instagram.com",
    color: "#E1306C", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="4" /><circle cx="12" cy="12" r="3" /><line x1="16.5" y1="7.5" x2="16.5" y2="7.501" /></svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://facebook.com",
    color: "#1877F2", 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" /></svg>
    ),
  },
];

export default function FixedSocials() {
  const [isOpen, setIsOpen] = useState(false);
  
  const trigger = SOCIAL_LINKS[0];
  const links = SOCIAL_LINKS.slice(1);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    // Container: Fixed bottom right
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col-reverse items-center gap-3">
      
      {/* 1. THE TRIGGER BUTTON (Click/Tap to Toggle) */}
      <button 
        onClick={toggleMenu}
        aria-label="Toggle Social Menu"
        className={`
          relative z-20 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-500
          ${isOpen 
            ? 'bg-[#f7951e] border-[#f7951e] text-white rotate-180 shadow-[0_0_20px_rgba(247,149,30,0.5)]' 
            : 'bg-[#212930] border border-[#f7951e]/30 text-[#f7951e] hover:border-[#f7951e]'
          }
        `}
      >
        {/* Icon Switching Logic */}
        <div className="relative w-6 h-6">
           {/* Original Icon (Fade out when open) */}
           <div className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
             {trigger.icon}
           </div>
           
           {/* Close (X) Icon (Fade in when open) */}
           <div className={`absolute inset-0 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
             </svg>
           </div>
        </div>
      </button>

      {/* 2. THE HIDDEN LINKS (Reveal upwards based on State) */}
      {links.map((link, i) => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          // Conditional classes based on 'isOpen'
          className={`
            relative w-12 h-12 rounded-full bg-[#212930] border border-white/10 text-gray-400 flex items-center justify-center 
            transition-all ease-[cubic-bezier(0.25,1,0.5,1)] duration-500
            hover:scale-110 hover:bg-white/5
            group/link
            ${isOpen 
              ? 'translate-y-0 opacity-100 pointer-events-auto scale-100' 
              : 'translate-y-10 opacity-0 pointer-events-none scale-90'
            }
          `}
          // Dynamic styles for stagger delay and hover color
          style={{ 
            transitionDelay: isOpen ? `${i * 60}ms` : '0ms', // Stagger only on open
            '--hover-color': link.color,
            borderColor: 'var(--hover-color)', // Apply specific border color on hover logic via CSS below or inline
            color: 'var(--hover-color)' // Apply specific text color
          }}
        >
          {/* We use inline style for hover colors to keep it clean, but standard hover:text-[color] works if specific */}
          <span 
            className="w-5 h-5 transition-colors duration-300"
            style={{ color: isOpen ? undefined : link.color }} // Optional: keep colored or gray
          >
            {link.icon}
          </span>
          
          {/* Tooltip (Appears on Left) */}
          <span className={`
            absolute right-full mr-4 bg-white/10 backdrop-blur-md border border-white/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-white rounded 
            transition-all duration-300 whitespace-nowrap
            ${isOpen ? 'group-hover/link:opacity-100 group-hover/link:translate-x-0' : 'opacity-0'}
            opacity-0 -translate-x-2 pointer-events-none
          `}>
            {link.name}
          </span>
        </a>
      ))}

      {/* A subtle connector line behind the icons */}
      <div 
        className={`
          absolute bottom-6 left-1/2 -translate-x-1/2 w-[1px] bg-white/10 z-0 transition-all duration-700 delay-100 ease-in-out
          ${isOpen ? 'h-[calc(100%-3rem)]' : 'h-0'}
        `} 
      />

    </div>
  );
}