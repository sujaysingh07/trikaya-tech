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
    <div className="flex flex-col md:flex-row md:gap-5 gap-3 items-center bg-gradient-to-br from-[#f9f9fb] to-[#d6d6e3] p-5 md:p-6 rounded-[30px] h-auto md:min-h-[215px] transition-all duration-300 text-center md:text-left">
      {/* Icon */}
      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
        <Image
          src={icon}
          width={80}
          height={80}
          alt={title}
          className="object-contain w-14 h-14 md:w-20 md:h-20"
        />
      </div>

      {/* Text */}
      <div>
        <h3 className="text-[20px] md:text-[28px] font-bold leading-snug">
          {title}
        </h3>
        <p className="text-sm md:text-base font-normal mt-[2px] leading-normal">
          {description}
        </p>
      </div>
    </div>
  );
}
