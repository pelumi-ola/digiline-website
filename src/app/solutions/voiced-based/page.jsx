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

export default function VoicedBased() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Voiced Based Solution"
        textLinkLeft={{
          label: "Solution",
          href: "/solutions",
        }}
        textLinkRight={{
          label: "Voiced Based Solution",
          href: "/solutions/voiced-based",
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
            Voices Based Solution
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Enhance customer engagement and deliver critical information with
            Digiline’s advanced Voice-Based Solutions. Our platform enables
            businesses and institutions to communicate effectively through
            Interactive Voice Response (IVR) systems and Voice Broadcasting
            services, ensuring real-time, accessible, and impactful
            communication even without internet access.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            With IVR technology, organizations can automate customer
            interactions while maintaining a seamless user experience. Financial
            institutions can allow customers to check account balances, transfer
            funds, or speak with an agent securely. Businesses can automate
            customer support, conduct surveys, collect feedback, manage
            appointment scheduling, and streamline service inquiries all through
            structured, easy-to-navigate voice menus.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Our Voice Broadcasting solution allows organizations to send
            pre-recorded voice messages to thousands or millions of users
            instantly. This is ideal for promotional campaigns, service
            notifications, payment reminders, public awareness messages, and
            large-scale engagement initiatives. Governments and enterprises can
            also deploy voice alerts for emergency communications, including
            natural disasters, service disruptions, and security notifications.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Built on carrier-grade infrastructure, our voice platform supports
            high concurrent call volumes, intelligent call routing, real-time
            analytics, call recording, and API integration with CRM and
            enterprise systems. The solution ensures high availability, reliable
            delivery, and detailed reporting for performance monitoring and
            optimization.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            With Digiline’s Voice-Based Solutions, businesses improve
            operational efficiency, increase customer reach, and deliver secure,
            scalable voice communication tailored to today’s fast-moving digital
            environment.
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
