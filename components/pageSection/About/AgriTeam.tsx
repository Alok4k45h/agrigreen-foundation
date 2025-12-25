"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin, Quote, Sprout, ArrowRight, User, X } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";

// --- Team Data ---
const TEAM_MEMBERS = [
  {
    id: 1,
    name: "Dr. Kamal Krishna Singh",
    position: "Founder & Secretary",
    image: "",
    linkedin: "",
    theme: "nature",
    bio: "A seasoned professional with hands-on experience building agri-tech start-ups, innovative farming solutions, and market linkages for rural communities. Holds a Doctorate in Biotechnology, GATE IIT Kharagpur, and further studies from IIM Indore.",
    quote: "Innovation is the seed of sustainability."
  },
  {
    id: 2,
    name: "Nitish Shankar",
    position: "President",
    image: "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1758639094/Nitish_kkschi.jpg",
    linkedin: "https://www.linkedin.com/in/nitish-shankar-36454819",
    theme: "agri",
    bio: "An NRLM Fellow (Govt. of India) and expert in promoting livelihood enhancement programs for rural youth, farm-based plantations & digitization of agriculture. Holds a Post Graduate Diploma in Forestry Management from IIFM, Bhopal.",
    quote: "Empowering youth is empowering the future."
  },
  {
    id: 3,
    name: "Dr. Dhananjay Kumar",
    position: "Treasurer",
    image: "", 
    linkedin: "", 
    theme: "climate",
    bio: "An expert in rural development and management of information systems. Hands-on experience in project management & stakeholders' engagement. Holds a Doctorate in Biotechnology from BIT Mesra.",
    quote: "Data drives sustainable development."
  },
   {
    id: 4,
    name: "Amit Kumar",
    position: "Board Member",
    image: "https://res.cloudinary.com/alokkumar07/image/upload/v1766595037/Agrigreen/Amit_zbree2.jpg", 
    linkedin: "", 
    theme: "nature",
    bio: "An expert in technical agriculture, small processing units for FPCs, Passinate about supporting small agri based rural enterprises and market linkage.Hold both Graduate and Management degree from RAU, Pusa - Bihar.",
    quote: "When agriculture respects nature, climate thrives."
  },
];

// Helper to get theme colors
const getThemeColor = (theme: string) => {
  switch (theme) {
    case "nature": return { text: "text-nature", border: "border-nature", bg: "bg-nature", hex: "var(--nature)" };
    case "agri": return { text: "text-agri", border: "border-agri", bg: "bg-agri", hex: "var(--agri)" };
    case "climate": return { text: "text-climate", border: "border-climate", bg: "bg-climate", hex: "var(--climate)" };
    default: return { text: "text-foreground", border: "border-border", bg: "bg-primary", hex: "var(--primary)" };
  }
};

export default function AgriTeam() {
  const [selectedMember, setSelectedMember] = useState<typeof TEAM_MEMBERS[0] | null>(null);

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-nature/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-agri/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-foreground text-sm font-bold mb-6 backdrop-blur-md"
          >
            <Sprout size={16} className="text-nature" /> 
            <span className="tracking-wide">Visionaries</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif"
          >
            Meet the <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature via-agri to-climate">Agri Team</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            The passionate minds dreaming the vision and building a sustainable future through innovation, science, and community dedication.
          </motion.p>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* --- Accessible Dialog Modal --- */}
      <Dialog open={!!selectedMember} onOpenChange={(open) => !open && setSelectedMember(null)}>
        <DialogContent className="sm:max-w-4xl w-[90vw] p-0 overflow-hidden bg-card border-border sm:rounded-3xl gap-0">
          
          {/* Close Button (Custom positioning) */}
          <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-amber-700 p-2 text-white focus:outline-2 focus:ring-1 focus:ring-white">
            <X size={16} />
            <span className="sr-only">Close</span>
          </DialogClose>

          {/* Accessible Hidden Title (Fixed Error) */}
          <DialogTitle className="sr-only">
            {selectedMember?.name} Details
          </DialogTitle>

          {selectedMember && (
            <div className="grid md:grid-cols-2 max-h-[85vh] overflow-y-auto md:overflow-hidden">
               {/* Left: Image Side */}
                <div className="relative h-64 md:h-full min-h-[400px] bg-muted">
                    {selectedMember.image ? (
                        <Image
                        src={selectedMember.image}
                        alt={selectedMember.name}
                        fill
                        className="object-cover"
                        priority
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-secondary">
                        <User size={80} className="text-muted-foreground opacity-20" />
                        </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r" />
                </div>

                {/* Right: Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
                    <div className="mb-6">
                        <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-serif">
                            {selectedMember.name}
                        </h3>
                        <p className={`${getThemeColor(selectedMember.theme).text} font-medium text-lg uppercase tracking-wider`}>
                            {selectedMember.position}
                        </p>
                    </div>

                    <div className="relative pl-6 border-l-2 mb-8 border-border">
                        <Quote className={`absolute -top-3 -left-3 ${getThemeColor(selectedMember.theme).text} bg-card p-1 h-8 w-8`} />
                        <p className="text-muted-foreground italic text-lg leading-relaxed">
                            &apos;{selectedMember.quote}&apos;
                        </p>
                    </div>

                    <div className="prose prose-sm text-muted-foreground mb-8 leading-relaxed">
                        <p>{selectedMember.bio}</p>
                    </div>

                    {selectedMember.linkedin && (
                        <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 w-fit shadow-md hover:shadow-lg text-white ${getThemeColor(selectedMember.theme).bg}`}
                        >
                        <Linkedin size={20} />
                        <span>Connect on LinkedIn</span>
                        </a>
                    )}
                </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
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
      className={`group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer bg-card border border-border transition-all duration-500 shadow-xl hover:shadow-2xl`}
      style={{ borderColor: `color-mix(in srgb, ${styles.hex}, transparent 80%)` }}
    >
      {/* Image Layer */}
      <div className="absolute inset-0">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-secondary flex items-center justify-center">
            <User size={64} className={`${styles.text} opacity-20`} />
          </div>
        )}
        
        {/* Gradient Overlay - Always dark at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />
      </div>

      {/* Content Layer (Always White Text because of dark overlay) */}
      <div className="absolute inset-0 p-8 flex flex-col justify-end">
        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          <div className={`w-12 h-1 mb-4 rounded-full ${styles.bg}`} />
          
          <h3 className={`text-2xl font-bold text-white mb-1 transition-colors`}>
            {member.name}
          </h3>
          <p className={`font-medium text-sm tracking-wide uppercase mb-4 ${styles.text}`}>
            {member.position}
          </p>
          
          <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
             <p className="text-gray-300 text-sm line-clamp-2 mb-4 leading-relaxed">
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