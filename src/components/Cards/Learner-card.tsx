
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
    <div
      className="
      bg-white
      rounded-[22px]
      border border-[#CCCCCC]
      p-8
      flex flex-col
      items-center
      text-center
      transition-all
      duration-300
      max-w-[410px]
    "
    >
      {/* Profile */}
      <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
        <Image
          src={image}
          width={80}
          height={80}
          alt={name}
          className="object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="font-semibold text-[22px] leading-[25px] tracking-[.5%] text-[#03061E]">
        {name}
      </h3>

      {/* Rating */}
      <div className="flex items-center justify-center gap-1 mt-1 mb-4">
        <Icons variant="Stars" />
        <p className="font-bold text-base">{rating}</p>
      </div>

      {/* Review */}
      <div className="text-left">
        <p className="text-[#666666] text-[15px] leading-relaxed mb-6">
          &quot;{review}&quot;
        </p>

        {/* Mentor Line */}
        <p className="text-xs text-[#666666] mt-auto">
          Mentored by{" "}
          <span className="font-medium text-gray-700">{mentor}</span>
        </p>
      </div>
    </div>
  );
}
