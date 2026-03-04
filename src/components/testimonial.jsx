"use client";
import React from "react";
import { ImQuotesRight } from "react-icons/im";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
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

export default function Testimonial() {
  const testimonials = [
    {
      company: "MTN",
      name: "Abubakar Hamdalat",
      role: "Operation Director",
      content:
        "Digiline has been a reliable partner for our communication needs. Their SMS and USSD solutions are fast, secure, and easy to integrate, helping us improve customer engagement and streamline our operations. The team is responsive, knowledgeable, and truly understands the telecom space. We highly recommend Digiline for any business looking for scalable VAS solutions",
    },
    {
      company: "Airtel",
      name: "Alex Udochukwu",
      role: "Technical Lead",
      content:
        "Their integration process was seamless and the support team is incredibly responsive. We’ve seen significant improvement in delivery speed and engagement.",
    },
    {
      company: "Glo",
      name: "Mary Johnson",
      role: "Product Manager",
      content:
        "The reliability and scalability of their platform gives us confidence. Digiline understands telecom deeply.",
    },
    {
      company: "9Mobile",
      name: "David Musa",
      role: "Operations Head",
      content:
        "We highly recommend Digiline for VAS solutions. Secure, fast and easy to scale.",
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
      className="py-4 md:py-14 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-20">
        <motion.div
          variants={staggerContainer}
          className="bg-[#D7D5F4] rounded-xl shadow-md px-4 md:px-10 py-10"
        >
          {/* Heading */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
              Don’t take our word for it
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-primary mt-2">
              Trust our customers
            </p>
          </div>

          {/* Navigation Arrows (UI only) */}
          <div className="flex justify-end cursor-pointer">
            <div className="flex justify-center items-center gap-2 mb-5 bg-white rounded-md py-2 px-3 w-20 border border-[#C78EFF]">
              <MdChevronLeft className="w-6 h-6 rounded-3xl bg-primary text-white flex items-center justify-center shadow" />
              <MdChevronRight className="w-6 h-6 rounded-3xl bg-primary text-white flex items-center justify-center shadow" />
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {testimonials.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white shadow-md p-4 flex flex-col justify-between"
              >
                {/* Top */}
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-md  font-bold text-primary uppercase">
                      {item.company}
                    </span>
                    <ImQuotesRight className="text-primary w-5 h-5" />
                  </div>

                  <p className="md:text-[13px] text-[10px] text-ring leading-relaxed text-justify">
                    {item.content}
                  </p>
                </div>

                {/* Bottom Profile */}
                <div className="flex items-center gap-3 mt-6">
                  <Avatar className="w-10 h-10">
                    <AvatarImage
                      src={`https://randomuser.me/api/portraits/${
                        index % 2 === 0 ? "men" : "women"
                      }/${(index * 7) % 100}.jpg`}
                      alt={item.name}
                    />
                    <AvatarFallback>
                      {item.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">
                      {item.name}
                    </h4>
                    <p className="text-xs text-gray-500">{item.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
