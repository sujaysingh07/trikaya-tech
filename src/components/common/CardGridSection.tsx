import React from "react";
import Container from "../ui/Container";
import InfoCard from "../Cards/Info-card";
import CompanyLogoCard from "../Cards/CompanyLogo-card";
import { StaticImageData } from "next/image";
import AmbassadorCard from "../Cards/Ambassdor-level-card";
import BlogCard from "../Cards/Blog-card";
import InsightCard from "../Cards/Insight-cards";
import AuthorCard from "../Cards/Author";
import JobCard from "../Cards/Job-card";
import MaterialCard from "../Cards/Material-card";

interface CardItem {
  icon?: string | StaticImageData;
  title?: string;
  description?: string;
  subtitle?: string;
  button?: string;
  level?: number | string;
  category?: string;
  author?: string;
  date?: string;
  readTime?: string;
  name?: string;
  role?: string;
  badge?: string;
  articlesCount?: number;
  fileType?: string;
}

interface CardGridSectionProps {
  heading: string;
  highlight?: string;
  cards: CardItem[];
  containerClassName?: string;
  gridClassName?: string;
  headingAlign?: "left" | "center";
  description?: string;
  cardType?:
    | "info"
    | "company"
    | "ambassador"
    | "Blog"
    | "Insight"
    | "Author"
    | "material";
  button?: string;
  variantCategory?: "blog" | "category";
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
  button,
  variantCategory,
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
          <h2 className="text-2xl font-bold text-[#03061E] md:text-4xl">
            {heading}{" "}
            {highlight && (
              <span className="text-primary-color">{highlight}</span>
            )}
          </h2>

          {description && (
            <p className="mx-auto text-base sm:mx-0">{description}</p>
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

              case "Blog":
                if (!card.icon) return null;
                return (
                  <BlogCard
                    key={index}
                    icon={card?.icon}
                    category={card.category || ""}
                    title={card.title || ""}
                    description={card.description || ""}
                    author={card.author || ""}
                    date={card.date || ""}
                    readTime={card.readTime || ""}
                  />
                );
              case "Insight":
                return (
                  <InsightCard
                    key={card.description}
                    variantCategory={variantCategory || "blog"}
                    category={card.category || ""}
                    title={card.title || ""}
                    description={card.description || ""}
                    author={card.author || ""}
                    date={card.date || ""}
                    icon={card.icon || ""}
                    readTime={card.readTime || ""}
                  />
                );

              case "Author":
                return (
                  <AuthorCard
                    icon={card.icon || ""}
                    name={card.name || ""}
                    role={card.role || ""}
                    articlesCount={card.articlesCount || 0}
                  />
                );
              case "material":
                return (
                  <MaterialCard
                    key={card.title}
                    category={card.category || ""}
                    level={card?.level || ""}
                    title={card.title || ""}
                    description={card.description || ""}
                    fileType={card.fileType || ""}
                  />
                );
              default:
                return (
                  <InfoCard
                    key={index}
                    icon={card.icon!}
                    badge={card.badge}
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
