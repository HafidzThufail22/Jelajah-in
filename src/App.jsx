import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HomePage } from "@/pages/HomePage";
import { BookingPage } from "@/pages/BookingPage";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pesan" element={<BookingPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;

