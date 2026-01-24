"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, AlertTriangle, Leaf } from "lucide-react";

const ISSUES = [
  {
    id: 1,
    icon: "🌍",
    title: "Climate Change and Its Impact on Agriculture",
    theme: "climate", // Blue
    issue:
      "Climate change poses significant challenges to agriculture, including altered rainfall patterns, extreme weather events, and rising temperatures that negatively affect crop yields and food security.",
    approach:
      "We promote climate-smart agriculture and agroforestry practices that enhance resilience to climate change by improving soil health, increasing biodiversity, and diversifying crop production systems.",
  },
  {
    id: 2,
    icon: "🌱",
    title: "Soil Degradation and Erosion",
    theme: "nature", // Green
    issue:
      "Unsustainable farming practices, such as excessive tilling and monoculture, lead to soil degradation and erosion, reducing agricultural productivity.",
    approach:
      "We advocate for soil conservation techniques such as cover cropping, crop rotation, and agroforestry to restore soil health and prevent erosion.",
  },
  {
    id: 3,
    icon: "🌳",
    title: "Deforestation and Loss of Biodiversity",
    theme: "nature",
    issue:
      "Deforestation and the loss of biodiversity due to agricultural expansion and unsustainable land-use practices are major contributors to environmental degradation.",
    approach:
      "Through agroforestry and tree-based farming systems, we encourage the restoration of degraded lands and the promotion of biodiversity, supporting ecosystems while improving agricultural productivity.",
  },
  {
    id: 4,
    icon: "💧",
    title: "Pollution from Agricultural Practices",
    theme: "climate",
    issue:
      "The use of synthetic fertilizers, pesticides, and improper waste disposal contributes to soil and water pollution, adversely affecting the environment and human health.",
    approach:
      "We promote organic farming, integrated pest management, and waste recycling practices to reduce pollution and minimize the use of harmful chemicals in agriculture.",
  },
  {
    id: 5,
    icon: "♻️",
    title: "Waste Management and Pollution",
    theme: "climate", // Yellow
    issue:
      "Improper waste disposal in rural and agricultural areas leads to environmental pollution, including plastic waste and the burning of crop residues, which contribute to air pollution.",
    approach:
      "We advocate for sustainable waste management solutions, including recycling, composting, and using agricultural waste for energy production, reducing both pollution and waste in farming communities.",
  },
  {
    id: 6,
    icon: "⚡",
    title: "Energy Inefficiency and Dependence on Fossil Fuels",
    theme: "climate",
    issue:
      "Rural communities often rely on traditional, inefficient energy sources, such as wood and fossil fuels, leading to deforestation, health problems, and greenhouse gas emissions.",
    approach:
      "We promote the adoption of clean, renewable energy solutions, such as solar energy for irrigation and biogas plants for cooking and lighting, reducing reliance on polluting energy sources.",
  },
  {
    id: 7,
    icon: "🚜",
    title: "Lack of Access to Sustainable Agricultural Technologies",
    theme: "agri",
    issue:
      "Many farmers, particularly in rural areas, lack access to modern technologies and knowledge that could help improve productivity and sustainability.",
    approach:
      "We work to provide farmers with access to the latest agricultural technologies, such as precision farming tools, soil sensors, and climate-resilient crop varieties, enabling them to make informed decisions and improve their yields sustainably.",
  },
  {
    id: 8,
    icon: "💰",
    title: "Rural Poverty and Limited Economic Opportunities",
    theme: "agri",
    issue:
      "Many rural communities face economic hardship, with limited access to markets, financial resources, and business opportunities, especially for women and youth.",
    approach:
      "By organizing farmers into self-help groups and producer companies, we help create opportunities for economic growth, access to markets, and financial support, empowering rural youth and women to become leaders in sustainable farming.",
  },
  {
    id: 9,
    icon: "♀️",
    title: "Gender Inequality in Agriculture",
    theme: "agri",
    issue:
      "Women, particularly in rural communities, often face barriers to land ownership, access to resources, and decision-making power in agriculture.",
    approach:
      "We focus on gender inclusion by supporting women’s self-help groups, ensuring women have access to resources, training, and opportunities to take leadership roles in sustainable agricultural practices.",
  },
  {
    id: 10,
    icon: "🤝",
    title: "Fragmented Farming Communities and Lack of Collective Action",
    theme: "agri",
    issue:
      "Fragmented farming communities often lack the ability to collaborate and share resources, limiting their impact and access to larger markets or technological advancements.",
    approach:
      "We facilitate the formation of community organizations such as farmer producer companies and cooperatives, enabling farmers to work together, share knowledge, and access better resources, services, and markets.",
  },
];

const getThemeHex = (theme: string) => {
  switch (theme) {
    case "nature":
      return "#22c55e"; // var(--nature)
    case "agri":
      return "#eab308"; // var(--agri)
    case "climate":
      return "#0ea5e9"; // var(--climate)
    default:
      return "#ffffff";
  }
};

export default function HomeIssues() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleJump = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % ISSUES.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? ISSUES.length - 1 : prev - 1));
  };

  // Auto-play logic
  useEffect(() => {
    autoPlayRef.current = setInterval(handleNext, 6000);
    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [activeIndex]);

  const activeThemeHex = getThemeHex(ISSUES[activeIndex].theme);

  return (
    <section
      className="relative py-24 overflow-hidden bg-background"
      aria-label="Issues we address"
    >
      {/* Dynamic Background Glow */}
      <div className="absolute inset-0 pointer-events-none transition-colors duration-1000">
        <motion.div
          animate={{ backgroundColor: activeThemeHex }}
          className="absolute top-20 left-0 w-125 h-125 rounded-full blur-[150px] opacity-10 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:mb-20"
        >
          <span className="text-nature font-semibold tracking-wider uppercase text-sm font-outfit">
            Challenges & Approach
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-2 font-serif">
            Turning Challenges into <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-nature via-agri to-climate">
              Sustainable Opportunities
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* --- Left: Navigation List --- */}
          <div className="hidden lg:block lg:col-span-5 space-y-2">
            <div className="max-h-125 overflow-y-auto custom-scrollbar pr-2 space-y-2">
              {ISSUES.map((item, idx) => {
                const isActive = activeIndex === idx;
                const themeHex = getThemeHex(item.theme);
                return (
                  <button
                    key={item.id}
                    onClick={() => handleJump(idx)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 group ${
                      isActive
                        ? "bg-secondary border border-border"
                        : "hover:bg-secondary/50 border border-transparent"
                    }`}
                    style={{ borderColor: isActive ? themeHex : "transparent" }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span
                      className={`font-medium text-lg ${isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"}`}
                    >
                      {item.title}
                    </span>
                    {isActive && (
                      <motion.div
                        layoutId="active-indicator"
                        className="ml-auto w-2 h-2 rounded-full shadow-[0_0_10px]"
                        style={{
                          backgroundColor: themeHex,
                          boxShadow: `0 0 10px ${themeHex}`,
                        }}
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* --- Right: Active Card --- */}
          <div className="col-span-12 lg:col-span-7">
            <div className="relative min-h-125 md:min-h-112.5">
              <AnimatePresence mode="wait" initial={false} custom={direction}>
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative bg-secondary/60 backdrop-blur-xl border border-border rounded-3xl p-6 md:p-10 shadow-2xl overflow-hidden"
                  style={{ borderColor: `${activeThemeHex}40` }}
                >
                  {/* Decorative Gradient Background (Subtle) */}
                  <div
                    className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-10 dark:opacity-20"
                    style={{ backgroundColor: activeThemeHex }}
                  ></div>

                  {/* Header */}
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6 mb-8 border-b border-border pb-8">
                    <div className="w-20 h-20 bg-background/50 rounded-2xl flex items-center justify-center text-5xl shadow-sm border border-border">
                      {ISSUES[activeIndex].icon}
                    </div>
                    <div>
                      <span
                        className="font-mono text-sm tracking-wider uppercase"
                        style={{ color: activeThemeHex }}
                      >
                        {ISSUES[activeIndex].theme} ISSUE
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-foreground mt-1 leading-tight">
                        {ISSUES[activeIndex].title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid gap-6 relative z-10">
                    <div className="bg-red-500/5 dark:bg-red-900/10 border border-red-500/10 rounded-2xl p-5">
                      <div className="flex items-center gap-2 text-red-500 font-bold mb-2">
                        <AlertTriangle className="w-5 h-5" />
                        <h4>The Challenge</h4>
                      </div>
                      <p className="text-muted-foreground text-justify leading-relaxed text-sm md:text-base">
                        {ISSUES[activeIndex].issue}
                      </p>
                    </div>

                    <div
                      className="rounded-2xl p-5 border"
                      style={{
                        backgroundColor: `${activeThemeHex}08`,
                        borderColor: `${activeThemeHex}20`,
                      }}
                    >
                      <div
                        className="flex items-center gap-2 font-bold mb-2"
                        style={{ color: activeThemeHex }}
                      >
                        <Leaf className="w-5 h-5" />
                        <h4>Agri Green Approach</h4>
                      </div>
                      <p className="text-foreground/90 text-justify leading-relaxed text-sm md:text-base">
                        {ISSUES[activeIndex].approach}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Mobile Nav */}
            <div className="flex lg:hidden items-center justify-between mt-8 px-2">
              <button
                onClick={handlePrev}
                className="p-4 rounded-full bg-secondary text-foreground border border-border"
              >
                <ArrowLeft />
              </button>
              <button
                onClick={handleNext}
                className="p-4 rounded-full text-black font-bold"
                style={{ backgroundColor: activeThemeHex }}
              >
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
