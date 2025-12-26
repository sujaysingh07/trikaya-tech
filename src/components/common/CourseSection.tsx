"use client";
import { Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import machineLearning from "@/public/icons/MachineLearning.svg";
import BlockChain from "@/public/icons/BlockchainTechnology.svg";

const courses = [
  {
    id: 1,
    icon: machineLearning, // replace with your icons
    title: "AI & Machine Learning",
    subtitle: "From basics to advanced neural networks",
    duration: "12 Weeks",
    learners: "15,000+",
    modules: "45 modules",
    level: "Beginner to Advanced",
    levelColor: "text-[#0A58F5]",
  },
  {
    id: 2,
    icon: BlockChain,
    title: "Blockchain Development",
    subtitle: "Build decentralized apps and smart contracts",
    duration: "10 Weeks",
    learners: "8,000+",
    modules: "38 modules",
    level: "Intermediate",
    levelColor: "text-[#0A58F5]",
  },
  {
    id: 3,
    icon: machineLearning,
    title: "Data Science Mastery",
    subtitle: "Analytics, visualization, and ML applications",
    duration: "14 Weeks",
    learners: "20,000+",
    modules: "52 modules",
    level: "Beginner to Advanced",
    levelColor: "text-[#0A58F5]",
  },
  {
    id: 4,
    icon: BlockChain,
    title: "Cybersecurity Expert",
    subtitle: "Protect systems with ethical hacking",
    duration: "16 Weeks",
    learners: "12,000+",
    modules: "48 modules",
    level: "Intermediate to Advanced",
    levelColor: "text-[#0A58F5]",
  },
];

export default function CoursesSection() {
  return (
    <section className="bg-white py-16">
      <Container>
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-2">
          {courses.map((course) => (
            <div
              key={course.id}
              className="hover:border-primary-color flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
            >
              {/* Icon + Title */}

              <div className="mb-4 flex gap-3">
                <Image
                  src={course.icon}
                  alt={course.title}
                  width={68}
                  height={68}
                  className="object-contain"
                />
                <div className="flex flex-col justify-center gap-2">
                  <h3 className="text-lg font-semibold text-[#03061E] sm:text-xl">
                    {course.title}
                  </h3>
                  <p className="mb-5 text-sm text-gray-500 sm:text-base">
                    {course.subtitle}
                  </p>
                </div>
              </div>

              {/* Course details */}
              <div className="grid grid-cols-2 gap-x-6 gap-y-3 py-4 text-sm text-gray-700 sm:text-base">
                {/* Duration */}
                <div className="flex items-center gap-2">
                  <Clock size={20} className="text-gray-500" />

                  <span className="text-base">{course.duration}</span>
                </div>

                {/* Learners */}
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.9999 10.1165C13.7336 10.1165 15.139 8.71111 15.139 6.97745C15.139 5.24379 13.7336 3.83838 11.9999 3.83838C10.2663 3.83838 8.86084 5.24379 8.86084 6.97745C8.86084 8.71111 10.2663 10.1165 11.9999 10.1165Z"
                      stroke="#666666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M14.2197 5.09401C14.4681 4.66387 14.8385 4.31704 15.2839 4.09735C15.7294 3.87768 16.23 3.79504 16.7224 3.85986C17.2148 3.92469 17.677 4.13409 18.0504 4.46157C18.4238 4.78906 18.6918 5.21992 18.8204 5.69968C18.9488 6.17944 18.9322 6.68654 18.7726 7.15686C18.6129 7.62718 18.3173 8.03959 17.9233 8.34196C17.5293 8.64431 17.0544 8.82304 16.5588 8.85552C16.0632 8.88801 15.5692 8.77279 15.139 8.52445"
                      stroke="#666666"
                      stroke-width="1.5"
                    />
                    <path
                      d="M9.78013 5.09401C9.53176 4.66387 9.16142 4.31704 8.71596 4.09735C8.2705 3.87768 7.7699 3.79504 7.27747 3.85986C6.78504 3.92469 6.32289 4.13409 5.94947 4.46157C5.57604 4.78906 5.30812 5.21992 5.17956 5.69968C5.05101 6.17944 5.06761 6.68654 5.22727 7.15686C5.38692 7.62718 5.68246 8.03959 6.0765 8.34196C6.47054 8.64431 6.94539 8.82304 7.441 8.85552C7.93663 8.88801 8.43074 8.77279 8.86088 8.52445"
                      stroke="#666666"
                      stroke-width="1.5"
                    />
                    <path
                      d="M12 12.6278C17.1232 12.6278 18.4457 16.7741 18.7871 18.9147C18.8964 19.5996 18.3438 20.1616 17.6503 20.1616H6.34963C5.65616 20.1616 5.10359 19.5996 5.2128 18.9147C5.55418 16.7741 6.8767 12.6278 12 12.6278Z"
                      stroke="#666666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                    <path
                      d="M13.365 12.7357L12.9014 12.3124L12.1223 13.1656L13.262 13.355L13.365 12.7357ZM18.5058 17.6503L17.9027 17.8249L18.0339 18.2782H18.5058V17.6503ZM16.3947 12C17.6851 12 18.5914 12.6312 19.2554 13.5154C19.9327 14.4175 20.3304 15.5542 20.5527 16.4421L21.7708 16.1371C21.5307 15.1786 21.0819 13.8567 20.2595 12.7616C19.424 11.6488 18.178 10.7444 16.3947 10.7444V12ZM13.8286 13.159C14.4569 12.4709 15.2781 12 16.3947 12V10.7444C14.8664 10.7444 13.7247 11.4106 12.9014 12.3124L13.8286 13.159ZM13.262 13.355C16.1506 13.835 17.3729 15.993 17.9027 17.8249L19.1089 17.4758C18.5174 15.4311 17.0464 12.7111 13.468 12.1164L13.262 13.355ZM20.0298 17.0225H18.5058V18.2782H20.0298V17.0225ZM20.5527 16.4421C20.6203 16.7119 20.4222 17.0225 20.0298 17.0225V18.2782C21.123 18.2782 22.0641 17.3084 21.7708 16.1371L20.5527 16.4421Z"
                      fill="#666666"
                    />
                    <path
                      d="M10.6351 12.7357L10.7381 13.355L11.8778 13.1656L11.0987 12.3124L10.6351 12.7357ZM5.49429 17.6503V18.2782H5.96622L6.09737 17.8249L5.49429 17.6503ZM7.60539 12C8.72205 12 9.54322 12.4709 10.1714 13.159L11.0987 12.3124C10.2754 11.4106 9.13379 10.7444 7.60539 10.7444V12ZM3.44732 16.4421C3.66968 15.5542 4.06739 14.4175 4.74466 13.5154C5.40865 12.6312 6.31494 12 7.60539 12V10.7444C5.82216 10.7444 4.57611 11.6488 3.74056 12.7616C2.9183 13.8567 2.46931 15.1786 2.22931 16.1371L3.44732 16.4421ZM3.97033 17.0225C3.57793 17.0225 3.37977 16.7119 3.44732 16.4421L2.22931 16.1371C1.93595 17.3084 2.877 18.2782 3.97033 18.2782V17.0225ZM5.49429 17.0225H3.97033V18.2782H5.49429V17.0225ZM6.09737 17.8249C6.62732 15.993 7.84943 13.835 10.7381 13.355L10.5321 12.1164C6.95374 12.7111 5.48276 15.4311 4.89121 17.4758L6.09737 17.8249Z"
                      fill="#666666"
                    />
                  </svg>

                  <span className="text-base">{course.learners}</span>
                </div>

                {/* Modules */}
                <div className="flex items-center gap-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 10.4V20M12 10.4C12 8.15979 12 7.03969 11.564 6.18404C11.1805 5.43139 10.5686 4.81947 9.81596 4.43597C8.96031 4 7.84021 4 5.6 4H4.6C4.03995 4 3.75992 4 3.54601 4.10899C3.35785 4.20487 3.20487 4.35785 3.10899 4.54601C3 4.75992 3 5.03995 3 5.6V16.4C3 16.9601 3 17.2401 3.10899 17.454C3.20487 17.6422 3.35785 17.7951 3.54601 17.891C3.75992 18 4.03995 18 4.6 18H7.54668C8.08687 18 8.35696 18 8.61814 18.0466C8.84995 18.0879 9.0761 18.1563 9.29191 18.2506C9.53504 18.3567 9.75977 18.5065 10.2092 18.8062L12 20M12 10.4C12 8.15979 12 7.03969 12.436 6.18404C12.8195 5.43139 13.4314 4.81947 14.184 4.43597C15.0397 4 16.1598 4 18.4 4H19.4C19.9601 4 20.2401 4 20.454 4.10899C20.6422 4.20487 20.7951 4.35785 20.891 4.54601C21 4.75992 21 5.03995 21 5.6V16.4C21 16.9601 21 17.2401 20.891 17.454C20.7951 17.6422 20.6422 17.7951 20.454 17.891C20.2401 18 19.9601 18 19.4 18H16.4533C15.9131 18 15.643 18 15.3819 18.0466C15.15 18.0879 14.9239 18.1563 14.7081 18.2506C14.465 18.3567 14.2402 18.5065 13.7908 18.8062L12 20"
                      stroke="#666666"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>

                  <span className="text-base">{course.modules}</span>
                </div>

                {/* Level */}
                <div className="flex items-center gap-2 text-base font-bold">
                  <span className={course.levelColor + " flex"}>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 16H9C11.2091 16 13 14.2091 13 12V7"
                        stroke="#0A58F5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16 10L13 7L10 10"
                        stroke="#0A58F5"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    {course.level}
                  </span>
                </div>
              </div>

              {/* Button */}
              <div className="mt-6">
                <Link
                  href="#"
                  className="bg-primary-color w-full max-w-[163px] rounded-md px-4 py-2.5 text-center text-base font-semibold text-white transition hover:bg-[#0048d9]"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
