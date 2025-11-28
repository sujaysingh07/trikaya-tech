import Banner from "@/src/components/common/CommonBanner";
import mentorship from "@/public/images/mentorship.png";
import rewards from "@/public/icons/Rewards.svg";
import problemSolving from "@/public/icons/ProblemSolving.svg";
import NotVerified from "@/public/icons/NotVerified.svg";
import WirelessNetwork from "@/public/icons/WirelessNetwork .svg";
import mentor from "@/public/images/mentors/Mentor.jpg";
import CardGridSection from "@/src/components/common/CardGridSection";
import TopRated from "@/src/components/common/TopRated";
import Mentorshipprogram from "@/src/components/common/MentorshipProgram";
import Container from "@/src/components/ui/Container";
import FeatureSplitCardTwo from "@/src/components/common/ScaleGridTwo";
import SectionHeader from "@/src/components/common/SectionHeader";
import SkillCard from "@/src/components/Cards/SkillCard";
import Link from "next/link";
import LearnerCard from "@/src/components/Cards/Learner-card";
import CallToAction from "@/src/components/common/CallToAction";
export interface LearnerTestimonial {
  id: number;
  name: string;
  rating: string;
  review: string;
  mentor: string;
  image: string;
}

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
  const learnerTestimonials: LearnerTestimonial[] = [
    {
      id: 1,
      name: "Alex Kumar",
      rating: "4.8/5",
      review:
        "My mentor helped me land my dream job at a top tech company. The personalised guidance made all the difference!",
      mentor: "Sarah Johnson, AI Specialist",
      image: "/images/mentors/learner1.png",
    },
    {
      id: 2,
      name: "Maria Garcia",
      rating: "4.8/5",
      review:
        "The project review sessions gave me insights I couldn't find anywhere else. My portfolio improved dramatically.",
      mentor: "Rahul Singh, Blockchain Architect",
      image: "/images/mentors/learner2.png",
    },
    {
      id: 3,
      name: "James Wilson",
      rating: "4.8/5",
      review:
        "Trikaya mentorship accelerated my learning by months. The practical advice was invaluable for my career transition.",
      mentor: "Emily Chen, Data Science Lead",
      image: "/images/mentors/learner3.png",
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
        containerClassName="my-11"
        description="Accelerate your growth with personalized learning experiences from experts who've been where you are."
        cards={mentorCards}
        headingAlign={"left"}
      />

      <TopRated />
      <Mentorshipprogram />
      <Container>
        <FeatureSplitCardTwo
          title="How Mentor Profiles Work"
          description="Each mentor profile showcases expertise, session format, reviews, and availability."
          buttonLabel="Explore All Mentors"
          buttonLink="#"
          variant="featured"
          image={mentor}
          reverse={false} // image on left
          darkMode={false}
        />
        <SectionHeader
          title="What Learners "
          highlight="Say"
          className="mt-11 md:mt-0"
          description="Hear from learners who grew their careers with Trikaya mentorship."
        />

        <div className="my-11 grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {learnerTestimonials.map((item) => (
            <LearnerCard key={item.id} {...item} />
          ))}
        </div>
      </Container>
      <CallToAction
        title="Share Your Knowledge. Become a Mentor."
        subtitle={
          <>
            Empower the next generation of tech professionals. Join
            Trikaya&apos;s verified
            <br />
            mentorship network and guide learners in your domain.
          </>
        }
        buttons={[
          {
            label: "Apply to Become a Mentor",
            href: "#",
            variant: "primary",
          },
          { label: "Learn How It Works", href: "#", variant: "secondary" },
        ]}
        showRocketBg={true}
      />
    </>
  );
}
