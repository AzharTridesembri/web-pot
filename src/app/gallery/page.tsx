"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const categories = [
  "Semua",
  "Pot Beton",
  "Terrazzo",
  "Wastafel",
  "Air Mancur",
  "Bak Mandi",
  "Batu Stepping",
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const images = [
    // Pot Beton
    { src: "/images/gallery/potbeton1.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/potbeton.jpg", category: "Pot Beton" },
    { src: "/images/gallery/potbeton2.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/potbeton3.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/potbeton4.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/pot1.jpg", category: "Pot Beton" },
    { src: "/images/gallery/pot2.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/pot3.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/pot4.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/pot5.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/pot6.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/pot7.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/pot8.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/pot9.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/pot10.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/pot11.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/potpersegi.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/potpiala.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/potteratai.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/potbesarpancawarna.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/potbesarpancawarna1.jpeg", category: "Pot Beton" },
    { src: "/images/gallery/potbesarpancawarna2.jpeg", category: "Pot Beton" },

    // Terrazzo
    { src: "/images/gallery/potterazzo3.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/potterazo2.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/potterazo1.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/potterazo4.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/potterazo5.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/terazo2.jpg", category: "Terrazzo" },
    { src: "/images/gallery/terazo4.jpg", category: "Terrazzo" },
    { src: "/images/gallery/terazohitam.jpg", category: "Terrazzo" },
    { src: "/images/gallery/terazohitam1.jpg", category: "Terrazzo" },
    { src: "/images/gallery/terazohitam2.jpg", category: "Terrazzo" },
    { src: "/images/gallery/terazohitam3.jpg", category: "Terrazzo" },
    { src: "/images/gallery/terazohitam4.jpg", category: "Terrazzo" },
    { src: "/images/gallery/terazohitam.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/terazohitam1.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/terazobulat.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/terazobulat-.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/terazobulat--.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/terazomen.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/terazo2-.jpeg", category: "Terrazzo" },
    { src: "/images/gallery/potkerucutterazo.jpg", category: "Terrazzo" },

    // Wastafel
    { src: "/images/gallery/wastafelterazo.jpg", category: "Wastafel" },
    { src: "/images/gallery/wastafelterazo2.jpg", category: "Wastafel" },
    { src: "/images/gallery/wastafelpancawarna.jpeg", category: "Wastafel" },
    { src: "/images/gallery/wastafelbulatterazo.jpeg", category: "Wastafel" },
    { src: "/images/gallery/wastafelpanjangterazo.jpeg", category: "Wastafel" },
    { src: "/images/gallery/wastafelpendekterazo.jpeg", category: "Wastafel" },

    // Air Mancur
    { src: "/images/gallery/airmancur1.jpg", category: "Air Mancur" },
    { src: "/images/gallery/airmancur2.jpg", category: "Air Mancur" },
    { src: "/images/gallery/airmancur4.jpeg", category: "Air Mancur" },
    { src: "/images/gallery/airmancur5.jpeg", category: "Air Mancur" },
    { src: "/images/gallery/airmancur6.jpg", category: "Air Mancur" },

    // Bak Mandi
    { src: "/images/gallery/potterazo-bakmandi.jpeg", category: "Bak Mandi" },
    { src: "/images/gallery/potterazo-bakmandi1.jpeg", category: "Bak Mandi" },
    { src: "/images/gallery/potbakmanditerazo.jpg", category: "Bak Mandi" },
    { src: "/images/gallery/potbakmanditerazo2.jpg", category: "Bak Mandi" },
    { src: "/images/gallery/potbakmanditerazzo1.jpeg", category: "Bak Mandi" },

    // Batu Stepping
    {
      src: "/images/gallery/stepingpancawarna.jpeg",
      category: "Batu Stepping",
    },
    {
      src: "/images/gallery/stepingpancawarna1.jpeg",
      category: "Batu Stepping",
    },
  ];

  const filteredImages =
    selectedCategory === "Semua"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[300px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-700">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl md:text-4xl font-bold mb-3"
              >
                Galeri Produk
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-teal-50"
              >
                Koleksi Produk Pot Beton & Terrazzo Berkualitas
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-all ${
                  selectedCategory === category
                    ? "bg-teal-600 text-white shadow-lg"
                    : "bg-white text-teal-600 hover:bg-teal-50 border border-teal-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative aspect-square overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all"
              >
                <Image
                  src={image.src}
                  alt={image.category}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-semibold">{image.category}</p>
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
