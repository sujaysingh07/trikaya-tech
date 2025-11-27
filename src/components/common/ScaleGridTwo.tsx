
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import clsx from "clsx";
type Variant = "blog" | "featured" | "about";
interface FeatureSplitCardProps {
  
  title: string | React.ReactNode;
  description: string;
  buttonLabel?: string;
  buttonLink?: string;
  image?: string | StaticImageData;
  reverse?: boolean; // flip layout
  darkMode?: boolean; // for dark image side (white text)
  writer?:string;
  date?: string;
  minToRead?: number
  variant?: Variant;
  about?:boolean

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
        "flex flex-col md:flex-row my-0 md:my-[70px] items-center justify-between bg-[#F0F5FF] rounded-[30px] border-2 transition-all duration-300 md:gap-[34px]",
        reverse ? "md:flex-row-reverse " : ""
      )}
    >
      {/* Image Section */}
      <div className="relative w-full md:w-1/2 h-[340px] md:h-[420px] group  rounded-[30px] ">
        <Image
          src={image}
          width={500}
          height={500}
          quality={100}
          alt="AI Background"
          className="  object-left w-full h-full rounded-[30px] md:scale-y-130"
        />
      </div>

      {/* Content Section */}
      <div
        className={clsx(
          "relative w-full md:w-1/2 h-auto  md:h-[450px] group ",
          reverse ? "p-5" : "p-5"
        )}
      >
        <h3 className="font-extrabold text-2xl md:text-[37px] leading-snug">
          {title}
        </h3>
        <p className="text-base font-normal max-w-[500px] mt-1 text-gray-600">
          {description}
        </p>
        {/* Feature List */}
        {variant === "featured" && (
          <div className=" mt-4 flex flex-col gap-2">
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
                <h4 className="font-semibold text-lg">Verified Skills</h4>
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
                <h4 className="font-semibold text-lg">Ratings & Reviews</h4>
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
                <h4 className="font-semibold text-lg">Upcoming Sessions</h4>
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
                <h4 className="font-semibold text-lg">Request Session</h4>
                <p className="text-sm text-gray-500">
                  Easy booking process with instant confirmation
                </p>
              </div>
            </div>
          </div>
        )}

        {variant === "blog" && (
          <div className="flex items-center gap-2 text-sm text-black pt-3 pb-10">
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
              "inline-block px-8 mt-5 py-3 text-sm font-semibold rounded-lg transition-all duration-300 shadow-md",
              darkMode
                ? "bg-white text-black hover:bg-gray-200"
                : "bg-primary-color text-white hover:bg-[#0048d9]"
            )}
          >
            {buttonLabel}
          </Link>
        )}
      </div>
    </section>
  );
}
