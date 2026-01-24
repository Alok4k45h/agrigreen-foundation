"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ChevronDown,
  Sprout,
  Heart,
  Coins,
  Handshake,
  Globe,
  HelpCircle,
} from "lucide-react";
import Link from "next/link"; // Use Next Link

// --- Data & Themes ---
const FAQS = [
  {
    question: "What is Agroforestry?",
    answer:
      "Agroforestry integrates trees with crops and livestock to promote biodiversity, improve soil health, and support sustainable farming.",
    theme: "nature",
    icon: Sprout,
  },
  {
    question: "How can I volunteer?",
    answer:
      "Join our volunteer programs for agroforestry initiatives, youth mentorship, and green tech projects by signing up on our website.",
    theme: "agri",
    icon: Heart,
  },
  {
    question: "Where does my donation go?",
    answer:
      "Your donations support sapling plantations, farmer training, community development, and technology-driven sustainability projects.",
    theme: "nature",
    icon: Coins,
  },
  {
    question: "What are the benefits of joining as a partner?",
    answer:
      "Partners gain access to collaborative research, sustainable supply chains, CSR programs, and enhanced environmental impact opportunities.",
    theme: "climate",
    icon: Handshake,
  },
  {
    question: "Is this program available internationally?",
    answer:
      "Currently, we operate primarily in India, but we are expanding our initiatives globally through strategic partnerships.",
    theme: "climate",
    icon: Globe,
  },
];

// Helper for theme colors (Adaptive)
const getThemeStyles = (theme: string) => {
  switch (theme) {
    case "nature":
      return {
        text: "text-nature",
        bg: "bg-nature/10",
        border: "border-nature/20",
        activeBorder: "border-nature",
        shadow: "shadow-nature/10",
      };
    case "agri":
      return {
        text: "text-agri",
        bg: "bg-agri/10",
        border: "border-agri/20",
        activeBorder: "border-agri",
        shadow: "shadow-agri/10",
      };
    case "climate":
      return {
        text: "text-climate",
        bg: "bg-climate/10",
        border: "border-climate/20",
        activeBorder: "border-climate",
        shadow: "shadow-climate/10",
      };
    default:
      return {
        text: "text-foreground",
        bg: "bg-secondary",
        border: "border-border",
        activeBorder: "border-foreground",
        shadow: "shadow-none",
      };
  }
};

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-background transition-colors duration-300"
      id="faq"
    >
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-125 h-125 bg-climate/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-20 right-10 w-125 h-125 bg-nature/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* --- Left Side: Heading & Info --- */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-agri/20 bg-agri/10 px-3 py-1 text-sm font-medium text-agri backdrop-blur-md mb-6">
              <HelpCircle size={16} />
              <span>Support & Info</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif leading-tight">
              Frequently Asked <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-nature via-agri to-climate">
                Questions
              </span>
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Everything you need to know about our mission, how to get
              involved, and the impact of your contributions.
            </p>

            {/* Decorative Tri-Color Bar */}
            <div className="flex w-32 h-1.5 rounded-full overflow-hidden mx-auto lg:mx-0">
              <div className="w-1/3 bg-nature" />
              <div className="w-1/3 bg-agri" />
              <div className="w-1/3 bg-climate" />
            </div>
          </motion.div>

          {/* --- Right Side: FAQ Accordion --- */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* Adaptive Container: uses bg-card */}
            <div className="relative rounded-3xl border border-border bg-card backdrop-blur-xl p-2 md:p-4 shadow-xl">
              <div className="space-y-3">
                {FAQS.map((faq, index) => {
                  const isOpen = openIndex === index;
                  const styles = getThemeStyles(faq.theme);

                  return (
                    <motion.div
                      key={index}
                      initial={false}
                      animate={{
                        backgroundColor: isOpen
                          ? "var(--secondary)"
                          : "transparent",
                      }}
                      className={`rounded-2xl transition-all duration-300 border ${
                        isOpen ? styles.activeBorder : "border-transparent"
                      }`}
                    >
                      <button
                        onClick={() => toggleFaq(index)}
                        className="w-full flex items-center justify-between p-4 md:p-6 text-left focus:outline-none group"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                              isOpen
                                ? styles.bg + " " + styles.text
                                : "bg-secondary text-muted-foreground group-hover:text-foreground"
                            }`}
                          >
                            <faq.icon size={20} />
                          </div>
                          <span
                            className={`text-lg font-bold transition-colors ${
                              isOpen
                                ? "text-foreground"
                                : "text-muted-foreground group-hover:text-foreground"
                            }`}
                          >
                            {faq.question}
                          </span>
                        </div>

                        <div
                          className={`p-2 rounded-full transition-all duration-300 ${
                            isOpen
                              ? "rotate-180 bg-background text-foreground"
                              : "text-muted-foreground group-hover:text-foreground"
                          }`}
                        >
                          <ChevronDown size={18} />
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.4, 0, 0.2, 1],
                            }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 md:px-6 pb-6 pl-18">
                              <p className="text-muted-foreground leading-relaxed border-l-2 border-border pl-4">
                                {faq.answer}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Contact Redirect */}
            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Still have questions?{" "}
                <Link
                  href="/contact"
                  className="text-agri font-semibold hover:underline decoration-agri/50"
                >
                  Reach out to our team
                </Link>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
