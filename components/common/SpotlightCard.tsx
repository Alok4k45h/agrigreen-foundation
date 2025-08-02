// app/components/spotlight/SpotlightCard.tsx

"use client";

import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  progress?: number;
  date?: string;
};

export default function SpotlightCard({ title, subtitle, progress, date }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-md p-5 min-w-[240px] flex flex-col justify-between transition-all border border-green-100"
    >
      <div>
        <h4 className="text-lg font-bold text-green-700 mb-2">{title}</h4>
        <p className="text-sm text-gray-600 mb-3">{subtitle}</p>

        {progress !== undefined && (
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 1 }}
              className="bg-green-600 h-2 rounded-full"
            />
          </div>
        )}

        {date && <p className="text-xs text-gray-500 mt-1">Next on: {date}</p>}
      </div>
    </motion.div>
  );
}
