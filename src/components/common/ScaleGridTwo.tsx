import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
type Variant = "blog" | "featured" | "about";
interface FeatureSplitCardProps {
  title: string | React.ReactNode;
  description: string | React.ReactNode;
  buttonLabel?: string;
  buttonLink?: string;
  image?: string | StaticImageData;
  reverse?: boolean; // flip layout
  darkMode?: boolean; // for dark image side (white text)
  writer?: string;
  date?: string;
  minToRead?: number;
  variant?: Variant;
  about?: boolean;
}

export default function FeatureSplitCardTwo({
  title,
  description,
  buttonLabel = "Learn More",
  buttonLink = "#",
  image = "/images/AI-bg.jpg",
  reverse = false,
  darkMode = false,
  writer,
  date,
  minToRead,
  variant = "blog",
}: FeatureSplitCardProps) {
  return (
    <section
      className={clsx(
        "my-0 flex flex-col items-center justify-between rounded-[30px] border-2 bg-[#F0F5FF] transition-all duration-300 md:my-[70px] md:flex-row md:gap-[34px]",
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
          "group relative h-auto w-full md:h-[450px] md:w-1/2",
          reverse ? "p-5" : "p-5",
        )}
      >
        <h3 className="text-2xl leading-snug font-extrabold md:text-[37px]">
          {title}
        </h3>
        <p className="mt-3 max-w-[500px] text-base font-normal text-black">
          {description}
        </p>
        {/* Feature List */}
        {variant === "featured" && (
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-start gap-3">
              <div>
                <Image
                  src={"/icons/LeadershipSkills.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Verified Skills</h4>
                <p className="text-sm text-gray-500">
                  All mentor credentials are validated by Trikaya Protocol
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div>
                <Image
                  src={"/icons/RatingsSystem.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Ratings & Reviews</h4>
                <p className="text-sm text-gray-500">
                  Real feedback from learners who have worked with the mentor
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div>
                <Image
                  src={"/icons/UpcomingEvents.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Upcoming Sessions</h4>
                <p className="text-sm text-gray-500">
                  View and book available time slots that fit your schedule
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div>
                <Image
                  src={"/icons/Upcoming.svg"}
                  width={32}
                  height={32}
                  alt=""
                />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Request Session</h4>
                <p className="text-sm text-gray-500">
                  Easy booking process with instant confirmation
                </p>
              </div>
            </div>
          </div>
        )}

        {variant === "blog" && (
          <div className="flex items-center gap-2 pt-3 pb-10 text-sm text-black">
            <span>{writer}</span>
            <span>•</span>
            <span>{date}</span>
            <span>•</span>
            <span>{minToRead} min read</span>
          </div>
        )}

        {variant === "about" && <div className="py-3"></div>}
        {buttonLabel && (
          <Link
            href={buttonLink}
            className={clsx(
              "mt-5 inline-block rounded-lg px-8 py-3 text-sm font-semibold shadow-md transition-all duration-300",
              darkMode
                ? "bg-white text-black hover:bg-gray-200"
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
