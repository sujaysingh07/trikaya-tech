import { Icons } from "@/public/icons/icon";
import { LabCardProps } from "../common/BlockchainLab";
import Link from "next/link";

export function LabCard({
  level,
  duration,
  title,
  description,
  tags,
  href,
  levelColor,
  LinkLabel,
}: LabCardProps) {
  return (
    <div className="flex flex-col justify-between border-2 border-[#CCCCCC] rounded-[30px] p-6 bg-white hover:border-primary-color transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <span
          className={`text-sm font-medium px-3 py-1 rounded-full ${levelColor}`}
        >
          {level}
        </span>
        <span className="text-sm text-black flex gap-1 items-center font-bold">
          <Icons variant="Clock" color="black" width={18} height={18} />{" "}
          {duration}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[20px] font-semibold text-[#03061E] mb-1.5 leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base text-[#03061E] ">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="text-xs font-medium bg-[#D3E2FF] text-[#475569] px-3 my-[30px] py-1  rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Button */}
      <div className="flex">
        <Link
          href={href}
          className="mt-auto text-center bg-primary-color px-[30px] text-white font-semibold rounded-md py-2.5 hover:bg-primary-color/80 transition"
        >
          {LinkLabel}
        </Link>
      </div>
    </div>
  );
}
