import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function License() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Lisensi</h1>
        <div className="prose prose-green max-w-none text-gray-600">
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Hak Cipta</h2>
          <p>Aplikasi PetaniMaju dan seluruh kontennya (termasuk teks, grafik, logo, ikon, gambar, klip audio, unduhan digital, kompilasi data, dan perangkat lunak) adalah milik PetaniMaju atau penyedia kontennya dan dilindungi oleh hukum hak cipta Indonesia dan internasional.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Lisensi Penggunaan</h2>
          <p>Kami memberikan Anda lisensi terbatas, non-eksklusif, tidak dapat dipindahtangankan, dan dapat ditarik kembali untuk mengunduh, memasang, dan menggunakan aplikasi pada perangkat seluler Anda semata-mata untuk penggunaan pribadi dan non-komersial.</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Pembatasan</h2>
          <p>Anda tidak diperbolehkan untuk:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Menyalin, memodifikasi, atau membuat karya turunan dari aplikasi.</li>
            <li>Merekayasa balik, mendekompilasi, atau membongkar aplikasi.</li>
            <li>Menyewakan, meminjamkan, menjual, mendistribusikan, atau mensublisensikan aplikasi.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">Open Source</h2>
          <p>Aplikasi ini mungkin menggunakan beberapa komponen open source. Lisensi untuk komponen tersebut tersedia dalam dokumentasi teknis aplikasi.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
