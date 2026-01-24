import { MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-8 h-8 text-cyan-500" />
              <span className="text-xl font-bold">
                Jelajah<span className="text-cyan-500">.in</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Partner perjalanan terpercaya untuk menjelajahi keindahan Indonesia. 
              Pengalaman tak terlupakan, harga terjangkau.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-cyan-700 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><a href="#beranda" className="text-gray-400 hover:text-cyan-500 transition-colors">Beranda</a></li>
              <li><a href="#destinasi" className="text-gray-400 hover:text-cyan-500 transition-colors">Destinasi</a></li>
              <li><a href="#paket" className="text-gray-400 hover:text-cyan-500 transition-colors">Paket Wisata</a></li>
              <li><a href="#kontak" className="text-gray-400 hover:text-cyan-500 transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-400">
                <Phone className="w-4 h-4 text-cyan-500" />
                +62 812 3456 7890
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <Mail className="w-4 h-4 text-cyan-500" />
                hello@jelajah.in
              </li>
              <li className="flex items-start gap-2 text-gray-400">
                <MapPin className="w-4 h-4 text-cyan-500 mt-1" />
                Yogyakarta,  vIndonesia
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Jelajah.in. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
