//Importing all section component of about page
import PageBanner from "@/components/layouts/PageBanner";
import AboutIntro from "@/components/pageSection/About/AboutIntro";
import AgriTeam from "@/components/pageSection/About/AgriTeam";
import MissionVisionCore from "@/components/pageSection/About/MissonVisionCore";
import WhatWeAreDoing from "@/components/pageSection/About/WhatWeAreDoing";


export default function Home() {
  return (
    <main>
       <PageBanner
        pageHeader={"About Agri Green"}
        descOne={"Agri Green is a nonprofit organization."}
        descTwo={"Promoting sustainable agriculture and environmental conservation."}
      />
      <AboutIntro />
      <MissionVisionCore />
      <WhatWeAreDoing />
      <AgriTeam />
    </main>
  );
}
