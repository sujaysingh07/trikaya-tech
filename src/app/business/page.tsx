import Banner from "@/src/components/common/CommonBanner";
import mentorship from "@/public/images/community.jpg";
import CardGridSection from "@/src/components/common/CardGridSection";
import rewards from "@/public/icons/OnlineLearning.svg";
import NotVerified from "@/public/icons/DashboardCharts.svg";
import problemSolving from "@/public/icons/TalentAcquisition.svg";
import WirelessNetwork from "@/public/icons/Collaborative.svg";
import SectionHeader from "@/src/components/common/SectionHeader";
import Container from "@/src/components/ui/Container";
import CommunityCard from "@/src/components/Cards/Community-card";
import CommunityJoinCard from "@/src/components/Cards/CommunityJoin-card";
import GradientImageCardThree from "@/src/components/Cards/GradientImageCardThree";
import MeetupCallout from "@/src/components/common/MeetupCallout";
import LeaderboardRow from "@/src/components/common/Community-leaderboard";
import GenericButton from "@/src/components/common/GenericButton";
import ReusableCard from "@/src/components/Cards/SkillCard";
import GenericProfileCard from "@/src/components/Cards/Generic-profile-card";
import CallToAction from "@/src/components/common/CallToAction";
import CtaBanner from "@/src/components/common/Cta-Banner";
import { desc, sub } from "framer-motion/client";
export default function Business() {
  const mentorCards = [
    {
      icon: rewards,
      title: "Verified Credentials",
      description:
        "Every student skill and certification recorded on blockchain.",
    },
    {
      icon: NotVerified,
      title: "Smarter Learning Insights",
      description:
        "AI dashboards to track learner performance and course engagement.",
    },
    {
      icon: problemSolving,
      title: "Talent Pipeline Access",
      description:
        "Employers discover verified candidates ready for real-world roles.",
    },
    {
      icon: WirelessNetwork,
      title: "Collaborative Ecosystem",
      description:
        "Connect academia and industry through projects, labs, and mentorship.",
    },
  ];
  const CollegeCards = [
    {
      icon: "/icons/LearnEnglish.svg",
      title: "Learning Integration",
      description:
        "Embed Trikaya courses and labs directly into your academic curriculum.",
    },
    {
      icon: "/icons/WebsiteAnalytics.svg",
      title: "Skill Analytics Dashboard",
      description: "Track student progress and identify future-ready skills.",
    },
    {
      icon: "/icons/BlockchainSecurity.svg",
      title: "Blockchain Verification",
      description:
        "Certify degrees and projects with tamper-proof blockchain validation.",
    },
    {
      icon: "/icons/CampusIndustryConnect.svg",
      title: "Campus-Industry Connect",
      description:
        "Host hackathons, mentorship sessions, and placement drives.",
    },
  ];

  const EmployerCards = [
    {
      icon: "/icons/Clipboard.svg",
      title: "Verified Talent Database",
      description: "Discover candidates with blockchain-verified skills.",
    },
    {
      icon: "/icons/Brain.svg",
      title: "AI-Matched Recommendations",
      description: "Trikaya AI matches your roles with best-fit candidates.",
    },
    {
      icon: "/icons/file-cv.svg",
      title: "Trikaya-Verified CVs",
      description:
        "Instantly verify authenticity of credentials and past projects.",
    },
    {
      icon: "/icons/DashboardWidgets.svg",
      title: "Employer Dashboard",
      description:
        "Track hiring metrics, candidate engagement, and talent analytics.",
    },
  ];

    const institutionCards = [
      {
        icon: "/icons/Clipboard.svg",
        title: "XYZ University",
        subtitle: "Blockchain-Enabled Student Records",
        description:
          "Implemented blockchain verification for 10,000+ students, improving placement rates by 35%.",
      },
      {
        icon: "/icons/Clipboard.svg",
        title: "Tech Corp Inc.",
        subtitle: "AI-Powered Campus Hiring",
        description:
          "Reduced hiring time by 50% using Trikaya's verified talent pool and smart matching.",
      },
      {
        icon: "/icons/Clipboard.svg",
        title: "National Institute",
        subtitle: "Integrated Learning Ecosystem",
        description:
          "Enhanced curriculum with industry-aligned courses, achieving 90% student engagement.",
      },
    ];





  const partnerModelCards = [
    {
      title: "Integration Partner",
      description: "Embed Trikaya into your LMS and curriculum.",
    },
    {
      title: "Hiring Partner",
      description:
        "Access verified talent pools for internships and full-time roles.",
    },
    {
      title: "Event Partner",
      description: "Co-host hackathons, summits, and innovation challenges.",
    },
    {
      title: "Mentorship Partner",
      description:
        "Sponsor or provide mentors to grow the next generation of talent.",
    },
  ];

  return (
    <>
      <Banner
        title={"Empowering Institutions."}
        highlight={"Enabling Employers."}
        description="Trikaya bridges learning and industry through verified skills, AI-driven analytics, and collaborative partnerships. Build stronger talent pipelines and transform how you educate, assess, and hire."
        image={mentorship}
        primaryButton={{
          label: "Partner With Trikaya",
          href: "",
        }}
        secondaryButton={{
          label: "Book a Demo",
          href: "",
        }}
      />
      <CardGridSection
        heading={"Why Partner with "}
        highlight="Trikaya?"
        containerClassName="my-11"
        description="Trikaya's AI-powered ecosystem helps institutions and employers connect seamlessly through verified learning data and smart career pathways."
        cards={mentorCards}
        headingAlign={"left"}
      />

      <CardGridSection
        heading={"Trikaya for Colleges &  "}
        highlight="Universities"
        containerClassName="my-11"
        description="Enable your students to learn, practice, and verify their skills on blockchain. Drive better placement outcomes with Trikaya's integrated academic solutions."
        cards={CollegeCards}
        headingAlign={"left"}
      />
      <CtaBanner
        title="Empower your students with blockchain-verified education."
        subtitle="Join leading institutions in transforming how students learn, build skills, and launch careers."
        buttonLabel="Book a Campus Demo"
        buttonLink="#"
        variant="primary"
      />

      <CardGridSection
        heading={"Trikaya for  "}
        highlight="Employers"
        containerClassName="my-11"
        description="Access verified, job-ready candidates through Trikaya's AI-driven hiring ecosystem. Every skill, project, and credential is authenticated through the Trikaya Protocol."
        cards={EmployerCards}
        headingAlign={"left"}
      />
      <CtaBanner
        title="Hire confidently with verified data, not assumptions."
        subtitle="Transform your recruitment process with blockchain-verified talent and AI-powered matching."
        buttonLabel="Request Employer Access"
        buttonLink="#"
        variant="outline"
      />
      <CardGridSection
        heading={"Trusted by Leading Institutions   "}
        highlight="& Companies"
        containerClassName="my-11"
        gridClassName="grid grid-cols-1 sm:grid-cols-3 gap-6 py-11"
        description="See how partners are transforming learning and hiring with Trikaya."
        cards={institutionCards}
        button={"Read Case Study"}
        headingAlign={"left"}
      />

      <CardGridSection
        heading={"Flexible Partnership  "}
        highlight="Models"
        containerClassName="my-11"
        description="Choose a model that fits your organization's goals.."
        cards={partnerModelCards}
        headingAlign={"left"}
      />
      <GenericButton
        label="View All Partners"
        href="#"
        variant="secondary"
        align="center"
      />

      <CallToAction
        title="Build Your Future with Trikaya"
        subtitle={
          <>Find the right opportunity. Get verified. Grow your career.</>
        }
        buttons={[
          { label: "Get Started Now", href: "#", variant: "secondary" },
        ]}
        showRocketBg={true}
      />
    </>
  );
}
