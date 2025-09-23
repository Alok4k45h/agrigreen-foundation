// import type { Metadata } from "next";
// import { Toaster } from "sonner";
// import { Poppins, Roboto, Lato, Inter, Playfair_Display, Protest_Revolution,Merienda } from 'next/font/google';
// import "./globals.css";

// // importing layout components
// import Navbar from "@/components/layouts/Navbar";
// import ContactSection from "@/components/layouts/ContactSection";
// import Stories from "@/components/layouts/Stories";
// import Footer from "@/components/layouts/Footer";
// import SplashScreen from "./SplashScreen";
// import NewsletterSubscribe from "@/components/layouts/NewsletterSubscribe";
// import ScrollProgressBar from "@/components/layouts/ScrollProgressBar";


// /* Google Fonts Setup */
// const protest = Protest_Revolution({ subsets: ["latin"], weight: "400", variable: "--font-display" });
// const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });
// const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });
// const poppins = Poppins({
//   subsets: ['latin'],
//   weight: ['400', '600', '700'], // Adjust based on your needs
//   variable: '--font-poppins',    // Optional for Tailwind
//   display: 'swap',
// });
// const lato = Lato({
//   subsets: ['latin'],
//   weight: ['400', '700'],
//   variable: '--font-lato',
//   display: 'swap',
// });

// const inter = Inter({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'], // adjust as needed
//   variable: '--font-inter',
//   display: 'swap',
// });

// const playfair = Playfair_Display({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   variable: '--font-playfair',
//   display: 'swap',
// });

// // Defining metadata
// export const metadata: Metadata = {
//   title: "AgriGreen | Nature & Climate NGO",
//   description: "Empowering agriculture, protecting nature, and building a sustainable future.",
//   keywords: ["Agriculture", "Climate Action", "Sustainability", "Non-Profit", "Environment"],
//   openGraph: {
//     title: "AgriGreen | Nature & Climate NGO",
//     description: "Join AgriGreen in creating a greener, more sustainable world.",
//     type: "website",
//     url: "",
//     images: [
//       {
//         url: "https://res.cloudinary.com/alokkumar07/image/upload/v1737283184/Agrigreen/onlyLogoAgri_mrnnfw.png",
//         width: 1200,
//         height: 630,
//         alt: "AgriGreen logo"
//       }
//     ]
//   }
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" className={`${poppins.variable} ${roboto.variable} ${lato.variable}${inter.variable} ${playfair.variable} ${protest.variable} ${merienda.variable} `}>
//       <body className="bg-[var(--color-background)] text-[var(--color-foreground)] font-sans">
//         <SplashScreen />
//         <ScrollProgressBar />
//         <Navbar />
//         <main>{children}</main>
//         <ContactSection />
//         <NewsletterSubscribe />
//         <Stories />
//         <Footer />
//         <Toaster position="top-center" toastOptions={{ duration: 4000 }} richColors />
//       </body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

// Layout Components
import Navbar from "@/components/layouts/Navbar";
import ContactSection from "@/components/layouts/ContactSection";
import Stories from "@/components/layouts/Stories";
import Footer from "@/components/layouts/Footer";
import SplashScreen from "./SplashScreen";
import NewsletterSubscribe from "@/components/layouts/NewsletterSubscribe";
import ScrollProgressBar from "@/components/layouts/ScrollProgressBar";
import BackToTop from "@/components/layouts/BackToTop";

/* === Google Fonts Setup === */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

/* === Metadata === */
export const metadata: Metadata = {
  title: {
    default: "Agri Green | Nature & Climate NGO",
    template: "%s | Agri Green Foundation",
  },
  description:
    "Leading youth-driven agroforestry initiatives across India. Empowering farmers, restoring ecosystems, and building climate resilience through sustainable agriculture practices.",
  keywords: [
    "agroforestry India",
    "sustainable agriculture",
    "climate action NGO",
    "rural development",
    "environmental conservation",
    "youth empowerment",
    "organic farming",
    "soil restoration",
    "carbon sequestration",
    "farmer producer organizations",
    "Agriculture",
    "Climate Action",
    "Sustainability",
    "Non-Profit",
    "Environment",
  ],
  authors: [{ name: "Agri Green Foundation" }],
  creator: "Agri Green Foundation",
  publisher: "Agri Green Foundation",
  metadataBase: new URL("https://agrigreen-foundation.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Agri Green | Transforming Agriculture for Climate Resilience",
    description:
      "Join Agri Green in creating a greener, more sustainable world. Empowering agriculture, protecting nature, and building a sustainable future.",
    type: "website",
    url: "https://agrigreen-foundation.vercel.app",
    siteName: "AgriGreen Foundation",
    locale: "en_IN",
    images: [
      {
        url: "https://res.cloudinary.com/dbp1kbs0g/image/upload/v1754146022/AgriLogo_zvi0d1.png",
        width: 1200,
        height: 630,
        alt: "Agri Green Foundation - Sustainable Agriculture Impact",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agri Green Foundation | Climate-Smart Agriculture",
    description: "Transforming rural landscapes through youth-driven agroforestry initiatives",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  verification: { google: "your-google-site-verification" },
};

/* === Root Layout === */
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] font-sans">
        <SplashScreen />
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <ContactSection />
        <NewsletterSubscribe />
        <Stories />
        <Footer />
        <BackToTop />
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} richColors />
      </body>
    </html>
  );
}
