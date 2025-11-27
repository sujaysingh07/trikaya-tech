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
  badge
}: InfoCardProps) {
  return (
    <div
      className={clsx(
        "group flex flex-col items-start justify-center gap-3 rounded-[30px] border border-gray-200 hover:border-primary-color bg-white p-8 transition-all duration-300 shadow-sm hover:shadow-md text-center",
        className
      )}
    >
      {icon && (
        <div className="flex w-14 h-14 rounded-full items-center justify-center">
          <Image
            src={icon}
            alt={title}
            width={70}
            height={70}
            className="object-contain text-primary-color"
          />
        </div>
      )}

     { badge && <span className="bg-primary-color rounded-full text-md text-white px-[10px] py-1">{badge}</span>}

      <h3 className="font-semibold text-left text-lg text-[#03061E] group-hover:text-primary-color transition-colors">
        {title}
      </h3>

      {subTitle && (
        <p className="text-[#666666] text-base text-left">{subTitle}</p>
      )}

      <p className="text-gray-500 text-sm text-left">{description}</p>

      {button && (
        <button className="mt-4 px-4 py-2 bg-primary-color text-white rounded-md hover:bg-[#0048d9] cursor-pointer">
          {button}
        </button>
      )}
    </div>
  );
}
