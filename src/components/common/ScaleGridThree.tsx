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

  image = "",
  reverse = false,
  darkMode = false,
}: FeatureSplitCardThreeProps) {
  return (
    <section
      className={clsx(
        "flex flex-col md:flex-row my-0 md:my-[70px] items-center justify-between rounded-[30px] border-2 transition-all duration-300 md:gap-[72px]",
        reverse ? "md:flex-row-reverse " : ""
      )}
    >
      {/* LEFT IMAGE + CONTENT */}
      <div className="relative w-full md:w-1/2 h-[340px] md:h-[420px] group rounded-[30px] hidden md:block ">
        {" "}
        <Image
          src={image}
          width={500}
          height={500}
          quality={100}
          alt="AI Background"
          className=" object-left w-full h-full rounded-[30px] md:scale-y-130 bg-black mix-blend-luminosity "
        />
        <div className="absolute inset-0 top-0 left-0 px-[45px] text-white">
          <div className="flex flex-col gap-4">
            {/* LEFT TITLE */}
            <h2 className="text-[28px] font-semibold leading-[100%]">
              {leftTitle}
            </h2>

            {/* LEFT DESCRIPTION */}
            <p className="text-base leading-[26px] tracking-normal font-semibold">
              {leftDescription}
            </p>

            {/* BULLETS */}
            {bullets.map((item, index) => (
              <div
                key={index}
                className={clsx(
                  "flex gap-4 items-start",
                  index === 0 && "mt-[29px]",
                  index === bullets.length - 1 && "mb-[29px]"
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
              "inline-block mt-3 px-6 py-3 text-sm font-semibold rounded-md transition-all duration-300",
              darkMode
                ? "bg-white text-black hover:bg-gray-100"
                : "bg-primary-color text-white hover:bg-[#0048d9]"
            )}
          >
            {buttonLabel}
          </Link>
        </div>
      </div>

      {/* RIGHT CONTENT */}
      <div
        className={clsx(
          "relative w-full md:w-1/2 h-auto md:h-[420px] group md:py-[53px]",
          reverse ? "p-5" : "p-5"
        )}
      >
        {/* RIGHT TITLE */}
        <h3 className="font-extrabold text-2xl md:text-[37px] leading-snug">
          {title}
        </h3>

        {/* RIGHT DESCRIPTION */}
        <p className="text-base font-normal max-w-[500px] mt-3.5 mb-8">
          {description}
        </p>

        {/* VERIFIED ITEMS */}
        <div className="flex flex-col justify-center gap-4">
          {verifiedItems.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-[#F2F6FF] border border-[#CCCCCC] py-3.5 px-5 rounded-[12px]"
            >
              <span className="text-xs leading-normal md:text-[22px] font-semibold md:leading-[25px] tracking-[0.5%]">
                {item.label}
              </span>
              {["AI Match: 94%"].includes(item.label) ? (
                <span className="flex gap-2 items-center text-[#1D9402] bg-[#CFFFC5] px-2.5 py-0.5 rounded-full">
                  <Icons variant="VerifiedBadge" color="#1D9402" />
                  Active
                </span>
              ) : (
                <span className="flex gap-2 items-center text-xs md:text-base py-1 text-primary-color bg-[#D6E4FF] px-2.5 md:py-0.5 rounded-full">
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
