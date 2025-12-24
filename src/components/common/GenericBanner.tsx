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
        className="mx-auto rounded-[20px] px-4 py-8 text-center sm:px-6"
        style={{
          background: bgColor,
        }}
      >
        {/* MAIN CONTENT */}
        <div className="mx-auto max-w-4xl">
          {title && (
            <h3 className="text-2xl font-bold text-[#FFFFFF] md:text-[36px]">
              {title}
            </h3>
          )}

          {subtitle && (
            <p className="mt-2 text-base leading-normal font-light tracking-tighter text-[#FFFFFF] md:text-[28px] md:leading-9">
              {subtitle}
            </p>
          )}

          {ctaLabel && (
            <div className="mt-6 sm:mt-8">
              <Link
                href={ctaHref}
                className="inline-block rounded-md bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:shadow-md sm:px-6 sm:text-base"
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
              className="flex w-full max-w-[1043px] items-center justify-center gap-1 rounded-md border border-[#CCCCCC] bg-transparent px-4 py-2 text-base leading-[25px] font-light tracking-[.5%] text-[#FFFFFF] backdrop-blur-sm transition hover:bg-white/20 sm:text-sm"
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
