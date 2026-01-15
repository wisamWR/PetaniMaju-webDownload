"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "Apakah aplikasi ini gratis?",
    answer: "Ya, aplikasi PetaniMaju dapat diunduh dan digunakan sepenuhnya gratis tanpa biaya berlangganan.",
  },
  {
    question: "Berapa ukuran aplikasi?",
    answer: "Ukuran aplikasi sangat ringan, hanya sekitar 72 MB, sehingga tidak membebani memori HP Anda.",
  },
  {
    question: "Apakah bisa digunakan offline?",
    answer: "Beberapa fitur seperti Kalender Tanam, Cuaca, Tips, Info Hama sudah dapat diakses tanpa koneksi internet. Namun fitur Video Tutorial dan Forum memerlukan internet.",
  },
  {
    question: "Bagaimana cara mengupdate aplikasi?",
    answer: "Anda akan mendapatkan notifikasi di dalam aplikasi jika versi baru tersedia. Cukup unduh dan instal ulang APK versi terbaru.",
  },
  {
    question: "Apa saja fitur utamanya?",
    answer: "Fitur utama meliputi Prediksi Cuaca, Deteksi Hama, Kalender Tanam, Forum Komunitas, dan Manajemen Lahan.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
          
          {/* Header Section */}
          <div className="md:w-1/3">
            <span className="text-primary font-semibold tracking-wider uppercase text-sm">Bantuan</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              Sering Ditanyakan
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Temukan jawaban cepat untuk pertanyaan umum seputar aplikasi PetaniMaju.
            </p>
            <div className="p-6 bg-green-50 rounded-2xl border border-green-100">
              <h4 className="font-bold text-gray-900 mb-2">Masih butuh bantuan?</h4>
              <p className="text-sm text-gray-600 mb-4">Tim support kami siap membantu Anda 24/7.</p>
              <a href="#contact" className="text-primary font-semibold hover:underline">Hubungi Kami &rarr;</a>
            </div>
          </div>

          <div className="md:w-2/3 space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl overflow-hidden ${
                  openIndex === index 
                    ? "border-primary/30 shadow-md bg-white" 
                    : "border-gray-200 hover:border-primary/30 bg-gray-50/30"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`font-bold text-lg ${openIndex === index ? "text-primary" : "text-gray-900"}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className={`flex-shrink-0 ${openIndex === index ? "text-primary" : "text-gray-400"}`} />
                  </motion.div>
                </button>
                
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      style={{ overflow: "hidden" }}
                    >
                      <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
