"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react"; // Replaced react-icons

interface PersonModalProps {
  person: {
    imgLink: string;
    name: string;
    position: string;
    linkedInLink: string;
    description: string;
  };
  onClose: () => void;
}

export default function PersonModal({ person, onClose }: PersonModalProps) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-lg w-full p-6 relative border border-gray-200 dark:border-gray-800"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        {/* Content */}
        <div className="text-center">
          <img
            src={person.imgLink}
            alt={person.name}
            className="w-32 h-32 rounded-full object-cover mx-auto shadow-md border-4 border-gray-50 dark:border-gray-800"
          />
          <h3 className="text-2xl font-bold mt-4 text-green-700 dark:text-green-400">
            {person.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mt-1 font-medium">
            {person.position}
          </p>
          <p className="text-gray-700 dark:text-gray-300 mt-5 leading-relaxed text-justify text-sm md:text-base">
            {person.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}