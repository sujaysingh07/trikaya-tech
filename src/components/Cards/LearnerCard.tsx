import { Icons } from "@/public/icons/icon";
import { LearnerTestimonial } from "@/src/app/mentorship/page";
import Image from "next/image";

export default function LearnerCard({
  name,
  rating,
  review,
  mentor,
  image,
}: LearnerTestimonial) {
  return (
    <div className="flex max-w-[410px] flex-col items-center rounded-[22px] border border-[#CCCCCC] bg-white p-8 text-center transition-all duration-300">
      {/* Profile */}
      <div className="mb-4 h-20 w-20 overflow-hidden rounded-full">
        <Image
          src={image}
          width={80}
          height={80}
          alt={name}
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-[22px] leading-[25px] font-semibold tracking-[.5%] text-[#03061E]">
        {name}
      </h3>

      {/* Rating */}
      <div className="mt-1 mb-4 flex items-center justify-center gap-1">
        <Icons variant="Stars" />
        <p className="text-base font-bold">{rating}</p>
      </div>

      {/* Review */}
      <div className="text-left">
        <p className="mb-6 text-[15px] leading-relaxed text-[#666666]">
          &quot;{review}&quot;
        </p>

        {/* Mentor Line */}
        <p className="mt-auto text-xs text-[#666666]">
          Mentored by{" "}
          <span className="font-medium text-gray-700">{mentor}</span>
        </p>
      </div>
    </div>
  );
}
