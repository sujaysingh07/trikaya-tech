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
    <div className="w-full max-w-[600px] text-sm bg-[#F5F5F5] font-normal px-4 py-3 rounded-xl flex items-center gap-3 border-transparent focus-within:border-gray-300 transition">
      <Search size={18} className="text-gray-500" />
      <input
        type="text"
        className="bg-transparent outline-none w-full text-sm text-gray-700"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
      />
    </div>
  );
}
