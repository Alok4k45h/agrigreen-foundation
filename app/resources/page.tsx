//Importing all section component of Resource page
import PageBanner from "@/components/layouts/PageBanner";
import dynamic from "next/dynamic";

// Lazy Load Sections
const ResourceSection = dynamic(() => import("@/components/pageSection/Resource/ResourceSection"), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />
});

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
