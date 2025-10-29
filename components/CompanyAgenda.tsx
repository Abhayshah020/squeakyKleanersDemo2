"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function CompanyAgenda() {
    return (
        <section className="py-20 bg-white w-full flex items-center justify-center">
            <div className="w-full px-4 sm:px-6 md:px-0 sm:max-w-[95%] md:w-[70%] text-center">
                {/* Heading */}
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
                >
                    Our Agenda
                </motion.h2>

                {/* Animated Intro Text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.2 }}
                    viewport={{ once: true }}
                    className="text-lg md:text-xl text-gray-700 leading-relaxed mb-12"
                >
                    At{" "}
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
                        Squeaky Kleaners
                    </motion.span>
                    , we don’t just clean — we{" "}
                    <motion.span
                        className="text-blue-500 font-semibold"
                        whileInView={{ scale: [1, 1.05, 1], transition: { duration: 1 } }}
                    >
                        transform spaces
                    </motion.span>{" "}
                    into spotless, healthy, and welcoming environments. With a team of
                    highly trained professionals and a passion for detail, we deliver
                    top-quality cleaning services tailored to homes, offices, and
                    businesses of all sizes.
                </motion.p>

                {/* Highlighted Points */}
                <div className="space-y-6 md:space-y-8 text-left max-w-3xl mx-auto">
                    {[
                        {
                            title: "Tailored Cleaning Solutions",
                            text: "Customized services for homes, offices, and commercial spaces.",
                        },
                        {
                            title: "Eco-Friendly & Safe",
                            text: "We use environmentally friendly products and modern equipment.",
                        },
                        {
                            title: "Trusted Professionals",
                            text: "Reliable, detail-focused cleaners committed to excellence.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="flex items-start space-x-4"
                        >
                            <CheckCircle2 className="text-blue-600 mt-1 flex-shrink-0" size={26} />
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
