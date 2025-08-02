"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About Us" },
  { path: "/get-involved", label: "Get Involved" },
  { path: "/resources", label: "Resources" },
  { path: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll effect to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-4 md:px-8 py-3 ${
        scrolled ? "bg-green-900/80 shadow-md" : "bg-transparent"
      } backdrop-blur-md`}
      
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://res.cloudinary.com/alokkumar07/image/upload/v1737283184/Agrigreen/onlyLogoAgri_mrnnfw.png"
            alt="AgriGreen Logo"
            width={40}
            height={40}
            priority
            className="rounded-full"
          />
          <span className="text-white text-lg sm:text-xl font-bold tracking-wide">
            AGRIGREEN FOUNDATION
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`text-white font-semibold hover:text-yellow-400 transition duration-200 ${
                pathname === path
                  ? "underline underline-offset-4 text-yellow-400"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/get-involved#DonationBankDetails">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
              Donate
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-white text-xl">
                ☰
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-green-900/95 p-6">
              <div className="flex flex-col items-start space-y-6 mt-10">
                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    href={path}
                    className="text-white text-lg font-medium hover:text-yellow-400 transition"
                  >
                    {label}
                  </Link>
                ))}
                <Link href="/get-involved#DonationBankDetails" >
                  <Button className="bg-yellow-400 text-black hover:bg-yellow-500">
                    Donate
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
