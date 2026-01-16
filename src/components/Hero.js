"use client";

import { motion } from "framer-motion";
import { Download, ArrowRight, Star } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-bl from-green-50 to-transparent rounded-bl-full opacity-50" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-tr from-green-50 to-transparent rounded-tr-full opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 text-primary text-sm font-semibold mb-6">
              <Star size={16} className="fill-primary" />
              <span>Aplikasi Pertanian No. 1 di Indonesia</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Bertani Lebih Cerdas Bersama <span className="text-primary">PetaniMaju</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Solusi digital terpadu untuk meningkatkan hasil panen, memantau cuaca, dan terhubung dengan komunitas petani di seluruh Indonesia.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a 
                href="/petanimaju.apk"
                download 
                className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-green-800 text-white rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
              >
                <Download size={20} />
                Download Sekarang
              </a>
              <a 
                href="#features" 
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                Pelajari Fitur
                <ArrowRight size={20} />
              </a>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-6 text-gray-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                    </div>
                  ))}
                </div>
                <span>500+ Petani Bergabung</span>
              </div>
              <div className="w-px h-8 bg-gray-300"></div>
              <div className="flex items-center gap-1">
                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                <span className="text-gray-900 font-bold">4.8/5</span>
                <span>Rating</span>
              </div>
            </div>
          </motion.div>

          {/* Image/Mockup Content */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 mx-auto w-64 md:w-80 h-[500px] md:h-[600px] bg-gray-900 rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden">
              {/* Screen Content */}
              <div className="w-full h-full bg-white relative">
                 <Image
                  src="/tampilan_app.jpeg"
                  alt="Tampilan Aplikasi PetaniMaju"
                  fill
                  className="object-cover"
                  priority
                 />
              </div>
            </div>
            
            {/* Decorative Blobs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-green-200/30 blur-3xl rounded-full -z-10 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
