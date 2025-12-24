"use client";
import { useEffect, useState } from "react";
import Container from "../ui/Container";

// ─── Data ───────────────────────────────────────────────
const statsData = [
  { value: 50, suffix: "K+", label: "ACTIVE LEARNER" },
  { value: 100, suffix: "+", label: "EXPERT MENTORS" },
  { value: 100, suffix: "+", label: "PRACTICE CHALLENGES" },
  { value: 100, suffix: "+", label: "ACTIVE JOBS & INTERNSHIP" },
];

// ─── Animated Number ─────────────────────────────────────
const AnimatedNumber = ({
  target,
  duration = 2000,
}: {
  target: number;
  duration?: number;
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <span>{count.toLocaleString()}</span>;
};

// ─── Single Stat Card ────────────────────────────────────
const StatCard = ({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) => (
  <div className="flex flex-col items-center">
    <h3 className="flex items-baseline text-3xl font-extrabold text-black md:text-[55px]">
      <AnimatedNumber target={value} />
      <span className="ml-1 text-3xl font-light md:text-[55px]">{suffix}</span>
    </h3>
    <p className="mt-1 text-xs font-bold tracking-wide text-[#000000] uppercase md:text-lg">
      {label}
    </p>
  </div>
);

// ─── Stats Section ───────────────────────────────────────
const StatsSection = () => {
  return (
    <section className="mb-11">
      <Container className="">
        <div className="grid grid-cols-2 gap-4 text-center sm:grid-cols-4 md:gap-10">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StatsSection;
