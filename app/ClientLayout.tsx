"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { Toaster } from "sonner";
import { AnimatePresence, motion, LazyMotion } from "framer-motion";

// Components
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import SplashScreen from "./SplashScreen";
import ScrollProgressBar from "@/components/layouts/ScrollProgressBar";
import BackToTop from "@/components/layouts/BackToTop";
import ContactSection from "@/components/layouts/ContactSection";
import Stories from "@/components/layouts/Stories";
import SkipLink from "@/components/layouts/SkipLink";

// Helper to load animation features
const loadFeatures = () =>
  import("@/components/utils/domAnimation").then((res) => res.default);

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    if (!showSplash) {
      window.scrollTo(0, 0);
    }
  }, [pathname, showSplash]);

  return (
    <>
      <AnimatePresence mode="wait">
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>
      
      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col min-h-screen"
        >
          <ScrollProgressBar /> 
          <SkipLink />
          <Navbar />

          <LazyMotion features={loadFeatures}>
             <main className="flex-grow">
               {children}
             </main>
          </LazyMotion>
          
          {/* Global Components */}
          <ContactSection />
          <Stories />
          <Footer />
          <BackToTop />
          <Toaster position="top-center" toastOptions={{ duration: 4000 }} richColors />
        </motion.div>
      )}
    </>
  );
}