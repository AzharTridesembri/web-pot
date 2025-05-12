"use client";
import { motion } from "framer-motion";
// import Image from "next/image";

export default function ServicePage() {
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
                Layanan Kami
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg md:text-xl text-teal-50"
              >
                Proses Pembuatan Pot Beton Berkualitas
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-teal-800 text-center mb-12"
          >
            Proses Pembuatan
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Pemilihan Material",
                description:
                  "Kami menggunakan material berkualitas tinggi seperti semen, pasir, dan bahan tambahan khusus untuk memastikan kekuatan dan keawetan pot.",
                icon: "🏗️",
              },
              {
                title: "Pembuatan Cetakan",
                description:
                  "Cetakan dibuat dengan teliti untuk menghasilkan bentuk yang presisi dan detail yang sempurna pada setiap pot.",
                icon: "🔨",
              },
              {
                title: "Pengecoran",
                description:
                  "Proses pengecoran dilakukan dengan hati-hati untuk menghindari gelembung udara dan memastikan kepadatan yang merata.",
                icon: "🏺",
              },
              {
                title: "Pengeringan",
                description:
                  "Pot dikeringkan secara alami dalam waktu yang cukup untuk memastikan kekuatan maksimal.",
                icon: "☀️",
              },
              {
                title: "Finishing",
                description:
                  "Proses finishing meliputi pengamplasan, pewarnaan, dan pelapisan untuk hasil akhir yang sempurna.",
                icon: "✨",
              },
              {
                title: "Quality Control",
                description:
                  "Setiap pot melalui pemeriksaan kualitas ketat sebelum dipasarkan.",
                icon: "✅",
              },
            ].map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-teal-100"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-teal-700 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-gradient-to-b from-teal-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-teal-800 text-center mb-12"
          >
            Layanan Tambahan
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-teal-100"
            >
              <h3 className="text-xl font-semibold text-teal-700 mb-4">
                Konsultasi Desain
              </h3>
              <p className="text-slate-600 mb-4">
                Kami menyediakan layanan konsultasi desain untuk membantu Anda
                memilih pot yang sesuai dengan kebutuhan dan gaya dekorasi Anda.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Konsultasi ukuran dan bentuk</li>
                <li>Rekomendasi warna dan tekstur</li>
                <li>Penyesuaian dengan tema taman</li>
                <li>Solusi untuk kebutuhan khusus</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg border border-teal-100"
            >
              <h3 className="text-xl font-semibold text-teal-700 mb-4">
                Pemesanan Khusus
              </h3>
              <p className="text-slate-600 mb-4">
                Kami menerima pesanan khusus dengan spesifikasi yang Anda
                inginkan untuk proyek-proyek khusus.
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Desain custom sesuai permintaan</li>
                <li>Ukuran khusus</li>
                <li>Warna dan tekstur khusus</li>
                <li>Pemesanan dalam jumlah besar</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Custom Order Box */}
      <section className="py-16 bg-gradient-to-b from-white to-teal-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-teal-100"
          >
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 text-center">
                Pesan Custom Pot & Terrazzo
              </h2>
              <p className="text-slate-600 mb-8 text-center">
                Dapatkan pot dan terrazzo custom sesuai dengan kebutuhan Anda
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-700">
                    Keunggulan:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span className="text-slate-600">
                        Desain sesuai permintaan
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span className="text-slate-600">
                        Material berkualitas tinggi
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span className="text-slate-600">
                        Pengerjaan profesional
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span className="text-slate-600">Garansi kualitas</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-teal-700">
                    Layanan:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span className="text-slate-600">
                        Konsultasi desain gratis
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span className="text-slate-600">
                        Pengiriman ke seluruh Indonesia
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span className="text-slate-600">
                        Pemesanan dalam jumlah besar
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-500 mr-2">✓</span>
                      <span className="text-slate-600">
                        Pembayaran fleksibel
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 text-center">
                <motion.a
                  href="https://wa.me/6283890558686?text=Halo%20admin%2C%20saya%20ingin%20custom%20pot%20beton%20atau%20terazzo.%20Bisa%20konsultasi%20dulu?"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-8 py-3 rounded-full hover:from-teal-700 hover:to-emerald-700 transition-all shadow-lg"
                >
                  Hubungi via WhatsApp
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
