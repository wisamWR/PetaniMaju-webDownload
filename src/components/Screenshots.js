"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const screenshots = [
  {
    src: "/tampilan_app.jpeg",
    alt: "Dashboard Aplikasi",
    caption: "Dashboard Utama",
  },
  {
    src: "/cuaca.jpeg",
    alt: "Fitur Cuaca",
    caption: "Prediksi Cuaca",
  },
  {
    src: "/jadwal.jpeg",
    alt: "Kalender Tanam",
    caption: "Jadwal Tanam",
  },
  {
    src: "/forum.jpeg",
    alt: "Forum Diskusi",
    caption: "Forum Komunitas",
  },
  {
    src: "/profile.jpeg",
    alt: "Profil Pengguna",
    caption: "Profil Petani",
  },
];

export default function Screenshots() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Tampilan Aplikasi
        </h2>
        <p className="text-lg text-gray-600">
          Antarmuka yang sederhana dan mudah digunakan oleh siapa saja.
        </p>
      </div>

      <div className="flex overflow-x-auto pb-12 gap-6 px-4 md:px-6 snap-x snap-mandatory scrollbar-hide justify-start md:justify-center">
        {screenshots.map((screen, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex-shrink-0 snap-center"
          >
            <div className="relative w-[260px] h-[520px] rounded-[2.5rem] border-[8px] border-gray-800 bg-gray-800 shadow-2xl overflow-hidden">
              <div className="w-full h-full bg-white relative">
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-center mt-6 font-semibold text-gray-700">
              {screen.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
