

import Link from "next/link";
import { Icons } from "@/public/icons/icon";
import clsx from "clsx";

export interface JobCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  employmentType: string; // Full-Time / Internship
}

export default function JobCard({
  title,
  company,
  location,
  salary,
  type,
  employmentType,
}: JobCardProps) {
  return (
    <div className="border border-gray-300 rounded-[22px] max-w-[410px] p-6 flex flex-col gap-5 hover:border-primary-color transition-all duration-300 bg-white">
      {/* Badges */}
      <div className="flex items-center gap-2">
        <span
          className={clsx(
            "px-3 py-1 text-[16px] font-medium rounded-full",
            ["Internship", "Summer", "Summer 2025"].includes(employmentType)
              ? "bg-[#EBEAEA] text-[#666666]"
              : "bg-primary-color text-white"
          )}
        >
          {employmentType}
        </span>
        <span className="px-3  gap-1 py-1 text-base flex items-center font-medium bg-[#D6E4FF] text-primary-color rounded-full">
          <Icons variant="VerifiedBadge" color="#0A58F5" />
          Verified
        </span>
      </div>

      {/* Job Title & Company */}
      <div className="flex flex-col gap-1">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-base text-[#03061E]">{company}</p>
      </div>

      {/* Job Meta */}
      <div className="flex flex-col gap-3 text-sm text-[#4F5162]">
        <div className="flex items-center gap-2 ">
          <Icons variant="LocationPin" color="#666666" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2 ">
          <Icons variant="Bag" />
          <span>{type}</span>
        </div>

        <div className="flex items-center gap-2 ">
          <Icons variant="DollarCircle" />
          <span>{salary}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex items-center gap-3 mt-auto">
        <Link
          href="#"
          className="bg-primary-color w-full text-white whitespace-nowrap px-6 text-center py-2.5 rounded-md text-sm font-semibold hover:bg-primary-color/90 transition"
        >
          Apply Now
        </Link>

        <Link
          href="#"
          className="border border-primary-color w-full text-center text-primary-color px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-blue-50 transition"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
