"use client";

import { motion } from "framer-motion";
import { Play, Award, Target, Eye, Shield, Mountain, Leaf } from "lucide-react";

// --- Configuration ---
const CORE_VALUES = [
  {
    title: "Sustainability",
    description:
      "We promote sustainable agricultural practices that protect the environment, conserve resources, and maintain ecological balance through agroforestry.",
    Icon: Leaf,
  },
  {
    title: "Innovation",
    description:
      "We embrace technologies in agriculture, waste management, and renewable energy to drive environmental stewardship and efficiency.",
    Icon: Award,
  },
  {
    title: "Collaboration",
    description:
      "We engage local communities, farmers, and groups to foster inclusive, community-driven solutions for sustainable development.",
    Icon: Target,
  },
  {
    title: "Resilience",
    description:
      "We build climate-resilient farming systems helping communities adapt and thrive amidst environmental changes.",
    Icon: Mountain,
  },
  {
    title: "Integrity",
    description:
      "We maintain the highest standards of transparency, ethics, and accountability in all our actions.",
    Icon: Shield,
  },
];

export default function AboutIntro() {
  const videoUrl: string | undefined = undefined;


  return (
    <section className="relative overflow-hidden bg-background py-20 px-4 sm:px-6 lg:px-8">
      {/* Global Background Glow (Adaptive) */}
      <div className="pointer-events-none absolute inset-0 opacity-10 dark:opacity-20">
        <div className="absolute top-16 left-0 h-80 w-80 rounded-full bg-nature blur-3xl" />
        <div className="absolute bottom-10 right-0 h-72 w-72 rounded-full bg-agri blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-20">
        
        {/* --- Hero: Text + Video --- */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          
          {/* Left: Intro Text */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-nature/20 bg-secondary/30 p-8 shadow-xl backdrop-blur-xl md:p-12">
              
              {/* Soft inner glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-nature/5 to-transparent" />

              <div className="relative space-y-6">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <span className="text-nature font-semibold tracking-wider uppercase text-sm font-outfit">
                    Introducing Agri Green
                  </span>
                  <h2 className="text-4xl md:text-5xl font-bold text-foreground font-serif">
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
                   transition={{ duration: 0.6, delay: 0.35 }}
                   className="text-muted-foreground leading-relaxed text-justify"
                >
                    We are a passionate team dedicated to creating a sustainable
                    future through youth participation in agroforestry promotion.
                    Our mission is to combat climate change and restore ecosystems by
                    integrating innovative agricultural practices with cutting-edge
                    technology.
                    <br /><br />
                    Our team consists of experts from a wide range of fields, including agriculture, environment, forestry, and technology, all working collaboratively to implement best practices in crop production and land management. By combining traditional knowledge with modern advancements, we empower communities to adopt sustainable solutions that nurture both the land and its people.
                    <br /><br />
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
                <div className="pointer-events-none absolute inset-0 rounded-3xl bg-agri/20 blur-2xl" />

                <div className="relative rounded-2xl border border-border bg-card p-4 shadow-2xl md:p-6">
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-black shadow-inner">
                    <iframe
                      src={videoUrl}
                      title="Agri Green Mission Video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="absolute inset-0 h-full w-full"
                      loading="lazy"
                    />

                    {/* Decorative overlay */}
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/25">
                      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-agri/90 shadow-lg">
                        <Play className="ml-1 text-2xl text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-nature" />
                    <span>Watch Agri Green Story</span>
                  </div>
                </div>

                {/* Floating Tip */}
                <motion.div
                  className="absolute -bottom-6 right-0 flex items-center gap-2 rounded-full bg-gradient-to-r from-agri to-orange-600 px-4 py-2 text-xs font-medium text-white shadow-lg md:text-sm"
                >
                  <Play className="w-4 h-4" />
                  <span>Tip: Play video to explore</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* --- Mission & Vision --- */}
        <div id="MISSION-VISION" className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {/* Mission */}
          <motion.div whileHover={{ y: -5 }} className="h-full">
            <div className="relative h-full rounded-3xl border border-nature/30 bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-nature/10 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-nature to-emerald-600 shadow-lg">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-serif md:text-4xl">
                  Our Mission
                </h2>
              </div>
              <p className="text-base leading-relaxed text-justify text-muted-foreground md:text-lg">
                To empower farming communities with sustainable agroforestry,
                climate-smart agriculture & eco-innovation to combat climate
                change, pollution & environmental degradation. By 2035, we aim to
                revolutionize natural resource management through community-led
                action, creating a greener, self-sustaining future.
              </p>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div whileHover={{ y: -5 }} className="h-full">
            <div className="relative h-full rounded-3xl border border-climate/30 bg-card p-8 shadow-lg transition-all duration-300 hover:shadow-climate/10 md:p-10">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-climate to-blue-600 shadow-lg">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-foreground font-serif md:text-4xl">
                  Our Vision
                </h2>
              </div>
              <p className="text-base text-justify leading-relaxed text-muted-foreground md:text-lg">
                To transform agriculture by promoting agroforestry and empowering
                communities to adopt sustainable practices that combat climate
                change, restore ecosystems, and ensure food security. We envision a
                greener planet by integrating innovative technologies with
                environmental stewardship.
              </p>
            </div>
          </motion.div>
        </div>

        {/* --- Core Values --- */}
        <div className="relative rounded-3xl bg-secondary/50 p-8 md:p-12 border border-border">
          <div className="relative">
            {/* Section Header */}
            <motion.div className="mb-8 md:mb-12">
              <h2 className="mb-4 text-3xl font-bold text-foreground md:text-5xl lg:text-6xl font-serif">
                Our Core Values
              </h2>
              <p className="max-w-4xl text-base text-muted-foreground md:text-lg">
                At{" "}
                <span className="font-semibold text-nature">
                  Agri Green Foundation
                </span>
                , we are driven by sustainability, innovation, collaboration,
                resilience, and integrity.
              </p>
            </motion.div>

            {/* Values Grid */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {CORE_VALUES.map(({ title, description, Icon }) => (
                <motion.div
                  key={title}
                  className="flex gap-4 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex-shrink-0">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-nature/10 text-nature group-hover:bg-nature group-hover:text-white transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-foreground group-hover:text-nature transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
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