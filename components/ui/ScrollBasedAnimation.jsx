"use client";

import React, { useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollBasedAnimation = ({
  children,
  threshold = 0.2,
  delay = 0,
  duration = 0.6,
  offset = 60,
  direction = "up",
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const animatedOnce = useRef(false);

  // Determine offset direction
  const getOffset = () => {
    switch (direction) {
      case "up": return { y: offset };
      case "down": return { y: -offset };
      case "left": return { x: offset };
      case "right": return { x: -offset };
      default: return { y: offset };
    }
  };

  const variants = {
    hidden: { opacity: 0, ...getOffset() },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration, delay, ease: "easeOut" },
    },
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        
        if (entry.isIntersecting && !animatedOnce.current) {
          animatedOnce.current = true;
          requestAnimationFrame(() => {
            controls.start("visible");
          });
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [controls, threshold]);

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollBasedAnimation;
