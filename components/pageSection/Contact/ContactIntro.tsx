"use client";

import { motion } from "framer-motion";

export default function ContactIntro() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16 max-w-3xl mx-auto"
    >
      <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6 font-serif">
        Get in Touch with <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature to-agri">
          Agri Green
        </span>
      </h1>
      <p className="text-muted-foreground text-lg leading-relaxed">
        Whether you have a question, want to partner with us, or just want to say hi, 
        our inbox is always open. We strive to respond within 24 hours.
      </p>
    </motion.div>
  );
}