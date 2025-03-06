"use client";

import React, { useEffect, useState } from "react";
import ClassSchedule from "./_components/ClassSchedule";
import TitleSection from "@/components/TitleSection";
import ClassFAQ from "./_components/ClassFAQs";
import { getClassesData } from "@/services/classes";
import Loader from "@/components/Loader";
import AnimatedSection from "@/components/animations/AnimatedSection";

const Clases = () => {
  const [classesPageData, setClassesPageData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClasesData = async () => {
      try {
        const data = await getClassesData();
        if (data) {
          setClassesPageData(data);
        } else {
          console.warn("No data found!");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchClasesData();
  }, []);

  return (
    <div className="w-full">
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <Loader />
        </div>
      ) : classesPageData ? (
        <>
          <AnimatedSection>
            <TitleSection
              title={classesPageData.title}
              image={classesPageData.course_image}
            />
          </AnimatedSection>
          <ClassSchedule
            schedule_title={classesPageData.schedule_title}
            schedule_description={classesPageData.schedule_description}
            schedule_days={classesPageData.schedule_days}
            age_group_schedules={classesPageData.age_group_schedules}
            course_structure_title={classesPageData.course_structure_title}
            course_structure_description={
              classesPageData.course_structure_description
            }
            structure_details={classesPageData.structure_details}
          />

          <ClassFAQ
            faqs_title={classesPageData.faqs_title}
            course_faqs={classesPageData.course_faqs}
          />
        </>
      ) : (
        <div className="flex items-center justify-center min-h-[80vh]">
          <h5 className="font-bold text-center text-primary">
            No se encontró ningún registro.
          </h5>
        </div>
      )}
    </div>
  );
};

export default Clases;
