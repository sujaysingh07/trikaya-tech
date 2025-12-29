import Banner from "@/src/components/common/CommonBanner";
import mentor from "@/public/images/mentors/Mentor.jpg";
import CallToAction from "@/src/components/common/CallToAction";
import FeatureSplitCardTwo from "@/src/components/common/ScaleGridTwo";
import Container from "@/src/components/ui/Container";
import CardGridSection from "@/src/components/common/CardGridSection";
import GenericButton from "@/src/components/common/GenericButton";
import { generatePageMetadata } from "@/src/lib/generatePageMetadata";
import { generateCanonical } from "@/src/lib/utils";
export const metadata = generatePageMetadata({
  title:
    "  About Trikaya | Our Mission for Fair Tech Hiring",
  description: 'Learn about our mission to create a fair, skills- based ecosystem for the next generation of AI, Blockchain, and Cybersecurity professionals.',
  canonical: generateCanonical("/about"),
});
export default function About() {
  const coreValuesCards = [
    {
      icon: "/icons/mission.svg",
      title: "Mission",
      description:
        "Democratize access to world-class tech education and empower the next generation of innovators.",
    },
    {
      icon: "/icons/vision.svg",
      title: "Vision",
      description:
        "Become the global leader in future-focused tech education and career development.",
    },
    {
      icon: "/icons/Excellence.svg",
      title: "Excellence",
      description:
        "Maintain the highest standards in curriculum, mentorship, and student success.",
    },
    {
      icon: "/icons/handshake.svg",
      title: "Community",
      description:
        "Foster a supportive, collaborative environment where learners thrive together.",
    },
  ];
  return (
    <>
      <Banner
        title={"About"}
        highlight={"Trikaya"}
        description="We're on a mission to transform tech education and make cutting-edge skills accessible to everyone."
        image="/about.png"
        primaryButton={{
          label: "Join Our Team",
          href: "",
        }}
        isSearchBar={false}
      />
      <Container>
        <div className="my-11 w-full pt-5">
          <FeatureSplitCardTwo
            title="Our Story"
            description={<>Founded in 2020, Trikaya was born from a simple observation: traditional education wasn&apos;t keeping pace with the rapidly evolving tech industry. We saw talented individuals struggling to break into emerging fields like Blockchain, AI, Data Science, and Cybersecurity due to lack of accessible, hands-on learning resources.
            <br /> <br />
             Today, we&apos;ve grown into a thriving platform serving 50,000+ learners worldwide, with 500+ expert mentors and partnerships with leading tech companies. Our comprehensive approach combines structured courses, hands-on practice, competitive challenges, personalized mentorship, and direct career pathways.</>}
            buttonLabel=""
            buttonLink="#"
            image={mentor}
            variant="about"
            reverse={false}
            darkMode={false}
          />
        </div>
      </Container>
      <CardGridSection
        heading={""}
        highlight=""
        containerClassName="my-11 pt-11"
        description=""
        cards={coreValuesCards}
        headingAlign={"left"}
      />
      <GenericButton
        label="Join Our Team"
        href="#"
        variant="primary"
        align="center"
      />
      <CallToAction
        title="Read. Learn. Grow."
        subtitle={
          <>
            Explore stories that help you master new technologies and build
            verified
            <br />
            skills.
          </>
        }
        buttons={[
          {
            label: "Start Reading",
            href: "#",
            variant: "secondary",
          },
        ]}
        showRocketBg={true}
      />
    </>
  );
}
