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
        "flex flex-col overflow-hidden max-w-[410px] bg-white rounded-[20px] shadow-sm hover:shadow-md transition-all duration-300"
      )}
    >
      {/* Top Image Section */}
      <div className="relative w-full h-40">
        <Image src={image} alt={title} fill className="object-cover grayscale-100" />

        {/* Badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 text-sm font-medium rounded-full text-black"
          style={{ backgroundColor: levelColor }}
        >
          {level}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        <h3 className="font-semibold text-[#03061E] text-[22px] leading-snug">
          {title}
        </h3>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Icons variant="UserCard" />
          <span>Mentor: {mentor}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600 text-sm">
          <Icons variant="Clock" />

          <span>{duration}</span>
        </div>

        {/* Button */}
        <Link
          href={buttonLink}
          className="mt-4  max-w-[181px] text-center bg-black text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-[#222] transition"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
}
