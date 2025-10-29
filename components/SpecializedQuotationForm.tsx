"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SpecializedQuotationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
    });

    const services = [
        "Commercial Cleaning",
        "Strata Cleaning",
        "Construction Cleaning",
        "Office Cleaning",
        "Pub Cleaning",
        "Gym Cleaning",
        "Residential Cleaning",
        "End-of-Lease Cleaning",
    ];

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // You can integrate your API call here
    };

    return (
        <section className="py-20 bg-gray-50 flex justify-center px-4 sm:px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 w-full sm:w-[90%] md:w-[70%]"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
                    Get Your <span className="bg-yellow-300 px-2 rounded-md">Specialized Quotation Now!</span>
                </h2>
                <p className="text-gray-600 mb-8 text-center">
                    Fill out the form below and we’ll provide a customized cleaning quote tailored to your needs.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col sm:flex-row gap-5">
                        {/* Name */}
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-300 outline-none transition-all placeholder-gray-400 text-gray-900"
                            required
                        />

                        {/* Email */}
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-300 outline-none transition-all placeholder-gray-400 text-gray-900"
                            required
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-5">
                        {/* Phone */}
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="Your Phone"
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-300 outline-none transition-all placeholder-gray-400 text-gray-900"
                            required
                        />

                        {/* Select Service */}
                        <select
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full cursor-pointer border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-yellow-300 outline-none transition-all text-gray-900"
                            required
                        >
                            <option value="">Select Service</option>
                            {services.map((s, idx) => (
                                <option key={idx} value={s}>
                                    {s}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Submit */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        type="submit"
                        className="mt-4 cursor-pointer bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-full shadow-lg transition-all"
                    >
                        Get Quotation
                    </motion.button>
                </form>
            </motion.div>
        </section>
    );
}
