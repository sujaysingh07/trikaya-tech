import Image from "next/image";
import SectionHeader from "@/src/components/common/SectionHeader";
import Container from "@/src/components/ui/Container";
import DoubtFormSection from "./DoubtForm/DoubtForm";
import Link from "next/link";

export default function DoubtSection() {
    return (
        <Container>
            <SectionHeader
                title="Got Doubts"
                description="We are here to help you out"
            />

            <div className="mt-10 grid gap-10 lg:grid-cols-2 items-center">
                {/* Left Illustration */}
                <div className="flex justify-center">
                    <Image
                        src="/support.png"
                        alt="Support illustration"
                        width={420}
                        height={360}
                        className="w-full h-full"
                    />
                </div>

                {/* Right Form Card */}
                <div className="rounded-2xl bg-blue-50 p-6 sm:p-8 shadow-sm">
                   <DoubtFormSection/>
                    <div className="mt-1 text-[#666666] font-normal  text-[12px]">I authorise Trikaya to contact me with course updates & offers via emails/SMS/Whatsapp/Call. I have read and agree to <Link href="/privacy-policy" target="_blank" className="font-extrabold  underline">Privacy Policy</Link> & <Link href="/terms-of-service" target="_blank" className="font-extrabold underline">Terms of Use</Link></div>
                </div>
            </div>
        </Container>
    );
}
