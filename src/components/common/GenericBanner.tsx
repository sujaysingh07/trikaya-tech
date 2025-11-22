import Link from "next/link";
import React from "react";

export interface GenericBannerProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  bottomText?: React.ReactNode;
  bottomHref?: string;
  bottomIcon?: React.ReactNode;
  className?: string;
  bgColor?: string;
}

export default function GenericBanner({
  title = "",
  subtitle = "",
  ctaLabel = "Get My Matches",
  ctaHref = "#",
  bottomText = "",
  bottomHref = "",
  bottomIcon,
  className = "",
  bgColor = "#1F62E6",
}: GenericBannerProps) {
  return (
    <section className={`w-full ${className}`}>
      <div
        className="
          mx-auto
          rounded-[20px]
          py-8
          px-4 sm:px-6
          text-center
        "
        style={{
          background: bgColor,
        }}
      >
        {/* MAIN CONTENT */}
        <div className="max-w-4xl mx-auto">
          {title && (
            <h3 className="text-[#FFFFFF] md:text-[36px] text-2xl font-bold ">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="text-[#FFFFFF] text-base md:text-[28px] mt-2 leading-normal md:leading-9 font-light tracking-tighter">
              {subtitle}
            </p>
          )}

          {ctaLabel && (
            <div className="mt-6 sm:mt-8">
              <Link
                href={ctaHref}
                className="
                  inline-block
                  bg-white
                  text-black
                  font-semibold
                  text-sm sm:text-base
                  rounded-md
                  px-5 sm:px-6
                  py-3
                  shadow-sm
                  hover:shadow-md
                  transition
                "
              >
                {ctaLabel}
              </Link>
            </div>
          )}
        </div>

        {/* BOTTOM INFO LINE */}
        {(bottomText || bottomHref) && (
          <div className="mt-6 flex justify-center">
            <Link
              href={bottomHref || "#"}
              className="
                flex items-center gap-1
                bg-transparent
                text-[#FFFFFF] sm:text-sm
                px-4 py-2
                font-light
                text-base
                leading-[25px]
                tracking-[.5%]
                rounded-md
                border border-[#CCCCCC]
                backdrop-blur-sm
                hover:bg-white/20
                transition
                max-w-[1043px]
                w-full
                justify-center
              "
            >
              {bottomIcon && <span>{bottomIcon}</span>}
              {bottomText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
