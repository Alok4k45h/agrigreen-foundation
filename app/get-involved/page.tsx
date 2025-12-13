//Importing all section component of get-involved page
import PageBanner from "@/components/layouts/PageBanner";
import DonationBankDetails from "@/components/pageSection/Get-involved/DonationBankDetails";
import EngagementPathways from "@/components/pageSection/Get-involved/EngagementPathways";
import FaqSection from "@/components/pageSection/Get-involved/FaqSection";
import SocialMediaCorner from "@/components/pageSection/Get-involved/SocialMediaCorner";

export default function Home() {
  return (
    <main>
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
