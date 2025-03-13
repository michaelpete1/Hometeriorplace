"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar";

const HomePage = () => {
  const images = [
    "sofa",
    "bowl",
    "shoes",
    "chair",
    "hats",
    "shirts",
    "spoon",
    "crocks",
  ];
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-10"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <Navbar />
      <div className="relative mt-20 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide"
        >
          {images.map((item) => (
            <div
              key={item}
              className="relative group min-w-[300px] border-2 border-black p-2 rounded-xl"
            >
              <Image
                src={`/${item}.jpg`}
                alt={item}
                width={300}
                height={200}
                className="w-full h-40 object-cover transition duration-300 group-hover:opacity-75 rounded-xl"
              />
              <div className="absolute bottom-2 left-2 text-white bg-black/50 px-3 py-1 rounded-md text-sm">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            </div>
          ))}
        </div>

        {/* Arrow Buttons */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-full"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-full"
        >
          →
        </button>
      </div>

      {/* Quality Text */}
      <p className="text-center mt-6 text-lg text-white font-semibold max-w-2xl mx-auto leading-relaxed">
        "At HøME TERIOR.PLACE, we believe that true craftsmanship is in the
        details. Our carefully curated selection of furniture, clothing, and
        accessories is designed to combine elegance with durability, ensuring
        that each piece not only looks stunning but also stands the test of
        time. Experience quality like never before, where every product is made
        with passion and precision."
      </p>
    </div>
  );
};

export default HomePage;
