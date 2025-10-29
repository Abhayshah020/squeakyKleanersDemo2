"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import imgLeft from "@/assets/childCareCleaning.png"; // replace with your image
import imgRight from "@/assets/carpetCleaning.webp"; // replace with your image
import Image from "next/image";

export default function SatisfactionGuaranteed() {
    return (
        <section className="bg-[#fff] py-16 flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-6xl px-5 w-full md:w-[70%] md:px-0 flex flex-col md:flex-row items-center gap-6 md:gap-12 relative overflow-hidden"
            >
                <div className="flex-1 flex flex-col md:text-left gap-6 z-10">
                    <motion.h3
                        className="flex gap-5 items-center text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#1a080b]"
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <CheckCircle size={80} />
                        <strong>
                            <span className="bg-yellow-300 ">
                                Satisfaction {" "}
                            </span> <br />
                            <span className="bg-yellow-300 ">
                                Guaranteed
                            </span>
                        </strong>
                    </motion.h3>

                    <motion.p
                        className="text-[#4b4b4b] text-base sm:text-lg md:text-xl leading-relaxed max-w-xl"
                        initial={{ x: 20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        We're confident you'll love our house cleaning in Sydney. However, if you're not 100% satisfied, we'll come back and make things right. Just call or email us within 24 hours of professional cleaning service.
                    </motion.p>
                </div>
                <div className="hidden md:flex justify-center items-center gap-6 md:gap-12 mt-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg"
                    >
                        <Image
                            src={imgLeft}
                            alt="Guaranteed"
                            fill
                            quality={80}
                            className="object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-xl overflow-hidden shadow-lg"
                    >
                        <Image
                            src={imgRight}
                            alt="Guaranteed"
                            fill
                            quality={80}
                            className="object-cover"
                        />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
