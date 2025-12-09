import Image from "next/image";
import Container from "../ui/Container";
import PerformanceCard from "../cards/PerformanceCard";
import SectionHeader from "./SectionHeader";
import { httpRequest } from "@/src/lib/httpClient";
import { APIResponse } from "@/src/lib/types/commonTypes";
import { getRankColor } from "@/src/lib/common";
export type LeaderBoardType = {
  rank: number;
  name: string;
  badges: number;
  xp: string;
  growth?: string;
  color: string;
};
const response = await httpRequest<
  APIResponse<{ name: string; karma_points: number }[]>
>("/api/v1/leaderboard");


const leaderboardData: LeaderBoardType[] = response?.data?.slice(0, 5).map((item, index) => ({
  rank: index + 1,
  name: item.name,
  badges: item.karma_points,
  xp: `${item.karma_points} KP`,
  growth: "+0%",
  color: getRankColor(index + 1),
}));
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
