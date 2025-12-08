import CourseCard from "../cards/CourseCard";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";

export default function BlackFluidSection() {
  const coursesData = [
    {
      id: 1,
      title: "Blockchain Technology Explained",
      mentor: "Tekta AI",
      duration: "2 Hours",
      level: "Beginner",
      levelColor: "#FFB82E", // yellow
      image: "/images/solidity.jpg",
    },
    {
      id: 2,
      title: "Blockchain Full Course",
      mentor: "Edureka",
      duration: "4 hours",
      level: "Intermediate",
      levelColor: "#54FF2E", // green
      image: "/images/deep-learning.png",
    },
    {
      id: 3,
      title: "Ethereum Basics & EVM Explained",
      mentor: "Trikaya",
      duration: "75 minutes",
      level: "Beginner",
      levelColor: "#FFB82E", // yellow
      image: "/images/data-analytics.png",
    },
    {
      id: 4,
      title: "Introduction to Decentralized Storage ",
      mentor: "Trikaya",
      duration: "140 minutes",
      level: "Advanced",
      levelColor: "#D8BAFF", // purple
      image: "/images/ethical-hacking.png",
    },
    {
      id: 5,
      title: "Deep Learning Fundamentsals",
      mentor: "Trikaya",
      duration: "2 hours",
      level: "Advanced",
      levelColor: "#D8BAFF", // purple
      image: "/images/smart-contract.png",
    },
    {
      id: 6,
      title: "Data Analytics Mastery",
      mentor: "Trikaya",
      duration: "2 hours",
      level: "Intermediate",
      levelColor: "#54FF2E", // green
      image: "/images/generative-ai.png",
    },
  ];

  return (
    <section className="bg-black py-12">
      <Container>
        <SectionHeader
          title={"Top Learning "}
          theme="dark"
          highlight="Programs"
          description="Curated by Trikaya mentors and aligned with industry needs."
        />
        <div className="mt-10 grid grid-cols-1 gap-[35px] sm:grid-cols-2 lg:grid-cols-3">
          {coursesData.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </Container>{" "}
    </section>
  );
}
