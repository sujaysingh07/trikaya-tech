"use client";
import Image, { StaticImageData } from "next/image";
import Container from "../ui/Container";
import { cn } from "@/src/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

interface BannerProps {
  title: string;
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
    <section className="mb-11 w-full overflow-hidden bg-linear-to-r from-[#FFFFFF] to-[#F2F2F2]">
      <Container>
        <div
          className={cn(
            "flex flex-col-reverse items-center justify-between gap-12 py-10 md:flex-row md:gap-20 md:py-16",
            reverse && "md:flex-row-reverse",
          )}
        >
          {/* LEFT SECTION */}
          <div className="flex w-full flex-col justify-center text-center md:w-1/2 md:text-left">
            <div className="mx-auto max-w-[550px] md:mx-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={title + "-text"}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                >
                  <h1
                    className="text-3xl sm:text-4xl lg:text-[70px] font-bold leading-[1.2]"
                    style={{ color: titleColor }}
                  >
                    {title}{" "}
                    {highlight && (
                      <span style={{ color: highlightColor }}>{highlight}</span>
                    )}
                  </h1>

                  <p className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
                    {description}
                  </p>

                  <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
                    <Link
                      href={primaryButton.href}
                      target="_blank"
                      className="w-full rounded-md bg-black px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-800 md:w-auto"
                    >
                      {primaryButton.label}
                    </Link>

                    {secondaryButton && (
                      <Link
                        href={secondaryButton.href}
                        className="bg-primary-color hover:bg-primary-color/90 w-full rounded-md px-6 py-3 text-lg font-semibold text-white transition md:w-auto"
                      >
                        {secondaryButton.label}
                      </Link>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="flex w-full justify-center md:min-h-[450px] md:w-1/2 md:justify-end">
            <div className="relative min-h-[260px] w-full overflow-hidden sm:w-[400px] md:w-[480px] lg:w-[550px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={title + "-image"}
                  initial={{ opacity: 0, x: 80 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -80 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="h-full w-full"
                >
                  <Image
                    src={image}
                    alt={title}
                    width={800}
                    height={500}
                    className="h-auto w-full object-contain"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
