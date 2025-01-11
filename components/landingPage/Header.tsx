"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 px-10 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <motion.img
          src="/vercel.svg"
          alt="Logo"
          className="h-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />
        <motion.h1
          className="text-xl font-bold text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Streakily
        </motion.h1>
        <div>
          <motion.button
            className="mr-4 text-white"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href={"/login"}>Login</Link>
          </motion.button>
          <motion.button
            className="rounded-xl bg-customPrimary px-3 py-2 font-semibold text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href={"/signup"}>Sign Up</Link>
          </motion.button>
        </div>
      </div>
    </header>
  );
};

export default Header;
