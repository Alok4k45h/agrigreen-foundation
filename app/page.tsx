//Importing all section component of Home page 
 import HomeBanner from "@/components/pageSection/Home/HomeBanner";
import HomeIssues from "@/components/pageSection/Home/HomeIssues";
import HomeResult from "@/components/pageSection/Home/HomeResult";

export default function Home() {
  return (
    <main>
      <HomeBanner />
      <HomeIssues /> 
      <HomeResult />
    </main>
  );
}
