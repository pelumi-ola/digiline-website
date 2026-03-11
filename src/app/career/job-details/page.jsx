"use client";

import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { careerheroImg, Rectangle } from "@/assets";
import Image from "next/image";
import Link from "next/link";
import { IoLocationSharp, IoTimeSharp } from "react-icons/io5";
import { BsBriefcaseFill } from "react-icons/bs";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
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

export default function JobDetails() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        title="Career"
        textLinkLeft={{ label: "Career", href: "/career" }}
        textLinkRight={{ label: "Job Details", href: "/career/job-details" }}
        backgroundImage={careerheroImg}
      />

      {/* Job Details Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-20 bg-[#F3F3F5]"
      >
        <div className="max-w-5xl mx-auto px-4 lg:px-10">
          <div className="bg-white border border-gray-300 rounded-2xl shadow-sm p-8 md:p-12">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Product Design
              </h1>

              <Link
                href="/career"
                className="mt-4 md:mt-0 cursor-pointer flex items-center gap-2 text-sm font-medium text-[#000000] hover:underline"
              >
                Apply
                <BsArrowUpRightCircleFill className="text-primary w-6 h-6" />
              </Link>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 text-xs text-primary px-4 py-1.5 rounded-full border border-primary shadow-sm">
                <IoLocationSharp className="w-4 h-4" />
                100% Hybrid
              </div>

              <div className="flex items-center gap-2 text-xs text-primary px-4 py-1.5 rounded-full border border-primary shadow-sm">
                <IoTimeSharp className="w-4 h-4" />
                Full-time
              </div>

              <div className="flex items-center gap-2 text-xs text-primary px-4 py-1.5 rounded-full border border-primary shadow-sm">
                <BsBriefcaseFill className="w-4 h-4" />2 - 5 Years experience
              </div>
            </div>

            {/* About Role */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">
                About this role
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We are looking for a creative and detail-oriented Product
                Designer to join our team. In this role, you will be responsible
                for designing intuitive, user-centered digital experiences
                across our telecommunications platforms. You will collaborate
                closely with product managers, developers, and stakeholders to
                transform ideas into functional and visually compelling
                solutions that enhance user engagement and drive business
                growth.
              </p>
            </div>

            {/* Responsibilities */}
            <div className="mb-8">
              <h3 className="font-semibold text-gray-900 mb-3">
                Responsibilities
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>
                  Design user-friendly interfaces for web and mobile
                  applications.
                </li>
                <li>
                  Create wireframes, prototypes, and high-fidelity UI designs.
                </li>
                <li>
                  Conduct user research and usability testing to improve product
                  experience.
                </li>
                <li>
                  Collaborate with cross-functional teams to define product
                  requirements and user flows.
                </li>
                <li>
                  Maintain and evolve design systems and brand consistency
                  across platforms.
                </li>
                <li>
                  Translate complex technical requirements into simple, elegant
                  design solutions.
                </li>
              </ul>
            </div>

            {/* Qualifications */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">
                Qualifications
              </h3>

              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-700">
                <li>
                  Bachelor’s degree in Design, Human-Computer Interaction, or
                  related field (or equivalent experience).
                </li>
                <li>2+ years of experience in product or UI/UX design.</li>
                <li>
                  Strong portfolio showcasing user-centered design projects.
                </li>
                <li>
                  Proficiency in design tools such as Figma, Adobe XD, or
                  similar.
                </li>
                <li>
                  Solid understanding of UX principles, interaction design, and
                  responsive design.
                </li>
                <li>
                  Strong communication skills and ability to work in a
                  collaborative environment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Driven By Purpose Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        className="py-20 bg-[#E1E0E6]"
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-20 text-center">
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
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Footer */}
      <Footer />
    </div>
  );
}
