"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { QrCode } from "lucide-react";

import qr from '@/assets/mobileAppQr.png';
import playStore from '@/assets/playStore.png';
import appStore from '@/assets/appStore.png';

export default function DownloadAppSection() {
    return (
        <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-16 sm:py-20 flex justify-center">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-[90%] sm:w-[85%] md:w-[70%]">
                {/* Left side: Text content */}
                <motion.div
                    className="flex-1 text-center md:text-left"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
                        Download the App & Enjoy{" "}
                        <span className="text-yellow-500">Stress-Free Cleaning</span>
                    </h2>
                    <p className="text-gray-600 mb-6 sm:mb-8 text-base sm:text-lg">
                        Book expert cleaning services in minutes with the Squeaky Kleaners app.
                        Manage your bookings, track your cleaners, and enjoy a sparkling clean space — all in one tap.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center">
                        <motion.a
                            href="https://play.google.com/store/apps/details?id=com.sqneakycleaners.UserApp"
                            whileHover={{ scale: 1.05 }}
                            className="transition-all duration-300"
                        >
                            <Image
                                src={playStore}
                                alt="Get it on Google Play"
                                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
                                loading="lazy"
                                quality={80}
                            />
                        </motion.a>

                        <motion.a
                            href="https://apps.apple.com/us/app/squeaky-kleaners/id6740815153"
                            whileHover={{ scale: 1.05 }}
                            className="transition-all duration-300"
                        >
                            <Image
                                src={appStore}
                                alt="Download on the App Store"
                                className="h-9 sm:h-10 md:h-11 w-auto object-contain"
                                loading="lazy"
                                quality={80}
                            />
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right side: QR Code Section */}
                <motion.div
                    className="flex-1 flex flex-col items-center justify-center text-center mt-8 md:mt-0"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                        <QrCode className="w-5 sm:w-6 h-5 sm:h-6 text-yellow-500" />
                        Scan the Code to Download Now!
                    </h3>

                    <div className="relative w-36 sm:w-44 md:w-48 h-36 sm:h-44 md:h-48 bg-white p-3 sm:p-4 rounded-2xl shadow-lg border border-gray-200">
                        <Image
                            src={qr}
                            alt="App Download QR Code"
                            fill
                            className="object-contain rounded-xl"
                            loading="lazy"
                            quality={80}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
