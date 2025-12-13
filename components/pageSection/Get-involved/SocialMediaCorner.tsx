"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Linkedin, Facebook, Instagram, Youtube, ExternalLink 
} from "lucide-react";

// --- Dynamic Imports (Critical for Performance) ---
const LinkedInEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.LinkedInEmbed),
  { ssr: false, loading: () => <EmbedSkeleton /> }
);
const FacebookEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.FacebookEmbed),
  { ssr: false, loading: () => <EmbedSkeleton /> }
);
const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  { ssr: false, loading: () => <EmbedSkeleton /> }
);
const YouTubeEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.YouTubeEmbed),
  { ssr: false, loading: () => <EmbedSkeleton /> }
);

// --- Configuration ---
const SOCIAL_TABS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    color: "bg-[#0077b5]",
    textColor: "text-[#0077b5]",
    href: "https://www.linkedin.com/company/agrigreen-foundation",
    posts: ["https://www.linkedin.com/posts/agrigreen-foundation_sustainable-agriculture", ""], // Add real links
    Component: LinkedInEmbed,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: Facebook,
    color: "bg-[#1877f2]",
    textColor: "text-[#1877f2]",
    href: "https://www.facebook.com/share/19ExxsA9Ze/",
    posts: ["https://www.facebook.com/share/p/17CcoQJLf6/"],
    Component: FacebookEmbed,
  },
  {
    id: "youtube",
    label: "YouTube",
    icon: Youtube,
    color: "bg-[#ff0000]",
    textColor: "text-[#ff0000]",
    href: "https://www.youtube.com/@AGRIGREENFOUNDATION",
    posts: ["https://www.youtube.com/watch?v=dQw4w9WgXcQ"], // Add real links
    Component: YouTubeEmbed,
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: Instagram,
    color: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
    textColor: "text-pink-500",
    href: "https://www.instagram.com/agrigreenfoundation",
    posts: ["https://www.instagram.com/p/C-x1y2z3/"], // Add real links
    Component: InstagramEmbed,
  },
];

// --- Skeleton Component ---
const EmbedSkeleton = () => (
  <div className="w-full h-[400px] bg-white/5 animate-pulse rounded-xl flex items-center justify-center border border-white/10">
    <span className="text-gray-500 font-medium font-mono text-sm">Loading Feed...</span>
  </div>
);

export default function SocialMediaCorner() {
  const [activeTab, setActiveTab] = useState("linkedin");

  const currentSocial = SOCIAL_TABS.find((tab) => tab.id === activeTab) || SOCIAL_TABS[0];
  const EmbedComponent = currentSocial.Component;

  return (
    <section className="relative py-24 bg-[#070e0b] overflow-hidden">
      
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-[500px] h-[500px] bg-nature/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-climate/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-agri font-bold tracking-wider uppercase text-sm font-outfit">
            Connect With Us
          </span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 font-serif"
          >
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-nature via-agri to-climate">
               Social Media Corner
             </span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Follow our journey, watch our stories, and join the conversation on your favorite platforms.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {SOCIAL_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white shadow-lg ring-1 ring-white/20"
                  : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              }`}
            >
              {/* Dynamic Background for Active Tab */}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTabBg"
                  className={`absolute inset-0 rounded-full ${tab.color} opacity-80 -z-10`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="w-full"
            >
              <div className="grid md:grid-cols-2 gap-8 items-start justify-center max-w-5xl mx-auto">
                {currentSocial.posts.map((postUrl, index) => (
                  <div 
                    key={index} 
                    className="bg-[#122b22]/40 backdrop-blur-xl border border-white/5 p-3 rounded-3xl shadow-2xl overflow-hidden"
                  >
                    <div className="rounded-2xl overflow-hidden bg-black/20">
                      {/* Render the specific embed component dynamically */}
                      {postUrl ? (
                        <EmbedComponent 
                          url={postUrl} 
                          width="100%" 
                          style={{ borderRadius: '16px', overflow: 'hidden' }}
                        />
                      ) : (
                        <div className="h-64 flex items-center justify-center text-gray-500">
                          Post not available
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* "View More" Button */}
              <div className="text-center mt-12">
                <a
                  href={currentSocial.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-all hover:scale-105 border border-white/10 group"
                >
                  <currentSocial.icon size={18} className={`${currentSocial.textColor} group-hover:text-white transition-colors`} />
                  <span>View more on {currentSocial.label}</span>
                  <ExternalLink size={14} className="text-gray-500 group-hover:text-white transition-colors" />
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}