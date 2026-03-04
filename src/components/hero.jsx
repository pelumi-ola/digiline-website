"use client";

import Link from "next/link";
import { BiChevronRight } from "react-icons/bi";
import { motion } from "framer-motion";

export function Hero({
  title,
  subtitle,
  backgroundImage,
  textLinkLeft,
  textLinkRight,
  divider,
}) {
  return (
    <section className="relative overflow-hidden py-20 md:py-48 text-center text-white flex align-center justify-center  min-h-[300px] md:min-h-[500px]">
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="relative z-10 px-4 sm:px-6 lg:px-20"
      >
        <h1 className="text-white text-xl md:text-xl lg:text-[35px] font-bold text-balance leading-tight">
          {title}
        </h1>

        <h1 className="text-white text-xl md:text-xl lg:text-[35px] font-bold mb-4 md:mb-6 text-balance leading-tight">
          {subtitle}
        </h1>

        <div className="flex flex-row items-center justify-center">
          {textLinkLeft && (
            <Link href={textLinkLeft.href}>
              <span className="text-left">{textLinkLeft.label}</span>
            </Link>
          )}

          <div className="flex items-center">
            {divider || <BiChevronRight className="w-8 h-8" />}
          </div>

          {textLinkRight && (
            <Link href={textLinkRight.href}>
              <span className="text-right">{textLinkRight.label}</span>
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
