import Image, { StaticImageData } from "next/image";
import React from "react";

interface CompanyLogoCardProps {
  logo: string | StaticImageData;
  name?: string;
}

export default function CompanyLogoCard({
  logo,
  name = "Company",
}: CompanyLogoCardProps) {
  return (
    <div
      className="
        border rounded-3xl p-6 bg-white 
        flex flex-col items-center justify-center 
        shadow-sm hover:shadow-md transition
      "
    >
      <Image
        src={logo}
        alt={name}
        width={60}
        height={60}
        className="object-contain"
      />
      {/* <p className="mt-3 text-sm font-medium">{name}</p> */}
    </div>
  );
}
