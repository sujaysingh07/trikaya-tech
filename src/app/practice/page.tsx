import Banner from "@/src/components/common/CommonBanner";
import practice from "@/public/Practice/practice-bg.jpg"
import PracticeSection from "@/src/components/common/PracticeSection";
export default function Practice() {
    return (<>
        <Banner
            title={"Learn "}
            highlight={"at Your Own Pace"}
            description="Industry-vetted courses designed by experts. From beginner fundamentals to advanced specializations."
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
