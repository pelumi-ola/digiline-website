"use client";
import { Hero } from "@/components/hero";
import { GamesheroImg } from "@/assets";
import { Partners } from "@/components/partners";
import Testimonial from "@/components/testimonial";
import { motion } from "framer-motion";
import ProductPreview from "@/components/productpreview";
import DialSubscription from "@/components/dialSubscription";
import WhyChooseSection from "@/components/whychooseSection";
import KeyFeaturesSection from "@/components/features";
import SectionDivider from "@/components/sectionDivider";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] },
  },
};

export default function MobileGamesPage() {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleGameClick = (url) => {
    window.open(url, "_blank");
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero */}
      <Hero
        title="Mobile Games – GameD & GamesConnect"
        textLinkLeft={{ label: "Products", href: "/products" }}
        textLinkRight={{ label: "Mobile Games", href: "/products/games" }}
        backgroundImage={GamesheroImg}
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
            Mobile Games – GameD & GamesConnect
          </h2>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            GameD and GamesConnect are fully digital gaming platforms designed
            to deliver premium HTML5 games that can be accessed directly through
            web browsers without requiring downloads or installations.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            The platforms offer a wide range of interactive games across
            multiple genres, ensuring that users always have fresh and exciting
            content to explore. Because the games are built using HTML5
            technology, they are compatible with smartphones, tablets, laptops,
            and desktop computers, providing seamless cross-device gameplay.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            GameD and GamesConnect are optimized for performance, speed, and
            accessibility, ensuring that players enjoy smooth gameplay
            regardless of their device or operating system. With a continuously
            expanding library of engaging games, the platforms provide
            entertainment that is both convenient and instantly accessible.
          </p>

          <p className="text-sm text-gray-700 leading-relaxed mb-6">
            By removing barriers such as app downloads and storage limitations,
            GameD and GamesConnect make digital gaming simple, accessible, and
            enjoyable for a wide audience.
          </p>

          {/* Inline CTA */}
          <div className="mt-8 text-center flex justify-start">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-primary text-white font-bold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-pulse"
            >
              Choose a Game to Play
            </button>
          </div>
        </div>
      </motion.section>

      {/* Dial Subscription */}
      <DialSubscription />

      {/* Why Choose */}
      <div className="bg-gradient-to-b from-white to-gray-50">
        <WhyChooseSection />
      </div>

      <SectionDivider />

      {/* Product Preview */}
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

      {/* Floating Sticky Button */}
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white py-3 px-5 rounded-full shadow-lg hover:bg-blue-700 transition-all animate-bounce z-50"
      >
        Play Games
      </button>

      {/* Game Selection Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-lg shadow-xl p-8 max-w-sm w-full text-center"
          >
            <h3 className="text-xl font-bold mb-6">Choose a Game</h3>
            <div className="flex flex-col gap-4">
              <button
                onClick={() => handleGameClick("https://gamed.ng")}
                className="bg-blue-600 text-white py-3 px-5 rounded-full hover:bg-blue-700 transition"
              >
                GameD
              </button>
              <button
                onClick={() => handleGameClick("https://gamesconnect.ng")}
                className="bg-green-600 text-white py-3 px-5 rounded-full hover:bg-green-700 transition"
              >
                GamesConnect
              </button>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-500 mt-4 hover:underline"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
