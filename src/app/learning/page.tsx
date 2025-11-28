import Banner from "@/src/components/common/CommonBanner";
import CardGridSection from "@/src/components/common/CardGridSection";
import GenericButton from "@/src/components/common/GenericButton";
import CallToAction from "@/src/components/common/CallToAction";
import SectionHeader from "@/src/components/common/SectionHeader";
import GenericProfileCard from "@/src/components/Cards/Generic-profile-card";
import Container from "@/src/components/ui/Container";
import FeatureSplitCardThree from "@/src/components/common/ScaleGridThree";
import SubscribeCard from "@/src/components/common/Subscribe-container";

export default function Learning() {
  const resourcesCards = [
    {
      icon: "/icons/OnlineContractTemplates.svg",
      title: "Smart Contract Design Guide",
      badge: "Blockchain",
      description:
        "Complete guide to designing secure and efficient smart contracts on Ethereum and Solidity.",
    },
    {
      icon: "/icons/MonitorComputer.svg",
      title: "ML Model Templates",
      badge: "AI",
      description:
        "Ready-to-use machine learning templates for classification, regression, and neural networks.",
    },
    {
      icon: "/icons/Toolkit.svg",
      title: "Data Cleaning Toolkit",
      badge: "Data Science",
      description:
        "Essential tools and scripts for data preprocessing, validation, and transformation.",
    },
    {
      icon: "/icons/WirelessSecurity.svg",
      title: "Security Audit Guide",
      badge: "Blockchain",
      description:
        "Comprehensive checklist for conducting security audits and vulnerability assessments.",
    },
  ];
  const programCards = [
    {
      icon: "/icons/LeadershipAward.svg",
      title: "Leadership Recognition",
      description:
        "Gain a verified blockchain credential as a Trikaya Ambassador.",
    },
    {
      icon: "/icons/NetworkingOpportunities.svg",
      title: "Networking Opportunities",
      description: "Collaborate with mentors, startups, and recruiters.",
    },
    {
      icon: "/icons/upskill.svg",
      title: "Skill Development",
      description: "Access free workshops, labs, and advanced training.",
    },
    {
      icon: "/icons/ExclusiveRewards.svg",
      title: "Exclusive Rewards",
      description:
        "Earn credits, certificates, and internship priority with Trikaya partners.",
    },
  ];

  const materialData = [
    {
      category: "Blockchain",
      level: "Advanced",
      title: "Smart Contract Design Guide",
      description:
        "Complete guide to designing secure and efficient smart contracts on Ethereum and Solidity.",
      fileType: "Guide • PDF",
    },
    {
      category: "AI",
      level: "Intermediate",
      title: "Python ML Cheat Sheet",
      description:
        "Quick reference for machine learning algorithms in Python with scikit-learn.",
      fileType: "Cheat Sheet • PDF",
    },
    {
      category: "Data Science",
      level: "Beginner",
      title: "Data Visualization Templates",
      description:
        "Pre-built visualization templates for common data analysis scenarios.",
      fileType: "Template • Zip",
    },
    {
      category: "Cybersecurity",
      level: "Advanced",
      title: "Penetration Testing Toolkit",
      description:
        "Complete toolkit for ethical hacking and penetration testing exercises.",
      fileType: "Toolkit • Zip",
    },
    {
      category: "Blockchain",
      level: "Beginner",
      title: "Blockchain Development Starter",
      description:
        "Getting started with blockchain development using Web3 and Solidity.",
      fileType: "Guide • PDF",
    },
    {
      category: "AI",
      level: "Advanced",
      title: "Neural Networks Whitepaper",
      description:
        "In-depth analysis of neural network architectures and applications.",
      fileType: "Whitepaper • PDF",
    },
  ];

  const whoApplyCards = [
    {
      title: "Any Stream or Discipline",
      description: "Open to all backgrounds interested in tech & innovation.",
    },
    {
      title: "Currently Enrolled Students",
      description: "Must be pursuing undergraduate or postgraduate studies.",
    },
    {
      title: "Communication & Leadership",
      description: "Active in college communities or clubs.",
    },
    {
      title: "Basic Tech Awareness",
      description: "Familiarity with emerging technologies is a plus.",
    },
  ];

  const programStructureCards = [
    {
      level: 1,
      title: "Blockchain",
      description: "Smart Contract Cheat Sheet, dApp Design Guide",
      icon: "/icons/shield-minimalistic.svg",
    },
    {
      level: 2,
      title: "Artificial Intelligence",
      description: "ML Model Templates, AI Ethics Whitepaper",
      icon: "/icons/ai-solid.svg",
    },
    {
      level: 3,
      title: "Data Science",
      description: "Data Cleaning Toolkit, Analytics Dashboards",
      icon: "/icons/data-source-solid.svg",
    },
    {
      level: 4,
      title: "Cybersecurity",
      description: "Threat Modeling Template, Security Audit Guide",
      icon: "/icons/lock_svgrepo.com.svg",
    },
  ];
  const ambassadors = [
    {
      name: "Dr. Sarah Chen",
      title: "AI Research Lead",
      experties: "Deep Learning Fundamentals",
      quote:
        "Essential guide for understanding neural networks and deep learning architectures.",
      image: "/icons/rajesh.svg",
    },
    {
      name: "Rahul Sharma",
      title: "Blockchain Architect",
      experties: "DeFi Protocol Design",
      quote:
        "Comprehensive guide to designing decentralized finance protocols.",
      image: "/images/Diya.jpg",
    },
    {
      name: "Maria Rodriguez",
      title: "Data Science Mentor",
      description: "",
      experties: "Advanced Analytics Playbook",
      image: "/images/Arav.jpg",
      quote: "Strategies for advanced data analysis and predictive modeling.",
    },
  ];

  return (
    <>
      <Banner
        title={"Access Verified"}
        highlight={"Learning Materials"}
        description="Explore a growing library of Trikaya-certified guides, templates, and toolkits to help you master emerging technologies — Blockchain, AI, Data Science, and Cybersecurity."
        image="/Learning.png"
        primaryButton={{
          label: "Explore Materials",
          href: "",
        }}
        secondaryButton={{
          label: "Download Toolkit",
          href: "",
        }}
      />
      <CardGridSection
        heading={"Featured "}
        highlight="Resources"
        gridClassName="grid grid-cols-1 md:grid-cols-4 gap-6 py-11"
        containerClassName=" mt-11"
        description="Curated materials recommended by Trikaya mentors and learning teams."
        cards={resourcesCards}
        headingAlign={"left"}
        button="Download"
      />
      <GenericButton
        label="Browse All Resources"
        href="#"
        variant="primary"
        align="center"
      />
      <CardGridSection
        heading={"Explore Learning"}
        highlight="Categories"
        containerClassName="mb-11"
        description="Find verified resources by technology or type."
        cards={programCards}
        headingAlign={"left"}
      />

      <CardGridSection
        heading={"Program "}
        highlight="Structure"
        containerClassName="my-11"
        cardType="Insight"
        gridClassName="flex flex-col gap-4 my-11"
        description="The program is decentralized, with city, state, and national ambassador levels for greater impact."
        cards={programStructureCards}
        variantCategory="category"
        headingAlign={"left"}
      />
      <CardGridSection
        heading={"Browse All "}
        highlight="Materials"
        description="Access verified, downloadable materials organized by topic and type."
        containerClassName=""
        gridClassName="grid grid-cols-1 sm:grid-cols-3 gap-6 py-11"
        cards={materialData}
        cardType="material"
        button="Download"
        headingAlign={"left"}
      />

      <Container>
        <SectionHeader
          title="Mentors' Top "
          highlight="Picks"
          description="Resources personally recommended by Trikaya's expert mentors."
        />
        <div className="mx-auto grid grid-cols-1 justify-items-center gap-[35px] py-11 sm:grid-cols-2 lg:grid-cols-3">
          {ambassadors.map((ambassador, index) => (
            <GenericProfileCard
              key={index}
              {...ambassador}
              buttonText="Open Resource"
            />
          ))}
        </div>

        <div className="py-11">
          <FeatureSplitCardThree
            leftTitle="Verified Learning, Simplified"
            leftDescription="All materials are reviewed and verified under the Trikaya Protocol — ensuring authenticity, accuracy, and real-world relevance."
            bullets={[
              {
                title: "Verified on-chain ",
                subtitle: "Blockchain-secured authenticity for all materials",
              },
              {
                title: "Updated by subject experts",
                subtitle: "Regularly reviewed by industry professionals",
              },
              {
                title: "Integrated with Trikaya courses",
                subtitle: "Seamlessly connected to learning pathways",
              },
            ]}
            image={"/images/Learning.png"}
            title="Contribute to Trikaya Library"
            description="Share your tutorials, templates, or open-source guides to help the community."
            verifiedItems={[]}
            primaryButton={{
              label: "Submit Your Resource",
              href: "",
            }}
            secondaryButton={{
              label: "Join as Contributor",
              href: "",
            }}
            buttonLabel="Learn More About Trikaya Protocol"
            buttonLink="/#"
          />
        </div>
      </Container>
      <SubscribeCard
        title="Get New Materials in Your Inbox"
        subtitle="Subscribe to receive updates on new toolkits, whitepapers, and verified guides."
        note="Delivered monthly. No spam."
      />
      <CallToAction
        title="Learn Smarter with Trikaya."
        subtitle={
          <>
            Access the best verified materials and take your skills to the next
            level.
          </>
        }
        buttons={[
          { label: "Explore Resources", href: "", variant: "secondary" },
        ]}
        showRocketBg={true}
      />
    </>
  );
}
