import Banner from "@/src/components/common/CommonBanner";
import mentorship from "@/public/images/mentorship.png";
import Container from "@/src/components/ui/Container";
import directMessage from "@/public/icons/direct-message.svg";
import calender from "@/public/icons/calendar.svg";
import person from "@/public/icons/person.svg";
import videoSession from "@/public/icons/video-session.svg";
import SkillCard from "@/src/components/Cards/SkillCard";
import Link from "next/link";
export default function Mentorship() {
  const skills = [
    {
      icon: videoSession,
      title: "1-on-1 Video Sessions",
      description: "Personal guidance from industry experts",
    },
    {
      icon: directMessage,
      title: "Direct Messaging",
      description: "Ask questions anytime, get answers fast",
    },
    {
      icon: calender,
      title: "Flexible Scheduling",
      description: "Book sessions that fit your schedule",
    },
    {
      icon: person,
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
              className="px-6 py-3 bg-primary-color text-white rounded-md text-lg font-semibold hover:bg-primary-color/90 transition"
            >
              Find Your Mentor
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
