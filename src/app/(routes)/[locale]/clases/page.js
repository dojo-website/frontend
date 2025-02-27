import React from "react";
import ClassSchedule from "./_components/ClassSchedule";
import TitleSection from "@/components/TitleSection";
import ClassFAQ from "./_components/ClassFAQs";

const Clases = () => {
  return (
    <div className="w-full">
      <TitleSection title="Clases en KIME Dojo" image="/title-img-clases.png" />
      <ClassSchedule />
      <ClassFAQ />
    </div>
  );
};

export default Clases;
