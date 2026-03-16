"use client";
import { Hero } from "@/components/homeHero";
import { ServiceCard } from "@/components/service-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { herobg, herotextImg } from "@/assets";
import Image from "next/image";
import { GrTechnology } from "react-icons/gr";
import { BiSolidUserVoice } from "react-icons/bi";
import { GrUserExpert } from "react-icons/gr";
import { RiCustomerServiceFill } from "react-icons/ri";
import { Partners } from "@/components/partners";
import { GridScan } from "@/components/GridScan";
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
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  const coreServices = [
    {
      icon: "RiCellphoneFill",
      icon: "",
      title: "USSD Solutions",
      description:
        "Deliver fast, interactive experiences without the need for internet access.",
    },
    {
      icon: "FaMessage",
      title: "SMS Solutions",
      description: "Reliable SMS solutions to connect and grow your business.",
    },
    {
      icon: "AiFillApi",
      title: "API Development",
      description:
        "Seamless APIs built to integrate and scale with your systems.",
    },
    {
      icon: "BsDatabaseFill",
      title: "Airtime & Data Bundle",
      description: "Fast and reliable airtime and data distribution",
    },
  ];

  const uniqueValues = [
    {
      icon: GrTechnology,
      title: "Innovative Technology",
      description:
        "Leveraging cutting-edge technology for future-proof solutions.",
    },
    {
      icon: BiSolidUserVoice,
      title: "Customer-Centric Approach",
      description: "Focused on delivering customer specific value.",
    },
    {
      icon: GrUserExpert,
      title: "Experienced Team",
      description: "Expertise in telecommunications and VAS solutions.",
    },
    {
      icon: RiCustomerServiceFill,
      title: "24/7 Dedicated Support",
      description:
        "Always-on assistance to keep your services running smoothly.",
    },
  ];

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <div className="relative">
        {/* Hero Section */}
        <Hero
          title="Powering Smarter"
          subtitle="Business Communications"
          description="Digiline is a trusted telecommunications solution provider offering reliable SMS, USSD, voice, airtime, and data services for businesses of all sizes. We help organizations improve customer engagement, streamline operations, and drive growth through secure, scalable, and customer-focused value-added solutions."
          primaryCTA={{ text: "Start Your Journey", href: "/contact" }}
          secondaryCTA={{ text: "View Solution", href: "/solutions" }}
          backgroundImage={herobg}
          showButtons={true}
        />

        {/* Core Services Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="p-8 md:p-8 bg-white hover:shadow-lg transition-shadow rounded-xl shadow-lg absolute md:top-160 top-170 lg:left-25 left-5 right-5 lg:right-18"
        >
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-xl md:text-3xl font-bold text-gray-800 mb-4">
              Our Core Services
            </h2>
            <p className="text-gray-600 text-base max-w-2xl mx-auto">
              Powerful solutions built to support your business communication
              needs.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8">
            {coreServices.map((service, index) => (
              <motion.div key={index} variants={fadeUp}>
                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  variant="light"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Who We Are Section */}
      <section className="relative lg:mt-100 mt-150 mb-105 md:mb-60">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <GridScan
            sensitivity={0.4}
            lineThickness={0.8}
            linesColor="#ffffff"
            gridScale={0.08}
            scanColor="#FF9FFC"
            scanOpacity={0.9}
            enablePost
            bloomIntensity={0.4}
            chromaticAberration={0.001}
            noiseIntensity={0.09}
          />
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative py-16 md:py-30 md:px-20 px-4 bg-linear-to-b from-[#C78EFF] via-[#9e66f185] to-[#743EE3]"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 items-center">
            <div className="flex flex-col align-items-start justify-utems-start">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Who We Are
              </h2>
              <p className="text-purple-100 text-md mb-6 leading-relaxed">
                At Digiline, we are redefining the telecommunications landscape
                with innovative, reliable, and customer-focused solutions. With
                years of experience in the industry, we have built a strong
                track record in delivering SMS, USSD, voice, API development,
                airtime, and data services that help businesses communicate
                effectively, streamline operations, and unlock new growth
                opportunities. Our solutions are tailored to client needs and
                backed by official accreditation from the NCC and other
                recognized VAS authorities, ensuring quality, compliance, and
                trust.
              </p>
              <p className="text-purple-100 text-md mb-8 leading-relaxed">
                Guided by a passion for digital transformation, our dedicated
                team works tirelessly to deliver scalable and secure services
                that drive engagement and operational efficiency. We value the
                trust of our partners and are committed to building lasting
                relationships while shaping the future of business
                communication. With Digiline, businesses gain more than
                technology they gain a strategic, accredited partner for growth,
                innovation, and long-term success.
              </p>
              <Link href="/about">
                <Button className="bg-primary text-white hover:bg-purple-800 font-semibold px-8 py-8 rounded-xl capitalize text-sm tracking-wide">
                  Explore More
                </Button>
              </Link>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1 }}
              className="flex items-center justify-center"
            >
              <Image
                src={herotextImg}
                className="w-full h-auto"
                alt="textImg"
                priority
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Unique Value Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="bg-[#EBEAF7] p-10 md:py-15 md:px-20 rounded-t-[80px] border border-purple-100 hover:shadow-lg transition-shadow absolute top-[70rem] lg:top-[48rem]"
        >
          <div className="text-start mb-12 md:mb-16">
            <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Our Unique Value
            </h2>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-8"
          >
            {uniqueValues.map((value, index) => (
              <div key={index} className="">
                <motion.div key={index} variants={fadeUp}>
                  <div className="flex items-start gap-4">
                    <div className="bg-white rounded-lg p-3">
                      <value.icon size={25} className="text-ring" />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#000000] text-sm mb-2">
                        {value.title}
                      </h3>
                      <p className="text-ring text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      <Partners />
    </div>
  );
}
