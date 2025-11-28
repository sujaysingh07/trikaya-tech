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
    <nav className="sticky top-0 z-50 w-full bg-[#000000]">
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
        <div className="hidden items-center gap-6 md:flex lg:gap-8">
          <div className="flex items-center gap-2">
            {navItems.map((item) => (
              <div className="group relative" key={item.id}>
                <button
                  onClick={() => !item.children && handleNavigation(item.path)}
                  className={`cursor-pointer rounded-md px-3 py-2 text-sm font-semibold md:text-[13px] lg:text-[15px] ${
                    pathname === item.path
                      ? "text-[#9ABCFF]"
                      : "text-white hover:text-[#9ABCFF]"
                  }`}
                >
                  {item.label}
                </button>

                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute top-full left-0 hidden w-40 flex-col rounded-md bg-white p-2 text-black shadow-md group-hover:flex">
                    {item.children.map((child, index) => (
                      <button
                        key={index}
                        onClick={() => handleNavigation(child.path)}
                        className="w-full cursor-pointer rounded px-3 py-2 text-left text-sm hover:bg-[#CCCCCC]/50"
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
            className="inline-flex w-full max-w-[155px] items-center justify-center rounded-[10px] border-2 border-[#CCCCCC] bg-black px-[30px] py-3 font-semibold whitespace-nowrap text-white transition hover:bg-gray-800"
          >
            Launch App
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="p-2 md:hidden" onClick={() => setIsOpen(!isOpen)}>
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
          "fixed top-18 right-0 left-0 z-50 h-[calc(100vh-64px)] overflow-y-auto bg-white transition-transform duration-1000 ease-in-out",
          isOpen ? "translate-y-0" : "-translate-y-[120%]",
        )}
      >
        {/* Close Button */}

        <div className="flex h-full flex-col px-6">
          <div>
            {navItems.map((item) => {
              const hasChildren = Boolean(item.children);
              return (
                <div key={item.id} className="w-full">
                  <button
                    onClick={() =>
                      hasChildren
                        ? setOpenDropdown(
                            openDropdown === item.id ? null : item.id,
                          )
                        : handleNavigation(item.path)
                    }
                    className="flex w-full items-center justify-between py-3 text-left text-lg font-semibold"
                  >
                    {item.label}
                    {hasChildren && (
                      <ChevronDown
                        className={clsx(
                          "transition-transform duration-300",
                          openDropdown === item.id && "rotate-180",
                        )}
                        size={20}
                      />
                    )}
                  </button>

                  {/* Accordion Dropdown */}
                  {hasChildren && (
                    <div
                      className={clsx(
                        "overflow-hidden pl-4 transition-all duration-300",
                        openDropdown === item.id
                          ? "max-h-40 opacity-100"
                          : "max-h-0 opacity-0",
                      )}
                    >
                      {item.children?.map((child, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigation(child.path)}
                          className="block py-2 text-left text-base text-[#666666] transition hover:text-[#9ABCFF]"
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

          <div className="pt-4" />

          <Link
            href="https://builder.trikaya.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full rounded-lg border-2 border-[#4B4B4B] bg-[#111] py-3 text-center font-semibold text-white transition hover:bg-gray-800"
          >
            Launch App
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
