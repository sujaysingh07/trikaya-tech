import { Icons } from "@/public/icons/icon"
import AppBreadcrumb from "@/src/components/AppBreadcrumb"
import { AnimatedUnderlineLink } from "@/src/components/ui/AnimatedUnderlineLink"
import Container from "@/src/components/ui/Container"
import { SquareArrowOutUpRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import HackathonTabs from "./HackathonTabs"
export default function HackathonDetailsConatiner() {
    return <Container>
        <div className="my-10">
            <AppBreadcrumb />
            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                {/* LEFT CONTENT */}
                <div className="pt-2">
                    <h1 className="text-2xl font-bold">Trikaya Blockchain & AI Lab Hackathon</h1>
                    <span>
                        Build Industry Grade Blockchain & AI Lab Modules
                    </span>
                    <div className="mt-2 flex flex-wrap items-center gap-5 text-sm text-[#4F5162]">
                        <div className="flex items-center gap-2">
                            <Icons variant="LocationPin" color="#4F5162" />
                            Online
                        </div>

                        <div className="flex items-center gap-2">
                            <Icons variant="Building" color="#666666" />
                            Trikaya in collaboration with BeetleX
                        </div>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-3">
                        <span className="rounded-full bg-primary-color px-3 py-1 text-sm font-bold text-white">
                            Upcoming
                        </span>
                        <span className="rounded-full bg-[#FFB82E] px-3 py-1 text-sm font-bold text-black">
                            Intermediate
                        </span>
                        <span className="rounded-full bg-white border border-primary-color px-3 py-1 text-sm font-bold text-primary-color">
                            General
                        </span>
                    </div>
                </div>



            </div>
            <div className="mt-11 grid grid-cols-1 gap-8 lg:grid-cols-3">
                {/* LEFT CONTENT */}
                <div className="space-y-6 lg:col-span-2">
                    {/* Header */}

                    <div className="overflow-hidden rounded-[30px]">
                        <Image
                            src="/job-banner.png"
                            alt="Job Banner"
                            width={900}
                            height={400}
                            priority
                            className="h-[200px] w-full object-cover sm:h-[280px] md:h-[340px] lg:h-[380px]"
                        />
                    </div>

                <HackathonTabs
                        tabs={["Overview", "Prices", "Guidelines"]}
                        defaultTab="Overview"
                />


                </div>

                {/* RIGHT SIDEBAR */}
                <aside className="sticky space-y-8 top-0">
                    <HackathonTimeCard />
                    <HackathonTimeline />
                    <HackathonOrganizer />
                </aside>
            </div>
        </div>
    </Container>
}


export function HackathonTimeCard() {
    return (
        <div className="w-full max-w-sm rounded-[30px] border-2 border-[#CCCCCC] bg-white p-8 ">
            {/* Badge */}
            <div className="absolute -top-10 left-0 -z-9 ">
                <svg width="219" height="100" viewBox="0 0 219 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 30C0 13.4315 13.4315 0 30 0H138.477C145.289 0 151.898 2.31842 157.217 6.57394L207.217 46.5739C229.362 64.2892 216.835 100 188.477 100H30C13.4315 100 0 86.5685 0 70V30Z" fill="black" />
                </svg>
                <span className="absolute top-2.5 left-8 text-white text-base font-extrabold">10days left</span>
            </div>


            <h3 className="text-[28px] font-bold tracking-normal leading-[100%]">Registration</h3>

            <div className="my-3 h-0.5 bg-[#CCCCCC]" />

            <div className="space-y-3 text-sm">
                <div className="flex gap-2">
                    <Icons variant="BlueCalender" color="#0A58F5" />
                    <div className="text-base">
                        <p className="text-[#666666]  font-medium">Opens</p>
                        <p className="font-bold">Jan 14, 2026 • 5:35 AM</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Icons variant="BlueClock" />
                    <div className="text-base">
                        <p className="text-[#666666] text-base font-medium">Closes</p>
                        <p className="font-bold">Jan 28, 2026 • 5:25 AM</p>
                    </div>
                </div>

                <div className="my-3 h-px bg-[#CCCCCC]" />

                <p className="text-base font-medium text-center text-gray-500">
                    Registration is currently closed
                </p>
            </div>
        </div>
    );
}



export function HackathonTimeline() {
    return (
        <div className="w-full max-w-sm rounded-[30px] border-2 border-[#CCCCCC] bg-white p-8 ">
            <h3 className="text-[28px] font-bold tracking-normal leading-[100%]">Timeline</h3>

            <div className="my-3 h-0.5 bg-[#CCCCCC]" />

            <div className="space-y-3 text-sm">
                <div className="flex gap-2">
                    <Icons variant="BlueCalender" color="#0A58F5" />
                    <div>
                        <p className="font-bold text-base">Hackathon Start</p>
                        <p className="font-bold text-[#666666]">Jan 14, 2026 • 5:35 AM</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <Icons variant="BlueCalender" color="#DE572A" />
                    <div>
                        <p className="font-bold text-base">Hackathon End</p>
                        <p className="font-bold text-[#666666]">Feb 23, 2026 • 5:25 AM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function HackathonOrganizer() {
    return (
        <div className="w-full max-w-sm rounded-[30px] border-2 border-[#CCCCCC] bg-white p-8 ">
            <h3 className="text-[28px] font-bold tracking-normal leading-[100%]">Organizer</h3>

            <div className="my-3 h-[1.5px] bg-[#CCCCCC]" />

            <p className="font-bold text-base">
                Trikaya in collaboration with BeetleX
            </p>

            <div className="flex items-center gap-2 mt-2">
                <SquareArrowOutUpRight color="#0A58F5"/>
                <AnimatedUnderlineLink href="#" className="text-primary-color">
                    Visit Website
                </AnimatedUnderlineLink>
            </div>
        </div>
    );
}

