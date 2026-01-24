import type { Metadata } from "next";
import PageBanner from "@/components/layouts/PageBanner";
import dynamic from "next/dynamic";

// Lazy Load Sections
const ResourceSection = dynamic(
  () => import("@/components/pageSection/Resource/ResourceSection"),
  {
    loading: () => (
      <div className="h-screen w-full bg-background animate-pulse" />
    ),
  },
);

export const metadata: Metadata = {
  title: "Resources | Agri Green Foundation",
  description:
    "Explore our comprehensive resource hub to learn more about agroforestry, sustainable agriculture, and environmental conservation.",
};

export default function Home() {
  return (
    <main>
      <PageBanner
        pageHeader={"Our Resource Hub"}
        descOne={"Wanna learn more about agroforestry?"}
        descTwo={"Explore our resources!"}
      />
      <ResourceSection />
    </main>
  );
}
