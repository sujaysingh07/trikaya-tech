

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
    <div className="bg-white rounded-[30px] border border-[#CCCCCC] hover:border-primary-color cursor-pointer hover:shadow-lg transition overflow-hidden max-w-[410px]">
      {/* Image */}
      <div className="relative w-full h-[180px]">
        <Image
          src={icon}
          alt={title}
          fill
          className="object-cover rounded-t-2xl"
        />

        {/* Category Tag */}
        <span className="absolute top-3 left-3 bg-primary-color text-white text-base font-medium px-3 py-1 rounded-full">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2">
        <h3 className="text-[22px] font-semibold text-[#03061E] leading-snug">
          {title}
        </h3>

        <p className="text-sm text-[#666666] line-clamp-2">{description}</p>

        {/* Metadata */}
        <div className="flex items-center gap-2 text-xs text-[#666666] mt-2">
          <span>{author}</span>
          { date && <div>
          <span className="mx-1">•</span>
          <span>{date}</span>
          </div>
          }
          <span className="mx-1">•</span>
          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
}
