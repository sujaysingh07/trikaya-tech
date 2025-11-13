"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { id: "learn", label: "Learn", path: "/learn" },
    { id: "practice", label: "Practice", path: "/practice" },
    { id: "arena", label: "Arena", path: "/arena" },
    { id: "mentorship", label: "Mentorship", path: "/mentorship" },
    { id: "jobs", label: "Jobs & Internship", path: "/jobs-internship" },
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
    <nav className="w-full bg-[#000000] sticky top-0 z-50">
      <Container className="flex items-center justify-between py-[14px]">
        {/* Logo */}
        <div className="flex items-center gap-2 ">
          <Link href="/">
            <Image
              src="/logo/logo-trikaya-white.svg"
              alt="Trikaya"
              width={158}
              height={49}
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id, item.path)}
                  className={`px-3 py-2 text-sm md:text-[13px] lg:text-[15px] font-semibold cursor-pointer  rounded-md transition-all duration-300 
            ${
              isActive
                ? " text-[#9ABCFF]"
                : "text-white hover:text-[#9ABCFF] hover:bg-primary/5"
            }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Launch App Button */}
          <Link
            href="https://builder.trikaya.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[30px] w-full py-3 max-w-[155px] bg-black border-2 border-[#CCCCCC] text-white rounded-[10px] font-semibold font-base whitespace-nowrap hover:bg-gray-800 transition inline-flex items-center justify-center"
          >
            Launch App
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={24} color="white" />
          ) : (
            <Menu size={24} color="white" />
          )}
        </button>
      </Container>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white border-t border-gray-100">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id, item.path)}
                className={`block w-full text-left text-sm md:text-[13px] lg:text-[15px] font-medium transition 
                  ${
                    isActive
                      ? "text-primary-color border-l-4 border-primary-color pl-2"
                      : "text-[#000000] hover:text-primary-color"
                  }`}
              >
                {item.label}
              </button>
            );
          })}

          <Link
            href="https://builder.trikaya.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[30px] w-full py-3  bg-black border-2 border-[#CCCCCC] text-white rounded-[10px] font-semibold font-base whitespace-nowrap hover:bg-gray-800 transition inline-flex items-center justify-center"
          >
            Launch App
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
