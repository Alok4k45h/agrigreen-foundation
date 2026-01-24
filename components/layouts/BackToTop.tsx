"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button only after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility, { passive: true });
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ y: -5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          aria-label="Scroll back to top"
          className="fixed bottom-8 right-8 z-100 p-4 rounded-full bg-nature text-black shadow-lg shadow-nature/30 border border-white/20 backdrop-blur-md group hover:bg-white hover:text-nature transition-all"
        >
          {/* Icon */}
          <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />

          {/* Pulse Ring */}
          <span className="absolute inset-0 rounded-full border border-white/40 animate-ping opacity-30 pointer-events-none"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
