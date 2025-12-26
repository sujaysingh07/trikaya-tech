import clsx from "clsx";

interface CommunityCardProps {
  title: string;
  author: string;
  likes: number;
  tags?: string[];
}

export default function CommunityCard({
  title,
  author,
  likes,
  tags = [],
}: CommunityCardProps) {
  return (
    <div
      className={clsx(
        "hover:border-primary-color w-full cursor-pointer rounded-[30px] border bg-white p-6 transition-all duration-200",
      )}
    >
      {/* TOP SECTION */}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base leading-snug font-semibold text-[#0A0A0F] md:text-[22px]">
          {title}
        </h3>

        <div className="flex items-center gap-1 text-base text-[#666666]">
          <button className="text-gray-300 transition-colors hover:text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="h-5 w-5"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.46 6.46 0 0 1 16.5 3C19.58 3 22 5.41 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </button>

          {likes}
        </div>
      </div>

      {/* AUTHOR */}
      <p className="mt-1 text-sm text-[#8A8A8A]">by {author}</p>

      {/* TAGS */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag, i) => (
          <span
            key={i}
            className="rounded-full bg-[#EBEAEA] px-3 py-1 text-base font-medium text-[#666666]"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
