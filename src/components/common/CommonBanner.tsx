"use client";
import Image, { StaticImageData } from "next/image";
import Container from "../ui/Container";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";

interface BannerProps {
    title: string | React.ReactNode;
    highlight?: string;
    description: string;
    image: StaticImageData;
    primaryButton: {
        label: string;
        href: string;
    };
    secondaryButton?: {
        label: string;
        href: string;
    };
    reverse?: boolean;
    titleColor?: string;
    highlightColor?: string;
}

const Banner: React.FC<BannerProps> = ({
    title,
    highlight,
    description,
    image,
    primaryButton,
    secondaryButton,
    reverse = false,
    titleColor = "#000000",
    highlightColor = "#0A58F5",
}) => {
    return (
      <section className="relative w-full  bg-linear-to-r from-[#FFFFFF] to-[#F2F2F2] overflow-hidden">
        {/* Background Image — only on right side */}
        <motion.div
          key={highlight}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute right-0 top-0 h-full w-1/2 z-0 overflow-hidden hidden md:block"
        >
          <Image
            src={image}
            alt={highlight || "Banner Image"}
            fill
            quality={100}
            className="object-right object-contain scale-150"
            priority
          />
          <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-[#F2F2F2] to-transparent pointer-events-none" />
        </motion.div>

        {/* Content Section */}
        <Container>
          <div
            className={cn(
              "relative z-10 flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 py-20",
              reverse && "md:flex-row-reverse"
            )}
          >
            {/* Text Section */}
            <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <motion.div
                key={highlight}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <h2
                  className="text-3xl sm:text-4xl lg:text-[66px] font-bold leading-[1.2]"
                  style={{ color: titleColor }}
                >
                  {title}{" "}
                  {highlight && (
                    <span style={{ color: highlightColor }}>{highlight}</span>
                  )}
                </h2>

                <p className="mt-5  text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                  {description}
                </p>

                <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                  <Link
                    href={primaryButton.href}
                    className="px-6 py-3 bg-black w-full md:w-auto text-white rounded-md text-lg font-semibold hover:bg-gray-800 transition"
                  >
                    {primaryButton.label}
                  </Link>
                  {secondaryButton && (
                    <Link
                      href={secondaryButton.href}
                      className="px-6 py-3 bg-primary-color md:w-auto w-full text-white rounded-md text-lg font-semibold hover:bg-primary-color/90 transition"
                    >
                      {secondaryButton.label}
                    </Link>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>
    );
};

export default Banner;
