"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    category: "Pot Beton",
    items: [
      {
        name: "Pot Beton Premium",
        image: "/images/gallery/potbeton1.jpeg",
        description: "Pot beton berkualitas tinggi dengan desain modern",
        price: "Rp 150.000",
        specifications: [
          "Material: Beton berkualitas tinggi",
          "Ukuran: 30x30x40 cm",
          "Ketahanan: Tahan cuaca ekstrem",
          "Warna: Abu-abu natural",
          "Berat: 15 kg",
        ],
      },
      {
        name: "Pot Besar Pancawarna",
        image: "/images/gallery/potbesarpancawarna.jpeg",
        description: "Pot beton ukuran besar dengan warna-warni yang menarik",
        price: "Rp 250.000",
        specifications: [
          "Material: Beton premium",
          "Ukuran: 50x50x60 cm",
          "Ketahanan: Tahan cuaca dan UV",
          "Warna: Multi warna",
          "Berat: 25 kg",
        ],
      },
      {
        name: "Pot Persegi",
        image: "/images/gallery/potpersegi.jpeg",
        description: "Pot beton dengan desain persegi yang elegan",
        price: "Rp 180.000",
        specifications: [
          "Material: Beton berkualitas",
          "Ukuran: 40x40x45 cm",
          "Ketahanan: Tahan cuaca",
          "Warna: Abu-abu",
          "Berat: 18 kg",
        ],
      },
    ],
  },
  {
    category: "Terrazzo",
    items: [
      {
        name: "Pot Terrazzo Premium",
        image: "/images/gallery/potterazzo3.jpeg",
        description: "Pot terrazzo dengan desain modern dan warna yang menarik",
        price: "Rp 200.000",
        specifications: [
          "Material: Terrazzo premium",
          "Ukuran: 35x35x45 cm",
          "Ketahanan: Tahan cuaca dan goresan",
          "Warna: Multi warna",
          "Berat: 20 kg",
        ],
      },
      {
        name: "Terrazzo Hitam",
        image: "/images/gallery/terazohitam.jpeg",
        description: "Pot terrazzo dengan warna hitam yang elegan",
        price: "Rp 175.000",
        specifications: [
          "Material: Terrazzo hitam",
          "Ukuran: 30x30x40 cm",
          "Ketahanan: Tahan cuaca",
          "Warna: Hitam",
          "Berat: 15 kg",
        ],
      },
      {
        name: "Terrazzo Bulat",
        image: "/images/gallery/terazobulat.jpeg",
        description: "Pot terrazzo dengan bentuk bulat yang unik",
        price: "Rp 190.000",
        specifications: [
          "Material: Terrazzo premium",
          "Ukuran: Diameter 40 cm",
          "Ketahanan: Tahan cuaca",
          "Warna: Multi warna",
          "Berat: 18 kg",
        ],
      },
    ],
  },
  {
    category: "Wastafel",
    items: [
      {
        name: "Wastafel Terrazzo Premium",
        image: "/images/gallery/wastafelpancawarna.jpeg",
        description:
          "Wastafel terrazzo dengan desain modern dan warna yang cantik",
        price: "Rp 1.500.000",
        specifications: [
          "Material: Terrazzo premium",
          "Ukuran: 60x45x15 cm",
          "Ketahanan: Tahan air dan goresan",
          "Warna: Multi warna",
          "Berat: 35 kg",
        ],
      },
      {
        name: "Wastafel Bulat Terrazzo",
        image: "/images/gallery/wastafelbulatterazo.jpeg",
        description: "Wastafel terrazzo dengan bentuk bulat yang elegan",
        price: "Rp 1.200.000",
        specifications: [
          "Material: Terrazzo premium",
          "Ukuran: Diameter 50 cm",
          "Ketahanan: Tahan air",
          "Warna: Multi warna",
          "Berat: 30 kg",
        ],
      },
    ],
  },
  {
    category: "Air Mancur",
    items: [
      {
        name: "Air Mancur Premium",
        image: "/images/gallery/airmancur6.jpg",
        description: "Air mancur beton premium dengan desain mewah",
        price: "Rp 3.500.000",
        specifications: [
          "Material: Beton premium",
          "Ukuran: 100x100x150 cm",
          "Ketahanan: Tahan air dan cuaca",
          "Warna: Abu-abu natural",
          "Berat: 150 kg",
        ],
      },
      {
        name: "Air Mancur Kecil",
        image: "/images/gallery/airmancur4.jpeg",
        description: "Air mancur ukuran kecil untuk taman minimalis",
        price: "Rp 2.000.000",
        specifications: [
          "Material: Beton berkualitas",
          "Ukuran: 60x60x80 cm",
          "Ketahanan: Tahan air",
          "Warna: Abu-abu",
          "Berat: 80 kg",
        ],
      },
    ],
  },
];

export default function ProductsPage() {
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
                Produk Kami
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

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {products.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-8">
                {category.category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, itemIndex) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: itemIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-slate-900 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-slate-600 mb-4">{item.description}</p>
                      <div className="space-y-2 mb-4">
                        <h4 className="font-semibold text-teal-700">
                          Spesifikasi:
                        </h4>
                        <ul className="list-disc list-inside text-slate-600 space-y-1">
                          {item.specifications.map((spec, index) => (
                            <li key={index}>{spec}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <span className="block text-xl font-bold text-teal-700 mb-4">
                          {item.price}
                        </span>
                        <div className="flex flex-col md:flex-row gap-3 w-full">
                          <a
                            href={`https://wa.me/6283890558686?text=${encodeURIComponent(
                              `Halo admin, saya ingin berkonsultasi tentang produk ${
                                item.name
                              }.\n\nSaya tertarik dengan spesifikasi berikut:\n${item.specifications.join(
                                "\n"
                              )}\n\nMohon informasi lebih detail dan penawaran harga yang terbaik. Terima kasih.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center px-4 py-2 bg-white border-2 border-teal-600 text-teal-600 rounded-lg font-medium shadow hover:bg-teal-50 transition-all w-full md:w-auto"
                          >
                            Tanya Produk
                            <svg
                              className="ml-2 w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </a>
                          <a
                            href={`https://wa.me/6283890558686?text=${encodeURIComponent(
                              `Halo admin, saya ingin memesan ${
                                item.name
                              } seharga ${
                                item.price
                              }.\n\nSpesifikasi produk:\n${item.specifications.join(
                                "\n"
                              )}\n\nBerikut gambar produk: https://potrachmad.vercel.app${
                                item.image
                              }\n\nMohon konfirmasi ketersediaan dan detail pengiriman. Terima kasih.`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex justify-center items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg font-medium shadow hover:from-teal-700 hover:to-emerald-700 transition-all w-full md:w-auto"
                          >
                            Pesan Sekarang
                            <svg
                              className="ml-2 w-4 h-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 10.5a8.38 8.38 0 01-.9 3.8l-1.1 2.2a2 2 0 01-1.8 1.1H7.7a2 2 0 01-1.8-1.1l-1.1-2.2A8.38 8.38 0 014 10.5V7a2 2 0 012-2h12a2 2 0 012 2v3.5z"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
