"use client";
import { Hero } from "@/components/hero";
import { productheroimg } from "@/assets";
import { Partners } from "@/components/partners";
import Testimonial from "@/components/testimonial";
import { motion } from "framer-motion";
import ProductPreview from "@/components/productpreview";
import DialSubscription from "@/components/dialSubscription";
import WhyChooseSection from "@/components/whychooseSection";
import KeyFeaturesSection from "@/components/features";
import SectionDivider from "@/components/sectionDivider";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function LotteryPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Hero
        title="Lottery - Spin It"
        textLinkLeft={{ label: "Products", href: "/products" }}
        textLinkRight={{
          label: "Spin It",
          href: "/products/lottery",
        }}
        backgroundImage={productheroimg}
      />

      {/* Product details Section */}
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
            Lottery – Spin It
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Spin It is an engaging digital lottery and entertainment service
            built around a dynamic virtual spinning wheel experience. Designed
            to provide users with instant excitement and interactive
            participation, Spin It allows subscribers to spin a digital wheel
            for the chance to win rewards, bonuses, or other exciting prizes.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            The platform delivers a fast-paced and visually engaging gaming
            experience that is easy to access from mobile devices, tablets, and
            desktops. With intuitive design and seamless gameplay, users can
            participate anytime and anywhere through their mobile network or
            internet connection.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Spin It is built with secure digital infrastructure to ensure fair
            play, transparency, and reliable service delivery. By combining
            chance-based mechanics with an engaging user interface, the service
            provides a fun and rewarding experience for players while
            maintaining high standards of digital security and performance.
          </p>
        </div>
      </motion.section>

      {/* Dial Subscription */}
      <DialSubscription />

      {/* Why Choose */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <WhyChooseSection />
      </div>

      <SectionDivider />
      {/* Product Timeline */}
      <div className="bg-gray-50">
        <ProductPreview />
      </div>

      {/* Features */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <KeyFeaturesSection />
      </div>
      {/* Testimonials */}
      <Testimonial />

      {/* Partners */}
      <Partners />
    </div>
  );
}
