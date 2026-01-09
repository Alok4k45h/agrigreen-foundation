"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, CheckCircle, Sparkles,
  Trees, Sprout, Droplets, CloudSun, Recycle, 
  Sun, TrendingUp, Users, GraduationCap, Leaf 
} from "lucide-react";

// --- Data Configuration with Themes ---
const ACTIONS = [
  {
    id: 0,
    icon: Trees,
    title: "Agroforestry Integration",
    theme: "nature", // Green
    practice: "Integrating trees with crops and livestock to enhance biodiversity and sequester carbon.",
    impact: "Mitigates climate change, restores degraded lands, and boosts farmers' resilience.",
  },
  {
    id: 1,
    icon: Sprout,
    title: "Soil Conservation",
    theme: "nature",
    practice: "Using cover crops, rotation, and composting to maintain fertility and prevent erosion.",
    impact: "Improves soil health, reduces chemical inputs, and ensures long-term productivity.",
  },
  {
    id: 2,
    icon: Droplets,
    title: "Water Conservation",
    theme: "climate", // Blue
    practice: "Promoting rainwater harvesting, drip irrigation, and watershed management.",
    impact: "Conserves water, improves yield, and secures water availability in dry periods.",
  },
  {
    id: 3,
    icon: CloudSun,
    title: "Climate-Smart Agriculture",
    theme: "climate",
    practice: "Introducing resilient crop varieties and agroecological practices for climate adaptation.",
    impact: "Enhances food security and minimizes climate risks in agriculture.",
  },
  {
    id: 4,
    icon: Recycle,
    title: "Waste Management & Recycling",
    theme: "nature",
    practice: "Implementing composting, recycling of by-products, and waste-to-energy systems.",
    impact: "Reduces pollution, cuts emissions, and fosters circular farming economies.",
  },
  {
    id: 5,
    icon: Sun,
    title: "Sustainable Energy",
    theme: "agri", // Yellow
    practice: "Promoting solar irrigation, biogas, and wind energy solutions for farms.",
    impact: "Cuts carbon footprint, lowers costs, and supports energy independence.",
  },
  {
    id: 6,
    icon: TrendingUp,
    title: "Precision Agriculture",
    theme: "agri",
    practice: "Using drones, sensors, and satellite data to optimize crop management.",
    impact: "Maximizes yield, reduces waste, and improves resource efficiency.",
  },
  {
    id: 7,
    icon: Users,
    title: "Community Power",
    theme: "nature",
    practice: "Mobilizing rural youth, women groups, and farmer collectives for shared knowledge.",
    impact: "Drives local development, improves market access, and promotes gender equity.",
  },
  {
    id: 8,
    icon: GraduationCap,
    title: "Farmer Education",
    theme: "agri",
    practice: "Offering training in agroforestry, sustainable practices, and new technologies.",
    impact: "Empowers farmers with knowledge for greener livelihoods and better decisions.",
  },
  {
    id: 9,
    icon: Leaf,
    title: "Monitoring & Evaluation",
    theme: "climate",
    practice: "Tracking environmental and socio-economic impacts of sustainable farming initiatives.",
    impact: "Enables data-driven decisions and scalable, successful models.",
  },
];

// Helper to get hex color based on theme
const getThemeColor = (theme: string) => {
  switch (theme) {
    case "nature": return "#22c55e"; // Green
    case "agri": return "#eab308";   // Yellow
    case "climate": return "#0ea5e9"; // Blue
    default: return "#ffffff";
  }
};

export default function WhatWeAreDoing() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // --- Logic ---
  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % ACTIONS.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? ACTIONS.length - 1 : prev - 1));
  };

  const handleJump = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  // Auto-play
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [activeIndex]);

  const startAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(handleNext, 6000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  const activeThemeColor = getThemeColor(ACTIONS[activeIndex].theme);

  return (
    <section 
      className="relative py-24 overflow-hidden bg-[#070e0b] border-t border-white/5"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
      aria-label="Our Practices and Impact"
    >
      {/* Background Ambience (Dynamic) */}
      <div className="absolute inset-0 pointer-events-none transition-colors duration-1000">
        <div 
          className="absolute top-1/2 left-0 w-150 h-150 rounded-full blur-[120px] -translate-y-1/2 opacity-20 transition-colors duration-1000"
          style={{ backgroundColor: activeThemeColor }}
        />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-white/5 rounded-full blur-[100px] opacity-10" />
        {/* Grain Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <span 
            className="font-bold tracking-widest uppercase text-sm font-outfit"
            style={{ color: activeThemeColor }}
          >
            In Action
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 font-serif">
            What We Are <br className="md:hidden" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-nature via-agri to-climate">
              Doing
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* --- Left Column: Navigation List (Desktop) --- */}
          <div className="hidden lg:block lg:col-span-5 space-y-2">
            <div className="flex items-center justify-between mb-4 text-gray-500 text-sm font-medium border-b border-white/10 pb-2">
              <span>Initiative List</span>
              <span>{activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1} / {ACTIONS.length}</span>
            </div>
            
            <div className="max-h-125 overflow-y-auto custom-scrollbar pr-2 space-y-2">
              {ACTIONS.map((item, idx) => {
                const isActive = activeIndex === idx;
                const themeColor = getThemeColor(item.theme);
                
                return (
                  <button
                    key={item.id}
                    onClick={() => handleJump(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 group relative overflow-hidden ${
                      isActive 
                        ? "bg-white/5 border border-white/10" 
                        : "hover:bg-white/5 border border-transparent"
                    }`}
                    style={{ borderColor: isActive ? `${themeColor}66` : 'transparent' }} // 40% opacity border
                  >
                    <span 
                      className="text-xl transition-transform duration-300"
                      style={{ color: isActive ? themeColor : '#6b7280' }}
                    >
                      <item.icon size={24} />
                    </span>
                    <span className={`font-medium text-lg ${isActive ? "text-white" : "text-gray-400 group-hover:text-gray-200"}`}>
                      {item.title}
                    </span>
                    {isActive && (
                       <motion.div 
                         layoutId="active-dot" 
                         className="ml-auto w-2 h-2 rounded-full shadow-[0_0_10px]"
                         style={{ backgroundColor: themeColor, boxShadow: `0 0 10px ${themeColor}` }}
                       />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* --- Right Column: Detail Card --- */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative min-h-125">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative bg-[#122b22]/60 backdrop-blur-xl border border-white/5 rounded-3xl p-6 md:p-10 shadow-2xl"
                  style={{ borderColor: `${activeThemeColor}33` }} // 20% opacity border
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-5 mb-8 border-b border-white/10 pb-6">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg transform -rotate-3"
                      style={{ 
                        background: `linear-gradient(135deg, ${activeThemeColor}, #070e0b)`,
                        color: '#070e0b'
                      }}
                    >
                      {/* Dynamic Icon Rendering */}
                      {(() => {
                        const Icon = ACTIONS[activeIndex].icon;
                        return <Icon size={32} />;
                      })()}
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white font-serif">
                        {ACTIONS[activeIndex].title}
                      </h3>
                      <div className="flex gap-2 mt-2">
                        <span 
                          className="h-1 w-12 rounded-full"
                          style={{ backgroundColor: activeThemeColor }} 
                        />
                        <span className="h-1 w-4 bg-gray-700 rounded-full"/>
                      </div>
                    </div>
                  </div>

                  {/* Content Blocks */}
                  <div className="space-y-6">
                    
                    {/* Practice (Action) Block */}
                    <div 
                      className="group relative overflow-hidden bg-white/5 border border-white/5 rounded-2xl p-6 transition-colors"
                      style={{ borderColor: `${activeThemeColor}20` }}
                    >
                      <div className="absolute top-0 right-0 w-24 h-24 rounded-full blur-xl -mr-10 -mt-10 pointer-events-none opacity-20" style={{ backgroundColor: activeThemeColor }}></div>
                      <div className="flex items-start gap-4">
                        <div 
                          className="mt-1 p-2 rounded-lg"
                          style={{ backgroundColor: `${activeThemeColor}20`, color: activeThemeColor }}
                        >
                          <CheckCircle size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold mb-2" style={{ color: activeThemeColor }}>Our Practice</h4>
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            {ACTIONS[activeIndex].practice}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Impact (Result) Block */}
                    <div className="group relative overflow-hidden bg-white/5 border border-white/5 rounded-2xl p-6 transition-colors">
                      <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full blur-2xl pointer-events-none opacity-10" style={{ backgroundColor: activeThemeColor }}></div>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 p-2 bg-white/10 rounded-lg text-white">
                          <Sparkles size={20} />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">The Impact</h4>
                          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                            {ACTIONS[activeIndex].impact}
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Navigation Controls */}
            <div className="flex lg:hidden items-center justify-between mt-8 px-2">
              <button 
                onClick={handlePrev}
                className="p-4 rounded-full bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white transition-all active:scale-95"
                aria-label="Previous"
              >
                <ArrowLeft size={24} />
              </button>
              
              <div className="flex gap-2">
                {ACTIONS.map((item, i) => (
                  <div 
                    key={i} 
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{ 
                      width: i === activeIndex ? "24px" : "6px",
                      backgroundColor: i === activeIndex ? getThemeColor(item.theme) : "#374151" 
                    }}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                className="p-4 rounded-full text-black hover:opacity-90 shadow-lg transition-all active:scale-95"
                style={{ backgroundColor: activeThemeColor, boxShadow: `0 0 20px ${activeThemeColor}40` }}
                aria-label="Next"
              >
                <ArrowRight size={24} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}