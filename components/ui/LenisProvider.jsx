"use client";

import { useState, useEffect, createContext, useContext } from "react";
import Lenis from "lenis";

const LenisContext = createContext(null);

export function useLenis() {
  return useContext(LenisContext);
}

export default function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const lenisInstance = new Lenis({
      lerp: 0.1, // smoother + lighter than duration easing
      smooth: true,
      smoothWheel: true,
      smoothTouch: false, // disable smoothing on mobile = no lag on iOS
    });

    setLenis(lenisInstance);

    const raf = (time) => {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    return () => {
      lenisInstance.destroy();
    };
  }, []);

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}
