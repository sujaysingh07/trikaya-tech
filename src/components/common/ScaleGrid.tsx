"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface FeatureSplitCardProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonLink?: string;
  image: string | StaticImageData;
  reverse?: boolean; // flip layout
  darkMode?: boolean; // for dark image side (white text)
}

export default function FeatureSplitCard({
  title,
  description,
  buttonLabel = "Learn More",
  buttonLink = "#",
  image,
  reverse = false,
  darkMode = false,
}: FeatureSplitCardProps) {
  return (
    <section
      className={clsx(
        "flex flex-col md:flex-row items-center justify-between  rounded-[30px] border-2 transition-all duration-300",
        reverse ? "md:flex-row-reverse" : ""
      )}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[340px] md:h-[420px]  group">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain transition-transform duration-700 scale-y-150 scale-x-150"
        />

        {/* Optional Overlay (for dark side) */}
        {darkMode && (
          <div className="absolute inset-0 bg-black/60 z-10 pointer-events-none" />
        )}
      </div>

      {/* Content Section */}
      <div
        className={clsx(
          "w-full md:w-1/2 p-8 md:p-14 flex flex-col justify-center gap-5 z-20",
          reverse ? "md:text-right" : "md:text-left",
          darkMode ? "text-white bg-black" : "text-black bg-white"
        )}
      >
        <h3 className="font-bold text-3xl leading-snug">{title}</h3>
        <p className="text-base opacity-80 max-w-[500px]">{description}</p>

        {buttonLabel && (
          <Link
            href={buttonLink}
            className={clsx(
              "inline-block mt-3 px-6 py-3 text-sm font-semibold rounded-md transition-all duration-300",
              darkMode
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-primary-color text-white hover:bg-[#0048d9]"
            )}
          >
            {buttonLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
