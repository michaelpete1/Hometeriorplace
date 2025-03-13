import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Logo / Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyNextApp. All rights reserved.
        </p>

        {/* Navigation Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link href="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link href="/About" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link href="/Contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
