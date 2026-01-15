"use client";

import { motion } from "framer-motion";
import { 
  CloudSun, 
  Lightbulb, 
  Bug, 
  Calendar, 
  Video, 
  MessageSquare, 
  User 
} from "lucide-react";

const features = [
  {
    icon: CloudSun,
    title: "Prediksi Cuaca Akurat",
    description: "Pantau kondisi cuaca real-time dan prediksi 7 hari ke depan untuk perencanaan tanam yang lebih baik.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
  {
    icon: Lightbulb,
    title: "Tips Pertanian Praktis",
    description: "Dapatkan tips harian dan panduan bertani sesuai musim untuk meningkatkan kualitas panen Anda.",
    color: "text-yellow-500",
    bg: "bg-yellow-50",
  },
  {
    icon: Bug,
    title: "Info Hama & Penyakit",
    description: "Deteksi dini hama dan penyakit tanaman serta temukan solusi penanganan organik yang tepat.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: Calendar,
    title: "Kalender Tanam",
    description: "Atur jadwal tanam, pemupukan, hingga panen dengan fitur pengingat otomatis.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Video,
    title: "Video Tutorial",
    description: "Pelajari teknik bertani modern melalui video tutorial yang dapat diakses kapan saja.",
    color: "text-purple-500",
    bg: "bg-purple-50",
  },
  {
    icon: MessageSquare,
    title: "Forum Komunitas",
    description: "Berdiskusi dan berbagi pengalaman dengan ribuan petani lainnya di seluruh Indonesia.",
    color: "text-indigo-500",
    bg: "bg-indigo-50",
  },
  {
    icon: User,
    title: "Profil Personal",
    description: "Simpan data lahan dan riwayat aktivitas pertanian Anda secara aman di cloud.",
    color: "text-teal-500",
    bg: "bg-teal-50",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-primary font-semibold tracking-wider uppercase text-sm">Fitur Unggulan</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
            Solusi Lengkap untuk Petani Modern
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Tingkatkan produktivitas pertanian Anda dengan teknologi canggih yang mudah digunakan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className={`w-16 h-16 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
