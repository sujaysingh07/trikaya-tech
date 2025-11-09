"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface FeatureSplitCardProps {
  title: string;
  description: string;
  buttonLabel?: string;
  buttonLink?: string;
  image?: string | StaticImageData;
  reverse?: boolean; // flip layout
  darkMode?: boolean; // for dark image side (white text)
}

export default function FeatureSplitCard({
  title,
  description,
  buttonLabel = "Learn More",
  buttonLink = "#",
  image="/images/AI-bg.jpg",
  reverse = false,
  darkMode = false,
}: FeatureSplitCardProps) {
  return (
    <section
      className={clsx(
        "flex flex-col md:flex-row my-[100px] items-center justify-between rounded-[30px] border-2 transition-all duration-300 md:gap-[72px]",
        reverse ? "md:flex-row-reverse " : ""
      )}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[340px] md:h-[420px] group  rounded-[30px] ">
        <Image
          src={image}
          width={500}
          height={500}
          quality={100}
          alt="AI Background"
          className="  object-left w-full h-full rounded-[30px] scale-y-130"
        />

      </div>

      {/* Content Section */}
      <div className={clsx("relative w-full md:w-1/2 h-[340px] md:h-[420px] group py-[53px] ", reverse?" pl-10":"pl-0")}>
        <h3 className="font-extrabold text-[37px] leading-snug">{title}</h3>
        <p className="text-base font-normal max-w-[500px] mt-3.5 mb-[52px]">
          {description}
        </p>

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
