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
    <Container className="relative overflow-hidden pt-11">
      <div>
        <SectionHeader
          title="Leaderboard & "
          highlight="Achievements"
          description="Compete, collaborate, and climb the leaderboard. Your verified scores make you visible to top employers."
        />
      </div>
      <div className="relative mx-auto mt-10 flex flex-col items-center rounded-[30px] md:flex-row">
        {/* LEFT SECTION */}
        <PerformanceCard
          leaderboardData={leaderboardData}
          className="w-full md:w-[65%]"
          cardClassName="max-w-[600px]"
        />

        {/* RIGHT IMAGE (hidden on mobile) */}
        <div className="absolute right-0 bottom-0 z-10 hidden h-[545px] w-[45%] overflow-hidden rounded-[30px] shadow-lg md:bottom-auto md:block">
          <Image
            src="/leaderboard.svg"
            alt="Leaderboard Background"
            fill
            className="h-full object-cover"
          />
        </div>
      </div>
    </Container>
  );
}
