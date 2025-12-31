import AppBreadcrumb from "@/src/components/AppBreadcrumb";
import Container from "@/src/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/public/icons/icon";
import FeaturedJob from "@/src/components/landing/Featured";
export default function JobDetailsContainer() {
    return <>
    <Container>
        <div className="my-10">
            <AppBreadcrumb />
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                {/* LEFT CONTENT */}
                <div className="pt-2">
                    <h1 className="text-2xl font-bold">Backend Developer</h1>

                    <div className="mt-2 flex flex-wrap gap-5 text-sm text-[#4F5162] items-center">
                        <div className="flex gap-2 items-center">
                            <Icons variant="LocationPin" color="#4F5162" />
                            Remote
                        </div>

                        <div className="flex gap-2 items-center">
                            <Icons variant="Bag" />
                            Full Time
                        </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-3">
                        <span className="rounded-full bg-[#FFB82E] px-3 py-1 text-sm font-bold text-black">
                            Mid
                        </span>
                        <span className="rounded-full bg-[#D8BAFF] px-3 py-1 text-sm font-bold text-black">
                            Remote
                        </span>
                    </div>
                </div>

                {/* APPLY BUTTON */}
                <Link
                    href="#"
                    className="
      w-full
      md:w-auto
      md:min-w-[260px]
      text-center
      rounded-md
      px-6
      py-3
      text-lg
      font-semibold
      transition
      bg-black
      text-white
      hover:bg-gray-800
    "
                >
                    Apply Now
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 mt-11">

                {/* LEFT CONTENT */}
                <div className="lg:col-span-2 space-y-6">

                    {/* Header */}


                    {/* Image */}
                    <div className="overflow-hidden rounded-[30px]">
                        <Image
                            src="/job-banner.png"
                            alt="Job Banner"
                            width={900}
                            height={400}
                            className="h-[380px] w-full object-cover"
                        />
                    </div>

                    {/* Job Description */}
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">Job Description</h2>
                        <p className="text-sm text-[#666666]">
                            Join our team as a Backend Developer and help shape the future of
                            tech education. We’re looking for an experienced professional who
                            is passionate about scalable systems and clean architecture.
                        </p>

                        <div className="mt-4 space-y-1 text-sm text-[#666666]">
                            <p><strong>Role:</strong> Backend Developer (Rust, Startups)</p>
                            <p><strong>Location:</strong> Remote</p>
                            <p><strong>CTC:</strong> ₹45L – ₹60L</p>
                        </div>
                    </div>

                    {/* Responsibilities */}
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">Key Responsibilities</h2>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-[#666666]">
                            <li>Design and develop scalable backend services</li>
                            <li>Work with APIs, databases, and cloud services</li>
                            <li>Collaborate with frontend and DevOps teams</li>
                            <li>Maintain high code quality and performance</li>
                            <li>Mentor junior developers</li>
                        </ul>
                    </div>

                    {/* Requirements */}
                    <div>
                        <h2 className="mb-2 text-lg font-semibold">Requirements</h2>
                        <ul className="list-disc space-y-2 pl-5 text-sm text-[#666666]">
                            <li>Bachelor’s degree in Computer Science or related field</li>
                            <li>3+ years of backend development experience</li>
                            <li>Strong knowledge of Rust / Node.js / Python</li>
                            <li>Experience with databases and cloud platforms</li>
                            <li>Excellent communication skills</li>
                        </ul>
                    </div>
                </div>

                {/* RIGHT SIDEBAR */}
                <aside className=" relative">
                    <div className="space-y-6 flex flex-col sticky top-50">

                    {/* Job Details Card */}
                    <div className="rounded-[30px] border p-5 ">
                        <h3 className="mb-4 text-[28px] font-bold ">Job Details</h3>

                        <hr className="mb-5 text-[#CCCCCC] border" />
                        <div className="space-y-3 text-sm text-[#666666]">
                            <div className="flex gap-3">
                                <Icons variant="DollarCircleBlue" />
                                <div className="gap-2">
                                    <span>Salary . Range</span>
                                    <p className="text-black text-base font-medium">
                                        50,000 - 65000 USD
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Icons variant="BlueBag" />
                                <div className="gap-2">
                                    <span>Experience</span>
                                    <p className="text-black text-base font-medium">
                                        3 - 10 . years
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Icons variant="BlueClock" />
                                <div className="gap-2">
                                    <span>Application Deadline</span>
                                    <p className="text-black text-base font-medium">
                                        Nov 30, 2025
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Icons variant="BlueCalender" />
                                <div className="gap-2">
                                    <span>Expected Start Date</span>
                                    <p className="text-black text-base font-medium">
                                        Nov 15, 2025
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Icons variant="BlueCalender" />
                                <div className="gap-2">
                                    <span>Posted On</span>
                                    <p className="text-black text-base font-medium">
                                        Nov 18, 2025
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Courses */}
                    <div className="rounded-[30px] border p-5">
                        <h3 className="mb-4 text-[28px] font-bold">Courses</h3>

                        <hr className="mb-5 border-[#CCCCCC]" />

                        <div className="space-y-4">
                            {/* Course Item */}
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/job-banner.png"
                                    alt="IIT Delhi"
                                    width={12}
                                    height={12}
                                    className="h-12 w-12  border  object-cover"
                                />
                                <div>
                                    <p className="text-base font-semibold text-black">IIT Delhi</p>
                                    <p className="text-sm text-[#666666]">
                                        Professional Certificate Program in Data Analytics, Generative AI
                                    </p>
                                </div>
                            </div>

                            {/* Course Item */}
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/job-banner.png"
                                    alt="IIM Indore"
                                    width={12}
                                    height={12}
                                    className="h-12 w-12  border object-cover "
                                />
                                <div>
                                    <p className="text-base font-semibold text-black">IIM Indore</p>
                                    <p className="text-sm text-[#666666]">
                                        Advanced Human Resource Management Program (Batch – 05)
                                    </p>
                                </div>
                            </div>

                            {/* Course Item */}
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/job-banner.png"
                                    alt="IITM Pravartak"
                                    width={12}
                                    height={12}
                                    className="h-12 w-12  border object-cover "
                                />
                                <div>
                                    <p className="text-base font-semibold text-black">IITM Pravartak</p>
                                    <p className="text-sm text-[#666666]">
                                        Certificate Artificial Intelligence & Machine Learning
                                    </p>
                                </div>
                            </div>

                            {/* Course Item */}
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/job-banner.png"
                                    alt="ICFAI"
                                    width={12}
                                    height={12}
                                    className="h-12 w-12  border object-cover "
                                />
                                <div>
                                    <p className="text-base font-semibold text-black">ICFAI</p>
                                    <p className="text-sm text-[#666666]">Online MBA</p>
                                </div>
                            </div>

                            {/* Course Item */}
                            <div className="flex items-start gap-4">
                                <Image
                                    src="/job-banner.png"
                                    alt="IIT Delhi"
                                    width={12}
                                    height={12}
                                    className="h-12 w-12  border object-cover"
                                />
                                <div>
                                    <p className="text-base font-semibold text-black">IIT Delhi</p>
                                    <p className="text-sm text-[#666666]">
                                        Professional Certificate Program in Data Analytics, Generative AI
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Job Location */}
                    <div className="rounded-[30px] border p-5">
                        <h3 className="mb-4 text-[28px] font-bold">Jobs by Location</h3>

                        <hr className="mb-5 border text-[#666666]" />

                        <ul className="space-y-3 text-sm text-[#666666]">
                            <li className="flex items-start gap-2">
                                <span>•</span>
                                <span>Jobs in Bangalore</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>•</span>
                                <span>Jobs in Mumbai</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>•</span>
                                <span>Jobs in Delhi NCR</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>•</span>
                                <span>Jobs in Noida</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>•</span>
                                <span>Jobs in Gurgaon/Gurugram</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>•</span>
                                <span>Jobs in Hyderabad</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>•</span>
                                <span>Jobs in Chennai</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>•</span>
                                <span>Jobs in Kolkata</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>•</span>
                                <span>Jobs in Coimbatore</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span>•</span>
                                <span>Jobs in Pune</span>
                            </li>
                        </ul>
                    </div>
                    </div>


                </aside>
            </div>

        </div>


    </Container>
            <FeaturedJob title="Jobs you might be interested in" classname="my-11"  />
    </>
}
