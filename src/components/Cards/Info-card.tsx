import Image, { StaticImageData } from "next/image";
import React from "react";
import clsx from "clsx";

interface InfoCardProps {
    icon: string | StaticImageData;
    title: string;
    description: string;
    className?: string; // allow external style overrides
}

export default function InfoCard({ icon, title, description, className }: InfoCardProps) {
    return (
        <div
            className={clsx(
                "group flex flex-col items-start justify-center gap-3 rounded-[30px] border border-gray-200 hover:border-primary-color bg-white p-8 transition-all duration-300 shadow-sm hover:shadow-md text-center",
                className
            )}
        >
            <div className="flex w-14 h-14 rounded-full items-center justify-center">
                <Image
                    src={icon}
                    alt={title}
                    width={70}
                    height={70}
                    className="object-contain text-primary-color"
                />
            </div>

            <h3 className="font-semibold text-lg text-[#03061E] group-hover:text-primary-color transition-colors">
                {title}
            </h3>

            <p className="text-gray-500 text-sm text-left">{description}</p>
        </div>
    );
}
