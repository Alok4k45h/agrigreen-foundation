import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";

/* --- 1. Typography Setup --- */
// Body text - Clean & Neutral
const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap" 
});

// Editorial Headings - Trust & Heritage
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

// Tech/UI Accents - Modern SaaS feel (New Addition)
const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: "swap" 
});

export const metadata: Metadata = {
  title: "Agri Green | Nature & Climate NGO",
  description: "Leading youth-driven agroforestry initiatives across India. Empowering farmers and restoring ecosystems through sustainable agriculture.",
  openGraph: {
    title: "Agri Green | Future of Agriculture",
    description: "Cultivating a sustainable future through agroforestry and innovation.",
    type: "website",
    url: "https://agrigreenindia.org/",
    siteName: "AgriGreen Foundation",
    images: [
      {
        url: "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/AgriLogo_zvi0d1.png",
        width: 1200,
        height: 630,
        alt: "Agri Green Foundation",
      },
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#070e0b", // Matches the dark background
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html 
      lang="en" 
      className={`dark ${inter.variable} ${playfair.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen bg-background font-sans text-foreground antialiased selection:bg-primary selection:text-black">
        
        {/* --- Global Fixed Background Layers --- */}
        {/* These sit behind everything and don't re-render on navigation */}
        <div className="fixed inset-0 z-[-1] pointer-events-none">
          {/* 1. Deep Gradient Base */}
          <div className="absolute inset-0" />
          
          {/* 2. Cyber Grid Pattern (uses the utility we added in globals.css) */}
          <div className="absolute inset-0 bg-grid-pattern [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-40" />
          
          {/* 3. Ambient Glow Orbs (Soft Bioluminescence) */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] opacity-40 animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] opacity-30" />
          
          {/* 4. Grain Texture Overlay */}
          <div className="absolute inset-0 bg-grain-overlay opacity-20" />
        </div>

        {/* --- Main Content Wrapper --- */}
        <ClientLayout>{children}</ClientLayout>
        
      </body>
    </html>
  );
}