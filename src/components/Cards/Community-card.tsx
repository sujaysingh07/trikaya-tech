import Image, { StaticImageData } from "next/image";
import React from "react";

interface CommunityCardProps {
  name: string;
  title: string;
  description: string;
  image?: string | StaticImageData;
  onButtonClick?: () => void;
}

export default function CommunityCard({
  name,
  title,
  description,
  image,
  onButtonClick,
}: CommunityCardProps) {
  return (
    <div className="flex flex-col justify-between items-center text-center bg-white border border-gray-200 rounded-[30px] shadow-sm hover:shadow-md transition-all duration-300 p-6 w-full h-full ">
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

        {/* Name and Info */}
        <h3 className="font-semibold text-[22px]">{name}</h3>
        <p className="text-base font-normal text-[#666666] leading-snug mt-1">
          {title}
          <br />
          {description}
        </p>
      </div>

      {/* Button (Always at Bottom) */}
      <button
        onClick={onButtonClick}
        className="px-5 mt-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-all duration-200"
      >
        Book a Session
      </button>
    </div>
  );
}
