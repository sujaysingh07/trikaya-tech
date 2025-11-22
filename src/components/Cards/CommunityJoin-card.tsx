import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
import { Icons } from "@/public/icons/icon";

interface CommunityJoinCardProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
  members: string; // "45K+ members"
  isActive?: boolean;
    buttonLabel?: string;
}

export default function CommunityJoinCard({
  icon,
  title,
  description,
  members,
    buttonLabel = "Join Now",
}: CommunityJoinCardProps) {
  return (
    <div
      className={clsx(
        "w-full rounded-2xl p-6 border bg-white transition-all duration-200 cursor-pointer",
        "border-[#E5E7EB] hover:border-primary-color "
      )}
    >
      {/* ICON */}
      <Image src={icon} alt={title} width={74} height={74} />

      {/* TITLE */}
      <h3 className="text-[22px] font-semibold text-[#03061E] leading-[25px] tracking-[.5%] mt-3">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-base leading-[25px] text-[#666666] mt-1">
        {description}
      </p>

      {/* MEMBERS */}
      <p className="text-base text-black font-medium tracking-[.5%] mt-3 flex items-center gap-2">
        <Icons variant="group-people" />
        {members}
      </p>

      {/* BUTTON */}
      <button className="mt-4 bg-primary-color text-white px-5 py-2.5 rounded-md font-medium hover:bg-[#0048D9] transition">
        {buttonLabel}
      </button>
    </div>
  );
}
