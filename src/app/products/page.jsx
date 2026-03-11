"use client";
import { Hero } from "@/components/hero";
import { productImg, productheroimg } from "@/assets";
import Image from "next/image";
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

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Hero
        title="Products"
        textLinkLeft={{ label: "Solutions", href: "/solutions" }}
        textLinkRight={{ label: "Products", href: "/products" }}
        backgroundImage={productheroimg}
      />

      {/* Intro Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-20 md:py-28 px-4 lg:px-25 bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-28 items-center">
          <div>
            <h2 className="text-primary font-bold text-lg">Products</h2>

            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Innovative Digital Products Designed for Engagement
            </h1>

            <p className="text-[#000000] text-sm leading-relaxed mb-6">
              Our product suite delivers engaging digital experiences while
              helping businesses reach and retain audiences effectively. From
              interactive games and educational trivia platforms to mobile
              entertainment, voice services, and premium digital content, our
              solutions combine innovation, scalability, and reliability.
            </p>

            <p className="text-[#000000] text-sm leading-relaxed">
              Each product is designed to operate seamlessly across devices and
              telecom networks, ensuring smooth user experiences while creating
              opportunities for growth, engagement, and monetization.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <Image
              src={productImg}
              className="w-full h-auto"
              alt="Product illustration"
              priority
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <WhyChooseSection />
      </div>

      <SectionDivider />
      {/* Product Timeline */}
      <div className="bg-gray-50">
        <ProductPreview />
      </div>

      {/* Dial Subscription */}
      <DialSubscription />

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
