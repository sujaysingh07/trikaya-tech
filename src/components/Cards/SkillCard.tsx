import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

interface ReusableCardProps {
  icon: string | StaticImageData;
  title: string;
  description?: string; // optional to support badge-cards
  className?: string;
}

export default function ReusableCard({
  icon,
  title,
  description,
  className = "",
}: ReusableCardProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-start p-6 border border-gray-200 rounded-[30px] bg-white",
        "transition-all duration-300 ease-in-out hover:border-primary-color hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1",
        "cursor-pointer",
        className
      )}
    >
      <Image src={icon} alt={title} width={60} height={60} className="mb-4" />

      <h3 className="font-semibold text-lg text-[#0A0A0F]">{title}</h3>

      {description && (
        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
