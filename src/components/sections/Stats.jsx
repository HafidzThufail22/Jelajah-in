import { Users, MapPin, Star, Plane } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const stats = [
  {
    icon: Users,
    value: 10000,
    suffix: "+",
    label: "Traveler Puas",
    format: true, // format dengan koma
  },
  {
    icon: MapPin,
    value: 100,
    suffix: "+",
    label: "Destinasi",
    format: false,
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "",
    label: "Rating",
    format: false,
    decimal: 1, // jumlah desimal
  },
  {
    icon: Plane,
    value: 500,
    suffix: "+",
    label: "Perjalanan",
    format: false,
  },
];

// Hook untuk mendeteksi elemen masuk viewport
function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Hanya trigger sekali
        }
      },
      { threshold: 0.3, ...options },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
}

// Hook untuk animasi count-up
function useCountUp(end, isInView, duration = 2000, decimal = 0) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime = null;
    const startValue = 0;

    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function untuk animasi smooth
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = startValue + (end - startValue) * easeOutQuart;

      setCount(
        decimal > 0
          ? parseFloat(currentValue.toFixed(decimal))
          : Math.floor(currentValue),
      );

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration, decimal]);

  return count;
}

// Komponen untuk setiap stat item
function StatItem({ stat, index, isInView }) {
  const count = useCountUp(stat.value, isInView, 2000, stat.decimal || 0);

  // Format angka dengan koma
  const formatNumber = (num) => {
    if (stat.format) {
      return num.toLocaleString("id-ID");
    }
    return stat.decimal ? num.toFixed(stat.decimal) : num;
  };

  return (
    <div
      className="text-center"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="inline-flex items-center justify-center w-16 h-16 bg-cyan-100 rounded-2xl mb-4">
        <stat.icon className="w-8 h-8 text-cyan-700" />
      </div>
      <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
        {formatNumber(count)}
        {stat.suffix}
      </div>
      <div className="text-gray-500 font-medium">{stat.label}</div>
    </div>
  );
}

export function Stats() {
  const [sectionRef, isInView] = useInView();

  return (
    <section id="stats" className="py-16 bg-white" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              stat={stat}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
