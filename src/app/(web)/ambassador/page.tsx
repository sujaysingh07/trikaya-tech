import Banner from "@/src/components/common/CommonBanner";
import CardGridSection from "@/src/components/common/CardGridSection";
import GenericButton from "@/src/components/common/GenericButton";
import CallToAction from "@/src/components/common/CallToAction";
import SectionHeader from "@/src/components/common/SectionHeader";
import GenericProfileCard from "@/src/components/cards/GenericProfileCard";
import Container from "@/src/components/ui/Container";
export default function ambassador() {
  const ambassadorCards = [
    {
      icon: "/icons/InnovationBulb.svg",
      title: "Lead Innovation Clubs",
      description:
        "Start and manage technology clubs that inspire your peers to explore emerging tech.",
    },
    {
      icon: "/icons/CommunityEvents.svg",
      title: "Connect Peers with Opportunities",
      description:
        "Bridge your campus community with Trikaya's learning and career opportunities.",
    },
    {
      icon: "/icons/SkillDevelopment.svg",
      title: "Upskill with Mentors",
      description:
        "Access mentor-led sessions and advanced training to level up your skills.",
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

  const whoGainCards = [
    {
      icon: "/icons/BlockchainLink.svg",
      title: "Blockchain-Verified Credential",
      description: "Receive verified proof of your leadership role.",
    },
    {
      icon: "/icons/TShirt.svg",
      title: "Swags & Merchandise",
      description: "Get exclusive Trikaya hoodies, T-shirts, and goodies.",
    },
    {
      icon: "/icons/WorkingMan.svg",
      title: "Internship Opportunities",
      description: "Top ambassadors get internship and referral access.",
    },
    {
      icon: "/icons/Collab.svg",
      title: "Mentorship Access",
      description: "Direct guidance from Trikaya mentors and team.",
    },
  ];
  const ApplyCards = [
    {
      icon: "/icons/FeedbackForms.svg",
      title: "Submit Application Form",
      description: "Fill out your profile and motivation statement.",
    },
    {
      icon: "/icons/SearchUserWithTie.svg",
      title: "Shortlisting",
      description: "Our team reviews your application and campus details.",
    },
    {
      icon: "/icons/Discuss.svg",
      title: "Interview / Discussion",
      description: "Selected candidates join a short orientation call.",
    },
    {
      icon: "/icons/onboarding.svg",
      title: "Onboarding",
      description: "Welcome to the Trikaya Ambassador family!",
    },
  ];

  const ambassadorRoleCards = [
    {
      icon: "/icons/OrganizeEvents.svg",
      title: "Organize Events",
      description: "Organize Trikaya events and hackathons on campus.",
    },
    {
      icon: "/icons/Megaphone.svg",
      title: "Create Awareness",
      description:
        "Create awareness about Blockchain, AI, Data Science, and Cybersecurity.",
    },
    {
      icon: "/icons/UserGroup.svg",
      title: "Onboard Students",
      description:
        "Help students register on Trikaya and access labs or mentorship.",
    },
    {
      icon: "/icons/Mentorship.svg",
      title: "Collaborate with Mentors",
      description: "Collaborate with mentors for webinars and learning drives.",
    },
    {
      icon: "/icons/ShareUpdates.svg",
      title: "Share Updates",
      description:
        "Share updates, feedback, and innovation stories from your college.",
    },
    {
      icon: "/icons/buildCommunity.svg",
      title: "Build Community",
      description: "Foster a vibrant tech community in your institution.",
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

  const ambassadorLevelCards = [
    {
      level: 1,
      title: "Campus Ambassador",
      description:
        "Represent Trikaya in your college, host events, and onboard peers.",
    },
    {
      level: 2,
      title: "City Ambassador",
      description:
        "Coordinate with multiple campuses, lead local events, and support new ambassadors.",
    },
    {
      level: 3,
      title: "State Ambassador",
      description:
        "Drive regional growth, represent your zone in leadership meets.",
    },
    {
      level: 4,
      title: "National Ambassador",
      description: "Lead innovation councils and mentor upcoming ambassadors.",
    },
  ];
  const ambassadors = [
    {
      name: "Rajesh Kumar",
      title: "IIT Delhi",
      quote:
        "Organized 3 Trikaya hackathons and grew the campus community by 200+ members.",
      image: "/icons/rajesh.svg",
    },
    {
      name: "Anjali Patel",
      title: "BITS Pilani",
      quote:
        "Became State Ambassador and mentored 15 campus ambassadors across Gujarat.",
      image: "/images/Diya.jpg",
    },
    {
      name: "Rahul Verma",
      title: "NIT Trichy",
      description: "",
      image: "/images/Arav.jpg",
      quote:
        "Led AI/ML workshops for 500+ students and secured internship at a top startup.",
    },
  ];
  return (
    <>
      <Banner
        title={"Lead Innovation on "}
        highlight={"Your Campus."}
        description="Join the Trikaya Student Ambassador Program — become the face of emerging technology in your college, connect with mentors, host events, and grow your career with verified leadership credentials."
        image="/ambassador.png"
        primaryButton={{
          label: "Apply Now",
          href: "",
        }}
        secondaryButton={{
          label: "View Program Benefits",
          href: "",
        }}
      />
      <CardGridSection
        heading={"What Is the Trikaya Student Ambassador "}
        highlight="Program?"
        gridClassName="grid grid-cols-1 sm:grid-cols-3 gap-6 py-11"
        containerClassName="my-11"
        description="The Trikaya Student Ambassador Program (TSAP) is a leadership and learning initiative that empowers students to represent Trikaya at their institutions. Ambassadors build vibrant tech communities, promote innovation, and serve as liaisons between Trikaya and their campuses."
        cards={ambassadorCards}
        headingAlign={"left"}
        button="Read Case Study"
      />
      <CardGridSection
        heading={"Why Join the "}
        highlight="Program?"
        containerClassName="my-11"
        description="Earn recognition, mentorship, and verified credentials while leading your campus community."
        cards={programCards}
        headingAlign={"left"}
      />
      <GenericButton
        label="Apply to Become an Ambassador"
        href="#"
        variant="primary"
        align="center"
      />
      <CardGridSection
        heading={"Program "}
        highlight="Structure"
        containerClassName="my-11"
        cardType="ambassador"
        gridClassName="flex flex-col gap-4 my-11"
        description="The program is decentralized, with city, state, and national ambassador levels for greater impact."
        cards={ambassadorLevelCards}
        headingAlign={"left"}
      />
      <CardGridSection
        heading={"Your Role as a Trikaya "}
        highlight="Ambassador"
        description="Ambassadors are the bridge between students and the world of emerging technology."
        containerClassName=""
        gridClassName="grid grid-cols-1 sm:grid-cols-3 gap-6 py-11"
        cards={ambassadorRoleCards}
        headingAlign={"left"}
      />
      <CardGridSection
        heading={"Who Can "}
        highlight="Apply?"
        containerClassName=""
        description="We're looking for enthusiastic, tech-driven students ready to lead."
        cards={whoApplyCards}
        headingAlign={"left"}
      />
      <GenericButton
        label="Apply Now"
        href="#"
        variant="secondary"
        align="center"
      />
      <CardGridSection
        heading={"What You'll "}
        highlight="Gain?"
        containerClassName="mb-11"
        description="Leadership. Learning. Blockchain-verified recognition."
        cards={whoGainCards}
        headingAlign={"left"}
      />
      <CardGridSection
        heading={"How to "}
        highlight="Apply?"
        containerClassName="my-11"
        description="It takes just a few steps to join the Trikaya leadership network."
        cards={ApplyCards}
        headingAlign={"left"}
      />
      <GenericButton
        label="Apply to Become an Ambassador"
        href="#"
        variant="secondary"
        align="center"
      />

      <Container>
        <SectionHeader
          title="Meet Our"
          highlight="Ambassadors"
          description="Learn from student leaders who've driven change on their campuses."
        />
        <div className="mx-auto grid grid-cols-1 justify-items-center gap-[35px] py-11 sm:grid-cols-2 lg:grid-cols-3">
          {ambassadors.map((ambassador, index) => (
            <GenericProfileCard
              key={index}
              {...ambassador}
              buttonText="Read Full Story"
            />
          ))}
        </div>
      </Container>
      <CallToAction
        title="Lead the Future with Trikaya"
        subtitle={
          <>
            Become a verified Student Ambassador and shape the next generation
            of <br /> innovators.
          </>
        }
        buttons={[{ label: "Apply Now", href: "", variant: "secondary" }]}
        showRocketBg={true}
      />
    </>
  );
}
