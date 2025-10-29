"use client";

import { motion } from "framer-motion";
import { Check, Computer, DollarSign, File, FileCheck, Leaf, Sparkles, Star, Verified } from "lucide-react";

const data = [
    {
        icon: <Sparkles className="w-5 sm:w-6 h-5 sm:h-6 text-blue-600" />,
        title: "Experienced Professionals",
    },
    {
        icon: <Leaf className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" />,
        title: "Eco-Friendly Products",
    },
    {
        icon: <Verified className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-500" />,
        title: "Trusted & Vetted Cleaners",
    },
    {
        icon: <Computer className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-500" />,
        title: "Fast & Easy Booking",
    },
    {
        icon: <DollarSign className="w-5 sm:w-6 h-5 sm:h-6 text-green-600" />,
        title: "Transparent, Fair Pricing",
    },
    {
        icon: <Star className="w-5 sm:w-6 h-5 sm:h-6 text-blue-700" />,
        title: "Customisable Service",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="py-16 sm:py-20 bg-white flex justify-center items-center w-full">
            <div className="w-[90%] sm:w-[85%] md:w-[70%] text-center">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                >
                    Why Choose <span className="text-blue-600">Squeaky Kleaners</span>
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-gray-700 text-sm sm:text-base md:text-lg mb-12 relative inline-block"
                >
                    <motion.span
                        className="relative font-semibold text-blue-600"
                        initial={{ backgroundSize: "0% 100%" }}
                        whileInView={{
                            backgroundSize: "100% 100%",
                            transition: { duration: 1.2, ease: "easeInOut" },
                        }}
                        style={{
                            backgroundImage: "linear-gradient(120deg, #3b82f6 0%, #60a5fa 100%)",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "0 100%",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        “Choose Squeaky Kleaners{" "}
                    </motion.span>
                    for reliable, spotless cleaning every time. We make your space shine with care and professionalism.”
                </motion.p>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
                    {data.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-lg transition"
                        >
                            <div className="flex items-center gap-3 mb-2 sm:mb-3">
                                {item.icon}
                                <h3 className="font-semibold text-sm sm:text-base md:text-lg text-gray-900">
                                    {item.title}
                                </h3>
                            </div>
                            <div className="w-8 sm:w-10 h-[2px] bg-yellow-400 rounded-full"></div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-6 mt-10 sm:mt-14">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-blue-600 cursor-pointer text-white font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-blue-700 transition"
                    >
                        Book Now
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        className="border cursor-pointer border-blue-600 text-blue-600 font-semibold px-6 sm:px-8 py-3 rounded-full shadow-md hover:bg-blue-50 transition"
                    >
                        Know More
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
