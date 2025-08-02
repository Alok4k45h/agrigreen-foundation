"use client";

import { FaFilePdf, FaBook, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const resources = [
  {
    title: "Natural Farming",
    desc: "An in-depth guide on natural farming techniques.",
    icon: <FaBook className="text-green-700 text-3xl" />,
    link: "https://drive.google.com/file/d/101C2ZC9tnGWD5Dr0C2DQIGZ4hdTopEQN/view?usp=sharing",
  },
  {
    title: "Waste Management",
    desc: "2nd National Conference on Technology Advancements in Waste Management: Challenges and Opportunities-2025 at IIT (ISM) Dhanbad",
    icon: <FaFilePdf className="text-green-700 text-3xl" />,
    link: "https://drive.google.com/file/d/1PdwWsXntW-j74hderkn05kEo0B8ZRFYl/view?usp=sharing",
  },
  {
    title: "Felling of Trees in Agriculture Land",
    desc: "Model Rules for Felling of Trees in Agriculture Land",
    icon: <FaFilePdf className="text-green-700 text-3xl" />,
    link: "https://drive.google.com/file/d/11X6wO-06Vk_s2eN06br7gA5fceDL-yg4/view?usp=sharing",
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
            href="https://drive.google.com/drive/folders/1UrV6cO-4yWSrLd0bdvJe8r2S1m_MrKF3?usp=sharing"
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
