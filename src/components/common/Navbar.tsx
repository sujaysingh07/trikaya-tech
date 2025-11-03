"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const navItems = [
        { id: "learn", label: "Learn", path: "/learn" },
        { id: "practice", label: "Practice", path: "/practice" },
        { id: "arena", label: "Arena", path: "/arena" },
        { id: "mentorship", label: "Mentorship", path: "/mentorship" },
        { id: "jobs", label: "Jobs & Internship", path: "/jobs" },
        { id: "community", label: "Community", path: "/community" },
        { id: "business", label: "Business", path: "/business" },
        { id: "resources", label: "Resources", path: "/resources" },
    ];

    // ✅ Scroll to section smoothly or navigate
    const handleNavigation = (id: string, path: string) => {
        const section = document.getElementById(id);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState(null, "", `#${id}`);
        } else {
            router.push(path);
        }

        setIsOpen(false);
    };

    // ✅ Auto-scroll when the page loads with hash in URL
    useEffect(() => {
        const hash = window.location.hash;
        if (hash) {
            const target = document.getElementById(hash.substring(1));
            if (target) {
                setTimeout(() => {
                    target.scrollIntoView({ behavior: "smooth" });
                }, 300);
            }
        }
    }, []);

    return (
        <nav className="w-full border-b border-gray-200 bg-white">
            <Container className="flex items-center justify-between py-3 md:py-4">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <Link href="/">
                        <Image
                            src="/logo/logo-trikaya.svg"
                            alt="Trikaya Logo"
                            width={176}
                            height={50}
                            priority
                        />
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    <div className="flex items-center gap-5 lg:gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => handleNavigation(item.id, item.path)}
                                className="text-sm md:text-[13px] cursor-pointer lg:text-[15px] font-medium text-[#000000] hover:text-black transition"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    <button
                        onClick={() => router.push("/app")}
                        className="px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition"
                    >
                        Launch App
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-gray-800"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </Container>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-3 bg-white border-t border-gray-100">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleNavigation(item.id, item.path)}
                            className="block w-full text-left text-sm cursor-pointer md:text-[13px] lg:text-[15px] font-medium text-[#000000] hover:text-black transition"
                        >
                            {item.label}
                        </button>
                    ))}
                    <button
                        onClick={() => router.push("/app")}
                        className="w-full mt-3 px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition"
                    >
                        Launch App
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
