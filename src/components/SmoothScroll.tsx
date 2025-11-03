"use client";

import { useEffect, useRef } from "react";
import Lenis from "@studio-freight/lenis";

interface SmoothScrollProps {
    children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.1,
            // smoother easing curve
            easing: (t) => 1 - Math.pow(2, -10 * t),
            smoothWheel: true,
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-expect-error
            smoothTouch: true,
            touchMultiplier: 1.2, // better for Mac trackpads & touch devices
            wheelMultiplier: 0.8, // balance for Linux & Mac
            normalizeWheel: true, // ensures consistent wheel delta across devices
            gestureOrientation: "vertical",
            infinite: false,
        });

        lenisRef.current = lenis;

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <div className="overflow-hidden">{children}</div>;
}
