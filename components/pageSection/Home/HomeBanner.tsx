"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { FiArrowRight, FiMail, FiUsers } from "react-icons/fi";

// --- Configuration ---
const SLIDES = [
  {
    src: "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1756060473/HomeBanner_p2vmfk.jpg",
    alt: "Agri Green team collaborating in the field",
  },
  {
    src: "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1756060905/HomeBanner1_wedumx.jpg",
    alt: "Sustainable agriculture practices in action",
  },
  {
    src: "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1756387278/HomeBanner6_hdua27.jpg",
    alt: "Community agroforestry initiative success",
  },
];

const TYPEWRITER_STRINGS = [
  "Restoring ecosystem, Cultivating a Greener Future.",
  "Climate-smart farming for the future.",
  "Sustainable agriculture & stewardship.",
  "Empowering communities through innovation.",
];

const SLIDE_DURATION = 5000;

export default function HomeBanner() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // --- Logic: Auto-play Slider ---
  const startAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(
      () => setCurrentSlide((prev) => (prev + 1) % SLIDES.length),
      SLIDE_DURATION
    );
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
    startAutoSlide();
  };

  return (
    <section
      className="relative flex w-full min-h-screen items-center overflow-hidden bg-gray-900 pt-5"
      aria-labelledby="home-banner-heading"
    >
      {/* --- Background Image Slider --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={SLIDES[currentSlide].src}
              alt={SLIDES[currentSlide].alt}
              fill
              priority={currentSlide === 0}
              sizes="100vw"
              className="object-cover"
              quality={90}
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/80" />
      </div>

      {/* --- Background Ambience (Additional Effects) --- */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-emerald-900/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-amber-900/15 blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        {/* Grid Layout: wider image on Desktop */}
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.5fr] lg:gap-6">
          {/* --- Right Column: Image Slider (1st on Mobile for impact) --- */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 flex justify-center py-8 lg:order-2 lg:justify-end lg:py-10 lg:pl-6"
          >
            <div className="relative w-full max-w-7xl xl:max-w-5xl 2xl:max-w-5xl">
              <div style={{ perspective: 1000 }}>
                <div className="relative rounded-3xl border border-gray-700/50 bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm p-4 shadow-2xl sm:p-5">
                  {/* Screen Container */}
                  <div className="relative w-full overflow-hidden rounded-2xl bg-black/30 backdrop-blur-sm shadow-inner h-[30vh] sm:h-[30vh] md:h-[60vh] lg:h-[60vh] xl:h-[60vh] border border-white/10">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={currentSlide}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.97 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="relative h-full w-full"
                      >
                        <Image
                          src={SLIDES[currentSlide].src}
                          alt={SLIDES[currentSlide].alt}
                          fill
                          priority={currentSlide === 0}
                          sizes="(min-width: 1536px) 900px, (min-width: 1280px) 800px, (min-width: 1024px) 640px, 100vw"
                          className="object-cover"
                        />
                      </motion.div>
                    </AnimatePresence>

                    {/* Floating Badge inside Image */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{
                        delay: 0.8,
                        duration: 0.5,
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                      }}
                      className="absolute bottom-4 left-4 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-lg sm:text-base"
                    >
                      Agri Green
                    </motion.div>
                  </div>

                  {/* Device Bottom Bar */}
                  <div className="mt-4 flex items-center justify-center">
                    <div className="h-2 w-10 rounded-full bg-gray-700/50" />
                  </div>
                </div>

                {/* Decorative Floating Element (Desktop Only) */}
                <motion.div
                  initial={{ opacity: 0, y: 40, rotate: -4 }}
                  animate={{ opacity: 1, y: 0, rotate: 4 }}
                  transition={{
                    delay: 0.7,
                    duration: 0.7,
                    type: "spring",
                    stiffness: 160,
                    damping: 18,
                  }}
                  className="pointer-events-none absolute -bottom-10 -right-10 hidden h-52 w-72 overflow-hidden rounded-2xl border-4 border-white/80 bg-orange-500 shadow-2xl md:block"
                >
                  <Image
                    src={SLIDES[(currentSlide + 1) % SLIDES.length].src}
                    alt="Agri Green community collaboration"
                    fill
                    sizes="288px"
                    className="object-cover"
                  />
                </motion.div>
              </div>

              {/* Glow Effects */}
              <div className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full bg-emerald-500/30 blur-2xl animate-pulse" />
              <div className="pointer-events-none absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-amber-500/30 blur-2xl animate-pulse delay-500" />
            </div>
          </motion.div>

          {/* --- Left Column: Text Content --- */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-2 space-y-8 lg:order-1 lg:pr-4"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/20 backdrop-blur-sm px-4 py-2 text-sm font-medium text-emerald-300"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Uniting Nature, Climate & Agriculture
              </motion.div>

              {/* Fixed Height Container for Typewriter */}
              <div className="flex h-16 items-center md:h-20">
                <div className="border-l-2 border-amber-500 pl-4 text-lg font-light text-gray-200 md:text-2xl">
                  <Typewriter
                    options={{
                      strings: TYPEWRITER_STRINGS,
                      autoStart: true,
                      loop: true,
                      delay: 40,
                      deleteSpeed: 20,
                    }}
                  />
                </div>
              </div>
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

            <p className="max-w-xl text-justify text-base leading-relaxed text-gray-200 md:text-lg backdrop-blur-sm bg-black/20 p-4 rounded-xl">
              a pioneering non-governmental organization dedicated to cultivating a
              sustainable future through innovative practices in{" "}
              <span className="font-medium text-green-300">agroforestry</span>,{" "}
              <span className="font-medium text-green-300">livelihood enhancement</span>, and{" "}
              <span className="font-medium text-green-300">climate resilience</span>.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/about#MISSION_VISION"
                className="group inline-flex items-center gap-3 rounded-xl bg-emerald-600 px-8 py-4 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-emerald-500 hover:shadow-emerald-500/50 md:text-base"
              >
                Our Mission
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-gray-600/50 bg-gray-800/50 backdrop-blur-sm px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-gray-700/70 md:text-base"
              >
                <FiMail />
                Get in Touch
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 border-t border-gray-700/50 pt-6 backdrop-blur-sm bg-black/20 rounded-xl p-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-gray-900 bg-gray-700/70 backdrop-blur-sm text-xs text-gray-300"
                  >
                    <FiUsers />
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-300">
                <strong className="block text-white">2,000+</strong>
                Farmers Impacted
              </div>
            </div>
          </motion.div>
        </div>

        {/* Slider Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex items-center justify-center gap-3 lg:mt-12"
        >
          {SLIDES.map((_, index) => {
            const isActive = currentSlide === index;
            return (
              <button
                key={index}
                onClick={() => handleSlideChange(index)}
                className={`h-3 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-950 ${
                  isActive
                    ? "w-12 bg-emerald-500 shadow-lg shadow-emerald-500/50"
                    : "w-3 bg-white/60 hover:w-5 hover:bg-white/90"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-pressed={isActive}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}