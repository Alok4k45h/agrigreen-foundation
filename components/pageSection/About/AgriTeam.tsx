
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, X, Quote, Sprout, ArrowRight, User } from "lucide-react";

// --- Data Configuration ---
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Dr. Kamal Krishna Singh",
    position: "Founder & Secretary",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1758638863/Kamal-web_zkqpih.jpg",
    linkedin: "",
    theme: "nature", // Green
    bio: "A seasoned professional with hands-on experience building agri-tech start-ups, innovative farming solutions, and market linkages for rural communities. Holds a Doctorate in Biotechnology, GATE IIT Kharagpur, and further studies from IIM Indore.",
    quote: "Innovation is the seed of sustainability."
  },
  {
    id: 2,
    name: "Nitish Shankar",
    position: "President",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1758639094/Nitish_kkschi.jpg",
    linkedin: "https://www.linkedin.com/in/nitish-shankar-36454819",
    theme: "agri", // Yellow
    bio: "An NRLM Fellow (Govt. of India) and expert in promoting livelihood enhancement programs for rural youth, farm-based plantations & digitization of agriculture. Holds a Post Graduate Diploma in Forestry Management from IIFM, Bhopal.",
    quote: "Empowering youth is empowering the future."
  },
  {
    id: 3,
    name: "Dr. Dhananjay Kumar",
    position: "Treasurer",
    image: "", // Placeholder will be used
    linkedin: "", 
    theme: "climate", // Blue
    bio: "An expert in rural development and management of information systems. Hands-on experience in project management & stakeholders' engagement. Holds a Doctorate in Biotechnology from BIT Mesra.",
    quote: "Data drives sustainable development."
  },
];

// Helper to get theme colors
const getThemeColor = (theme: string) => {
  switch (theme) {
    case "nature": return { text: "text-nature", border: "border-nature", bg: "bg-nature", hex: "#22c55e" };
    case "agri": return { text: "text-agri", border: "border-agri", bg: "bg-agri", hex: "#eab308" };
    case "climate": return { text: "text-climate", border: "border-climate", bg: "bg-climate", hex: "#0ea5e9" };
    default: return { text: "text-white", border: "border-white", bg: "bg-white", hex: "#ffffff" };
  }
};

export default function AgriTeam() {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);

  return (
    <section className="relative py-24 overflow-hidden  bg-gray-950">
      
      {/* --- Background Ambience --- */}
     <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-emerald-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-900/10 rounded-full blur-[100px]" />

        {/* Grain Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>


      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Sprout size={16} className="text-nature" /> 
            <span className="tracking-wide">Visionaries</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-serif"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature via-agri to-climate">Agri Team</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-gray-400 leading-relaxed"
          >
            The passionate minds dreaming the vision and building a sustainable future through innovation, science, and community dedication.
          </motion.p>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {TEAM_MEMBERS.map((member, idx) => (
            <TeamCard 
              key={member.id} 
              member={member} 
              index={idx}
              onSelect={() => setSelectedMember(member)} 
            />
          ))}
        </div>

      </div>

      {/* --- Modal Overlay --- */}
      <AnimatePresence>
        {selectedMember && (
          <TeamModal 
            member={selectedMember} 
            onClose={() => setSelectedMember(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}

// --- Sub-Component: Team Card ---
function TeamCard({ member, index, onSelect }: { member: typeof TEAM_MEMBERS[0], index: number, onSelect: () => void }) {
  const styles = getThemeColor(member.theme);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15, duration: 0.5 }}
      whileHover={{ y: -10 }}
      onClick={onSelect}
      className={`group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer bg-[#122b22]/30 border border-white/5 transition-all duration-500 shadow-xl hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] hover:border-${member.theme}/50`}
      style={{ borderColor: `color-mix(in srgb, ${styles.hex}, transparent 80%)` }}
    >
      {/* Image Layer */}
      <div className="absolute inset-0">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#122b22] to-[#070e0b] flex items-center justify-center">
            <User size={64} className={`${styles.text} opacity-20`} />
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#070e0b] via-[#070e0b]/50 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-80" />
      </div>

      {/* Content Layer */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className={`w-12 h-1 mb-4 rounded-full ${styles.bg}`} />
          
          <h3 className={`text-2xl font-bold text-white mb-1 transition-colors group-hover:${styles.text}`}>
            {member.name}
          </h3>
          <p className={`font-medium text-sm tracking-wide uppercase mb-4 ${styles.text}`}>
            {member.position}
          </p>
          
          <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
             <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">
               {member.bio}
             </p>
             <span className={`${styles.text} text-sm font-bold flex items-center gap-2`}>
               Read Full Bio <ArrowRight size={14} />
             </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// --- Sub-Component: Modal ---
function TeamModal({ member, onClose }: { member: typeof TEAM_MEMBERS[0], onClose: () => void }) {
  const styles = getThemeColor(member.theme);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[1000] flex items-center justify-center px-4 bg-[#070e0b]/90 backdrop-blur-md"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-4xl bg-[#122b22] rounded-3xl overflow-hidden shadow-2xl border border-white/10 grid md:grid-cols-2 max-h-[90vh] overflow-y-auto"
        style={{ borderColor: `color-mix(in srgb, ${styles.hex}, transparent 80%)` }}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 text-white hover:bg-white/10 transition-colors"
        >
          <X size={20} />
        </button>

        {/* Left: Image Side */}
        <div className="relative h-64 md:h-auto bg-black">
          {member.image ? (
            <Image
              src={member.image}
              alt={member.name}
              fill
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#070e0b]">
              <User size={80} className={`${styles.text} opacity-20`} />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#122b22] to-transparent md:bg-gradient-to-r" />
        </div>

        {/* Right: Content Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-6">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">{member.name}</h3>
            <p className={`${styles.text} font-medium text-lg uppercase tracking-wider`}>{member.position}</p>
          </div>

          <div className="relative pl-6 border-l-2 mb-8" style={{ borderColor: styles.hex }}>
            <Quote className={`absolute -top-3 -left-3 ${styles.text} bg-[#122b22] p-1 h-8 w-8`} />
            <p className="text-gray-300 italic text-lg leading-relaxed">&apos;{member.quote}&apos;</p>
          </div>

          <div className="prose prose-invert prose-sm text-gray-400 mb-8 leading-relaxed">
            <p>{member.bio}</p>
          </div>

          {member.linkedin && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-6 py-3 text-black rounded-xl font-semibold transition-all hover:scale-105 w-fit shadow-lg ${styles.bg}`}
            >
              <Linkedin size={20} />
              <span>Connect on LinkedIn</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}