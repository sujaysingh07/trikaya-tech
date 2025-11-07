import Banner from "@/src/components/common/CommonBanner";
import Engineer from "@/public/images/engineer.jpg";
import CardGridSection from "@/src/components/common/CardGridSection";
import structuredLearning from "@/public/icons/structured-learning.svg";
import ideaBulb from "@/public/icons/idea-bulb.svg";
import certificate from "@/public/icons/Certificate.svg";
import machineLearning from "@/public/icons/MachineLearning.svg";
import PracticeSection from "@/src/components/common/PracticeSection";
import BlackFluidSection from "@/src/components/common/BlackFluidSection";
import FeatureSplitCard from "@/src/components/common/ScaleGrid";
import certifiedImage from "@/public/images/certification-completeion.png"
import Container from "@/src/components/ui/Container";
export default function Learn() {
  const LearnCards = [
    { icon: structuredLearning, title: "Structured Learning Path", description: "Step-by-step guidance designed by industry mentors." },
    { icon: ideaBulb, title: "Real Projects & Labs", description: "Apply concepts instantly in integrated Blockchain & AI Labs." },
    { icon: certificate, title: "Verified Certificates", description: "Analyze complex datasets, create visualizations, and drive data-driven decisions." },
    { icon: machineLearning, title: "AI Career Guidance", description: "Get personalized course and job suggestions from Trikaya AI." },
  ];
  return (
    <>
      <Banner
        title={"Learn. Grow. "}
        highlight={"Lead the Future."}
        description="Explore guided learning paths in Blockchain, AI, Data Science, and Cybersecurity. Trikaya helps you master the right skills with verified certifications and personalized AI recommendations."
        image={Engineer}
        primaryButton={{
          label: "Start Learning",
          href: "",
        }}
        secondaryButton={{
          label: "Explore Labs",
          href: "",
        }}
      />
      <CardGridSection
        heading={"Why Learn with "}
        highlight="Trikaya?"
        description="Learning at Trikaya isn't just about completing courses — it's about proving your skills, applying them in real projects, and being recognized by employers."
        cards={LearnCards}
      />
      <PracticeSection />
      <BlackFluidSection />
      <Container className="py-16">
        <FeatureSplitCard
          title="Earn Blockchain-Verified Certificates"
          description="Every course completion earns you a certificate validated through Trikaya Protocol. Share it on LinkedIn, showcase it to employers, and add it to your Trikaya-Verified CV."
          buttonLabel="See Sample Certificate"
          buttonLink="#"
          image={certifiedImage}
          reverse={false} // image on left
          darkMode={false}
        />
      </Container>
    </>
  );
}
