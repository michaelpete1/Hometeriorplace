import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center py-4 px-10 fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <h1 className="text-2xl font-bold tracking-wide text-brown-700">
        HOME TERIOR.PLACE
      </h1>
      <div className="flex space-x-8 text-lg">
        <Link
          href="/Contact"
          className="hover:underline hover:text-gray-500 transition-colors duration-300"
        >
          Contact
        </Link>
        <Link
          href="/About"
          className="hover:underline hover:text-gray-500 transition-colors duration-300"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
