import Link from "next/link";

interface MaterialCardProps {
  category: string;
  level: string | number;
  title: string;
  description: string;
  fileType: string;
  href?: string;
}

export default function MaterialCard({
  category,
  level,
  title,
  description,
  fileType,
  href = "#",
}: MaterialCardProps) {
  return (
    <div className="hover:border-primary-color flex flex-col gap-3 rounded-3xl border border-[#E4E4E7] bg-white p-6 transition">
      {/* Badges */}
      <div className="flex items-center gap-2">
        <span className="bg-primary-color rounded-full px-3 py-1 text-base font-medium text-white">
          {category}
        </span>
        <span className="rounded-full border border-[#D0D5DD] bg-[white] px-3 py-1 text-base font-medium text-[#666666]">
          {level}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[22px] leading-snug font-semibold text-[#03061E]">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[16px] font-normal text-[#666666]">{description}</p>

      {/* File Type */}
      <span className="text-base leading-[25px] tracking-[-3.5%] text-[#666666]">
        {fileType}
      </span>

      {/* CTA Button */}
      <Link
        href={href}
        className="bg-primary-color hover:bg-primary-color/90 mt-3 w-fit rounded-lg px-6 py-2 text-sm font-medium text-white transition"
      >
        Download
      </Link>
    </div>
  );
}
