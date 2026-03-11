"use client";

import { Hero } from "@/components/hero";
import { ServiceheroImg } from "@/assets";
import { SalesPerformance } from "@/components/salesperformance";
import { Partners } from "@/components/partners";
import Testimonial from "@/components/testimonial";
import SolutionsCards from "@/components/solutions-card";
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

export default function Developer() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Custom API Development"
        textLinkLeft={{
          label: "Solution",
          href: "/solutions",
        }}
        textLinkRight={{
          label: "Developer",
          href: "/developer",
        }}
        backgroundImage={ServiceheroImg}
        divider={<RxSlash className="w-6 h-6 text-white" />}
      />

      {/* Solution Content Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-16 lg:px-25 px-4 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Custom API Development
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            At Digiline, we design and deliver powerful, business-driven API
            solutions that enable seamless connectivity, automation, and digital
            transformation. Our Custom API Development services are built to
            align perfectly with your operational needs, ensuring optimal
            performance, scalability, and long-term growth.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            We create tailored API solutions that integrate effortlessly with
            your existing platforms, mobile applications, enterprise systems,
            and third-party services. Whether you're launching a new digital
            product, expanding service capabilities, or optimizing backend
            processes, our APIs provide the flexibility and efficiency needed to
            scale without limitations.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Built on secure and resilient infrastructure, our APIs support high
            transaction volumes, real-time processing, encrypted data exchange,
            authentication protocols, and comprehensive monitoring. We
            prioritize security, reliability, and compliance to ensure your
            systems remain protected while maintaining uninterrupted service
            delivery.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            With modular architecture and forward-compatible frameworks, our
            solutions are designed to evolve with your business. From telecom
            integrations and payment systems to CRM connectivity and automation
            workflows, Digiline delivers innovative, flexible, and future-ready
            API ecosystems that empower your organization to operate smarter and
            grow faster.
          </p>
        </div>
      </motion.section>

      <SolutionsCards />

      <SalesPerformance />

      {/* Use Cases Section */}
      <UsecasesCard />
      <Testimonial />
      <Partners />
    </div>
  );
}
