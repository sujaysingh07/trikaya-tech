"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Icons } from "@/public/icons/icon";

interface GradientImageCardProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonLink?: string;
  bgImage: string | StaticImageData;
  gradientFrom?: string;
  gradientTo?: string;
  reverse?: boolean;
  className?: string;
  imagePosition?: "left" | "center" | "right" | "max-right";
  task?: string; // Will be used for date OR mode
  date?: string; // "Nov 15, 2025 • 4:00 PM IST"
  mode?: "Online" | "Hybrid" | "Bangalore" | string;
}

export default function GradientImageCard({
  title,
  description,
  buttonLabel = "Register Now",
  buttonLink = "#",
  bgImage,
  gradientFrom = "#F0F4FF",
  gradientTo = "#FFFFFF",
  reverse = false,
  className = "",
  imagePosition,
  date,
  mode,
}: GradientImageCardProps) {
  // Mode Badge Colors
  const modeClass =
    mode === "Online"
      ? "bg-[#CFFFC5] text-[#1D9402]"
      : mode === "Hybrid"
        ? "bg-[#CFFFC5] text-[#1D9402]"
        : "bg-[#D6E4FF] text-[#0A58F5]";

  return (
    <div
      className={clsx(
        "relative flex flex-col items-center justify-between overflow-hidden rounded-[30px] p-5 shadow-md transition-all duration-300 hover:shadow-lg md:flex-row md:p-10",
        reverse ? "md:flex-row-reverse" : "",
        className,
      )}
      style={{
        background: `linear-gradient(to ${
          reverse ? "left" : "right"
        }, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      {/* TEXT CONTENT */}
      <div
        className={clsx(
          "z-30 flex flex-col gap-3",
          reverse ? "items-end md:text-right" : "items-start md:text-left",
          "max-w-[420px]",
        )}
      >
        {/* Title */}
        <h3 className="text-[18px] leading-tight font-bold md:text-[28px]">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm leading-relaxed font-normal md:text-base">
          {description}
        </p>

        {/* DATE ROW */}
        <div className="flex gap-4">
          {date && (
            <div className="mt-2 flex items-center gap-2 text-xs text-[#4F5162] md:text-sm">
              <Icons variant="Calendar" className="h-5 w-5" />
              <span>{date}</span>
            </div>
          )}

          {/* MODE BADGE BELOW DATE */}
          {mode && (
            <span
              className={clsx(
                "mt-2 flex items-center rounded-full px-3 py-1 text-xs font-medium",
                modeClass,
              )}
            >
              {mode}
            </span>
          )}
        </div>

        {/* Button */}
        {buttonLabel && (
          <Link
            href={buttonLink}
            className={clsx(
              "mt-5 inline-block w-fit rounded-md px-6 py-2.5 text-[20px] font-semibold",
              "bg-primary-color text-white transition hover:bg-[#0048d9]",
            )}
          >
            {buttonLabel}
          </Link>
        )}
      </div>

      {/* IMAGE + GRADIENT OVERLAY */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 z-10 bg-linear-to-r from-white/80 via-white/40 to-transparent"></div>

        <Image
          src={bgImage}
          alt={title}
          fill
          className={clsx(
            "object-cover transition-transform duration-500",
            reverse ? "object-left" : "object-right",
            imagePosition === "center" && "object-center",
            imagePosition === "left" && "object-left",
            imagePosition === "max-right" && "translate-x-[5%] object-right",
          )}
        />
      </div>
    </div>
  );
}
