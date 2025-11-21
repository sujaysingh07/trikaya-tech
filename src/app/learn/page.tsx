import Banner from "@/src/components/common/CommonBanner";
import Engineer from "@/public/images/engineer.jpg";
import CardGridSection from "@/src/components/common/CardGridSection";
import structuredLearning from "@/public/icons/structured-learning.svg";
import ideaBulb from "@/public/icons/idea-bulb.svg";
import certificate from "@/public/icons/Certificate.svg";
import machineLearning from "@/public/icons/MachineLearning.svg";
import PracticeSection from "@/src/components/common/PracticeSection";
import BlackFluidSection from "@/src/components/common/BlackFluidSection";
import FeatureSplitCard from "@/src/components/common/ScaleGrid";
import certifiedImage from "@/public/images/earn-certificate.png";
import Container from "@/src/components/ui/Container";
import SectionHeader from "@/src/components/common/SectionHeader";
import Link from "next/link";
import CallToAction from "@/src/components/common/CallToAction";
import Code from "@/public/code.png"
import GenericProfileCard from "@/src/components/Cards/Generic-profile-card";
export default function Learn() {
  const LearnCards = [
    {
      icon: structuredLearning,
      title: "Structured Learning Path",
      description: "Step-by-step guidance designed by industry mentors.",
    },
    {
      icon: ideaBulb,
      title: "Real Projects & Labs",
      description:
        "Apply concepts instantly in integrated Blockchain & AI Labs.",
    },
    {
      icon: certificate,
      title: "Verified Certificates",
      description:
        "Analyze complex datasets, create visualizations, and drive data-driven decisions.",
    },
    {
      icon: machineLearning,
      title: "AI Career Guidance",
      description:
        "Get personalized course and job suggestions from Trikaya AI.",
    },
  ];


   const experts = [
     {
       name: "Dr. Sarah Chen",
       title: "Blockchain Expert",
       description: "Smart Contracts, DeFi",
       image: "/images/sarah.jpg",
     },
     {
       name: "Prof. Michael Ross",
       title: "AI Research Lead",
       description: "Machine Learning, Neural Networks",
     },
     {
       name: "Emma Williams",
       title: "Data Scientist",
       description: "Analytics, Visualization",
       image: "/images/emma.jpg",
     },
     {
       name: "James Anderson",
       title: "Security Architect",
       description: "Ethical Hacking, Network Security",
       image: "/images/james.jpg",
     },
   ];
  return (
    <>
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
          label: "Explore Labs",
          href: "",
        }}
      />
      <CardGridSection
        heading={"Why Learn with "}
        highlight="Trikaya?"
        containerClassName="my-11"
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-11 "
        description="Learning at Trikaya isn't just about completing courses — it's about proving your skills, applying them in real projects, and being recognized by employers."
        cards={LearnCards}
      />
      <PracticeSection />
      <BlackFluidSection />
      <Container className="pt-11">
        <FeatureSplitCard
          title="Earn Blockchain-Verified Certificates"
          description="Every course completion earns you a certificate validated through Trikaya Protocol. Share it on LinkedIn, showcase it to employers, and add it to your Trikaya-Verified CV."
          buttonLabel="See Sample Certificate"
          buttonLink="#"
          image={certifiedImage}
          reverse={false} // image on left
          darkMode={false}
        />
        <div className="pt-11">
          <FeatureSplitCard
            title={
              <>
                <span className="block md:hidden">
                  Learn. Practice. Perfect Your Skills.
                </span>

                <span
                  className="hidden md:block"
                  dangerouslySetInnerHTML={{
                    __html:
                      "Learn. Practice.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Perfect Your Skills.",
                  }}
                />
              </>
            }
            description="Each learning path connects directly to Practice Labs — so you can code, test, and deploy what you learn instantly."
            buttonLabel="Open a Lab"
            buttonLink="#"
            image={Code}
            reverse={true}
            darkMode={false}
          />
        </div>

        <section className="pt-11 ">
          <SectionHeader
            title="Learn from Mentors. "
            highlight="Grow with Community."
            description="Interact with top mentors, join peer discussions, and get your doubts cleared in the Trikaya Community."
            align="left"
          />
          <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[35px] justify-items-center pt-10">
            {experts.map((expert, index) => (
              <GenericProfileCard key={index} {...expert} />
            ))}
          </div>

          <div className=" py-11 flex justify-center">
            <Link
              href=""
              className="px-10 py-4 bg-black text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-all duration-200"
            >
              Join the Trikaya Community
            </Link>
          </div>
        </section>
      </Container>
      <CallToAction
        title="Start Your Learning Journey Today"
        subtitle={
          <>
            Join thousands of learners mastering Blockchain, AI, Data, and{" "}
            <br />
            Cybersecurity with Trikaya.
          </>
        }
        buttons={[{ label: "Explore Labs", href: "#", variant: "secondary" }]}
        showRocketBg={true}
      />
    </>
  );
}
