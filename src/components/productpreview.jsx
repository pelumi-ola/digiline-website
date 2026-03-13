"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProductTimeline() {
  const products = [
    {
      title: "Lottery - Spin it",
      href: "/products/lottery",
      description:
        "Spin It is an interactive digital game service that offers fast‑paced, chance‑based entertainment leveraging a virtual spinning wheel.",
      color: "bg-yellow-500",
    },
    {
      title: "Trivia - Edu-Digi",
      href: "/products/trivia",
      description:
        "Edu-Digi Is an educational trivia service that benefits subscribers by improving their mental capabilities and cognitive skills around the subjects of English, Mathematics, and History. Fifteen Subscribers with the highest points are rewarded every week.",
      color: "bg-red-500",
    },
    {
      title: "Mobile Games",
      href: "/products/mobile-games",
      description:
        "GameD and GamesConnect are 100% digital platform focused on providing premium HTML5 games and accessible on all device types through the Browser.",
      color: "bg-purple-500",
    },
    {
      title: "Content Services",
      href: "/products/content-service",
      description:
        "Stream-D is a 100% digital platform that provides football highlights across multiple leagues in Europe, America, South America, Asia, and Africa.",
      color: "bg-green-500",
    },
    // {
    //   title: "Interactive Voiced Response (IVR)",
    //   href: "/products/IVR",
    //   description:
    //     "Automate customer interactions with an intelligent voice system that guides callers through menus, provides information, and routes calls efficiently without human intervention.",
    //   color: "bg-pink-500",
    // },
    {
      title: "Ring Back Tone (RBT)",
      href: "/products/RBT",
      description:
        "Ring Back Tone service that lets callers hear music, greetings, or branded audio instead of the standard ringing sound while waiting for the call to be answered.",
      color: "bg-blue-500",
    },
  ];

  // Split the products into left/right halves dynamically
  const middle = Math.ceil(products.length / 2);
  const leftProducts = products.slice(0, middle);
  const rightProducts = products.slice(middle);

  // Framer motion variants
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50 flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary">
            Our Products
          </h2>
          <p className="text-gray-600 mt-2">
            Explore our products with brief summaries. Click to learn more.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="relative md:grid md:grid-cols-2 md:gap-12">
          {/* Central vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          {/* Left Column */}
          <div className="space-y-10">
            {leftProducts.map((product, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="relative flex items-start md:justify-end"
              >
                {/* Dot */}
                <span
                  className={`absolute md:-right-6 w-4 h-4 ${product.color} rounded-full top-4`}
                ></span>

                <Link
                  href={product.href}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition rounded-2xl"></div>
                  <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-3 mt-1">
                    {product.description}
                  </p>
                  <span className="text-blue-600 text-sm font-medium mt-2 inline-block group-hover:underline">
                    Read More →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {rightProducts.map((product, i) => (
              <motion.div
                key={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeUp}
                className="relative flex items-start"
              >
                {/* Dot */}
                <span
                  className={`absolute md:-left-6 w-4 h-4 ${product.color} rounded-full top-4`}
                ></span>

                <Link
                  href={product.href}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30 hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition rounded-2xl"></div>
                  <h3 className="text-lg font-semibold text-primary group-hover:text-secondary transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 text-sm line-clamp-3 mt-1">
                    {product.description}
                  </p>
                  <span className="text-blue-600 text-sm font-medium mt-2 inline-block group-hover:underline">
                    Read More →
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
