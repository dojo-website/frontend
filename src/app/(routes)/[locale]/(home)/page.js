import { useTranslations } from "next-intl";
import React from "react";
import Slider from "./components/Slider";
import Pillars from "./components/Pillars";
import BlogCard from "./components/BlogCard";

const Home = () => {
  const t = useTranslations("navigation");
  return (
    <div className="text-2xl font-bold">
      <Slider />
      <Pillars />
      <BlogCard />
    </div>
  );
};

export default Home;
