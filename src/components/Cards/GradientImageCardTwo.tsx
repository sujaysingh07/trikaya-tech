"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface GradientImageCardProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonLink?: string;
  bgImage: string | StaticImageData;
  gradientFrom?: string;
  gradientTo?: string;
  reverse?: boolean; // flips image and text alignment
  textColor?: "light" | "dark";
  className?: string;
  imagePosition?: "left" | "center" | "right" | "max-right";
  task?: string;
}

export default function GradientImageCardThree({
  title,
  description,
  buttonLabel = "Explore now",
  buttonLink = "#",
  bgImage,
  gradientFrom = "#F0F4FF",
  gradientTo = "#FFFFFF",
  reverse = false,
  textColor = "dark",
  className = "",
  imagePosition,
  task,
}: GradientImageCardProps) {
  return (
    <div
      className={clsx(
        "relative flex flex-col items-center justify-between overflow-hidden rounded-[30px] p-8 shadow-md transition-all duration-300 hover:shadow-lg md:flex-row md:p-10",
        reverse ? "md:flex-row-reverse" : "",
        className,
      )}
      style={{
        background: `linear-gradient(to ${
          reverse ? "left" : "right"
        }, ${gradientFrom}, ${gradientTo})`,
      }}
    >
      <span className="absolute top-4 right-4 z-10 rounded-[10px] bg-[#DCFFD4] px-2.5 py-3 text-[20px] leading-[100%] font-semibold text-[#025908]">
        {task}
      </span>

      {/* Content */}
      <div
        className={clsx(
          "z-20 flex flex-col gap-3", // make sure above gradient circle
          "text-black",
          reverse ? "md:text-right" : "md:text-left",
          "max-w-[380px]",
        )}
      >
        <h3 className="text-2xl font-semibold md:text-[28px]">{title}</h3>
        <p className="text-sm opacity-80 md:text-base">{description}</p>

        {buttonLabel && (
          <Link
            href={buttonLink}
            className={clsx(
              "bg-primary-color mt-7 inline-block w-fit rounded-md px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0048d9]",
            )}
          >
            {buttonLabel}
          </Link>
        )}
      </div>

      {/* Background Image */}
      <div className="pointer-events-none absolute inset-0 h-full w-full overflow-hidden">
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
