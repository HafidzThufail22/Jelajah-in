import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { PopularDestinations } from "@/components/sections/PopularDestinations";

export function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <PopularDestinations />
    </>
  );
}
