"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-green-300 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left text-lg font-semibold text-green-800 focus:outline-none"
      >
        {question}
        {isOpen ? (
          <FaChevronUp className="text-green-600" />
        ) : (
          <FaChevronDown className="text-green-600" />
        )}
      </button>

      {isOpen && (
        <p className="mt-2 text-gray-700 text-base transition-all duration-300">
          {answer}
        </p>
      )}
    </div>
  );
}
