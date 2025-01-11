"use client";

import { motion } from "framer-motion";

const Features = () => {
  const featureGroups = [
    {
      features: [
        {
          title: "Simple Reselling Process",
          description:
            "List and sell domains with just a few clicks. Our streamlined process makes domain trading effortless.",
        },
        {
          title: "Domain Portfolio & Valuation",
          description:
            "Showcase your domains and get accurate portfolio valuations based on market trends.",
        },
        {
          title: "Smart Favorites & Notifications",
          description:
            "Save domains to your watchlist and receive instant notifications when prices drop.",
        },
      ],
    },
    {
      features: [
        {
          title: "Transparent Pricing",
          description:
            "Clear, upfront pricing with no hidden fees. Know exactly what you're paying and earning.",
        },
        {
          title: "Real-time Offers",
          description:
            "List your domains and receive instant offers from interested buyers worldwide.",
        },
        {
          title: "Price Comparison",
          description:
            "Compare domain prices across different registrars to ensure you get the best deal available.",
        },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <motion.section className="min-h-screen bg-gradient-to-b from-[#111111] to-gray-900 py-12 md:pb-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-3xl font-bold text-white">
            Powerful Features for Domain Traders
          </h2>
          <p className="mx-auto max-w-2xl text-base text-gray-400">
            Everything you need to manage, value, and trade domains effectively
          </p>
        </div>

        {featureGroups.map((group, groupIndex) => (
          <motion.div
            key={groupIndex}
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="mb-3 md:mb-12"
          >
            <div className="mx-auto grid w-full gap-y-3 md:w-[80%] md:gap-6 lg:grid-cols-3">
              {group.features.map((feature) => (
                <motion.div
                  key={feature.title}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  className="group flex flex-col items-center rounded-xl border border-gray-700/50 bg-gradient-to-br from-gray-800/80 to-gray-800/40 p-6 shadow-lg backdrop-blur-sm"
                >
                  <h3 className="mb-2 text-center text-xl font-semibold tracking-wide text-white md:text-start">
                    {feature.title}
                  </h3>
                  <p className="text-center text-base leading-relaxed text-gray-400 md:text-start">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Features;
