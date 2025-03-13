import React from "react";

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-40 to-white">
        <section className="text-center max-w-2xl p-6">
          <h1 className="text-5xl font-bold text-white 700">Contact Us</h1>
          <p className="text-lg text-white 600 mt-4">
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
        </div>
      </div>
    </div>
  );
}
