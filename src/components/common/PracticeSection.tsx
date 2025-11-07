"use client";

import GradientImageCard from "../Cards/GradientImageCard";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";


const opportunities = [
    {
        id: 1,
        bgImage: "/images/Blockchain.png",
        title: "Blockchain",
        description: "Learn smart contracts, DeFi, NFTs, and dApp development.",
        learners: "1,200+",
        gradientFrom: "#fcfcfd",
        gradientTo: "#d5d5e2",
        textColor: "light",
        buttonLabel:'Explore Blockchain Path'
    },
    {
        id: 2,
        bgImage: "/images/ArtificialIntelligence.png",
        title: "Projects",
        description: "Master machine learning, deep learning, and generative AI.",
        learners: "150+",
        gradientFrom: "#fcfcfd",
        gradientTo: "#d5d5e2",
        textColor: "light",
        reverse: false,
        buttonLabel: 'Explore now'

    },
    {
        id: 3,
        title: "Quick Practice",
        bgImage: "/images/DataScience.jpg",
        description: "Get hands-on with data analytics, visualization, and predictive modeling.",
        learners: "500+",
        gradientFrom: "",
        gradientTo: "",
        textColor: "dark",
        buttonLabel: 'Explore now'

    },
    {
        id: 4,
        bgImage: "/images/Certifications.png",
        title: "Certifications",
        description: "Build skills in network security, ethical hacking, and digital forensics.",
        learners: "50+",
        gradientFrom: "#F3F4F6",
        gradientTo: "#d5d5e2",
        textColor: "light",
        buttonLabel: 'Explore now',
        reverse: false,
    },
];

export default function PracticeSection() {
    return (
        <section className="pb-16 bg-white">
            <Container>
                <SectionHeader
                    title="Choose Your "
                    highlight="Learning Path"
                    description="Start with your favorite emerging tech domain and learn through curated, mentor-led paths."
                    align="left"
                />

                {/* Responsive Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {opportunities.map((item) => (
                        <GradientImageCard
                            key={item.id}
                            title={item.title}
                            description={item.description}
                            buttonLabel={item.buttonLabel}
                            buttonLink="#"
                            bgImage={item.bgImage}
                            gradientFrom={item.gradientFrom}
                            gradientTo={item.gradientTo}
                            reverse={item.reverse}
                            textColor={item.textColor as "light" | "dark"}
                            imagePosition={item.id === 1 || item.id === 2 || item.id === 4 ? "max-right" : "right"}
                            className="h-[310px]"
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
