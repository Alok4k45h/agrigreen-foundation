import type { Metadata } from "next";
import PageBanner from "@/components/layouts/PageBanner";
import dynamic from "next/dynamic";

// Lazy Load Sections
const ContactForm = dynamic(
  () => import("@/components/pageSection/Contact/ContactForm"),
  {
    loading: () => (
      <div className="h-screen w-full bg-background animate-pulse" />
    ),
  },
);

const ContactInfo = dynamic(
  () => import("@/components/pageSection/Contact/ContactInfo"),
  {
    loading: () => (
      <div className="h-screen w-full bg-background animate-pulse" />
    ),
  },
);

const ContactIntro = dynamic(
  () => import("@/components/pageSection/Contact/ContactIntro"),
  {
    loading: () => <div className="h-96 bg-secondary/20 animate-pulse" />,
  },
);

export const metadata: Metadata = {
  title: "Contact Us | Agri Green Foundation",
  description:
    "Get in touch with Agri Green Foundation to discover more about our initiatives, volunteer opportunities, and how you can support sustainable agriculture and environmental conservation.",
};

export default function ContactPage() {
  return (
    <main className="bg-background min-h-screen transition-colors duration-300">
      <PageBanner
        pageHeader="Contact Us"
        descOne="Connect with Nature"
        descTwo="Connect with Us"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <ContactIntro />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <ContactInfo />
          {/* Right Column */}
          <ContactForm />
        </div>
      </div>

      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/3 left-0 w-125 h-125 bg-nature/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-agri/5 rounded-full blur-[120px]" />
      </div>
    </main>
  );
}
