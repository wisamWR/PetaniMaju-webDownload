"use client";

import { Download as DownloadIcon, Smartphone, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Download() {
  return (
    <section id="download" className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 bg-white/10 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/20">
          
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Siap Meningkatkan Hasil Panen?
            </h2>
            <p className="text-lg text-green-50 mb-8 max-w-xl">
              Download aplikasi PetaniMaju sekarang dan nikmati kemudahan bertani dengan teknologi modern. Gratis selamanya!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="/app-release.apk" 
                download
                className="bg-white text-primary hover:bg-green-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-3"
              >
                <DownloadIcon size={24} />
                <div className="text-left">
                  <div className="text-xs font-normal">Download APK</div>
                  <div className="leading-none">Versi 1.0.0</div>
                </div>
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-green-100">
              <div className="flex items-center gap-2">
                <Smartphone size={16} />
                <span>Android 8.0+</span>
              </div>
              <div className="flex items-center gap-2">
                <DownloadIcon size={16} />
                <span>Size: 45 MB</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} />
                <span>Aman & Terverifikasi</span>
              </div>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-xs">
              <div className="w-48 h-48 bg-white rounded-xl mb-4 mx-auto flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/qr.png"
                  alt="Scan QR Code"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-900 font-bold mb-1">Scan untuk Download</p>
              <p className="text-gray-500 text-sm">Arahkan kamera HP Anda ke QR Code di atas</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
