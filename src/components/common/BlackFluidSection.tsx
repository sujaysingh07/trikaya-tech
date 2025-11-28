import CourseCard from "../Cards/Badge-card";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";

export default function BlackFluidSection() {
  const coursesData = [
    {
      id: 1,
      title: "Introduction to Solidity",
      mentor: "Dr. Sarah Chen",
      duration: "4 Weeks",
      level: "Beginner",
      levelColor: "#FFB82E", // yellow
      image: "/images/solidity.jpg",
    },
    {
      id: 2,
      title: "Deep Learning Fundamentals",
      mentor: "Prof. Michael Ross",
      duration: "6 Weeks",
      level: "Intermediate",
      levelColor: "#54FF2E", // green
      image: "/images/deep-learning.png",
    },
    {
      id: 3,
      title: "Data Analytics Mastery",
      mentor: "Emma Williams",
      duration: "5 Weeks",
      level: "Beginner",
      levelColor: "#FFB82E", // yellow
      image: "/images/data-analytics.png",
    },
    {
      id: 4,
      title: "Ethical Hacking Essentials",
      mentor: "James Anderson",
      duration: "8 Weeks",
      level: "Advanced",
      levelColor: "#D8BAFF", // purple
      image: "/images/ethical-hacking.png",
    },
    {
      id: 5,
      title: "Smart Contract Security",
      mentor: "Dr. Sarah Chen",
      duration: "7 Weeks",
      level: "Advanced",
      levelColor: "#D8BAFF", // purple
      image: "/images/smart-contract.png",
    },
    {
      id: 6,
      title: "Generative AI with Python",
      mentor: "Prof. Michael Ross",
      duration: "5 Weeks",
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
