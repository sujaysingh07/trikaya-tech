import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";
import { Icons } from "@/public/icons/icon";

interface GenericProfileCardProps {
  name: string;
  title: string;
  description?: string;
  quote?: string;
  image?: string | StaticImageData;
  onButtonClick?: () => void;
  buttonText?: string;
  variant?: "default" | "arena" | "community";
  className?: string;
  isFeatured?: boolean;
  rating?: number;
  showRating?: boolean;
  ratingColor?: string;
  experties?: string;
}

export default function GenericProfileCard({
  name,
  title,
  description,
  quote,
  image,
  onButtonClick,
  buttonText = "Book Now",
  variant = "default",
  className,
  experties,
  isFeatured = false,
  rating,
  showRating = false,
  ratingColor = "#FACC15",
}: GenericProfileCardProps) {
  return (
    <div
      className={clsx(
        "flex h-full w-full flex-col items-center justify-between rounded-[30px] border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md",
        className,
      )}
    >
      {/* Profile Image + Labels */}
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="mb-3 h-[90px] w-[90px] overflow-hidden rounded-full bg-gray-200">
          {image ? (
            <Image
              src={image}
              alt={name}
              width={90}
              height={90}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-blue-600 text-lg font-bold text-white">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .toUpperCase()}
            </div>
          )}
        </div>
        {isFeatured && (
          <div className="from-primary-color -mt-5 mb-2 flex items-center gap-1 rounded-full bg-[#1D4ED8] bg-linear-to-r to-[#06348F] px-3 py-1 text-base font-semibold text-white">
            <Icons variant="Stars" />
            Featured
          </div>
        )}

        {/* ⭐ Featured Tag */}

        {/* Name + Title */}
        <h3 className="text-[20px] font-semibold text-[#111827]">{name}</h3>
        <p className="mt-1 text-base leading-snug text-[#666666]">{title}</p>

        <h3 className="my-2 text-[20px] font-semibold text-[#111827]">
          {experties}
        </h3>
        {/* Optional description */}
        {description && (
          <p className="mt-1 text-sm text-[#4B5563]">{description}</p>
        )}

        {/* Quote */}
        {quote && (
          <p
            className={clsx(
              "mt-3 text-[15px] font-medium italic",
              variant === "arena" ? "text-[#1D4ED8]" : "text-[#2563EB]",
            )}
          >
            “{quote}”
          </p>
        )}

        {/* ⭐ Rating */}
        {showRating && rating && (
          <div className="mt-3 flex items-center gap-1 text-sm font-medium">
            <span style={{ color: ratingColor }}>
              <Icons variant="Stars" />
            </span>
            <span className="text-base font-bold text-[#111827]">
              {rating}/5
            </span>
          </div>
        )}
      </div>

      {/* Button */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className={clsx(
            "mt-5 rounded-md px-6 py-2 text-sm font-medium text-white transition-all duration-200",
            variant === "arena"
              ? "bg-[#1D4ED8] hover:bg-[#153EAD]"
              : "bg-blue-600 hover:bg-blue-700",
          )}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
}
