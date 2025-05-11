"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Data gallery (nanti bisa dipindahkan ke file terpisah)
const galleryItems = [
  {
    id: 1,
    title: "Traditional Pottery Collection",
    description: "Our finest collection of traditional pottery pieces",
    image: "/images/gallery/gallery-1.jpg",
    category: "Traditional",
  },
  {
    id: 2,
    title: "Modern Ceramic Art",
    description: "Contemporary ceramic art pieces with unique designs",
    image: "/images/gallery/gallery-2.jpg",
    category: "Modern",
  },
  {
    id: 3,
    title: "Handcrafted Vases",
    description: "Beautiful handcrafted vases with intricate patterns",
    image: "/images/gallery/gallery-3.jpg",
    category: "Vases",
  },
  {
    id: 4,
    title: "Artistic Pottery",
    description: "Unique artistic pottery pieces with creative designs",
    image: "/images/gallery/gallery-4.jpg",
    category: "Artistic",
  },
  {
    id: 5,
    title: "Rustic Collection",
    description: "Rustic style pottery with natural textures",
    image: "/images/gallery/gallery-5.jpg",
    category: "Rustic",
  },
  {
    id: 6,
    title: "Decorative Pieces",
    description: "Elegant decorative pieces for your home",
    image: "/images/gallery/gallery-6.jpg",
    category: "Decorative",
  },
  {
    id: 7,
    title: "Ceramic Sculptures",
    description: "Unique ceramic sculptures and art pieces",
    image: "/images/gallery/gallery-7.jpg",
    category: "Sculptures",
  },
  {
    id: 8,
    title: "Traditional Patterns",
    description: "Traditional patterns and designs in pottery",
    image: "/images/gallery/gallery-8.jpg",
    category: "Traditional",
  },
  {
    id: 9,
    title: "Modern Minimalist",
    description: "Clean and minimalist ceramic designs",
    image: "/images/gallery/gallery-9.jpg",
    category: "Modern",
  },
  {
    id: 10,
    title: "Colorful Collection",
    description: "Vibrant and colorful ceramic pieces",
    image: "/images/gallery/gallery-10.jpg",
    category: "Colorful",
  },
  {
    id: 11,
    title: "Nature Inspired",
    description: "Pottery pieces inspired by natural elements",
    image: "/images/gallery/gallery-11.jpg",
    category: "Nature",
  },
  {
    id: 12,
    title: "Cultural Heritage",
    description: "Traditional cultural pottery designs",
    image: "/images/gallery/gallery-12.jpg",
    category: "Traditional",
  },
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...new Set(galleryItems.map((item) => item.category)),
  ];

  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-600/90 to-indigo-800/90 z-10" />
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/gallery-hero.jpg"
            alt="Gallery"
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
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto"
          >
            Explore our collection of handcrafted pottery pieces through our
            gallery
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative h-80">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-200">{item.description}</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative w-full max-w-4xl h-[80vh]">
            <Image
              src={
                galleryItems.find((item) => item.id === selectedImage)?.image ||
                ""
              }
              alt={
                galleryItems.find((item) => item.id === selectedImage)?.title ||
                ""
              }
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
