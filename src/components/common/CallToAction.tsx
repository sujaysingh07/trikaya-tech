import Link from "next/link";
import React from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";
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
  showRocketBg?: boolean;
  backgroundImage?: string | StaticImageData;
}

export default function CallToAction({
  title,
  subtitle,
  buttons,
  align = "center",
  className = "",
  showRocketBg = false,
  backgroundImage = "/rocket-bg.svg",
}: CallToActionProps) {
  const alignmentClasses =
    align === "left"
      ? "text-left items-start"
      : align === "right"
        ? "text-right items-end"
        : "text-center items-center";

  return (
    <section
      className={clsx(
        "bg-primary-color relative px-4 py-16",
        showRocketBg && "min-h-[579px]",
      )}
    >
      {/* ✅ Optional rocket background */}
      {showRocketBg && (
        <div className="pointer-events-none absolute inset-0 z-1 h-full w-full select-none">
          <Image
            src={backgroundImage}
            alt="Rocket Background"
            fill
            className="object-cover object-bottom"
            priority
          />
        </div>
      )}
      <div className={`flex flex-col ${alignmentClasses} ${className}`}>
        {/* Title */}
        <h2 className="mb-3 text-[24px] font-bold text-white md:text-[42px]">
          {title}
        </h2>

        {/* Subtitle */}
        <p className="mb-8 text-base font-normal text-[#FFFFFF] md:text-[28px]">
          {subtitle}
        </p>

        {/* Buttons */}
        <div className="z-10 mt-10 flex flex-wrap justify-center gap-4">
          {buttons.map((btn, idx) => (
            <Link
              key={idx}
              href={btn.href}
              className={`w-full rounded-md px-6 py-3 text-lg font-semibold transition md:w-auto ${
                btn.variant === "primary"
                  ? "bg-black text-white hover:bg-gray-800"
                  : "text-primary-color bg-white hover:bg-gray-100"
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
