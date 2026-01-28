import { memo } from "react";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { PopularDestinations } from "@/components/sections/PopularDestinations";

export const HomePage = memo(function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <PopularDestinations />
    </>
  );
});
