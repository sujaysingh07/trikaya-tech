import Link from "next/link";
import React from "react";
import Container from "../ui/Container";

type Feature = { label: string; ariaLabel?: string };

export interface InviteCardProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  amount?: string; // e.g. "₹500"
  amountSub?: string; // e.g. "per successful referral"
  features?: Feature[];
  className?: string;
}

/**
 * Invite / Referral card component
 * - Server-component compatible (uses next/link)
 * - Tailwind based, responsive
 */
export default function InviteCard({
  title = "Invite Friends. Earn Rewards.",
  subtitle = "Share Trikaya Labs with your peers and earn credits when they complete their first project.",
  ctaLabel = "Get Your Referral Links",
  ctaHref = "#",
  amount = "₹500",
  amountSub = "per successful referral",
  features = [{ label: "Unlimited referrals" }, { label: "Instant credit" }],
  className = "",
}: InviteCardProps) {
  return (
    <section className={`relative overflow-visible ${className}`}>
      {/* Blue accent behind the card (bottom-left/right) */}
      <Container>
        <div className="mx-auto">
          <div className="border-primary-color relative overflow-hidden rounded-[30px] border bg-white shadow-sm">
            <div className="flex flex-col items-center gap-6 p-6 md:flex-row md:gap-0 md:p-10">
              {/* Left: content & CTA */}
              <div className="md:flex-1 md:pr-8">
                <h3 className="text-xl leading-tight font-bold md:text-[35px]">
                  {title}
                </h3>

                <p className="mt-2 max-w-xl text-sm font-normal md:text-base">
                  {subtitle}
                </p>

                <div className="mt-6">
                  <Link
                    href={ctaHref}
                    className="bg-primary-color inline-block rounded-lg px-10 py-3 text-[20px] font-semibold whitespace-nowrap text-white shadow-sm transition hover:bg-[#1556c8]"
                    aria-label={ctaLabel}
                  >
                    {ctaLabel}
                  </Link>
                </div>
              </div>

              {/* Right: amount & features */}
              <div className="flex shrink-0 flex-col items-start text-right md:w-[320px] md:items-end md:text-right">
                <div className="flex flex-col items-end">
                  <span className="text-4xl leading-none font-semibold md:text-[100px]">
                    {amount}
                  </span>
                  <span className="mt-1 text-center text-xs text-black md:text-base">
                    {amountSub}
                  </span>
                </div>

                <ul className="mt-6 w-full space-y-3 md:w-auto">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <span
                        className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 md:h-8 md:w-8"
                        aria-hidden
                      >
                        {/* check icon */}
                        <svg
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.5715 0.977539H11.4277C5.67113 0.977539 0.977539 5.67119 0.977539 11.4277V18.5422C0.977539 24.2986 5.67119 28.9924 11.4277 28.9924H18.5422C24.2986 28.9924 28.9924 24.2987 28.9924 18.5422L28.9926 11.4277C29.0221 5.67113 24.3284 0.977539 18.5723 0.977539H18.5715ZM22.1434 12.3723L14.0844 20.4605C13.6711 20.8739 12.9922 20.8739 12.5789 20.4605L7.85568 15.7374C7.44232 15.324 7.44232 14.6451 7.85568 14.2318L9.18412 12.9034C9.59748 12.49 10.2764 12.49 10.6897 12.9034L12.9922 15.2059C13.1694 15.3831 13.4942 15.3831 13.6711 15.2059L19.3094 9.56762C19.7228 9.15426 20.4017 9.15426 20.815 9.56762L22.1434 10.8961C22.5568 11.3094 22.5568 11.9588 22.1437 12.3721L22.1434 12.3723Z"
                            fill="#0A58F5"
                          />
                        </svg>
                      </span>

                      <span className="text-sm font-semibold md:text-[22px]">
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
