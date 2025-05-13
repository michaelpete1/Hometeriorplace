import React from "react";
import Link from "next/link";

export default function BowlPage() {
  const bowls = [
    { src: "/bowll.jpg", alt: "Classic Bowl" },
    { src: "/bowll1.jpg", alt: "Modern Bowl" },
    { src: "/bowll2.jpg", alt: "Modern Bowl" },
    { src: "/bowll3.jpg", alt: "Elegant Bowl" },
    { src: "/bowll4.jpg", alt: "Minimalist Bowl" },
  ];

  return (
    <div className="min-h-screen bg-[#fffaf0] py-12 px-4 sm:px-8 md:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#5C4033]">Our Bowl Collection</h1>
        <p className="text-lg text-[#8B4513] mt-2">
          Explore timeless bowls crafted with care and elegance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {bowls.map((bowl, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-white"
          >
            <img
              src={bowl.src}
              alt={bowl.alt}
              className="w-full h-64 object-cover transition duration-700 ease-in-out hover:scale-110"
            />
            <div className="p-4 text-center">
              <h2 className="text-[#5C4033] font-semibold">{bowl.alt}</h2>
            </div>
          </div>
        ))}
      </div>

      {/* Back to Shop Button */}
      <div className="text-center mt-8">
        <Link
          href="/shop"
          className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
}
