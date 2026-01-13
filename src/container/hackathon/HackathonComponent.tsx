"use client";
import { Input } from "@/src/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Icons } from "@/public/icons/icon";
import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import HackathonPageCard from "./HackathonPageCard";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/src/components/ui/input-group";
import { Search } from "lucide-react";

type ViewType = "grid" | "list";

export default function HackathonComponent() {
  const [view, setView] = useState<ViewType>("grid");
  return (
    <div className="my-10 space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="w-[410px]">
          <InputGroup className="bg-[#F5F5F5]">
            <InputGroupInput
              placeholder="Search hackathon..."
              className="w-full max-w-[410px]"
            />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className="flex gap-4">
          <Select>
            <SelectTrigger className="w-[180px] bg-[#F5F5F5] text-black">
              <SelectValue placeholder="All Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="blockchain">Blockchain</SelectItem>
              <SelectItem value="ai">AI</SelectItem>
            </SelectContent>
          </Select>

          <Select>
            <SelectTrigger className="w-40 bg-[#F5F5F5]">
              <SelectValue placeholder="All Levels" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Levels</SelectItem>
              <SelectItem value="beginner">Beginner</SelectItem>
              <SelectItem value="intermediate">Intermediate</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex gap-4">
            <Button
              onClick={() => setView("grid")}
              className={`flex cursor-pointer items-center justify-center rounded-md transition ${
                view === "grid" ? "bg-primary" : "bg-muted hover:bg-muted/70"
              } `}
            >
              <Icons
                variant="GridIcon"
                className="h-5 w-5"
                color={view === "grid" ? "#fff" : "#000"}
              />
            </Button>

            <Button
              onClick={() => setView("list")}
              className={`flex cursor-pointer items-center justify-center rounded-md transition ${
                view === "list" ? "bg-primary" : "bg-muted hover:bg-muted/70"
              } `}
            >
              <Icons
                variant="FlatIcon"
                className="h-5 w-5"
                color={view === "list" ? "#fff" : "#000"}
              />
            </Button>
          </div>
        </div>
      </div>

      {/* 🧩 Cards Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <HackathonPageCard />
      </div>
    </div>
  );
}
