"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

export default function NavMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const menuItems = ["Home", "Services", "Before After", "About Us", "Contact Us", "Book Online"];

    return (
        <>
            {/* Navbar */}
            <nav className="absolute top-6 left-1/2 -translate-x-1/2 flex justify-between items-center px-4 md:px-6 py-3 rounded-2xl backdrop-blur-md bg-white/10 border border-white/30 z-30 w-full max-w-7xl">
                {/* Phone (md+) */}
                <div className="hidden md:flex items-center gap-2 text-[#1a080b]">
                    <Phone size={22} />
                    <span className="font-medium tracking-wide">+61 28 111 5865</span>
                </div>

                {/* Logo */}
                <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="font-extrabold text-2xl md:text-3xl bg-gradient-to-r from-[#1a080b] to-[#b75f12] bg-clip-text text-transparent drop-shadow-md"
                >
                    Squeaky Kleaners
                </motion.span>

                {/* Right Side */}
                <div className="flex items-center gap-2 md:gap-4">
                    {/* Book Button (md+) */}
                    <motion.button
                        whileHover={{ scale: 1.05, backgroundColor: "#007082" }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:inline border cursor-pointer border-[#007082] text-[#007082] px-6 py-2 rounded-full font-semibold hover:bg-[#eeede4] hover:text-[#fff] transition-all"
                    >
                        BOOK ONLINE
                    </motion.button>

                    {/* Hamburger (sm only) */}
                    <Menu
                        size={26}
                        className="text-[#1a080b] cursor-pointer md:hidden"
                        onClick={() => setIsOpen(true)}
                    />
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-[#1a080b]/95 backdrop-blur-md flex flex-col items-center justify-center space-y-8 px-6"
                    >
                        <X
                            size={32}
                            className="text-[#ffd078] absolute top-6 right-6 cursor-pointer"
                            onClick={() => setIsOpen(false)}
                        />

                        {menuItems.map((item, idx) => (
                            <motion.button
                                key={idx}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative text-[#eeede4] text-2xl sm:text-3xl font-bold tracking-tight uppercase"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                                <motion.span
                                    className="absolute left-0 bottom-0 w-0 h-[3px] bg-gradient-to-r from-[#ffaf4a] to-[#b75f12]"
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
