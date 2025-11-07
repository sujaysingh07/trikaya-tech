import Banner from "@/src/components/common/CommonBanner";
import Engineer from "@/public/images/engineer.jpg"
import CoursesSection from "@/src/components/common/CourseSection";
export default function Learn() {
  return (<>
    <Banner
      title={"Learn. Grow. "}
      highlight={"Lead the Future."}
      description="Explore guided learning paths in Blockchain, AI, Data Science, and Cybersecurity. Trikaya helps you master the right skills with verified certifications and personalized AI recommendations."
      image={Engineer}
      primaryButton={{
          label: "Start Learning",
          href: "",
        }}
        secondaryButton={{
            label:'Explore Labs',
            href:''
        }}
        />
        <CoursesSection/>
        </>
  );
}
