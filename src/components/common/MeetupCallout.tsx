import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface MeetupCalloutProps {
  icon?: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  className?: string;
}

export default function MeetupCallout({
  icon = "/icons/Mic.svg",
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  className = "",
}: MeetupCalloutProps) {
  return (
    <div
      className={clsx(
        "border-primary-color mb-11 flex w-full flex-col items-start justify-between gap-6 rounded-[30px] border bg-white px-6 py-6 transition hover:shadow-sm md:flex-row md:items-center md:px-10 md:py-8",
        className,
      )}
    >
      {/* LEFT SECTION */}
      <div className="flex items-center gap-4">
        {/* Icon */}
        <Image
          src={icon}
          width={70}
          height={70}
          alt="meetup icon"
          className="mt-1"
        />

        {/* Text */}
        <div className="flex flex-col gap-1">
          <h3 className="text-base leading-[100%] font-bold text-black md:text-[35px]">
            {title}
          </h3>
          <p className="mt-1 text-sm leading-[100%] text-[#000000] md:text-base">
            {subtitle}
          </p>
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <Link
        href={buttonLink}
        className="w-full rounded-md bg-black px-6 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#1a1a1a] md:w-fit md:text-base"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
