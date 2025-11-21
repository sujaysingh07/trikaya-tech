import React from "react";
interface AmbassadorCardProps {
  level: number;
  title: string;
  description: string;
}

export default function AmbassadorCard({
  level,
  title,
  description,
}: AmbassadorCardProps) {
  return (
    <div className="border rounded-[30px] p-5 flex flex-col gap-2  transition-all border-[#CCCCCC]">
      <div className="flex gap-2 items-center">
        <span className="text-base font-semibold bg-gray-100 px-3 text-[#666666] py-1 rounded-full w-fit">
          Level {level}
        </span>

        <h3 className="text-[22px] font-semibold leading-[25px]">{title}</h3>
      </div>

      <p className="text-base font-normal text-[#666666]">{description}</p>
    </div>
  );
}
