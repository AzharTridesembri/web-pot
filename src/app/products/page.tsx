"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// Data produk (nanti bisa dipindahkan ke file terpisah)
const products = [
  {
    id: 1,
    name: "Traditional Clay Pot",
    description:
      "Handcrafted traditional clay pot, perfect for plants and decoration",
    price: "$15",
    image: "/images/products/pot-1.jpg",
    category: "Traditional",
    size: "Medium",
    color: "Terracotta",
    rating: 4.8,
    reviews: 24,
  },
  {
    id: 2,
    name: "Modern Ceramic Vase",
    description: "Contemporary ceramic vase with unique glaze finish",
    price: "$25",
    image: "/images/products/pot-2.jpg",
    category: "Modern",
    size: "Large",
    color: "White",
    rating: 4.9,
    reviews: 18,
  },
  {
    id: 3,
    name: "Rustic Plant Pot",
    description: "Rustic style plant pot with natural texture and finish",
    price: "$18",
    image: "/images/products/pot-3.jpg",
    category: "Rustic",
    size: "Small",
    color: "Brown",
    rating: 4.7,
    reviews: 32,
  },
  {
    id: 4,
    name: "Decorative Ceramic Bowl",
    description: "Beautiful decorative bowl with intricate patterns",
    price: "$20",
    image: "/images/products/pot-4.jpg",
    category: "Decorative",
    size: "Medium",
    color: "Blue",
    rating: 4.6,
    reviews: 15,
  },
  {
    id: 5,
    name: "Minimalist Planter",
    description: "Clean and simple design perfect for modern homes",
    price: "$17.50",
    image: "/images/products/pot-5.jpg",
    category: "Modern",
    size: "Small",
    color: "Gray",
    rating: 4.9,
    reviews: 27,
  },
  {
    id: 6,
    name: "Artistic Ceramic Pot",
    description: "Unique artistic design with hand-painted details",
    price: "$30",
    image: "/images/products/pot-6.jpg",
    category: "Artistic",
    size: "Large",
    color: "Multicolor",
    rating: 5.0,
    reviews: 42,
  },
  {
    id: 7,
    name: "Japanese Style Teapot",
    description: "Elegant Japanese-inspired teapot with traditional patterns",
    price: "$28",
    image: "/images/products/pot-7.jpg",
    category: "Traditional",
    size: "Medium",
    color: "Black",
    rating: 4.9,
    reviews: 35,
  },
  {
    id: 8,
    name: "Geometric Planter Set",
    description: "Modern geometric design planter set, perfect for succulents",
    price: "$22",
    image: "/images/products/pot-8.jpg",
    category: "Modern",
    size: "Small",
    color: "White",
    rating: 4.8,
    reviews: 29,
  },
  {
    id: 9,
    name: "Hand-Painted Flower Vase",
    description: "Beautiful flower vase with hand-painted floral motifs",
    price: "$32",
    image: "/images/products/pot-9.jpg",
    category: "Artistic",
    size: "Large",
    color: "Multicolor",
    rating: 4.9,
    reviews: 38,
  },
  {
    id: 10,
    name: "Rattan-Wrapped Pot",
    description: "Unique rattan-wrapped pot for a rustic feel",
    price: "$19",
    image: "/images/products/pot-10.jpg",
    category: "Rustic",
    size: "Medium",
    color: "Brown",
    rating: 4.7,
    reviews: 22,
  },
  {
    id: 11,
    name: "Ceramic Mug Set",
    description: "Set of 4 handcrafted ceramic mugs with unique designs",
    price: "$24",
    image: "/images/products/pot-11.jpg",
    category: "Modern",
    size: "Medium",
    color: "Gray",
    rating: 4.8,
    reviews: 45,
  },
  {
    id: 12,
    name: "Decorative Wall Plate",
    description: "Large decorative wall plate with traditional patterns",
    price: "$35",
    image: "/images/products/pot-12.jpg",
    category: "Decorative",
    size: "Large",
    color: "Blue",
    rating: 4.9,
    reviews: 31,
  },
  {
    id: 13,
    name: "Mini Succulent Pots",
    description: "Set of 3 mini pots perfect for small succulents",
    price: "$16",
    image: "/images/products/pot-13.jpg",
    category: "Modern",
    size: "Small",
    color: "White",
    rating: 4.7,
    reviews: 28,
  },
  {
    id: 14,
    name: "Traditional Water Jug",
    description: "Classic water jug with traditional design and glaze",
    price: "$27",
    image: "/images/products/pot-14.jpg",
    category: "Traditional",
    size: "Large",
    color: "Terracotta",
    rating: 4.8,
    reviews: 33,
  },
  {
    id: 15,
    name: "Artistic Wall Hanging",
    description: "Unique wall hanging with artistic ceramic elements",
    price: "$29",
    image: "/images/products/pot-15.jpg",
    category: "Artistic",
    size: "Medium",
    color: "Multicolor",
    rating: 4.9,
    reviews: 26,
  },
];

export default function ProductsPage() {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/90 to-indigo-800/90 z-10" />
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/hero-products.jpg"
            alt="Pottery Collection"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Our Collection
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Discover our handcrafted pottery pieces, each telling a unique story
            of tradition and creativity
          </motion.p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <span className="text-lg font-bold text-indigo-600">
                      {product.price}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <span className="text-yellow-400">★</span>
                      <span className="text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500 text-sm">
                        {product.size}
                      </span>
                      <span className="text-gray-500 text-sm">•</span>
                      <span className="text-gray-500 text-sm">
                        {product.color}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
