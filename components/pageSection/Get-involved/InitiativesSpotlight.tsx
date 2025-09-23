"use client";

import SpotlightCard from "@/components/common/SpotlightCard";
import { motion } from "framer-motion";

const data = [
  {
    title: "Youth Agro-Entrepreneurship Program",
    subtitle: "150 participants",
    Progress:50,
  },
  {
    title: "Million Trees Challenge",
    subtitle: "Progress",
    progress: 65,
  },
  {
    title: "Smart Farming Webinars",
    subtitle: "Next Event",
    date: "July 15, 2025",
  },
];

export default function InitiativesSpotlight() {
  return (
    <section className="w-full py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl md:text-3xl font-bold text-green-800 mb-8"
      >
        Current Initiatives Spotlight
      </motion.h2>

      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex justify-center gap-4 px-4 md:px-12 snap-x snap-mandatory pb-4 mx-auto max-w-5xl">
          {data.map((item, index) => (
            <div key={index} className="snap-center flex-shrink-0">
              <SpotlightCard {...item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
