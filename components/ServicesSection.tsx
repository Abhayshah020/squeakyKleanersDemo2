"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Example images
import residentialImg from "@/assets/cleaningImage2.jpg";
import carpetCleaning from "@/assets/carpetCleaning.webp";
import deepCleaning from "@/assets/deepCleaning.webp";
import regularCleaning from "@/assets/regularCleaning.png";
import ovenCleaning from "@/assets/ovenCleaning.png";
import apartmentCleaning from "@/assets/apartmentCleaning.png";
import generalCleaning from "@/assets/generalCleaning.png";
import commercialCleaning from "@/assets/commercialCleaning.jpg";

const services = [
    {
        title: "Regular Cleaning",
        image: residentialImg,
    },
    {
        title: "Carpet Cleaning",
        image: carpetCleaning,
    },
    {
        title: "Deep Cleaning",
        image: deepCleaning,
    },
    {
        title: "End of Lease Cleaning",
        image: regularCleaning,
    },
    {
        title: "Oven Cleaning",
        image: ovenCleaning,
    },
    {
        title: "Appartment Cleaning",
        image: apartmentCleaning,
    },
    {
        title: "General Cleaning",
        image: generalCleaning,
    },
    {
        title: "And Many More",
        image: commercialCleaning,
    },
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-gray-50 flex flex-col items-center">
            {/* Main Title */}
            <div className="flex flex-col w-[90%] sm:w-[85%] md:w-[70%] items-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-3xl capitalize sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-center"
                >
                    We Provide {" "}
                    <span className="bg-yellow-300 rounded-md">9 Kinds</span> {" "}
                    of residential Cleaning
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-gray-600 text-center mb-12 max-w-full sm:max-w-lg md:max-w-xl"
                >
                    While we can customize your cleaning plan to suit your needs.
                </motion.p>

                {/* Services Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 w-full">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.2 }}
                            viewport={{ once: true, amount: 0.4 }}
                            className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:scale-102 cursor-pointer transition-transform"
                        >
                            <div className="relative w-28 h-28 sm:w-25 sm:h-25 md:w-30 md:h-30 mb-4">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    quality={80}
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <h3
                                style={{ lineHeight: 1.1 }}
                                className="text-lg sm:text-l md:text-l font-semibold text-gray-900 mb-2"
                            >
                                {service.title}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
