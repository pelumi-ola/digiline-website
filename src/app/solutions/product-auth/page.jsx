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

export default function ProductAuth() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Product Authenticity &"
        subtitle="Verification"
        textLinkLeft={{
          label: "Solution",
          href: "/solutions",
        }}
        textLinkRight={{
          label: "Product Auth & Verification",
          href: "/solutions/product-auth",
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
            Product Authenticity & Verification
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Protect your brand, eliminate counterfeiting, and build customer
            trust with Digiline’s Product Authenticity & Verification solution.
            Our platform enables real-time product verification through SMS,
            USSD, and QR code technology, allowing consumers to instantly
            confirm the authenticity of products before purchase or use. This
            not only safeguards your brand reputation but also enhances customer
            confidence and loyalty.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Designed for industries where product integrity is critical, our
            solution supports retail, pharmaceuticals, e-commerce, telecom,
            FMCG, and distribution networks. Customers simply send a unique
            product code via SMS or USSD, or scan a QR code, and receive instant
            confirmation of authenticity. This process helps combat counterfeit
            goods, prevent revenue loss, and strengthen supply chain
            transparency.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Built on secure, scalable infrastructure, the platform supports
            high-volume verification requests, real-time database validation,
            fraud detection mechanisms, and detailed reporting dashboards. Our
            APIs allow seamless integration with enterprise systems, inventory
            management platforms, and distribution networks, enabling automated
            code generation, tracking, and lifecycle management..
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            With Digiline’s verification technology, businesses gain greater
            control over product distribution, actionable market insights, and a
            powerful tool to protect both consumers and brand equity.
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
