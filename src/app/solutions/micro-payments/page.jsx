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

export default function MicroPayment() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Micro Payment Solutions"
        textLinkLeft={{
          label: "Solution",
          href: "/solutions",
        }}
        textLinkRight={{
          label: "Micro Payments",
          href: "/solutions/micro-payments",
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
            Micro Payment Solutions
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Digiline’s Micro Payments solution enables businesses to process
            small-value digital transactions seamlessly through direct carrier
            airtime billing. Designed to remove traditional payment barriers,
            our platform allows customers to pay for in-app purchases, digital
            content, subscriptions, gaming credits, and other value-added
            services using their mobile airtime balance — making it ideal for
            markets with limited banking access or low internet penetration.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Built on secure, scalable infrastructure, the system supports
            real-time charging, transaction validation, balance checks, and
            automated reconciliation across multiple mobile network operators.
            With seamless API integration, fraud prevention controls, and
            detailed reporting capabilities, businesses can confidently expand
            into new markets, increase transaction volume, and unlock recurring
            revenue streams while delivering a smooth and reliable user
            experience.
          </p>
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
