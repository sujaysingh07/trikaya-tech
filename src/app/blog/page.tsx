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
import BlogSection from "@/src/components/common/Blog-section";
export interface LearnerTestimonial {
  id: number;
  name: string;
  rating: string;
  review: string;
  mentor: string;
  image: string;
}

export default function Blog() {
  return (
    <>
      <Banner
        title={"Explore Ideas, Insights & "}
        highlight={"Innovation"}
        description="Stay ahead of the curve with Trikaya — your source for emerging tech stories, tutorials, and verified learning insights from industry experts."
        image="/BlogBanner.png"
        primaryButton={{
          label: "Find a Mentor",
          href: "",
        }}
        secondaryButton={{
          label: "Become a Mentor",
          href: "",
        }}
        isSearchBar={true}
      />
      <BlogSection />
      <CallToAction
        title="Read. Learn. Grow."
        subtitle={
          <>
            Explore stories that help you master new technologies and build
            verified
            <br />
            skills.
          </>
        }
        buttons={[
          {
            label: "Start Reading",
            href: "#",
            variant: "secondary",
          },
        ]}
        showRocketBg={true}
      />
    </>
  );
}
