export const dynamic = "force-dynamic";
import Banner from "@/src/components/common/CommonBanner";
import Engineer from "@/public/images/engineer-talk.png";
import Container from "@/src/components/ui/Container";
import CardGridSection from "@/src/components/common/CardGridSection";
import rewards from "@/public/icons/Rewards.svg";
import problemSolving from "@/public/icons/ProblemSolving.svg";
import NotVerified from "@/public/icons/NotVerified.svg";
import WirelessNetwork from "@/public/icons/WirelessNetwork.svg";
import HackathonSection from "@/src/components/common/Hackathon";
import DailyWeeklyChallenges from "@/src/components/common/DailyWeekly";
import SkillQuests from "@/src/components/common/SkillQuests";
import PerformanceCard from "@/src/components/cards/PerformanceCard";
import SectionHeader from "@/src/components/common/SectionHeader";
import GenericProfileCard from "@/src/components/cards/GenericProfileCard";
import CallToAction from "@/src/components/common/CallToAction";
import { LeaderBoardType } from "@/src/components/common/Leaderboard";
import { httpRequest } from "@/src/lib/httpClient";
import { APIResponse, HackathonDataType, QuestDataType, WeeklyChallengeAPIItem, } from "@/src/lib/types/commonTypes";
import { getRankColor } from "@/src/lib/common";
import { generatePageMetadata } from "@/src/lib/generatePageMetadata";
import { generateCanonical } from "@/src/lib/utils";
export const metadata = generatePageMetadata({
  title:
    "Trikaya Arena | Compete in Tech Hackathons & Challenges",
  description:
    "Join Trikaya Arena to challenge your skills in hackathons and quests. Win rewards, earn recognition, and unlock career opportunities with blockchain verification.",
  keywords: ['Trikaya Arena', 'Trikaya', ' Trikaya Platform', 'Trikaya tech', 'Trikaya Io', 'Trikaya AI', 'Tech Hackathons', 'Coding Competitions', ' Blockchain Challenges', 'AI Challenges', 'Data Science Quests', 'Cybersecurity CTF', 'Code Quests', ' Hackathon'],
  canonical: generateCanonical("/arena"),
});

export default async function Arena() {

  const hackathonData = await httpRequest<APIResponse<HackathonDataType[]>>(
    "/api/v1/hackathon",
  );

  const questData = await httpRequest<APIResponse<QuestDataType[]>>("/api/v1/quests",);

  const weeklyChallengesData = await httpRequest<
    APIResponse<WeeklyChallengeAPIItem[]>
  >("/api/v1/challenges",);

  const response = await httpRequest<
    APIResponse<{ name: string; karma_points: number }[]>
  >("/api/v1/leaderboard",);


  const leaderboardData: LeaderBoardType[] = response?.data?.slice(0, 10).map((item, index) => ({
    rank: index + 1,
    name: item.name,
    badges: item.karma_points,
    xp: `${item.karma_points} KP`,
    growth: "+0%",
    color: getRankColor(index + 1),
  }));


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
        showH1tag={true}
        containerClassName="my-11"
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-11 "
        description="The ultimate space to test your skills, collaborate, and showcase verified achievements."
        cards={arenaCards}
        headingAlign={"left"}
      />

      <HackathonSection hackathonData={hackathonData.data} />
      <DailyWeeklyChallenges weeklyChallengesData={weeklyChallengesData.data || []} />
      <SkillQuests questData={questData.data} />
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
        <div className="mx-auto grid grid-cols-1 justify-items-center gap-[35px] py-11 sm:grid-cols-2 lg:grid-cols-4">
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

