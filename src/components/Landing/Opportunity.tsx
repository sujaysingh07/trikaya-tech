import Container from "../ui/Container";
import learningPath from "@/public/learning-path.jpg";
import production from "@/public/production-labs.png";
import onChain from "@/public/onchain-verification.png";
import AICareer from "@/public/AI-career.png";
import bglayer from "@/public/layer.png";
import Image from "next/image";
import SectionHeader from "../common/SectionHeader";

const skills = [
  {
    icon: learningPath,
    title: "Guided Learning Paths",
    description:
      "Follow structured journeys with clear outcomes. Complete real projects and capstones that showcase your skills to employers.",
    tags: ["Outcomes-Focused", "Projects", "Capstones"],
    objectPosition: "left",
  },
  {
    icon: production,
    title: "Production-Grade Labs",
    description:
      "Practice in real-world environments with cloud sandboxes, authentic datasets, and cyber ranges. Deploy before you deploy.",
    tags: ["Sandboxes", "Datasets", "Cyber Ranges"],
    objectPosition: "left top",
  },
  {
    icon: onChain,
    title: "On-Chain Verification",
    description:
      "Every skill you master is verified and sealed on blockchain via Trikaya Protocol. Build a tamper-proof, portable CV.",
    tags: ["Blockchain Verified", "Portable CV", "Trikaya Protocol"],
    objectPosition: "right ",
  },
  {
    icon: AICareer,
    title: "AI Career Match",
    description:
      "Trikaya AI analyzes your skills and recommends the perfect next course or job opportunity in real-time.",
    tags: ["Smart Recommendations", "Course Match", "Job Fit"],
    objectPosition: "left",
  },
];

export default function Opportunity() {
  return (
    <section className="mb-11">
      <Container>
        {/* Heading */}
        <SectionHeader
          title={"Features &  "}
          highlight="Opportunities"
          description="Everything you need to learn, practice, and land your dream tech role."
        />

        <div className="grid grid-cols-1 gap-6 pt-10 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative flex h-auto flex-col justify-between overflow-hidden rounded-[30px] bg-black text-white shadow-lg transition-all duration-300 hover:shadow-xl sm:flex-row md:h-[310px]"
            >
              <Image
                src={bglayer}
                alt="Layer Background"
                fill
                className="absolute inset-0 z-10 h-full w-full object-cover"
                priority
              />
              {/* LEFT: Content */}
              <div className="relative z-10 flex w-full flex-col p-6 sm:w-3/4">
                <div>
                  <h3 className="mb-4 text-[28px] font-bold">{skill.title}</h3>
                  <p className="text-base leading-relaxed font-normal text-[#FFFFFF]">
                    {skill.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="mt-10 flex max-w-[279px] flex-wrap gap-2">
                  {skill.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#EBEAEA] px-3 py-1 text-sm font-medium text-[#475569]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* RIGHT: Image */}
              <div className="relative hidden h-[180px] w-full sm:h-full sm:w-2/5 md:block">
                <Image
                  src={skill.icon}
                  alt={skill.title}
                  width={623}
                  height={310}
                  className={`absolute inset-0 h-full w-full object-cover grayscale ${index === 1 ? "scale-x-[-1]" : ""}`}
                  style={{ objectPosition: skill.objectPosition || "center" }}
                />
                <div className="from-primary-color/10 absolute inset-0 bg-linear-to-l via-black/60 to-black/50 sm:rounded-r-2xl"></div>
                <div className="absolute top-0 bottom-0 left-0 w-16 bg-linear-to-r from-black via-black/80 to-transparent"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
