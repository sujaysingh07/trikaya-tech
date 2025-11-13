import Link from "next/link";
import React from "react";

export interface HackathonBannerProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  bgColor?: string;
}

export default function HackathonBanner({
  title = "Top 3 winners from each hackathon receive blockchain-verified certificates and exclusive job interviews.",
  ctaLabel = "Explore All Hackathons",
  ctaHref = "#",
  className = "",
  bgColor = "#1F62E6",
}: HackathonBannerProps) {
  return (
    <section className={`w-full ${className}`}>
      <div
        className="
          mx-auto 
          rounded-[30px] 
          py-6 sm:py-8 md:py-12 
          px-4 sm:px-6 
          text-center
        "
        style={{
          background: bgColor,
          borderRadius: 24,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h3
            className="
              text-white 
              text-base sm:text-lg md:text-2xl 
              font-semibold 
              leading-snug
            "
          >
            {title}
          </h3>

          <div className="mt-6 sm:mt-8">
            <Link
              href={ctaHref}
              className="
                inline-block 
                bg-white 
                text-black 
                font-bold 
                text-[16px] sm:text-[18px] 
                rounded-md 
                px-5 sm:px-6 
                py-3 
                shadow-sm 
                hover:shadow-md 
                transition
              "
              aria-label={ctaLabel}
            >
              {ctaLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
