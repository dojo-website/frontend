import { useTranslations } from "next-intl";
import React from "react";
import Pillars from "./components/Pillars";
import BlogsSection from "./components/BlogsSection";
import MainSlider from "./components/MainSlider";
import MainContent from "./components/MainContent";

const Home = () => {
  const t = useTranslations("navigation");
  return (
    <div className="text-2xl font-bold">
      <MainSlider />
      <MainContent />
      <Pillars />
      <BlogsSection />
    </div>
  );
};

export default Home;
