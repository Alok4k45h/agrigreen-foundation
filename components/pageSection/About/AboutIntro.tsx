"use client";

import { motion } from "framer-motion";
import {
  FiPlay,
  FiAward,
  FiTarget,
  FiEye,
} from "react-icons/fi";
import { GiPlantSeed, GiThreeFriends, GiMountaintop, GiShield } from "react-icons/gi";

// Framer Motion variants (reused for performance + clarity)
const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.4, 0, 0.2, 1] },
  viewport: { once: true },
});

const fadeInSide = (direction: "left" | "right", delay = 0) => ({
  initial: { opacity: 0, x: direction === "left" ? -50 : 50 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.8, delay, ease: [0.4, 0, 0.2, 1] },
  viewport: { once: true },
});


const coreValues = [
  {
    title: "Sustainability",
    description:
      "We promote sustainable agricultural practices that protect the environment, conserve resources, and maintain ecological balance through agroforestry.",
    Icon: GiPlantSeed,
    delay: 0.1,
  },
  {
    title: "Innovation",
    description:
      "We embrace technologies in agriculture, waste management, and renewable energy to drive environmental stewardship and efficiency.",
    Icon: FiAward,
    delay: 0.2,
  },
  {
    title: "Collaboration",
    description:
      "We engage local communities, farmers, and groups to foster inclusive, community-driven solutions for sustainable development.",
    Icon: GiThreeFriends,
    delay: 0.3,
  },
  {
    title: "Resilience",
    description:
      "We build climate-resilient farming systems helping communities adapt and thrive amidst environmental changes.",
    Icon: GiMountaintop,
    delay: 0.4,
  },
  {
    title: "Integrity",
    description:
      "We maintain the highest standards of transparency, ethics, and accountability in all our actions.",
    Icon: GiShield,
    delay: 0.5,
  },
];

export default function AboutIntro() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8">
      {/* Global Background Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute top-16 left-0 h-80 w-80 rounded-full bg-amber-500 blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-orange-500 blur-3xl" />
        <div className="absolute inset-x-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-600 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20">
        {/* Hero: Text + Video */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: Intro Text */}
          <motion.div
  className="order-2 lg:order-1"
  initial={{ opacity: 0, x: -40 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.8,
    delay: 0.2,
    ease: [0.4, 0, 0.2, 1],
  }}
>

            <div className="relative overflow-hidden rounded-3xl border border-green bg-gradient-to-br from-green-900/40 via-green-900/30 to-green-900/40 p-8 shadow-2xl backdrop-blur-xl md:p-12">

          
    
              {/* Soft inner glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/10 to-emerald-500/20 blur-xl" />

              <div className="relative space-y-6">
                <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <span className="text-emerald-400 font-semibold tracking-wider uppercase text-sm">
            Introducing Agri Green
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            In the World of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature to-agri">
              Agri Green
            </span>
          </h2>
        </motion.div>

                <motion.p
                   initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{
    duration: 0.6,
    delay: 0.35,
    ease: [0.4, 0, 0.2, 1],
  }}
                >
            We are a passionate team dedicated to creating a sustainable
                    future through youth participation in agroforestry promotion.
                    Our mission is to combat climate change and restore ecosystems by
                    integrating innovative agricultural practices with cutting-edge
                    technology.
                    <br />
                    Our team consists of experts from a wide range of fields, including agriculture, environment, forestry, and technology, all working collaboratively to implement best practices in crop production and land management. By combining traditional knowledge with modern advancements, we empower communities to adopt sustainable solutions that nurture both the land and its people.
<br />
We are committed to driving positive change, ensuring agroforestry becomes a key strategy in building a resilient, greener world for future generations.
                </motion.p>
              </div>
            </div>
          </motion.div>



          {/* Right: Video / Mockup */}
          <motion.div className="order-1 lg:order-2" >
            <div className="relative">
              <motion.div
                className="relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                {/* Glow behind card */}
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-amber-400/30 to-orange-500/30 blur-2xl" />

                <div className="relative rounded-2xl border border-gray-700/50 bg-gradient-to-br from-gray-800 to-gray-900 p-4 shadow-2xl md:p-6">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-inner">
                    <iframe
                      src=""
                      title="Agri Green Mission Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />

                    {/* Decorative overlay on hover (kept subtle for UX) */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/80 shadow-lg">
                        <FiPlay className="ml-1 text-2xl text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-400">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                    <span>Watch Agri Green Story</span>
                  </div>
                </div>

                {/* Floating Tip */}
                <motion.div
                  className="absolute -bottom-6 right-0 flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 to-orange-600 px-4 py-2 text-xs font-medium text-white shadow-lg md:text-sm"
                  
                >
                  <FiPlay className="text-base" />
                  <span>Tip: Play video to explore</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div id="MISSION-VISION" className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Mission */}
          <motion.div >
            <div className="relative h-full rounded-3xl border border-green-200 bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl dark:border-green-800 dark:bg-gray-800 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 shadow-lg">
                  <FiTarget className="text-3xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-green-700 dark:text-green-400 md:text-4xl">
                  Our Mission
                </h2>
              </div>
              <p className="text-base leading-relaxed text-justify text-gray-700 dark:text-gray-300 md:text-lg">
                To empower farming communities with sustainable agroforestry,
                climate-smart agriculture & eco-innovation to combat climate
                change, pollution & environmental degradation. By 2035, we aim to
                revolutionize natural resource management through community-led
                action, creating a greener, self-sustaining future.
              </p>
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-green-400/10 blur-3xl" />
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div >
            <div className="relative h-full rounded-3xl border border-blue-200 bg-white p-8 shadow-xl transition-shadow duration-300 hover:shadow-2xl dark:border-blue-800 dark:bg-gray-800 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg">
                  <FiEye className="text-3xl text-white" />
                </div>
                <h2 className="text-3xl font-bold text-blue-700 dark:text-blue-400 md:text-4xl">
                  Our Vision
                </h2>
              </div>
              <p className="text-base text-justify leading-relaxed text-gray-700 dark:text-gray-300 md:text-lg">
                To transform agriculture by promoting agroforestry and empowering
                communities to adopt sustainable practices that combat climate
                change, restore ecosystems, and ensure food security. We envision a
                greener planet by integrating innovative technologies with
                environmental stewardship.
              </p>
              <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-full bg-blue-400/10 blur-3xl" />
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="relative">
          {/* Secondary background glow just for this block */}
          <div className="pointer-events-none absolute inset-0 opacity-15">
            <div className="absolute top-4 left-4 h-72 w-72 rounded-full bg-green-600 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-green-600 blur-3xl" />
          </div>

          <div className="relative">
            {/* Section Header */}
            <motion.div className="mb-8 md:mb-12" >
              <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl lg:text-6xl">
                Our Core Values
              </h2>
              <p className="max-w-4xl text-base text-gray-300 md:text-lg">
                At{" "}
                <span className="font-semibold text-white">
                  Agri Green Foundation
                </span>
                , we are driven by sustainability, innovation, collaboration,
                resilience, and integrity.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {coreValues.map(({ title, description, Icon, delay }) => (
                <motion.div
                  key={title}
                  className="flex gap-6"
                  
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-16 w-16 items-center justify-center">
                      <Icon className="text-5xl text-green-500" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-3 text-2xl font-bold text-white">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-300 md:text-base">
                      {description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
