import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Kebijakan Privasi</h1>
        <div className="prose prose-green max-w-none text-gray-600">
          <p className="mb-4">Terakhir diperbarui: 15 Januari 2026</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Pendahuluan</h2>
          <p>Selamat datang di PetaniMaju. Kami menghargai privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Informasi yang Kami Kumpulkan</h2>
          <p>Kami dapat mengumpulkan informasi berikut:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Informasi Identitas (Nama, Username)</li>
            <li>Informasi Kontak (Email, Nomor Telepon)</li>
            <li>Data Lokasi (untuk fitur cuaca dan pemetaan lahan)</li>
            <li>Data Aktivitas Pertanian (Jadwal tanam, jenis tanaman)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Penggunaan Informasi</h2>
          <p>Kami menggunakan informasi Anda untuk:</p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Menyediakan layanan aplikasi (prediksi cuaca, kalender tanam)</li>
            <li>Meningkatkan kualitas layanan dan fitur</li>
            <li>Mengirimkan notifikasi penting terkait pertanian</li>
            <li>Menghubungkan Anda dengan komunitas petani</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Keamanan Data</h2>
          <p>Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang sesuai untuk melindungi data pribadi Anda dari akses yang tidak sah.</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Hubungi Kami</h2>
          <p>Jika Anda memiliki pertanyaan tentang kebijakan privasi ini, silakan hubungi kami di support@petanimaju.com.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
