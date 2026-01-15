import { Icons } from "@/public/icons/icon";
import Image, { StaticImageData } from "next/image";
type PropsI = {
   name:string,
   company:string,
   avatar:string | StaticImageData,
   qoute:string,
   accent:string
}
export default function TestimonialCards({
  name,
  avatar,
  qoute,
  accent,
  company,
}:PropsI) {
  return (

      <div className="relative flex flex-col gap-4 justify-between rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
        {/* Quote icon */}
          <div className="flex flex-col gap-3">

        <div
          className="w-12 h-12"
        >
          <Icons variant="Qoute" color={accent}/>
        </div>

        {/* Quote text */}
          <p className=" text-base font-normal leading-relaxed text-[#666666]">
          {qoute}
        </p>
          </div>


        {/* Footer */}
        <div className=" flex items-center gap-3">
          <Image
            src={avatar}
            alt={name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-full border"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">{name}</p>
            <p className="text-xs text-gray-500">{company}</p>
          </div>
        </div>
      </div>

  );
}
