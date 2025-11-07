import React from "react";
import Container from "../ui/Container";
import InfoCard from "../Cards/Info-card";
import { StaticImageData } from "next/image";

interface CardItem {
    icon: string | StaticImageData;
    title: string;
    description: string;
}

interface CardGridSectionProps {
    heading: string;
    highlight?: string; // optional text to color
    cards: CardItem[];
    containerClassName?: string; // allow external control
    gridClassName?: string; // allow custom grid layouts
    headingAlign?: "left" | "center"; // optional layout control
    description?:string
}

export default function CardGridSection({
    heading,
    highlight,
    cards,
    containerClassName = "",
    gridClassName = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12",
    headingAlign = "left",
    description,
}: CardGridSectionProps) {
    return (
        <section className="py-[88px]">
            <Container className={containerClassName}>
                {/* Heading */}
                <div
                    className={`flex flex-col ${headingAlign === "center" ? "justify-center text-center" : "gap-3"
                        }`}
                >
                    <h2 className="font-bold text-4xl text-[#03061E]">
                        {heading}{" "}
                        {highlight && (
                            <span className="text-primary-color">{highlight}</span>
                        )}
                    </h2>
                    <p className="text-base mx-auto sm:mx-0">{description}</p>
                </div>

                {/* Cards */}
                <div className={gridClassName}>
                    {cards.map((card, index) => (
                        <InfoCard
                            key={index}
                            icon={card.icon}
                            title={card.title}
                            description={card.description}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
