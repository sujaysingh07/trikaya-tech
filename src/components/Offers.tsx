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
} from "./ui/carousel";

import Bg1 from "@/public/offer1.svg";
import Bg2 from "@/public/offer2.svg";
import Container from "./ui/Container";


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
        <section className="py-12">
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
                                className="basis-full md:basis-1/2 px-3 py-4"
                            >
                                <OfferCard {...offer} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>

                    <CarouselPrevious className="left-2 md:-left-10" />
                    <CarouselNext className="right-2 md:-right-10" />
                </Carousel>

                {/* ✅ Slide Dots */}
                <div className="flex justify-center mt-4 space-x-2">
                    {scrollSnaps.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => api?.scrollTo(index)}
                            className={`w-3 h-1  rounded-full transition-all duration-300 ${index === selectedIndex
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


        <div className="relative rounded-4xl overflow-hidden ml-1.5 text-white flex items-center h-[250px] w-full shadow-md hover:shadow-lg transition-shadow duration-300">

       

            <Image
                src={bgImage}
                alt={title}
                fill
                className="inset-0 absolute object-cover"
                priority 
                />
            


            <div className="relative z-10 flex flex-col justify-center px-6 py-4 md:px-8 w-full md:w-3/4">
                <span
                    className="inline-block text-black font-semibold text-base px-4 py-1 rounded-full w-fit mb-3"
                    style={{ backgroundColor: badgeColor }}
                >
                    {badge}
                </span>
                <h3 className="text-2xl font-extrabold mb-2">{title}</h3>
                <p className="text-sm text-[#FFFFFF] mb-[33px]">{description}</p>
                <button className="border border-white text-white cursor-pointer font-medium px-5 py-2 rounded-full w-fit bg-transparent hover:bg-white hover:text-black transition-all duration-300">
                    {buttonLabel}
                </button>
            </div>


         
        </div>

    );
}
