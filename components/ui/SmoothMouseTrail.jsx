'use client';

import { useEffect, useRef } from "react";

export default function SmoothMouseTrail({
  color = "white", // The base color (if not using rainbow/difference)
  size = 20,       // The size of the head particle
  length = 15,     // Number of nodes in the tail
  mixBlend = false // Set true to invert colors over text/backgrounds
}) {
  // We use refs to hold the trail elements so we can manipulate them directly
  // without triggering React re-renders (crucial for performance).
  const trailRefs = useRef([]);
  const mouse = useRef({ x: 0, y: 0 });
  const isMoving = useRef(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    // Initialize trail positions at 0,0
    const points = Array(length).fill().map(() => ({ x: 0, y: 0 }));

    const handleMouseMove = (e) => {
      isMoving.current = true;
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      // Reset the idle timer
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        isMoving.current = false;
      }, 3000); // Stop animation loop after 3s of inactivity to save battery
    };

    window.addEventListener("mousemove", handleMouseMove);

    // The Animation Loop
    const animate = () => {
      // 1. Move the first point (Head) towards the mouse
      // We use a "lerp" (Linear Interpolation) for the head to give it a tiny bit of weight
      // smoothing = 1 means instant, 0.1 means very laggy.
      let head = points[0];
      head.x += (mouse.current.x - head.x) * 0.45;
      head.y += (mouse.current.y - head.y) * 0.45;

      // Apply result to DOM
      if (trailRefs.current[0]) {
        trailRefs.current[0].style.left = `${head.x}px`;
        trailRefs.current[0].style.top = `${head.y}px`;
      }

      // 2. Move the rest of the points (Tail)
      // Each point follows the one before it
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];

        // This creates the "Spring" effect. 
        // 0.25 is the tension speed.
        curr.x += (prev.x - curr.x) * 0.25;
        curr.y += (prev.y - curr.y) * 0.25;

        const node = trailRefs.current[i];
        if (node) {
          node.style.left = `${curr.x}px`;
          node.style.top = `${curr.y}px`;
        }
      }

      requestAnimationFrame(animate);
    };

    // Start loop
    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [length]);

  return (
    <>
      {/* We render {length} number of divs. 
        We use `fixed` positioning so it floats over everything.
      */}
      {Array.from({ length }).map((_, index) => {
        // Calculate scale: Head is 1, Tail approaches 0
        const scale = 1 - index / length;
        
        return (
          <div
            key={index}
            ref={(el) => (trailRefs.current[index] = el)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: "50%",
              pointerEvents: "none",
              zIndex: 9999,
              
              // Visual styling for the "Beautiful" look
              opacity: (1 - index / length) * 0.6, // Fade out tail
              transform: `translate(-50%, -50%) scale(${scale})`, // Center and scale
              filter: `blur(${index * 0.5}px)`, // Add blur to the end of tail for "gaseous" look
              mixBlendMode: mixBlend ? "difference" : "normal",
              willChange: "transform", // Hardware Acceleration hint
            }}
          />
        );
      })}
    </>
  );
}