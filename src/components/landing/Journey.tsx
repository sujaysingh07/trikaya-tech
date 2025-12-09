import Image from "next/image";
import Container from "../ui/Container";
import SectionHeader from "../common/SectionHeader";

const journeyCards = [
  {
    image: "/structured-learning.jpg",
    title: "Structured Learning",
    description: "Follow curated paths designed by industry experts.",
  },
  {
    image: "/hands-on-practice.jpg",
    title: "Hands-on Practice",
    description: "Build real projects and solve coding challenges.",
  },
  {
    image: "/mentorship.jpg",
    title: "1-on-1 Mentorship",
    description: "Get personalized guidance from experienced professionals.",
  },
  {
    image: "/arena.jpg",
    title: "Compete in Arena",
    description: "Test your skills in competitive challenges.",
  },
  {
    image: "/career-support.jpg",
    title: "Career Support",
    description: "Access job opportunities and career guidance.",
  },
  {
    image: "/industry-projects.jpg",
    title: "Industry Projects",
    description: "Work on real-world projects from partner companies.",
  },
];

export default function Journey() {
  return (
    <section className="mb-11">
      <Container>
        {/* Heading + Subtext */}
        <SectionHeader
          title={"Your Complete "}
          highlight="Learning Journey"
          description="From beginner to job-ready professional - we've got everything you need."
        />

        {/* Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-[35px] sm:grid-cols-2 lg:grid-cols-3">
          {journeyCards.map((card, index) => (
            <div
              key={index}
              className="hover:border-primary-color flex flex-col overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-sm transition-all duration-200 ease-in-out hover:shadow-md"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="mb-1 text-[22px] font-semibold text-[#03061E]">
                  {card.title}
                </h3>
                <p className="text-base text-[#666666]">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
