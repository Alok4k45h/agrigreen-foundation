"use client";


import PathCard from "@/components/common/PathCard";
import { motion } from "framer-motion";
import { FaHandsHelping, FaHandshake, FaChartLine } from "react-icons/fa";

const engagementPaths = [
  {
    id: 1,
    title: "Volunteer",
    icon: FaHandsHelping,
    points: [
      "Agroforestry field programs",
      "Youth mentorship initiatives",
      "Tech innovation projects",
    ], // Optional for routing
  },
  {
    id: 2,
    title: "Partner",
    icon: FaHandshake,
    points: [
      "Corporate sustainability programs",
      "Research collaborations",
      "School/University partnerships",
    ],
    
  },
  {
    id: 3,
    title: "Donate",
    icon: FaChartLine,
    points: [
      "₹500 = 5 saplings planted",
      "₹2000 = Trains 1 farmer",
    ],
    
  },
];

export default function EngagementPathways() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="text-green-600 text-lg md:text-xl font-medium tracking-wide">
            Get Involved
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mt-2">
            Engagement Pathways
          </h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto text-base">
            Join Agri Green in building a sustainable future through volunteerism,
            partnership, or donations.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-8">
          {engagementPaths.map((path) => (
            <PathCard
              key={path.id}
              title={path.title}
              points={path.points}
              icon={path.icon}
              
            />
          ))}
        </div>
      </div>
    </section>
  );
}
