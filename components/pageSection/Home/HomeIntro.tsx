
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaLeaf } from "react-icons/fa";

export default function HomeIntro() {
  return (
    <section
      className="relative w-full py-20 bg-gradient-to-b from-amber-50 via-white to-green-50 overflow-hidden"
      aria-labelledby="home-intro-title"
    >
      {/* Floating Background Accent */}
      <div className="absolute top-0 left-0 w-48 h-48 bg-green-200/40 blur-3xl rounded-full animate-pulse-slow" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-200/40 blur-3xl rounded-full animate-pulse-slow" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h1
          id="home-intro-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-green-700 flex justify-center items-center gap-3 font-playfair"
        >
          <motion.span
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <FaLeaf className="text-green-600" />
          </motion.span>
          Who We Are?
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg md:text-xl leading-relaxed text-gray-700 mt-6 mb-10 font-light text-justify md:text-center"
        >
          <span className="font-semibold text-green-800">Agri Green Foundation</span> is a pioneering non-governmental organization
          dedicated to cultivating a sustainable future through innovative
          practices in <span className="text-green-700 font-medium">agroforestry</span>,
          <span className="text-green-700 font-medium"> livelihood enhancement</span>,
          and <span className="text-green-700 font-medium">climate resilience</span>.
          Established in 2015, we believe that <span className="italic">environmental stewardship</span> and
          <span className="italic"> community empowerment</span> go hand in hand to create a balanced ecosystem
          where people and nature thrive together.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link
            href="/about"
            aria-label="Learn more about Agri Green Foundation"
            className="inline-flex items-center gap-2 px-7 py-3 border-2 border-green-700 text-green-800 font-semibold 
                       rounded-lg shadow-md bg-white/70 hover:bg-yellow-400 hover:text-green-900 
                       hover:border-yellow-400 transition-all duration-300 hover:scale-105"
          >
            Know More
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="transition-transform group-hover:translate-x-1"
            >
              <path
                fillRule="evenodd"
                d="M4 8a.5.5 0 0 1 .5-.5h6.293L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
              />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
