"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { Calendar, User } from "lucide-react"; // optional icons
import clsx from "clsx";
import { Icons } from "@/public/icons/icon";

interface CourseCardProps {
  image: string | StaticImageData;
  title: string;
  mentor: string;
  duration: string;
  level: string;
  levelColor?: string; // optional for badge
  buttonLabel?: string;
  buttonLink?: string;
  className?: string;
}

export default function CourseCard({
  image,
  title,
  mentor,
  duration,
  level,
  levelColor = "#FACC15", // Tailwind yellow-400
  buttonLabel = "View Details",
  buttonLink = "#",
  className = "",
}: CourseCardProps) {
  return (
    <div
      className={clsx(
        className,
        "flex max-w-[410px] flex-col overflow-hidden rounded-[20px] bg-white shadow-sm transition-all duration-300 hover:shadow-md",
      )}
    >
      {/* Top Image Section */}
      <div className="relative h-40 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale-100"
        />

        {/* Badge */}
        <div
          className="absolute top-4 left-4 rounded-full px-3 py-1 text-sm font-medium text-black"
          style={{ backgroundColor: levelColor }}
        >
          {level}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-[22px] leading-snug font-semibold text-[#03061E]">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icons variant="UserCard" />
          <span>Mentor: {mentor}</span>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Icons variant="Clock" />

          <span>{duration}</span>
        </div>

        {/* Button */}
        <Link
          href={buttonLink}
          className="mt-4 max-w-[181px] rounded-md bg-black px-4 py-2 text-center text-sm font-semibold text-white transition hover:bg-[#222]"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
