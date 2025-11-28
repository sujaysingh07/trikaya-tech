"use client";

import React, { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import clsx from "clsx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const router = useRouter();
  const pathname = usePathname();

  const navItems = [
    { id: "learn", label: "Learn", path: "/learn" },
    { id: "practice", label: "Practice", path: "/practice" },
    { id: "arena", label: "Arena", path: "/arena" },
    { id: "mentorship", label: "Mentorship", path: "/mentorship" },
    { id: "jobs", label: "Jobs", path: "/jobs" },
    { id: "internship", label: "Internship", path: "/internships" },
    { id: "community", label: "Community", path: "/community" },
    { id: "business", label: "Business", path: "/business" },
    { id: "ambassdor", label: "Ambassdor", path: "/ambassdor" },
    {
      id: "resources",
      label: "Resources",
      path: "#",
      children: [
        { label: "Blog", path: "/blog" },
        { label: "About", path: "/about" },
        { label: "Learning", path: "/learning" },
      ],
    },
  ];

  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false);
    setOpenDropdown(null);
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

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; // Disable scroll
    } else {
      document.body.style.overflow = "auto"; // Enable scroll
    }
  }, [isOpen]);
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
            {navItems.map((item) => (
              <div className="relative group" key={item.id}>
                <button
                  onClick={() => !item.children && handleNavigation(item.path)}
                  className={`px-3 py-2 text-sm md:text-[13px] lg:text-[15px] font-semibold cursor-pointer rounded-md ${
                    pathname === item.path
                      ? "text-[#9ABCFF]"
                      : "text-white hover:text-[#9ABCFF]"
                  }`}
                >
                  {item.label}
                </button>

                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute hidden  group-hover:flex flex-col bg-white text-black rounded-md shadow-md top-full left-0 w-40 p-2">
                    {item.children.map((child, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(child.path)}
                        className="text-left w-full px-3 cursor-pointer py-2 text-sm hover:bg-[#CCCCCC]/50 rounded"
                      >
                        {child.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Launch App Button */}
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
      <div
        className={clsx(
          "fixed left-0 right-0 top-16 bg-white overflow-y-auto z-50 transition-transform duration-500 ease-in-out h-[calc(100vh-64px)] ",
          isOpen ? "translate-y-0" : "-translate-y-[120%]"
        )}
      >
        {/* Close Button */}

        <div className="px-6  flex flex-col justify-between h-full">
          <div>
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children);
              return (
                <div key={item.id} className="w-full">
                  <button
                    onClick={() =>
                      hasChildren
                        ? setOpenDropdown(
                            openDropdown === item.id ? null : item.id
                          )
                        : handleNavigation(item.path)
                    }
                    className="flex items-center justify-between w-full text-left text-lg font-semibold py-3"
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={clsx(
                          "transition-transform duration-300",
                          openDropdown === item.id && "rotate-180"
                        )}
                        size={20}
                      />
                    )}
                  </button>

                  {/* Accordion Dropdown */}
                  {hasChildren && (
                    <div
                      className={clsx(
                        "pl-4 overflow-hidden transition-all duration-300",
                        openDropdown === item.id
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0"
                      )}
                    >
                      {item.children?.map((child, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigation(child.path)}
                          className="block py-2 text-left text-base text-[#666666] hover:text-[#9ABCFF] transition"
                        >
                          {child.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pb-2" />

          <Link
            href="https://builder.trikaya.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 bg-[#111] border-2 border-[#4B4B4B] text-white rounded-lg font-semibold hover:bg-gray-800 transition text-center"
          >
            Launch App
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
