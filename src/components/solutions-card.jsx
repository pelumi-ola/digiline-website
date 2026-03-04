"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { icon001, icon003, icon005, icon007, icon008, icon009 } from "@/assets";
import { Button } from "@/components/ui/button";
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

export default function SolutionsCards() {
  const solutions = [
    {
      icon: icon003,
      title: "SMS & USSD Authentication Solutions (OTP & 2FA)",
      href: "/solutions/sms-ussd",
      bg: "bg-[linear-gradient(180deg,rgb(106,13,173)_0%,rgb(155,48,255)_100%)]",
      description:
        "Secure logins, transactions, and sensitive data using OTP and Two Factor Authentication via SMS and USSD.",
    },
    {
      icon: icon001,
      title: "Content Subscription & Delivery Solutions",
      href: "/solutions/content-subscription",
      bg: "bg-[linear-gradient(180deg,rgb(138,43,226)_0%,rgb(218,112,214)_100%)]",
      description:
        "Distribute news, music, videos, games, and educational content via SMS/USSD with airtime-based payments.",
    },
    {
      icon: icon005,
      title: "Micropayments Solutions",
      href: "/solutions/micro-payments",
      bg: "bg-[linear-gradient(180deg,rgb(75,0,130)_0%,rgb(138,43,226)_100%)]",
      description:
        "Enable small-value transactions using mobile airtime balance, especially in regions with limited banking access.",
    },
    {
      icon: icon007,
      title: "Product Authenticity & Verification",
      href: "/solutions/product-auth",
      bg: "bg-[linear-gradient(180deg,rgb(106,13,173)_0%,rgb(155,48,255)_100%)]",
      description:
        "Combat counterfeit products with instant verification through SMS, USSD, or QR codes to build trust and transparency.",
    },
    {
      icon: icon008,
      title: "Voice-Based Solutions",
      href: "/solutions/voiced-based",
      bg: "bg-[linear-gradient(180deg,rgb(138,43,226)_0%,rgb(218,112,214)_100%)]",
      description:
        "Interactive Voice Response (IVR), voice broadcasting for promotions, feedback collection, and emergency alerts.",
    },
    {
      icon: icon009,
      title: "Custom API Development",
      href: "/developer",
      bg: "bg-[linear-gradient(180deg,rgb(75,0,130)_0%,rgb(138,43,226)_100%)]",
      description:
        "Secure and scalable APIs tailored to your business needs, delivering seamless integrations, robust security, and flexible, innovative solutions designed to grow with your operations.",
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
      className="py-16 md:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          variants={staggerContainer}
          className="bg-[#D7D5F4] rounded-2xl p-8"
        >
          <div className="text-start mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Core Services
            </h2>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 cursor-pointer">
            {solutions.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`flex flex-col items-center text-white py-5 px-3 rounded-xl shadow-lg ${item.bg}`}
              >
                <div className="mb-4">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={70}
                    height={70}
                  />
                </div>

                <h2 className="font-semibold text-md text-center">
                  {item.title}
                </h2>
                <div className="w-30 h-px bg-[#FFD500] my-2 rounded-full"></div>
                <p className="text-sm opacity-90 text-center">
                  {item.description}
                </p>

                <Link href={item.href} className="mt-5">
                  <Button className="bg-white text-ring cursor-pointer hover:bg-purple-100 font-semibold p-3 rounded-sm uppercase text-sm tracking-wide">
                    Learn More
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
