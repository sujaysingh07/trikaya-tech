"use client";
import Image, { StaticImageData } from "next/image";
import Container from "../ui/Container";
import { cn } from "@/src/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import SubscribeForm from "./SubscribeForm";

interface BannerProps {
  title: string | React.ReactNode;
  highlight?: string;
  description: string | React.ReactNode;
  image: string | StaticImageData;
  primaryButton?: {
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
  isSearchBar?: boolean;
  showh1Tag?:boolean
  IconTwo?:React.ReactNode
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
  isSearchBar = false,
  showh1Tag=false,
  IconTwo
}) => {
  const HeadingTag = showh1Tag ? "h1" : "h2";


  return (
    <section className="relative w-full overflow-hidden md:min-h-[580px] bg-linear-to-r from-[#FFFFFF] to-[#F2F2F2]">
      {/* Background Image — only on right side */}
      <motion.div
        key={highlight}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -80 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="absolute top-0 right-0 z-0 hidden h-full  w-1/2 overflow-hidden md:block"
      >
        <Image
          src={image}
          alt={highlight || "Banner Image"}
          fill
          // quality={100}
          className="scale-150 object-contain object-right"
          priority
        />
        <div className="pointer-events-none absolute top-0 left-0 h-full w-24 bg-linear-to-r from-[#F2F2F2] to-transparent" />
      </motion.div>

      {/* Content Section */}
      <Container>
        <div
          className={cn(
            "relative z-10 flex flex-col-reverse items-center justify-between gap-12 md:min-h-[580px] py-20 md:flex-row md:gap-20",
            reverse && "md:flex-row-reverse",
          )}
        >
          {/* Text Section */}
          <div className="flex w-full flex-col justify-center text-center md:w-1/2 md:text-left">
            <motion.div
              key={highlight}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <HeadingTag
                className="text-3xl leading-[1.2] font-bold sm:text-4xl lg:text-[66px]"
                style={{ color: titleColor }}
              >
                {title}{" "}
                {highlight && (
                  <span style={{ color: highlightColor }}>{highlight}</span>
                )}
              </HeadingTag>
              <div className="mt-5 text-base leading-relaxed text-gray-600 sm:text-lg lg:text-xl">
                {description}
              </div>
              {!isSearchBar && (
                <div className="mt-10 flex flex-wrap justify-center gap-4 md:justify-start">
              {  primaryButton &&
                  <Link
                    href={primaryButton.href}
                    className="w-full rounded-md bg-black px-6 py-3 text-lg font-semibold text-white transition hover:bg-gray-800 md:w-auto"
                  >
                    {primaryButton.label}
                  </Link>}
                  {secondaryButton && (
                    <Link
                      href={secondaryButton.href}
                      className="bg-primary-color hover:bg-primary-color/90 w-full rounded-md px-6 py-3 text-lg font-semibold text-white transition md:w-auto"
                    >
                      <div className="flex gap-2 justify-center">
                      {secondaryButton.label} {IconTwo && IconTwo}
                      </div>
                    </Link>
                  )}
                </div>
              )}
              {isSearchBar && (
                <div className="mt-10">
                  <SubscribeForm buttonLabel="Subscribe" />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Banner;
