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
        "w-full cursor-pointer rounded-2xl border bg-white p-6 transition-all duration-200",
        "hover:border-primary-color border-[#E5E7EB]",
      )}
    >
      {/* ICON */}
      <Image src={icon} alt={title} width={74} height={74} />

      {/* TITLE */}
      <h3 className="mt-3 text-[22px] leading-[25px] font-semibold tracking-[.5%] text-[#03061E]">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="mt-1 text-base leading-[25px] text-[#666666]">
        {description}
      </p>

      {/* MEMBERS */}
      <p className="mt-3 flex items-center gap-2 text-base font-medium tracking-[.5%] text-black">
        <Icons variant="group-people" />
        {members}
      </p>

      {/* BUTTON */}
      <button className="bg-primary-color mt-4 rounded-md px-5 py-2.5 font-medium text-white transition hover:bg-[#0048D9]">
        {buttonLabel}
      </button>
    </div>
  );
}
