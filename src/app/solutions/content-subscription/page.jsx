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

export default function ContentSubsolution() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Content Subscription &"
        subtitle="Delivery Solutions"
        textLinkLeft={{
          label: "Solution",
          href: "/solutions",
        }}
        textLinkRight={{
          label: "Content Sub & delivery",
          href: "/solutions/content-subscription",
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
        className="py-16 px-4 lg:px-25 bg-white"
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          {/* Main Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Content Subscription & Delivery Solutions
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Digiline enables businesses to deliver engaging digital content
            through SMS and USSD-based subscription services. Our platform
            supports seamless content distribution with airtime billing, making
            it easy for users to subscribe and pay without requiring internet
            access or traditional banking systems. We help organizations create,
            manage, and monetize content while ensuring reliable delivery and
            secure payment processing
          </p>

          {/* Sub Sections */}
          <div className="space-y-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Media, Entertainment & Education
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Deliver daily news updates, music, videos, e-books, exam tips,
                and other educational content directly to subscribers via SMS or
                USSD, with payments conveniently deducted from airtime balances.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Telecom & Retail
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Offer subscription-based services such as games, ringtones,
                wallpapers, promotional offers, loyalty rewards, and product
                updates, all accessible through SMS/USSD and billed via airtime.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">
                Health, Events & Charitable Donations
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Share fitness tips, health awareness messages, event updates,
                and enable donation campaigns through simple SMS/USSD
                subscription models that encourage participation and
                accessibility.
              </p>
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
    </div>
  );
}
