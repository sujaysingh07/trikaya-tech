import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";

interface FeatureSplitCardProps {
  title: string | React.ReactNode;
  description: string;
  buttonLabel?: string;
  buttonLink?: string;
  image?: string | StaticImageData;
  reverse?: boolean; // flip layout
  darkMode?: boolean; // for dark image side (white text)
}

export default function FeatureSplitCard({
  title,
  description,
  buttonLabel = "Learn More",
  buttonLink = "#",
  image = "/images/AI-bg.jpg",
  reverse = false,
  darkMode = false,
}: FeatureSplitCardProps) {
  return (
    <section
      className={clsx(
        "my-0 flex flex-col items-center justify-between rounded-[30px] border-2 transition-all duration-300 md:my-[70px] md:flex-row md:gap-[72px]",
        reverse ? "md:flex-row-reverse" : "",
      )}
    >
      {/* Image Section */}
      <div className="group relative h-[340px] w-full rounded-[30px] md:h-[420px] md:w-1/2">
        <Image
          src={image}
          width={500}
          height={500}
          quality={100}
          alt="AI Background"
          className="h-full w-full rounded-[30px] object-left md:scale-y-130"
        />
      </div>

      {/* Content Section */}
      <div
        className={clsx(
          "group relative h-auto w-full py-[53px] md:h-[420px] md:w-1/2",
          reverse ? "p-5" : "p-5",
        )}
      >
        <h3 className="text-2xl leading-snug font-extrabold md:text-[37px]">
          {title}
        </h3>
        <p className="mt-3.5 mb-[52px] max-w-[500px] text-base font-normal">
          {description}
        </p>

        {buttonLabel && (
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
        )}
      </div>
    </section>
  );
}
