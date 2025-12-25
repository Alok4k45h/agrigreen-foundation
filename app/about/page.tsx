import type { Metadata } from "next";
import PageBanner from "@/components/layouts/PageBanner";
import dynamic from "next/dynamic";

// Lazy Load Sections
const AboutIntro = dynamic(() => import("@/components/pageSection/About/AboutIntro"), {
  loading: () => <div className="h-96 bg-secondary/20 animate-pulse" />
});

const WhatWeAreDoing = dynamic(() => import("@/components/pageSection/About/WhatWeAreDoing"), {
  loading: () => <div className="h-96 bg-secondary/20 animate-pulse" />
});

const AgriTeam = dynamic(() => import("@/components/pageSection/About/AgriTeam"), {
  loading: () => <div className="h-96 bg-secondary/20 animate-pulse" />
});

export const metadata: Metadata = {
  title: "About Us | Agri Green Foundation",
  description: "Learn about our mission to promote agroforestry, sustainable agriculture, and climate resilience in India.",
};


export default function About() {
  return (
    <main id="main-content" className="flex flex-col">
       <PageBanner
        pageHeader={"About Agri Green"}
        descOne={"Agri Green is a nonprofit organization."}
        descTwo={"Promoting sustainable agriculture and environmental conservation."}
      />
      <AboutIntro />
      <WhatWeAreDoing />
      <AgriTeam />
    </main>
  );
}
