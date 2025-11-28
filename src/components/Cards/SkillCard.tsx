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
        "flex flex-col items-start rounded-[30px] border border-gray-200 bg-white p-6",
        "hover:border-primary-color transition-all duration-300 ease-in-out hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]",
        "cursor-pointer",
        className,
      )}
    >
      <Image src={icon} alt={title} width={60} height={60} className="mb-4" />

      <h3 className="text-lg font-semibold text-[#0A0A0F]">{title}</h3>

      {description && (
        <p className="mt-2 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      )}
    </div>
  );
}
