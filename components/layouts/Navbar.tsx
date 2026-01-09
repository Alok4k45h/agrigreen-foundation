"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Heart } from "lucide-react";
import { ModeToggle } from "@/components/layouts/ModeToggle";

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
            ? "py-3 backdrop-blur-xl border-b border-border/40 bg-background/80 shadow-sm"
            : "bg-transparent py-3 border-b border-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* --- 1. Logo Section --- */}
          <Link href="/" className="flex items-center gap-2 group z-50">
            <div className="relative w-32 h-20 transition-transform group-hover:scale-105">
              <Image
                src="https://res.cloudinary.com/alokkumar07/image/upload/c_crop,ar_16:9/v1767951109/Agrigreen/agfFullLogo_kmqmdu.png"
                alt="Agri Green Logo"
                fill
                sizes="(max-width: 768px) 120px, 140px"
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* --- 2. Desktop Navigation (The Capsule) --- */}
          <div className="hidden lg:flex items-center gap-4">
            <nav className="flex items-center bg-secondary/50 rounded-full p-1.5 border border-border/50 backdrop-blur-md text-sm font-medium transition-all hover:shadow-lg hover:shadow-primary/10">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="active-pill"
                        className="absolute inset-0 bg-primary rounded-full shadow-sm"
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* --- 3. Action Buttons --- */}
            <div className="flex items-center gap-3">
              <ModeToggle />

              <Link href="/get-involved#DonationBankDetails">
                <button className="group relative px-5 py-2.5 bg-secondary/50 rounded-full border border-input hover:border-primary hover:bg-transparent hover:text-primary text-foreground font-medium text-sm transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] flex items-center gap-2">
                  <Heart className="w-4 h-4 text-primary fill-transparent group-hover:fill-primary transition-colors" />
                  <span>Donate</span>
                </button>
              </Link>
            </div>
          </div>

          {/* --- Mobile Controls --- */}
          <div className="flex items-center gap-4 lg:hidden">
            <ModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileMenuOpen}
              className="relative z-50 p-2 text-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary rounded-md"
            >
              {isMobileMenuOpen ? (
                <X size={28} aria-hidden="true" />
              ) : (
                <Menu size={28} aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* --- Mobile Fullscreen Menu --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col pt-32 px-8 lg:hidden"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl font-bold ${
                    pathname === link.path
                      ? "text-primary"
                      : "text-muted-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="h-px bg-border my-4" />
              <Link
                href="/get-involved#DonationBankDetails"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full py-4 bg-primary text-primary-foreground text-center rounded-xl font-bold text-lg shadow-lg shadow-primary/20"
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
