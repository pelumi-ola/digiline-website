"use client";
import React from "react";
import Image from "next/image";
import { airtelIcon, gloIcon, mobile9, mtnicon } from "@/assets";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1], // smooth cubic
    },
  },
};
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export function Partners() {
  const partners = [mtnicon, gloIcon, airtelIcon, mobile9];
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
    >
      {/* Partners Section */}
      <section className="py-16 md:py-24 md:px-20 px-4">
        <div className="text-center mb-12 md:mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Partners
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 p-10 bg-white shadow-[0px_8px_10px_-6px_rgba(0,0,0,0.4),0px_16px_24px_2px_rgba(0,0,0,0.3),0px_6px_30px_5px_rgba(0,0,0,0.2)] hover:shadow-md transition-shadow">
          {partners.map((value, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="border border-[#C78EFF] p-8 flex items-center justify-center"
            >
              <Image
                src={value}
                alt="partner logo"
                className="h-auto object-contain"
              />
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
