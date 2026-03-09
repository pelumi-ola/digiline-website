"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  showButtons = false,
}) {
  return (
    <section className="relative py-20 md:py-48 text-left text-white overflow-hidden">
      {/* Background Layer */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: backgroundImage
            ? `
              linear-gradient(rgba(177,119,231,0.55), rgba(177,119,231,0.55)),
              url(${backgroundImage.src})
            `
            : "none",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{
          duration: 8,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.08,
          transition: { duration: 0.6 },
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4 sm:px-6 lg:px-20 mt-35 md:mt-0">
        {/* Animated Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-xl md:text-xl lg:text-[45px] font-bold mb-4 md:mb-6 leading-tight"
        >
          <span className="animated-gradient-text">{title}</span> 
          <br />
          <span className="animated-gradient-text">{subtitle}</span>
        </motion.h1>

        {/* Description */}
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="md:text-base text-md mb-8 text-purple-50 max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>
        )}

        {/* Buttons */}
        {showButtons && (primaryCTA || secondaryCTA) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-10 justify-start mt-10"
          >
            {primaryCTA && (
              <Link href={primaryCTA.href}>
                <Button className="bg-primary hover:bg-primary/80 text-white px-10 py-8 rounded-lg font-semibold text-sm capitalize tracking-wide transition-all duration-300 hover:scale-105">
                  {primaryCTA.text}
                  <ArrowRight className="w-6 h-6 ml-2" />
                </Button>
              </Link>
            )}

            {secondaryCTA && (
              <Link href={secondaryCTA.href}>
                <Button
                  variant="outline"
                  className="border-2 border-primary text-ring bg-white/10 px-10 py-8 rounded-lg font-semibold text-sm capitalize tracking-wide transition-all duration-300 hover:scale-105"
                >
                  {secondaryCTA.text}
                </Button>
              </Link>
            )}
          </motion.div>
        )}
      </div>
    </section>
  );
}
