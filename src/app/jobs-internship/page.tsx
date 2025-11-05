import Banner from "@/src/components/common/CommonBanner";
import mentorship from "@/public/images/engineer-girl.jpg";
import Container from "@/src/components/ui/Container";
import Link from "next/link";
import JobCard, { JobCardProps } from "@/src/components/Cards/Job-card";
export default function JobsInternship() {
  const jobData: JobCardProps[] = [
    {
      title: "AI Engineer",
      description:
        "Designs, builds, and deploys intelligent systems that can learn, reason, and make decisions.",
      company: "Tech Corp",
      location: "New York, NY",
      salary: "$120K – $180K",
      type: "Full Time",
      employmentType: "Full Time",
    },
    {
      title: "Data Scientist Intern",
      description:
        "Designs, builds, and deploys intelligent systems that can learn, reason, and make decisions.",
      company: "Tech Corp",
      location: "New York, NY",
      salary: "$40/hr",
      type: "Internship",
      employmentType: "Internship",
    },
    {
      title: "Blockchain Developer",
      description:
        "Designs, builds, and deploys intelligent systems that can learn, reason, and make decisions.",
      company: "Crypto Ventures",
      location: "San Francisco, CA",
      salary: "$140K – $200K",
      type: "Full Time",
      employmentType: "Full Time",
    },
    {
      title: "Cybersecurity Analyst",
      description:
        "Designs, builds, and deploys intelligent systems that can learn, reason, and make decisions.",
      company: "SecureNet",
      location: "Remote",
      salary: "$100K – $150K",
      type: "Full Time",
      employmentType: "Full Time",
    },
  ];

  return (
    <>
      <Banner
        title={"Launch Your   "}
        highlight={"Career"}
        description="Access exclusive job opportunities and internships from top tech companies."
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
            <h2 className="font-bold text-4xl">Job Opportunities</h2>
            <p className="text-base  max-w-2xl ">
              Exclusive job opportunities and internships
            </p>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            {jobData.map((job, index) => (
              <JobCard key={index} {...job}  />
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
