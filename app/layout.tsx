import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import ClientLayout from "./ClientLayout";
import { ThemeProvider } from "@/components/providers/theme-provider";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

/* --- Typography Setup --- */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

// --- SEO Metadata ---
export const metadata: Metadata = {
  metadataBase: new URL("https://agrigreenindia.org"),
  title: {
    default: "Agri Green Foundation | Nature, Climate & Agriculture NGO",
    template: "%s | Agri Green Foundation",
  },
  description:
    "Leading youth-driven agroforestry NGO in India. Empowering farmers, restoring ecosystems and fighting climate change through sustainable agriculture.",
  keywords: [
    "NGO",
    "Agroforestry",
    "Climate Change",
    "Sustainable Agriculture",
    "India",
    "Bihar",
    "Farmers",
    "Tree Planting",
    "Rural Development",
  ],
  authors: [{ name: "Agri Green Foundation Team" }],
  creator: "Agri Green Foundation",
  publisher: "Agri Green Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Agri Green Foundation | Future of Nature, Climate & Agriculture",
    description:
      "Cultivating a sustainable future through agroforestry and innovation.",
    type: "website",
    url: "https://agrigreenindia.org/",
    siteName: "AgriGreen Foundation",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/AgriLogo_zvi0d1.png",
        width: 1200,
        height: 630,
        alt: "Agri Green Foundation Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agri Green Foundation",
    description: "Empowering farmers and restoring ecosystems.",
    images: [
      "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/AgriLogo_zvi0d1.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#050a08" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // --- JSON-LD for Organization ---
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "Agri Green Foundation",
    url: "https://agrigreenindia.org",
    logo: "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/AgriLogo_zvi0d1.png",
    description:
      "A non-profit organization dedicated to agroforestry, livelihood enhancement, and climate resilience in India.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "424/A1, Rita Hari Niwas, Indrapuri Colony",
      addressLocality: "Patna",
      addressRegion: "Bihar",
      postalCode: "800014",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "contact@agrigreenindia.org",
      contactType: "customer service",
      areaServed: "IN",
    },
    sameAs: [
      "https://www.facebook.com/share/19ExxsA9Ze/",
      "https://www.instagram.com/agrigreenfoundation",
      "https://www.linkedin.com/company/agrigreen-foundation",
      "https://www.youtube.com/@AGRIGREENFOUNDATION",
    ],
  };

  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="relative min-h-screen bg-background font-sans text-foreground antialiased selection:bg-nature selection:text-white">
        {/* Inject JSON-LD */}
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          strategy="beforeInteractive"
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {/* Background Layers */}
          <div className="fixed inset-0 z-[-1] pointer-events-none">
            <div className="absolute inset-0 bg-background transition-colors duration-500" />
            <div className="absolute inset-0 bg-grid-pattern mask-[linear-gradient(to_bottom,white,transparent)] opacity-40" />
            <div className="absolute top-[-10%] left-[-10%] w-125 h-125 bg-nature/20 rounded-full blur-[120px] opacity-40 animate-pulse" />
            <div className="absolute bottom-[-10%] right-[-10%] w-150 h-150 bg-agri/10 rounded-full blur-[120px] opacity-30" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />
          </div>

          <ClientLayout>{children}</ClientLayout>
        </ThemeProvider>
        {/* Web Analytics */}
        <Analytics />
        {/* Speed Insights */}
        <SpeedInsights />
      </body>
    </html>
  );
}
