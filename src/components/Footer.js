"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-3xl">🌾</span>
              <span className="text-2xl font-bold">PetaniMaju</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Platform digital terdepan untuk memajukan pertanian Indonesia melalui teknologi dan komunitas.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="#hero" className="hover:text-primary transition-colors">Beranda</Link></li>
              <li><Link href="#features" className="hover:text-primary transition-colors">Fitur Unggulan</Link></li>
              <li><Link href="#download" className="hover:text-primary transition-colors">Download Aplikasi</Link></li>
              <li><Link href="#faq" className="hover:text-primary transition-colors">Bantuan (FAQ)</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-bold mb-6">Legal</h3>
            <ul className="space-y-4 text-gray-400">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Kebijakan Privasi</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Syarat & Ketentuan</Link></li>
              <li><Link href="/license" className="hover:text-primary transition-colors">Lisensi</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div id="contact">
            <h3 className="text-lg font-bold mb-6">Hubungi Kami</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-1 flex-shrink-0" />
                <span>Jl. Imam Bonjol No.207, Pendrikan Kidul, Kec. Semarang Tengah, Kota Semarang, Jawa Tengah 50131</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <span>petanimaju911@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} PetaniMaju. All rights reserved.</p>
          <p className="mt-2">Made with ❤️ for Indonesian Farmers</p>
        </div>
      </div>
    </footer>
  );
}
