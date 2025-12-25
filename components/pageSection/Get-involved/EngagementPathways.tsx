"use client";

import { motion } from "framer-motion";
import { HandHeart, Handshake, ChartNoAxesCombined, Check, Sprout } from "lucide-react"; // Updated Imports

// --- Data Configuration ---
const ENGAGEMENT_PATHS = [
  {
    id: 1,
    title: "Volunteer",
    subtitle: "Boots on the Ground",
    description: "Join our active community and make a tangible difference through direct action.",
    points: [
      "Agroforestry field programs",
      "Youth mentorship initiatives",
      "Tech innovation projects",
    ],
    icon: HandHeart,
    accent: "from-nature to-emerald-600",
    theme: "nature"
  },
  {
    id: 2,
    title: "Partner",
    subtitle: "Collaborate for Impact",
    description: "Scale your organization's sustainability goals by partnering with our network.",
    points: [
      "Corporate sustainability (CSR)",
      "Research collaborations",
      "School & University ties",
    ],
    icon: Handshake,
    accent: "from-agri to-orange-500",
    theme: "agri"
  },
  {
    id: 3,
    title: "Donate",
    subtitle: "Fuel the Change",
    description: "Your financial contribution directly funds saplings and farmer education.",
    points: [
      "₹500 plants 5 saplings",
      "₹2000 trains 1 farmer",
      "Tax benefits available",
    ],
    icon: ChartNoAxesCombined,
    accent: "from-climate to-indigo-500",
    theme: "climate"
  },
];

export default function EngagementPathways() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-nature/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-agri/10 rounded-full blur-[100px]" />
        {/* Grain Texture */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- Header Section --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-nature/10 border border-nature/20 text-nature text-sm font-medium mb-6">
            <Sprout className="w-4 h-4" /> <span>Engagement Pathways</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 font-serif">
            Be the Change <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature via-agri to-climate">
              You Wish to See.
            </span>
          </h2>
          
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Join Agri Green in building a sustainable future. Whether through time, 
            partnership, or funding, your contribution plants the seeds of tomorrow.
          </p>
        </motion.div>

        {/* --- Cards Grid --- */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ENGAGEMENT_PATHS.map((path, index) => (
            <motion.div
              key={path.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <PathCard {...path} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// --- Path Card Component ---
interface PathCardProps {
  title: string;
  subtitle: string;
  description: string;
  points: string[];
  icon: React.ComponentType<{ className?: string }>;
  accent: string;
}

function PathCard({ title, subtitle, description, points, icon: Icon, accent }: PathCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="relative group h-full"
    >
      {/* 1. Gradient Glow Border Effect */}
      <div className={`absolute -inset-0.5 bg-gradient-to-br ${accent} rounded-[2rem] opacity-30 group-hover:opacity-100 blur transition duration-500`}></div>
      
      {/* 2. Card Content (Adaptive bg-card) */}
      <div className="relative h-full bg-card backdrop-blur-xl rounded-[2rem] p-8 md:p-10 border border-border flex flex-col overflow-hidden shadow-lg">
        
        {/* Top Icon Area */}
        <div className="flex justify-between items-start mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${accent} p-[1px]`}>
            <div className="w-full h-full bg-card rounded-2xl flex items-center justify-center">
              <Icon className="w-7 h-7 text-foreground" />
            </div>
          </div>
          
          {/* Subtle ID number */}
          <span className="text-muted-foreground/20 text-6xl font-bold select-none group-hover:text-muted-foreground/30 transition-colors">
            0{title === "Volunteer" ? 1 : title === "Partner" ? 2 : 3}
          </span>
        </div>

        {/* Titles */}
        <div className="mb-4">
          <span className={`text-xs font-bold tracking-widest uppercase bg-gradient-to-r ${accent} bg-clip-text text-transparent mb-2 block`}>
            {subtitle}
          </span>
          <h3 className="text-2xl font-bold text-foreground transition-colors">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed mb-8 border-b border-border pb-6">
          {description}
        </p>

        {/* Bullet Points */}
        <ul className="space-y-3 mb-8 flex-grow">
          {points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              <div className={`mt-1 min-w-[16px] h-4 rounded-full flex items-center justify-center bg-secondary border border-border`}>
                <Check className="w-2 h-2 text-nature" />
              </div>
              <span>{point}</span>
            </li>
          ))}
        </ul>

        {/* Hover Inner Glow */}
        <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${accent} blur-[60px] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
      </div>
    </motion.div>
  );
}