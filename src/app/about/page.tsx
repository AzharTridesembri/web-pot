import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Tentang Kami
              </h1>
              <p className="text-xl md:text-2xl">
                Mengenal Lebih Dekat dengan Web-Pot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Visi Kami</h2>
              <p className="text-gray-900 mb-6">
                Kami berkomitmen untuk memberikan solusi terbaik dalam
                pengembangan web dan aplikasi digital. Dengan pengalaman dan
                keahlian kami, kami membantu klien untuk mencapai tujuan digital
                mereka.
              </p>
              <p className="text-gray-900">
                Fokus kami adalah memberikan layanan berkualitas tinggi dengan
                teknologi terkini dan pendekatan yang inovatif untuk setiap
                proyek.
              </p>
            </div>
            <div className="relative h-[300px]">
              <Image
                src="/globe.svg"
                alt="Tentang Kami"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Mengapa Memilih Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/window.svg" alt="Inovasi" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Inovasi</h3>
              <p className="text-gray-600">
                Kami selalu mengikuti perkembangan teknologi terbaru untuk
                memberikan solusi yang inovatif.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/file.svg" alt="Kualitas" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Kualitas</h3>
              <p className="text-gray-600">
                Setiap proyek kami kerjakan dengan standar kualitas tinggi dan
                perhatian terhadap detail.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Image src="/globe.svg" alt="Dukungan" width={24} height={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dukungan</h3>
              <p className="text-gray-600">
                Kami memberikan dukungan penuh dan solusi cepat untuk setiap
                kebutuhan klien kami.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
          <p className="text-gray-600 mb-8">
            Tertarik untuk bekerja sama dengan kami? Jangan ragu untuk
            menghubungi kami.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Hubungi Kami
          </button>
        </div>
      </section>
    </main>
  );
}
