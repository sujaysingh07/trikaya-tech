import Image, { StaticImageData } from "next/image";

interface SkillCardProps {
  icon: StaticImageData;
  title: string;
  description: string;
}

export default function SkillCard({
  icon,
  title,
  description,
}: SkillCardProps) {
  return (
    <div
      className="flex  md:max-w-[298px] flex-col items-start p-6 border border-gray-200 rounded-[30px] bg-white 
                 transition-all duration-300 ease-in-out hover:border-primary-color hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:-translate-y-1"
    >
      <Image src={icon} alt={title} className="mb-4 w-[68px] h-[68px]" />
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}
