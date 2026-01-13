import Banner from "@/src/components/common/CommonBanner";
import Container from "@/src/components/ui/Container";
import { Download } from "lucide-react";
import CertificationHighlight from "./CertificationHighlight";
import CardGridSection from "@/src/components/common/CardGridSection";
import BrochureCTA from "./BrochureCTA";
import SectionHeader from "@/src/components/common/SectionHeader";
import AccordionSection from "./AccordianSection";
import IndustryTools from "./IndustryTools";
import FacultySection from "./FacultySection";

export default function CertificationComponent() {
    const programHighlights = [
        {
            icon: "/icons/PersonalizedLearning.svg",
            title: "Personalised learning paths",
        },
        {
            icon: "/icons/ProjectsAcrossDomains.svg",
            title: "30+ projects across domains",
        },
        {
            icon: "/icons/CapstoneProject.svg",
            title: "Capstone Project of your choice",
        },
        {
            icon: "/icons/MLPortfolio.svg",
            title: "A standout ML Engineer’s portfolio",
        },
        {
            icon: "/icons/CareerSupport.svg",
            title: "Personalised Career Support",
        },
        {
            icon: "/icons/MicrosoftCertification.svg",
            title: "Certification by Microsoft",
        },
    ];

    return (
        <>
            <Banner
                title={"Executive Diploma in Machine Learning  "}
                highlight={"and AI from IIITB"}
                description={
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            Enroll into India&apos;s pioneering Online Machine Learning
                            Program; learn from the latest 2025 curriculum.
                        </li>
                        <li>
                            Join an alumni network of ML Experts at Amazon, HSBC, ICICI,
                            Kotak, Microsoft, Jio Digital, Lenskart, Swiggy, and more.
                        </li>
                    </ul>
                }
                primaryButton={{
                    label: "Apply Now",
                    href: "",
                }}
                secondaryButton={{
                    label: "Syllabus",
                    href: "",
                }}
                IconTwo={<Download />}
                image="/certification-bg.png"
            />

            <CertificationHighlight />

            <CardGridSection
                heading={"Custom-made for every domain "}
                highlight=""
                gridClassName="grid grid-cols-1 md:grid-cols-3 gap-6 py-11"
                description="Key Features: Executive Diploma in Machine Learning & AI"
                cards={programHighlights}
                cardType="certification"
                headingAlign={"left"}
                button="Download"
            />
            <BrochureCTA />
            <Container >
                <SectionHeader className="mb-11" title="Experience an all-new 2025 curriculum" description="Curriculum: Executive Diploma in Machine Learning & AI" />
                <div className="my-11">
                <AccordionSection/>
                </div>
                <div className="my-11">
                    <IndustryTools/>
                </div>
                <div className="my-11">
                    <FacultySection/>

                </div>
            </Container>
        </>
    );
}
