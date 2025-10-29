"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

import img1 from "@/assets/carpetCleaning.webp";
import img2 from "@/assets/moveInCleaning.webp";
import img3 from "@/assets/deepCleaning.webp";

import NavMenu from "./NavMenu";

export default function HeroSection() {
    const images = [img1, img2, img3];
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="relative bg-[#eeede4] flex items-center justify-center">
            <div className="absolute inset-0 md:hidden">
                {images.map((img, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }} // triggers when 30% visible
                        transition={{ duration: 1 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={img}
                            alt="Residential cleaning background"
                            fill
                            className="object-cover"
                            quality={50}
                            priority={index === 0}
                        />

                    </motion.div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-[#eeede4]/10 via-transparent to-transparent md:to-[#eeede4]/100"></div>
            </div>

            {/* 🌟 Main Content */}
            <div className="relative flex flex-col md:flex-row h-screen overflow-hidden w-[90%] md:w-[70%] justify-center items-center z-10">
                <NavMenu />

                {/* Left: Text Section */}
                <div className="relative z-10 max-w-lg text-center md:text-left space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true, amount: 0.3 }}
                        style={{ lineHeight: 0.95 }}
                        className="text-4xl sm:text-5xl tracking-tighter lg:text-6xl font-[900] text-[#f0a04a] leading-tight"
                    >
                        A Cleaner Home,{" "}
                        <br />
                        <span className="text-[#007082]">Every Single Time</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-base sm:text-lg text-gray-500 font-[500] max-w-md mx-auto md:mx-0"
                    >
                        Trusted residential cleaning that makes your space shine —
                        effortless, consistent, and eco-friendly.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                        className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-8"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#b75f12" }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#ffaf4a] cursor-pointer text-[#1a080b] px-8 py-3 rounded-full font-semibold shadow-md transition-all"
                        >
                            Get a Free Quote
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05, backgroundColor: "#007082" }}
                            whileTap={{ scale: 0.95 }}
                            className="border border-[#007082] text-[#007082] px-8 py-3 rounded-full font-semibold hover:bg-[#007082] hover:text-white transition-all"
                        >
                            Call Us 24/7
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right: Slider (Desktop only) */}
                <div className="relative hidden md:block w-1/2 h-full overflow-hidden">
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 1 }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={img}
                                alt="Residential cleaning"
                                fill
                                className="object-cover"
                                quality={50}
                            />
                        </motion.div>
                    ))}

                    {/* Side Gradient for smooth blend */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-l from-[#eeede4]/10 via-transparent to-transparent md:to-[#eeede4]/100"></div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#eeede4]/10 via-transparent to-transparent md:to-[#eeede4]/100"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
