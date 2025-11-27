import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface InsightCardProps {
  variantCategory?: "blog" | "category" | undefined; // NEW VARIANT MODE

  // Common fields
  title: string;
  description: string;
  href?: string;

  // Blog fields
  category?: string;
  author?: string;
  date?: string;
  readTime?: string;

  // Category card fields
  icon?: string | StaticImageData;
}

export default function InsightCard({
  variantCategory = "blog",
  title,
  description,
  href = "#",

  // Blog fields
  category,
  author,
  date,
  readTime,

  // Category fields
  icon,
}: InsightCardProps) {
  return (
    <div className="flex justify-between items-center bg-white rounded-3xl border border-[#E4E4E7] p-6 gap-6 hover:shadow-md transition">
      {/* LEFT SIDE */}
      <div className="flex items-center gap-4 w-full">
        {/* ICON for Category Variant */}
        {variantCategory === "category" && icon && (
          <div className="w-12 h-12 flex-shrink-0">
            <Image src={icon} alt={title} width={48} height={48} />
          </div>
        )}

        <div className="flex flex-col gap-2 w-full">
          {/* Category Tag Only in blog mode */}
          {variantCategory === "blog" && category && (
            <span className="bg-primary-color text-white text-xs font-medium px-3 py-1 rounded-full w-fit">
              {category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-[18px] md:text-[20px] font-semibold text-[#03061E] leading-snug">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#666666]">{description}</p>

          {/* Blog Meta */}
          {variantCategory === "blog" && (
            <div className="flex items-center text-xs text-[#666666] gap-2 mt-1">
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
        className={clsx(
          "px-5 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition text-center w-[255px]",
          "bg-primary-color text-white hover:bg-primary-color/90"
        )}
      >
        {variantCategory === "blog" ? "Read More" : `Explore ${title}`}
      </Link>
    </div>
  );
}
