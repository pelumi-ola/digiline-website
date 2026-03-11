"use client";
import { Hero } from "@/components/hero";
import { contactheroImg, supporttextImg } from "@/assets";
import { BsArrowRight } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import FAQAccordion from "@/components/faq-accordion";
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

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <Hero
        title="Support"
        textLinkLeft={{
          label: "Contact",
          href: "/contact",
        }}
        textLinkRight={{
          label: "Support",
          href: "/support",
        }}
        backgroundImage={contactheroImg}
      />

      {/* Support & FAQ Section */}
      <motion.section className="py-20 bg-[#F3F3F5] relative">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible" // animate on scroll
            viewport={{ once: false, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-16"
          >
            {/* LEFT SIDE */}
            <motion.div variant={slideLeft}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6">
                Contact Supports
              </h2>

              {/* Illustration */}
              <div className="mb-10">
                <Image
                  src={supporttextImg} // replace with your asset
                  alt="Support Illustration"
                  width={350}
                  height={350}
                  className="object-contain"
                />
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Still have a question ?
              </h3>

              <button className="bg-primary text-white px-8 py-3 rounded-md flex items-center gap-3 shadow-md hover:opacity-90 transition">
                SEND A REQUEST
                <BsArrowRight />
              </button>
            </motion.div>

            {/* RIGHT SIDE - FAQ */}
            <motion.div variant={slideRight}>
              <h2 className="text-lg font-semibold text-gray-900 mb-6 text-right md:text-right">
                FAQs
              </h2>

              <FAQAccordion />
            </motion.div>
          </motion.div>
        </div>

        {/* Floating WhatsApp */}
        <div className="fixed bottom-6 right-6 flex items-center gap-3 bg-white px-4 py-2 rounded-full shadow-lg">
          <FaWhatsapp className="text-green-500 w-5 h-5" />
          <span className="text-xs text-gray-700">Need Help? Chat with Us</span>
        </div>
      </motion.section>
    </div>
  );
}
