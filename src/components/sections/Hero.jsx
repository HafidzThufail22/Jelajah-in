import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import bromo from "@/assets/img/bromo.jpg";
import rajaAmpat from "@/assets/img/raja-ampat.jpg";
import borobudur from "@/assets/img/borobudur.jpeg";

const heroImages = [rajaAmpat, bromo, borobudur];

export function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000); // Ganti setiap 5 detik

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="beranda"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images with Fade Transition */}
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${image}')`,
          }}
        />
      ))}

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Jelajahi Keindahan
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-orange-400">
              Nusantara
            </span>
          </h1>

          <p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Temukan destinasi impian Anda bersama kami. Pengalaman perjalanan
            tak terlupakan dengan harga terjangkau dan layanan terbaik.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <Button variant="secondary" size="xl" asChild className="text-xl">
              <a href="#pesan">Mulai Petualangan</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a
          href="#stats"
          className="flex flex-col items-center text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
}
