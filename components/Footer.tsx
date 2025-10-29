"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, ExternalLink } from "lucide-react";
import logo from "@/assets/companyLogo.png";

export default function Footer() {
  const socialIcons = [
    { Icon: Facebook, link: "#" },
    { Icon: Instagram, link: "#" },
    { Icon: Linkedin, link: "#" },
    { Icon: ExternalLink, link: "#" },
  ];

  const footerLinks = {
    Links: ["Privacy Policy", "Terms & Conditions", "Terms of Service", "Refund & Cancellation Policy"],
    Support: ["Careers", "Help Center", "FAQ", "Contact"],
  };

  return (
    <footer className="bg-gray-950 text-gray-200 py-16 flex flex-col items-center">
      <div className="w-[95%] sm:w-[90%] md:w-[70%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & Description */}
        <div className="flex flex-col gap-4">
          <Image src={logo} alt="Squeaky Kleaners" width={140} height={50} quality={80} />
          <p className="text-gray-400 text-sm">
            Making Aussie homes and workplaces shine, one clean at a time.
          </p>
          <div className="flex gap-3 mt-2">
            {socialIcons.map(({ Icon, link }, idx) => (
              <motion.a
                key={idx}
                whileHover={{ scale: 1.2, rotate: 10 }}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.a>
            ))}
          </div>
        </div>

        {/* Links & Support */}
        {Object.entries(footerLinks).map(([title, items], idx) => (
          <div key={idx}>
            <h4 className="text-lg font-semibold mb-3">{title}</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {items.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact & Location */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Contact Us</h4>
          <div className="space-y-3 text-gray-400 text-sm">
            <div>
              <p className="font-medium">Phone</p>
              <p>+61 281 115 865</p>
              <p>+61 451 220 844 (After Hours)</p>
            </div>
            <div>
              <p className="font-medium">Email</p>
              <p>info@squeakykleaners.com.au</p>
            </div>
            <div>
              <p className="font-medium">Address</p>
              <p>200A Marion Street, Bankstown, 2200</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-12 border-t border-gray-800 pt-6 w-[95%] sm:w-[90%] md:w-[75%] text-center text-gray-500 text-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        © {new Date().getFullYear()} Squeaky Kleaners. All rights reserved.
      </motion.div>
    </footer>
  );
}
