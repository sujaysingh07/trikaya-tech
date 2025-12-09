import { LeaderBoardType } from "../common/Leaderboard";
import clsx from "clsx";

interface PerformanceCardProps {
  leaderboardData: LeaderBoardType[];
  className?: string;
  cardClassName?: string;
  buttonAlign?: "left" | "center" | "right";
  buttonText?: string;
  onButtonClick?: () => void;
  description?: string;
  highlightText?: string; // bold part of the description
}

export default function PerformanceCard({
  leaderboardData,
  className,
  buttonAlign = "left",
  buttonText = "View Full Leadership",
  onButtonClick,
  description,
  highlightText,
  cardClassName = "",
}: PerformanceCardProps) {
  return (
    <div
      className={clsx(
        "relative z-10 w-full rounded-[30px] bg-[#F0F5FF] p-8 md:p-10",
        className,
      )}
    >
      <h2 className="mb-8 text-2xl leading-[100%] font-extrabold text-black md:text-[37px]">
        Top Performers This Month
      </h2>

      {/* Leaderboard List */}
      <div className="flex flex-col">
        {leaderboardData.map((player) => (
          <TopPerformerLeaderBoard
            key={player.rank}
            player={player}                 
            cardClassName={cardClassName}
          />
        ))}
      </div>

      {/* CTA Button */}
      <div
        className={clsx("mt-8 flex w-full", {
          "justify-start": buttonAlign === "left",
          "justify-center": buttonAlign === "center",
          "justify-end": buttonAlign === "right",
        })}
      >
        <button
          onClick={onButtonClick}
          className="rounded-lg bg-[#2563EB] px-6 py-3 text-base font-semibold text-white transition-all hover:bg-[#1D4ED8]"
        >
          {buttonText}
        </button>
      </div>

      {/* Description Below Button */}
      {description && (
        <p className="mt-4 text-center text-[20px] text-black">
          {description}{" "}
          {highlightText && (
            <span className="font-bold text-black">{highlightText}</span>
          )}
        </p>
      )}
    </div>
  );
}

const TopPerformerLeaderBoard = ({
  player,
  cardClassName,
}: {
  player: LeaderBoardType;
  cardClassName: string;
}) => {
  return (
    <div
      className={clsx(
        "flex items-center justify-between py-3 transition-all duration-300 md:py-4",
        cardClassName,
      )}
    >
      {/* Left: Rank + Name */}
      <div className="flex items-center gap-4">
        <div
          className={`h-8 w-8 md:h-10 md:w-10 ${player?.color} flex items-center justify-center rounded-full font-semibold text-white`}
        >
          {player?.rank}
        </div>
        <div>
          <h3 className="text-base font-semibold text-black md:text-[20px]">
            {player?.name}
          </h3>
          <p className="text-base text-gray-700">
            {player?.badges} badges earned
          </p>
        </div>
      </div>

      {/* Right: XP + Growth */}
      <div className="flex flex-col items-end">
        <p className="text-base font-semibold text-black md:text-[20px]">
          {player?.xp}
        </p>

        {/* {player?.growth && (
          <p className="flex items-center gap-1 text-base text-[#1D9402]">
            {player?.growth}
          </p>
        )} */}
      </div>
    </div>
  );
};
