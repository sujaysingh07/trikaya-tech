import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";

interface InfoCardProps {
  icon: string | StaticImageData;
  title: string;
  description: string;
  subTitle?: string;
  button?: string;
  className?: string; // allow external style overrides
  badge?: string;
}

export default function InfoCard({
  icon,
  title,
  description,
  subTitle,
  button,
  className,
  badge,
}: InfoCardProps) {
  return (
    <div
      className={clsx(
        "group hover:border-primary-color flex flex-col items-start justify-center gap-3 rounded-[30px] border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-md",
        className,
      )}
    >
      {icon && (
        <div className="flex h-14 w-14 items-center justify-center rounded-full">
          <Image
            src={icon}
            alt={title}
            width={70}
            height={70}
            className="text-primary-color object-contain"
          />
        </div>
      )}

      {badge && (
        <span className="bg-primary-color text-md rounded-full px-[10px] py-1 text-white">
          {badge}
        </span>
      )}

      <h3 className="group-hover:text-primary-color text-left text-lg font-semibold text-[#03061E] transition-colors">
        {title}
      </h3>

      {subTitle && (
        <p className="text-left text-base text-[#666666]">{subTitle}</p>
      )}

      <p className="text-left text-sm text-gray-500">{description}</p>

      {button && (
        <button className="bg-primary-color mt-4 cursor-pointer rounded-md px-4 py-2 text-white hover:bg-[#0048d9]">
          {button}
        </button>
      )}
    </div>
  );
}
