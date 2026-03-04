"use client";

import { useState } from "react";
import { FaCircleChevronDown, FaCircleChevronUp } from "react-icons/fa6";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question:
        "How do I integrate Digiline’s SMS, USSD, or API services into my platform?",
      answer:
        "After registration, you’ll receive API credentials and access to our documentation. Our developer-friendly APIs integrate easily with web and mobile platforms, and our support team is available to assist you throughout the setup process.",
    },
    {
      question:
        "What are the pricing plans for SMS, USSD, voice, and airtime services?",
    },
    {
      question:
        "What are the pricing plans for SMS, USSD, voice, and airtime services?",
    },
    {
      question:
        "What are the pricing plans for SMS, USSD, voice, and airtime services?",
    },
    {
      question:
        "What are the pricing plans for SMS, USSD, voice, and airtime services?",
    },
  ];

  return (
    <div className="space-y-5">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={index}
            className={`rounded-l-4xl shadow-md transition-all ${
              isOpen ? "bg-[rgb(177,119,231,70)] text-white" : "bg-white"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="w-full flex items-center justify-between gap-5 px-6 py-4 text-left"
            >
              <span
                className={`text-sm font-medium ${
                  isOpen ? "text-white" : "text-gray-800"
                }`}
              >
                {faq.question}
              </span>

              {isOpen ? (
                <FaCircleChevronUp className="w-6 h-6 text-white" />
              ) : (
                <FaCircleChevronDown className="w-6 h-6 text-primary" />
              )}
            </button>

            {isOpen && faq.answer && (
              <div className="px-6 pb-5 text-sm text-purple-100">
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
