"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

interface PageBannerProps {
  pageHeader: string;
  descOne: string;
  descTwo: string;
}

export default function PageBanner({
  pageHeader,
  descOne,
  descTwo,
}: PageBannerProps) {
  return (
    <section
      className="relative w-full h-[50vh] min-h-100 flex items-center justify-center overflow-hidden pt-5 bg-gray-950"
      role="banner"
      aria-label={`${pageHeader} - Page Banner`}
    >
      {/* =========================================
          BACKGROUND LAYER (The Diffused GIF)
         ========================================= */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://res.cloudinary.com/dbp1kbs0g/image/upload/v1758550944/PageBanner_ewdgyi.gif"
          alt="Ambient agriculture background"
          fill
          priority
          className="object-cover blur-[2px] opacity-60 scale-105" // scale-105 prevents blur edges from showing
        />

        {/* The Atmosphere Layer (Adds depth) */}
        <div className="absolute inset-0 bg-linear-to-t from-gray-950 via-gray-950/50 to-transparent" />

        {/* Grain Texture (Adds premium feel) */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-soft-light"></div>
      </div>

      {/* =========================================
          CONTENT LAYER
         ========================================= */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Glassmorphic Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 backdrop-blur-md mb-8 shadow-lg shadow-emerald-900/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-300 text-xs md:text-sm font-bold uppercase tracking-widest">
              {pageHeader}
            </span>
          </div>

          {/* Heading with Typewriter */}
          <h1 className="relative text-3xl md:text-3xl lg:text-3xl font-bold text-white leading-tight">
            {/* Glow behind text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-20 bg-emerald-500/20 blur-[50px] -z-10 rounded-full" />

            <div className="min-h-16 md:min-h-20 flex items-center justify-center">
              <span className="bg-linear-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent drop-shadow-sm">
                <Typewriter
                  options={{
                    strings: [descOne, descTwo],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                    wrapperClassName:
                      "bg-linear-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent",
                  }}
                />
              </span>
            </div>
          </h1>

          {/* Decorative Divider */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "120px", opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-linear-to-r from-transparent via-amber-500 to-transparent mt-8 rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
