import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-40 to-white">
        <section className="text-center max-w-2xl p-6">
          <h1 className="text-5xl font-bold text-white">Contact Us</h1>
          <p className="text-lg text-white mt-4">
            Have any questions? We'd love to hear from you!
          </p>
        </section>

        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#8B4513] text-white py-3 rounded-lg shadow-md hover:bg-[#A0522D] transition"
            >
              Send Message
            </button>
          </form>

          {/* Social Media Section */}
          <div className="mt-8 text-center space-y-4">
            <p className="text-gray-700 font-semibold">Or connect with me:</p>
            <div className="flex justify-center space-x-6 text-2xl text-[#8B4513]">
              <a
                href="mailto:chidipet40@gmail.com"
                aria-label="Email"
                className="hover:text-[#A0522D] transition"
              >
                <FaEnvelope />
              </a>
              <a
                href="www.linkedin.com/in/chidiebere-onyekwere-3743b222b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-[#A0522D] transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/michaelpete1
                "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="hover:text-[#A0522D] transition"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
