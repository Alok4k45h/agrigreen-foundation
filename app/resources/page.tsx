//Importing all section component of Resource page
import PageBanner from "@/components/layouts/PageBanner";
import ResourceSection from "@/components/pageSection/Resource/ResourceSection";

export default function Home() {
  return (
    <main>
      <PageBanner
        pageHeader={"Welocome to Our Resource Hub"}
        descOne={"Explore our comprehensive resources for sustainable agriculture."}
        descTwo={"Empowering farmers with knowledge and tools."}
      />
      <ResourceSection />
      {/* Add other resource sections here */}
    
    </main>
  );
}
