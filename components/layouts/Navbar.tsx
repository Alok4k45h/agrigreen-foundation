"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";

const NAV_LINKS = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/get-involved", label: "Get Involved" },
  { path: "/resources", label: "Resources" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "py-3 backdrop-blur-xl border-white/5 shadow-lg"
            : "bg-transparent py-3 border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* --- 1. Logo Section --- */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="relative w-40 h-20 transition-transform group-hover:scale-105">
              <Image
                src="https://res.cloudinary.com/alokkumar07/image/upload/c_crop,ar_16:9,e_improve,e_sharpen/v1765222388/Agrigreen/AgriLogoremovebg_nee5jk.png"
                alt="Agri Green Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* --- 2. Desktop Navigation (The Capsule) --- */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center bg-white/5 rounded-full p-1.5 border backdrop-blur-md border-gradient-to-r from-nature via-agri to-climate text-white font-medium text-sm transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.4)]">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      isActive ? "text-emerald-950" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-white rounded-full shadow-sm"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* --- 3. Action Button (Donate) --- */}
          <div className="hidden lg:block">
            <Link href="/get-involved#DonationBankDetails">
              <button className="group relative px-6 py-2.5 rounded-full border border-white/20 hover:border-emerald-500 bg-transparent text-white font-medium text-sm transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2">
                <Heart className="w-4 h-4 text-emerald-500 fill-transparent group-hover:fill-emerald-500 transition-colors" />
                <span>Donate</span>
              </button>
            </Link>
          </div>

          {/* --- Mobile Menu Toggle --- */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative z-50 p-2 text-gray-300 hover:text-white transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.header>

      {/* --- Mobile Fullscreen Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#070e0b] flex flex-col pt-32 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-bold ${
                    pathname === link.path ? "text-emerald-400" : "text-gray-400"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-white/10 my-4" />
              <Link 
                href="/get-involved#DonationBankDetails"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-emerald-600 text-white text-center rounded-xl font-bold text-lg"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}