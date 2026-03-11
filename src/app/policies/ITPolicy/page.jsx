"use client";
import { Hero } from "@/components/hero";
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

export default function ITPoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="IT & Platform Privacy Policy"
        textLinkLeft={{
          label: "Privacy Policies",
          href: "/policies",
        }}
        textLinkRight={{
          label: "IT & Platform Privacy Policy",
          href: "/policies/ITPolicy",
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
              Technical Data Processing
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              As a telecommunications and VAS provider, Digiline processes
              transactional and communication data necessary for the delivery of
              SMS, USSD, Voice, API, Airtime, Data, and Authentication services.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              This may include:
            </p>
            <ul className="space-y-3 text-gray-600 text-base">
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary" />
                <span>Message routing data</span>
              </li>
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary" />
                <span>MSISDN (where required for service delivery)</span>
              </li>
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary" />
                <span>API request logs</span>
              </li>
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary" />
                <span>Service usage metrics</span>
              </li>
            </ul>
          </div>

          {/* Information We Collect */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Security Measures
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              We implement robust security protocols, including:
            </p>
            <ul className="space-y-3 text-gray-600 text-base">
              <li className="flex items-center gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Encrypted data transmission (SSL/TLS)</span>
              </li>
              <li className="flex gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Secure API authentication (OAuth, tokens, keys)</span>
              </li>
              <li className="flex gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Access control and role-based permissions</span>
              </li>
              <li className="flex gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Continuous monitoring and logging</span>
              </li>
              <li className="flex gap-3">
                <GoDotFill className="text-primary font-bold" />
                <span>Infrastructure redundancy and failover systems</span>
              </li>
            </ul>
          </div>

          {/* How We Use Your Information */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Data Retention & Compliance
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Service-related data is retained only as required for operational,
              contractual, and regulatory compliance purposes. Digiline adheres
              to applicable telecommunications and data protection regulations,
              including NCC guidelines and relevant VAS accreditation
              requirements.
            </p>
          </div>

          {/* Data Sharing */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Infrastructure & Hosting
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              Our platforms are built on secure, scalable infrastructure
              designed to ensure high availability, performance, and protection
              against unauthorized access.
            </p>
          </div>

          {/* Your Rights */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Change To This Policy
            </h2>
            <p className="text-gray-600 text-base leading-relaxed">
              We may update this Privacy Policy periodically to reflect changes
              in legal, technical, or business developments. Updates will be
              posted on this page with a revised effective date.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
