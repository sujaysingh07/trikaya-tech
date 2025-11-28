import { HackathonCard } from "../Cards/Hackathon-card";
import Container from "../ui/Container";
import HackathonBanner from "./GenericBanner";
import SectionHeader from "./SectionHeader";

const hackathonList = [
  {
    category: "Social Innovation",
    categoryColor: "bg-[#1F62E6]",
    title: "Blockchain for Social Impact",
    description:
      "Build decentralized solutions that address real-world social challenges and create positive change.",
    date: "March 15–17, 2025",
    duration: "48 hours",
    reward: "₹50,000 + Internship",
    href: "#",
  },
  {
    category: "Healthcare Tech",
    categoryColor: "bg-[#00A6A6]",
    title: "AI Healthcare Challenge",
    description:
      "Develop AI models to improve healthcare diagnostics and patient care systems.",
    date: "March 15–17, 2025",
    duration: "48 hours",
    reward: "₹50,000 + Internship",
    href: "#",
  },
  {
    category: "Decentralized Finance",
    categoryColor: "bg-[#7B61FF]",
    title: "Web3 DeFi Hackathon",
    description:
      "Create innovative DeFi protocols and financial applications on blockchain.",
    date: "March 15–17, 2025",
    duration: "48 hours",
    reward: "₹50,000 + Internship",
    href: "#",
  },
];

export default function HackathonSection() {
  return (
    <Container className="pb-[50px]">
      <SectionHeader
        title="Hackathons"
        description="Join large-scale hackathons designed around Blockchain, AI, Data Science, and Cybersecurity. Build innovative solutions, pitch to employers, and gain real exposure."
      />

      <div className="mt-9 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {hackathonList.map((hack, index) => (
          <HackathonCard key={index} hackathon={hack} />
        ))}
      </div>

      <div className="pt-11">
        <HackathonBanner
          title={
            <>
              Top 3 winners from each hackathon receive blockchain-verified
              certificates
              <span className="hidden md:inline">
                {" "}
                and exclusive job interviews.
              </span>
            </>
          }
          ctaLabel="Explore All Hackathons"
          ctaHref="/hackathons"
        />
      </div>
    </Container>
  );
}
