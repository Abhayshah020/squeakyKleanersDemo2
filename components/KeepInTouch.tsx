"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function KeepInTouch() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className="py-16 sm:py-20 bg-gray-50 flex justify-center w-full">
            <div className="w-[95%] sm:w-[90%] md:w-[70%]">
                {/* Title Section */}
                <motion.div
                    className="text-center mb-8 sm:mb-10"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
                        Keep in <span className="bg-yellow-300 px-2 rounded-md">Touch</span>
                    </h2>
                    <p className="text-gray-600 text-sm sm:text-base md:text-lg">
                        We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
                    </p>
                </motion.div>

                {/* Contact Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg space-y-4 sm:space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-yellow-300 outline-none placeholder-gray-400 text-gray-900 transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-yellow-300 outline-none placeholder-gray-400 text-gray-900 transition-all"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+61 000 000 000"
                                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-yellow-300 outline-none placeholder-gray-400 text-gray-900 transition-all"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-yellow-300 outline-none placeholder-gray-400 text-gray-900 transition-all"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Your Message</label>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Write your message..."
                            rows={5}
                            className="w-full border border-gray-300 rounded-lg px-3 sm:px-4 py-2 sm:py-3 focus:ring-2 focus:ring-yellow-300 outline-none resize-none placeholder-gray-400 text-gray-900 transition-all"
                            required
                        ></textarea>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        className="w-full cursor-pointer sm:w-auto bg-yellow-400 text-gray-900 font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg shadow-md hover:bg-yellow-300 transition-all"
                    >
                        Send Message
                    </motion.button>
                </motion.form>
            </div>
        </section>
    );
}
