import Banner from "@/src/components/common/CommonBanner";
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
