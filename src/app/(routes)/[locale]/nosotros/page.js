"use client";

import React, { useEffect, useState } from "react";
import OurPhilosophy from "./_components/OurPhilosophy";
import Instructors from "./_components/Instructors";
import Association from "./_components/Association";
import Title from "./_components/Title";
import aboutData from "@/services/about";
import TitleSection from "@/components/TitleSection";

const Nosotros = () => {
  const [aboutPageData, setAboutPageData] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await aboutData();
        console.log("Fetched data:", data);
        setAboutPageData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="w-full">
      {aboutPageData ? (
        <>
          <TitleSection
            title={aboutPageData.title}
            image="/title-img-nosotros.png"
          />
          <Title
            content_title={aboutPageData.content_title}
            header={aboutPageData.header}
            mission_title={aboutPageData.mission_title}
            mission_statement={aboutPageData.mission_statement}
          />

          <OurPhilosophy
            inspiration_title={aboutPageData.inspiration_title}
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
          <Association
            association_title={aboutPageData.association_title}
            association_description={aboutPageData.association_description}
            associations={aboutPageData.associations}
          />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Nosotros;
