// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import { Linkedin, Quote, Sprout, ArrowRight, User, X } from "lucide-react";
// import {
//   Dialog,
//   DialogContent,
//   DialogTitle,
//   DialogClose,
// } from "@/components/ui/dialog";

// // --- Team Data ---
// const TEAM_MEMBERS = [
//   {
//     id: 1,
//     name: "Dr. Kamal Krishna Singh",
//     position: "Founder & Secretary",
//     image: "",
//     linkedin: "",
//     theme: "nature",
//     bio: "A seasoned professional with hands-on experience building agri-tech start-ups, innovative farming solutions, and market linkages for rural communities. Holds a Doctorate in Biotechnology, GATE IIT Kharagpur, and further studies from IIM Indore.",
//     quote: "Innovation is the seed of sustainability.",
//   },
//   {
//     id: 2,
//     name: "Nitish Shankar",
//     position: "President",
//     image:
//       "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1758639094/Nitish_kkschi.jpg",
//     linkedin: "https://www.linkedin.com/in/nitish-shankar-36454819",
//     theme: "agri",
//     bio: "An NRLM Fellow (Govt. of India) and expert in promoting livelihood enhancement programs for rural youth, farm-based plantations & digitization of agriculture. Holds a Post Graduate Diploma in Forestry Management from IIFM, Bhopal.",
//     quote: "Empowering youth is empowering the future.",
//   },
//   {
//     id: 3,
//     name: "Dr. Dhananjay Kumar",
//     position: "Treasurer",
//     image: "",
//     linkedin: "",
//     theme: "climate",
//     bio: "An expert in rural development and management of information systems. Hands-on experience in project management & stakeholders' engagement. Holds a Doctorate in Biotechnology from BIT Mesra.",
//     quote: "Data drives sustainable development.",
//   },
//   {
//     id: 4,
//     name: "Amit Kumar",
//     position: "Board Member",
//     image: "",
//     linkedin: "",
//     theme: "nature",
//     bio: "An expert in technical agriculture, small processing units for FPCs, Passinate about supporting small agri based rural enterprises and market linkage.Hold both Graduate and Management degree from RAU, Pusa - Bihar.",
//     quote: "When agriculture respects nature, climate thrives.",
//   },
// ];

// // Helper to get theme colors
// const getThemeColor = (theme: string) => {
//   switch (theme) {
//     case "nature":
//       return {
//         text: "text-nature",
//         border: "border-nature",
//         bg: "bg-nature",
//         hex: "var(--nature)",
//       };
//     case "agri":
//       return {
//         text: "text-agri",
//         border: "border-agri",
//         bg: "bg-agri",
//         hex: "var(--agri)",
//       };
//     case "climate":
//       return {
//         text: "text-climate",
//         border: "border-climate",
//         bg: "bg-climate",
//         hex: "var(--climate)",
//       };
//     default:
//       return {
//         text: "text-foreground",
//         border: "border-border",
//         bg: "bg-primary",
//         hex: "var(--primary)",
//       };
//   }
// };

// export default function AgriTeam() {
//   const [selectedMember, setSelectedMember] = useState<
//     (typeof TEAM_MEMBERS)[0] | null
//   >(null);

//   return (
//     <section className="relative py-24 overflow-hidden bg-background">
//       {/* --- Background Ambience --- */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-0 w-125 h-125 bg-nature/10 rounded-full blur-[100px]" />
//         <div className="absolute bottom-0 right-0 w-125 h-125 bg-agri/10 rounded-full blur-[100px]" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
//         {/* --- Header --- */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border text-foreground text-sm font-bold mb-6 backdrop-blur-md"
//           >
//             <Sprout size={16} className="text-nature" />
//             <span className="tracking-wide">Visionaries</span>
//           </motion.div>

//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             viewport={{ once: true }}
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif"
//           >
//             Meet the{" "}
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-nature via-agri to-climate">
//               Agri Team
//             </span>
//           </motion.h2>

//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//             className="text-lg text-muted-foreground leading-relaxed"
//           >
//             The passionate minds dreaming the vision and building a sustainable
//             future through innovation, science, and community dedication.
//           </motion.p>
//         </div>

//         {/* --- Team Grid --- */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {TEAM_MEMBERS.map((member, idx) => (
//             <TeamCard
//               key={member.id}
//               member={member}
//               index={idx}
//               onSelect={() => setSelectedMember(member)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* --- Accessible Dialog Modal --- */}
//       <Dialog
//         open={!!selectedMember}
//         onOpenChange={(open) => !open && setSelectedMember(null)}
//       >
//         <DialogContent className="sm:max-w-4xl w-[90vw] p-0 overflow-hidden bg-card border-border sm:rounded-3xl gap-0">
//           {/* Close Button (Custom positioning) */}
//           <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-amber-700 p-2 text-white focus:outline-2 focus:ring-1 focus:ring-white">
//             <X size={16} />
//             <span className="sr-only">Close</span>
//           </DialogClose>

//           {/* Accessible Hidden Title (Fixed Error) */}
//           <DialogTitle className="sr-only">
//             {selectedMember?.name} Details
//           </DialogTitle>

//           {selectedMember && (
//             <div className="grid md:grid-cols-2 max-h-[85vh] overflow-y-auto md:overflow-hidden">
//               {/* Left: Image Side */}
//               <div className="relative h-64 md:h-full min-h-100 bg-muted">
//                 {selectedMember.image ? (
//                   <Image
//                     src={selectedMember.image}
//                     alt={selectedMember.name}
//                     fill
//                     className="object-cover"
//                     priority
//                   />
//                 ) : (
//                   <div className="w-full h-full flex items-center justify-center bg-secondary">
//                     <User
//                       size={80}
//                       className="text-muted-foreground opacity-20"
//                     />
//                   </div>
//                 )}
//                 <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent md:bg-linear-to-r" />
//               </div>

//               {/* Right: Content Side */}
//               <div className="p-8 md:p-12 flex flex-col justify-center bg-card">
//                 <div className="mb-6">
//                   <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-2 font-serif">
//                     {selectedMember.name}
//                   </h3>
//                   <p
//                     className={`${getThemeColor(selectedMember.theme).text} font-medium text-lg uppercase tracking-wider`}
//                   >
//                     {selectedMember.position}
//                   </p>
//                 </div>

//                 <div className="relative pl-6 border-l-2 mb-8 border-border">
//                   <Quote
//                     className={`absolute -top-3 -left-3 ${getThemeColor(selectedMember.theme).text} bg-card p-1 h-8 w-8`}
//                   />
//                   <p className="text-muted-foreground italic text-lg leading-relaxed">
//                     &apos;{selectedMember.quote}&apos;
//                   </p>
//                 </div>

//                 <div className="prose prose-sm text-muted-foreground mb-8 leading-relaxed">
//                   <p>{selectedMember.bio}</p>
//                 </div>

//                 {selectedMember.linkedin && (
//                   <a
//                     href={selectedMember.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all hover:scale-105 w-fit shadow-md hover:shadow-lg text-white ${getThemeColor(selectedMember.theme).bg}`}
//                   >
//                     <Linkedin size={20} />
//                     <span>Connect on LinkedIn</span>
//                   </a>
//                 )}
//               </div>
//             </div>
//           )}
//         </DialogContent>
//       </Dialog>
//     </section>
//   );
// }

// // --- Sub-Component: Team Card ---
// function TeamCard({
//   member,
//   index,
//   onSelect,
// }: {
//   member: (typeof TEAM_MEMBERS)[0];
//   index: number;
//   onSelect: () => void;
// }) {
//   const styles = getThemeColor(member.theme);

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 30 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: index * 0.15, duration: 0.5 }}
//       whileHover={{ y: -10 }}
//       onClick={onSelect}
//       className={`group relative h-112.5 rounded-3xl overflow-hidden cursor-pointer bg-card border border-border transition-all duration-500 shadow-xl hover:shadow-2xl`}
//       style={{
//         borderColor: `color-mix(in srgb, ${styles.hex}, transparent 80%)`,
//       }}
//     >
//       {/* Image Layer */}
//       <div className="absolute inset-0">
//         {member.image ? (
//           <Image
//             src={member.image}
//             alt={member.name}
//             fill
//             priority
//             className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
//             sizes="(max-width: 768px) 100vw, 33vw"
//           />
//         ) : (
//           <div className="w-full h-full bg-secondary flex items-center justify-center">
//             <User size={64} className={`${styles.text} opacity-20`} />
//           </div>
//         )}

//         {/* Gradient Overlay - Always dark at bottom for text readability */}
//         <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70" />
//       </div>

//       {/* Content Layer (Always White Text because of dark overlay) */}
//       <div className="absolute inset-0 p-8 flex flex-col justify-end">
//         <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
//           <div className={`w-12 h-1 mb-4 rounded-full ${styles.bg}`} />

//           <h3
//             className={`text-2xl font-bold text-white mb-1 transition-colors`}
//           >
//             {member.name}
//           </h3>
//           <p
//             className={`font-medium text-sm tracking-wide uppercase mb-4 ${styles.text}`}
//           >
//             {member.position}
//           </p>

//           <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
//             <p className="text-gray-300 text-sm line-clamp-2 mb-4 leading-relaxed">
//               {member.bio}
//             </p>
//             <span
//               className={`${styles.text} text-sm font-bold flex items-center gap-2`}
//             >
//               Read Full Bio <ArrowRight size={14} />
//             </span>
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// }

"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Quote, Sprout, ArrowRight, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";

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
    quote: "Innovation is the seed of sustainability.",
  },
  {
    id: 2,
    name: "Nitish Shankar",
    position: "President",
    image:
      "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1758639094/Nitish_kkschi.jpg",
    linkedin: "https://www.linkedin.com/in/nitish-shankar-36454819",
    theme: "agri",
    bio: "An NRLM Fellow (Govt. of India) and expert in promoting livelihood enhancement programs for rural youth, farm-based plantations & digitization of agriculture. Holds a Post Graduate Diploma in Forestry Management from IIFM, Bhopal.",
    quote: "Empowering youth is empowering the future.",
  },
  {
    id: 3,
    name: "Dr. Dhananjay Kumar",
    position: "Treasurer",
    image: "",
    linkedin: "",
    theme: "climate",
    bio: "An expert in rural development and management of information systems. Hands-on experience in project management & stakeholders' engagement. Holds a Doctorate in Biotechnology from BIT Mesra.",
    quote: "Data drives sustainable development.",
  },
  {
    id: 4,
    name: "Amit Kumar",
    position: "Board Member",
    image: "",
    linkedin: "",
    theme: "nature",
    bio: "An expert in technical agriculture, small processing units for FPCs, Passionate about supporting small agri based rural enterprises and market linkage. Holds both Graduate and Management degree from RAU, Pusa - Bihar.",
    quote: "When agriculture respects nature, climate thrives.",
  },
];

// --- Helpers ---
const getInitials = (name: string) => {
  const cleanName = name.replace(/^(Dr\.|Mr\.|Ms\.|Mrs\.)\s+/i, "");
  const parts = cleanName.split(" ").filter(Boolean);
  if (parts.length === 0) return "AG";
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
};

const getThemeStyles = (theme: string) => {
  switch (theme) {
    case "nature":
      return {
        text: "text-emerald-600 dark:text-emerald-400",
        bg: "bg-emerald-100 dark:bg-emerald-900/30",
        border: "border-emerald-200 dark:border-emerald-800/50",
        gradient: "from-emerald-500 to-green-500",
        glow: "group-hover:shadow-emerald-500/20",
      };
    case "agri":
      return {
        text: "text-amber-600 dark:text-amber-400",
        bg: "bg-amber-100 dark:bg-amber-900/30",
        border: "border-amber-200 dark:border-amber-800/50",
        gradient: "from-amber-500 to-orange-500",
        glow: "group-hover:shadow-amber-500/20",
      };
    case "climate":
      return {
        text: "text-cyan-600 dark:text-cyan-400",
        bg: "bg-cyan-100 dark:bg-cyan-900/30",
        border: "border-cyan-200 dark:border-cyan-800/50",
        gradient: "from-cyan-500 to-blue-500",
        glow: "group-hover:shadow-cyan-500/20",
      };
    default:
      return {
        text: "text-gray-600 dark:text-gray-400",
        bg: "bg-gray-100 dark:bg-gray-800",
        border: "border-gray-200 dark:border-gray-700",
        gradient: "from-gray-500 to-gray-600",
        glow: "group-hover:shadow-gray-500/20",
      };
  }
};

// --- Sub-Components ---
function MemberAvatar({
  member,
  size = "md",
}: {
  member: (typeof TEAM_MEMBERS)[0];
  size?: "md" | "lg";
}) {
  const styles = getThemeStyles(member.theme);
  const sizeClasses =
    size === "lg" ? "w-24 h-24 text-3xl" : "w-16 h-16 text-xl";

  return (
    <div
      className={`relative ${sizeClasses} rounded-2xl overflow-hidden shrink-0 shadow-sm border ${styles.border}`}
    >
      {member.image ? (
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover"
          sizes={size === "lg" ? "96px" : "64px"}
        />
      ) : (
        <div
          className={`w-full h-full flex items-center justify-center font-bold font-serif ${styles.bg} ${styles.text}`}
        >
          {getInitials(member.name)}
        </div>
      )}
    </div>
  );
}

export default function AgriTeam() {
  const [selectedMember, setSelectedMember] = useState<
    (typeof TEAM_MEMBERS)[0] | null
  >(null);

  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- Header --- */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-sm font-semibold mb-6 backdrop-blur-md"
          >
            <Sprout size={16} />
            <span className="tracking-widest uppercase text-xs">
              Visionaries
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 font-serif tracking-tight"
          >
            Meet the{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-500 to-amber-500">
              Agri Team
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            The passionate minds dreaming the vision and building a sustainable
            future through innovation, science, and community dedication.
          </motion.p>
        </div>

        {/* --- Team Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TEAM_MEMBERS.map((member, idx) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
            >
              <TeamCard
                member={member}
                onSelect={() => setSelectedMember(member)}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- Dialog Modal --- */}
      <AnimatePresence>
        {selectedMember && (
          <Dialog
            open={!!selectedMember}
            onOpenChange={(open) => !open && setSelectedMember(null)}
          >
            <DialogContent className="sm:max-w-2xl p-0 overflow-hidden bg-white dark:bg-gray-950 border-gray-200 dark:border-gray-800 sm:rounded-3xl shadow-2xl">
              <DialogTitle className="sr-only">
                {selectedMember.name} Profile
              </DialogTitle>

              <DialogClose className="absolute right-4 top-4 z-50 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md p-2 text-white transition-colors">
                <X size={18} />
              </DialogClose>

              <div className="relative">
                {/* Decorative Theme Header Banner */}
                <div
                  className={`h-32 w-full bg-gradient-to-r ${getThemeStyles(selectedMember.theme).gradient}`}
                />

                <div className="px-8 pb-10">
                  {/* Overlapping Avatar */}
                  <div className="absolute top-20 left-8 p-1.5 bg-white dark:bg-gray-950 rounded-3xl">
                    <MemberAvatar member={selectedMember} size="lg" />
                  </div>

                  <div className="pt-20">
                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white font-serif tracking-tight">
                      {selectedMember.name}
                    </h3>
                    <p
                      className={`${getThemeStyles(selectedMember.theme).text} font-semibold text-sm uppercase tracking-wider mt-1 mb-6`}
                    >
                      {selectedMember.position}
                    </p>

                    {/* Highly Contrasted Quote Box */}
                    <div
                      className={`relative p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border ${getThemeStyles(selectedMember.theme).border} mb-6 overflow-hidden`}
                    >
                      <Quote
                        className={`absolute -top-2 -left-2 w-16 h-16 opacity-10 ${getThemeStyles(selectedMember.theme).text}`}
                      />
                      <p className="relative z-10 italic text-gray-900 dark:text-gray-100 font-medium leading-relaxed text-lg">
                        &ldquo;{selectedMember.quote}&rdquo;
                      </p>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm md:text-base mb-8 text-justify">
                      {selectedMember.bio}
                    </p>

                    {selectedMember.linkedin && (
                      <a
                        href={selectedMember.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:scale-[1.02] active:scale-95 shadow-lg bg-gradient-to-r ${getThemeStyles(selectedMember.theme).gradient}`}
                      >
                        <Linkedin size={18} />
                        <span>Connect on LinkedIn</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </AnimatePresence>
    </section>
  );
}

// --- Sub-Component: Team Card ---
function TeamCard({
  member,
  onSelect,
}: {
  member: (typeof TEAM_MEMBERS)[0];
  onSelect: () => void;
}) {
  const styles = getThemeStyles(member.theme);

  return (
    <div
      onClick={onSelect}
      className={`group relative flex flex-col h-full bg-card border border-border rounded-[2rem] p-6 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${styles.glow} overflow-hidden`}
    >
      {/* Subtle Background Glow on Hover */}
      <div
        className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${styles.bg}`}
      />

      {/* Header: Avatar + Title */}
      <div className="flex flex-col gap-4 mb-6 relative z-10">
        <MemberAvatar member={member} size="md" />
        <div>
          <h3 className="text-xl font-bold text-foreground font-serif leading-tight group-hover:text-emerald-500 transition-colors">
            {member.name}
          </h3>
          <p
            className={`${styles.text} text-xs font-bold uppercase tracking-widest mt-1`}
          >
            {member.position}
          </p>
        </div>
      </div>

      {/* Quote / Preview */}
      <div className="flex-grow relative z-10 mb-6">
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
          &quot;{member.quote}&quot;
        </p>
      </div>

      {/* Footer Action */}
      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between relative z-10 group/btn">
        <span className="text-sm font-semibold text-foreground group-hover:text-emerald-500 transition-colors">
          Read Profile
        </span>
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${styles.bg} ${styles.text} group-hover:bg-emerald-500 group-hover:text-white`}
        >
          <ArrowRight
            size={14}
            className="transform group-hover:translate-x-0.5 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}
