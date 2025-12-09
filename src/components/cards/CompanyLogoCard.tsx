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
    <div className="flex flex-col items-center justify-center rounded-3xl border bg-white p-6 shadow-sm transition hover:shadow-md">
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
