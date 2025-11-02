"use client";
import { useEffect, useState } from "react";
import Container from "./ui/Container";

// ─── Data ───────────────────────────────────────────────
const statsData = [
    { value: 50, suffix: "K+", label: "ACTIVE LEARNER" },
    { value: 100, suffix: "+", label: "EXPERT MENTORS" },
    { value: 100, suffix: "+", label: "PRACTICE CHALLENGES" },
    { value: 100, suffix: "+", label: "ACTIVE JOBS & INTERNSHIP" },
];

// ─── Animated Number ─────────────────────────────────────
const AnimatedNumber = ({ target, duration = 2000 }:{target:number,duration?:number}) => {
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
const StatCard = ({ value, suffix, label }:{value:number,suffix:string,label:string}) => (
    <div className="flex flex-col items-center">
        <h3 className="text-3xl sm:text-4xl font-extrabold text-black flex items-baseline">
            <AnimatedNumber target={value} />
            <span className="text-[55px] sm:text-3xl ml-1 font-light">{suffix}</span>
        </h3>
        <p className="text-lg sm:text-sm font-bold text-[#000000] uppercase tracking-wide mt-1">
            {label}
        </p>
    </div>
);

// ─── Stats Section ───────────────────────────────────────
const StatsSection = () => {
    return (
        <section>
            <Container className="py-12">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
                    {statsData.map((stat, index) => (
                        <StatCard key={index} {...stat} />
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default StatsSection;
