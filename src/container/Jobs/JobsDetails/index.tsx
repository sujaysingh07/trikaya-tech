import AppBreadcrumb from "@/src/components/AppBreadcrumb";
import Container from "@/src/components/ui/Container";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/public/icons/icon";
import FeaturedJob from "@/src/components/landing/Featured";
import { JobDetailstype } from "@/src/lib/types/commonTypes";
import { formatCompactSalaryWithCurrency, formatJobType } from "@/src/lib/common";
import { formatToIST } from "@/src/lib/formatToIST";
import { parseJobDescription } from "@/src/utils/parseJobDescription";

export default function JobDetailsContainer({
    jobDetails,
}: {
    jobDetails: JobDetailstype;
}) {

    return (
        <>
            <Container>
                <div className="my-10">
                    <AppBreadcrumb obj={{ title: jobDetails.title, company_url: jobDetails.company_url }} />
                    <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                        {/* LEFT CONTENT */}
                        <div className="pt-2">
                            <h1 className="text-2xl font-bold">{jobDetails.title}</h1>

                            <div className="mt-2 flex flex-wrap items-center gap-5 text-sm text-[#4F5162]">
                                <div className="flex items-center gap-2">
                                    <Icons variant="LocationPin" color="#4F5162" />
                                    {jobDetails.location}
                                </div>

                                <div className="flex items-center gap-2">
                                    <Icons variant="Bag" />
                                    {formatJobType(jobDetails.employment_type)}
                                </div>
                            </div>

                            <div className="mt-3 flex flex-wrap gap-3">
                                <span className="rounded-full bg-[#FFB82E] px-3 py-1 text-sm font-bold text-black">
                                    {jobDetails.experience_level}
                                </span>
                                <span className="rounded-full bg-[#D8BAFF] px-3 py-1 text-sm font-bold text-black">
                                    {jobDetails.location}
                                </span>
                            </div>
                        </div>

                        {/* APPLY BUTTON */}
                        <Link
                            href={jobDetails.registration_url || "#"}
                            target="_blank"
                            className="w-full rounded-md bg-black px-6 py-3 text-center text-lg font-semibold text-white transition hover:bg-gray-800 md:w-auto md:min-w-[260px]"
                        >
                            Apply Now
                        </Link>
                    </div>

                    <div className="mt-11 grid grid-cols-1 gap-8 lg:grid-cols-3">
                        {/* LEFT CONTENT */}
                        <div className="space-y-6 lg:col-span-2">
                            {/* Header */}

                            {/* <div className="overflow-hidden rounded-[30px]">
                                <Image
                                    src="/job-banner.png"
                                    alt="Job Banner"
                                    width={900}
                                    height={400}
                                    priority
                                    className="h-[200px] w-full object-cover sm:h-[280px] md:h-[340px] lg:h-[380px]"
                                />
                            </div> */}


                            <div className="job-description text-base " dangerouslySetInnerHTML={{
                                __html: parseJobDescription(jobDetails.description),
                            }} />

                        </div>

                        {/* RIGHT SIDEBAR */}
                        <aside className="relative">
                            <div className="sticky top-50 flex flex-col space-y-6">
                                {/* Job Details Card */}
                                <div className="rounded-[30px] border p-5">
                                    <h3 className="mb-4 text-[28px] font-bold">Job Details</h3>

                                    <hr className="mb-5 border text-[#CCCCCC]" />
                                    <div className="space-y-3 text-sm text-[#666666]">
                                        <div className="flex gap-3">
                                            <Icons variant="DollarCircleBlue" />
                                            <div className="gap-2">
                                                <span>Salary . Range</span>
                                                <p className="text-base font-medium text-black">
                                                    {formatCompactSalaryWithCurrency(jobDetails.salary_min, jobDetails.salary_currency)} - {formatCompactSalaryWithCurrency(jobDetails.salary_max, jobDetails.salary_currency)}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <Icons variant="BlueBag" />
                                            <div className="gap-2">
                                                <span>Experience</span>
                                                <p className="text-base font-medium text-black">
                                                    {jobDetails.min_experience} - {jobDetails.max_experience} years
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <Icons variant="BlueClock" />
                                            <div className="gap-2">
                                                <span>Application Deadline</span>
                                                <p className="text-base font-medium text-black">
                                                    {formatToIST(jobDetails.application_deadline, 'DD MMM, YYYY')}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <Icons variant="BlueCalender" color="#0A58F5" />
                                            <div className="gap-2">
                                                <span>Expected Start Date</span>
                                                <p className="text-base font-medium text-black">
                                                    {formatToIST(jobDetails.application_start_date, 'DD MMM, YYYY')}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-3">
                                            <Icons variant="BlueCalender" color="#0A58F5" />
                                            <div className="gap-2">
                                                <span>Posted On</span>
                                                <p className="text-base font-medium text-black">
                                                    {formatToIST(jobDetails.posted_on, 'DD MMM, YYYY')}
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
                                                className="h-12 w-12 border object-cover"
                                            />
                                            <div>
                                                <p className="text-base font-semibold text-black">
                                                    IIT Delhi
                                                </p>
                                                <p className="text-sm text-[#666666]">
                                                    Professional Certificate Program in Data Analytics,
                                                    Generative AI
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
                                                className="h-12 w-12 border object-cover"
                                            />
                                            <div>
                                                <p className="text-base font-semibold text-black">
                                                    IIM Indore
                                                </p>
                                                <p className="text-sm text-[#666666]">
                                                    Advanced Human Resource Management Program (Batch –
                                                    05)
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
                                                className="h-12 w-12 border object-cover"
                                            />
                                            <div>
                                                <p className="text-base font-semibold text-black">
                                                    IITM Pravartak
                                                </p>
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
                                                className="h-12 w-12 border object-cover"
                                            />
                                            <div>
                                                <p className="text-base font-semibold text-black">
                                                    ICFAI
                                                </p>
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
                                                className="h-12 w-12 border object-cover"
                                            />
                                            <div>
                                                <p className="text-base font-semibold text-black">
                                                    IIT Delhi
                                                </p>
                                                <p className="text-sm text-[#666666]">
                                                    Professional Certificate Program in Data Analytics,
                                                    Generative AI
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Job Location */}
                                <div className="rounded-[30px] border p-5">
                                    <h3 className="mb-4 text-[28px] font-bold">
                                        Jobs by Location
                                    </h3>

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
            <FeaturedJob title="Jobs you might be interested in" classname="my-11" />
        </>
    );
}
