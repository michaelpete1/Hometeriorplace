"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-[#1f1f1f] fixed top-0 left-0 z-50 shadow-md">
      <div className="flex justify-between items-center py-3 px-4 sm:px-6 md:px-10">
        {/* Logo */}
        <Link href="/" className="text-xl sm:text-2xl font-bold text-white">
          HOME TERIOR.PLACE
        </Link>

        {/* Hamburger */}
        <button
          aria-label="Toggle Navbar"
          className="md:hidden text-white"
          onClick={toggleNavbar}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          <Link href="/Contact" className="text-white hover:text-gray-300">
            Contact
          </Link>
          <Link href="/About" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/Sofa" className="text-white hover:text-gray-300">
            Sofa
          </Link>
          <Link href="/Bowl" className="text-white hover:text-gray-300">
            Bowl
          </Link>
        </div>
      </div>

      {/* Mobile Links with animation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[300px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        }`}
      >
        <div className="bg-[#1f1f1f] px-4 pb-4 space-y-2 text-center">
          <Link href="/Contact" className="block text-white py-2 hover:text-gray-300">
            Contact
          </Link>
          <Link href="/About" className="block text-white py-2 hover:text-gray-300">
            About
          </Link>
          <Link href="/Sofa" className="block text-white py-2 hover:text-gray-300">
            Sofa
          </Link>
          <Link href="/Bowl" className="block text-white py-2 hover:text-gray-300">
            Bowl
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
