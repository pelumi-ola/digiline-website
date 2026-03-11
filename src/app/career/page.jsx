"use client";
import { Hero } from "@/components/hero";
import {
  careerheroImg,
  careertextImg,
  imageJob,
  imageJob002,
  imageJob003,
  imageJob004,
  Rectangle,
} from "@/assets";
import Image from "next/image";
import { IoSearchOutline, IoLocationSharp, IoTimeSharp } from "react-icons/io5";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import Link from "next/link";
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

export default function CareerPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Career"
        textLinkLeft={{ label: "Developer", href: "/developer" }}
        textLinkRight={{ label: "Career", href: "/career" }}
        backgroundImage={careerheroImg}
      />

      {/* Career Content Section */}
      <section className="py-16 md:py-24 lg:px-25 px-4 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-28 items-center"
        >
          <div>
            <h2 className="text-primary font-bold text-lg">Career</h2>
            <h1 className="text-3xl md:text-4xl font-bold text-secondary mb-6">
              Redefine what work feels like to you.
            </h1>
            <p className="text-[#000000] text-sm leading-relaxed mb-6">
              At Digiline, you’ll work on impactful projects that shape the
              future of telecommunications. We foster a supportive environment
              where your ideas matter and your skills are continuously
              developed. Build a career that challenges you, inspires you, and
              moves you forward.
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
              src={careertextImg}
              className="w-full h-auto"
              alt="textImg"
              priority
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <motion.div
          variants={staggerContainer}
          className="max-w-7xl mx-auto px-4 lg:px-20"
        >
          <h2 className="text-center text-lg font-semibold text-gray-800 mb-10">
            This benefit await you
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:gap-6 gap-4">
            {[
              {
                title: "Health Insurance",
                desc: "Comprehensive health insurance solutions designed to provide financial protection, quality healthcare access, and peace of mind for individuals and their families.",
                icon: imageJob,
              },
              {
                title: "Training to Enhance Capability",
                desc: "Practical and impactful training programs aimed at building skills, improving performance, and empowering individuals to reach their full potential.",
                icon: imageJob002,
              },
              {
                title: "Psychological Support",
                desc: "Confidential and compassionate psychological support services that promote mental well-being, resilience, and overall personal development.",
                icon: imageJob003,
              },
              {
                title: "Recognizing Contributions and Milestones",
                desc: "We honor and preserve meaningful contributions by celebrating achievements, milestones, and lasting memories that strengthen connection and appreciation within the community.",
                icon: imageJob004,
              },
            ].map((benefit, index) => (
              <div
                key={index}
                variants={fadeUp}
                className="p-6 border border-gray-200 shadow-sm text-center"
              >
                <Image
                  src={benefit.icon}
                  alt="CardImg"
                  className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-xl"
                />
                <h3 className="font-semibold text-gray-800 mb-2 text-sm">
                  {benefit.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Job Section */}
      <section className="py-16 bg-white">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-6xl mx-auto px-6 lg:px-16"
        >
          <div className="mb-10">
            <span className="text-xs text-[#000000] border border-2 border-primary px-3 py-1 rounded-full">
              We’re Hiring
            </span>
            <h2 className="text-2xl font-bold mt-4 mb-2 text-gray-900">
              Be part of our mission
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              We are looking for people to join us on our mission. We Value flat
              hierarchies, clear communication and full ownership and
              responsibility.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            {[
              "View All",
              "Development",
              "Design",
              "Marketing",
              "Customer Service",
              "Operation",
              "Finance",
              "Management",
            ].map((filter, index) => (
              <button
                key={index}
                className="px-4 py-1 text-xs border border-purple-300 rounded-full text-gray-700 hover:bg-primary hover:text-white transition"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="mb-10 relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full md:w-80 px-4 py-2 border border-purple-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
            <div className="flex justify-end absolute top-0 left-72 bg-primary px-3 py-[9px] text-white rounded-r-xl">
              <IoSearchOutline className="w-5 h-5" />
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {[1, 2, 3, 4].map((job, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-6"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Product Design
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    We are looking for a product design team
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <div className="flex flex-row gap-2 text-xs text-primary px-3 py-1 rounded-full border border-primary hover:bg-primary hover:text-white ">
                      <IoLocationSharp className="w-4 h-4" /> 100% Hybrid
                    </div>
                    <div className="flex flex-row gap-2 text-xs text-primary px-3 py-1 rounded-full border border-primary hover:bg-primary hover:text-white ">
                      <IoTimeSharp className="w-4 h-4" /> Full Time
                    </div>
                    <div className="flex flex-row gap-2 text-xs text-primary px-3 py-1 rounded-full border border-primary hover:bg-primary hover:text-white ">
                      <BsBriefcaseFill className="w-4 h-4" /> Read More
                    </div>
                  </div>
                </div>

                <Link
                  href="/career/job-details"
                  className="mt-4 md:mt-0 cursor-pointer flex items-center gap-2 text-sm font-medium text-[#000000] hover:underline"
                >
                  Apply
                  <BsArrowUpRightCircleFill className="text-primary w-6 h-6" />
                </Link>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-10">
            <button className="bg-primary text-white px-6 py-2 rounded-md text-sm shadow hover:opacity-90">
              Load more
            </button>
          </div>
        </motion.div>
      </section>

      {/* Driven By Purpose Section */}
      <section className="py-20 bg-[#E1E0E6]">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="max-w-6xl mx-auto px-6 lg:px-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Driven by Purpose, <br /> United by Culture.
          </h2>

          <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-10">
            At Digiline, our goal is to build innovative solutions that
            transform how businesses communicate while fostering a workplace
            where talent thrives. We are committed to excellence, collaboration,
            and continuous growth, creating an environment that empowers our
            people to innovate, lead, and make meaningful impact. Our culture is
            built on trust, accountability, and shared success because when our
            team grows, our company grows.
          </p>

          <div className="flex justify-center">
            <Image
              src={Rectangle}
              alt="Team culture"
              width={800}
              height={500}
              className="rounded-2xl shadow-md object-cover"
            />
          </div>
        </motion.div>
      </section>
    </div>
  );
}
