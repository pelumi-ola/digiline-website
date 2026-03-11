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
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <Hero
        title="Ring Back Tone (RBT)"
        textLinkLeft={{ label: "Products", href: "/products" }}
        textLinkRight={{
          label: "RBT",
          href: "/products/rbt",
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
            Ring Back Tone (RBT)
          </h2>

          {/* Intro Paragraph */}
          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            Ring Back Tone (RBT) is a telecommunication service that replaces
            the traditional ringing sound heard by callers with customized audio
            content. Instead of hearing a standard ring tone, callers can listen
            to music, greetings, promotional messages, or branded audio while
            waiting for the call to be answered.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            The service allows individuals and businesses to personalize their
            calling experience and create a unique identity during incoming
            calls. Businesses can use RBT to promote products, share
            announcements, or reinforce brand messaging, while individuals can
            use it to express personal style through music or voice recordings.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            RBT services are widely used by mobile network subscribers and are
            designed to integrate seamlessly with existing telecommunication
            infrastructure. The platform supports a wide variety of audio
            content and can be easily managed or updated.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-8">
            By transforming the waiting period during a call into an engaging
            audio experience, RBT enhances caller engagement and provides an
            innovative communication channel.
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
