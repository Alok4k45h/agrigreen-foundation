import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface PathCardProps {
  title: string;
  points: string[];
  icon: LucideIcon;
}

export default function PathCard({
  title,
  points,
  icon: Icon,
}: PathCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="flex flex-col justify-between bg-green-50 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition-shadow duration-300 border border-green-400 max-w-xs w-full"
    >
      <div>
        {/* Changed text-4xl to w-9 h-9 (36px) for proper Lucide sizing */}
        <Icon className="w-9 h-9 text-green-600 mb-4 mx-auto" />
        <h3 className="text-lg font-bold text-green-900 mb-3">{title}</h3>
        <ul className="text-gray-600 text-sm list-disc list-inside space-y-2">
          {points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
      
    </motion.div>
  );
}