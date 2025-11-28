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
    <div className="my-8 flex flex-wrap gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => handleClick(cat)}
          className={`rounded-[6px] border px-4 py-2 text-sm font-normal transition ${
            active === cat
              ? "border-black bg-black text-white"
              : "border-[#000000] text-[#000000] hover:bg-gray-100"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
