"use client";

import dynamic from "next/dynamic";

const HeroExperience = dynamic(
  () => import("./models/hero_models/HeroExperience"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[50vh] animate-pulse bg-transparent" />
    ),
  }
);

const HeroCanvas = () => {
  return <HeroExperience />;
};

export default HeroCanvas;
