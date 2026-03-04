"use client";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { ServiceheroImg } from "@/assets";
import { SalesPerformance } from "@/components/salesperformance";
import { Partners } from "@/components/partners";
import Testimonial from "@/components/testimonial";
import SolutionsCards from "@/components/solutions-card";
import { FaCheckSquare } from "react-icons/fa";
import { RxSlash } from "react-icons/rx";
import UsecasesCard from "@/components/usecasesCard";
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

export default function SMSandUSSD() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="SMS & USSD Authentication"
        subtitle="Solutions (OTP &2FA)"
        textLinkLeft={{ label: "Solution", href: "/solutions" }}
        textLinkRight={{ label: "SMS/USSD AUTH", href: "/solutions/sms-ussd" }}
        backgroundImage={ServiceheroImg}
        divider={<RxSlash className="w-6 h-6 text-white" />}
      />

      {/* Solution Content Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-16 px-4 lg:px-25 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            SMS & USSD Authentication <br /> Solutions (OTP & 2FA)
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            In today’s digital landscape, security is critical. Digiline
            provides reliable SMS and USSD-based authentication services
            designed to protect user identities, secure transactions, and
            prevent unauthorized access. Our OTP (One-Time Password) and
            Two-Factor Authentication (2FA) solutions add a powerful layer of
            security to your platforms while maintaining a seamless user
            experience. With fast message delivery, high reliability, and
            scalable infrastructure, our authentication services support
            businesses across finance, e-commerce, healthcare, telecom, and
            other data-sensitive industries.
          </p>

          {/* Sub Sections */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Online Banking & Financial Services
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Financial institutions rely on secure and real-time verification
                to protect customer accounts and transactions. Our OTP and 2FA
                solutions are used for secure logins, transaction confirmations,
                password resets, and sensitive account changes. By requiring an
                additional verification step beyond a password, we significantly
                reduce fraud risks and enhance customer trust.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                E-commerce Platforms
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                For online stores and digital marketplaces, protecting customer
                data and payment processes is essential. Our SMS and USSD
                authentication services secure account registrations, user
                logins, checkout processes, and payment authorizations.
                OTP-based verification helps prevent account takeovers,
                fraudulent purchases, and unauthorized access to personal
                information.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Healthcare Services
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Healthcare platforms handle highly sensitive patient data that
                requires strict protection. Our authentication solutions ensure
                secure access to patient portals, telemedicine platforms,
                appointment systems, and health-related applications. By
                allowing only verified users to access confidential information,
                we help healthcare providers maintain privacy, compliance, and
                trust.
              </p>
            </div>

            {/* Key Benefits */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Key Benefits</h3>

              <ul className="space-y-4">
                {[
                  "Real-time OTP delivery via SMS and USSD",
                  "Strong two-factor authentication for enhanced security",
                  "Scalable infrastructure for high transaction volumes",
                  "Seamless integration with web, mobile, and enterprise systems",
                  "Reliable performance with high delivery rates",
                ].map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    {/* Purple Square Check */}
                    <FaCheckSquare className="w-5 h-5 text-primary flex items-center justify-center text-xs font-bold rounded-sm mt-[2px]" />
                    <span className="text-sm text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      <SolutionsCards />

      <SalesPerformance />

      {/* Use Cases Section */}
      <UsecasesCard />
      <Testimonial />
      <Partners />
      {/* Newsletter Section */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </div>
  );
}
