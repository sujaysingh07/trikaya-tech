
import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface MeetupCalloutProps {
  icon?: string ;
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
        "w-full rounded-[30px] border border-primary-color bg-white px-6 py-6 mb-11 md:px-10 md:py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition hover:shadow-sm",
        className
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
          <h3 className="text-base md:text-[35px] font-bold leading-[100%] text-black">
            {title}
          </h3>
          <p className="text-sm md:text-base text-[#000000] leading-[100%] mt-1">
            {subtitle}
          </p>
        </div>
      </div>

      {/* RIGHT BUTTON */}
      <Link
        href={buttonLink}
        className="px-6 py-3 w-full md:w-fit text-center bg-black text-white text-sm md:text-base font-semibold rounded-md hover:bg-[#1a1a1a] transition "
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
