import Image from "next/image";
import Container from "../ui/Container";
import PerformanceCard from "../Cards/Performance-card";
import SectionHeader from "./SectionHeader";
export type LeaderBoardType = {
  rank: number;
  name: string;
  badges: number;
  xp: string;
  growth?: string; 
  color: string;
};
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

export default function Leaderboard() {
  return (
    <Container className="relative pt-16 overflow-hidden">
      <div>
        <SectionHeader
          title="Leaderboard & "
          highlight="Achievements"
          description="Compete, collaborate, and climb the leaderboard. Your verified scores make you visible to top employers."
        />
      </div>
      <div className="relative mx-auto rounded-[30px] flex flex-col md:flex-row items-center mt-10">
        {/* LEFT SECTION */}
        <PerformanceCard
          leaderboardData={leaderboardData}
          className="w-full md:w-[65%]"
          cardClassName="max-w-[600px]"
        />

        {/* RIGHT IMAGE (hidden on mobile) */}
        <div className="hidden md:block absolute right-0 bottom-0 md:bottom-auto z-10 w-[45%] h-[545px] rounded-[30px] overflow-hidden shadow-lg">
          <Image
            src="/leaderboard.svg"
            alt="Leaderboard Background"
            fill
            className="object-cover h-full"
          />
        </div>
      </div>
    </Container>
  );
}
