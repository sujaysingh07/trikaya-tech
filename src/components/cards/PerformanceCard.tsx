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
  cardClassName,
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
          <div
            key={player.rank}
            className={clsx(
              "flex items-center justify-between py-3 transition-all duration-300 md:py-4",
              cardClassName,
            )}
          >
            {/* Left: Rank + Name */}
            <div className="flex items-center gap-4">
              <div
                className={`h-8 w-8 md:h-10 md:w-10 ${player.color} flex items-center justify-center rounded-full font-semibold text-white`}
              >
                {player.rank}
              </div>
              <div>
                <h3 className="text-base font-semibold text-black md:text-[20px]">
                  {player.name}
                </h3>
                <p className="text-base text-gray-700">
                  {player.badges} badges earned
                </p>
              </div>
            </div>

            {/* Right: KP + Growth */}
            <div className="flex flex-col items-end">
              <p className="text-base font-semibold text-black md:text-[20px]">
                {player.xp}
              </p>
              {player.growth && (
                <p className="flex items-center gap-1 text-base text-[#1D9402]">
                  <svg
                    width="22"
                    height="15"
                    viewBox="0 0 22 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.26373 6.2461C7.67538 5.83445 8.3424 5.83445 8.75407 6.2461L11.3451 8.83713L18.0744 2.10782H15.3033C14.7213 2.10782 14.2494 1.63593 14.2494 1.05391C14.2494 0.47189 14.7213 0 15.3033 0H20.6183C21.2006 0 21.6722 0.47189 21.6722 1.05391V6.25612C21.6722 6.83812 21.2006 7.31003 20.6183 7.31003C20.0363 7.31003 19.5647 6.83814 19.5647 6.25612V3.59817L12.0904 11.0724H12.0901C11.6788 11.4841 11.0114 11.4841 10.5997 11.0724L8.00869 8.48141L1.79884 14.6913C1.38752 15.1029 0.720165 15.1029 0.308488 14.6913C-0.102829 14.2799 -0.102829 13.6126 0.308488 13.2009L7.26373 6.2461Z"
                      fill="#1D9402"
                    />
                  </svg>
                  {player.growth}
                </p>
              )}
            </div>
          </div>
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
