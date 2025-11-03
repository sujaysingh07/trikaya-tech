"use client";
import Image, { StaticImageData } from "next/image";
import Container from "../ui/Container";
import { cn } from "@/lib/utils";
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
        <section className="w-full bg-linear-to-r from-[#FFFFFF] to-[#F2F2F2] overflow-hidden">
            <Container>
                <div
                    className={cn(
                        "flex flex-col-reverse md:flex-row items-center justify-between py-16 gap-12 md:gap-20",
                        reverse && "md:flex-row-reverse"
                    )}
                >
                    {/* Left Text Section (Smooth Animated Entry) */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
                        <div className="max-w-[550px] mx-auto md:mx-0">
                            <motion.div
                                key={title}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -40 }}
                                transition={{ duration: 0.8, ease: "easeInOut" }}
                            >
                                <h2
                                    className="text-3xl sm:text-4xl lg:text-[70px] font-bold leading-[1.2]"
                                    style={{ color: titleColor }}
                                >
                                    {title}{" "}
                                    {highlight && (
                                        <span style={{ color: highlightColor }}>{highlight}</span>
                                    )}
                                </h2>

                                <p className="mt-5 text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                                    {description}
                                </p>

                                <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4">
                                    <Link
                                        href={primaryButton.href}
                                        className="px-6 py-3 bg-black text-white rounded-md text-lg font-semibold hover:bg-gray-800 transition"
                                    >
                                        {primaryButton.label}
                                    </Link>
                                    {secondaryButton && (
                                        <Link
                                            href={secondaryButton.href}
                                            className="px-6 py-3 bg-primary-color text-white rounded-md text-lg font-semibold hover:bg-primary-color/90 transition"
                                        >
                                            {secondaryButton.label}
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>


                    {/* Right Image Section (Fixed Space, Smooth Animation) */}
                    <div className="w-full md:w-1/2 flex justify-center md:justify-end min-h-[450px]">
                        <div className="relative w-full sm:w-[400px] md:w-[480px] lg:w-[550px] overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={title}
                                    initial={{ opacity: 0, y: 80 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -80 }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                    className="w-full h-full"
                                >
                                    <Image
                                        src={image}
                                        alt={title}
                                        width={800}
                                        height={500}
                                        className="w-full h-auto object-cover"
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
