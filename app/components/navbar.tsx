"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full flex justify-between items-center py-6 px-10 fixed top-0 left-0 right-0 bg-white shadow-md z-10"
    >
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-2xl font-bold tracking-wide"
      >
        HOME TERIOR.PLACE
      </motion.h1>
      <div className="flex space-x-8 text-lg">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/Contact" className="hover:underline">
            Contact
          </Link>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <Link href="/About" className="hover:underline">
            About
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
