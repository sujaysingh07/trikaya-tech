import Link from "next/link";
import React from "react";

export interface HackathonBannerProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  ctaLabel?: string;
  ctaHref?: string;
  className?: string;
  bgColor?: string; // tailwind or hex accepted via inline style
}

/**
 * Large rounded banner with centered text + CTA
 * - Uses tailwind utility classes
 * - Responsive padding and sizing
 */
export default function HackathonBanner({
  title = "Top 3 winners from each hackathon receive blockchain-verified certificates and exclusive job interviews.",
  ctaLabel = "Explore All Hackathons",
  ctaHref = "#",
  className = "",
  bgColor = "#1F62E6", // default blue
}: HackathonBannerProps) {
  return (
    <section className={`w-full ${className}`}>
      <div
        className="mx-auto  rounded-[30px] py-10 md:py-12 text-center"
        style={{
          background: bgColor,
          borderRadius: 24,
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-white text-lg md:text-2xl font-semibold leading-snug">
            {title}
          </h3>

          <div className="mt-8">
            <Link
              href={ctaHref}
              className="inline-block bg-white text-black font-bold text-[18px] rounded-md px-6 py-2.5 shadow-sm hover:shadow-md transition"
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
