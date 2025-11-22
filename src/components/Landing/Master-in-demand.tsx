import Container from "../ui/Container";
import machineLearning from "@/public/icons/MachineLearning.svg"
import Blockchain from "@/public/icons/BlockchainTechnology.svg"
import Database from "@/public/icons/DataScience.svg"
import CyberSecurity from "@/public/icons/Cybersecurity.svg"
import SkillCard from "../Cards/SkillCard";
import SectionHeader from "../common/SectionHeader";


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
        <section className="mb-11">
            <Container>
                {/* Heading and subtext */}
                <SectionHeader title={"Master in -Demand "} highlight="Tech Skills" description="Choose from four cutting-edge technology domains designed to prepare you for the future of work."/>

                {/* Skill Cards */}
         
                    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
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
