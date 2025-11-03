import Image from "next/image";
import Container from "./ui/Container";
import hackathon from "@/public/hackathon.svg"
import quests from "@/public/quests.svg"
import internships from "@/public/internships.svg"
import mentorship from "@/public/mentorship.svg"

const journeyCards = [
    {
        icon: hackathon,
        title: "Hackathons",
        description: "Compete & win",
    },
    {
        icon: quests,
        title: "Quests",
        description: "Earn rewards",
    },
    {
        icon: internships,
        title: "Internships",
        description: "Real experience",
    },
    {
        icon: mentorship,
        title: "Mentorship",
        description: "Expert guidance",
    },
];

export default function Unlock() {
    return (
        <section className="py-16">
            <Container>
                {/* Heading */}
                <div className="flex  gap-3">
                    <h2 className="font-bold text-4xl text-[#03061E]">
                        Unlock More <span className="text-primary-color">Opportunities</span>
                    </h2>
                 
                </div>

                {/* Cards */}
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {journeyCards.map((card, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-start justify-center gap-3 rounded-[30px] border border-gray-200 hover:border-primary-color bg-white p-8 transition-all duration-300 shadow-sm hover:shadow-md text-center"
                        >
                            <div className="flex  w-14 h-14 rounded-full">
                                <Image
                                    src={card.icon}
                                    alt={card.title}
                                    width={70}
                                    height={70}
                                    className="text-primary-color"
                                />
                            </div>
                            <h3 className="font-semibold text-lg text-[#03061E] group-hover:text-primary-color transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-gray-500 text-sm">{card.description}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
