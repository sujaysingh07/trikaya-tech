"use client";

import { useEffect, useState } from "react";
import StatsSection from "../components/common/Stats";
import rightImage from "@/public/right-image.png";
import career from "@/public/career.png";
import trikayaAi from "@/public/trikaya-ai.png";
import trikayaStandard from "@/public/trikaya-standard.png";
import { useIsMobile } from "../hooks/useMobile";
import Banner from "../components/landing/Hero";
import WhoTrikaya from "../components/landing/WhoUsingTrikaya";
import Offers from "../components/landing/Offers";
import FeaturedJob from "../components/landing/Featured";
import MasterInDemand from "../components/landing/Master-in-demand";
import Journey from "../components/landing/Journey";
import Opportunity from "../components/landing/Opportunity";
import Unlock from "../components/landing/Unlock";
import ReferralFaqSection from "../components/landing/Faq";
import Partners from "../components/landing/Partner";

export default function Home() {
  const isMobile = useIsMobile();

  const banners = [
    {
      title: "Learn. Practice.",
      highlight: "Get Verified.",
      description:
        "Master emerging technologies through guided learning paths and real-world lab experiences.",
      image: rightImage,
      primaryButton: {
        label: "Start Learning",
        href: " https://builder.trikaya.io/",
      },
      secondaryButton: { label: "Explore Labs", href: "#" },
      titleColor: "#000000",
      highlightColor: "#0A58F5",
    },
    {
      title: "Build Your",
      highlight: "Career",
      description:
        "Discover opportunities in AI, Blockchain, CyberSecurity and Data Science.",
      image: career,
      primaryButton: { label: "Explore Jobs", href: "#" },
      secondaryButton: { label: "Start Learning", href: "#" },
    },
    {
      title: "Matched by",
      highlight: "Trikaya AI",
      description:
        "Let Trikaya’s AI engine map your verified skills to real-time opportunities.",
      image: trikayaAi,
      primaryButton: { label: "Find Jobs", href: "#" },
      secondaryButton: { label: "Take a Skill Check", href: "#" },
    },
    {
      title: "Trikaya-Verified",
      highlight: "CV",
      description:
        "Showcase your achievements with a blockchain-verified digital CV.",
      image: trikayaStandard,
      primaryButton: { label: "See Sample CV", href: "#" },
      secondaryButton: { label: "How it Works", href: "#" },
    },
  ];

  // ---------------- SLIDER INDEX ----------------
  const [index, setIndex] = useState(0);

  // ---------------- AUTO-SLIDE ONLY FOR DESKTOP ----------------
  useEffect(() => {
    const intervalTime = isMobile ? 5000 : 3000; // 5s for mobile, 3s for desktop

    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % banners.length);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [banners?.length, isMobile]);

  const currentBanner = banners[index];

  return (
    <div className="transition-all duration-700">
      <Banner
        key={isMobile ? "mobile-banner" : index}
        title={currentBanner.title}
        highlight={currentBanner.highlight}
        description={currentBanner.description}
        image={currentBanner.image}
        primaryButton={currentBanner.primaryButton}
        secondaryButton={currentBanner.secondaryButton}
        titleColor={currentBanner.title}
        highlightColor={currentBanner.highlightColor}
      />

      <StatsSection />
      <WhoTrikaya />
      <Offers />
      <FeaturedJob />
      <MasterInDemand />
      <Journey />
      <Opportunity />
      <Unlock />
      <ReferralFaqSection />
      <Partners />
    </div>
  );
}
