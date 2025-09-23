import { FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

interface PersonCardProps {
  imgLink: string;
  name: string;
  position: string;
  linkedInLink: string;
  onViewBio: () => void;
}

export default function PersonCard({
  imgLink,
  name,
  position,
  linkedInLink,
  onViewBio,
}: PersonCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative rounded-lg overflow-hidden shadow-lg group bg-white"
    >
      <img
        src={imgLink}
        alt={name}
        className="object-cover w-full h-100 group-hover:brightness-75 transition duration-300"
      />
      <div className="absolute bottom-0 w-full bg-black/60 group-hover:bg-white/90 text-white group-hover:text-green-900 px-4 py-3 transition duration-300 text-center">
        <h3 className="text-lg font-bold">{name}</h3>
        <p className="text-sm">{position}</p>

        <div className="flex justify-center gap-3 mt-3">
          {linkedInLink && (
            <a
              href={linkedInLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1  hover:text-blue-800 transition"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          )}

          <button
            onClick={onViewBio}
            className="px-4 py-1 rounded-full bg-green-700 text-white text-sm hover:bg-green-800 transition"
          >
            View Bio
          </button>
        </div>
      </div>
    </motion.div>
  );
}
