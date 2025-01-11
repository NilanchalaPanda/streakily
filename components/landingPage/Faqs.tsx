"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "When will you launch?",
      answer:
        "We are planning to launch in the first few weeks of January 2025.",
    },
    {
      question: "What's in it for me as an early joiner?",
      answer:
        "Early joiners will have the exclusive chance to win premium features of our platform completely for free for the first few months. This is our way of thanking early supporters.",
    },
    {
      question: "How does the domain reselling process work?",
      answer:
        "Our platform simplifies domain reselling into a few easy steps. List your domain, set your price, and we'll connect you with potential buyers. Once a buyer shows interest, our secure transaction system handles the transfer and payment process.",
    },
    {
      question: "How do you determine domain valuations?",
      answer:
        "We use a combination of factors including domain length, keywords, extension popularity, historical sales data, and current market trends to provide accurate valuations. Our algorithm is regularly updated to reflect the latest market conditions.",
    },
  ];

  return (
    <motion.section className="bg-gray-900 py-12 pb-12 md:pt-0">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="mb-6 text-center">
          <h2 className="text-xl font-bold text-white md:text-3xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-400">
            Everything you need to know about our domain marketplace
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <button
                className={`h-full w-full rounded-xl border border-gray-700 bg-gray-800/50 px-6 py-3 text-left`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500/10">
                    <ChevronUp
                      className={`h-6 w-6 text-blue-400 transition-transform duration-300 ${
                        openIndex === index ? "rotate-180 transform" : ""
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white md:text-xl">
                      {faq.question}
                    </h3>
                    <AnimatePresence>
                      {openIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-gray-400">{faq.answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Faqs;
