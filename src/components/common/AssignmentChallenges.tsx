import { Icons } from "@/public/icons/icon";
import GradientImageCardTwo from "../Cards/GradientImageCardTwo";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";
import Link from "next/link";

const opportunities = [
  {
    id: 1,
    bgImage: "/images/Blockchain.png",
    title: "Blockchain Assignments",
    description: "Smart contract development and blockchain architecture",
    tasks: "24 Tasks",
    gradientFrom: "#fcfcfd",
    gradientTo: "#d5d5e2",
    textColor: "light",
    buttonLabel: "Start Assignment",
  },
  {
    id: 2,
    bgImage: "/AI-assignment.jpg",
    title: "AI Assignments",
    description: "Machine learning models and neural network projects",
    tasks: "30 Tasks",
    gradientFrom: "#fcfcfd",
    gradientTo: "#d5d5e2",
    textColor: "light",
    reverse: false,
    buttonLabel: "Start Assignment",
  },
  {
    id: 3,
    title: "Data Science Assignments",
    bgImage: "/data-science.jpg",
    description: "Data analysis, visualization, and predictive modeling",
    tasks: "28 Tasks",
    gradientFrom: "#fcfcfd",
    gradientTo: "#d5d5e2",
    textColor: "dark",
    buttonLabel: "Start Assignment",
  },
  {
    id: 4,
    bgImage: "/cybersecurity.jpg",
    title: "Cybersecurity Tasks",
    description: "Security audits, penetration testing, and threat analysis",
    tasks: "18 Tasks",
    gradientFrom: "#F3F4F6",
    gradientTo: "#d5d5e2",
    textColor: "light",
    buttonLabel: "Start Assignment",
    reverse: false,
  },
];

export default function AssignmentChallenges() {
  return (
    <section className="bg-[#F2F2F2] py-11">
      <Container>
        <SectionHeader
          title="Assignments & "
          highlight=" Challenges"
          description="Strengthen your portfolio with guided assignments linked to real-world projects."
          align="left"
        />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-x-[46px] gap-y-[27px] pt-[46px] sm:grid-cols-2">
          {opportunities.map((item) => (
            <GradientImageCardTwo
              key={item.id}
              title={item.title}
              description={item.description}
              buttonLabel={item.buttonLabel}
              buttonLink="#"
              task={item.tasks}
              bgImage={item.bgImage}
              gradientFrom={item.gradientFrom}
              gradientTo={item.gradientTo}
              reverse={item.reverse}
              textColor={item.textColor as "light" | "dark"}
              className="h-[310px]"
            />
          ))}
        </div>

        <div className="bg-primary-color mt-11 flex flex-col items-start justify-between gap-6 rounded-[30px] p-6 sm:p-8 md:flex-row md:items-center md:gap-0 md:p-10">
          {/* LEFT SECTION */}
          <div className="flex items-start gap-4 sm:gap-6 md:gap-8">
            <Icons variant="ProgressCheck" className="min-w-10" />

            <div className="text-white">
              <p className="text-[26px] leading-tight font-bold sm:text-[32px] md:text-[38px]">
                Track your progress
              </p>
              <span className="text-sm font-medium sm:text-base">
                Complete assignments to level up your profile
              </span>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="flex w-full flex-col items-center gap-3.5 sm:flex-row md:w-auto">
            <Link
              href={"#"}
              className="w-full rounded-md bg-white px-[30px] py-4 text-center text-[16px] font-bold text-black transition sm:w-auto sm:py-5 sm:text-[18px]"
            >
              Earn KP
            </Link>
            <div className="hidden md:block">
              <Icons variant="RightArrow" className="" />
            </div>

            <Link
              href={"#"}
              className="w-full rounded-md bg-white px-[30px] py-4 text-center text-[16px] font-bold text-black transition sm:w-auto sm:py-5 sm:text-[18px]"
            >
              Unlock Trikaya Badges
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
