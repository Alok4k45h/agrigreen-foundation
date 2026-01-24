"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  ExternalLink,
  ArrowRight,
  Library,
} from "lucide-react";

// --- Data Configuration ---
const RESOURCES = [
  {
    id: 1,
    title: "Natural Farming Guide",
    desc: "A comprehensive manual on soil preparation, organic fertilizers, and yield optimization techniques.",
    icon: BookOpen,
    type: "Guide",
    link: "https://drive.google.com/file/d/101C2ZC9tnGWD5Dr0C2DQIGZ4hdTopEQN/view?usp=sharing",
    theme: "nature",
  },
  {
    id: 2,
    title: "Waste Management Report",
    desc: "Insights from the 2nd National Conference on Technology Advancements in Waste Management.",
    icon: FileText,
    type: "Conference Paper",
    link: "https://drive.google.com/file/d/1PdwWsXntW-j74hderkn05kEo0B8ZRFYl/view?usp=sharing",
    theme: "agri",
  },
  {
    id: 3,
    title: "Agricultural Land Policies",
    desc: "Official Model Rules and legal frameworks regarding tree felling on agricultural land.",
    icon: FileText,
    type: "Policy Document",
    link: "https://drive.google.com/file/d/11X6wO-06Vk_s2eN06br7gA5fceDL-yg4/view?usp=sharing",
    theme: "climate",
  },
];

// Helper to get theme colors (Adaptive)
const getThemeStyles = (theme: string) => {
  switch (theme) {
    case "nature":
      return {
        text: "text-nature",
        bg: "bg-nature/10",
        border: "border-nature/20",
        hoverBorder: "hover:border-nature/50",
        glow: "shadow-nature/10",
      };
    case "agri":
      return {
        text: "text-agri",
        bg: "bg-agri/10",
        border: "border-agri/20",
        hoverBorder: "hover:border-agri/50",
        glow: "shadow-agri/10",
      };
    case "climate":
      return {
        text: "text-climate",
        bg: "bg-climate/10",
        border: "border-climate/20",
        hoverBorder: "hover:border-climate/50",
        glow: "shadow-climate/10",
      };
    default:
      return {
        text: "text-foreground",
        bg: "bg-secondary",
        border: "border-border",
        hoverBorder: "hover:border-foreground/50",
        glow: "shadow-none",
      };
  }
};

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

export default function ResourceSection() {
  return (
    <section
      className="relative py-24 px-4 sm:px-6 md:px-16 bg-background overflow-hidden transition-colors duration-300"
      id="resources"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-0 w-150 h-150 bg-nature/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-20 left-0 w-125 h-125 bg-agri/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto space-y-16">
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary border border-border text-agri text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Library size={16} /> <span>Knowledge Hub</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-serif"
          >
            Empower Yourself with <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-nature via-agri to-climate">
              Knowledge
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            Download curated guides, reports, and manuals to help you
            participate in sustainable agricultural development.
          </motion.p>
        </div>

        {/* --- Resources Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
          {RESOURCES.map((res) => {
            const styles = getThemeStyles(res.theme);

            return (
              <motion.a
                key={res.id}
                href={res.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col bg-card backdrop-blur-xl border ${styles.border} rounded-3xl p-8 transition-all duration-300 shadow-lg hover:shadow-2xl ${styles.hoverBorder} ${styles.glow}`}
              >
                {/* Top Section: Icon & Type */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${styles.bg} ${styles.text}`}
                  >
                    <res.icon size={24} />
                  </div>
                  <span
                    className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border bg-secondary ${styles.text} ${styles.border}`}
                  >
                    {res.type}
                  </span>
                </div>

                {/* Content */}
                <div className="grow relative z-10 space-y-3">
                  <h3
                    className={`text-xl font-bold text-foreground transition-colors group-hover:${styles.text}`}
                  >
                    {res.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {res.desc}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="mt-8 pt-6 border-t border-border flex items-center justify-between relative z-10">
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                    Access Document
                  </span>
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all bg-secondary group-hover:bg-foreground text-muted-foreground group-hover:text-background`}
                  >
                    <ExternalLink size={16} />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* --- View All Button --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center pt-8"
        >
          <a
            href="https://drive.google.com/drive/folders/1UrV6cO-4yWSrLd0bdvJe8r2S1m_MrKF3?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-card hover:bg-secondary border border-border text-foreground rounded-xl font-semibold transition-all duration-300 hover:border-nature hover:shadow-lg hover:shadow-nature/20"
          >
            <div className="text-nature group-hover:scale-110 transition-transform">
              <BookOpen size={20} />
            </div>
            <span>Access Full Drive Folder</span>
            <ArrowRight
              size={16}
              className="opacity-50 group-hover:translate-x-1 group-hover:opacity-100 transition-all text-nature"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
