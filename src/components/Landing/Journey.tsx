import Image from "next/image";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

const journeyCards = [
    {
        image: "/structured-learning.jpg",
        title: "Structured Learning",
        description: "Follow curated paths designed by industry experts.",
    },
    {
        image: "/hands-on-practice.jpg",
        title: "Hands-on Practice",
        description: "Build real projects and solve coding challenges.",
    },
    {
        image: "/mentorship.jpg",
        title: "1-on-1 Mentorship",
        description: "Get personalized guidance from experienced professionals.",
    },
    {
        image: "/arena.jpg",
        title: "Compete in Arena",
        description: "Test your skills in competitive challenges.",
    },
    {
        image: "/career-support.jpg",
        title: "Career Support",
        description: "Access job opportunities and career guidance.",
    },
    {
        image: "/industry-projects.jpg",
        title: "Industry Projects",
        description: "Work on real-world projects from partner companies.",
    },
];

export default function Journey() {
    return (
        <section className="mb-11">
            <Container>
                {/* Heading + Subtext */}
                <SectionHeader title={"Your Complete "} highlight="Learning Journey" description="From beginner to job-ready professional - we've got everything you need."/>

                {/* Cards Grid */}
                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[35px]">
                    {journeyCards.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col overflow-hidden bg-white rounded-[30px] border border-gray-200  hover:border-primary-color shadow-sm hover:shadow-md transition-all ease-in-out duration-200"
                        >
                            <div className="relative w-full h-40">
                            
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-5">
                                <h3 className="font-semibold text-[#03061E] text-[22px] mb-1">{card.title}</h3>
                                <p className="text-[#666666] text-base">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
