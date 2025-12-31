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

import AmazonLogo from "@/public/logo/amazon.png";
import accenture from "@/public/logo/accenture.png";
import customer from "@/public/logo/customerXps.png";
import { formatToIST } from "@/src/lib/formatToIST";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

export default function FeaturedJob({title}:{title?:string}) {
  const jobs = [
        {
            logo: AmazonLogo,
            date: "May 23, 2025",
            title: "Data Scientist",
            location: "New York, NY",
            type: "Full Time",
            applyBy: "Dec 31, 2025",
            tags: ["Data Science", "R", "SQL"],
        },
        {
            logo: customer,
            date: "June 5, 2025",
            title: "Frontend Engineer",
            location: "San Francisco, CA",
            type: "Full Time",
            applyBy: "Jan 15, 2026",
            tags: ["React", "TypeScript", "Next.js"],
        },
        {
            logo: AmazonLogo,
            date: "April 10, 2025",
            title: "Machine Learning Engineer",
            location: "Austin, TX",
            type: "Remote",
            applyBy: "Dec 20, 2025",
            tags: ["Python", "TensorFlow", "AI"],
        },
        {
            logo: accenture,
            date: "May 1, 2025",
            title: "UI/UX Designer",
            location: "Seattle, WA",
            type: "Contract",
            applyBy: "Nov 30, 2025",
            tags: ["Figma", "Prototyping", "UX"],
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
    <section className="mb-11" id="jobs">
      <Container>
        {title ? <SectionHeader
          title={title}
          highlight=""
          description=""
        /> :
        <SectionHeader
        title={"Featured "}
        highlight="Jobs"
        description="Explore opportunities from top companies hiring verified talent."
        />
      }
        <div className="relative mx-auto mt-5">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent>
              {jobs.map((job, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full sm:basis-1/2 lg:basis-1/3 px-3 py-4"
                >
                  <OfferCard {...job} />
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* <CarouselPrevious className="left-2 md:-left-10" />
          <CarouselNext className="right-2 md:-right-10" /> */}
            <CarouselPrevious
              className="left-2 md:-left-3.5 border-[3px] border-white bg-black hover:bg-black"
              arrowColor="white"
            />

            <CarouselNext
              className="right-2 md:-right-1 border-[3px] border-white bg-black hover:bg-black"
              arrowColor="white"
            />
          </Carousel>

          {/* ✅ Slide Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={`w-3 h-1 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-black scale-110"
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
    logo,
    date,
    title,
    location,
    type,
    applyBy,
    tags,
}: {
    logo: StaticImageData;
    date: string;
    title: string;
    location: string;
    type: string;
    applyBy: string;
    tags: string[];
}) {
  return (
      <div className="relative flex flex-col ml-1.5 justify-between rounded-2xl border border-gray-200 bg-white p-5 h-[272px] transition-all duration-300 hover:shadow-md hover:-translate-y-1">
                {/* Logo */}
          <div className="flex justify-center items-center h-16  bg-white rounded-md overflow-hidden">
              <Image
                  src={logo}
                  alt={title}
                  width={100}
                  height={50}
                  className= "object-cover max-h-full max-w-full aspect-auto"
              />
          </div>


                {/* Job Info */}
                <div className="mt-3 space-y-1">
              <p className="text-xs text-[#4F5162]">{formatToIST(date)}</p>
              <h3 className="text-base font-semibold text-[#03061E]">{title}</h3>
              <div className="flex gap-1 items-center justify-between">
                <div className="flex gap-1">

                  <svg width="21" height="23" viewBox="0 0 21 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.3419 20.125C13.3583 16.675 16.3747 13.5857 16.3747 9.775C16.3747 5.96424 13.6737 2.875 10.3419 2.875C7.01006 2.875 4.30908 5.96424 4.30908 9.775C4.30908 13.5857 7.32548 16.675 10.3419 20.125Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M10.3419 12.4583C11.7699 12.4583 12.9274 11.1711 12.9274 9.58325C12.9274 7.99544 11.7699 6.70825 10.3419 6.70825C8.91399 6.70825 7.75647 7.99544 7.75647 9.58325C7.75647 11.1711 8.91399 12.4583 10.3419 12.4583Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                  <p className="text-sm text-[#4F5162]">{location}</p>
                </div>

                  {/* Favorite Icon */}
                  <button className=" text-gray-300 hover:text-red-500 transition-colors">
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-5 h-5"
                      >
                          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09A6.46 6.46 0 0 1 16.5 3C19.58 3 22 5.41 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                  </button>


              </div>

              <div className="flex items-center gap-1 mt-1 text-sm text-[#4F5162]">
                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M16.8056 6H13.5737V4.5C13.5737 3.675 12.992 3 12.281 3H8.40278C7.69177 3 7.11004 3.675 7.11004 4.5V6H3.87819C3.16718 6 2.58545 6.675 2.58545 7.5V19.5C2.58545 20.325 3.16718 21 3.87819 21H16.8056C17.5166 21 18.0983 20.325 18.0983 19.5V7.5C18.0983 6.675 17.5166 6 16.8056 6ZM8.40278 4.5H12.281V6H8.40278V4.5ZM10.9883 7.5V12H9.69552V7.5H10.9883ZM16.8056 19.5H3.87819V17.25H16.8056V19.5ZM16.8056 15.75H3.87819V7.5H8.40278V12C8.40278 12.825 8.98451 13.5 9.69552 13.5H10.9883C11.6993 13.5 12.281 12.825 12.281 12V7.5H16.8056V15.75Z" fill="#666666" />
                  </svg>

                        <span> {type}</span>
                    </div>

              <div className="flex items-center gap-1 text-sm text-[#4F5162]">
                  <svg width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.352 17V12L8.19535 10.5M18.116 12C18.116 16.9706 14.64 21 10.352 21C6.06408 21 2.58801 16.9706 2.58801 12C2.58801 7.02944 6.06408 3 10.352 3C14.64 3 18.116 7.02944 18.116 12Z" stroke="#666666" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>

                        <span> Apply by:</span>
                        <span className="font-medium ">{applyBy}</span>
                    </div>
                </div>

                {/* Tags */}
                <div className="mt-3 flex flex-wrap gap-2">
                    {tags.map((tag, i) => (
                        <span
                            key={i}
                            className="text-xs font-medium bg-[#EBEAEA] text-[#475569] px-3 py-1 rounded-full"
                        >
                            {tag}
                        </span>
                    ))}
                </div>


            </div>
  );
}
