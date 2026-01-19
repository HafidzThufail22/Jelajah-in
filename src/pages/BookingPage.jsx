import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingForm } from "@/components/sections/BookingForm";

export function BookingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-orange-50">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-cyan-700 transition-colors mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span>Kembali ke Beranda</span>
          </Link>

          {/* Header */}
          <div className="text-center mb-12" data-aos="fade-up">
            <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Pesan Perjalanan Anda
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              Mulai{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-orange-500">
                Petualangan
              </span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Isi formulir di bawah dan tim kami akan menghubungi Anda dalam 24
              jam untuk merencanakan perjalanan impian Anda.
            </p>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="pb-20">
        <div
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
            <BookingForm />
          </div>

          {/* Trust Indicators */}
          <div
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Pembayaran Aman
              </h3>
              <p className="text-sm text-gray-600">
                Transaksi dilindungi enkripsi SSL
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Respon Cepat
              </h3>
              <p className="text-sm text-gray-600">
                Konfirmasi dalam 24 jam kerja
              </p>
            </div>
            <div className="flex flex-col items-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">
                Garansi Kepuasan
              </h3>
              <p className="text-sm text-gray-600">
                Jaminan pengalaman terbaik
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
