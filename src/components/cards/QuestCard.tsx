"use client";
import { Icons } from "@/public/icons/icon";
import { QuestDataProps } from "@/src/lib/types/commonTypes";
import { motion } from "framer-motion";
import Link from "next/link";

export default function QuestCard({ quest }: QuestDataProps) {

  const formatDuration = (min: number) => {
    const h = Math.floor(min / 60);
    const m = min % 60;
    if (!h) return `${m} mins`;
    if (!m) return `${h} hrs`;
    return `${h} hrs ${m} mins`;
  };

  const difficultyStyle =
    quest.difficulty.toLocaleLowerCase() === "advanced"
      ? "bg-[#0A58F5] text-white"
      : quest.difficulty.toLocaleLowerCase() === "intermediate"
      ? "bg-[#F7FFD1] text-[#1D9402]"
      : "bg-[#FFF4DD] text-[#FF8C00]";

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="flex flex-col justify-between rounded-[30px] border border-[#CCCCCC] bg-white p-6 transition-all duration-300"
    >
      <div>
        <div className="mb-4 flex items-center justify-between">
          <span className={`rounded-full px-3 py-1 text-base font-medium capitalize ${difficultyStyle}`}>
            {quest.difficulty}
          </span>

          <p className="flex items-center gap-1 text-sm font-bold text-black">
            <Icons variant="Clock" />
            {formatDuration(quest.duration)}
          </p>
        </div>

        <h3 className="mb-2 text-xl font-semibold text-[#03061E]">
          {quest.title}
        </h3>

        <p className="mb-6 text-base leading-relaxed text-[#03061E]">
          {quest.description}
        </p>

        <div className="inline-flex items-center rounded-full bg-[#EBEAEA] px-3 py-1 text-xs font-bold text-[#475569]">
         {quest.points} KP
        </div>
      </div>

      <div className="mt-6 flex">
        <Link
        target="_blank"
          href={quest.quests_url || "#"}
          className="block w-full max-w-[164px] rounded-md bg-[#2563EB] px-4 py-3 text-center text-[20px] font-semibold text-white transition hover:bg-[#1556C8]"
        >
          Join Quest
        </Link>
      </div>
    </motion.div>
  );
}
