import Container from "../ui/Container";
import machineLearning from "@/public/MachineLearning.svg"
import Blockchain from "@/public/BlockchainTechnology.svg"
import Database from "@/public/DataScience.svg"
import CyberSecurity from "@/public/Cybersecurity.svg"
import SkillCard from "../Cards/SkillCard";


const skills = [
    {
        icon: machineLearning,
        title: "AI & Machine Learning",
        description: "Master neural networks, deep learning, and AI applications with hands-on projects."
    },
    {
        icon: Blockchain,
        title: "Blockchain Technology",
        description: "Build decentralized applications and understand Web3, smart contracts, and crypto."
    },
    {
        icon: Database,
        title: "Data Science",
        description: "Analyze complex datasets, create visualizations, and drive data-driven decisions."
    },
    {
        icon: CyberSecurity,
        title: "Cybersecurity",
        description: "Protect systems, networks, and data with cutting-edge security practices."
    },
];

export default function MasterInDemand() {
    return (
        <section className="py-12">
            <Container>
                {/* Heading and subtext */}
                <div className="flex flex-col gap-3 ">
                    <h2 className="font-bold text-4xl">
                        Master in <span className="text-primary-color">Demand Tech Skills</span>
                    </h2>
                    <p className="text-base  max-w-2xl ">
                        Choose from four cutting-edge technology domains designed to prepare you for the future of work.
                    </p>
                </div>

                {/* Skill Cards */}
         
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skills.map((skill, index) => (
                            <SkillCard
                                key={index}
                                icon={skill.icon}
                                title={skill.title}
                                description={skill.description}
                            />
                        ))}
             
                </div>
            </Container>
        </section>
    );
}
