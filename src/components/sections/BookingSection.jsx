import { BookingForm } from "@/components/sections/BookingForm";

export function BookingSection() {
  return (
    <section id="pesan" className="py-20 bg-linear-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Pesan Sekarang
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Siap untuk petualangan? Isi formulir di bawah dan tim kami akan
            menghubungi Anda dalam 24 jam.
          </p>
        </div>

        <div data-aos="fade-up" data-aos-delay="100">
          <BookingForm />
        </div>
      </div>
    </section>
  );
}
