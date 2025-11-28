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
    <div className="hover:border-primary-color flex flex-col justify-between rounded-[30px] border-2 border-[#CCCCCC] bg-white p-6 transition-all duration-300">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${levelColor}`}
        >
          {level}
        </span>
        <span className="flex items-center gap-1 text-sm font-bold text-black">
          <Icons variant="Clock" color="black" width={18} height={18} />{" "}
          {duration}
        </span>
      </div>

      {/* Title */}
      <h3 className="mb-1.5 text-[20px] leading-snug font-semibold text-[#03061E]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-base text-[#03061E]">{description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="my-[30px] rounded-full bg-[#D3E2FF] px-3 py-1 text-xs font-medium text-[#475569]"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Button */}
      <div className="flex">
        <Link
          href={href}
          className="bg-primary-color hover:bg-primary-color/80 mt-auto rounded-md px-[30px] py-2.5 text-center font-semibold text-white transition"
        >
          {LinkLabel}
        </Link>
      </div>
    </div>
  );
}
