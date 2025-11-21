import React from "react";
import Link from "next/link";
import clsx from "clsx";
import Container from "../ui/Container";

interface CtaBannerProps {
  title: string;
  subtitle?: string;
  buttonLabel: string;
  buttonLink: string;
  variant?: "primary" | "outline"; // primary = blue bg, outline = white bg + blue border
  className?: string;
}

export default function CtaBanner({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  variant = "primary",
  className = "",
}: CtaBannerProps) {
  const isPrimary = variant === "primary";

  return (
    <Container>
      <div
        className={clsx(
          "w-full rounded-[20px] px-6 py-8 md:px-10 md:py-10 my-11 flex flex-col md:flex-row items-start md:items-center justify-between transition",
          isPrimary
            ? "bg-primary-color text-white"
            : "bg-white border border-primary-color text-black",
          className
        )}
      >
        {/* LEFT SECTION */}
        <div className="max-w-[926px]">
          <h2
            className={clsx(
              "text-xl md:text-[35px] font-bold leading-[120%]",
              isPrimary ? "text-white" : "text-black"
            )}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={clsx(
                "mt-2 text-sm md:text-base font-normal leading-[120%]",
                isPrimary ? "text-white/90" : "text-[#505050]"
              )}
            >
              {subtitle}
            </p>
          )}
        </div>

        {/* BUTTON */}
        <Link
          href={buttonLink}
          className={clsx(
            "mt-6 md:mt-0 px-6 py-3 rounded-md text-[18px] font-bold whitespace-nowrap transition ",
            isPrimary
              ? "bg-white text-primary-color hover:bg-gray-100"
              : "bg-primary-color text-white hover:bg-[#0048d9]"
          )}
        >
          {buttonLabel}
        </Link>
      </div>
    </Container>
  );

}
