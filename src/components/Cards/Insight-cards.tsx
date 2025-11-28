import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface InsightCardProps {
  variantCategory?: "blog" | "category";
  title: string;
  description: string;
  href?: string;
  category?: string;
  author?: string;
  date?: string;
  readTime?: string;
  icon?: string | StaticImageData;
}

export default function InsightCard({
  variantCategory = "blog",
  title,
  description,
  href = "#",
  category,
  author,
  date,
  readTime,
  icon,
}: InsightCardProps) {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center bg-white rounded-3xl border border-[#E4E4E7] p-5 md:p-6 gap-4 md:gap-6 hover:shadow-md transition w-full">
      {/* LEFT SIDE */}
      <div className="flex flex-row lg:flex-row items-start gap-4 w-full">
        {/* ICON for Category Layout */}
        {variantCategory === "category" && icon && (
          <div className="w-12 h-12 flex-shrink-0">
            <Image src={icon} alt={title} width={48} height={48} />
          </div>
        )}

        <div className="flex flex-col gap-2 w-full">
          {/* Category Tag for blog view */}
          {variantCategory === "blog" && category && (
            <span className="bg-primary-color text-white text-xs font-medium px-3 py-1 rounded-full w-fit">
              {category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-[17px] md:text-[20px] font-semibold text-[#03061E] leading-snug">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm md:text-base text-[#666666]">{description}</p>

          {/* Blog Meta */}
          {variantCategory === "blog" && (
            <div className="flex items-center text-xs md:text-sm text-[#666666] gap-2 mt-1 flex-wrap">
              <span>{author}</span>
              <span>•</span>
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>
          )}
        </div>
      </div>

      {/* CTA BUTTON */}
      <Link
        href={href}
        className="w-full sm:w-[220px] md:w-[255px] mt-5 md:mt-0 text-center bg-primary-color text-white px-5 py-3 text-sm font-medium rounded-lg hover:bg-primary-color/90 transition"
      >
        {variantCategory === "blog" ? "Read More" : `Explore ${title}`}
      </Link>
    </div>
  );
}
