import { Icons } from "@/public/icons/icon";
import Container from "../ui/Container";
import { LabCardProps } from "./BlockchainLab";
import SectionHeader from "./SectionHeader";
import { LabCard } from "../cards/LabCard";

export default function AILab() {
  const labData: LabCardProps[] = [
    {
      level: "Beginner",
      duration: "2–3 hours",
      title: "Train a Neural Network on MNIST",
      description:
        "Build and train a neural network to recognize handwritten digits.",
      tags: ["Python", "TensorFlow", "Neural Networks"],
      href: "#",
      levelColor: "bg-[#E5FFDF] text-[#037A11]", // green tone for Beginner
    },
    {
      level: "Advanced",
      duration: "2–3 hours",
      title: "Build a Chatbot with Python",
      description:
        "Create an intelligent conversational AI using natural language processing.",
      tags: ["NLP", "Python", "Machine Learning"],
      href: "#",
      levelColor: "bg-[#FFDEDF] text-[#BC2320]", // red tone for Advanced
    },
    {
      level: "Intermediate",
      duration: "2–3 hours",
      title: "Deploy a Model with FastAPI",
      description:
        "Learn to deploy machine learning models as production-ready APIs.",
      tags: ["FastAPI", "Python", "MLOps"],
      href: "#",
      levelColor: "bg-[#E5E7FE] text-[#3740FF]", // blue tone for Intermediate
    },
    {
      level: "Advanced",
      duration: "2–3 hours",
      title: "Computer Vision with OpenCV",
      description: "Implement image recognition and object detection systems.",
      tags: ["Computer Vision", "OpenCV", "Python"],
      href: "#",
      levelColor: "bg-[#FFDEDF] text-[#BC2320]",
    },
    {
      level: "Advanced",
      duration: "2–3 hours",
      title: "Sentiment Analysis Pipeline",
      description:
        "Build a complete sentiment analysis system for social media data.",
      tags: ["NLP", "Text Analytics", "PyTorch"],
      href: "#",
      levelColor: "bg-[#FFDEDF] text-[#BC2320]",
    },
    {
      level: "Intermediate",
      duration: "2–3 hours",
      title: "Reinforcement Learning Agent",
      description: "Create an AI agent that learns through trial and error.",
      tags: ["RL", "Python", "Deep Learning"],
      href: "#",
      levelColor: "bg-[#E5E7FE] text-[#3740FF]",
    },
  ];

  return (
    <section className="bg-black py-12">
      <Container>
        <SectionHeader
          title={"AI  "}
          theme="dark"
          highlight="Lab"
          description="Dive into machine learning, neural networks, and data modeling through structured, hands-on labs."
        />
        <div className="my-5 flex gap-2.5 rounded-[14px] border-2 border-[#B5F6FF] p-[17px] text-base font-medium text-[#FFFFFF]">
          <Icons variant="Lab" /> All AI labs include live coding space and
          AI-powered evaluation.
        </div>
        <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {labData.map((lab, index) => (
            <LabCard key={index} {...lab} LinkLabel="Try This Lab" />
          ))}
        </div>
      </Container>{" "}
    </section>
  );
}
