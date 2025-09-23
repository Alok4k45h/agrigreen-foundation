"use client";

import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

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
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 transition"
        >
          <FaTimes size={20} />
        </button>

        {/* Content */}
        <div className="text-center">
          <img
            src={person.imgLink}
            alt={person.name}
            className="w-32 h-32 rounded-full object-cover mx-auto shadow-md"
          />
          <h3 className="text-2xl font-bold mt-4 text-green-800">{person.name}</h3>
          <p className="text-gray-600 mt-1">{person.position}</p>
          <p className="text-gray-700 mt-4 leading-relaxed text-justify">{person.description}</p>
        </div>
      </motion.div>
    </div>
  );
}
