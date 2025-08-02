"use client";

import { FaLeaf, FaSeedling, FaGlobe, FaUsers } from "react-icons/fa";
import { motion } from "framer-motion";

const coreValues = [
  {
    title: "Sustainability",
    text: "We promote sustainable agricultural practices that protect the environment, conserve resources, and maintain ecological balance through agroforestry.",
    icon: FaLeaf,
  },
  {
    title: "Innovation",
    text: "We embrace technologies in agriculture, waste management, and renewable energy to drive environmental stewardship and efficiency.",
    icon: FaSeedling,
  },
  {
    title: "Collaboration",
    text: "We engage local communities, farmers, and groups to foster inclusive, community-driven solutions for sustainable development.",
    icon: FaUsers,
  },
  {
    title: "Resilience",
    text: "We build climate-resilient farming systems helping communities adapt and thrive amidst environmental changes.",
    icon: FaGlobe,
  },
  {
    title: "Integrity",
    text: "We maintain the highest standards of transparency, ethics, and accountability in all our actions.",
    icon: FaGlobe,
  },
];

export default function MissionVisionCore() {
  return (
    <section className="py-16 text-gray-800 bg-white" aria-labelledby="mission-vision-core">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">

        {/* Mission & Vision */}
        <div className="flex flex-wrap gap-10 justify-center">
          {/* Mission */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-md p-8 w-full max-w-xl text-white bg-cover bg-center backdrop-blur"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/natural-green-gradient-background-with-grainy-texture_476363-11448.jpg')",
            }}
          >
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">🌱 Our Mission</h2>
            <p className="text-lg leading-relaxed text-justify">
              To empower farming communities with <strong>sustainable agroforestry, climate-smart agriculture & eco-innovation</strong> to combat
              <strong> climate change, pollution & environmental degradation.</strong><br /><br />
              By <strong>2035</strong>, we aim to revolutionize <strong>natural resource management</strong> through <strong>community-led action</strong>,
              creating a greener, self-sustaining future.
            </p>
          </motion.article>

          {/* Vision */}
          <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-2xl shadow-md p-8 w-full max-w-xl text-white bg-cover bg-center backdrop-blur"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/premium-photo/natural-green-gradient-background-with-grainy-texture_476363-11448.jpg')",
            }}
          >
            <h2 className="text-3xl font-bold text-yellow-300 mb-4">🌍 Our Vision</h2>
            <p className="text-lg leading-relaxed text-justify">
              To transform agriculture by promoting <strong>agroforestry</strong> and empowering communities to adopt
              <strong> sustainable practices</strong> that combat <strong>climate change</strong>, restore ecosystems, and ensure food security.<br /><br />
              We envision a greener planet by integrating <strong>innovative technologies</strong> with <strong>environmental stewardship</strong>.
            </p>
          </motion.article>
        </div>

        {/* Core Values */}
        {/* Core Values */}
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  className="text-center"
>
  <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-6">
    Our Core Values
  </h2>
  <p className="max-w-3xl mx-auto text-lg text-gray-700 mb-12 px-4">
    At <strong>Agri Green Foundation</strong>, we are driven by <strong>sustainability, innovation, collaboration, resilience, and integrity</strong>.
  </p>

  <div className="flex flex-wrap md:flex-nowrap justify-center gap-6 md:gap-8 px-4">
    {coreValues.map((value, index) => {
      const Icon = value.icon;
      return (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="flex flex-col items-center text-center p-4 rounded-xl bg-green-50 shadow-md border border-green-200 w-full md:w-1/5"
        >
          <div className="bg-white border border-green-300 rounded-full w-20 h-20 flex items-center justify-center shadow-md mb-4">
            <Icon className="text-green-800 text-3xl" />
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">
            {value.title}
          </h3>
          <p className="text-sm text-gray-700 text-center px-1">
            {value.text}
          </p>
        </motion.div>
      );
    })}
  </div>
</motion.div>

        
      </div>
    </section>
  );
}
