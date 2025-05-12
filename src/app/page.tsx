"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background with gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-slate-800/20 z-10" />

        {/* Animated background image */}
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/images/pictures/logorachmadpot.png"
            alt="logo rachmad pot"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Produsen
            <br />
            <span className="text-teal-400">Pot Beton</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto"
          >
            Temukan keindahan pot beton melalui karya tangan kami, setiap pot
            menceritakan kisah unik tentang tradisi dan kreativitas
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/products"
              className="px-8 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-medium hover:from-teal-700 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              Lihat Products
            </Link>
            <Link
              href="/gallery"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-full font-medium hover:bg-white/20 transition-colors duration-300 transform hover:scale-105"
            >
              Lihat Gallery
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section putih untuk box custom pot/terazzo */}
      <section className="w-full bg-white py-12 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full max-w-2xl bg-gradient-to-r from-teal-200 via-emerald-100 to-teal-50 border border-teal-200 shadow-lg rounded-2xl p-8 flex flex-col items-center gap-4"
        >
          <div className="flex items-center gap-3 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="bg-white rounded-full p-1 shadow border-2 border-emerald-200"
            >
              <path d="M21.67 20.13l-1.2-4.28A9 9 0 1 0 4.5 19.5l4.28 1.2a9 9 0 0 0 12.89-0.57z" />
              <path d="M16 12a4 4 0 0 1-4 4" />
            </svg>
            <span className="text-2xl md:text-3xl font-bold text-teal-900">
              Mau custom pot beton atau terazzo?
            </span>
          </div>
          <span className="block text-base md:text-lg text-slate-800 text-center mb-2">
            Kami menerima pesanan custom sesuai desain dan kebutuhan Anda.
            Konsultasikan ide Anda sekarang, dan wujudkan pot impian Anda
            bersama kami!
          </span>
          <a
            href="https://wa.me/6283890558686?text=Halo%20admin%2C%20saya%20ingin%20custom%20pot%20beton%20atau%20terazzo.%20Bisa%20konsultasi%20dulu?"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold shadow hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.031-.967-.273-.099-.471-.148-.67.15-.198.297-.767.967-.94 1.164-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.099 3.2 5.077 4.366.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.413-.074-.124-.272-.198-.57-.347z" />
            </svg>
            Chat WhatsApp
          </a>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Koleksi Terbaik Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Jelajahi koleksi terbaik kami, masing-masing dibuat dengan penuh
              semangat dan perhatian terhadap detail
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                image: "/images/gallery/airmancur6.jpg",
                title: "Air Mancur Premium",
                description:
                  "Air mancur beton premium dengan desain mewah untuk memperindah taman dan halaman Anda",
              },
              {
                image: "/images/gallery/potbesarpancawarna.jpeg",
                title: "Pot Besar Pancawarna",
                description:
                  "Pot beton ukuran besar dengan warna-warni yang menarik untuk taman Anda",
              },
              {
                image: "/images/gallery/wastafelpancawarna.jpeg",
                title: "Wastafel Terrazzo",
                description:
                  "Wastafel terrazzo dengan desain elegan dan warna yang cantik",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-4">{item.description}</p>
                  <Link
                    href="/products"
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium"
                  >
                    Lihat Detail
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/pictures/logorachmadpot.png"
                alt="About Our Workshop"
                fill
                className="object-contain p-4"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Cerita Kami
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Dengan pengalaman lebih dari dua dekade dalam pembuatan pot
                beton, kami menggabungkan teknik tradisional dengan desain
                modern untuk menciptakan pot unik yang bercerita melalui beton.
              </p>
              <p className="text-lg text-slate-600 mb-8">
                Setiap pot dibuat dengan teliti oleh tangan. Kami bangga dengan
                perhatian kami terhadap detail dan komitmen terhadap kualitas.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-medium hover:from-teal-700 hover:to-emerald-700 transition-all duration-300"
              >
                Pelajari Lebih Lanjut
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Layanan Kami Section */}
      <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-teal-800 mb-4">
              Layanan Kami
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Kami menyediakan berbagai layanan untuk memenuhi kebutuhan Anda,
              mulai dari pembuatan pot custom, konsultasi desain, hingga
              pengiriman ke seluruh Indonesia.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-teal-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2a4 4 0 018 0v2M5 10V7a7 7 0 0114 0v3M5 10a7 7 0 0014 0M5 10v10a2 2 0 002 2h10a2 2 0 002-2V10"
                />
              </svg>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                Custom Pot & Terrazzo
              </h3>
              <p className="text-slate-600">
                Buat pot sesuai desain dan ukuran keinginan Anda, baik untuk
                rumah, kantor, maupun proyek besar.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-teal-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 17l4 4 4-4m0-5V3a1 1 0 00-1-1H7a1 1 0 00-1 1v9m12 4h-4a4 4 0 01-8 0H3"
                />
              </svg>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                Pengiriman Aman
              </h3>
              <p className="text-slate-600">
                Layanan pengiriman ke seluruh Indonesia dengan packing aman dan
                profesional.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-100 flex flex-col items-center text-center">
              <svg
                className="w-10 h-10 text-teal-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M21 16v-2a4 4 0 00-3-3.87M3 16v-2a4 4 0 013-3.87m0 0A4 4 0 0112 4a4 4 0 016 6.13m-12 0A4 4 0 0012 4m0 0a4 4 0 016 6.13"
                />
              </svg>
              <h3 className="text-xl font-semibold text-teal-700 mb-2">
                Konsultasi & Support
              </h3>
              <p className="text-slate-600">
                Tim kami siap membantu konsultasi desain, pemilihan produk, dan
                kebutuhan proyek Anda.
              </p>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              href="/service"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-emerald-600 text-white rounded-full font-semibold text-lg shadow hover:from-teal-700 hover:to-emerald-700 transition-all duration-300"
            >
              Lihat Layanan
              <svg
                className="ml-3 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Lokasi Kami Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Lokasi Kami
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Kunjungi workshop kami untuk melihat langsung proses pembuatan pot
              beton
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-6 shadow-lg border border-teal-100"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-teal-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-teal-700 mb-2">
                    Workshop Kami
                  </h3>
                  <p className="text-slate-600">
                    Pangkalan Pot Rachmat
                    <br />
                    HQ2G+75H, Jl. Puri Bukit Depok
                    <br />
                    Ragajaya, Kecamatan Bojonggede
                    <br />
                    Kabupaten Bogor, Jawa Barat 16920
                  </p>
                </div>
              </div>
              <a
                href="https://maps.app.goo.gl/z8Cat54pWNaGLsn67"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-white font-medium bg-gradient-to-r from-teal-600 to-emerald-600 rounded-lg hover:from-teal-700 hover:to-emerald-700 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Buka di Google Maps
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[400px] rounded-xl overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d973.0745879237529!2d106.77494390576834!3d-6.449320830064546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e92a1dd4b107%3A0x264e2d2028c538e1!2sPangkalan%20Pot%20Rachmat!5e1!3m2!1sid!2sid!4v1747029570801!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
