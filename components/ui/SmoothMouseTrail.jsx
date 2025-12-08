// SmoothMouseTrail.jsx
import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function SmoothMouseTrail({
  size = 16,
  color = "rgba(255,255,255,0.5)",
  smoothing = 0.12,
}) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const trailX = useMotionValue(0);
  const trailY = useMotionValue(0);

  // Smooth interpolation function
  const lerp = (start, end, amt) => start * (1 - amt) + end * amt;

  useEffect(() => {
    const handleMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMove);

    const loop = () => {
      trailX.set(lerp(trailX.get(), mouseX.get(), smoothing));
      trailY.set(lerp(trailY.get(), mouseY.get(), smoothing));
      requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, [mouseX, mouseY, trailX, trailY, smoothing]);

  const x = useTransform(trailX, (v) => v - size / 2);
  const y = useTransform(trailY, (v) => v - size / 2);

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        x,
        y,
        width: size,
        height: size,
        pointerEvents: "none",
        borderRadius: "50%",
        background: color,
        filter: "blur(6px)",
      }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    />
  );
}
