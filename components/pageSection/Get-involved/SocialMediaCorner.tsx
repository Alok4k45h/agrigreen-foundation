// "use client";

// import { useState } from "react";
// import dynamic from "next/dynamic";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//   Linkedin,
//   Facebook,
//   Instagram,
//   Youtube,
//   ExternalLink,
// } from "lucide-react";

// // --- Dynamic Imports (Critical for Performance) ---
// const LinkedInEmbed = dynamic(
//   () => import("react-social-media-embed").then((mod) => mod.LinkedInEmbed),
//   { ssr: false, loading: () => <EmbedSkeleton /> },
// );
// const FacebookEmbed = dynamic(
//   () => import("react-social-media-embed").then((mod) => mod.FacebookEmbed),
//   { ssr: false, loading: () => <EmbedSkeleton /> },
// );
// const InstagramEmbed = dynamic(
//   () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
//   { ssr: false, loading: () => <EmbedSkeleton /> },
// );
// const YouTubeEmbed = dynamic(
//   () => import("react-social-media-embed").then((mod) => mod.YouTubeEmbed),
//   { ssr: false, loading: () => <EmbedSkeleton /> },
// );

// // --- Configuration ---
// const SOCIAL_TABS = [
//   {
//     id: "linkedin",
//     label: "LinkedIn",
//     icon: Linkedin,
//     color: "bg-[#0077b5]",
//     textColor: "text-[#0077b5]",
//     href: "https://www.linkedin.com/company/agrigreen-foundation",
//     posts: [
//       "https://www.linkedin.com/posts/agrigreen-foundation_sustainableag-ruralimpact-innovation-activity-7414712330539827200-s7sj?utm_source=li_share&utm_content=feedcontent&utm_medium=g_dt_web&utm_campaign=copy",
//       "https://www.linkedin.com/posts/agrigreen-foundation_socialimpact-agriculture-foodsecurity-activity-7414351778349166592-DGkk?utm_source=share&utm_medium=member_android&rcm=ACoAAC8DPEIBfuWGKvZbQT7lPmSLfV7j3Q6warY",
//     ],
//     Component: LinkedInEmbed,
//   },
//   {
//     id: "facebook",
//     label: "Facebook",
//     icon: Facebook,
//     color: "bg-[#1877f2]",
//     textColor: "text-[#1877f2]",
//     href: "https://www.facebook.com/share/19ExxsA9Ze/",
//     posts: [""],
//     Component: FacebookEmbed,
//   },
//   {
//     id: "youtube",
//     label: "YouTube",
//     icon: Youtube,
//     color: "bg-[#ff0000]",
//     textColor: "text-[#ff0000]",
//     href: "https://www.youtube.com/@AGRIGREENFOUNDATION",
//     posts: [""],
//     Component: YouTubeEmbed,
//   },
//   {
//     id: "instagram",
//     label: "Instagram",
//     icon: Instagram,
//     color: "bg-linear-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]",
//     textColor: "text-pink-500",
//     href: "https://www.instagram.com/agrigreenfoundation",
//     posts: [""],
//     Component: InstagramEmbed,
//   },
// ];

// // --- Skeleton Component ---
// const EmbedSkeleton = () => (
//   <div className="w-full h-100 bg-white/5 animate-pulse rounded-xl flex items-center justify-center border border-white/10">
//     <span className="text-gray-500 font-medium font-mono text-sm">
//       Loading Feed...
//     </span>
//   </div>
// );

// export default function SocialMediaCorner() {
//   const [activeTab, setActiveTab] = useState("linkedin");

//   const currentSocial =
//     SOCIAL_TABS.find((tab) => tab.id === activeTab) || SOCIAL_TABS[0];
//   const EmbedComponent = currentSocial.Component;

//   return (
//     <section className="relative py-24 bg-[#070e0b] overflow-hidden">
//       {/* --- Background Ambience --- */}
//       <div className="absolute inset-0 pointer-events-none">
//         <div className="absolute top-20 left-0 w-125 h-125 bg-nature/10 rounded-full blur-[120px]" />
//         <div className="absolute bottom-0 right-0 w-100 h-100 bg-climate/10 rounded-full blur-[120px]" />
//         <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <span className="text-agri font-bold tracking-wider uppercase text-sm font-outfit">
//             Connect With Us
//           </span>
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4 font-serif"
//           >
//             <span className="text-transparent bg-clip-text bg-linear-to-r from-nature via-agri to-climate">
//               Social Media Corner
//             </span>
//           </motion.h2>
//           <p className="text-gray-400 max-w-2xl mx-auto">
//             Follow our journey, watch our stories, and join the conversation on
//             your favorite platforms.
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className="flex flex-wrap justify-center gap-3 mb-16">
//           {SOCIAL_TABS.map((tab) => (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
//                 activeTab === tab.id
//                   ? "text-white shadow-lg ring-1 ring-white/20"
//                   : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
//               }`}
//             >
//               {/* Dynamic Background for Active Tab */}
//               {activeTab === tab.id && (
//                 <motion.div
//                   layoutId="activeTabBg"
//                   className={`absolute inset-0 rounded-full ${tab.color} opacity-80 -z-10`}
//                   transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                 />
//               )}
//               <tab.icon size={18} />
//               {tab.label}
//             </button>
//           ))}
//         </div>

//         {/* Content Area */}
//         <div className="min-h-125">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4 }}
//               className="w-full"
//             >
//               <div className="grid md:grid-cols-2 gap-8 items-start justify-center max-w-5xl mx-auto">
//                 {currentSocial.posts.map((postUrl, index) => (
//                   <div
//                     key={index}
//                     className="bg-[#122b22]/40 backdrop-blur-xl border border-white/5 p-3 rounded-3xl shadow-2xl overflow-hidden"
//                   >
//                     <div className="rounded-2xl overflow-hidden bg-black/20">
//                       {/* Render the specific embed component dynamically */}
//                       {postUrl ? (
//                         <EmbedComponent
//                           url={postUrl}
//                           width="100%"
//                           style={{ borderRadius: "16px", overflow: "hidden" }}
//                         />
//                       ) : (
//                         <div className="h-64 flex items-center justify-center text-gray-500">
//                           Post not available
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 ))}
//               </div>

//               {/* "View More" Button */}
//               <div className="text-center mt-12">
//                 <a
//                   href={currentSocial.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl font-semibold transition-all hover:scale-105 border border-white/10 group"
//                 >
//                   <currentSocial.icon
//                     size={18}
//                     className={`${currentSocial.textColor} group-hover:text-white transition-colors`}
//                   />
//                   <span>View more on {currentSocial.label}</span>
//                   <ExternalLink
//                     size={14}
//                     className="text-gray-500 group-hover:text-white transition-colors"
//                   />
//                 </a>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  ExternalLink,
} from "lucide-react";

// --- Dynamic Imports (Critical for Performance) ---
const LinkedInEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.LinkedInEmbed),
  { ssr: false, loading: () => <EmbedSkeleton /> },
);
const FacebookEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.FacebookEmbed),
  { ssr: false, loading: () => <EmbedSkeleton /> },
);
const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  { ssr: false, loading: () => <EmbedSkeleton /> },
);
const YouTubeEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.YouTubeEmbed),
  { ssr: false, loading: () => <EmbedSkeleton /> },
);

// --- Configuration ---
const SOCIAL_TABS = [
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    brandColor: "bg-blue-600",
    textColor: "text-blue-400",
    href: "https://www.linkedin.com/company/agrigreen-foundation",
    posts: [""],
    Component: LinkedInEmbed,
  },
  {
    id: "facebook",
    label: "Facebook",
    icon: Facebook,
    brandColor: "bg-blue-500",
    textColor: "text-blue-500",
    href: "https://www.facebook.com/share/19ExxsA9Ze/",
    posts: [""], // Empty triggers the beautiful fallback card
    Component: FacebookEmbed,
  },
  {
    id: "youtube",
    label: "YouTube",
    icon: Youtube,
    brandColor: "bg-red-600",
    textColor: "text-red-500",
    href: "https://www.youtube.com/@AGRIGREENFOUNDATION",
    posts: [""],
    Component: YouTubeEmbed,
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: Instagram,
    brandColor: "bg-gradient-to-tr from-yellow-500 via-pink-500 to-purple-600",
    textColor: "text-pink-500",
    href: "https://www.instagram.com/agrigreenfoundation",
    posts: [""],
    Component: InstagramEmbed,
  },
];

// --- Skeleton Component ---
const EmbedSkeleton = () => (
  <div className="w-full h-100 bg-gray-800/30 animate-pulse rounded-3xl flex items-center justify-center border border-gray-700/50">
    <span className="text-gray-500 font-medium font-mono text-sm">
      Loading Feed...
    </span>
  </div>
);

// --- Premium Fallback CTA Card ---
type FallbackCardProps = {
  platform: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  brandColor: string;
};

const FallbackCard = ({
  platform,
  icon: Icon,
  href,
  brandColor,
}: FallbackCardProps) => (
  <div className="relative overflow-hidden h-100 flex flex-col items-center justify-center text-center p-8 bg-gray-900/40 backdrop-blur-md border border-gray-800 rounded-3xl group hover:border-gray-700 hover:bg-gray-900/60 transition-all duration-500 w-full">
    {/* Oversized Background Icon */}
    <Icon className="absolute -bottom-10 -right-10 w-64 h-64 text-white opacity-[0.03] group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700" />

    <div
      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg ${brandColor}`}
    >
      <Icon className="text-white w-8 h-8" />
    </div>

    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
      Connect on {platform}
    </h3>
    <p className="text-gray-400 mb-8 max-w-xs leading-relaxed">
      Stay updated with our latest field stories, community impacts, and
      sustainable initiatives.
    </p>

    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative z-10 inline-flex items-center gap-2 px-8 py-3.5 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-200 transition-colors shadow-xl hover:shadow-2xl hover:-translate-y-1 duration-300"
    >
      Visit Profile <ExternalLink size={16} />
    </a>
  </div>
);

export default function SocialMediaCorner() {
  const [activeTab, setActiveTab] = useState("linkedin");

  const currentSocial =
    SOCIAL_TABS.find((tab) => tab.id === activeTab) || SOCIAL_TABS[0];
  const EmbedComponent = currentSocial.Component;

  // Determine if we should center a single fallback card or use a grid
  const isSingleEmptyPost =
    currentSocial.posts.length === 1 && !currentSocial.posts[0];

  return (
    <section className="relative py-24 bg-gray-950 overflow-hidden">
      {/* --- Background Ambience --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-0 w-125 h-125 bg-emerald-900/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-900/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- Header --- */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-semibold mb-6">
            <span className="tracking-widest uppercase text-xs">
              Community Network
            </span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif tracking-tight"
          >
            Social Media{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Corner
            </span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Follow our journey, watch our stories, and join the conversation on
            your favorite platforms.
          </p>
        </div>

        {/* --- Interactive Tabs --- */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {SOCIAL_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? "text-white shadow-lg"
                  : "bg-gray-800/50 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-700/50"
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeSocialTabBg"
                  className={`absolute inset-0 rounded-full ${tab.brandColor} -z-10`}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* --- Content Area --- */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="w-full"
            >
              {/* Grid adjusts to 1 column if it's a single empty state, else 2 columns */}
              <div
                className={`grid gap-8 items-start justify-center max-w-5xl mx-auto ${isSingleEmptyPost ? "grid-cols-1 max-w-2xl" : "md:grid-cols-2"}`}
              >
                {currentSocial.posts.map((postUrl, index) => (
                  <div key={index} className="w-full">
                    {postUrl ? (
                      /* Embed Card */
                      <div className="bg-white/5 backdrop-blur-xl border border-gray-700/50 p-4 rounded-[2rem] shadow-2xl overflow-hidden hover:border-emerald-500/30 transition-colors duration-500">
                        <div className="rounded-2xl overflow-hidden bg-gray-900/50">
                          <EmbedComponent
                            url={postUrl}
                            width="100%"
                            style={{ borderRadius: "16px", overflow: "hidden" }}
                          />
                        </div>
                      </div>
                    ) : (
                      /* Graceful Fallback Card */
                      <FallbackCard
                        platform={currentSocial.label}
                        icon={currentSocial.icon}
                        href={currentSocial.href}
                        brandColor={currentSocial.brandColor}
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* "View More" CTA */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-center mt-16"
              >
                <a
                  href={currentSocial.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl font-semibold transition-all hover:-translate-y-1 border border-gray-800 hover:border-gray-700 shadow-xl group"
                >
                  <currentSocial.icon
                    size={20}
                    className={`${currentSocial.textColor} group-hover:scale-110 transition-transform`}
                  />
                  <span>Explore more on {currentSocial.label}</span>
                  <ExternalLink
                    size={16}
                    className="text-gray-500 group-hover:text-white transition-colors ml-2"
                  />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
