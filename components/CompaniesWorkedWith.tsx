"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import a1 from "@/assets/companyWorkedWith/amcCommercial.webp";
import a2 from "@/assets/companyWorkedWith/kfc.jpg";
import a3 from "@/assets/companyWorkedWith/strathfieldPartners.webp";
import a4 from "@/assets/companyWorkedWith/raineAndHorne.webp";
import a5 from "@/assets/companyWorkedWith/rayWhite.webp";
import a6 from "@/assets/companyWorkedWith/ducati.png";
import a7 from "@/assets/companyWorkedWith/mcdonalds.png";

const companies = [
  { name: "AMC Commercials", logo: a1 },
  { name: "KFC", logo: a2 },
  { name: "Strathfield Partners", logo: a3 },
  { name: "Raine And Horne", logo: a4 },
  { name: "Ray White", logo: a5 },
  { name: "Ducati", logo: a6 },
  { name: "Mc Donald's", logo: a7 },
];

export default function CompaniesWorkedWith() {
  return (
    <section className="py-20 bg-gray-50 flex items-center justify-center">
      <div className="w-full md:w-[70%] overflow-hidden">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center"
        >
          Companies We’ve Worked With
        </motion.h2>

        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-12 whitespace-nowrap"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: companies.length * 4, // adjust speed per image
                ease: "linear",
              },
            }}
          >
            {[...companies, ...companies].map((company, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center min-w-[100px] sm:min-w-[120px] md:min-w-[140px]"
              >
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    quality={80}
                    className="object-contain"
                  />
                </div>
                <p className="text-gray-600 text-xs sm:text-sm md:text-base font-medium text-center">
                  {company.name}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
