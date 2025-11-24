import React from "react";
import Container from "../ui/Container";
import InfoCard from "../Cards/Info-card";
import CompanyLogoCard from "../Cards/CompanyLogo-card";
import { StaticImageData } from "next/image";
import AmbassadorCard from "../Cards/Ambassdor-level-card";

interface CardItem {
  icon?: string | StaticImageData;
  title?: string;
  description?: string;
  subtitle?: string;
  button?:string
  level?: number;
}

interface CardGridSectionProps {
  heading: string;
  highlight?: string;
  cards: CardItem[];
  containerClassName?: string;
  gridClassName?: string;
  headingAlign?: "left" | "center";
  description?: string;
  cardType?: "info" | "company" | "ambassador";
  button?:string
}

export default function CardGridSection({
  heading,
  highlight,
  cards,
  containerClassName = "",
  gridClassName = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-5 md:my-7",
  headingAlign = "left",
  description,
  cardType = "info",
  button
  
}: CardGridSectionProps) {
  return (
    <section>
      <Container className={containerClassName}>
        {/* Heading */}
        <div
          className={`flex flex-col ${
            headingAlign === "center" ? "justify-center text-center" : "gap-3"
          }`}
        >
          <h2 className="font-bold text-2xl md:text-4xl text-[#03061E]">
            {heading}{" "}
            {highlight && (
              <span className="text-primary-color">{highlight}</span>
            )}
          </h2>

          {description && (
            <p className="text-base mx-auto sm:mx-0">{description}</p>
          )}
        </div>

        {/* Cards */}
        <div className={gridClassName}>
          {cards.map((card, index) => {
            switch (cardType) {
              case "company":
                if (!card.icon) return null;
                return (
                  <CompanyLogoCard
                    key={index}
                    logo={card.icon}
                    name={card.title}
                  />
                );

              case "ambassador":
                return (
                  <AmbassadorCard
                    key={index}
                    level={card.level || 1}
                    title={card.title || ""}
                    description={card.description || ""}
                  />
                );

              default:
                return (
                  <InfoCard
                    key={index}
                    icon={card.icon!}
                    title={card.title || ""}
                    subTitle={card.subtitle || ""}
                    button={button || ""}
                    description={card.description || ""}
                  />
                );
            }
          })}
        </div>
      </Container>
    </section>
  );
}
