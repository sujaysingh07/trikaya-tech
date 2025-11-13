import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";

interface GenericProfileCardProps {
  name: string;
  title: string;
  description?: string;
  quote?: string; // 👈 new: short quote or achievement
  image?: string | StaticImageData;
  onButtonClick?: () => void;
  buttonText?: string;
  variant?: "default" | "arena" | "community"; // 👈 for styling control
  className?: string;
}

export default function GenericProfileCard({
  name,
  title,
  description,
  quote,
  image,
  onButtonClick,
  buttonText = "Book a Session",
  variant = "default",
  className,
}: GenericProfileCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between items-center text-center bg-white border border-gray-200 rounded-[30px] shadow-sm hover:shadow-md transition-all duration-300 p-6 w-full h-full",
        className
      )}
    >
      {/* Top Section (Image + Info) */}
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-[90px] h-[90px] rounded-full overflow-hidden bg-gray-200 mb-5">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={90}
              height={90}
              className="object-cover w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-blue-600 text-white font-bold text-lg">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          )}
        </div>

        {/* Name + Role */}
        <h3 className="font-semibold text-[22px] text-[#111827]">{name}</h3>
        <p className="text-base text-[#666666] leading-snug mt-1">{title}</p>

        {/* Description (optional) */}
        {description && (
          <p className="text-sm text-[#4B5563] mt-1">{description}</p>
        )}

        {/* Quote Section */}
        {quote && (
          <p
            className={clsx(
              "italic text-[15px] mt-3 font-medium",
              variant === "arena" ? "text-[#1D4ED8]" : "text-[#2563EB]"
            )}
          >
            “{quote}”
          </p>
        )}
      </div>

      {/* Button (Always at Bottom) */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className={clsx(
            "px-5 mt-4 py-2 text-white text-sm font-medium rounded-md transition-all duration-200",
            variant === "arena"
              ? "bg-[#1D4ED8] hover:bg-[#153EAD]"
              : "bg-blue-600 hover:bg-blue-700"
          )}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
