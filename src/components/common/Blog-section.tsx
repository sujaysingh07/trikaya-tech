"use client";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import SectionHeader from "./SectionHeader";
import Container from "../ui/Container";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { ChevronDown } from "lucide-react";
import FeatureSplitCardTwo from "./ScaleGridTwo";
import mentor from "@/public/images/mentors/Mentor.jpg";
import BlogCard from "../Cards/Blog-card";
import GenericButton from "./GenericButton";
import CardGridSection from "./CardGridSection";
import SubscribeCard from "./Subscribe-container";

export default function BlogSection() {
  const categories = [
    "All",
    "Blockchain",
    "AI",
    "Data Science",
    "Cybersecurity",
    "Community",
    "Career",
  ];

  const handleSearch = (value: string) => {
    console.log("🔍 Search:", value);
  };

  const handleCategoryChange = (cat: string) => {
    console.log("🏷 Selected Category:", cat);
  };
  const sortOptions = ["Newest", "Oldest", "Most Popular"];
  const handleSortChange = (value: string) => console.log("📌 Sort:", value);

  const blogData = [
    {
      icon: "/images/blockchain-bot.png",
      category: "Blockchain",
      title: "AI-Powered Mentorship: Finding Your Perfect Career Guide",
      description:
        "Discover how Trikaya uses AI to match students with industry mentors based on goals, skills, and career aspirations.",
      author: "Rahul Sharma",
      date: "March 12, 2024",
      readTime: "8 min read",
    },
    {
      icon: "/images/data-career.png",
      category: "Datascience",
      title: "Your Complete Data Science Career Path for 2024",
      description:
        "A comprehensive guide to breaking into data science, from essential skills to landing your first job.",
      author: "Priya Patel",
      date: "March 10, 2024",
      readTime: "7 min read",
    },
    {
      icon: "/images/security.png",
      category: "Cybersecurity",
      title: "Cybersecurity Fundamentals Every Developer Should Know",
      description:
        "Learn the essential security practices that every developer needs to protect applications and user data.",
      author: "Alex Kumar",
      date: "March 8, 2024",
      readTime: "6 min read",
    },
  ];
  const articleData = [
    {
      icon: "/images/blockchain-bot.png",
      category: "Blockchain",
      title: "Building Your First Decentralized App on Web3",
      description:
        "Step-by-step tutorial on creating a DApp using Ethereum smart contracts and React.",
      author: "Dev Singh",
      date: "",
      readTime: "12 min read",
    },
    {
      icon: "/images/data-career.png",
      category: "AI",
      title: "10 Machine Learning Projects for Your Portfolio",
      description:
        "Showcase your skills with these impressive ML projects that employers actually want to see.",
      author: "Anjali Verma",
      date: "",
      readTime: "9 min read",
    },
    {
      icon: "/images/security.png",
      category: "Data Science",
      title: "SQL vs NoSQL: Choosing the Right Database",
      description:
        "Understand the differences and learn when to use each type of database for your projects.",
      author: "Vikram Rao",
      date: "",
      readTime: "9 min read",
    },
    {
      icon: "/images/security.png",
      category: "Cybersecurity",
      title: "Introduction to Penetration Testing and Ethical Hacking",
      description:
        "Learn the basics of penetration testing and how to get started in ethical hacking.",
      author: "Neha Gupta",
      date: "",
      readTime: "11 min read",
    },
    {
      icon: "/images/blockchain-bot.png",
      category: "Community",
      title: "The Power of Community-Driven Learning",
      description:
        "How peer learning and community support accelerate skill development in tech.",
      author: "Rohan Mehta",
      date: "",
      readTime: "9 min read",
    },
    {
      icon: "/images/data-career.png",
      category: "Career",
      title: "How to Negotiate Your First Tech Job Offer",
      description:
        "Expert tips on salary negotiation, benefits, and getting the best deal for your first role.",
      author: "Kavya Reddy",
      date: "",
      readTime: "9 min read",
    },
  ];
  const insightData = [
    {
      category: "Blockchain",
      title: "Verified Learning: The Future of Online Education",
      description:
        "How blockchain-verified credentials and AI-powered assessments are transforming the way we learn and prove our skills.",
      author: "Trikaya Team",
      date: "February 22, 2024",
      readTime: "9 min read",
    },
    {
      category: "AI",
      title: "AI Matching: Connecting Talent with Perfect Opportunities",
      description:
        "Deep dive into how Trikaya’s AI algorithms match students with jobs, internships, and mentors based on verified skills.",
      author: "Trikaya Team",
      date: "February 20, 2024",
      readTime: "8 min read",
    },
    {
      category: "Blockchain",
      title: "The Blockchain Education Revolution",
      description:
        "Exploring how decentralized credentials, smart contracts, and tokenized learning are reshaping education systems worldwide.",
      author: "Trikaya Team",
      date: "February 18, 2024",
      readTime: "10 min read",
    },
  ];
  const authorData = [
    {
      icon: "/images/Arav.jpg",
      name: "Dr. Sarah Johnson",
      role: "Blockchain Mentor, Trikaya",
      articlesCount: 12,
    },
    {
      icon: "/images/Rohan.jpg",
      name: "Rahul Sharma",
      role: "AI/ML Expert, Trikaya",
      articlesCount: 18,
    },
    {
      icon: "/images/Diya.jpg",
      name: "Priya Patel",
      role: "Data Science Mentor",
      articlesCount: 15,
    },
    {
      icon: "/images/Deepak.jpg",
      name: "Alex Kumar",
      role: "Cybersecurity Specialist",
      articlesCount: 10,
    },
  ];

  return (
    <>
      <Container className="flex w-full flex-col items-center px-4 py-11">
        <SearchBar onChange={(value) => handleSearch(value)} />
        <CategoryFilter
          categories={categories}
          onChange={handleCategoryChange}
        />
        <div className="flex w-full flex-col justify-between gap-5 md:flex-row">
          <SectionHeader
            title={"Featured "}
            highlight="Reads"
            description="Editor's picks and trending posts from the Trikaya ecosystem."
          />

          <Select onValueChange={handleSortChange}>
            <SelectTrigger className="relative w-full rounded-[12px] border-none bg-[#F5F5F5] px-4 py-2 text-black focus:outline-none md:max-w-[200px] [&>svg]:block">
              <SelectValue placeholder="Newest" />

              {/* Custom Icon */}
              <ChevronDown className="absolute right-4 h-4 w-4 text-black" />
            </SelectTrigger>

            <SelectContent className="rounded-[12px] border-gray-100 shadow-md">
              <SelectGroup>
                {sortOptions.map((option) => (
                  <SelectItem key={option} value={option}>
                    {option}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="my-11 w-full">
          <FeatureSplitCardTwo
            title="How Blockchain-Verified Credentials Are Shaping the Future of Education"
            description="Explore how blockchain technology is revolutionizing educational credentials, making them tamper-proof, portable, and instantly verifiable by employers worldwide."
            buttonLabel="Read More"
            buttonLink="#"
            variant="blog"
            image={mentor}
            writer={"Dr. Sarah Johnson"}
            date={"March 15, 2024"}
            minToRead={8}
            reverse={false}
            darkMode={false}
          />
        </div>
        <div className="mt-10 grid w-full grid-cols-1 justify-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogData.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
        <GenericButton
          label="View All Articles"
          href="#"
          className="mt-10"
          variant="primary"
          align="center"
        />
      </Container>
      <CardGridSection
        heading={"Latest "}
        highlight="Articles"
        containerClassName="mb-11"
        description="Fresh perspectives, tutorials, and Trikaya community stories."
        cards={articleData}
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full mt-11 justify-center"
        headingAlign={"left"}
        cardType="Blog"
      />
      <CardGridSection
        heading={"Trikaya "}
        highlight="Insights"
        containerClassName="mb-11"
        description="Deep dives into verified learning, AI matching, and blockchain education."
        cards={insightData}
        gridClassName="flex flex-col gap-4 my-8"
        headingAlign={"left"}
        cardType="Insight"
      />
      <CardGridSection
        heading={"Meet Our Authors & "}
        highlight="Mentors"
        containerClassName="mb-11"
        description="Industry professionals, mentors, and students sharing verified stories."
        cards={authorData}
        gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-11 justify-center"
        headingAlign={"left"}
        cardType="Author"
      />
      <SubscribeCard
        title="Stay Updated with Trikaya"
        subtitle="Get the latest updates, tutorials, and tech insights in your inbox."
        note="No spam. Only verified knowledge."
      />
    </>
  );
}
