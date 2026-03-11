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

export default function TriviaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Hero
        title="Trivia - Edu Digi"
        textLinkLeft={{ label: "Products", href: "/products" }}
        textLinkRight={{
          label: "Lottery - Spin It",
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
            Trivia - Edu Digi
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Edu-Digi is an educational trivia platform designed to make learning
            interactive, engaging, and rewarding. The service challenges
            subscribers with carefully designed trivia questions across core
            knowledge areas such as English, Mathematics, and History, helping
            users sharpen their intellectual abilities while enjoying a fun
            digital experience.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Through daily participation, users can strengthen their cognitive
            skills, expand their general knowledge, and improve problem-solving
            abilities. The platform is built to encourage consistent engagement
            and learning through friendly competition among participants.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            To reward active users, Edu-Digi recognizes the top performers every
            week. The fifteen subscribers with the highest accumulated points
            are rewarded, motivating participants to continuously test their
            knowledge and improve their scores.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Edu-Digi combines education with entertainment, creating a platform
            where learning becomes an enjoyable and rewarding experience.
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
