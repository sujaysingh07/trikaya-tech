import Banner from "@/src/components/common/CommonBanner";
import mentorship from "@/public/images/engineer-girl.png";
import JobCard, { JobCardProps } from "@/src/components/Cards/Job-card";
import CardGridSection from "@/src/components/common/CardGridSection";
import rewards from "@/public/icons/Brain.svg";
import problemSolving from "@/public/icons/OnlineProfile.svg";
import NotVerified from "@/public/icons/OfficeWomen.svg";
import WirelessNetwork from "@/public/icons/PieChart.svg";
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
      title: "AI-Powered Matching",
      description:
        "Get internship recommendations that perfectly match your verified skills and interests.",
    },
    {
      icon: NotVerified,
      title: "Verified Profile",
      description:
        "Stand out with blockchain-verified skills and project credentials.",
    },
    {
      icon: problemSolving,
      title: "Top Companies",
      description:
        "Access opportunities from leading tech companies and startups.",
    },
    {
      icon: WirelessNetwork,
      title: "Career Growth",
      description:
        "Get mentorship and guidance to kickstart your professional journey.",
    },
  ];

  const internshipData: JobCardProps[] = [
    {
      title: "AI Research Intern",
      company: "TechNova Solutions",
      location: "Remote",
      salary: "$2,000/month",
      type: "Duration: 3 months",
      employmentType: "Summer 2025",
    },
    {
      title: "Blockchain Developer Intern",
      company: "CryptoChain Labs",
      location: "Bangalore",
      salary: "$80K – $120K",
      type: "Duration: 6 months",
      employmentType: "Full-Time",
    },
    {
      title: "Data Science Intern",
      company: "DataVision Inc",
      location: "Remote",
      salary: "$1,500/month",
      type: "Duration: 4 months",
      employmentType: "Part-Time",
    },
    {
      title: "Cybersecurity Intern",
      company: "SecureNet Systems",
      location: "Mumbai",
      salary: "$1,600/month",
      type: "Duration: 3 months",
      employmentType: "Summer 2025",
    },
    {
      title: "Machine Learning Intern",
      company: "AI Dynamics",
      location: "Remote",
      salary: "$2,200/month",
      type: "Duration: 6 months",
      employmentType: "Full-Time",
    },
    {
      title: "Smart Contract Intern",
      company: "Web3 Ventures",
      location: "Delhi",
      salary: "$1,900/month",
      type: "Duration: 4 months",
      employmentType: "Part-Time",
    },
  ];

  const ImpressCards = [
    {
      id: 1,
      title: "Application Strategy",
      description: "Learn how to craft compelling applications that stand out.",
      icon: "/icons/DrawingApps.svg", // or a React icon component
    },
    {
      id: 2,
      title: "Mock Interviews",
      description: "Practice with mentors and get real-time feedback.",
      icon: "/icons/GroupPeople.svg",
    },
    {
      id: 3,
      title: "Skill Assessment",
      description: "Identify gaps and improve your technical skills.",
      icon: "/icons/Skills.svg",
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
      name: "Ananya Verma",
      title: "ML Intern at Google",
      quote:
        "Completed AI Labs → Built Verified Portfolio → Got Google Internship",
      image: "/images/Diya.jpg",
    },
    {
      name: "Karthik Reddy",
      title: "Blockchain Intern at Coinbase",
      description: "",
      image: "/images/Arav.jpg",
      quote:
        "Trikaya-Verified Projects → Applied via Platform → Joined Coinbase",
    },
    {
      name: "Priya Singh",
      title: "Data Science Intern at Microsoft",
      quote: "3 Verified Certifications → AI Match 92% → Microsoft Offer",
      image: "/images/Diya.jpg",
    },
  ];

  return (
    <>
      <Banner
        title={"Launch Your Career."}
        highlight={"Start Verified."}
        description="Discover internships at top tech companies with blockchain-verified credentials. Let Trikaya AI match you with opportunities that fit your skills and career goals."
        image={mentorship}
        primaryButton={{
          label: "Explore Internship",
          href: "",
        }}
        secondaryButton={{
          label: "Build Verified Profile",
          href: "",
        }}
      />
      <CardGridSection
        heading={"Why Choose Trikaya for "}
        highlight="Internships?"
        containerClassName="my-11"
        description="Because verified skills and AI insights open real opportunities."
        cards={mentorCards}
        headingAlign={"left"}
      />
      <section className="py-12">
        <Container>
          <SectionHeader
            title="Latest Internship Opportunities"
            description="Browse verified internships across AI, Blockchain, Data Science, and Cybersecurity."
          />
          <div className="my-11 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {internshipData.map((internship, i) => (
              <JobCard key={i} {...internship} />
            ))}
          </div>
          <div className="py-11">
            <FeatureSplitCardThree
              leftTitle="Build Your Verified Student Profile"
              leftDescription="Your Trikaya profile showcases blockchain-verified skills, projects, and certifications. Recruiters can instantly verify your credentials and see your real capabilities."
              bullets={[
                {
                  title: "Blockchain-verified achievements",
                  subtitle: "Every skill and project authenticated on-chain",
                },
                {
                  title: "AI-powered recommendations",
                  subtitle:
                    "Get matched with internships that fit your profile",
                },
                {
                  title: "Stand out to recruiters",
                  subtitle: "Verified credentials build instant trust",
                },
              ]}
              image={certifiedImage}
              title="Student Profile"
              description="Blockchain-verified credentials"
              verifiedItems={[
                { label: "3 Certifications" },
                { label: "8 Projectst" },
                { label: "AI Match: 94%" },
              ]}
              buttonLabel="Create My Profile"
              buttonLink="/#"
            />
          </div>
          <GenericBanner
            title="Let AI Find Your Perfect Match"
            className="py-11"
            subtitle={
              <p className="">
                Trikaya AI analyzes your verified skills, interests, and career
                goals to recommend internships that are the perfect fit for you.
              </p>
            }
            ctaLabel="Get My Matches"
            ctaHref="/# "
            bottomText="Complete more labs and projects to improve your match score and unlock better opportunities."
            bottomIcon={<Icons variant="InfoBulb" />}
          />
        </Container>
        <CardGridSection
          heading={"Prepare to  "}
          highlight="Succeed"
          containerClassName="my-11"
          description="Get ready for your internship applications with Trikaya's comprehensive preparation resources."
          cards={ImpressCards}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-11"
          headingAlign={"left"}
        />
        <GenericButton
          label="Start Preparation"
          href="#"
          variant="primary"
          align="center"
        />
        <CardGridSection
          heading={"Companies Hiring Through "}
          highlight="Trikaya"
          containerClassName="my-11"
          description="Join students interning at leading tech companies worldwide."
          cards={companyCards}
          gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-11"
          headingAlign={"left"}
          cardType="company"
        />
        <GenericButton
          label="View All Partners"
          href="/hiring-partners"
          variant="secondary"
          align="center"
        />
        <Container>
          <SectionHeader
            title="Student Success   "
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
