"use client";
import React, { useEffect, useState } from "react";
import Pillars from "./components/Pillars";
import BlogsSection from "./components/BlogsSection";
import MainSlider from "./components/MainSlider";
import MainContent from "./components/MainContent";
import { getHomePage } from "@/services/home";
import Loader from "@/components/Loader";

const Home = () => {
  const [homeData, setHomeData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getHomePage();
        if (response) {
          setHomeData(response);
        } else {
          console.warn("Home page data is empty!");
        }
      } catch (error) {
        console.error("Error loading home page data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading)
    return (
      <div className=" flex justify-center items-center min-h-[80vh]">
        <Loader />
      </div>
    );

  return (
    <div className="text-2xl font-bold bg-white">
      <MainSlider headerImages={homeData?.header_images} />
      <MainContent
        title={homeData.title}
        header={homeData.header}
        description={homeData.description}
      />
      <Pillars pillars={homeData.pillars} />
      <BlogsSection />
    </div>
  );
};

export default Home;
