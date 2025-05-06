"use client";

import Image from "next/image";

const products = [
  { name: "Sofa", image: "/sofa.jpg", price: "$250" },
  { name: "Bowl", image: "/bowl.jpg", price: "$25" },
  { name: "Shoes", image: "/shoes.jpg", price: "$90" },
  { name: "Chair", image: "/chair.jpg", price: "$120" },
  { name: "Hat", image: "/hats.jpg", price: "$40" },
  { name: "Shirt", image: "/shirts.jpg", price: "$35" },
  { name: "Spoon", image: "/spoon.jpg", price: "$15" },
  { name: "Crocs", image: "/crocks.jpg", price: "$55" },
];

const ShopPage = () => {
  return (
    <div className="min-h-screen bg-[#4E342E] pt-24 px-6 pb-10 text-white"> {/* pt-24 to offset fixed navbar */}
      <h1 className="text-3xl font-bold mb-6 text-center drop-shadow-lg">
        Shop Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#6D4C41] rounded-xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105"
          >
            <div className="relative w-full h-60">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                objectFit="cover"
                className="transition-opacity duration-700 hover:opacity-80"
              />
            </div>
            <div className="p-4">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <p className="mt-2 text-lg font-medium text-yellow-200">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopPage;
