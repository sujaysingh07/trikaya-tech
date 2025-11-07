import React from "react";
import clsx from "clsx";

interface SectionHeaderProps {
  title: string;
  description?: string;
  highlight?: string; // optional colored text inside title
  align?: "left" | "center"; // controls text alignment
  className?: string; // extra class support
  theme?: "light" | "dark"; // NEW: controls text color mode
}

export default function SectionHeader({
  title,
  description,
  highlight,
  align = "left",
  className = "",
  theme = "light", // default: light section
}: SectionHeaderProps) {
  const isDark = theme === "dark";

  return (
    <div
      className={clsx(
        "flex flex-col gap-3 pb-10",
        align === "center" ? "text-center items-center" : "text-left",
        className
      )}
    >
      <h2
        className={clsx(
          "font-bold text-4xl transition-colors duration-300",
          isDark ? "text-white" : "text-black"
        )}
      >
        {title}{" "}
        {highlight && (
          <span
            className={clsx(
              "transition-colors duration-300",
              "text-primary-color"
            )}
          >
            {highlight}
          </span>
        )}
      </h2>

      {description && (
        <p
          className={clsx(
            "max-w-2xl text-base transition-colors duration-300",
            isDark ? "text-gray-300" : "text-gray-700"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
