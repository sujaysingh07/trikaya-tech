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
    <div className="flex flex-col items-center bg-white rounded-3xl border border-[#E4E4E7] p-6 text-center transition hover:border-primary-color hover:shadow-md cursor-pointer gap-3">
      {/* Avatar */}
      <div className="relative w-20 h-20 rounded-full overflow-hidden border border-[#D6D6D6]">
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
        className="bg-[#1D4ED8] hover:bg-[#1341b2] text-white text-sm font-medium px-5 py-2 rounded-lg transition"
      >
        View Author
      </Link>
    </div>
  );
}
