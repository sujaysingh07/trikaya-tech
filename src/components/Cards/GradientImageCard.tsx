"use client";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import clsx from "clsx";

interface GradientImageCardProps {
    title: string;
    description: string;
    buttonLabel?: string;
    buttonLink?: string;
    bgImage: string | StaticImageData;
    gradientFrom?: string;
    gradientTo?: string;
    reverse?: boolean; // flips image and text alignment
    textColor?: "light" | "dark";
    className?: string;
    imagePosition?: "left" | "center" | "right" | "max-right";

}

export default function GradientImageCard({
    title,
    description,
    buttonLabel = "Explore now",
    buttonLink = "#",
    bgImage,
    gradientFrom = "#F0F4FF",
    gradientTo = "#FFFFFF",
    reverse = false,
    textColor = "dark",
    className = "",
    imagePosition
}: GradientImageCardProps) {
    return (
        <div
            className={clsx(
                "relative flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-[20px] p-8 md:p-10 shadow-md hover:shadow-lg transition-all duration-300",
                reverse ? "md:flex-row-reverse" : "",
                className
            )}
            style={{
                background: `linear-gradient(to ${reverse ? "left" : "right"}, ${gradientFrom}, ${gradientTo})`,
            }}
        >
            {/* Content */}
            <div
                className={clsx(
                    "flex flex-col gap-3 z-20", // make sure above gradient circle
                    "text-black",
                    reverse ? "md:text-right" : "md:text-left",
                    "max-w-[380px]"
                )}
            >
                <h3 className="font-semibold text-2xl md:text-[28px]">{title}</h3>
                <p className="text-sm md:text-base opacity-80">{description}</p>

                {buttonLabel && (
                    <Link
                        href={buttonLink}
                        className={clsx(
                            "inline-block w-fit mt-7 px-6 py-2.5 rounded-md font-semibold text-sm transition bg-primary-color text-white hover:bg-[#0048d9]"
                        )}
                    >
                        {buttonLabel}
                    </Link>
                )}
            </div>

   

            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
                <Image
                    src={bgImage}
                    alt={title}
                    fill
                    className={clsx(
                        "object-contain transition-transform duration-500",
                        reverse ? "object-left" : "object-right",
                        imagePosition === "center" && "object-center",
                        imagePosition === "left" && "object-left",
                        imagePosition === "max-right" && "object-right translate-x-[5%]"
                    )}
                />
            </div>
        </div>

    );
}
