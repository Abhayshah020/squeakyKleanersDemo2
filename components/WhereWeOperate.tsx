"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const operationAreas = {
    "Inner West Sydney": [
        "Abbotsford", "Annandale", "Ashfield", "Balmain", "Burwood",
        "Camperdown", "Chiswick", "Concord", "Croydon", "Dulwich Hill",
        "Five Dock", "Leichhardt", "Lewisham", "North Strathfield",
        "Rhodes", "Rozelle", "Stanmore", "Strathfield", "Ultimo"
    ],
    "Eastern Sydney": [
        "Alexandria", "Beaconsfield", "Bondi", "Clovelly", "Coogee",
        "Double Bay", "Dover Heights", "Kensington", "La Perouse",
        "Maroubra", "Mascot", "Paddington", "Potts Point", "Randwick",
        "Redfern", "Rosebery", "Rose Bay", "Surry Hills", "Vaucluse",
        "Waterloo", "Watsons Bay", "Waverley"
    ],
    "Lower North Shore Sydney": [
        "Artarmon", "Balmoral", "Cammeray", "Castle Cove", "Greenwich",
        "Kirribilli", "Linley Point", "Longueville", "Milsons Point",
        "Mosman", "Naremburn", "North Sydney", "Northwood", "Riverview",
        "St. Leonards", "Willoughby", "Wollstonecraft"
    ],
    "Other Suburbs": [
        "Arncliffe", "Baulkham Hills", "Beverly Hills", "Bexley",
        "Blacktown", "Castle Hill", "Chippendale", "Dee Why",
        "Earlwood", "Freshwater", "Hurstville", "Kellyville",
        "Liverpool", "Macquarie Park", "Manly", "Merrylands",
        "Millers Point", "Parramatta"
    ],
};

export default function WhereWeOperate() {
    const [activeTab, setActiveTab] = useState<keyof typeof operationAreas>(
        "Inner West Sydney"
    );

    const tabs = Object.keys(operationAreas);

    return (
        <section className="py-20 bg-gray-50 w-full flex flex-col items-center">
            <div className="max-w-6xl sm:w-[100%] md:w-[70%] lg:w-[70%] text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12">
                    Where Do We Operate
                </h2>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-6 mb-10">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab as keyof typeof operationAreas)}
                            className={`px-6 py-2 cursor-pointer rounded-full font-semibold transition ${activeTab === tab
                                ? "bg-blue-600 text-white shadow-lg"
                                : "bg-white text-gray-800 hover:bg-gray-100"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Animated Addresses */}
                <div className="overflow-hidden relative h-12">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            animate={{ x: ["0%", "-100%"] }}
                            transition={{
                                repeat: Infinity,
                                repeatType: "loop",
                                duration: 30, // adjust speed here
                                ease: "linear",
                            }}
                            className="absolute whitespace-nowrap flex gap-6 text-gray-700 font-medium text-lg"
                        >
                            {operationAreas[activeTab].map((area, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-1 bg-white rounded-full shadow-sm border border-gray-200"
                                >
                                    {area}
                                </span>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
