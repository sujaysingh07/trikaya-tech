"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { id: "learn", label: "Learn" },
        { id: "practice", label: "Practice" },
        { id: "arena", label: "Arena" },
        { id: "mentorship", label: "Mentorship" },
        { id: "jobs", label: "Jobs & Internship" },
        { id: "community", label: "Community" },
        { id: "business", label: "Business" },
        { id: "resources", label: "Resources" },
    ];

    // ✅ Scroll to section smoothly
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            // Update hash in the URL (optional)
            window.history.replaceState(null, "", `#${id}`);
        }
        setIsOpen(false); // close mobile menu after click
    };

    // ✅ Optional: Auto-scroll when page loads with hash
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
                    <Image
                        src="/logo-trikaya.svg"
                        alt="Trikaya Logo"
                        width={176}
                        height={50}
                        priority
                    />
                </div>

                {/* Desktop Menu + Button */}
                <div className="hidden md:flex items-center gap-6 lg:gap-8">
                    {/* Nav Links */}
                    <div className="flex items-center gap-5 lg:gap-8">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-sm md:text-[13px] cursor-pointer lg:text-[15px] font-medium text-[#000000] hover:text-black transition"
                            >
                                {item.label}
                            </button>
                        ))}
                    </div>

                    {/* Launch App Button */}
                    <button className="px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition">
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
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm md:text-[13px] lg:text-[15px] font-medium text-[#000000] hover:text-black transition"
                        >
                            {item.label}
                        </button>
                    ))}
                    <button className="w-full mt-3 px-4 py-2 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition">
                        Launch App
                    </button>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
