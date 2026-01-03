import { Users, MapPin, Star, Plane } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Traveler Puas",
  },
  {
    icon: MapPin,
    value: "100+",
    label: "Destinasi",
  },
  {
    icon: Star,
    value: "4.9",
    label: "Rating",
  },
  {
    icon: Plane,
    value: "500+",
    label: "Perjalanan",
  },
];

export function Stats() {
  return (
    <section id="stats" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-2xl mb-4">
                <stat.icon className="w-8 h-8 text-cyan-700" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-gray-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
