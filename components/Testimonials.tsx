"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Review {
    review: string;
    rate: number;
    name: string;
    position: string;
}

const reviews: Review[] = [
    {
        review:
            "We've been using Squeaky Kleaners for a while now for our Sydney office, and I can honestly say they’re top-notch. The team is always punctual, professional, and incredibly thorough. It's a real weight off my shoulders knowing the office is spotless every morning. Highly recommend them to any business needing reliable commercial cleaners!",
        rate: 4.5,
        name: "Jack Thompson",
        position: "Office Manager, Sydney Tech Solutions",
    },
    {
        review:
            "Squeaky Kleaners have been a lifesaver for our firm! Our clients constantly comment on how clean and fresh our office feels. The attention to detail is spot on – not a speck of dust in sight. The team is friendly, trustworthy, and always goes the extra mile. Couldn’t ask for better service here in Sydney!",
        rate: 5,
        name: "Sarah O'Conors",
        position: "Operations Director, Harbour Lane Law Firm",
    },
    {
        review:
            "Top service from the Squeaky Kleaners crew! They handle our massive commercial space with ease – floors, bathrooms, windows, you name it. Super efficient and always flexible when we have events or late shifts. If you’re looking for quality commercial cleaning in Sydney, these guys are the real deal.",
        rate: 4,
        name: "Lachlan Evans",
        position: "Facilities Coordinator, Sydney City Markets",
    },
    {
        review:
            "Running a busy medical centre, cleanliness is crucial – and Squeaky Kleaners have exceeded all expectations. Their team is professional, discreet, and follows all hygiene protocols perfectly. They’re a huge part of keeping our workplace safe and welcoming. I wouldn't trust anyone else for commercial cleaning around Sydney!",
        rate: 3.5,
        name: "Mia Campbell",
        position: "Practice Manager, Bondi Family Medical Centre",
    },
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-gray-50 w-full flex flex-col items-center justify-center overflow-hidden ">
            <div className="sm:w-[100%] md:w-[70%] lg:w-[70%] text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">
                    What Our Clients Say
                </h2>

                <div className="relative overflow-hidden w-full">
                    <motion.div
                        className="flex gap-3"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 30, // adjust speed here
                            ease: "linear",
                        }}
                    >
                        {/* Repeat testimonials to make infinite loop seamless */}
                        {[...reviews, ...reviews].map((r, idx) => (
                            <div
                                key={idx}
                                className="max-w-[300px] md:max-w-[400px] bg-white p-6 m-5 flex flex-col items-center justify-center rounded-2xl shadow-lg flex-shrink-0"
                            >
                                {/* Rating Stars */}
                                <div className="flex items-center mb-3">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`w-5 h-5 ${i + 1 <= Math.floor(r.rate)
                                                ? "text-yellow-400"
                                                : i < r.rate
                                                    ? "text-yellow-400/50"
                                                    : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                    <span className="ml-2 text-gray-600 font-medium">{r.rate.toFixed(1)}</span>
                                </div>

                                {/* Review Text */}
                                <p className="text-gray-700 mb-4">{r.review}</p>

                                {/* Reviewer */}
                                <div className="mt-2">
                                    <p className="font-semibold text-gray-900">{r.name}</p>
                                    <p className="text-gray-500 text-sm">{r.position}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
