//Importing all section component of Resource page
import PageBanner from "@/components/layouts/PageBanner";
import ResourceSection from "@/components/pageSection/Resource/ResourceSection";

export default function Home() {
  return (
    <main>
      <PageBanner
        pageHeader={"Our Resource Hub"}
        descOne={"Wanna learn more about agroforestry?"}
        descTwo={"Explore our resources!"}
      />
      <ResourceSection />
      {/* Add other resource sections here */}
    
    </main>
  );
}
