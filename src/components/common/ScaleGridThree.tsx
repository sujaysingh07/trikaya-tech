import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { Icons } from "@/public/icons/icon";

interface BulletItem {
  title: string;
  subtitle: string;
}

interface VerifiedItem {
  label: string;
}

interface FeatureSplitCardThreeProps {
  title: string | React.ReactNode; // right side big title
  description: string; // right side description

  leftTitle: string;
  leftDescription: string;

  bullets: BulletItem[]; // 3 items max
  verifiedItems: VerifiedItem[]; // 3 items max

  buttonLabel?: string;
  buttonLink?: string;

  image?: string | StaticImageData;
  reverse?: boolean;
  darkMode?: boolean;
  primaryButton?: {
    label?: string;
    href?: string;
  };
  secondaryButton?: {
    label?: string;
    href?: string;
  };
}

export default function FeatureSplitCardThree({
  // Right-side content
  title,
  description,

  // Left-side content
  leftTitle,
  leftDescription,

  bullets = [],
  verifiedItems = [],

  buttonLabel = "Generate My Verified CV",
  buttonLink = "#",
  primaryButton = {
    label: "",
    href: "",
  },
  secondaryButton = {
    label: "",
    href: "",
  },
  image = "",
  reverse = false,
  darkMode = false,
}: FeatureSplitCardThreeProps) {
  return (
    <section
      className={clsx(
        "my-0 flex flex-col items-center justify-between rounded-[30px] border-2 transition-all duration-300 md:my-[70px] md:flex-row md:gap-[72px]",
        reverse ? "md:flex-row-reverse" : "",
      )}
    >
      {/* LEFT IMAGE + CONTENT */}
      <div className="group relative hidden h-[340px] w-full rounded-[30px] md:block md:h-[420px] md:w-1/2">
        {" "}
        <Image
          src={image}
          width={500}
          height={500}
          quality={100}
          alt="AI Background"
          className="h-full w-full rounded-[30px] bg-black object-left mix-blend-luminosity md:scale-y-130"
        />
        <div className="absolute inset-0 top-0 left-0 px-[45px] text-white">
          <div className="flex flex-col gap-4">
            {/* LEFT TITLE */}
            <h2 className="text-[28px] leading-[100%] font-semibold">
              {leftTitle}
            </h2>

            {/* LEFT DESCRIPTION */}
            <p className="text-base leading-[26px] font-semibold tracking-normal">
              {leftDescription}
            </p>

            {/* BULLETS */}
            {bullets.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex items-start gap-4",
                  index === 0 && "mt-[29px]",
                  index === bullets.length - 1 && "mb-[29px]",
                )}
              >
                <Icons variant="RoundTick" className="mt-0.5" />

                <div className="text-base tracking-normal">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-[14px] font-normal">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <Link
            href={buttonLink}
            className={clsx(
              "mt-3 inline-block rounded-md px-6 py-3 text-sm font-semibold transition-all duration-300",
              darkMode
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-primary-color text-white hover:bg-[#0048d9]",
            )}
          >
            {buttonLabel}
          </Link>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div
        className={clsx(
          "group relative h-auto w-full md:h-[420px] md:w-1/2 md:py-[53px]",
          reverse ? "p-5" : "p-5",
        )}
      >
        {/* RIGHT TITLE */}
        <h3 className="text-2xl leading-snug font-extrabold md:text-[37px]">
          {title}
        </h3>

        {/* RIGHT DESCRIPTION */}
        <p className="mt-3.5 mb-8 max-w-[500px] text-base font-normal">
          {description}
        </p>

        {verifiedItems.length === 0 && (
          <>
            <div className="mt-10 flex flex-wrap justify-center gap-4 text-center md:justify-start">
              <Link
                href={primaryButton.href!}
                className="w-full rounded-md bg-black px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-800 md:w-auto"
              >
                {primaryButton.label}
              </Link>
              {secondaryButton && (
                <Link
                  href={secondaryButton.href!}
                  className="hover:bg-primary-color/90 w-full rounded-md border border-black bg-white px-6 py-3 text-lg font-semibold text-black transition hover:text-white md:w-auto"
                >
                  {secondaryButton.label}
                </Link>
              )}
            </div>
            <span className="flex pt-4 text-xs font-normal">
              Submissions are reviewed by Trikaya mentors before publication.
            </span>
          </>
        )}
        {/* VERIFIED ITEMS */}
        <div className="flex flex-col justify-center gap-4">
          {verifiedItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-[12px] border border-[#CCCCCC] bg-[#F2F6FF] px-5 py-3.5"
            >
              <span className="text-xs leading-normal font-semibold tracking-[0.5%] md:text-[22px] md:leading-[25px]">
                {item.label}
              </span>
              {["AI Match: 94%"].includes(item.label) ? (
                <span className="flex items-center gap-2 rounded-full bg-[#CFFFC5] px-2.5 py-0.5 text-[#1D9402]">
                  <Icons variant="VerifiedBadge" color="#1D9402" />
                  Active
                </span>
              ) : (
                <span className="text-primary-color flex items-center gap-2 rounded-full bg-[#D6E4FF] px-2.5 py-1 text-xs md:py-0.5 md:text-base">
                  <Icons variant="VerifiedBadge" color="#0A58F5" />
                  Verified
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
