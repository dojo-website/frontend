"use client";

import React, { useEffect, useState } from "react";
import ClassSchedule from "./_components/ClassSchedule";
import TitleSection from "@/components/TitleSection";
import ClassFAQ from "./_components/ClassFAQs";
import classesData from "@/services/classes";

const Clases = () => {
  const [classesPageData, setClassesPageData] = useState(null);

  useEffect(() => {
    const fetchClasesData = async () => {
      try {
        const data = await classesData();
        console.log("Fetched data:", data);
        setClassesPageData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchClasesData();
  }, []);

  return (
    <div className="w-full">
      {classesPageData ? (
        <>
          <TitleSection
            title={classesPageData.title}
            image="/title-img-clases.png"
          />
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
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Clases;
