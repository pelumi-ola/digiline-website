"use client";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { ServiceheroImg, solutiontextImg } from "@/assets";
import Image from "next/image";
import { SalesPerformance } from "@/components/salesperformance";
import { Partners } from "@/components/partners";
import Testimonial from "@/components/testimonial";
import SolutionsCards from "@/components/solutions-card";
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

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Solutions"
        textLinkLeft={{ label: "About", href: "/about" }}
        textLinkRight={{ label: "Solution", href: "/solutions" }}
        backgroundImage={ServiceheroImg}
      />

      {/* Solution Content Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-16 md:py-24 px-4 lg:px-25 bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 items-center">
          <div>
            <h2 className="text-primary font-bold text-lg">Service</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              We provide best business solution
            </h1>
            <p className="text-[#000000] text-sm leading-relaxed mb-6">
              We provide best-in-class business solutions designed to power
              seamless communication and digital growth. Our platforms deliver
              reliable SMS, USSD, voice, airtime, and data services at scale.
              Built with security, performance, and flexibility at the core, our
              solutions adapt to your business needs. We help organizations
              streamline operations, enhance customer engagement, and drive
              efficiency.With Digiline, businesses gain a trusted partner
              focused on long-term success and innovation.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="flex items-center justify-center"
          >
            <Image
              src={solutiontextImg}
              className="w-full h-auto"
              alt="textImg"
              priority
            />
          </motion.div>
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
