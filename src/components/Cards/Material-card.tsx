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
    <div className="bg-white rounded-3xl border border-[#E4E4E7] p-6 flex flex-col gap-3 hover:border-primary-color transition">
      {/* Badges */}
      <div className="flex items-center gap-2">
        <span className="bg-primary-color text-white text-base font-medium px-3 py-1 rounded-full">
          {category}
        </span>
        <span className="bg-[white] text-[#666666] text-base font-medium px-3 py-1 rounded-full border border-[#D0D5DD]">
          {level}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-[22px] font-semibold text-[#03061E] leading-snug">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[16px] font-normal text-[#666666]">{description}</p>

      {/* File Type */}
      <span className="text-base text-[#666666] tracking-[-3.5%] leading-[25px]">
        {fileType}
      </span>

      {/* CTA Button */}
      <Link
        href={href}
        className="mt-3 px-6 py-2 w-fit bg-primary-color text-white text-sm font-medium rounded-lg hover:bg-primary-color/90 transition"
      >
        Download
      </Link>
    </div>
  );
}
