// components/common/GenericButton.tsx
import Link from "next/link";
import React from "react";
import Container from "../ui/Container";

interface GenericButtonProps {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
  align?: "left" | "center" | "right";
  className?: string;
}

export default function GenericButton({
  label,
  href,
  variant = "primary",
  align = "left",
  className = "",
}: GenericButtonProps) {
  return (
    <Container>
      <div
        className={`flex pb-10 ${
          align === "center"
            ? "justify-center"
            : align === "right"
            ? "justify-end"
            : "justify-start"
        }`}
      >
        <Link
          href={href}
          className={`
          px-6 py-3 rounded-md text-lg font-semibold text-center transition w-full whitespace-nowrap md:w-auto
          ${
            variant === "primary"
              ? "bg-primary-color text-white hover:bg-[#0048d9] border border-gray-200"
              : "bg-black text-white hover:bg-gray-800"
          }
          ${className}
        `}
        >
          {label}
        </Link>
      </div>
    </Container>
  );
}
