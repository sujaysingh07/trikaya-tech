"use client";

import React, { useState } from "react";

interface CategoryFilterProps {
  categories: string[];
  onChange?: (category: string) => void;
}

export default function CategoryFilter({
  categories,
  onChange,
}: CategoryFilterProps) {
  const [active, setActive] = useState("All");

  const handleClick = (cat: string) => {
    setActive(cat);
    onChange?.(cat);
  };

  return (
    <div className="flex flex-wrap gap-3 my-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`px-4 py-2 rounded-[6px] text-sm font-normal border transition ${
            active === cat
              ? "bg-black text-white border-black"
              : "text-[#000000] border-[#000000] hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
