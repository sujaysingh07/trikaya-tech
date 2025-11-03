"use client";

import { useEffect, useState } from "react";
import Banner from "../components/Landing/Hero";
import StatsSection from "../components/common/Stats";
import rightImage from "@/public/right-image.png"
import WhoTrikaya from "../components/Landing/WhoUsingTrikaya";
import Offers from "../components/Landing/Offers";
import FeaturedJob from "../components/Landing/Featured";
import MasterInDemand from "../components/Landing/Master-in-demand";
import Journey from "../components/Landing/Journey";
import Opportunity from "../components/Landing/Opportunity";
import Unlock from "../components/Landing/Unlock";
import ReferralFaqSection from "../components/Landing/Faq";
import Partners from "../components/Landing/Partner";
import career from "@/public/career.png"
import trikayaAi from "@/public/trikaya-ai.png"
import trikayaStandard from "@/public/trikaya-standard.png"

export default function Home() {
  const banners = [
    {
      title: "Learn. Practice.",
      highlight: "Get Verified.",
      description:
        "Master emerging technologies through guided learning paths and real-world lab experiences. Every project you complete is validated, building your blockchain-backed profile that employers trust.",
      image:
        rightImage,
      primaryButton: { label: "Start Learning", href: "#" },
      secondaryButton: { label: "Explore Labs", href: "#" },
      titleColor:"#000000",
      highlightColor:"#0A58F5"
    },
    {
      title: "Build Your",
      highlight: "Career",
      description:
        "Discover opportunities in AI, Blockchain, CyberSecurity and Data Science. Connect with innovative companies at the forefront of technology.",
      image: career,
      primaryButton: { label: "Explore Jobs", href: "#" },
      secondaryButton: { label: "Start Learning", href: "#" },
    },
    {
      title: "Matched by",
      highlight: "Trikaya AI",
      description:
        "Let Trikaya’s AI engine map your verified skills to real-time opportunities. Receive personalized course recommendations and job matches that help you grow faster in your chosen career path.",
      image:
        trikayaAi,
      primaryButton: { label: "Find Jobs", href: "#" },
      secondaryButton: { label: "Take a Skill Check", href: "#" },
    },
    {
      title: "Trikaya-Verified ",
      highlight: "CV",
      description:
        "Showcase your achievements with a blockchain-verified digital CV powered by the Trkaya Protocol. Every course, project, and certification you complete is recorded and verifiable by employers.",
      image:
        trikayaStandard,
      primaryButton: { label: "See Sample CV", href: "#" },
      secondaryButton: { label: "How it Worksk", href: "#" },
    },
  ];

  const [index, setIndex] = useState(0);

  // auto-change banner every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const currentBanner = banners[index];

  return (
    <div className="transition-all duration-700">
      <Banner
        key={index} // ensures re-render with animation if added inside Banner
        title={currentBanner.title}
        highlight={currentBanner.highlight}
        description={currentBanner.description}
        image={currentBanner.image}
        primaryButton={currentBanner.primaryButton}
        secondaryButton={currentBanner.secondaryButton}
        titleColor={currentBanner.title}
        highlightColor={currentBanner.highlightColor}
      />
      <StatsSection/>
      <WhoTrikaya/>
      <Offers/>
      <FeaturedJob/>
      <MasterInDemand/>
      <Journey/>
      <Opportunity/>
      <Unlock/>
      <ReferralFaqSection/>
      <Partners/>
    </div>
  );
}
