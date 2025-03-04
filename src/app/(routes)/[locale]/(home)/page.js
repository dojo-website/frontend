"use client";
import React, { useEffect, useState } from "react";
import Pillars from "./components/Pillars";
import BlogsSection from "./components/BlogsSection";
import MainSlider from "./components/MainSlider";
import MainContent from "./components/MainContent";
import { getHomePage } from "@/services/home";
import Loader from "@/components/Loader";
import AnimatedSection from "@/components/animations/AnimatedSection";

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
      <div className="flex items-center justify-center min-h-screen ">
        <Loader />
      </div>
    );

  return (
    <div className="text-2xl font-bold bg-white">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : homeData ? (
        <>
          <MainSlider headerImages={homeData?.header_images} />
          <MainContent
            title={homeData?.title}
            header={homeData?.header}
            description={homeData?.description}
          />
          <AnimatedSection>
            <Pillars pillars={homeData?.pillars} />
          </AnimatedSection>
          <BlogsSection />
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <h5 className="font-bold text-center text-primary">
            No se encontró ningún registro.
          </h5>
        </div>
      )}
    </div>
  );
};

export default Home;
