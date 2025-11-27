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
    { id: "mentorship", label: "Mentorship", path: "#" },
    { id: "jobs", label: "Jobs & internship", path: "#" },
    
    // { id: "internships", label: "Internships", path: "/internships" },
    { id: "community", label: "Community", path: "#" },
    { id: "business", label: "Business", path: "#" },
    // { id: "ambassdor", label: "Ambassdor", path: "#" },
    { id: "resources", label: "Resources", path: "#" },
  ];

  const handleNavigation = (id: string, path: string) => {
    router.push(path);
    setIsOpen(false);
  };

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
      <Container className="flex items-center justify-between py-3.5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo-trikaya-white.svg"
            alt="Trikaya"
            width={158}
            height={49}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <div className="flex items-center gap-2">
            {navItems.map((item) => {
              const isActive = pathname === item.path;

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id, item.path)}
                  className={`px-3 py-2 text-sm md:text-[13px] lg:text-[15px] font-semibold cursor-pointer rounded-md 
                    ${
                      isActive
                        ? "text-[#9ABCFF]"
                        : "text-white hover:text-[#9ABCFF]"
                    }
                  `}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Launch App — Desktop */}
          <Link
            href="https://builder.trikaya.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[30px] w-full py-3 max-w-[155px] bg-black border-2 border-[#CCCCCC] text-white rounded-[10px] font-semibold whitespace-nowrap hover:bg-gray-800 transition inline-flex items-center justify-center"
          >
            Launch App
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X size={24} color="white" />
          ) : (
            <Menu size={24} color="white" />
          )}
        </button>
      </Container>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 bg-white border-t border-gray-100">
          {navItems.map((item) => {
            const isActive = pathname === item.path;

            return (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id, item.path)}
                className={`block w-full text-left text-sm font-medium 
                  ${
                    isActive
                      ? "text-primary-color border-l-4 border-primary-color pl-2"
                      : "text-black hover:text-primary-color"
                  }
                `}
              >
                {item.label}
              </button>
            );
          })}

          {/* Launch App — Mobile */}
          <Link
            href="https://builder.trikaya.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-[30px] w-full py-3 bg-black border-2 border-[#CCCCCC] text-white rounded-[10px] font-semibold whitespace-nowrap hover:bg-gray-800 transition inline-flex items-center justify-center"
          >
            Launch App
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
