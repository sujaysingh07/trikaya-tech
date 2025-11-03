"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

const opportunities = [
    {
        id: 1,
        bg: "/Practice/PracticeOne.png",
        title: "Code Challenges",
        subtitle: "1000+ coding problems across all difficulty levels",
        learners: "1,200+",
    },
    {
        id: 2,
        bg: "/Practice/PracticeTwo.png",
        title: "Projects",
        subtitle: "Real-world projects to build your portfolio",
        learners: "150+",
    },
    {
        id: 3,
        bg: "/Practice/PracticeThree.png",
        title: "Quick Practice",
        subtitle: "Bite-sized exercises for daily practice",
        learners: "500+",
    },
    {
        id: 4,
        bg: "/Practice/PracticeFour.png",
        title: "Certifications",
        subtitle: "Earn verified certificates upon completion",
        learners: "50+",
    },
];

export default function PracticeSection() {
    return (
        <section className="py-16 bg-white">
            <Container>
                {/* Section Heading */}
                <div className="flex flex-col gap-3 pb-10 text-center sm:text-left">
                    <h2 className="font-bold text-4xl text-[#03061E]">Opportunities</h2>
                    <p className="text-gray-600 max-w-2xl">
                        Gain practical experience with real-world problems and projects.
                    </p>
                </div>

                {/* Responsive Card Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2 gap-6">
                    {opportunities.map((item) => (
                        <div
                            key={item.id}
                            className="relative rounded-[30px] overflow-hidden group shadow-md hover:shadow-lg transition-all duration-300 h-[310px]"
                        >
                            {/* Background Image */}
                            <Image
                                src={item.bg}
                                alt={item.title}
                                width={600}
                                height={400}
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Gradient */}
                      
                            {/* Content Layer */}
                            <div className="absolute inset-0 flex flex-col  p-4 sm:p-6 text-white">
                                {/* Title & Subtitle */}
                                <div className="max-w-[350px] ">
                                    <h3 className="text-[28px]  font-semibold mb-1">{item.title}</h3>
                                    <p className="text-base sm:text-base text-gray-200">{item.subtitle}</p>
                                </div>

                                {/* Bottom Content */}
                                <div className="py-5">
                                    {/* Learners Count */}
                                    <div className="flex items-center gap-2 mb-3 sm:mb-4">
                                        <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.2756 17.0934C23.2049 17.0934 25.5796 14.7188 25.5796 11.7895C25.5796 8.86019 23.2049 6.48553 20.2756 6.48553C17.3463 6.48553 14.9717 8.86019 14.9717 11.7895C14.9717 14.7188 17.3463 17.0934 20.2756 17.0934Z" stroke="white" stroke-width="2.53448" stroke-linecap="round" />
                                            <path d="M24.0264 8.60712C24.446 7.88033 25.0719 7.29431 25.8244 6.92311C26.5771 6.55194 27.423 6.4123 28.2551 6.52184C29.087 6.63138 29.8679 6.98519 30.4989 7.53852C31.1298 8.09185 31.5826 8.81987 31.7998 9.63048C32.0169 10.4411 31.9889 11.2979 31.7192 12.0926C31.4494 12.8873 30.9499 13.5841 30.2842 14.095C29.6184 14.6059 28.816 14.9079 27.9787 14.9628C27.1413 15.0177 26.3064 14.823 25.5796 14.4034" stroke="white" stroke-width="2.53448" />
                                            <path d="M16.5254 8.60712C16.1057 7.88033 15.48 7.29431 14.7273 6.92311C13.9746 6.55194 13.1288 6.4123 12.2967 6.52184C11.4647 6.63138 10.6838 6.98519 10.0529 7.53852C9.42192 8.09185 8.96921 8.81987 8.75201 9.63048C8.5348 10.4411 8.56285 11.2979 8.83261 12.0926C9.10236 12.8873 9.60172 13.5841 10.2675 14.095C10.9333 14.6059 11.7356 14.9079 12.5731 14.9628C13.4105 15.0177 14.2454 14.823 14.9722 14.4034" stroke="white" stroke-width="2.53448" />
                                            <path d="M20.275 21.3367C28.9315 21.3367 31.1662 28.3426 31.743 31.9594C31.9276 33.1165 30.9939 34.0662 29.8221 34.0662H10.7279C9.55618 34.0662 8.62252 33.1165 8.80705 31.9594C9.38387 28.3426 11.6185 21.3367 20.275 21.3367Z" stroke="white" stroke-width="2.53448" stroke-linecap="round" />
                                            <path d="M22.5817 21.5189L21.7984 20.8037L20.4819 22.2453L22.4077 22.5653L22.5817 21.5189ZM31.2678 29.823L30.2488 30.1179L30.4705 30.8838H31.2678V29.823ZM27.7008 20.2759C29.8812 20.2759 31.4125 21.3424 32.5344 22.8364C33.6788 24.3606 34.3507 26.2812 34.7264 27.7814L36.7846 27.2661C36.3789 25.6467 35.6205 23.4131 34.231 21.5626C32.8193 19.6825 30.7139 18.1543 27.7008 18.1543V20.2759ZM23.3649 22.2341C24.4266 21.0715 25.8141 20.2759 27.7008 20.2759V18.1543C25.1184 18.1543 23.1895 19.28 21.7984 20.8037L23.3649 22.2341ZM22.4077 22.5653C27.2884 23.3764 29.3535 27.0227 30.2488 30.1179L32.2868 29.5281C31.2874 26.0733 28.8019 21.4773 22.7556 20.4725L22.4077 22.5653ZM33.8428 28.7622H31.2678V30.8838H33.8428V28.7622ZM34.7264 27.7814C34.8406 28.2373 34.5058 28.7622 33.8428 28.7622V30.8838C35.6901 30.8838 37.2802 29.2453 36.7846 27.2661L34.7264 27.7814Z" fill="white" />
                                            <path d="M17.9699 21.5189L18.1438 22.5653L20.0696 22.2453L18.7532 20.8037L17.9699 21.5189ZM9.28366 29.823V30.8838H10.0811L10.3027 30.1179L9.28366 29.823ZM12.8507 20.2759C14.7375 20.2759 16.125 21.0715 17.1864 22.2341L18.7532 20.8037C17.362 19.28 15.4332 18.1543 12.8507 18.1543V20.2759ZM5.825 27.7814C6.20071 26.2812 6.8727 24.3606 8.01706 22.8364C9.13897 21.3424 10.6703 20.2759 12.8507 20.2759V18.1543C9.83765 18.1543 7.73226 19.6825 6.32047 21.5626C4.93113 23.4131 4.1725 25.6467 3.76698 27.2661L5.825 27.7814ZM6.7087 28.7622C6.04568 28.7622 5.71086 28.2373 5.825 27.7814L3.76698 27.2661C3.27129 29.2453 4.86135 30.8838 6.7087 30.8838V28.7622ZM9.28366 28.7622H6.7087V30.8838H9.28366V28.7622ZM10.3027 30.1179C11.1981 27.0227 13.263 23.3764 18.1438 22.5653L17.7959 20.4725C11.7496 21.4773 9.26419 26.0733 8.26467 29.5281L10.3027 30.1179Z" fill="white" />
                                        </svg>

                                        <span className="text-[39px] font-semibold">{item.learners}</span>
                                    </div>

                                    {/* Button */}
                                    <Link
                                        href="#"
                                        className="inline-block bg-primary-color max-w-[179px] text-white text-xs sm:text-sm md:text-base font-semibold px-4 sm:px-5 py-2 sm:py-2.5 rounded-md hover:bg-[#0048d9] transition"
                                    >
                                        Explore now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </Container>
        </section>
    );
}
