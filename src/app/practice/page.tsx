import Banner from "@/src/components/common/CommonBanner";
import practice from "@/public/Practice/practice-bg.jpg";
import structuredLearning from "@/public/icons/structured-learning.svg";
import ideaBulb from "@/public/icons/idea-bulb.svg";
import Feedback from "@/public/icons/feedback.svg";
import careerIntegration from "@/public/icons/career-integration.svg";
import CardGridSection from "@/src/components/common/CardGridSection";
import BlockchainLab from "@/src/components/common/BlockchainLab";
import AILab from "@/src/components/common/AI-lab";
import AssignmentChallenges from "@/src/components/common/AssignmentChallenges";
import Leaderboard from "@/src/components/common/Leaderboard";
import CallToAction from "@/src/components/common/CallToAction";
import InviteCard from "@/src/components/common/Invite";
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
        title={
          <>
            {/* Mobile title → no spaces */}
            <span className="block md:hidden">Practice. Build.</span>

            {/* Desktop title → keep spaces */}
            <span
              className="hidden md:block"
              dangerouslySetInnerHTML={{
                __html: "Practice. Build.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ",
              }}
            />
          </>
        }
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
        containerClassName="my-11"
        description="Build in real environments, track your progress, and earn verified credentials recognized by employers."
        cards={LearnCards}
      />
      <BlockchainLab />
      <AILab />
      <AssignmentChallenges />
      <Leaderboard />
      <div className="py-11">
        <InviteCard
          amount="₹500"
          amountSub="per successful referral"
          ctaHref="/referrals"
          features={[
            { label: "Unlimited referrals" },
            { label: "Instant credit" },
          ]}
        />
      </div>
      <CallToAction
        title="Start Practicing. Get Blockchain-Verified."
        subtitle={
          <>
            Join thousands of learners building real skills through
            Trikaya&apos;s Blockchain <br />
            and AI Labs.
          </>
        }
        buttons={[{ label: "Join Now", href: "#", variant: "secondary" }]}
        showRocketBg={true}
      />
    </>
  );
}
