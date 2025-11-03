import Banner from "@/src/components/common/CommonBanner";
import Engineer from "@/public/images/engineer.jpg"
import CoursesSection from "@/src/components/common/CourseSection";
export default function Learn() {
  return (<>
    <Banner
      title={"Learn "}
      highlight={"at Your Own Pace"}
      description="Industry-vetted courses designed by experts. From beginner fundamentals to advanced specializations."
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
