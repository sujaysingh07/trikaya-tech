import React from "react";
import Container from "../ui/Container";
import InfoCard from "../cards/InfoCard";
import CompanyLogoCard from "../cards/CompanyLogoCard";
import { StaticImageData } from "next/image";
import AmbassadorCard from "../cards/AmbassadorCard";
import BlogCard from "../cards/BlogCard";
import InsightCard from "../cards/InsightCard";
import MaterialCard from "../cards/MaterialCard";
import AuthorCard from "../cards/Author";

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
  id:string
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
  showH1tag?: boolean;
}

export default function CardGridSection({
  id,
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
  showH1tag = false
}: CardGridSectionProps) {
  const HeadingTag = showH1tag ? "h1" : "h2";
  return (
    <section>
      <Container className={containerClassName} >
        {/* Heading */}
        <div
          className={`flex flex-col ${
            headingAlign === "center" ? "justify-center text-center" : "gap-3"
          }`}
          id={id}
        >
          <HeadingTag className="font-bold text-2xl md:text-4xl text-[#03061E]">
            {heading}{" "}
            {highlight && (
              <span className="text-primary-color">{highlight}</span>
            )}
          </HeadingTag>

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




