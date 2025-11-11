import Banner from "@/src/components/common/CommonBanner";
import Engineer from "@/public/images/engineer-talk.png";
import CompetetionCard from "@/src/components/Cards/Competetion-card";
import Container from "@/src/components/ui/Container";
import CardGridSection from "@/src/components/common/CardGridSection";
import rewards from "@/public/icons/Rewards.svg";
import problemSolving from "@/public/icons/ProblemSolving.svg";
import NotVerified from "@/public/icons/NotVerified.svg";
import WirelessNetwork from "@/public/icons/WirelessNetwork .svg";
import HackathonSection from "@/src/components/common/Hackathon";
import DailyWeeklyChallenges from "@/src/components/common/DailyWeekly";
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
        description="The ultimate space to test your skills, collaborate, and showcase verified achievements."
        cards={arenaCards}
        headingAlign={'left'}
      />
      <HackathonSection/>
      <DailyWeeklyChallenges/>
      {/* <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[35px]">
            {competitions.map((comp) => (
              <CompetetionCard {...comp} key={comp.id} />
            ))}
          </div>
        </Container>
      </section> */}

    </>
  );
}
