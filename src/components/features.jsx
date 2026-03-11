"use client";

import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaGamepad,
  FaMicrophone,
  FaTabletAlt,
  FaShieldAlt,
  FaGift,
} from "react-icons/fa";

const features = [
  {
    title: "Quick USSD Access (*13035#)",
    icon: <FaMobileAlt size={20} />,
  },
  {
    title: "Interactive Games and Trivia",
    icon: <FaGamepad size={20} />,
  },
  {
    title: "Voice-based Digital Services",
    icon: <FaMicrophone size={20} />,
  },
  {
    title: "Mobile-Friendly Digital Platforms",
    icon: <FaTabletAlt size={20} />,
  },
  {
    title: "Secure and Reliable Telecom Integration",
    icon: <FaShieldAlt size={20} />,
  },
  {
    title: "Weekly Rewards on Selected Services",
    icon: <FaGift size={20} />,
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function KeyFeaturesSection() {
  return (
    <section className="py-16 md:py-24 px-4 lg:px-25 bg-[#ffffff]">
      <div className="max-w-7xl mx-auto text-center mb-14">
        <h2 className="text-[#af75e2] font-bold text-lg">Key Features</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-[#800bb3] mt-2">
          What Makes Our Digital Services Stand Out
        </h3>
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={item}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-start gap-4 relative overflow-hidden hover:shadow-2xl transition"
          >
            {/* Gradient Circle with Icon */}
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-white mb-2"
              style={{
                background:
                  "linear-gradient(135deg, #af75e2, rgb(128, 11, 211))",
              }}
            >
              {feature.icon}
            </div>

            <p className="text-sm md:text-base text-[#000000] font-semibold">
              {feature.title}
            </p>

            {/* Decorative Pulse Dot */}
            <span className="absolute top-4 right-4 w-3 h-3 bg-[#af75e2] rounded-full animate-ping opacity-60"></span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
