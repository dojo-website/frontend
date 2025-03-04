"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import framer-motion
import OurPhilosophy from "./_components/OurPhilosophy";
import Instructors from "./_components/Instructors";
import Association from "./_components/Association";
import Title from "./_components/Title";
import { getAboutUs } from "@/services/about";
import TitleSection from "@/components/TitleSection";
import Loader from "@/components/Loader";
import AnimatedSection from "@/components/animations/AnimatedSection";

const Nosotros = () => {
  const [aboutPageData, setAboutPageData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await getAboutUs();
        if (data) {
          setAboutPageData(data);
        } else {
          console.warn("No data found!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutData();
  }, []);

  // Animation variants for scroll-triggered animations
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Inside your Nosotros component
  return (
    <div className="w-full">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : (
        aboutPageData && (
          <>
            <AnimatedSection>
              <TitleSection
                title={aboutPageData.title}
                image={aboutPageData.about_us_image}
              />
            </AnimatedSection>

            <Title
              content_title={aboutPageData.content_title}
              header={aboutPageData.header}
              mission_title={aboutPageData.mission_title}
              mission_statement={aboutPageData.mission_statement}
            />

            <OurPhilosophy
              inspiration_title={aboutPageData.inspiration_title}
              inspiration_picture={aboutPageData.inspiration_picture}
              philosophy_title={aboutPageData.philosophy_title}
              philosophy_description={aboutPageData.philosophy_description}
              approaches_title={aboutPageData.approaches_title}
              approaches_description={aboutPageData.approaches_description}
              approaches={aboutPageData.approaches}
            />

            <Instructors
              instructor_title={aboutPageData.instructor_title}
              instructor_description={aboutPageData.instructor_description}
              instructors={aboutPageData.instructors}
            />

            <AnimatedSection delay={0.4}>
              <Association
                associationTitle={aboutPageData.association_title}
                associationDescription={aboutPageData.association_description}
                associations={aboutPageData.associations}
              />
            </AnimatedSection>
          </>
        )
      )}
    </div>
  );
};

export default Nosotros;
