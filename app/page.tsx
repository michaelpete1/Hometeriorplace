import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white p-10">
      <Navbar />
      <div className="grid grid-cols-2 gap-6 mt-20">
        {[
          { src: "sofa.jpg", alt: "Sofa" },
          { src: "bowl.jpg", alt: "Bowl" },
          { src: "shoes.jpg", alt: "Shoes" },
          { src: "chair.jpg", alt: "Chair" },
          { src: "hats.jpg", alt: "Hat" },
          { src: "shirts.jpg", alt: "Shirt" },
          { src: "spoon.jpg", alt: "Spoon" },
          { src: "crocks.jpg", alt: "Crocks" },
        ].map((item) => (
          <div key={item.alt} className="relative group">
            <Image
              src={`/${item.src}`}
              alt={item.alt}
              width={600}
              height={400}
              className="w-full object-cover transition duration-300 group-hover:opacity-75"
            />
            <div className="absolute inset-0 bg-gray-200 opacity-0 group-hover:opacity-25 transition duration-300"></div>
            <p className="absolute bottom-2 left-2 text-white bg-black/50 px-3 py-1 rounded-md text-sm">
              {item.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
