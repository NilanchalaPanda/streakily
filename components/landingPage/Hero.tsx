"use client";

import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      data-aos="fade-up"
      className="relative flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-[#111111] py-24 text-white"
    >
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-3 text-center"
        >
          <div className="flex flex-col items-center justify-center">
            {/* CHIP DIV */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-md mb-4 flex h-7 items-center whitespace-nowrap rounded-xl border border-gray-700 bg-gradient-to-tr from-gray-950/80 to-gray-800/80 px-2 font-medium leading-5 text-gray-400 shadow-2xl shadow-primary"
            >
              <span className="italic">
                &quot;Let&apos;s ensure, no domain goes into vain!&quot;
              </span>
            </motion.div>

            {/* HERO HEADING */}
            <h1 className="mx-auto py-2 text-3xl font-bold leading-tight md:text-6xl">
              Turn Domains Into Opportunities
              <span className="text-customPrimary">
                {" "}
                Buy, Resell and Manage
              </span>
            </h1>

            {/* HERO SUB-HEADING */}
            <p className="text-md mx-auto max-w-4xl text-gray-300 md:text-xl">
              Don&apos;t let domains sit idle. Resell with ease, buy from top
              registrars, and manage your portfolio all in one place. Make your
              domains work for you!
            </p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
