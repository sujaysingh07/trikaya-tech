"use client";

import { useEffect, useState } from "react";
import Banner from "../components/Hero";
import StatsSection from "../components/Stats";
import rightImage from "@/public/right-image.png"
import WhoTrikaya from "../components/WhoUsingTrikaya";
import Offers from "../components/Offers";
import FeaturedJob from "../components/Featured";
import MasterInDemand from "../components/Master-in-demand";
import Journey from "../components/Journey";
import Opportunity from "../components/Oppottunity";
import Unlock from "../components/Unlock";

export default function Home() {
  const banners = [
    {
      title: "Learn. Practice.",
      highlight: "Get Verified.",
      description:
        "Master emerging technologies through guided learning paths and real-world lab experiences. Every project you complete is validated, building your blockchain-backed profile that employers trust..",
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
        "Discover opportunities in AI, Blockchain, and Cybersecurity. Connect with top companies.",
      image: rightImage,
      primaryButton: { label: "Explore Jobs", href: "#" },
      secondaryButton: { label: "Start Learning", href: "#" },
    },
    {
      title: "Matched by",
      highlight: "Trikaya AI",
      description:
        "Let Trikaya AI match your verified skills to real-time opportunities with personalized recommendations.",
      image:
        rightImage,
      primaryButton: { label: "Find Jobs", href: "#" },
      secondaryButton: { label: "Take a Skill Check", href: "#" },
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
    </div>
  );
}
