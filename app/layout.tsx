import type { Metadata } from "next";
import { Toaster } from "sonner";
import { Protest_Revolution, Roboto, Merienda } from "next/font/google";
import "./globals.css";

// importing layout components
import Navbar from "@/components/layouts/Navbar";
import ContactSection from "@/components/layouts/ContactSection";
import Stories from "@/components/layouts/Stories";
import Footer from "@/components/layouts/Footer";
import SplashScreen from "./SplashScreen";
import NewsletterSubscribe from "@/components/layouts/NewsletterSubscribe";
import ScrollProgressBar from "@/components/layouts/ScrollProgressBar";


/* Google Fonts Setup */
const protest = Protest_Revolution({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-sans" });
const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-serif" });

// Defining metadata
export const metadata: Metadata = {
  title: "AgriGreen | Nature & Climate NGO",
  description: "Empowering agriculture, protecting nature, and building a sustainable future.",
  keywords: ["Agriculture", "Climate Action", "Sustainability", "Non-Profit", "Environment"],
  openGraph: {
    title: "AgriGreen | Nature & Climate NGO",
    description: "Join AgriGreen in creating a greener, more sustainable world.",
    type: "website",
    url: "",
    images: [
      {
        url: "https://res.cloudinary.com/alokkumar07/image/upload/v1737283184/Agrigreen/onlyLogoAgri_mrnnfw.png",
        width: 1200,
        height: 630,
        alt: "AgriGreen logo"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${protest.variable} ${roboto.variable} ${merienda.variable}`}>
      <body className="bg-[var(--color-background)] text-[var(--color-foreground)] font-sans">
        <SplashScreen />
        <ScrollProgressBar />
        <Navbar />
        <main>{children}</main>
        <ContactSection />
        <NewsletterSubscribe />
        <Stories />
        <Footer />
        <Toaster position="top-center" toastOptions={{ duration: 4000 }} richColors />
      </body>
    </html>
  );
}
