import React from "react";
import RegistrationForm from "./_components/RegistrationForm";
import RegistrationFAQ from "./_components/RegistrationFAQs";
import TitleSection from "@/components/TitleSection";

const Inscrebete = () => {
  return (
    <div>
      <TitleSection title="Inscríbete en KIME Dojo" image="/title-img-registration.png"/>
      <RegistrationForm />
      <RegistrationFAQ />
    </div>
  );
};

export default Inscrebete;
