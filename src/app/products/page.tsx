"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// Data produk (nanti bisa dipindahkan ke file terpisah)
const products = [
  {
    id: 1,
    name: "Pot Beton Modern",
    description: "Desain modern dengan finishing halus dan tahan lama",
    price: "Rp 150.000",
    image: "/images/products/potterazzo.jpeg",
    category: "Modern",
    size: "Diameter 30cm x Tinggi 40cm",
    weight: "5kg",
    material: "Beton",
    color: "Abu-abu",
    finishing: "Doff",
  },
  {
    id: 2,
    name: "Pot Beton Klasik",
    description: "Gaya klasik dengan detail yang elegan",
    price: "Rp 175.000",
    image: "/images/products/pot2.jpeg",
    category: "Klasik",
    size: "Diameter 25cm x Tinggi 35cm",
    weight: "4kg",
    material: "Beton",
    color: "Abu-abu Natural",
    finishing: "Doff",
  },
  {
    id: 3,
    name: "Pot Beton Minimalis",
    description: "Desain minimalis yang cocok untuk berbagai ruangan",
    price: "Rp 125.000",
    image: "/images/products/pot3.jpeg",
    category: "Minimalis",
    size: "Diameter 20cm x Tinggi 25cm",
    weight: "3kg",
    material: "Beton",
    color: "Abu-abu Muda",
    finishing: "Doff",
  },
  {
    id: 4,
    name: "Pot Beton Artistik",
    description: "Karya seni yang dapat menjadi pusat perhatian",
    price: "Rp 200.000",
    image: "/images/products/pot4.jpeg",
    category: "Artistik",
    size: "Diameter 35cm x Tinggi 45cm",
    weight: "6kg",
    material: "Beton",
    color: "Abu-abu Tua",
    finishing: "Tekstur",
  },
  {
    id: 5,
    name: "Pot Beton Kontemporer",
    description: "Desain kontemporer dengan sentuhan modern",
    price: "Rp 180.000",
    image: "/images/products/pot5.jpeg",
    category: "Kontemporer",
    size: "Diameter 28cm x Tinggi 38cm",
    weight: "4.5kg",
    material: "Beton",
    color: "Abu-abu",
    finishing: "Polish",
  },
  {
    id: 6,
    name: "Pot Beton Tradisional",
    description: "Gaya tradisional dengan nilai budaya",
    price: "Rp 160.000",
    image: "/images/products/pot6.jpeg",
    category: "Tradisional",
    size: "Diameter 32cm x Tinggi 42cm",
    weight: "5.5kg",
    material: "Beton",
    color: "Abu-abu Antik",
    finishing: "Natural",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-teal-600 to-emerald-700 z-10" />
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/products-hero.jpg"
            alt="Products"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Produk Kami
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-teal-50 max-w-2xl mx-auto"
          >
            Temukan koleksi pot beton berkualitas tinggi dengan desain unik
          </motion.p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Koleksi Terbaik
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Setiap pot dibuat dengan teliti untuk memberikan kualitas terbaik
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {product.name}
                    </h3>
                    <span className="px-3 py-1 bg-teal-100 text-teal-700 text-sm rounded-full">
                      {product.category}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-4">{product.description}</p>
                  <div className="text-sm text-slate-600 mb-2">
                    <span className="font-semibold">Ukuran:</span>{" "}
                    {product.size}
                  </div>
                  <div className="text-sm text-slate-600 mb-2">
                    <span className="font-semibold">Berat:</span>{" "}
                    {product.weight}
                  </div>
                  <div className="text-sm text-slate-600 mb-2">
                    <span className="font-semibold">Material:</span>{" "}
                    {product.material}
                  </div>
                  <div className="text-sm text-slate-600 mb-2">
                    <span className="font-semibold">Warna:</span>{" "}
                    {product.color}
                  </div>
                  <div className="text-sm text-slate-600 mb-4">
                    <span className="font-semibold">Finishing:</span>{" "}
                    {product.finishing}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-teal-700">
                      {product.price}
                    </span>
                    <a
                      href={`https://wa.me/6283890558686?text=${encodeURIComponent(
                        `Halo admin, saya ingin memesan ${product.name} seharga ${product.price} (Ukuran: ${product.size}, Berat: ${product.weight}, Material: ${product.material}, Warna: ${product.color}, Finishing: ${product.finishing}). Berikut gambar produk: https://potrachmad.vercel.com${product.image}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-lg font-medium shadow hover:from-teal-700 hover:to-emerald-700 transition-all"
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
