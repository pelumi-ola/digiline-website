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

export default function ContentPage() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section with CTA */}
      <Hero
        title="Content Services – Stream-D"
        textLinkLeft={{ label: "Products", href: "/products" }}
        textLinkRight={{
          label: "Content Service",
          href: "/products/content-service",
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
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Content Services – Stream-D
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            Stream-D is a digital content platform designed to deliver
            high-quality football highlights and sports content to fans around
            the world. The platform provides subscribers with quick and
            convenient access to highlights from major football leagues across
            Europe, America, South America, Asia, and Africa.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            With the growing demand for on-demand sports content, Stream-D
            ensures that fans never miss key moments from their favorite teams
            and competitions. The platform focuses on delivering short, engaging
            highlight clips that capture the most exciting moments from matches.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            Stream-D is built with a user-friendly interface that allows
            subscribers to easily browse, discover, and watch football
            highlights anytime from their mobile devices or web browsers. The
            service ensures high-quality streaming performance while maintaining
            a smooth and accessible user experience.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            By bringing global football action into a single digital platform,
            Stream-D keeps fans connected to the sport they love.
          </p>

          {/* Inline CTA */}
          <div className="mt-8 text-center flex jutstify-start">
            <a
              href="https://streamd.ng"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-pulse"
            >
              Join Thousands of Fans – Visit Stream-D
            </a>
          </div>
        </div>
      </motion.section>

      {/* Dial Subscription Section with CTA */}
      <DialSubscription />

      {/* Why Choose Section */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <WhyChooseSection />
      </div>

      <SectionDivider />

      {/* Product Preview Section */}
      <div className="bg-gray-50">
        <ProductPreview />
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <KeyFeaturesSection />
      </div>

      {/* Testimonials */}
      <Testimonial />

      {/* Partners */}
      <Partners />

      {/* Floating Sticky Button */}
      <a
        href="https://streamd.ng"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-primary text-white py-3 px-5 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-bounce z-50"
      >
        Visit Stream-D
      </a>
    </div>
  );
}
