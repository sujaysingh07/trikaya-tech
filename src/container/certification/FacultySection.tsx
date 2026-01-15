'use client'
import SectionHeader from "@/src/components/common/SectionHeader";
import { AnimatedUnderlineLink } from "@/src/components/ui/AnimatedUnderlineLink";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/src/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";

const instructors = [
    {   id:1,
        name: "Chandrashekar Ramanathan",
        role: "Dean - Academics",
        image: "/faculty/chandrashekar.png",
        orgLogo: "/logos/iitb.png",
        bio:
            "With a Ph.D. from MSU and 25+ years of Data & Software Engineering experience.",
        linkText: "Linkedin Profile",
        link: "#",
    },
    {
        id: 2,
        name: "Dr. Debabrata Das",
        role: "Director of IITB",
        image: "/faculty/debabrata.png",
        orgLogo: "/logos/iitb.png",
        bio:
            "With over 210 peer-reviewed papers and 7 patents, Dr. Das has multiple global and Indian awards.",
        linkText: "IITB Profile",
        link: "#",
    },
    {
        id: 3,
        name: "Prof. G. Srinivasaraghavan",
        role: "Professor",
        image: "/faculty/srinivas.png",
        orgLogo: "/logos/iitb.png",
        bio:
            "With a Ph.D. from IIT Kanpur and 30+ years of experience in microelectronics.",
        linkText: "Linkedin Profile",
        link: "#",
    },
    {
        id: 4,
        name: "Dr. Debabrata Das",
        role: "Director of IITB",
        image: "/faculty/debabrata.png",
        orgLogo: "/logos/iitb.png",
        bio:
            "With over 210 peer-reviewed papers and 7 patents, Dr. Das has multiple global and Indian awards.",
        linkText: "IITB Profile",
        link: "#",
    },
];

export default function FacultySection() {
    const [activeTab, setActiveTab] = useState<"instructors" | "prizes">(
        "instructors"
    );

    return (
        <section className="w-full">
            <SectionHeader title="Who will you learn from?" description="Executive Diploma in AI and ML: Faculty" />

            {/* Counts */}
            <div className="mt-4 flex gap-6 text-sm">
                <div className="flex items-center gap-2">

                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0013 51.3332C40.8879 51.3332 51.3346 40.8865 51.3346 27.9998C51.3346 15.1132 40.8879 4.6665 28.0013 4.6665C15.1147 4.6665 4.66797 15.1132 4.66797 27.9998C4.66797 40.8865 15.1147 51.3332 28.0013 51.3332Z" fill="#F0F5FF" stroke="#0A58F5" strokeWidth="2" />
                        <path d="M28 28C31.866 28 35 24.866 35 21C35 17.134 31.866 14 28 14C24.134 14 21 17.134 21 21C21 24.866 24.134 28 28 28Z" stroke="#0A58F5" strokeWidth="2" />
                        <path d="M41.9264 46.6667C41.5552 39.9198 39.4895 35 27.9983 35C16.5074 35 14.4417 39.9198 14.0703 46.6667" stroke="#0A58F5" strokeWidth="2" strokeLinecap="round" />
                    </svg>

                    <span className="flex flex-col">
                        <strong>4</strong> Instructors
                    </span>
                </div>

                <div className="flex items-center gap-2">

                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M28.0013 51.3332C40.8879 51.3332 51.3346 40.8865 51.3346 27.9998C51.3346 15.1132 40.8879 4.6665 28.0013 4.6665C15.1147 4.6665 4.66797 15.1132 4.66797 27.9998C4.66797 40.8865 15.1147 51.3332 28.0013 51.3332Z" fill="#F0F5FF" stroke="#0A58F5" strokeWidth="2" />
                        <path d="M28 28C31.866 28 35 24.866 35 21C35 17.134 31.866 14 28 14C24.134 14 21 17.134 21 21C21 24.866 24.134 28 28 28Z" stroke="#0A58F5" strokeWidth="2" />
                        <path d="M41.9264 46.6667C41.5552 39.9198 39.4895 35 27.9983 35C16.5074 35 14.4417 39.9198 14.0703 46.6667" stroke="#0A58F5" strokeWidth="2" strokeLinecap="round" />
                    </svg>

                    <span className="flex flex-col">
                        <strong>6</strong> Industry Experts
                    </span>
                </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 flex border-b">
                <button
                    onClick={() => setActiveTab("instructors")}
                    className={`px-6 py-2 text-sm font-medium ${activeTab === "instructors"
                        ? "rounded-md bg-black text-white"
                        : "text-gray-600"
                        }`}
                >
                    Instructors
                </button>

                <button
                    onClick={() => setActiveTab("prizes")}
                    className={`px-6 py-2 text-sm font-medium ${activeTab === "prizes"
                        ? "rounded-md bg-black text-white"
                        : "text-gray-600"
                        }`}
                >
                    Prizes
                </button>
            </div>

            {/* Cards */}
            <Carousel
                opts={{
                    loop: true,
                    align: "start",
                }}
                className="relative mt-8 w-full"
            >
                <CarouselContent className="-ml-6">
                    {instructors.map((person) => (
                        <CarouselItem
                            key={person.id}
                            className="pl-6 md:basis-1/3"
                        >
                            <div className="overflow-hidden rounded-[30px] border border-[#CCCCCC]">
                                {/* Image */}
                                <div className="flex justify-center  bg-[#F0F5FF] py-8">
                                    <Image
                                        src={person.image}
                                        alt={person.name}
                                        width={96}
                                        height={96}
                                        className="h-24 w-24 rounded-full object-cover border-2 border-white"
                                    />
                                </div>

                                {/* Content */}
                                <div className="p-5">
                                    <h3 className="font-semibold text-[20px] text-[#03061E]">
                                        {person.name}
                                    </h3>

                                    <p className="text-sm text-[#4F5162]">
                                        {person.role}
                                    </p>

                                    <div className="w-[57px] h-[47px]">

                                        <Image
                                            src='/faculty/IIITB.png'
                                            alt="org"
                                            width={57}
                                            height={47}
                                            className="mt-3 h-full w-full"
                                        />
                                    </div>

                                    <p className="mt-3 text-sm text-[#4F5162] tracking-[1%]">
                                        {person.bio}{" "}
                                        <span className="cursor-pointer font-bold   underline">
                                            Readmore…
                                        </span>
                                    </p>

                                    <AnimatedUnderlineLink
                                        href={person.link}
                                        className="mt-3 inline-block text-sm font-medium text-primary-color"
                                    >
                                        {person.linkText}
                                    </AnimatedUnderlineLink>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Controls */}
                <CarouselPrevious
                    className="left-2 cursor-pointer md:-left-3.5 border-[3px] border-white bg-black hover:bg-black"
                    arrowColor="white"
                />

                <CarouselNext
                    className="right-2 cursor-pointer md:-right-1 border-[3px] border-white bg-black hover:bg-black"
                    arrowColor="white"
                />
            </Carousel>

            {activeTab === "prizes" && (
                <div>Coming Soon</div>
            )}
        </section>
    );
}
