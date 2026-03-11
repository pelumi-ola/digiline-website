"use client";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Newsletter } from "@/components/newsletter";
import { Footer } from "@/components/footer";
import { contactheroImg, contacttextImg } from "@/assets";
import { IoLocationSharp, IoMail, IoCall } from "react-icons/io5";
import Image from "next/image";
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

const slideLeft = {
  hidden: { opacity: 0, x: -80 },
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

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <Hero
        title="Contact Us"
        textLinkLeft={{
          label: "Career",
          href: "/career",
        }}
        textLinkRight={{
          label: "Contact",
          href: "/contact",
        }}
        backgroundImage={contactheroImg}
      />

      <div className="mb-150">
        {/* Reach Out Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="py-20"
        >
          <div className="max-w-7xl mx-auto px-4 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  Reach Out to Us
                </h2>

                <p className="text-sm text-gray-600 leading-relaxed mb-8">
                  We welcome businesses, partners, and investors to explore
                  opportunities with Digiline. Reach out today to discover how
                  our solutions can drive growth and create lasting value
                  together.
                </p>

                <div className="space-y-6">
                  {/* Head Office */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-3 rounded-md">
                      <IoLocationSharp className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Head Office
                      </h4>
                      <p className="text-xs text-gray-600">
                        9th Floor, Ibukun House, Ademola Adetokunbo Victoria
                        Island
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-3 rounded-md">
                      <IoMail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Email Us
                      </h4>
                      <p className="text-xs text-gray-600">
                        business@digilinest.com
                      </p>
                    </div>
                  </div>

                  {/* Call */}
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white p-3 rounded-md">
                      <IoCall className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        Call Us
                      </h4>
                      <p className="text-xs text-gray-600">
                        +234 (0) 8012345678
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Illustration */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1 }}
                className="flex justify-center"
              >
                <Image
                  src={contacttextImg} // replace with your illustration asset
                  alt="Contact Illustration"
                  width={500}
                  height={500}
                  className="object-contain"
                />
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Send Message Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          className="relative md:px-15 px-4 pt-20 pb-40 bg-primary"
        >
          <motion.div
            variants={slideUp}
            className="max-w-4xl mx-auto px-6 text-center text-white"
          >
            <h2 className="text-xl font-semibold mb-3">Send us a message</h2>
            <p className="text-sm text-purple-100 max-w-2xl mx-auto">
              We’d love to hear from you! Share your questions, ideas, or
              partnership inquiries, and our team will get back to you promptly
              with the support and guidance you need.
            </p>
          </motion.div>

          {/* Floating Form Card */}
          <motion.div
            variants={slideLeft}
            className="absolute left-1/2 transform -translate-x-1/2 lg:top-50 top-60 w-full max-w-2xl px-6"
          >
            <div className="bg-white rounded-xl shadow-xl p-8 md:p-10">
              <form className="space-y-6">
                {/* Row 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-gray-600">Name</label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-600">Company</label>
                    <input
                      type="text"
                      placeholder="Your Company Name"
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="text-xs text-gray-600">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="Your Phone Number"
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-gray-600">Email</label>
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="text-xs text-gray-600">Subject</label>
                  <input
                    type="text"
                    placeholder="Message Subject"
                    className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-gray-600">Message</label>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full mt-1 px-4 py-3 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                  ></textarea>
                </div>

                {/* Submit */}
                <div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.section>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
      {/* Footer */}
      <Footer />
    </div>
  );
}
