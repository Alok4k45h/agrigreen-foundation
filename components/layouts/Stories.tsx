"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperClass } from "swiper";
import { Autoplay } from "swiper/modules";
import { motion } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import "swiper/css";

const STORIES = [
  {
    id: 1,
    name: "Dr. Vandana Shiva",
    role: "Environmental Activist",
    description: "Harmony with nature should not be considered a luxury but a necessity. The time to act for our soil and future is now.",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/c_crop,ar_1:1,e_improve,e_sharpen/v1756994866/VandanaShiva_dffjwj.webp",
    theme: "nature"
  },
  {
    id: 2,
    name: "Mahatma Gandhi",
    role: "Leader & Philosopher",
    description: "The earth provides enough to satisfy every man's needs, but not every man's greed. We must learn to live simply.",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/c_crop,ar_1:1,e_improve,e_sharpen/v1756995360/Mahatma_mhhxna.jpg",
    theme: "agri"
  },
  {
    id: 3,
    name: "Wangari Maathai",
    role: "Nobel Peace Prize Laureate",
    description: "When we plant trees, we plant the seeds of peace and hope. It is the little things citizens do that will make the difference.",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/c_crop,ar_1:1,e_improve,e_sharpen/v1756996433/Wangar%C4%A9_Maathai_glzzcp.png",
    theme: "climate"
  },
  {
    id: 4,
    name: "Ancient Proverb",
    role: "Wisdom",
    description: "The best time to plant a tree was 20 years ago. The second-best time is now. Nature is not a place to visit, it is home.",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/c_crop,ar_1:1,e_improve,e_sharpen/v1758551457/Proverbs_1_1200_800_80_dqiwk7.jpg",
    theme: "nature"
  },
];

// Helper to get styles based on theme (using CSS Variables for adaptability)
const getThemeClasses = (theme: string) => {
  switch (theme) {
    case "nature": return { 
      text: "text-nature", 
      border: "border-nature/30", 
      bg: "bg-nature/10", // Visible on both white & black
      iconBg: "bg-nature/20",
      glow: "shadow-nature/10"
    };
    case "agri": return { 
      text: "text-agri", 
      border: "border-agri/30", 
      bg: "bg-agri/10",
      iconBg: "bg-agri/20",
      glow: "shadow-agri/10"
    };
    case "climate": return { 
      text: "text-climate", 
      border: "border-climate/30", 
      bg: "bg-climate/10",
      iconBg: "bg-climate/20",
      glow: "shadow-climate/10"
    };
    default: return { 
      text: "text-foreground", 
      border: "border-border", 
      bg: "bg-secondary",
      iconBg: "bg-secondary",
      glow: "shadow-none"
    };
  }
};

export default function Stories() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperClass | null>(null);

  const activeTheme = STORIES[activeIndex].theme;
  const activeStyles = getThemeClasses(activeTheme);

  return (
    <section
      id="stories"
      className="relative py-24 overflow-hidden bg-background transition-colors duration-300"
      aria-labelledby="stories-heading"
    >
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 h-96 w-96 rounded-full bg-nature/10 blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 right-10 h-80 w-80 rounded-full bg-agri/10 blur-[100px] animate-pulse delay-700" />
        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* --- Heading --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center"
        >
          <span className={`text-sm font-bold uppercase tracking-widest font-outfit ${activeStyles.text} transition-colors duration-500`}>
            Voices of Change
          </span>
          <h2
            id="stories-heading"
            className="mt-3 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl font-serif"
          >
            Inspiration that <br />
            <span className="bg-gradient-to-r from-nature via-agri to-climate bg-clip-text text-transparent">
              Roots Our Mission
            </span>
          </h2>
        </motion.div>

        {/* --- Swiper Carousel --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            loop
            autoplay={{
              delay: 6000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-12"
          >
            {STORIES.map((story) => {
              const styles = getThemeClasses(story.theme);
              
              return (
                <SwiperSlide key={story.id} className="h-auto">
                  {({ isActive }) => (
                    <motion.article
                      initial={{ opacity: 0.8, scale: 0.95 }}
                      animate={{
                        opacity: isActive ? 1 : 0.8,
                        scale: isActive ? 1 : 0.95,
                      }}
                      transition={{ duration: 0.3 }}
                      // UPDATED: Used 'bg-card' for adaptive background and 'border-border' for fallback
                      className={`group relative flex h-full min-h-[420px] flex-col rounded-3xl border backdrop-blur-xl p-8 shadow-xl transition-all duration-500 
                        ${isActive 
                            ? `${styles.border} ${styles.bg} shadow-lg ${styles.glow}` 
                            : "bg-card border-border hover:border-nature/30"
                        }`}
                    >
                      {/* Top Quote Icon */}
                      <div className="mb-6 flex justify-start">
                        <div className={`p-3 rounded-xl transition-colors ${isActive ? styles.iconBg : 'bg-secondary'} ${styles.text}`}>
                          <Quote size={24} className="fill-current" />
                        </div>
                      </div>

                      {/* Profile */}
                      <div className="mb-6 flex items-center gap-4">
                        <div className="relative h-14 w-14">
                          <div className={`relative h-full w-full overflow-hidden rounded-full border-2 shadow-lg transition-colors duration-300 ${isActive ? styles.border : "border-border"}`}>
                            <Image
                              src={story.image}
                              alt={story.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className={`text-lg font-bold transition-colors duration-300 ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}>
                            {story.name}
                          </h3>
                          <p className={`text-sm font-medium ${styles.text}`}>
                            {story.role}
                          </p>
                        </div>
                      </div>

                      {/* Quote Text (Adaptive Color) */}
                      <blockquote className="flex-grow text-lg leading-relaxed text-muted-foreground font-serif italic relative z-10">
                        {story.description}
                      </blockquote>

                      {/* Bottom Decoration */}
                      <div className="mt-8 flex justify-end">
                        <div className={`h-1 w-12 rounded-full transition-all duration-500 ${isActive ? `bg-current ${styles.text}` : "bg-border"}`} />
                      </div>

                      {/* Background Gradient for Active Card */}
                      {isActive && (
                        <div className={`absolute inset-0 rounded-3xl opacity-[0.03] bg-gradient-to-b from-current to-transparent pointer-events-none ${styles.text}`} />
                      )}
                    </motion.article>
                  )}
                </SwiperSlide>
              );
            })}
          </Swiper>

          {/* --- Custom Controls --- */}
          <div className="mt-12 flex items-center justify-center gap-8">
            <button
              onClick={() => swiperRef.current?.slidePrev()}
              className={`group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:scale-110 ${activeStyles.text} hover:bg-secondary`}
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {STORIES.map((story, index) => {
                const styles = getThemeClasses(story.theme);
                const isActive = activeIndex === index;
                
                return (
                  <button
                    key={index}
                    onClick={() => swiperRef.current?.slideToLoop(index)}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      isActive
                        ? `w-8 bg-current ${styles.text}` 
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                );
              })}
            </div>

            <button
              onClick={() => swiperRef.current?.slideNext()}
              className={`group flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-all duration-300 hover:scale-110 ${activeStyles.text} hover:bg-secondary`}
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}