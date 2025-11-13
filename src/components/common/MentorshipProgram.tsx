
import ProgramFeatureCard from "../Cards/ProgramFeatureCard";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";

export default function Mentorshipprogram() {
     const programFeatures = [
      {
        icon: "/icons/career-program.svg",
        title: "Career Accelerator Program",
        description:
          "Get personalized career planning, resume help, and interview preparation.",
      },
      {
        icon: "/icons/project-review.svg",
        title: "Project Review Sessions",
        description:
          "Present your work to a mentor and receive detailed improvement feedback.",
      },
      {
        icon: "/icons/industryConnect.svg",
        title: "Industry Connect Track",
        description:
          "Network with professionals and learn real-world workflows.",
      },
      {
        icon: "/icons/Research.svg",
        title: "Research Mentorship",
        description:
          "Work on applied AI or blockchain research under mentor supervision.",
      },
    ];

  return (
    <Container>
      <SectionHeader
        title="Mentorship Programs  "
        highlight="Designed for You"
        description="Join focused mentorship tracks that help you master skills through weekly sessions and project reviews."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {programFeatures.map((item, idx) => (
          <ProgramFeatureCard key={idx} {...item} />
        ))}
      </div>
    </Container>
  );
}