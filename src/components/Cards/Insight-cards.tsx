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
    <div className="flex w-full flex-col items-start justify-between gap-4 rounded-3xl border border-[#E4E4E7] bg-white p-5 transition hover:shadow-md md:gap-6 md:p-6 lg:flex-row lg:items-center">
      {/* LEFT SIDE */}
      <div className="flex w-full flex-row items-start gap-4 lg:flex-row">
        {/* ICON for Category Layout */}
        {variantCategory === "category" && icon && (
          <div className="h-12 w-12 flex-shrink-0">
            <Image src={icon} alt={title} width={48} height={48} />
          </div>
        )}

        <div className="flex w-full flex-col gap-2">
          {/* Category Tag for blog view */}
          {variantCategory === "blog" && category && (
            <span className="bg-primary-color w-fit rounded-full px-3 py-1 text-xs font-medium text-white">
              {category}
            </span>
          )}

          {/* Title */}
          <h3 className="text-[17px] leading-snug font-semibold text-[#03061E] md:text-[20px]">
            {title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#666666] md:text-base">{description}</p>

          {/* Blog Meta */}
          {variantCategory === "blog" && (
            <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-[#666666] md:text-sm">
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
        className="bg-primary-color hover:bg-primary-color/90 mt-5 w-full rounded-lg px-5 py-3 text-center text-sm font-medium text-white transition sm:w-[220px] md:mt-0 md:w-[255px]"
      >
        {variantCategory === "blog" ? "Read More" : `Explore ${title}`}
      </Link>
    </div>
  );
}
