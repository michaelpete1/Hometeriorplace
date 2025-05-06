"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar";

const HomePage = () => {
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
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

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/comments");
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error("Failed to fetch comments:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat p-6 sm:p-10 text-white"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <Navbar />

      {/* Image Slider */}
      <div className="relative mt-20 overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-scroll scrollbar-hide transition-all duration-500 ease-in-out"
        >
          {images.map((item) => (
            <div
              key={item}
              className="relative group min-w-[300px] border border-white p-2 rounded-xl transform transition duration-300 hover:scale-105"
            >
              <Image
                src={`/${item}.jpg`}
                alt={item}
                width={300}
                height={200}
                className="w-full h-40 object-cover rounded-xl group-hover:opacity-80 transition duration-300"
              />
              <div className="absolute bottom-2 left-2 text-white bg-black/50 px-3 py-1 rounded-md text-sm">
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </div>
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-black rounded-full"
        >
          ←
        </button>
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-white text-black rounded-full"
        >
          →
        </button>
      </div>

      {/* Description */}
      <p className="text-center mt-6 text-md sm:text-lg max-w-2xl mx-auto leading-relaxed text-white">
        Quality meets comfort. Discover our refined collection for modern living.
      </p>

      {/* Testimonials */}
      <section className="mt-20">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center">What Customers Say</h2>
        <div className="flex justify-center mt-6">
          <div className="max-w-2xl space-y-6 w-full">
            {loading ? (
              <p className="text-center text-white">Loading comments...</p>
            ) : (
              comments.map((comment) => (
                <div
                  key={comment.id}
                  className="bg-white/10 border border-white/20 p-6 rounded-xl shadow-lg backdrop-blur-md"
                >
                  <p className="text-white">{comment.comment}</p>
                  <div className="mt-2 text-sm text-right font-semibold text-white/80">
                    – {comment.name}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="mt-20 py-16 bg-black/80 rounded-xl text-center">
        <h2 className="text-2xl sm:text-3xl font-semibold">Transform your home today</h2>
        <p className="mt-3 text-white/80 text-md sm:text-lg">
          Explore elegant, durable designs made with passion.
        </p>
        <Link
          href="/shop"
          className="mt-6 inline-block bg-white text-black font-semibold px-6 py-3 rounded-xl hover:bg-gray-200 transition duration-300"
        >
          Shop Now
        </Link>
      </section>
    </div>
  );
};

export default HomePage;
