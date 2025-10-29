"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import beforeImg1 from "@/assets/beforeAfter/before.jpg";
import afterImg1 from "@/assets/beforeAfter/after.jpg";
import beforeImg2 from "@/assets/beforeAfter/before-new-1.jpg";
import afterImg2 from "@/assets/beforeAfter/after-new-1.jpg";
import beforeImg3 from "@/assets/beforeAfter/before-new-2.jpg";
import afterImg3 from "@/assets/beforeAfter/after-new-2.jpg";

function Slider({ beforeImg, afterImg, id }: { beforeImg: any; afterImg: any; id: string }) {
    const [x, setX] = useState(50);

    const handleDrag = (event: MouseEvent | TouchEvent, info: any) => {
        const container = document.getElementById(id);
        if (!container) return;
        const rect = container.getBoundingClientRect();
        let newX = ((info.point.x - rect.left) / rect.width) * 100;
        newX = Math.min(100, Math.max(0, newX));
        setX(newX);
    };

    return (
        <div id={id} className="relative w-full h-[300px] sm:h-[350px] md:h-[450px] rounded-2xl shadow-lg overflow-hidden">
            {/* After image */}
            <Image
                src={afterImg}
                alt="After Cleaning"
                fill
                className="object-cover"
                quality={80}
            />

            {/* Before image overlay */}
            <div className="absolute top-0 left-0 h-full overflow-hidden" style={{ width: `${x}%` }}>
                <Image
                    src={beforeImg}
                    alt="Before Cleaning"
                    fill
                    className="object-cover"
                    quality={80}
                />
                <div className="absolute top-4 right-4 bg-white/80 text-gray-900 px-3 py-1 rounded-md font-semibold text-sm md:text-base">
                    Before
                </div>
            </div>

            {/* Draggable divider */}
            <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0}
                onDrag={handleDrag}
                className="absolute top-0 bottom-0 w-1 bg-yellow-400 cursor-col-resize z-20"
                style={{ left: `${x}%`, x: "-50%" }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-yellow-500 rounded-full w-6 h-6 shadow-lg border-2 border-white"></div>
                <div className="absolute top-4 left-4 bg-white/80 text-gray-900 px-3 py-1 rounded-md font-semibold text-sm md:text-base">
                    After
                </div>
            </motion.div>
        </div>
    );
}

export default function BeforeAfterGallery() {
    return (
        <section className="py-24 bg-gray-100 flex flex-col items-center px-4 sm:px-6">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center max-w-full sm:max-w-[90%] md:max-w-[70%]"
            >
                Some of Our <span className="bg-yellow-300 px-2 rounded-md">Before & After</span> Cleaning Services
            </motion.h2>

            <div className="flex flex-col gap-8 md:flex-row w-full sm:w-[95%] md:w-[70%]">
                <Slider beforeImg={beforeImg1} afterImg={afterImg1} id={"slider-1"} />
                <Slider beforeImg={beforeImg2} afterImg={afterImg2} id={"slider-2"} />
                <Slider beforeImg={beforeImg3} afterImg={afterImg3} id={"slider-3"} />
            </div>
        </section>
    );
}
