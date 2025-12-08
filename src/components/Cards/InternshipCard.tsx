import Link from "next/link";
import { Icons } from "@/public/icons/icon";
import clsx from "clsx";
import { JobCardProps } from "./JobCard";

export interface InternshipCardProps {
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  employmentType: string; // Full-Time / Internship
}

export default function InternshipCard({
  title,
  company,
  location,
  salary,
  type,
  employmentType,
}: InternshipCardProps) {
  return (
    <div className="hover:border-primary-color flex max-w-[410px] flex-col gap-5 rounded-[22px] border border-gray-300 bg-white p-6 transition-all duration-300">
      {/* Badges */}
      <div className="flex items-center gap-2">
        <span
          className={clsx(
            "rounded-full px-3 py-1 text-[16px] font-medium",
            ["Internship", "Summer", "Summer 2025"].includes(employmentType)
              ? "bg-[#EBEAEA] text-[#666666]"
              : "bg-primary-color text-white",
          )}
        >
          {employmentType}
        </span>
        <span className="text-primary-color flex items-center gap-1 rounded-full bg-[#D6E4FF] px-3 py-1 text-base font-medium">
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
        <div className="flex items-center gap-2">
          <Icons variant="LocationPin" color="#666666" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2">
          <Icons variant="Bag" />
          <span>{type}</span>
        </div>

        <div className="flex items-center gap-2">
          <Icons variant="DollarCircle" />
          <span>{salary}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-auto flex items-center gap-3">
        <Link
          href="#"
          className="bg-primary-color hover:bg-primary-color/90 w-full rounded-md px-6 py-2.5 text-center text-sm font-semibold whitespace-nowrap text-white transition"
        >
          Apply Now
        </Link>

        <Link
          href="#"
          className="border-primary-color text-primary-color w-full rounded-md border px-6 py-2.5 text-center text-sm font-semibold transition hover:bg-blue-50"
        >
          Details
        </Link>
      </div>
    </div>
  );
}
