import clsx from "clsx";

interface LeaderboardRowProps {
  rank: number;
  name: string;
  points: number;
  badges?: string[];
}

export default function LeaderboardRow({
  rank,
  name,
  points,
  badges = [],
}: LeaderboardRowProps) {
  return (
    <div
      className={clsx(
        "flex items-center justify-between rounded-2xl px-4 py-4 transition-all ease-in hover:bg-[#F0F5FF]",
      )}
    >
      {/* LEFT: Rank + Name */}
      <div className="flex items-center gap-6">
        {/* Rank Number */}
        <span className="text-primary-color w-6 text-center text-base font-bold md:text-[22px]">
          {rank}
        </span>

        {/* Name + Points */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] leading-[25px] font-semibold whitespace-nowrap text-[#0A0A0F] md:text-[22px]">
            {name}
          </h3>
          <p className="text-xs font-normal text-[#666666] md:text-base">
            {points} KP
          </p>
        </div>
      </div>

      {/* RIGHT: Badges */}
      <div className="flex min-w-40 flex-wrap items-center justify-end gap-2">
        {badges.map((badge, index) => (
          <span
            key={index}
            className="rounded-full bg-[#EBEAEA] px-3 py-1 text-xs font-medium text-[#666666] md:text-base"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
