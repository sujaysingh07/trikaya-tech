"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Container from "./ui/Container";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        "Learn",
        "Practice",
        "Arena",
        "Mentorship",
        "Jobs & Internship",
        "Community",
        "Business",
        "Resources",
    ];

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
                            <Link
                                key={item}
                                href="#"
                                className="text-sm md:text-[13px] lg:text-[15px] font-medium text-[#000000] hover:text-black transition"
                            >
                                {item}
                            </Link>
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
                        <Link
                            key={item}
                            href="#"
                            className="block text-base font-medium text-gray-700 hover:text-black transition"
                        >
                            {item}
                        </Link>
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
