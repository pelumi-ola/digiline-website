"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Dial *13035#",
    description:
      "Open your phone dialer and dial *13035# to access our digital services menu instantly.",
  },
  {
    number: "02",
    title: "Select a Service",
    description:
      "Browse through available services including games, trivia, voice services, and premium content.",
  },
  {
    number: "03",
    title: "Confirm Subscription",
    description:
      "Follow the on-screen instructions to confirm and activate your preferred service.",
  },
  {
    number: "04",
    title: "Start Enjoying",
    description:
      "Enjoy interactive entertainment, knowledge-based trivia, and engaging digital experiences right on your mobile device.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.25 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function DialSubscription() {
  const [dialText, setDialText] = useState("");
  const ussdCode = "*13035#";

  // USSD typing animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDialText(ussdCode.slice(0, i + 1));
      i++;
      if (i === ussdCode.length) clearInterval(interval);
    }, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-24 px-6 lg:px-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Background Pulsing Signal */}
      <div className="absolute top-10 right-10 w-28 h-28 rounded-full bg-primary/20 animate-ping"></div>
      <div className="absolute top-20 left-10 w-24 h-24 rounded-full bg-primary/30 animate-ping delay-150"></div>

      {/* Header */}
      <div className="max-w-6xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-primary font-bold text-lg"
        >
          How To Subscribe
        </motion.h2>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-3xl md:text-5xl font-bold text-secondary mt-4"
        >
          Dial <span className="text-primary">*13035#</span> and Start Exploring
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 text-sm md:text-base mt-6 max-w-3xl mx-auto"
        >
          Access our exciting digital services directly from your mobile phone.
          Simply dial the USSD code and follow the prompts to activate your
          preferred service within seconds.
        </motion.p>
      </div>

      {/* Steps + Phone Mockup */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto gap-12">
        {/* Steps */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 flex-1"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={item}
              className="relative bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="absolute -top-5 left-6 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold shadow-xl text-lg">
                {step.number}
              </div>

              <h4 className="text-lg md:text-xl font-semibold text-secondary mt-4 mb-2">
                {step.title}
              </h4>

              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                {step.description}
              </p>

              {/* Animated Arrow to next step */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: "100%" }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  className="absolute right-[-50%] top-1/2 transform -translate-y-1/2 w-12 h-1 bg-primary rounded-full"
                >
                  <div className="w-4 h-4 bg-primary rotate-45 transform absolute right-0 top-0 translate-x-1/2 -translate-y-1/2"></div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Phone Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative flex-1 flex justify-center items-center"
        >
          <div className="relative w-52 h-[28rem] md:w-60 md:h-[28rem] bg-gray-900 rounded-4xl shadow-2xl overflow-hidden border-4 border-primary/20">
            {/* Glowing Top Speaker */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-2 bg-primary rounded-full opacity-40 animate-pulse"></div>

            {/* Phone Screen */}
            <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-11/12 h-[calc(100%-4rem)] bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 rounded-3xl shadow-inner flex flex-col justify-center items-center text-white font-mono text-2xl">
              <motion.div
                animate={{ opacity: [0, 1] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
                className="mb-4 text-4xl md:text-5xl"
              >
                📱
              </motion.div>
              <div className="flex gap-1 mb-5">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-200"></span>
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-400"></span>
              </div>
              <div className="bg-gray-700 w-3/4 p-5 rounded-xl text-center text-2xl md:text-3xl font-bold shadow-lg">
                {dialText}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Note */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-gray-600 text-sm md:text-base mt-16 max-w-2xl mx-auto"
      >
        Available on supported mobile networks. Experience seamless digital
        services instantly with just a dial.
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary/20 rounded-full animate-ping delay-300"></div>
      </motion.p>
    </section>
  );
}
