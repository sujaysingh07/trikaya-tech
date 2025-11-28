import React from "react";
interface AmbassadorCardProps {
  level: number | string;
  title: string;
  description: string;
}

export default function AmbassadorCard({
  level,
  title,
  description,
}: AmbassadorCardProps) {
  return (
    <div className="flex flex-col gap-2 rounded-[30px] border border-[#CCCCCC] p-5 transition-all">
      <div className="flex items-center gap-2">
        <span className="w-fit rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold whitespace-nowrap text-[#666666] md:text-base">
          Level {level}
        </span>

        <h3 className="text-base leading-[25px] font-semibold md:text-[22px]">
          {title}
        </h3>
      </div>

      <p className="text-sm font-normal text-[#666666] md:text-base">
        {description}
      </p>
    </div>
  );
}
