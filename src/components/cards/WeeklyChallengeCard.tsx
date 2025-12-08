
import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/public/icons/icon";

export default function WeeklyChallengeCard({title,points,category,challenge_url,image,duration}:{title:string, points:string, category:string, challenge_url:string, image:string, duration:string}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-[#1E1E1E] bg-white transition-all duration-300 hover:shadow-lg">
      <div className="relative h-[140px] w-full sm:h-[150px]">
        <Image
          src={image || "/images/AI-model.png"}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
        <div>
          <h3 className="mb-3 text-[18px] font-semibold text-[#03061E] sm:text-[20px]">
            {title}
          </h3>

          <p className="mb-2 flex items-center gap-2 text-xs text-[#666666] sm:text-sm">
            <Icons variant="Clock" color="#666666" />
            {duration ?? "2 Weeks"}
          </p>


          <div className="mb-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-[#EBEAEA] px-2 py-1 text-[10px] text-[#475569] sm:px-3 sm:text-xs">
              {category}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <Link
            href={challenge_url || "#"}
            target="_blank"
            className="bg-primary-color rounded-md px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#1556C8] sm:px-4 sm:text-sm"
          >
            Start
          </Link>
          <p className="text-primary-color text-sm font-semibold sm:text-base">
            {points} KP
          </p>
        </div>
      </div>
    </div>
  );
}
