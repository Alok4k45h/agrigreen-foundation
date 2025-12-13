"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring physics for the bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1.5 z-[100] origin-left bg-transparent"
      style={{ scaleX }}
    >
      {/* Tri-Color Gradient Bar */}
      <div className="h-full w-full bg-gradient-to-r from-nature via-agri to-climate shadow-[0_0_15px_rgba(34,197,94,0.6)]" />
      
      {/* Leading Edge Glow */}
      <div className="absolute top-0 right-0 -mt-0.5 -mr-1 h-2.5 w-10 bg-white/80 blur-[4px] rounded-full opacity-60" />
    </motion.div>
  );
}