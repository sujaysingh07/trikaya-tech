import Banner from "@/src/components/common/CommonBanner";
import mentorship from "@/public/images/mentorship.png";
import rewards from "@/public/icons/Rewards.svg";
import problemSolving from "@/public/icons/ProblemSolving.svg";
import NotVerified from "@/public/icons/NotVerified.svg";
import WirelessNetwork from "@/public/icons/WirelessNetwork .svg";

import CardGridSection from "@/src/components/common/CardGridSection";
import TopRated from "@/src/components/common/TopRated";
import Mentorshipprogram from "@/src/components/common/MentorshipProgram";
export default function Mentorship() {
  const mentorCards = [
    {
      icon: rewards,
      title: "Personalized Learning",
      description: "Tailored guidance based on your current goals and skills.",
    },
    {
      icon: problemSolving,
      title: "1:1 or Group Sessions",
      description:
        "Book flexible sessions that suit your schedule and learning pace.",
    },
    {
      icon: NotVerified,
      title: "Career Support",
      description: "Get resume reviews, interview prep, and portfolio advice.",
    },
    {
      icon: WirelessNetwork,
      title: "Verified Mentorship",
      description:
        "Your mentorship sessions are tracked and verifiable through Trikaya Protocol.",
    },
  ];
  return (
    <>
      <Banner
        title={"Learn from Mentors."}
        highlight={"Grow with Guidance."}
        description="Get personalized mentorship from industry professionals in Blockchain, AI, Data Science, and Cybersecurity. Build your skills faster, gain practical insights, and stay ahead of the curve with one-on-one sessions."
        image={mentorship}
        primaryButton={{
          label: "Find a Mentor",
          href: "",
        }}
        secondaryButton={{
          label: "Become a Mentor",
          href: "",
        }}
      />
      <CardGridSection
        heading={"Why Mentorship"}
        highlight="Matters?"
        description="Accelerate your growth with personalized learning experiences from experts who've been where you are."
        cards={mentorCards}
        headingAlign={"left"}
      />
      {/* <section className="py-12">
        <Container>
          <SectionHeader
            title="Why Mentorship "
            highlight="Matters?"
            description="Accelerate your growth with personalized learning experiences from experts who've been where you are."
          />
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {mentorCards.map((skill, index) => (
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
      </section> */}

      <TopRated/>
      <Mentorshipprogram />
    </>
  );
}
