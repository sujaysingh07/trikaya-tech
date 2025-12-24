import Image from "next/image";

interface ProgramFeatureProps {
  icon: string;
  title: string;
  description: string;
}

export default function ProgramFeatureCard({
  icon,
  title,
  description,
}: ProgramFeatureProps) {
  return (
    <div className="flex h-auto flex-col items-center gap-3 rounded-[30px] bg-gradient-to-br from-[#f9f9fb] to-[#d6d6e3] p-5 text-center transition-all duration-300 md:min-h-[215px] md:flex-row md:gap-5 md:p-6 md:text-left">
      {/* Icon */}
      <div className="flex h-16 w-16 items-center justify-center md:h-20 md:w-20">
        <Image
          src={icon}
          width={80}
          height={80}
          alt={title}
          className="h-14 w-14 object-contain md:h-20 md:w-20"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-[20px] leading-snug font-bold md:text-[28px]">
          {title}
        </h3>
        <p className="mt-[2px] text-sm leading-normal font-normal md:text-base">
          {description}
        </p>
      </div>
    </div>
  );
}
