import Container from "../ui/Container";
import learningPath from "@/public/learning-path.jpg";
import production from "@/public/production-labs.png";
import onChain from "@/public/onchain-verification.png";
import AICareer from "@/public/AI-career.png";
import bglayer from "@/public/layer.png"
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

const skills = [
    {
        icon: learningPath,
        title: "Guided Learning Paths",
        description:
            "Follow structured journeys with clear outcomes. Complete real projects and capstones that showcase your skills to employers.",
        tags: ["Outcomes-Focused", "Projects", "Capstones"],
        objectPosition: "left",
    },
    {
        icon: production,
        title: "Production-Grade Labs",
        description:
            "Practice in real-world environments with cloud sandboxes, authentic datasets, and cyber ranges. Deploy before you deploy.",
        tags: ["Sandboxes", "Datasets", "Cyber Ranges"],
        objectPosition: "left top",
    },
    {
        icon: onChain,
        title: "On-Chain Verification",
        description:
            "Every skill you master is verified and sealed on blockchain via Trikaya Protocol. Build a tamper-proof, portable CV.",
        tags: ["Blockchain Verified", "Portable CV", "Trikaya Protocol"],
        objectPosition: "right ",
    },
    {
        icon: AICareer,
        title: "AI Career Match",
        description:
            "Trikaya AI analyzes your skills and recommends the perfect next course or job opportunity in real-time.",
        tags: ["Smart Recommendations", "Course Match", "Job Fit"],
        objectPosition: "left",
    },
];

export default function Opportunity() {
    return (
        <section className="py-16 ">
            <Container>
                {/* Heading */}
                <SectionHeader title={"Features &  "} highlight="Opportunities" description="Everything you need to learn, practice, and land your dream tech role."/>

                <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="relative flex flex-col sm:flex-row justify-between rounded-[30px] text-white overflow-hidden bg-black shadow-lg hover:shadow-xl transition-all duration-300 h-[310px]"
                        >
                            <Image
                                src={bglayer}
                                alt="Layer Background"
                                fill
                                className="absolute inset-0 w-full h-full object-cover  z-10"
                                priority
                            />
                            {/* LEFT: Content */}
                            <div className="relative z-10 flex flex-col  p-6 sm:w-3/4 w-full">
                                <div>
                                    <h3 className="font-bold text-[28px] mb-4">{skill.title}</h3>
                                    <p className="text-[#FFFFFF] text-base font-normal leading-relaxed">
                                        {skill.description}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mt-10 max-w-[279px]">
                                    {skill.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className=" bg-[#EBEAEA] text-[#475569] text-sm font-medium  rounded-full px-3 py-1"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>


                            {/* RIGHT: Image */}
                            <div className="relative sm:w-2/5 w-full h-[180px] sm:h-full">
                                <Image
                                    src={skill.icon}
                                    alt={skill.title}
                                    width={623}
                                    height={310}
                                    className={`absolute inset-0 w-full h-full object-cover grayscale  ${index === 1 ? 'scale-x-[-1]' : ''}`}
                                    style={{ objectPosition: skill.objectPosition || "center" }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-[#0A58F5]/10 via-black/60 to-black/50 sm:rounded-r-2xl"></div>
                                <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
                            </div>

                        </div>
                    ))}
                </div>




            </Container>
        </section>
    );
}
