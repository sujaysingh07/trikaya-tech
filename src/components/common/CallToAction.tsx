
import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
interface ButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface CallToActionProps {
  title: string;
  subtitle: React.ReactNode;
  buttons: ButtonProps[];
  align?: "center" | "left" | "right";
  className?: string;
  showRocketBg?:boolean
  backgroundImage?:string | StaticImageData
}

export default function CallToAction({
  title,
  subtitle,
  buttons,
  align = "center",
  className = "",
  showRocketBg=false,
  backgroundImage="/rocket-bg.svg",
}: CallToActionProps) {
  const alignmentClasses =
    align === "left"
      ? "text-left items-start"
      : align === "right"
      ? "text-right items-end"
      : "text-center items-center";

  return (
    <section className="bg-primary-color py-16 px-4 relative min-h-[579px] ">
      {/* ✅ Optional rocket background */}
      {showRocketBg && (
        <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-1">
          <Image
            src={backgroundImage}
            alt="Rocket Background"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      )}
      <div className={`flex flex-col  ${alignmentClasses} ${className}`}>
        {/* Title */}
        <h2 className="text-[42px] sm:text-[40px] font-bold mb-3 text-white">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="text-[#FFFFFF] font-normal text-[28px] sm:text-xl mb-8">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 z-10">
          {buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              className={`px-6 py-3 rounded-md text-lg font-semibold transition
              ${
                btn.variant === "primary"
                  ? "bg-black text-white hover:bg-gray-800"
                  : "bg-white text-primary-color hover:bg-gray-100"
              }`}
            >
              {btn.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
