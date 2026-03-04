"use client";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  aboutheroImg,
  abouttextImg,
  shape,
  mission,
  visionImg,
  innovation,
  reliability,
  customerCentric,
  integrity,
  excenllence,
} from "@/assets";
import Image from "next/image";
import { SalesPerformance } from "@/components/salesperformance";
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

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const slideUp = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="About Us"
        backgroundImage={aboutheroImg}
        textLinkLeft={{ label: "Home", href: "/" }}
        textLinkRight={{ label: "About", href: "/about" }}
      />

      {/* About Content Section */}
      <section className="py-16 md:py-24 md:px-25 px-4 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 items-center"
        >
          <div>
            <h2 className="text-primary font-bold text-lg">About Us</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Powering a connected digital future.
            </h1>
            <p className="text-[#000000] text-sm leading-relaxed mb-6">
              Digiline Solution Limited is a leading telecommunications
              value-added service provider (VAS) specializing in SMS, USSD,
              Voice, Airtime, and Data product development. Established with a
              commitment to innovation and quality, Digiline Solution Limited
              delivers tailored solutions that enhance communication and
              operational efficiency for service providers and end users
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
              src={abouttextImg}
              className="w-full h-auto"
              alt="textImg"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      <section
        className="py-3 lg:py-16 md:py-24 md:px-25 px-4 bg-center bg-cover"
        style={{
          backgroundImage: `url(${shape.src})`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col space-y-3 justify-center items-center text-white p-4 lg:p-10"
        >
          <h2 className="text-3xl leading-[44px] tracking-[0.3px] font-bold text-center">
            Scalable by Design, Powerful by Performance
          </h2>

          <div className="lg:space-y-5">
            <p className="md:text-base text-sm leading-[24px] text-justify">
              Digiline delivers high-performance telecommunications solutions
              designed to grow with your business. Our robust and resilient
              infrastructure powers reliable SMS, USSD, voice, airtime, and data
              services at scale ensuring consistent speed, stability, and
              dependable delivery across all channels. Every solution is built
              with scalability and efficiency in mind, allowing businesses to
              communicate effectively and operate without disruption.
            </p>

            <p className="md:text-base text-sm leading-[24px] text-justify">
              Driven by innovation and security, our platforms are engineered to
              support evolving business needs in today’s fast-moving digital
              landscape. We combine advanced technology with industry expertise
              to help organizations streamline operations, enhance customer
              engagement, and scale with confidence. With Digiline, businesses
              gain a trusted partner committed to performance, reliability, and
              long-term growth.
            </p>
          </div>

          <Link href="/solutions">
            <Button className="bg-primary lg:mt-3 text-white hover:text-ring hover:bg-purple-200 font-semibold px-8 py-8 w-65 rounded-xl uppercase text-sm tracking-wide">
              View Our Solutions
              <ArrowRight className="w-6 h-6" />
            </Button>
          </Link>
        </motion.div>
      </section>

      <SalesPerformance />
      {/* MISSION & VISION */}
      <motion.section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-20">
          <div className="bg-[#D7D5F4] rounded-2xl p-4 md:py-8 md:px-8 flex flex-col lg:flex-row items-center justify-center gap-10">
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible" // animate on scroll
              viewport={{ once: false, amount: 0.2 }}
              className="space-y-3 text-start"
            >
              <h1 className="text-5xl font-bold text-white">
                Our Mission & Vision
              </h1>
              <div className="w-35 h-1.25 bg-[#3D4243] my-2 rounded-full"></div>
              <div className="w-35 h-1.25 bg-primary my-2 rounded-full"></div>
            </motion.div>

            <div className="flex flex-col justify-end align-self-end lg:gap-8 gap-4">
              {/*mission*/}
              <motion.div
                variants={slideRight}
                initial="hidden"
                whileInView="visible" // animate on scroll
                viewport={{ once: false, amount: 0.2 }}
                className="flex bg-[#F2F2F2] shadow-md overflow-hidden lg:w-179"
              >
                {/* Left Side */}
                <div className="w-1/3 bg-[#8A2BE2] flex items-center justify-center py-3 px-2">
                  <Image
                    src={mission}
                    alt="missionImg"
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Right Side */}
                <div className="w-2/3 py-3 px-4">
                  <h3 className="text-2xl font-bold text-[#000000] mb-4">
                    Mission
                  </h3>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    To be at the forefront of the telecommunications value-added
                    services industry, delivering service excellence and
                    technological innovation. Shaping the future of connectivity
                    and accessibility, empowering businesses to succeed in an
                    increasingly digital world
                  </p>
                </div>
              </motion.div>

              {/* Vision */}
              <motion.div
                variants={slideUp}
                initial="hidden"
                whileInView="visible" // animate on scroll
                viewport={{ once: false, amount: 0.2 }}
                className="flex bg-[#F2F2F2] shadow-md overflow-hidden lg:w-175"
              >
                {/* Left Side */}
                <div className="w-2/3 py-3 px-4">
                  <h3 className="text-2xl font-bold text-[#000000] mb-4 text-right">
                    Vision
                  </h3>
                  <ul className="space-y-6">
                    {[
                      "To deliver innovative and reliable telecommunications value-added services that empower businesses and telecom operators to enhance communication, improve operational efficiency, and drive digital transformation.",
                      "To deliver innovative and reliable telecommunications value-added services that empower businesses and telecom operators to enhance communication, improve operational efficiency, and drive digital transformation.",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4">
                        {/* Number Badge */}
                        <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-[#8A2BE2] text-white text-sm font-semibold">
                          {index + 1}
                        </div>

                        {/* Text */}
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Side */}
                <div className="w-1/3 bg-[#8A2BE2] flex items-center justify-center py-3 px-2">
                  <Image
                    src={visionImg}
                    alt="visionImg"
                    priority
                    className="w-full h-auto object-contain"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* OUR VALUE */}
      <section className="py-20 mb-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-7xl mx-auto px-4 lg:px-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#000000]">Our Value</h2>
          </div>

          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-5 gap-6"
          >
            {[
              {
                icon: innovation,
                title: "Innovation",
                desc: "We continuously develop and improve technology solutions that create real value for businesses and users.",
              },
              {
                icon: reliability,
                title: "Reliability",
                desc: "We deliver stable, secure, and dependable platforms that partners and clients can trust.",
              },
              {
                icon: integrity,
                title: "Integrity",
                desc: "We operate with transparency, honesty, and strong ethical standards in all our engagements.",
              },
              {
                icon: customerCentric,
                title: "Customer-Centricity",
                desc: "We prioritize our clients’ needs and build solutions that solve real business challenges.",
              },
              {
                icon: excenllence,
                title: "Excellence",
                desc: "We are committed to high standards in performance, service delivery, and continuous improvement.",
              },
            ].map((value, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white py-6 px-3 rounded-xl shadow-md text-center flex flex-col items-center"
              >
                <div className="mb-4">
                  <Image
                    src={value.icon}
                    alt={value.title}
                    width={70}
                    height={70}
                  />
                </div>

                <h3 className="font-semibold text-[#141414] mb-3 text-center">
                  {value.title}
                </h3>
                <p className="text-sm text-[#141414] leading-relaxed text-center">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
