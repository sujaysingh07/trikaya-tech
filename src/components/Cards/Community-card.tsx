import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";

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

  // NEW FIELDS (optional)
  isFeatured?: boolean;
  rating?: number;
  showRating?: boolean;
  ratingColor?: string;
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

  isFeatured = false,
  rating,
  showRating = false,
  ratingColor = "#FACC15",
}: GenericProfileCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col justify-between items-center text-center bg-white border border-gray-200 rounded-[30px] shadow-sm hover:shadow-md transition-all duration-300 p-6 w-full h-full",
        className
      )}
    >
      {/* Profile Image + Labels */}
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <div className="w-[90px] h-[90px] rounded-full overflow-hidden bg-gray-200 mb-3">
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
        {isFeatured && (
          <div className="bg-[#1D4ED8] bg-linear-to-r from-primary-color to-[#06348F] -mt-5 text-white text-base font-semibold px-3 py-1 rounded-full mb-2 flex items-center gap-1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3149 0L17.7751 7.86118L26.6297 9.67376L20.5316 16.3448L21.5439 25.3262L13.3149 21.588L5.08595 25.3262L6.09832 16.3448L0.000149727 9.67376L8.85483 7.86118L13.3149 0Z"
                fill="#F5A70A"
              />
            </svg>
            Featured
          </div>
        )}

        {/* ⭐ Featured Tag */}

        {/* Name + Title */}
        <h3 className="font-semibold text-[20px] text-[#111827]">{name}</h3>
        <p className="text-base text-[#666666] leading-snug mt-1">{title}</p>

        {/* Optional description */}
        {description && (
          <p className="text-sm text-[#4B5563] mt-1">{description}</p>
        )}

        {/* Quote */}
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

        {/* ⭐ Rating */}
        {showRating && rating && (
          <div className="flex items-center gap-1 mt-3 text-sm font-medium">
            <span style={{ color: ratingColor }}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 27 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.3149 0L17.7751 7.86118L26.6297 9.67376L20.5316 16.3448L21.5439 25.3262L13.3149 21.588L5.08595 25.3262L6.09832 16.3448L0.000149727 9.67376L8.85483 7.86118L13.3149 0Z"
                  fill="#F5A70A"
                />
              </svg>
            </span>
            <span className="text-[#111827] font-bold text-base">{rating}/5</span>
          </div>
        )}
      </div>

      {/* Button */}
      {buttonText && (
        <button
          onClick={onButtonClick}
          className={clsx(
            "px-6 mt-5 py-2 text-white text-sm font-medium rounded-md transition-all duration-200",
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
