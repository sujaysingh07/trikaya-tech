import Banner from "@/src/components/common/CommonBanner";
import mentorship from "@/public/images/mentorship.png";
import Container from "@/src/components/ui/Container";
import Blockchain from "@/public/BlockchainTechnology.svg";
import Database from "@/public/DataScience.svg";
import CyberSecurity from "@/public/Cybersecurity.svg";
import machineLearning from "@/public/MachineLearning.svg";
import SkillCard from "@/src/components/Cards/SkillCard";
import Link from "next/link";
export default function Mentorship() {
  const skills = [
    {
      icon: machineLearning,
      title: "1-on-1 Video Sessions",
      description: "Personal guidance from industry experts",
    },
    {
      icon: Blockchain,
      title: "Direct Messaging",
      description: "Ask questions anytime, get answers fast",
    },
    {
      icon: Database,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule",
    },
    {
      icon: CyberSecurity,
      title: "Career Guidance",
      description: "Resume reviews and interview preparation",
    },
  ];
  return (
    <>
      <Banner
        title={"Learn from the  "}
        highlight={"Best"}
        description="Get personalized guidance from 500+ expert mentors working at top tech companies."
        image={mentorship}
        primaryButton={{
          label: "Start Learning",
          href: "",
        }}
        secondaryButton={{
          label: "Explore Labs",
          href: "",
        }}
      />
      <section className="py-12">
        <Container>
          <div className="flex flex-col gap-3 ">
            <h2 className="font-bold text-4xl">Get Personalized Guidance</h2>
            <p className="text-base  max-w-2xl ">
              Choose from four tech domains built for the future of work.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                title={skill.title}
                description={skill.description}
              />
            ))}
          </div>
          <div className="flex justify-center my-[50px]">
            <Link
              href="#"
              className=" mx-auto px-[30px] text-center max-w-[226px] justify-center bg-primary-color text-white font-medium text-sm py-2.5 rounded-md hover:bg-[#0048d9] transition"
            >
              Find Your Mentor
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
