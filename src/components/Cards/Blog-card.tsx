import Image, { StaticImageData } from "next/image";

interface BlogCardProps {
  icon: string | StaticImageData;
  category: string;
  title: string;
  description: string;
  author: string;
  date: string;
  readTime: string;
}

export default function BlogCard({
  icon,
  category,
  title,
  description,
  author,
  date,
  readTime,
}: BlogCardProps) {
  return (
    <div className="hover:border-primary-color max-w-[410px] cursor-pointer overflow-hidden rounded-[30px] border border-[#CCCCCC] bg-white transition hover:shadow-lg">
      {/* Image */}
      <div className="relative h-[180px] w-full">
        <Image
          src={icon}
          alt={title}
          fill
          className="rounded-t-2xl object-cover"
        />

        {/* Category Tag */}
        <span className="bg-primary-color absolute top-3 left-3 rounded-full px-3 py-1 text-base font-medium text-white">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-[22px] leading-snug font-semibold text-[#03061E]">
          {title}
        </h3>

        <p className="line-clamp-2 text-sm text-[#666666]">{description}</p>

        {/* Metadata */}
        <div className="mt-2 flex items-center gap-2 text-xs text-[#666666]">
          <span>{author}</span>
          {date && (
            <div>
              <span className="mx-1">•</span>
              <span>{date}</span>
            </div>
          )}
          <span className="mx-1">•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
}
