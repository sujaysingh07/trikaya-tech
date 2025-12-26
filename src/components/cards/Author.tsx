import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface AuthorCardProps {
  icon: string | StaticImageData;
  name: string;
  role: string;
  articlesCount: number;
  profileLink?: string;
}

export default function AuthorCard({
  icon,
  name,
  role,
  articlesCount,
  profileLink = "#",
}: AuthorCardProps) {
  return (
    <div className="hover:border-primary-color flex cursor-pointer flex-col items-center gap-3 rounded-3xl border border-[#E4E4E7] bg-white p-6 text-center transition hover:shadow-md">
      {/* Avatar */}
      <div className="relative h-20 w-20 overflow-hidden rounded-full border border-[#D6D6D6]">
        <Image src={icon} alt={name} fill className="object-cover" />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-[#03061E]">{name}</h3>

      {/* Role */}
      <p className="text-sm text-[#666666]">{role}</p>

      {/* Articles Count */}
      <span className="text-sm font-medium text-[#666666]">
        {articlesCount} articles published
      </span>

      {/* Button */}
      <Link
        href={profileLink}
        className="rounded-lg bg-[#1D4ED8] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#1341b2]"
      >
        View Author
      </Link>
    </div>
  );
}
