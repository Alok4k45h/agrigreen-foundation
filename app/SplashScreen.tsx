"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SplashScreen() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 5000); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showSplash && (
        <motion.div
          className="fixed inset-0 z-100 flex items-center justify-center"

          style={{
        backgroundImage:
          "url('https://www.shutterstock.com/image-vector/young-plant-sprouts-on-technology-600nw-2581879087.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
          
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          aria-label="Splash Screen"
        >
          <motion.div
            className="text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/agriLogoFull_xa4u0r.png"
              alt="AgriGreen Logo"
              className="mx-auto w-60 h-60 mb-4 bg-white rounded-full shadow-lg"
            />
            <h1 className="text-5xl  text-white font-bold mb-4 drop-shadow-xl font-[Playfair_Display]"> Welcome to 
            <span className="text-yellow-400 pl-2 text-6xl">a</span>gri
            <span className="text-green-500 text-6xl">G</span>reen
          </h1>
            <p className="text-white mt-2 font-[Roboto] text-2xl">
              Uniting Nature, Climate & Agriculture
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
