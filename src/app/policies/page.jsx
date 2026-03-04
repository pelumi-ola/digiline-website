"use client";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { exportHerobg } from "@/assets";
import { GoDotFill } from "react-icons/go";
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

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Privacy Policy"
        textLinkLeft={{
          label: "Support",
          href: "/support",
        }}
        textLinkRight={{
          label: "Privacy Policy",
          href: "/policy",
        }}
        backgroundImage={exportHerobg}
      />

      {/* Content Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-16 md:py-24 bg-white"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Digiline is committed to protecting the privacy of individuals,
              clients, partners, and website visitors. This section outlines how
              we collect, use, and safeguard personal information when you
              interact with our website and business services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              We may collect information including but not limited to:
            </p>
            <ul className="space-y-3 text-gray-600 text-base">
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Names, email address, phone number</span>
              </li>
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Contact form submissions</span>
              </li>
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Company information</span>
              </li>
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Payment information</span>
              </li>
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Communication preferences</span>
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              We use collected information to:
            </p>
            <ul className="space-y-3 text-gray-600 text-base">
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Provide and manage our services</span>
              </li>
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Process payments and transactions</span>
              </li>
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Improve our website and customer experience</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold" />
                <span>Send periodic updates and marketing communications</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-primary font-bold" />
                <span>Respond to inquiries and customer support requests</span>
              </li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Data Sharing
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We do not sell personal data. Information may be shared with
              trusted partners, mobile network operators, regulatory authorities
              strictly for service delivery and legal compliance requirements.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Your Right
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Users may request access, correction, or deletion of personal data
              where applicable under relevant data protection laws.
            </p>
          </div>

          {/* Changes to Policy */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Change To This Policy
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes
              in legal, technical or business developments. Updates will be
              posted on this page with a revised effective date.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
