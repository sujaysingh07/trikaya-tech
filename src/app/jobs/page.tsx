import Banner from "@/src/components/common/CommonBanner";
import mentorship from "@/public/images/engineer-girl.png";
import JobCard, { JobCardProps } from "@/src/components/Cards/Job-card";
import CardGridSection from "@/src/components/common/CardGridSection";
import rewards from "@/public/icons/AiBrain.svg";
import problemSolving from "@/public/icons/Star-employee.svg";
import NotVerified from "@/public/icons/SecurityCv.svg";
import WirelessNetwork from "@/public/icons/BusinessTips.svg";
import Container from "@/src/components/ui/Container";
import FeatureSplitCardThree from "@/src/components/common/ScaleGridThree";
import certifiedImage from "@/public/Ai-bg.png";
import GenericBanner from "@/src/components/common/GenericBanner";
import { Icons } from "@/public/icons/icon";
import SectionHeader from "@/src/components/common/SectionHeader";
import GenericButton from "@/src/components/common/GenericButton";
import GenericProfileCard from "@/src/components/Cards/Generic-profile-card";
import CallToAction from "@/src/components/common/CallToAction";
export default function JobsInternship() {
  const mentorCards = [
    {
      icon: rewards,
      title: "AI Career Match",
      description:
        "Instantly get job and internship suggestions that fit your verified skills.",
    },
    {
      icon: NotVerified,
      title: "Trikaya-Verified CV",
      description:
        "Each skill, project, and certificate authenticated on blockchain.",
    },
    {
      icon: problemSolving,
      title: "Top Industry Employers",
      description: "Access openings from verified hiring partners.",
    },
    {
      icon: WirelessNetwork,
      title: "Career Growth Insights",
      description: "Personalized suggestions to upskill and match your goals.",
    },
  ];

  const jobData: JobCardProps[] = [
    {
      title: "AI Engineer Intern",
      company: "TechNova Solutions",
      location: "Remote",
      salary: "$50K – $70K",
      type: "0–2 yrs",
      employmentType: "Internship",
    },
    {
      title: "Blockchain Developer",
      company: "CryptoChain Labs",
      location: "Bangalore",
      salary: "$80K – $120K",
      type: "3–5 yrs",
      employmentType: "Full-Time",
    },
    {
      title: "Data Scientist",
      company: "DataVision Inc",
      location: "Remote",
      salary: "$60K – $90K",
      type: "0–2 yrs",
      employmentType: "Full-Time",
    },
    {
      title: "Cybersecurity Analyst",
      company: "SecureNet Systems",
      location: "Mumbai",
      salary: "$70K – $100K",
      type: "3–5 yrs",
      employmentType: "Full-Time",
    },
    {
      title: "Machine Learning Intern",
      company: "AI Dynamics",
      location: "Remote",
      salary: "$40K – $60K",
      type: "0–2 yrs",
      employmentType: "Internship",
    },
    {
      title: "Smart Contract Developer",
      company: "Web3. Ventures",
      location: "Delhi",
      salary: "$90K – $130K",
      type: "3–5 yrs",
      employmentType: "Full-Time",
    },
  ];

  const ImpressCards = [
    {
      id: 1,
      title: "Role-Based Question Banks",
      description:
        "Access curated questions for AI, Blockchain, and Data roles.",
      icon: "/icons/question-bank.svg", // or a React icon component
    },
    {
      id: 2,
      title: "Mentor-Led Mock Interviews",
      description: "Get personalized feedback from industry mentors.",
      icon: "/icons/mock-interview.svg",
    },
    {
      id: 3,
      title: "Assessment Labs",
      description:
        "Prove your practical skills through live problem-solving labs.",
      icon: "/icons/assessment-lab.svg",
    },
  ];
  const companyCards = [
    { icon: "/icons/assessment-lab.svg", title: "Company" },
    { icon: "/icons/assessment-lab.svg", title: "Company" },
    { icon: "/icons/assessment-lab.svg", title: "Company" },
    { icon: "/icons/assessment-lab.svg", title: "Company" },
    { icon: "/icons/assessment-lab.svg", title: "Company" },
    { icon: "/icons/assessment-lab.svg", title: "Company" },
    { icon: "/icons/assessment-lab.svg", title: "Company" },
    { icon: "/icons/assessment-lab.svg", title: "Company" },
  ];

  const experts = [
    {
      name: "Arjun Patel",
      title: "AI Engineer at Microsoft",
      quote:
        "Completed Blockchain Lab → Earned Verified CV → Hired at Microsoft",
      image: "/images/Arav.jpg",
    },
    {
      name: "Priya Sharma",
      title: "Data Scientist at Google",
      description: "",
      image: "/images/Diya.jpg",
      quote: "Built 5 verified projects → AI Match Score 95% → Joined Google",
    },
    {
      name: "Rahul Mehta",
      title: "Blockchain Developer at Coinbase",
      description: "",
      image: "/images/Rohan.jpg",
      quote:
        "Trikaya-Verified CV → 3 interviews in 1 week → Offer from Coinbase",
    },
  ];

  return (
    <>
      <Banner
        title={"Find the Right Opportunity."}
        highlight={" Get Verified."}
        description="Trikaya connects you with top employers through blockchain-verified skills and AI-powered job matching. Build your Trikaya-Verified CV and unlock roles that match your real potential."
        image={mentorship}
        primaryButton={{
          label: "Explore Jobs",
          href: "",
        }}
        secondaryButton={{
          label: "Create Verified CV",
          href: "",
        }}
      />
      <CardGridSection
        heading={"Why Choose Trikaya for Your "}
        highlight="Career?"
        containerClassName="my-11"
        description="Because verified skills and AI insights open real opportunities."
        cards={mentorCards}
        headingAlign={"left"}
      />
      <section className="py-12">
        <Container>
          <SectionHeader
            title="Latest "
            highlight="Opportunities"
            description="Browse verified openings across Blockchain, AI, Data Science, and Cybersecurity."
          />
          <div className="my-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobData.map((job, i) => (
              <JobCard key={i} {...job} />
            ))}
          </div>
          <div className="md:py-11">
            <FeatureSplitCardThree
              leftTitle="Showcase Your Verified Achievements"
              leftDescription="Your Trikaya-Verified CV is powered by blockchain — proving your skills, projects, and credentials are authentic."
              bullets={[
                {
                  title: "Every skill and certification verified on-chain",
                  subtitle: "Blockchain-backed proof of your learning journey",
                },
                {
                  title: "Shareable public link to your CV",
                  subtitle: "One link employers can trust instantly",
                },
                {
                  title: "Employers can verify instantly",
                  subtitle: "No more back-and-forth credential checks",
                },
              ]}
              image={certifiedImage}
              title="Trikaya-Verified CV"
              description="Blockchain-authenticated credentials"
              verifiedItems={[
                { label: "AI & Machine Learning" },
                { label: "Blockchain Development" },
                { label: "5 Projects Completed" },
              ]}
              buttonLabel="Generate My Verified CV"
              buttonLink="/verified-cv"
            />
          </div>
          <GenericBanner
            title="Matched by Trikaya AI"
            className="py-11"
            subtitle={
              <p className="">
                Let Trikaya AI analyze your verified profile and recommend jobs
                and learning paths that fit your goals.
              </p>
            }
            ctaLabel="Get My Matches"
            ctaHref="/matches"
            bottomText="Update your skills and learning progress to improve your AI match score."
            bottomIcon={<Icons variant="InfoBulb" />}
          />
        </Container>
        <CardGridSection
          heading={"Get Ready to "}
          highlight="Impress"
          containerClassName="my-11"
          description="Prepare for interviews with Trikaya's mentor-guided sessions, question banks, and mock tests."
          cards={ImpressCards}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-11"
          headingAlign={"left"}
        />
        <GenericButton
          label="Start Interview Prep"
          href="/interview-prep"
          variant="primary"
          align="center"
        />
        <CardGridSection
          heading={"Trusted by Employers  "}
          highlight="Worldwide"
          containerClassName="my-11"
          description="Companies hiring through Trikaya's verified ecosystem."
          cards={companyCards}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-11"
          headingAlign={"left"}
          cardType="company"
        />
        <GenericButton
          label="View All Hiring Partners"
          href="/hiring-partners"
          variant="secondary"
          align="center"
        />
        <Container>
          <SectionHeader
            title="Success  "
            highlight="Stories"
            description="Meet learners who landed their dream jobs through Trikaya."
          />
          <div className="mx-auto grid grid-cols-1 justify-items-center gap-[35px] py-11 sm:grid-cols-2 lg:grid-cols-3">
            {experts.map((expert, index) => (
              <GenericProfileCard
                key={index}
                {...expert}
                buttonText="Read Full Story"
              />
            ))}
          </div>
        </Container>
        <CallToAction
          title="Build Your Future with Trikaya"
          subtitle={
            <>Find the right opportunity. Get verified. Grow your career.</>
          }
          buttons={[
            { label: "Get Started Now", href: "#", variant: "secondary" },
          ]}
          showRocketBg={true}
        />
      </section>
    </>
  );
}
