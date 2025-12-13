"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen({ onComplete }: { onComplete?: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Lock scroll during splash
    document.body.style.overflow = "hidden";

    // Exit timer
    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto";
      if (onComplete) onComplete();
    }, 4500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden"
          exit="exit"
        >
          {/* --- Background Layers (Matches Global Theme) --- */}
          <div className="absolute inset-0 z-0">
            {/* Gradient Base */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-[#05110d] to-black" />
            
            {/* Cyber Grid */}
            <div className="absolute inset-0 bg-grid-pattern [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-30" />
            
            {/* Grain Texture */}
            <div className="absolute inset-0 bg-grain-overlay opacity-20 mix-blend-overlay" />
          </div>

          {/* --- Central Content --- */}
          <div className="relative z-10 flex flex-col items-center px-4">
            
            {/* SVG Growing Tree Animation */}
            <svg
              width="200"
              height="250"
              viewBox="0 0 200 250"
              className="mb-8 overflow-visible"
            >
              {/* 1. The Seed (Solar Gold Accent) */}
              <motion.circle
                cx="100"
                cy="230"
                r="6"
                className="fill-accent"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "backOut" }}
              />

              {/* 2. The Trunk (Neon Green Stroke) */}
              <motion.path
                d="M100 230 Q100 150 100 100"
                fill="transparent"
                className="stroke-primary/60"
                strokeWidth="4"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              />

              {/* 3. Left Branch */}
              <motion.path
                d="M100 160 Q70 140 60 110"
                fill="transparent"
                className="stroke-primary/60"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: [0.4, 0, 0.2, 1] }}
              />

              {/* 4. Right Branch */}
              <motion.path
                d="M100 130 Q130 110 140 80"
                fill="transparent"
                className="stroke-primary/60"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 1.4, ease: [0.4, 0, 0.2, 1] }}
              />

              {/* 5. Leaves (Neon Green Fill) */}
              {/* Top Leaf */}
              <motion.path
                d="M100 100 Q80 70 100 40 Q120 70 100 100"
                className="fill-primary drop-shadow-[0_0_15px_rgba(29,204,91,0.5)]"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.8, type: "spring" }}
                style={{ originX: "50%", originY: "100%" }}
              />
              {/* Left Leaf */}
              <motion.path
                d="M60 110 Q40 90 50 70 Q70 80 60 110"
                className="fill-primary"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.0, type: "spring" }}
                style={{ originX: "50%", originY: "100%" }}
              />
              {/* Right Leaf */}
              <motion.path
                d="M140 80 Q160 60 150 40 Q130 50 140 80"
                className="fill-primary"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 2.2, type: "spring" }}
                style={{ originX: "50%", originY: "100%" }}
              />
            </svg>

            {/* Logo & Text Reveal */}
            <motion.div
              initial="hidden"
              animate="visible"
              className="text-center space-y-6"
            >
              <div className="relative w-60 h-60 mx-auto mb-2">
                <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
                <Image
                  src="https://res.cloudinary.com/alokkumar07/image/upload/c_crop,ar_16:9,e_improve,e_sharpen/v1765222388/Agrigreen/AgriLogoremovebg_nee5jk.png"
                  alt="Agri Green Logo"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            
              <h1
              id="home-banner-heading"
              className="text-3xl font-bold leading-tight text-white md:text-4xl drop-shadow-lg"
            >
              Introducing the world of
              <br />
              <span className="bg-gradient-to-r from-amber-300 to-emerald-400 bg-clip-text text-4xl text-transparent md:text-6xl drop-shadow-2xl">
                agri🌾Green
              </span>
            </h1>
              
              <p className="max-w-md mx-auto text-sm md:text-base font-sans text-gray-400 uppercase tracking-widest leading-relaxed border-t border-white/10 pt-4">
                Uniting Nature, Climate & Agriculture <br/> for a Sustainable Tomorrow
              </p>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}