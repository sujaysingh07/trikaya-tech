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
import DoubtSection from "./Doubt";
import FaqSection from "./Faqs";

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
    const testimonials = [
        {
            id: 1,
            quote:
                "I chose this program for its structured content and clear learning roadmap, which aligned perfectly with my career goals. The quality of the material and the support from mentors and teaching assistants were excellent.",
            name: "Rahul Singla",
            company: "Oracle",
            icon: "/images/Arav.jpg",
            accent: "#2563eb",
        },
        {
            id: 2,
            quote:
                "I was thrilled with my Coding Ninjas experience! Program enhanced my technical skills, providing invaluable help during interviews. Exceptional faculty, well-structured content covering crucial concepts and projects.",
            name: "Satwika Bhattacharya",
            company: "Goldman Sachs",
            icon: "/images/Diya.jpg",
            accent: "#f97316",
        },
        {
            id: 3,
            quote:
            "Before joining the program, I was trying to learn on my own but often hit a dead end. Coding Ninjas helped me identify exactly what I needed to learn to build strong skills and kickstart my career.",
            name: "Akash Pal",
            company: "British Petroleum",
            icon: "/images/Rohan.jpg",
            accent: "#dc2626",
        },
        {
            id: 4,
            quote:
                "The program was my bridge to a career in a product-based role. The industry-standard curriculum, relevant projects, and strong doubt support prepared me well.",
            name: "Rashid Khan",
            company: "Oracle",
            icon: "/images/Deepak.jpg",
            accent: "#facc15",
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
            <CardGridSection
                heading={"Testimonials"}
                highlight=""
                gridClassName="grid grid-cols-1 md:grid-cols-4 gap-6 py-11"
                description="Hear what our students have to say"
                cards={testimonials}
                cardType="testimonial"
                headingAlign={"left"}
                button="Download"
            />
            <DoubtSection/>
            <FaqSection/>
        </>
    );
}
