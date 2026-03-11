"use client";

import { motion } from "framer-motion";
import {
  FaMobileAlt,
  FaGamepad,
  FaGraduationCap,
  FaNetworkWired,
  FaTabletAlt,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    title: "Easy Access Anytime",
    text: "Users can enjoy our services instantly using simple USSD codes like *13035# or through supported mobile platforms.",
    icon: <FaMobileAlt size={26} />,
    gradient: "from-purple-500/20 to-indigo-500/20",
    iconBg: "from-purple-500 to-indigo-500",
  },
  {
    title: "Engaging Entertainment",
    text: "From interactive games to trivia and digital content, our services are designed to keep users entertained and engaged.",
    icon: <FaGamepad size={26} />,
    gradient: "from-pink-500/20 to-purple-500/20",
    iconBg: "from-pink-500 to-purple-500",
  },
  {
    title: "Educational & Rewarding",
    text: "Some services improve knowledge and mental skills while rewarding top participants with exciting prizes.",
    icon: <FaGraduationCap size={26} />,
    gradient: "from-blue-500/20 to-purple-500/20",
    iconBg: "from-blue-500 to-purple-500",
  },
  {
    title: "Reliable Telecom Integration",
    text: "Our products operate seamlessly through telecom networks, ensuring reliable access for millions of mobile users.",
    icon: <FaNetworkWired size={26} />,
    gradient: "from-indigo-500/20 to-purple-500/20",
    iconBg: "from-indigo-500 to-purple-500",
  },
  {
    title: "Accessible on Any Device",
    text: "Whether on smartphones or feature phones, our services are designed to work across multiple devices.",
    icon: <FaTabletAlt size={26} />,
    gradient: "from-violet-500/20 to-purple-500/20",
    iconBg: "from-violet-500 to-purple-500",
  },
  {
    title: "Trusted Digital Services",
    text: "Our platform powers secure, high-quality digital experiences trusted by users and telecom partners.",
    icon: <FaShieldAlt size={26} />,
    gradient: "from-purple-600/20 to-fuchsia-500/20",
    iconBg: "from-purple-600 to-fuchsia-500",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function WhyChooseSection() {
  return (
    <section className="relative py-24 px-4 lg:px-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative floating glow */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-purple-400/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-52 h-52 bg-indigo-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-primary font-bold text-lg"
        >
          Why Choose Our Products
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-secondary mt-2"
        >
          Digital Experiences Designed for Everyday Users
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gray-600 text-sm md:text-base mt-6 max-w-3xl mx-auto"
        >
          Our Value Added Services (VAS) are built to deliver fun, engaging, and
          useful digital experiences directly to mobile users.
        </motion.p>
      </div>

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <svg
          className="w-full max-w-5xl opacity-20"
          viewBox="0 0 800 400"
          fill="none"
        >
          <path
            d="M50 100 C200 50, 300 150, 400 100 S650 150, 750 100"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="animate-pulse"
          />

          <path
            d="M50 300 C200 250, 300 350, 400 300 S650 350, 750 300"
            stroke="url(#gradient)"
            strokeWidth="2"
            strokeDasharray="8 8"
            className="animate-pulse"
          />

          <defs>
            <linearGradient id="gradient">
              <stop offset="0%" stopColor="#9D66F1" />
              <stop offset="100%" stopColor="#6C4CF1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      {/* Cards */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-10"
      >
        {features.map((item, index) => (
          <motion.div
            key={index}
            variants={item}
            className={`group relative p-8 rounded-3xl bg-gradient-to-br ${item.gradient} backdrop-blur-lg border border-white/40 shadow-lg hover:shadow-[0_20px_60px_rgba(124,58,237,0.35)] transition-all duration-500 hover:-translate-y-3`}
          >
            {/* Pulsing node */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-500 rounded-full animate-ping z-0"></div>
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-purple-500 rounded-full z-0"></div>

            {/* Glow overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition rounded-3xl z-0"></div>
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition z-0">
              <div className="w-full h-full bg-white/80 rounded-3xl"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-indigo-400/20 blur-2xl opacity-0 group-hover:opacity-100 transition z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-white mb-5 bg-gradient-to-br ${item.iconBg} shadow-md`}
              >
                {item.icon}
              </div>

              <h4 className="text-lg md:text-xl font-semibold text-secondary mb-3">
                {item.title}
              </h4>

              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
