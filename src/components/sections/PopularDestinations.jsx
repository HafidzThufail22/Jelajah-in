import { useState } from "react";
import { MapPin, Star } from "lucide-react";
import { Card, CardImage, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { destinations } from "@/data/destinations";

export function PopularDestinations() {
  const [showAll, setShowAll] = useState(false);

  const displayedDestinations = showAll
    ? destinations
    : destinations.slice(0, 6);

  return (
    <section id="destinasi" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12" data-aos="fade-up">
          <span className="inline-block px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-4">
            Destinasi Populer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Temukan Tempat Impian Anda
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Jelajahi berbagai destinasi menakjubkan di seluruh Indonesia. Dari
            pantai eksotis hingga pegunungan yang memukau.
          </p>
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedDestinations.map((destination, index) => (
            <Card
              key={destination.id}
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <CardImage src={destination.image} alt={destination.name} />
              <CardContent>
                <div className="flex items-center gap-1 text-gray-500 text-sm mb-2">
                  <MapPin className="w-4 h-4" />
                  {destination.location}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {destination.name}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {destination.description}
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Mulai dari</span>
                    <div className="text-lg font-bold text-cyan-700">
                      {destination.price}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-orange-500">
                    <Star className="w-4 h-4 fill-current" />
                    <span className="font-medium">{destination.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        {destinations.length > 6 && (
          <div className="text-center mt-12" data-aos="fade-up">
            <Button
              variant="primary"
              className="px-8 py-4"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Tampilkan Sedikit" : "Lihat Semua Destinasi"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
