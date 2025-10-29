"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import React from "react"
import type { FC } from "react"

interface Service {
    title: string
    price: string
    description: string
    features: string[]
}

const services: Service[] = [
    {
        title: "General Clean",
        price: "$139",
        description:
            "Great for homes looking for a touch up clean. Recommended if your home is regularly cleaned & maintained.",
        features: ["Bedrooms", "Bathrooms", "Kitchen", "Living/Dining", "Vacuuming"],
    },
    {
        title: "Deep Clean",
        price: "$209",
        description: "Recommended if your home has not been professionally cleaned in over 30 days.",
        features: ["Skirting Boards", "Dust Cornices", "Window Frames", "Window Ledges", "Remove Cobwebs"],
    },
    {
        title: "End Of Lease",
        price: "$350",
        description: "Recommended if you're moving out of a rental property and need your bond back.",
        features: ["Inside Windows", "Inside Oven", "Inside Cupboards", "Wall Spot Cleaning", "Range-Hood"],
    },
]

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
        },
    },
}

const featureVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: (i: number) => ({
        opacity: 1,
        x: 0,
        transition: { delay: i * 0.05, duration: 0.4 },
    }),
}

const PriceWeOffer: FC = () => {
    const phrases = [
        "Premium Service, Fair Price",
        "Trusted by 3000+ Sydney Homes",
        "Effortless Clean, Every Time",
    ]
    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {
        const interval = setInterval(() => setCurrent((prev) => (prev + 1) % phrases.length), 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <section className="w-full py-16 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-white flex justify-center">
            <div className="w-full md:w-[70%] max-w-7xl">
                {/* Header */}
                <motion.div className="text-center mb-12 md:mb-16" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6 }}>
                    <motion.p
                        className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Our Services
                    </motion.p>

                    <motion.h2
                        key={phrases[current]}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.8 }}
                        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4"
                    >
                        {phrases[current]}
                    </motion.h2>

                    <p className="text-base sm:text-lg text-slate-600 max-w-3xl mx-auto">
                        Trusted by 3000+ Sydney homes. Simple, transparent cleaning solutions with no hidden fees or contracts.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                >
                    {services.map((service, index) => (
                        <motion.div key={index} className="group relative" whileHover="hover">
                            {/* Card Glow */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 0.5 }}
                            />

                            {/* Card Content */}
                            <div className="relative bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 flex flex-col shadow-sm hover:shadow-lg transition-shadow duration-300 h-full">
                                <motion.div className="mb-6">
                                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">{service.title}</h3>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl sm:text-3xl font-bold text-teal-600">{service.price}</span>
                                    </div>
                                </motion.div>

                                <p className="text-slate-600 text-sm sm:text-base mb-6 flex-grow">{service.description}</p>

                                <motion.div className="space-y-2 mb-6" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                                    {service.features.map((feature, featureIndex) => (
                                        <motion.div key={featureIndex} className="flex items-center gap-2 sm:gap-3" custom={featureIndex} variants={featureVariants}>
                                            <motion.div className="flex-shrink-0" whileHover={{ scale: 1.2, rotate: 360 }} transition={{ duration: 0.3 }}>
                                                <Check className="w-4 sm:w-5 h-4 sm:h-5 text-teal-600" />
                                            </motion.div>
                                            <span className="text-slate-700 text-sm sm:text-base font-medium">{feature}</span>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                <motion.button
                                    whileHover={{ scale: 1.05, backgroundColor: "#b75f12" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-[#ffaf4a] cursor-pointer text-[#1a080b] px-6 sm:px-8 py-2 sm:py-3 rounded-full font-semibold shadow-md transition-all"
                                >
                                    Book Now
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div className="text-center mt-12 md:mt-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.6, delay: 0.3 }}>
                    <p className="text-slate-600 mb-4">Not sure which service is right for you?</p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        type="submit"
                        className="mt-4 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-full shadow-lg transition-all"
                    >
                        Contact Us for a Free Quote
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

export default PriceWeOffer
