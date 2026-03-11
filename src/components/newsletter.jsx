"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
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

export function Newsletter({
  title = "Subscribe To Our News letter",
  description = "Stay updated with the latest news, product updates, and insights from Digital",
  buttonText = "Get Listed",
}) {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.3,
      }}
      className="flex flex-col md:flex-row bg-[#9D66F1]/44 py-12 md:py-16 md:px-20 px-4 gap-20 md:gap-80"
    >
      <div className="mb-8">
        <h2 className="text-md md:text-2xl font-bold text-[#000000] mb-3 text-balance">
          {title}
        </h2>
        <p className="text-ring text-sm md:text-base">{description}</p>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-row sm:flex-row max-w-md mt-5 relative"
      >
        <Input
          type="email"
          placeholder="Enter email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white text-gray-800 placeholder:text-gray-400 border-none rounded-full pl-6 pr-40 py-5 text-sm focus:ring-2 focus:ring-purple-300"
          required
        />
        <Button
          type="submit"
          className="absolute right-0 top-0.5 bg-primary hover:bg-purple-950 text-white font-semibold px-3 py-3 rounded-full text-sm capitalize tracking-wide whitespace-nowrap"
        >
          {buttonText}
        </Button>
      </form>

      {isSubmitted && (
        <div className="mt-4 text-center text-white text-sm flex items-center justify-center gap-2">
          <Mail size={16} />
          <span>Thank you! Check your email to confirm subscription.</span>
        </div>
      )}
    </motion.div>
  );
}
