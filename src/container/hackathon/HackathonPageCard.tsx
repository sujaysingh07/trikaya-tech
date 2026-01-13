import { Icons } from "@/public/icons/icon";
import { Badge } from "@/src/components/ui/badge";
import { CalendarDays, MapPin, Trophy } from "lucide-react";
import Image from "next/image";
export default function HackathonPageCard() {
    return <div className="overflow-hidden rounded-xl py-0 w-[410px] border border-gray-200" >
        <div className="relative">
            <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978"
                alt="hackathon"
                className="h-44 w-full object-cover"
                width={400}
                height={400}
            />
            <div className="flex gap-2 absolute top-4 left-4 ">
                <Badge className="bg-[#62AAD0] text-[14px] font-bold">General</Badge>
                <Badge className="bg-[#FFB82E] text-white text-[14px] font-bold">Intermediate</Badge>
                <Badge className="bg-primary-color text-white text-[14px] font-bold">Upcoming</Badge>
            </div>
        </div>
        <div className="px-5 py-6">

            <div className="flex flex-col gap-3">
                <h2 className="text-[20px] font-semibold leading-[25px]">Trikaya Blockchain & AI Lab Hackathon</h2>
                <p className="text-base font-semibold leading-[25px] text-[#666666]">Build Industry Grade Blockchain & AI Lab Modules</p>
            </div>
            <div className="flex flex-col gap-2 mt-2">
                <div className="flex gap-2 items-center">
                    <Icons variant="Building" color="#0A58F5" />
                    <span className="text-black text-base font-medium">Trikaya in collaboration with BeetleX</span>
                </div>
                <div className="flex gap-2 items-center">
                    <CalendarDays color="#0A58F5" />
                    <span className="text-black text-base font-medium">Jan 14, 2026</span>
                </div>
                <div className="flex gap-2 items-center">
                    <MapPin color="#0A58F5" />

                    <span className="text-black text-base font-medium">Online</span>
                </div>
                <div className="flex gap-2 items-center">
                    <Trophy color="#0A58F5" />
                    <span className="text-black text-base font-medium">$50,000 Prize Pool</span>
                </div>
            </div>

        </div>
    </div>
}
