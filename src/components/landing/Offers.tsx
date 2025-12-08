"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";

import Bg1 from "@/public/offer1.svg";
import Bg2 from "@/public/offer2.svg";
import Container from "../ui/Container";

export default function Offers() {
  const offers = [
    {
      bgImage: Bg1,

      badge: "Limited Time Offer",
      title: "Get 50% Off Premium Plan",
      description:
        "Unlock all courses, mentorship sessions, and certification exams. Start your journey today!",
      buttonLabel: "Claim Offer",
      badgeColor: "#FFDFA4",
    },
    {
      bgImage: Bg2,

      badge: "New Launch",
      title: "AI Career Bootcamp",
      description:
        "Master AI & Machine Learning in 12 weeks. Build real projects and get job-ready with expert mentorship.",
      buttonLabel: "Learn More",
      badgeColor: "#FFB82E",
    },
    {
      bgImage: Bg1,
      badge: "Limited Time Offer",
      title: "Get 50% Off Premium Plan",
      description:
        "Unlock all courses, mentorship sessions, and certification exams. Start your journey today!",
      buttonLabel: "Claim Offer",
      badgeColor: "#FFDFA4",
    },
    {
      bgImage: Bg2,

      badge: "New Launch",
      title: "AI Career Bootcamp",
      description:
        "Master AI & Machine Learning in 12 weeks. Build real projects and get job-ready with expert mentorship.",
      buttonLabel: "Learn More",
      badgeColor: "#FFB82E",
    },
  ];

  const [api, setApi] = React.useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList());
    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="mb-11">
      <Container>
        <div className="relative mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {offers.map((offer, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full px-3 py-4 md:basis-1/2"
                >
                  <OfferCard {...offer} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious
              className="left-2 border-[3px] border-white bg-black hover:bg-black md:-left-3"
              arrowColor="white"
            />
            <CarouselNext
              className="right-2 border-[3px] border-white bg-black hover:bg-black md:-right-3"
              arrowColor="white"
            />
          </Carousel>

          {/* ✅ Slide Dots */}
          <div className="mt-4 flex justify-center space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`h-1 w-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "scale-110 bg-black"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

function OfferCard({
  bgImage,

  badge,
  title,
  description,
  buttonLabel,
  badgeColor,
}: {
  bgImage: StaticImageData;
  badge: string;
  title: string;
  description: string;
  buttonLabel: string;
  badgeColor: string;
}) {
  return (
    <div className="relative ml-1.5 flex h-auto w-full items-center overflow-hidden rounded-4xl text-white shadow-md transition-shadow duration-300 hover:shadow-lg md:h-[250px]">
      <Image
        src={bgImage}
        alt={title}
        fill
        className="absolute inset-0 object-cover"
        priority
      />

      <div className="relative z-10 flex w-full flex-col justify-center px-6 py-4 md:w-3/4 md:px-8">
        <span
          className="mb-3 inline-block w-fit rounded-full px-4 py-1 text-base font-semibold text-black"
          style={{ backgroundColor: badgeColor }}
        >
          {badge}
        </span>
        <h3 className="mb-2 text-2xl font-extrabold">{title}</h3>
        <p className="mb-[33px] text-sm text-[#FFFFFF]">{description}</p>
        <button className="w-fit cursor-pointer rounded-full border border-white bg-transparent px-5 py-2 font-medium text-white transition-all duration-300 hover:bg-white hover:text-black">
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
