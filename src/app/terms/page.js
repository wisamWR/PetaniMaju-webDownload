import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4 py-32 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Syarat dan Ketentuan</h1>
        <div className="prose prose-green max-w-none text-gray-600">
          <p className="mb-4">Terakhir diperbarui: 15 Januari 2026</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">1. Ketentuan Umum</h2>
          <p>Dengan mengunduh atau menggunakan aplikasi PetaniMaju, Anda menyetujui syarat dan ketentuan ini. Jika Anda tidak setuju, mohon untuk tidak menggunakan aplikasi ini.</p>
          
          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">2. Penggunaan Aplikasi</h2>
          <p>Anda setuju untuk menggunakan aplikasi ini hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda dilarang menyalahgunakan fitur atau konten yang ada di dalam aplikasi.</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">3. Akun Pengguna</h2>
          <p>Anda bertanggung jawab untuk menjaga kerahasiaan akun dan kata sandi Anda. Kami tidak bertanggung jawab atas kerugian yang timbul akibat kelalaian Anda dalam menjaga keamanan akun.</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">4. Konten Pengguna</h2>
          <p>Segala konten yang Anda unggah ke forum komunitas adalah tanggung jawab Anda sepenuhnya. Kami berhak menghapus konten yang melanggar aturan komunitas.</p>

          <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">5. Perubahan Syarat</h2>
          <p>Kami berhak mengubah syarat dan ketentuan ini sewaktu-waktu. Perubahan akan diberitahukan melalui aplikasi atau website ini.</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
