"use client";
import React from "react";
import { wdcard001, wdcard002, wdcard003, wdcard004 } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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

export function SalesPerformance() {
  const proven = [
    {
      icon: wdcard001,
      title: "Performance that Speaks",
      desc: "Proven scalability and reliability across global deployments.",
      bg: "bg-[linear-gradient(180deg,rgb(106,13,173)_0%,rgb(155,48,255)_100%)]",
    },
    {
      icon: wdcard002,
      title: "Customer Centric",
      desc: "Tailored solutions built around real business needs.",
      bg: "bg-[linear-gradient(180deg,rgb(138,43,226)_0%,rgb(218,112,214)_100%)]",
    },
    {
      icon: wdcard003,
      title: "Digital Leadership",
      desc: "Driving innovation in a fast-evolving telecom landscape.",
      bg: "bg-[linear-gradient(180deg,rgb(75,0,130)_0%,rgb(138,43,226)_100%)]",
    },
    {
      icon: wdcard004,
      title: "Trust & Partnership",
      desc: "Long-term relationships built on transparency and results.",
      bg: "bg-[linear-gradient(180deg,rgb(95,75,139)_0%,rgb(159,122,234)_100%)]",
    },
  ];

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="py-15 px-3"
    >
      <motion.div
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 lg:px-20"
      >
        {/* Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-4 px-20">
            <div className="flex-1 h-px bg-gray-300"></div>

            <span className="md:text-3xl text-xl font-semibold text-[#000000]">
              WHY DIGILINE
            </span>

            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          <p className="text-sm text-primary mt-2">
            Performance, Scale & Trust You Can Rely On
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Built on proven infrastructure, deep expertise, and customer first
            execution
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-4 mb-16">
          {proven.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`flex flex-col items-center text-white py-6 px-3 rounded-xl shadow-lg ${item.bg}`}
            >
              <div className="mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={70}
                  height={70}
                />
              </div>

              <h2 className="font-semibold text-md md:text-nowrap text-center">
                {item.title}
              </h2>
              <div className="w-25 h-[0.5px] bg-[#192038] my-2 rounded-full"></div>
              <p className="text-sm opacity-90 text-center">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Proven at Scale */}

        <div className="flex items-center justify-center gap-4 px-4 lg:px-20 mb-8">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="text-3xl font-semibold text-[#000000]">
            Proven at Scale
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "50+", label: "Countries Served" },
            { number: "10+", label: "Years Experience" },
            { number: "99.9%", label: "Service Reliability" },
            { number: "1B+", label: "Monthly Transactions" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-[linear-gradient(180deg,rgb(138,43,226)_0%,rgb(218,112,214)_100%)] text-white p-6 rounded-xl text-center shadow-md"
            >
              <h4 className="text-5xl font-bold">{stat.number}</h4>
              <div className="flex-1 h-px bg-[#192038] my-3"></div>
              <p className="text-sm mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm py-8">
          Join us on our journey of growth and innovation as we shape the future
          of telecommunications.
        </p>

        <Link href="/contact" className="flex items-center justify-center">
          <Button className="bg-primary text-white hover:text-ring hover:bg-purple-200 font-semibold px-8 py-8 w-65 rounded-xl uppercase text-sm tracking-wide">
            Partner With Digiline
            <ArrowRight className="w-6 h-6" />
          </Button>
        </Link>
      </motion.div>
    </motion.div>
  );
}
