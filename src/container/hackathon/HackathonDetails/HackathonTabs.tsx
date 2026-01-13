'use client'
import { useState } from "react";

type TabsProps = {
    tabs: string[];
    defaultTab?: string;
};

export default function HackathonTabs({
    tabs,
    defaultTab,
}: TabsProps) {
    const [activeTab, setActiveTab] = useState(
        defaultTab ?? tabs[0]
    );

    const activeIndex = tabs.indexOf(activeTab);
    const tabWidth = 100 / tabs.length;

    return (
        <div className="w-full rounded-lg bg-gray-100 p-0.5">
            <div className="relative flex w-full">
                {/* Sliding Indicator */}
                <div
                    className="absolute top-1 bottom-1 rounded-md bg-black transition-all duration-300"
                    style={{
                        width: `${tabWidth}%`,
                        left: `${activeIndex * tabWidth}%`,
                    }}
                />

                {/* Tabs */}
                {tabs.map((tab) => {
                    const isActive = tab === activeTab;

                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                cursor-pointer
                relative z-10 flex-1 py-3 text-sm font-medium transition-colors
                ${isActive
                                    ? "text-white"
                                    : "text-gray-600 hover:text-black"}
              `}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
