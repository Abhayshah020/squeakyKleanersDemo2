"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "What is your Satisfaction Guarantee?",
        answer:
            "Our Satisfaction Guarantee is our promise of reliability to you. If you’re not satisfied with the cleaning service delivered, we’re committed to making it right. Here’s how it works: Contact Squeaky Home Clean within 24 hours post-cleaning to share your concerns or issues. For end of lease/move-in cleaning, a 72-hour window is available to report concerns. We’ll arrange a complimentary re-clean on the next available business day, where our team will revisit your property to focus on your areas of concern. If you’re still dissatisfied after the re-clean, we’ll reassess the situation. If we can’t resolve your concerns, a credit or refund will be issued to you accordingly.",
    },
    {
        question: "What forms of payment do you accept?",
        answer:
            "At Squeaky Home Clean, we accept a variety of convenient payment methods to make the process easy for you. These include: Cash, Credit/Debit Cards (Visa, MasterCard, AMEX)",
    },
    {
        question: "Can I customize the cleaning plan?",
        answer:
            "Absolutely! We understand every home and business is different, so we create a tailored cleaning plan based on your specific requirements, schedule, and budget.",
    },
    {
        question: "Do you clean after hours or on weekends?",
        answer:
            "Absolute Yes, We provide flexible scheduling, including evenings and weekends, to avoid disrupting your daily operations. We understand every home and business is different, so we create a tailored cleaning plan based on your specific requirements, schedule, and budget.",
    },
    {
        question: "Are your cleaners trained and insured?",
        answer:
            "Yes, Our team is fully trained, background-checked, and insured to ensure reliable, safe, and professional service.",
    },
    {
        question: "Do you guarantee your work?",
        answer:
            "Yes, Customer satisfaction is our top priority. If anything is missed, we’ll come back and make it right at no extra cost.",
    },
];

export default function FaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-16 sm:py-20 bg-gray-50 flex justify-center w-full">
            <div className="w-[95%] sm:w-[90%] md:w-[70%]">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, amount: 0.4 }}
                    className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-10 text-gray-900"
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-3 sm:space-y-4">
                    {faqs.map((faq, index) => (
                        <button
                            key={index}
                            onClick={() => toggleFaq(index)}
                            className="bg-white cursor-pointer w-full rounded-2xl shadow-md hover:shadow-lg transition p-4 sm:p-5 md:p-6"
                        >
                            <div className="flex justify-between w-full">
                                <span className="font-semibold sm:text-lg md:text-lg text-gray-800">
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: activeIndex === index ? 180 : 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="ml-2 flex-shrink-0"
                                >
                                    <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                                </motion.div>
                            </div>

                            <AnimatePresence initial={false}>
                                {activeIndex === index && (
                                    <motion.div
                                        key="content"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4 }}
                                        className="overflow-hidden mt-2 sm:mt-3"
                                    >
                                        <p className="text-gray-600 text-sm sm:text-base md:text-base leading-relaxed text-left">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
}
