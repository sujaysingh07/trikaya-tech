"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  placeholder?: string;
  onChange?: (value: string) => void;
}

export default function SearchBar({
  placeholder = "Search articles, topics or authors...",
  onChange,
}: SearchBarProps) {
  return (
    <div className="flex w-full max-w-[600px] items-center gap-3 rounded-xl border-transparent bg-[#F5F5F5] px-4 py-3 text-sm font-normal transition focus-within:border-gray-300">
      <Search size={18} className="text-gray-500" />
      <input
        type="text"
        className="w-full bg-transparent text-sm text-gray-700 outline-none"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
