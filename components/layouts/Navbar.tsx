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
        scrolled ? " bg-amber-50 shadow-md border-b-4 border-green-600" : "backdrop-blur-md"
      }`}
      
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://res.cloudinary.com/dbp1kbs0g/image/upload/v1756390535/AgriLogo_fvvdai.png"
            alt="Agri Green Logo"
            width={200}
            height={200}
            priority
            className="rounded hover:scale-105 transition-transform duration-300 object-cover"
          />
          
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              href={path}
              className={`text-black font-semibold hover:text-green-500 transition duration-200 ${
                pathname === path
                  ? "underline underline-offset-4 text-green-500"
                  : ""
              }`}
            >
              {label}
            </Link>
          ))}
          <Link href="/get-involved#DonationBankDetails">
            <Button className="bg-green-500 text-black hover:bg-green-600">
              Donate
            </Button>
          </Link>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="text-black text-xl">
                ☰
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-amber-50 p-6">
              <div className="flex flex-col items-start space-y-6 mt-10">
                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    href={path}
                    className="text-black text-lg font-medium hover:text-green-500 transition"
                  >
                    {label}
                  </Link>
                ))}
                <Link href="/get-involved#DonationBankDetails" >
                  <Button className="bg-green-500 text-black hover:bg-green-600">
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


