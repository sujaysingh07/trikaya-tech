"use client";
import { Icons } from "@/public/icons/icon";
import GradientImageCardTwo from "../Cards/GradientImageCardTwo";
import Container from "../ui/Container";
import SectionHeader from "./SectionHeader";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

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
    bgImage: "/images/AI-assignment.jpg",
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
    bgImage: "/images/data-science.jpg",
    description: "Data analysis, visualization, and predictive modeling",
    tasks: "28 Tasks",
    gradientFrom: "#fcfcfd",
    gradientTo: "#d5d5e2",
    textColor: "dark",
    buttonLabel: "Start Assignment",
  },
  {
    id: 4,
    bgImage: "/images/cybersecurity.jpg",
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
    <section className="py-16 bg-[#F2F2F2]">
      <Container>
        <SectionHeader
          title="Assignments & "
          highlight=" Challenges"
          description="Strengthen your portfolio with guided assignments linked to real-world projects."
          align="left"
        />

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-[46px]">
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
              imagePosition={
                item.id === 1 || item.id === 2 || item.id === 4
                  ? "max-right"
                  : "max-right"
              }
              className="h-[310px]"
            />
          ))}
        </div>

        <div className="bg-primary-color p-10  mt-16  rounded-[30px] flex justify-between items-center ">
          <div className="flex gap-8">
            <Icons variant="ProgressCheck" />
            <div className="text-[#FFFFFF]">
              <p className="text-[38px] font-bold">Track your progress</p>
              <span className="font-medium text-base">
                Complete assignments to level up your profile
              </span>
            </div>
          </div>
          <div className=" flex gap-3.5 items-center">
            <Link
              href={"#"}
              className="mt-auto text-center bg-white px-[30px] text-[18px] text-black font-bold rounded-md py-5  transition"
            >
              Earn XP
            </Link>
            <Icons variant="RightArrow" />
            <Link
              href={"#"}
              className="mt-auto text-center bg-white px-[30px] text-[18px] text-black font-bold rounded-md py-5  transition"
            >
              Unlock Trikaya Badges
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
