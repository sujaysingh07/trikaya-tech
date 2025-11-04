import Banner from "@/src/components/common/CommonBanner";
import Engineer from "@/public/images/engineer-talk.png";
import CoursesSection from "@/src/components/common/CourseSection";
import CompetetionCard from "@/src/components/Cards/Competetion-card";
import Container from "@/src/components/ui/Container";
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
  return (
    <>
      <Banner
        title={"Compete & "}
        highlight={" Win"}
        description="Test your skills against the best. Join competitions, win prizes, and build your reputation."
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
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[35px]">
            {competitions.map((comp) => (
              <CompetetionCard {...comp} key={comp.id} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
