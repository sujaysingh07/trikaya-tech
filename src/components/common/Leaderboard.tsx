import Image from "next/image";
import Container from "../ui/Container";

const leaderboardData = [
  {
    rank: 1,
    name: "Alex Chen",
    badges: 12,
    xp: "15,420 XP",
    growth: "+240",
    color: "bg-[#22C55E]",
  },
  {
    rank: 2,
    name: "Sarah Kumar",
    badges: 12,
    xp: "15,420 XP",
    growth: "+240",
    color: "bg-[#FACC15]",
  },
  {
    rank: 3,
    name: "Michael Zhang",
    badges: 12,
    xp: "15,420 XP",
    growth: "+240",
    color: "bg-[#EF4444]",
  },
  {
    rank: 4,
    name: "Emma Rodriguez",
    badges: 12,
    xp: "15,420 XP",
    growth: "+240",
    color: "bg-[#94A3B8]",
  },
  {
    rank: 5,
    name: "James Wilson",
    badges: 12,
    xp: "15,420 XP",
    growth: "+240",
    color: "bg-[#94A3B8]",
  },
];

export default function Leaderboard() {
  return (
    <Container className="relative pt-16 overflow-hidden">
      <div className="relative mx-auto rounded-[30px] flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <div className="relative  w-[65%] bg-[#F0F5FF] rounded-[30px] p-8 md:p-10 z-10 ">
          <h2 className="text-2xl md:text-[37px] font-extrabold leading-[100%] text-black mb-8">
            Top Performers This Month
          </h2>

          <div className="flex flex-col">
            {leaderboardData.map((player) => (
              <div
                key={player.rank}
                className="flex items-center justify-between py-3 md:py-4 transition-all duration-300 max-w-[600px]"
              >
                {/* Left: Rank + Name */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-8 h-8 md:w-10 md:h-10 ${player.color} text-white font-semibold rounded-full flex items-center justify-center`}
                  >
                    {player.rank}
                  </div>
                  <div>
                    <h3 className="text-base md:text-[20px] font-semibold text-black">
                      {player.name}
                    </h3>
                    <p className="text-base text-gray-700">
                      {player.badges} badges earned
                    </p>
                  </div>
                </div>

                {/* Right: XP + Growth */}
                <div className="flex flex-col items-end">
                  <p className="text-base md:text-[20px] font-semibold text-black">
                    {player.xp}
                  </p>
                  <p className="text-base text-[#1D9402] flex items-center gap-1">
                    <svg
                      width="22"
                      height="15"
                      viewBox="0 0 22 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.26373 6.2461C7.67538 5.83445 8.3424 5.83445 8.75407 6.2461L11.3451 8.83713L18.0744 2.10782H15.3033C14.7213 2.10782 14.2494 1.63593 14.2494 1.05391C14.2494 0.47189 14.7213 0 15.3033 0H20.6183C21.2006 0 21.6722 0.47189 21.6722 1.05391V6.25612C21.6722 6.83812 21.2006 7.31003 20.6183 7.31003C20.0363 7.31003 19.5647 6.83814 19.5647 6.25612V3.59817L12.0904 11.0724H12.0901C11.6788 11.4841 11.0114 11.4841 10.5997 11.0724L8.00869 8.48141L1.79884 14.6913C1.38752 15.1029 0.720165 15.1029 0.308488 14.6913C-0.102829 14.2799 -0.102829 13.6126 0.308488 13.2009L7.26373 6.2461Z"
                        fill="#1D9402"
                      />
                    </svg>
                    {player.growth}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button className="mt-8 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-base font-semibold py-3 px-6 rounded-lg transition-all">
            View Full Leadership
          </button>
        </div>

        {/* Right Image Overlap */}
        <div className="absolute right-0 bottom-0 md:bottom-auto  z-10 w-[60%] md:w-[45%] h-[545px] rounded-[30px] overflow-hidden shadow-lg">
          <Image
            src="/leaderboard.svg"
            alt="Leaderboard Background"
            fill
            className="object-cover h-full "
          />
        </div>
      </div>
    </Container>
  );
}
