"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SofaPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsVisible(true), 100); // slight delay for animation
    return () => clearTimeout(timeout);
  }, []);

  const sofaProducts = [
    {
      id: 1,
      name: "Luxury Cream Sofa",
      price: "$799",
      image: "/sofah1.jpg",
    },
    {
      id: 2,
      name: "Modern Grey Sofa",
      price: "$649",
      image: "/sofah2.jpg",
    },
    {
      id: 3,
      name: "Classic Brown Leather",
      price: "$899",
      image: "/sofah3.jpg",
    },
    {
      id: 4,
      name: "Scandinavian Linen Sofa",
      price: "$729",
      image: "/sofah4.jpg",
    },
    {
      id: 5,
      name: "Minimalist Black Sofa",
      price: "$679",
      image: "/sofah5.jpg",
    },
    {
        id: 6,
        name: "Luxury Cream Sofa",
        price: "$799",
        image: "/sofah.jpg",
      },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 px-6 py-12 text-gray-900">
      <h1
        className={`text-4xl sm:text-5xl font-extrabold text-center mb-12 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        Discover Our Sofa Collection
      </h1>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sofaProducts.map((sofa, index) => (
          <div
            key={sofa.id}
            className={`relative bg-white rounded-2xl overflow-hidden shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Image
              src={sofa.image}
              alt={sofa.name}
              width={400}
              height={300}
              className="w-full h-60 object-cover"
            />
            <div className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
              {sofa.price}
            </div>
            <div className="p-5">
              <h2 className="text-xl font-semibold mb-2">{sofa.name}</h2>
              <p className="text-sm text-gray-600">
                Experience elegance and comfort with our hand-picked selection of sofas.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`text-center mt-16 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <Link
          href="/shop"
          className="inline-block bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          ← Back to Shop
        </Link>
      </div>
    </div>
  );
};

export default SofaPage;
