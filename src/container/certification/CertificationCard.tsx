import Image, { StaticImageData } from "next/image"
export default function CertificationCard({ title, icon }: { title: string, icon: string | StaticImageData }) {
    return <div className="border border-[#CCCCCC] rounded-[30px]">
        <div className="flex justify-center items-center flex-col min-h-[200px] gap-5">

        <Image src={icon} alt="" width={62} height={62} />
        <h2 className="text-[22px] leading-[25px] font-semibold tracking-[0.5%]">{title}</h2>
        </div>
    </div>
}
