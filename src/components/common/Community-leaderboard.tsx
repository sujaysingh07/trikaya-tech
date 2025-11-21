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
        "flex items-center justify-between rounded-2xl px-4 py-4 hover:bg-[#F0F5FF] transition-all ease-in",
      )}
    >
      {/* LEFT: Rank + Name */}
      <div className="flex items-center gap-6">
        {/* Rank Number */}
        <span className="text-[22px] font-bold text-primary-color w-6 text-center">
          {rank}
        </span>

        {/* Name + Points */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] md:text-[22px] font-semibold leading-[25px] text-[#0A0A0F]">
            {name}
          </h3>
          <p className="text-base text-[16px] font-normal text-[#666666]">
            {points} KP
          </p>
        </div>
      </div>

      {/* RIGHT: Badges */}
      <div className="flex items-center gap-2 flex-wrap justify-end min-w-40">
        {badges.map((badge, index) => (
          <span
            key={index}
            className="px-3 py-1 text-base font-medium rounded-full bg-[#EBEAEA] text-[#666666]"
          >
            {badge}
          </span>
        ))}
      </div>
    </div>
  );
}
