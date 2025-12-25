import HomeBanner from "@/components/pageSection/Home/HomeBanner";
import dynamic from "next/dynamic";

// --- Lazy Load Below-the-Fold Components ---
// These will only load when the browser is idle or they come into view
const HomeIssues = dynamic(() => import("@/components/pageSection/Home/HomeIssues"), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />
});

const HomeResult = dynamic(() => import("@/components/pageSection/Home/HomeResult"), {
  loading: () => <div className="h-screen w-full bg-background animate-pulse" />
});

export default function Home() {
  return (
    <main id="main-content" className="flex flex-col">
      <HomeBanner />
      <HomeIssues /> 
      <HomeResult />
    </main>
  );
}