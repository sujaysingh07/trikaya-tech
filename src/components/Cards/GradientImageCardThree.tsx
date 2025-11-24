"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
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
  task,   
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
        "relative flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-[30px] p-5 md:p-10 shadow-md hover:shadow-lg transition-all duration-300",
        reverse ? "md:flex-row-reverse" : "",
        className
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
          "flex flex-col gap-3 z-30",
          reverse ? "md:text-right items-end" : "md:text-left items-start",
          "max-w-[420px]"
        )}
      >
        {/* Title */}
        <h3 className="font-bold text-[18px] md:text-[28px] leading-tight">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base font-normal  leading-relaxed">
          {description}
        </p>

        {/* DATE ROW */}
        <div className="flex gap-4">
          {date && (
            <div className="flex items-center gap-2 text-[#4F5162] text-xs md:text-sm mt-2">
              <Icons variant="Calendar" className="w-5 h-5" />
              <span>{date}</span>
            </div>
          )}

          {/* MODE BADGE BELOW DATE */}
          {mode && (
            <span
              className={clsx(
                "text-xs font-medium flex items-center px-3 py-1 rounded-full mt-2",
                modeClass
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
              "inline-block w-fit mt-5 px-6 py-2.5 rounded-md font-semibold text-[20px] ",
              "bg-primary-color text-white hover:bg-[#0048d9] transition"
            )}
          >
            {buttonLabel}
          </Link>
        )}
      </div>

      {/* IMAGE + GRADIENT OVERLAY */}
      <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-white/80 via-white/40 to-transparent z-10"></div>

        <Image
          src={bgImage}
          alt={title}
          fill
          className={clsx(
            "object-cover transition-transform duration-500",
            reverse ? "object-left" : "object-right",
            imagePosition === "center" && "object-center",
            imagePosition === "left" && "object-left",
            imagePosition === "max-right" && "object-right translate-x-[5%]"
          )}
        />
      </div>
    </div>
  );
}
