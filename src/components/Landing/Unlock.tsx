import hackathon from "@/public/icons/hackathon.svg";
import quests from "@/public/quests.svg";
import internships from "@/public/icons/internships.svg";
import mentorship from "@/public/mentorship.svg";
import CardGridSection from "../common/CardGridSection";

const journeyCards = [
    { icon: hackathon, title: "Hackathons", description: "Compete & win" },
    { icon: quests, title: "Quests", description: "Earn rewards" },
    { icon: internships, title: "Internships", description: "Real experience" },
    { icon: mentorship, title: "Mentorship", description: "Expert guidance" },
];

export default function Unlock() {
    return (
        <CardGridSection
            heading="Unlock More"
            highlight="Opportunities"
            cards={journeyCards}
            containerClassName="pb-28 md:pb-36 lg:pb-[300px]"
        />
    );
}
