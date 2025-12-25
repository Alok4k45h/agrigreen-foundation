//Importing all section component of get-involved page
import PageBanner from "@/components/layouts/PageBanner";
import dynamic from "next/dynamic";

// Lazy Load Sections
const DonationBankDetails = dynamic(() => import("@/components/pageSection/Get-involved/DonationBankDetails"), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />
});

const EngagementPathways = dynamic(() => import("@/components/pageSection/Get-involved/EngagementPathways"), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />
});

const SocialMediaCorner = dynamic(() => import("@/components/pageSection/Get-involved/SocialMediaCorner"), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />
});

const FaqSection = dynamic(() => import("@/components/pageSection/Get-involved/FaqSection"), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />
});

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col">
      <PageBanner
        pageHeader={"Get Involved with Agri Green"}
        descOne={"Alone we can do so little"}
        descTwo={"Together we can do so much."}
      />
      <EngagementPathways />
      <DonationBankDetails />
      <SocialMediaCorner />
      <FaqSection />
    </main>
  );
}
