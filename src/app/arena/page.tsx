import Banner from "@/src/components/common/CommonBanner";
import Engineer from "@/public/images/engineer-talk.png";
import Container from "@/src/components/ui/Container";
import CardGridSection from "@/src/components/common/CardGridSection";
import rewards from "@/public/icons/Rewards.svg";
import problemSolving from "@/public/icons/ProblemSolving.svg";
import NotVerified from "@/public/icons/NotVerified.svg";
import WirelessNetwork from "@/public/icons/WirelessNetwork .svg";
import HackathonSection from "@/src/components/common/Hackathon";
import DailyWeeklyChallenges from "@/src/components/common/DailyWeekly";
import SkillQuests from "@/src/components/common/SkillQuests";
import PerformanceCard from "@/src/components/Cards/Performance-card";
import SectionHeader from "@/src/components/common/SectionHeader";
import GenericProfileCard from "@/src/components/Cards/Generic-profile-card";
import CallToAction from "@/src/components/common/CallToAction";
import { LeaderBoardType } from "@/src/components/common/Leaderboard";
export type CompetitionType = {
  id: number;
  title: string;
  subtitle: string;
  participants: string;
  prizePool: string;
  image: string;
};
export default function Arena() {
  const competitions: CompetitionType[] = [
    {
      id: 1,
      title: "Weekly Code Sprint",
      subtitle: "Fast-paced coding challenges every week",
      participants: "5,000+",
      prizePool: "$1,000",
      image: "/images/competitions/code-sprint.png",
    },
    {
      id: 2,
      title: "AI Challenge",
      subtitle: "Build the best ML model for real datasets",
      participants: "2,500+",
      prizePool: "$5,000",
      image: "/images/competitions/ai-challenge.png",
    },
    {
      id: 3,
      title: "Blockchain Hackathon",
      subtitle: "Create innovative dApps and win prizes",
      participants: "3,000+",
      prizePool: "$10,000",
      image: "/images/competitions/blockchain-hackathon.png",
    },
  ];
  const arenaCards = [
    {
      icon: rewards,
      title: "Win Rewards & Internships",
      description: "Top performers earn prizes, sponsorships, and job offers.",
    },
    {
      icon: problemSolving,
      title: "Real-World Problem Statements",
      description:
        "Solve industry-grade challenges and get noticed by employers.",
    },
    {
      icon: NotVerified,
      title: "Verified Achievements",
      description:
        "Every win is secured and displayed through Trikaya Protocol.",
    },
    {
      icon: WirelessNetwork,
      title: "Collaborate & Network",
      description: "Work with peers, mentors, and companies on real projects.",
    },
  ];
  const leaderboardData: LeaderBoardType[] = [
    {
      rank: 1,
      name: "Alex Chen",
      badges: 12,
      xp: "15,420 KP",
      growth: "+240",
      color: "bg-[#22C55E]",
    },
    {
      rank: 2,
      name: "Sarah Kumar",
      badges: 12,
      xp: "15,420 KP",
      growth: "+240",
      color: "bg-[#FACC15]",
    },
    {
      rank: 3,
      name: "Michael Zhang",
      badges: 12,
      xp: "15,420 KP",
      growth: "+240",
      color: "bg-[#EF4444]",
    },
    {
      rank: 4,
      name: "Emma Rodriguez",
      badges: 12,
      xp: "15,420 KP",
      growth: "+240",
      color: "bg-[#94A3B8]",
    },
    {
      rank: 5,
      name: "James Wilson",
      badges: 12,
      xp: "15,420 KP",
      growth: "+240",
      color: "bg-[#94A3B8]",
    },
  ];

  const experts = [
    {
      name: "Aarav Mehta",
      title: "ML Engineer at TechCorp",
      quote: "Won AI Quest → Joined TechCorp as ML Intern",
      description: "Smart Contracts, DeFi",
      image: "/images/Arav.jpg",
    },
    {
      name: "Diya Gupta",
      title: "Blockchain Developer at CryptoStart",
      description: "Machine Learning, Neural Networks",
      image: "/images/Diya.jpg",
      quote: "Hackathon Winner → Secured Full-time Role",
    },
    {
      name: "Rohan Verma",
      title: "Data Scientist at DataLabs",
      description: "Analytics, Visualization",
      image: "/images/Rohan.jpg",
      quote: "Completed 3 Quests → Got Project Funding",
    },
    {
      name: "Deepak Singh",
      title: "ML Engineer at TechCorp",
      description: "Ethical Hacking, Network Security",
      image: "/images/Deepak.jpg",
      quote: "Won AI Quest → Joined TechCorp as ML Intern",
    },
  ];

  return (
    <>
      <Banner
        title={"Compete. Create.  "}
        highlight={"Conquer the Arena."}
        description="Join Trikaya Arena to challenge your skills in hackathons, mini-challenges, and quests. Win rewards, earn recognition, and unlock career opportunities — all powered by blockchain verification."
        image={Engineer}
        primaryButton={{
          label: "Start Learning",
          href: "",
        }}
        secondaryButton={{
          label: "Explore Labs",
          href: "",
        }}
      />
      <CardGridSection
        heading={"Why Join the Trikaya "}
        highlight="Arena?"
        containerClassName="my-11"
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-11 "
        description="The ultimate space to test your skills, collaborate, and showcase verified achievements."
        cards={arenaCards}
        headingAlign={"left"}
      />
      <HackathonSection />
      <DailyWeeklyChallenges />
      <SkillQuests />
      <Container>
        <SectionHeader
          title="Leaderboard & "
          highlight="Rewards"
          description="Track your performance and see where you stand among Trikaya's top innovators. Every verified submission adds KP to your profile, visible on your Trikaya-Verified CV. AllHackathonsChallenges"
        />
        <PerformanceCard
          leaderboardData={leaderboardData}
          buttonAlign="center"
          className="my-11"
          buttonText="View Full Leadership"
          description="Leaderboards reset every quarter."
          highlightText="Keep building!"
        />
        <SectionHeader
          title="Arena "
          highlight="Champions"
          description="Meet Trikaya users who turned their Arena wins into job offers, internships, and projects."
        />
        <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[35px] justify-items-center py-11">
          {experts.map((expert, index) => (
            <GenericProfileCard
              key={index}
              {...expert}
              buttonText="View Story"
            />
          ))}
        </div>
      </Container>
      <CallToAction
        title="Step Into the Arena. Prove Your Skills."
        subtitle={
          <>
            Participate in hackathons, challenges, and quests — earn verified
            <br />
            recognition and rewards that matter.
          </>
        }
        buttons={[{ label: "Join Arena Now", href: "#", variant: "secondary" }]}
        showRocketBg={true}
      />
    </>
  );
}
