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
          "my-11 flex w-full flex-col items-start justify-between rounded-[20px] px-6 py-8 transition md:flex-row md:items-center md:px-10 md:py-10",
          isPrimary
            ? "bg-primary-color text-white"
            : "border-primary-color border bg-white text-black",
          className,
        )}
      >
        {/* LEFT SECTION */}
        <div className="max-w-[926px]">
          <h2
            className={clsx(
              "text-xl leading-[120%] font-bold md:text-[35px]",
              isPrimary ? "text-white" : "text-black",
            )}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={clsx(
                "mt-2 text-sm leading-[120%] font-normal md:text-base",
                isPrimary ? "text-white/90" : "text-[#505050]",
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
            "mt-6 rounded-md px-6 py-3 text-[18px] font-bold whitespace-nowrap transition md:mt-0",
            isPrimary
              ? "text-primary-color bg-white hover:bg-gray-100"
              : "bg-primary-color text-white hover:bg-[#0048d9]",
          )}
        >
          {buttonLabel}
        </Link>
      </div>
    </Container>
  );
}
