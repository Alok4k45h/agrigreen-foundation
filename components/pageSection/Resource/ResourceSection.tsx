"use client";

import { FaFilePdf, FaBook, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const resources = [
  {
    title: "Agroforestry Manual",
    desc: "An in-depth guide on sustainable agroforestry practices.",
    icon: <FaBook className="text-green-700 text-3xl" />,
    link: "https://drive.google.com/file/d/EXAMPLE_1/view?usp=sharing",
  },
  {
    title: "Soil Health Guide",
    desc: "Best practices to monitor and improve soil health.",
    icon: <FaFilePdf className="text-green-700 text-3xl" />,
    link: "https://drive.google.com/file/d/EXAMPLE_2/view?usp=sharing",
  },
  {
    title: "Climate-Smart Agriculture",
    desc: "Techniques to make agriculture climate-resilient.",
    icon: <FaFilePdf className="text-green-700 text-3xl" />,
    link: "https://drive.google.com/file/d/EXAMPLE_3/view?usp=sharing",
  },
];

export default function ResourceSection() {
  return (
    <section className="bg-green-50 min-h-screen py-14 px-6 md:px-16 text-gray-800">
      <div className="max-w-6xl mx-auto space-y-12 text-center">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">📚 Our Resources</h1>
          <p className="text-lg text-gray-700">
            Download curated knowledge guides, reports, and manuals that help you participate in sustainable agricultural development.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {resources.map((res, i) => (
            <motion.a
              key={i}
              href={res.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.03 }}
              className="bg-white border border-green-200 rounded-xl shadow-md p-6 text-left flex flex-col gap-4 transition hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {res.icon}
                  <h3 className="text-xl font-semibold text-green-900">{res.title}</h3>
                </div>
                <FaExternalLinkAlt className="text-green-500 text-sm" />
              </div>
              <p className="text-sm text-gray-600">{res.desc}</p>
            </motion.a>
          ))}
        </div>

        <div className="pt-8">
          <a
            href="https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-700 text-white font-medium py-3 px-6 rounded-lg shadow hover:bg-green-800 transition"
          >
            📁 View All Resources on Google Drive
          </a>
        </div>
      </div>
    </section>
  );
}
