"use client";

import Link from "next/link";
import Image from "next/image";
import { digilogoFooter } from "@/assets";
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

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#9D66F1] text-white pt-16 pb-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 lg:px-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <Link href="/">
            <Image
              src={digilogoFooter}
              alt="Digiline Logo"
              width={900}
              height={900}
              className="mb-4"
            />
          </Link>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Resource</h3>
            <ul className="space-y-3 text-sm text-purple-200">
              <li>
                <Link href="/career" className="hover:text-white transition">
                  Career
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-white transition">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/policies" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/developer" className="hover:text-white transition">
                  Developer
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-6 text-white">Contact</h3>

            <div className="space-y-4 text-sm text-purple-200">
              <div className="flex justify-between">
                <span className="font-medium text-white">Address</span>
                <span className="text-right max-w-55">
                  9th Floor, Ibukun House, Ademola Adetokunbo Victoria Island
                </span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-white">Email</span>
                <span className="text-right">business@digilinest.com</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-white">Phone</span>
                <span className="text-right">+234 (0) 9038125089</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-white">Opening Hours</span>
                <span className="text-right">9:00 AM - 5:00 PM (WAT)</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium text-white">Support Hours</span>
                <span className="text-right">24hrs Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-purple-300/40 my-10"></div>

        {/* Bottom */}
        <div className="text-center text-sm text-purple-200">
          Copyright © {currentYear} Digiline Solution Limited. All Rights
          Reserved.
        </div>
      </motion.div>
    </footer>
  );
}
