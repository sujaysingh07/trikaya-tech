import { LabCard } from "../Cards/LabCard";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";
export interface LabCardProps {
  level: string;
  duration: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  levelColor?: string;
  LinkLabel?: string;
}

const labData: LabCardProps[] = [
  {
    level: "Beginner",
    duration: "2–3 hours",
    title: "Build a Smart Contract on Solidity",
    description:
      "Learn to create, deploy, and test smart contracts on Ethereum blockchain.",
    tags: ["Solidity", "Ethereum", "Smart Contracts"],
    href: "#",
    levelColor: "bg-[#E5FFDF] text-[#037A11]",
  },
  {
    level: "Advanced",
    duration: "2–3 hours",
    title: "Create a DeFi Lending Protocol",
    description:
      "Build a decentralized lending platform with automated interest rates.",
    tags: ["DeFi", "Web3.JS", "Solidity"],
    href: "#",
    levelColor: "bg-[#FFDEDF] text-[#BC2320]",
  },
  {
    level: "Intermediate",
    duration: "2–3 hours",
    title: "NFT Marketplace Development",
    description:
      "Develop a full-featured NFT marketplace with minting capabilities.",
    tags: ["NFT", "IPFS", "React"],
    href: "#",
    levelColor: "bg-[#E5E7FE] text-[#3740FF]",
  },
  {
    level: "Intermediate",
    duration: "2–3 hours",
    title: "Token Economics & Deployment",
    description:
      "Design and deploy your own cryptocurrency token with custom economics.",
    tags: ["ERC-20", "Token Design", "Solidity"],
    href: "#",
    levelColor: "bg-[#E5E7FE] text-[#3740FF]",
  },
  {
    level: "Intermediate",
    duration: "2–3 hours",
    title: "Cross-Chain Bridge Protocol",
    description:
      "Build a bridge to transfer assets between different blockchains.",
    tags: ["Cross-Chain", "Advanced Solidity"],
    href: "#",
    levelColor: "bg-[#E5E7FE] text-[#3740FF]",
  },
  {
    level: "Intermediate",
    duration: "2–3 hours",
    title: "DAO Governance System",
    description:
      "Create a decentralized autonomous organization with voting mechanisms.",
    tags: ["DAO", "Governance", "Smart Contracts"],
    href: "#",
    levelColor: "bg-[#E5E7FE] text-[#3740FF]",
  },
];

export default function BlockchainLab() {
  return (
    <Container className="mb-11">
      <div className="mx-auto">
        {/* Header */}
        <SectionHeader
          title="Blockchain "
          highlight="Lab"
          description="Experiment with smart contracts, decentralized apps, and token mechanics using real blockchain tools."
        />

        {/* Grid */}
        <div className="mt-10 grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {labData.map((lab, index) => (
            <LabCard key={index} {...lab} LinkLabel="Open Lab" />
          ))}
        </div>
      </div>
    </Container>
  );
}
