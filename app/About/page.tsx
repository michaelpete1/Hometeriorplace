import React from "react";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-6">
      <section className="text-center max-w-lg bg-white p-6 rounded-lg shadow-lg mt-24">
        <h1 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-yellow-800 to-yellow-600 text-transparent bg-clip-text">
          Welcome to HOME TERIOR.PLACE
        </h1>
        <p className="text-base text-gray-700 mt-3 leading-relaxed">
          Hey there! Welcome to{" "}
          <span className="font-semibold">HOME TERIOR.PLACE</span>! We’re all
          about making homes look amazing—without the stress. Whether you’re
          into sleek modern vibes, cozy minimalism, or just need that one
          perfect piece to complete your space, we’ve got you covered.
        </p>
        <p className="text-base text-gray-700 mt-3 leading-relaxed">
          Think of us as your go-to for stylish furniture, unique décor, and
          smart design tips to make your home truly yours. No overcomplicated
          jargon, just great designs, quality picks, and a little inspiration to
          bring your dream space to life. Take a look around and let’s make your
          home something special. ✨
        </p>

        <h2 className="text-lg font-semibold text-blue-600 mt-6">
          Our Passion for Home Design
        </h2>
        <p className="text-base text-gray-700 mt-3 leading-relaxed">
          With years of experience in home design, we carefully curate
          high-quality furniture, décor, and essentials that bring warmth,
          elegance, and practicality into your home. From sleek modern pieces to
          timeless classics, we offer a collection that caters to different
          tastes and lifestyles.
        </p>
        <p className="text-base text-gray-700 mt-3 leading-relaxed">
          But we're more than just a home design brand—we're here to guide and
          inspire. Our team is dedicated to offering expert advice, design
          inspiration, and personalized recommendations to help you make the
          best choices for your space. Whether you’re furnishing a new home,
          revamping a single room, or looking for that one perfect piece, we are
          here to make the process smooth and enjoyable.
        </p>
      </section>
    </div>
  );
}
