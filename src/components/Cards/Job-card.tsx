import Link from "next/link";
import { Button } from "../ui/button";
import { Icons } from "@/public/icons/icon";

export interface JobCardProps {
  title: string;
  description: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  employmentType: string;
  isHighlighted?: boolean;
}

export default function JobCard({
  title,
  description,
  company,
  location,
  salary,
  type,
  employmentType,
  isHighlighted = false,
}: JobCardProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row justify-between items-start sm:items-center border-2 rounded-[30px] p-5  transition-all duration-300  hover:border-blue-400 ${
        isHighlighted ? "border-blue-500" : "border-[#CCCCCC]"
      }`}
    >
      {/* Left Section */}
      <div className="flex flex-col gap-2.5 w-full sm:w-auto">
        <h3
          className={`text-[22px] font-semibold ${
            isHighlighted ? "text-blue-600" : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p className="text-base mt-[5px] text-[#666666]">{description}</p>

        {/* Job Meta Info */}
        <div className="flex flex-wrap items-center gap-[55px] mt-3 text-sm text-black">
          <div className="flex items-center gap-2.5">
            <Icons variant="Industry" />
            <span className=" font-bold">{company}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Icons variant="LocationPin" />
            <span className=" font-bold">{location}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Icons variant="DollarSign" />
            <span className=" font-bold">{salary}</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Icons variant="HalfClock" />
            <span className="text-primary-color font-bold">{type}</span>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="mt-4 sm:mt-0">
        <Link
          href="#"
          className="px-6 py-3 bg-primary-color text-white rounded-md text-lg font-semibold hover:bg-primary-color/90 transition"
        >
          Apply Now
        </Link>
      </div>
    </div>
  );
}
