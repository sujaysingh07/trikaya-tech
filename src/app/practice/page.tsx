import Banner from "@/src/components/common/CommonBanner";
import practice from "@/public/Practice/practice-bg.jpg"
import PracticeSection from "@/src/components/common/PracticeSection";
export default function Practice() {
    return (<>
        <Banner
            title={"Practice Makes  "}
            highlight={"Perfect"}
            description="Sharpen your skills with hands-on challenges, projects, and real-world problems."
            image={practice}
            primaryButton={{
                label: "Start Learning",
                href: "",
            }}
            secondaryButton={{
                label: 'Explore Labs',
                href: ''
            }}
        />
        <PracticeSection />
    </>
    );
}
