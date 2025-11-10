import Banner from "@/src/components/common/CommonBanner";
import practice from "@/public/Practice/practice-bg.jpg"
import structuredLearning from "@/public/icons/structured-learning.svg";
import ideaBulb from "@/public/icons/idea-bulb.svg";
import Feedback from "@/public/icons/feedback.svg";
import careerIntegration from "@/public/icons/career-integration.svg";
import PracticeSection from "@/src/components/common/PracticeSection";
import CardGridSection from "@/src/components/common/CardGridSection";
import BlockchainLab from "@/src/components/common/BlockchainLab";
import AILab from "@/src/components/common/AI-lab";
  const LearnCards = [
    {
      icon: structuredLearning,
      title: "Hands-On Labs",
      description:
        "Code, test, and deploy projects in a safe, guided environment.",
    },
    {
      icon: ideaBulb,
      title: "Skill Verification    ",
      description:
        "Each lab submission is sealed on-chain with Trikaya Protocol.",
    },
    {
      icon: Feedback,
      title: "AI Feedback",
      description: "Instant feedback from Trikaya AI to improve performance.",
    },
    {
      icon: careerIntegration,
      title: "Career Integration",
      description:
        "Showcase your practical achievements on your Trikaya-Verified CV.",
    },
  ];
export default function Practice() {
    return (
      <>
        <Banner
          title="Practice. Build. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
          //   title={" &nbsp;&nbsp;&nbsp;&nbsp; "}
          highlight={"Get Certified."}
          description="Trikaya's interactive labs and assignments let you apply what you learn in real-world simulations. Every completed task earns blockchain-verified proof of your skill mastery."
          image={practice}
          primaryButton={{
            label: "Start Practicing",
            href: "",
          }}
          secondaryButton={{
            label: "Explore Labs",
            href: "",
          }}
        />
        <CardGridSection
          heading={"Why Practice on"}
          highlight="Trikaya?"
          description="Build in real environments, track your progress, and earn verified credentials recognized by employers."
          cards={LearnCards}
        />
        <BlockchainLab/>
        <AILab/>
        {/* <PracticeSection /> */}
      </>
    );
}
