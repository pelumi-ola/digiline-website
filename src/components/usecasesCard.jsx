"use client";
import React from "react";
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
      staggerChildren: 0.2,
    },
  },
};

export default function UsecasesCard() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="py-16 md:py-24 px-4 md:px-20 bg-white"
    >
      <motion.div
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Real-World Applications
          </h2>
          <p className="text-gray-600 text-base max-w-2xl mx-auto">
            See how organizations leverage our solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {[
            {
              title: "Financial Services",
              description:
                "Banks use our USSD and payment solutions for account management and transactions.",
              features: [
                "USSD Banking",
                "Payment Processing",
                "Fraud Detection",
              ],
            },
            {
              title: "E-Commerce",
              description:
                "Online retailers use our SMS and payment solutions for customer engagement.",
              features: [
                "SMS Notifications",
                "Payment Gateway",
                "Order Updates",
              ],
            },
            {
              title: "Telecommunications",
              description:
                "Telecom operators use our services for customer communication and billing.",
              features: [
                "Airtime Distribution",
                "SMS Alerts",
                "Billing Integration",
              ],
            },
          ].map((useCase, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl border border-purple-200"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {useCase.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">
                {useCase.description}
              </p>
              <ul className="space-y-2">
                {useCase.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <span className="w-2 h-2 bg-purple-600 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
